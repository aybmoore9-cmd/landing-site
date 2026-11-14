"use server";

import { getSupabase } from "@/lib/supabase";
import { SOURCES } from "@/lib/sources";

export type SignupState = { ok: boolean; message: string } | null;

type Request = {
  name: string;
  email: string;
  phone: string;
  address: string;
  source: string | null;
  notes: string | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = "cmpholidaylighting@gmail.com";

function field(formData: FormData, key: string, max: number) {
  // Collapse whitespace/newlines so values are safe in an email subject or body.
  return String(formData.get(key) ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

async function notify(req: Request, repeat: boolean) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set; skipping email notification");
    return;
  }
  const text = [
    repeat ? "A returning visitor sent another quote request:" : "New quote request from the website:",
    "",
    `Name:    ${req.name}`,
    `Phone:   ${req.phone}`,
    `Email:   ${req.email}`,
    `Address: ${req.address}`,
    `Heard via: ${req.source ?? "-"}`,
    `Notes:   ${req.notes ?? "-"}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM ?? "CMP Website <onboarding@resend.dev>",
        to: [NOTIFY_TO],
        reply_to: req.email,
        subject: `${repeat ? "Repeat" : "New"} quote request: ${req.name}`,
        text,
      }),
    });
    if (!res.ok) console.error("email notification failed", res.status, await res.text());
  } catch (err) {
    console.error("email notification failed", err);
  }
}

export async function joinWaitlist(_prev: SignupState, formData: FormData): Promise<SignupState> {
  const req: Request = {
    name: field(formData, "name", 100),
    email: field(formData, "email", 254).toLowerCase(),
    phone: field(formData, "phone", 30),
    address: field(formData, "address", 200),
    source: null,
    notes: field(formData, "notes", 500) || null,
  };
  const source = field(formData, "source", 40);
  req.source = (SOURCES as readonly string[]).includes(source) ? source : null;

  if (!req.name) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!EMAIL_RE.test(req.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  const digits = req.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    return { ok: false, message: "Please enter a valid phone number, including area code." };
  }
  if (req.address.length < 5) {
    return { ok: false, message: "Please enter your street address." };
  }

  const { error } = await getSupabase().from("waitlist").insert(req);

  if (error) {
    if (error.code === "23505") {
      // Same email already on file: still pass the new details along so nothing is lost.
      await notify(req, true);
      return { ok: true, message: "We already have your info. We'll be in touch soon!" };
    }
    console.error("waitlist insert failed", error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  await notify(req, false);
  return { ok: true, message: "Thanks! We'll contact you soon with your free quote." };
}

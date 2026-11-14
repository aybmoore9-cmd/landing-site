"use server";

import { getSupabase } from "@/lib/supabase";

export type SignupState = { ok: boolean; message: string } | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(_prev: SignupState, formData: FormData): Promise<SignupState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim().slice(0, 100) || null;

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const { error } = await getSupabase().from("waitlist").insert({ email, name });

  if (error) {
    if (error.code === "23505") {
      return { ok: true, message: "We already have your info. We'll be in touch soon!" };
    }
    console.error("waitlist insert failed", error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return { ok: true, message: "Thanks! We'll contact you soon with your free quote." };
}

"use client";

import { useActionState } from "react";
import { joinWaitlist, type SignupState } from "@/app/actions";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState<SignupState, FormData>(joinWaitlist, null);

  if (state?.ok) {
    return <p className="success" role="status">{state.message}</p>;
  }

  return (
    <form action={formAction} className="form">
      <input name="name" type="text" placeholder="Your name" required maxLength={100} autoComplete="name" aria-label="Name" />
      <input name="phone" type="tel" placeholder="Phone number" required maxLength={30} autoComplete="tel" aria-label="Phone number" />
      <input name="email" type="email" placeholder="you@example.com" required maxLength={254} autoComplete="email" aria-label="Email" />
      <input name="address" type="text" placeholder="Street address" required maxLength={200} autoComplete="street-address" aria-label="Street address" />
      <button type="submit" disabled={pending}>{pending ? "Sending…" : "Get my free quote"}</button>
      {state && !state.ok && <p className="error" role="alert">{state.message}</p>}
    </form>
  );
}

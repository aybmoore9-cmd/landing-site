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
      <input name="name" type="text" placeholder="Your name (optional)" autoComplete="name" />
      <input name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
      <button type="submit" disabled={pending}>{pending ? "Joining…" : "Join the waitlist"}</button>
      {state && !state.ok && <p className="error" role="alert">{state.message}</p>}
    </form>
  );
}

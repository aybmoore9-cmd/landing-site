"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { joinWaitlist, type SignupState } from "@/app/actions";
import { SOURCES } from "@/lib/sources";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState<SignupState, FormData>(joinWaitlist, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.ok) router.push(state.repeat ? "/thank-you?returning=1" : "/thank-you");
  }, [state, router]);

  if (state?.ok) {
    return (
      <div className="success" role="status">
        <p className="success-title">{state.message}</p>
        <p>One of us will call or text you within 24 hours to set up a free measurement.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="form">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" placeholder="(317) 555-0123" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="address">Street address</label>
        <input id="address" name="address" type="text" required maxLength={200} autoComplete="street-address" placeholder="123 Main St, Franklin" />
      </div>
      <div className="field field-wide">
        <label htmlFor="source">How did you hear about us?</label>
        <select id="source" name="source" defaultValue="">
          <option value="">Choose one (optional)</option>
          {SOURCES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="notes">
          Anything we should know? <span className="optional">(optional)</span>
        </label>
        <textarea id="notes" name="notes" rows={3} maxLength={500} placeholder="Two-story house, trees you'd like lit, best time to reach you…" />
      </div>
      <button type="submit" className="btn btn-primary field-wide" disabled={pending}>
        {pending ? "Sending…" : "Get my free quote"}
      </button>
      <p className="form-note field-wide">Free, no obligation. We&apos;ll reach out within 24 hours.</p>
      {state && !state.ok && (
        <p className="error field-wide" role="alert">{state.message}</p>
      )}
    </form>
  );
}

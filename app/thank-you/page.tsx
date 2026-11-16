import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Thank You | CMP Holiday Lighting",
  robots: { index: false, follow: false },
};

const PHONE_DISPLAY = "317-750-7610";
const PHONE_TEL = "+13177507610";

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ returning?: string }> }) {
  const { returning } = await searchParams;

  return (
    <main className="thanks">
      <div className="wrap thanks-inner">
        <Link href="/" className="logo thanks-logo">
          <Logo />
        </Link>

        <p className="kicker">Got it</p>
        <h1>{returning ? "Welcome back. We have your info." : "Thanks. We'll be in touch soon."}</h1>
        <p className="lead">
          {returning
            ? "We already had your details on file, and we've passed along your latest request."
            : "Your quote request came through. Here's what happens next."}
        </p>

        <ol className="thanks-steps">
          <li>
            <strong>We text or call within a day</strong>
              <span>One of us will set up a time to measure. You don't need to be home.</span>
          </li>
          <li>
            <strong>You get an exact price</strong>
              <span>Starts at $400. Lights, install, fixes, takedown and storage are all included.</span>
          </li>
          <li>
            <strong>We hang your lights</strong>
              <span>We fix anything that goes out, then take it all down in January.</span>
          </li>
        </ol>

        <div className="thanks-actions">
          <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">Call {PHONE_DISPLAY}</a>
          <a href={`sms:${PHONE_TEL}`} className="btn btn-ghost">Text us</a>
        </div>
        <Link href="/" className="thanks-back">Back to the homepage</Link>
      </div>
    </main>
  );
}

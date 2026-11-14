import type { Metadata } from "next";
import Link from "next/link";

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
          <span className="logo-name">CMP</span>
          <span className="logo-sub">Holiday Lighting</span>
        </Link>

        <p className="kicker">Request received</p>
        <h1>{returning ? "Welcome back. We have your info." : "Thank you. We'll be in touch soon."}</h1>
        <p className="lead">
          {returning
            ? "We already had your details on file, and we've passed along your latest request."
            : "Your free quote request is in. Here's what happens next."}
        </p>

        <ol className="thanks-steps">
          <li>
            <span className="step-num">01</span>
            <div>
              <strong>We reach out within 24 hours</strong>
              <span>One of us will call or text you to set up a quick, free measurement.</span>
            </div>
          </li>
          <li>
            <span className="step-num">02</span>
            <div>
              <strong>You get a clear price</strong>
              <span>Full service starts at $400, with lights, installation, maintenance, takedown and storage included.</span>
            </div>
          </li>
          <li>
            <span className="step-num">03</span>
            <div>
              <strong>We light up your home</strong>
              <span>We install, keep it shining all season and take everything down in January.</span>
            </div>
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

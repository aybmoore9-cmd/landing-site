import Image from "next/image";
import heroImage from "@/public/hero-example.jpg";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import Estimator from "@/components/Estimator";
import { PACKAGES } from "@/lib/pricing";
import { TOWNS } from "@/lib/towns";

const PHONE_DISPLAY = "317-750-7610";
const PHONE_TEL = "+13177507610";
const EMAIL = "cmpholidaylighting@gmail.com";
const AREAS = ["Franklin", "Greenwood", "Whiteland", "New Whiteland", "Bargersville", "Center Grove", "South Indianapolis"];

const included = [
  ["Commercial-grade LED lights", "We supply everything. You never buy, untangle or store a strand."],
  ["Custom fit to your home", "Every run is measured and cut for your roofline, trees and landscaping."],
  ["Professional installation", "Safe, clean and secure. No ladders for you."],
  ["Free bulb fixes all season", "If a section goes out, text us and we'll fix it at no charge."],
  ["Takedown in January", "We come back after the holidays and take everything down."],
  ["Storage until next year", "We keep your lights safe, labeled and ready for next season."],
];

const steps = [
  ["Request a free quote", "Fill out the short form or give us a call. It takes about 30 seconds."],
  ["We measure and price it", "We stop by, measure your home and give you a clear price. No obligation."],
  ["We light it up", "We install, keep it shining all season, and take it down in January."],
];

const reasons = [
  ["Full-service installation", "We supply the lights and handle the whole install. No ladders, no tangled cords, no trips to the store."],
  ["Custom design for your home", "Every job is planned around your roofline, trees and landscaping."],
  ["Local and easy to reach", "Run by three Franklin locals. Sign up and we'll contact you with a free quote."],
];

const faqs = [
  ["How much does it cost?", "Full-service installation starts at $400. Your exact price depends on the size of your home and what you'd like lit. We'll measure and give you a clear quote for free."],
  ["Do I need to buy my own lights?", "No. We supply all the lights and supplies. That's part of the service, so there's nothing for you to buy or store."],
  ["What's included in the price?", "The lights, custom fitting, installation, free bulb fixes all season, takedown in January, and storage until next year."],
  ["What if some lights go out?", "Call or text us and we'll come fix it at no charge for the rest of the season."],
  ["When do the lights come down?", "We take everything down in January and store it for you until next season."],
  ["What areas do you serve?", `We're based in Franklin and serve ${AREAS.slice(1).join(", ")}. Not sure if you're in range? Just ask.`],
  ["How soon can you install?", "We're booking installs now. Request your quote early for the best choice of install dates."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "CMP Holiday Lighting",
  description: "Professional Christmas light installation for homes in the Franklin, Indiana area. We bring the lights, you enjoy the glow.",
  telephone: PHONE_TEL,
  email: EMAIL,
  url: "https://landing-site-nine-sable.vercel.app",
  address: { "@type": "PostalAddress", addressLocality: "Franklin", addressRegion: "IN", addressCountry: "US" },
  areaServed: AREAS.map((name) => ({ "@type": "City", name: `${name}, IN` })),
  priceRange: "From $400",
  makesOffer: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Christmas light installation" } },
};

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="check" aria-hidden="true">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="banner">
        <span><strong>Now booking</strong> 2026 installations</span>
        <span>Franklin · Greenwood · Whiteland · Bargersville</span>
      </div>

      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="logo">
            <span className="logo-name">CMP</span>
            <span className="logo-sub">Holiday Lighting</span>
          </a>
          <nav className="nav">
            <a href="#included">What&apos;s included</a>
            <a href="#packages">Packages</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header-cta">
            <a href={`tel:${PHONE_TEL}`} className="header-phone">{PHONE_DISPLAY}</a>
            <a href="#quote" className="btn btn-primary btn-sm">Free quote</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media">
            <Image
              src={heroImage}
              alt="Single-story home at dusk outlined in warm-white C9 Christmas lights with lit bushes and a wreath"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="hero-img"
            />
            <span className="hero-caption">Example design</span>
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Franklin, Indiana</p>
              <h1>
                Your home, <em>lit</em> for the holidays.
              </h1>
              <p className="lead">
                Professional Christmas light installation for homes in the Franklin, Indiana area. We bring the lights,
                you enjoy the glow.
              </p>
              <div className="price-tag">
                <strong>Full service from $400</strong>
                <span>Lights, installation, maintenance, takedown and storage</span>
              </div>
              <div className="hero-ctas">
                <a href="#quote" className="btn btn-primary">Get my free quote</a>
                <a href={`sms:${PHONE_TEL}`} className="btn btn-ghost">Text us</a>
              </div>
              <p className="hero-note">We respond within 24 hours.</p>
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Why homeowners choose us">
          <ul className="wrap trust-inner">
            <li>Locally owned in Franklin</li>
            <li>Commercial-grade LED</li>
            <li>Maintained all season</li>
            <li>Takedown &amp; storage included</li>
          </ul>
        </section>

        <section id="included" className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">One simple price</p>
              <h2>Everything included. Nothing to buy.</h2>
              <p className="section-lead">
                Our full-service price covers the whole season, from the first bulb to the last box, with no add-ons
                required.
              </p>
            </div>
            <div className="included-grid">
              <ul className="included-list">
                {included.map(([title, body]) => (
                  <li key={title}>
                    <Check />
                    <div>
                      <strong>{title}</strong>
                      <span>{body}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <aside className="price-card">
                <p className="price-card-label">Full-service installation</p>
                <p className="price-card-price">
                  <span>from</span> $400
                </p>
                <p className="price-card-sub">Priced by the size of your home. Free measurement and quote, no obligation.</p>
                <a href="#quote" className="btn btn-primary btn-block">Get my free quote</a>
                <a href={`tel:${PHONE_TEL}`} className="price-card-call">or call {PHONE_DISPLAY}</a>
              </aside>
            </div>
          </div>
        </section>

        <section id="packages" className="section section-alt">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Packages</p>
              <h2>Choose your look</h2>
              <p className="section-lead">Every package includes the lights, installation, free bulb fixes, takedown and storage.</p>
            </div>
            <div className="packages">
              {PACKAGES.map((p) => (
                <div key={p.name} className={`package${"featured" in p && p.featured ? " package-featured" : ""}`}>
                  {"featured" in p && p.featured && <span className="package-badge">Most popular</span>}
                  <h3>{p.name}</h3>
                  <p className="package-price">{p.price}</p>
                  <p className="package-blurb">{p.blurb}</p>
                  <ul>
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a href="#estimate" className={`btn ${"featured" in p && p.featured ? "btn-primary" : "btn-ghost"} btn-block`}>Estimate my price</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="estimate" className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Instant estimate</p>
              <h2>See your price in seconds</h2>
              <p className="section-lead">Answer three quick questions for an estimated range. We confirm the exact price after a free measurement.</p>
            </div>
            <Estimator />
          </div>
        </section>

        <section id="how" className="section section-alt">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">How it works</p>
              <h2>Three simple steps</h2>
            </div>
            <ol className="steps">
              {steps.map(([title, body], i) => (
                <li key={title}>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Why CMP</p>
              <h2>Local, hassle-free holiday lighting</h2>
            </div>
            <div className="cards">
              {reasons.map(([title, body]) => (
                <div key={title} className="card">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="section section-quote">
          <div className="wrap quote-inner">
            <div className="quote-copy">
              <p className="kicker">Free quote</p>
              <h2>Let&apos;s light up your home</h2>
              <p>
                Tell us a little about your home and we&apos;ll get back to you within 24 hours with a free,
                no-obligation quote.
              </p>
              <ul className="quote-points">
                <li><Check /> Full service from $400</li>
                <li><Check /> We supply all the lights</li>
                <li><Check /> Takedown &amp; storage included</li>
              </ul>
              <p className="quote-alt">
                Prefer to talk? Call or text <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </p>
            </div>
            <div className="quote-form">
              <SignupForm />
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="wrap faq-wrap">
            <div className="section-head">
              <p className="kicker">Questions</p>
              <h2>Frequently asked</h2>
            </div>
            <div className="faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt areas">
          <div className="wrap">
            <p className="kicker">Service area</p>
            <h2>Proudly serving Johnson County</h2>
            <ul className="area-list">
              {AREAS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="final-cta">
          <div className="wrap">
            <h2>Skip the ladder this year.</h2>
            <p>Full-service Christmas lights from $400. We handle everything.</p>
            <a href="#quote" className="btn btn-primary">Get my free quote</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <p className="logo-name">CMP Holiday Lighting</p>
            <p className="footer-tag">Professional Christmas light installation in Franklin, Indiana</p>
            <p className="footer-links">
              {TOWNS.map((t) => (
                <Link key={t.slug} href={`/christmas-lights/${t.slug}`}>Christmas lights in {t.name}</Link>
              ))}
            </p>
          </div>
          <div className="footer-contact">
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <p className="wrap footer-copy">© {new Date().getFullYear()} CMP Holiday Lighting</p>
      </footer>

      <nav className="mobile-bar" aria-label="Quick contact">
        <a href={`tel:${PHONE_TEL}`}>Call</a>
        <a href={`sms:${PHONE_TEL}`}>Text</a>
        <a href="#quote" className="mobile-bar-primary">Free quote</a>
      </nav>
    </>
  );
}

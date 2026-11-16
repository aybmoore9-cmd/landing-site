import Image from "next/image";
import heroImage from "@/public/hero-example.jpg";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import Estimator from "@/components/Estimator";
import Logo from "@/components/Logo";
import LightString from "@/components/LightString";
import { PACKAGES } from "@/lib/pricing";
import { TOWNS } from "@/lib/towns";

const PHONE_DISPLAY = "317-750-7610";
const PHONE_TEL = "+13177507610";
const EMAIL = "cmpholidaylighting@gmail.com";
const AREAS = ["Franklin", "Greenwood", "Whiteland", "New Whiteland", "Bargersville", "Center Grove", "South Indianapolis"];

const season = [
  ["Now", "Quote", "Text us or fill out the form. We come measure. You don't have to be home."],
  ["Late Nov to Dec", "Install", "We hang everything, plug it into a timer and make sure it all works before we leave."],
  ["All season", "Fixes", "A bulb or strand goes out? Text us. We come back and fix it, no charge."],
  ["January", "Takedown", "We take it all down, label it for your house and store it until next year."],
];

const faqs = [
  ["How much does it cost?", "Expect roughly $400 to $1,000 for most one-story homes. It's priced by how many feet of roofline we light, plus any bushes or trees. Try the estimator above, or we'll measure for free and give you an exact number."],
  ["Do I need to buy lights?", "No. We bring commercial-grade LED lights, clips, cords and a timer. It's all included, and we store it for you after the season."],
  ["Is this permanent lighting?", "No. We do traditional Christmas lights. They clip on for the season and come down in January, so there are no tracks, no drilling and nothing left on your house."],
  ["What if something stops working?", "Text us. We fix it free for the rest of the season."],
  ["When do you take them down?", "In January. We'll text you the day before. You don't need to be home."],
  ["What areas do you cover?", `We're based in Franklin and also do ${AREAS.slice(1).join(", ")}. If you're close to those, ask anyway.`],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "CMP Holiday Lighting",
  description: "Christmas light installation for homes in Franklin, Indiana and nearby towns. Lights, installation, fixes, takedown and storage included.",
  telephone: PHONE_TEL,
  email: EMAIL,
  url: "https://landing-site-nine-sable.vercel.app",
  address: { "@type": "PostalAddress", addressLocality: "Franklin", addressRegion: "IN", addressCountry: "US" },
  areaServed: AREAS.map((name) => ({ "@type": "City", name: `${name}, IN` })),
  priceRange: "From $400",
  makesOffer: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Christmas light installation" } },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="banner">
        Booking 2026 installs now. Questions? Text <a href={`sms:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
      </div>

      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="logo">
            <Logo />
          </a>
          <nav className="nav">
            <a href="#prices">Prices</a>
            <a href="#estimate">Estimate</a>
            <a href="#season">How it works</a>
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
              <h1>
                Your home, <span className="glow">lit</span> for the holidays.
              </h1>
              <p className="lead">
                We hang your Christmas lights, fix them if anything goes out, and take them down in January. We bring
                the lights. You stay off the ladder.
              </p>
              <p className="hero-price">
                <strong>From $400</strong> with everything included
              </p>
              <div className="hero-ctas">
                <a href="#quote" className="btn btn-primary">Get a free quote</a>
                <a href={`sms:${PHONE_TEL}`} className="btn btn-ghost">Text us</a>
              </div>
              <p className="hero-note">Traditional Christmas lights, up for the season and down in January. Franklin, Greenwood, Whiteland and Bargersville.</p>
            </div>
          </div>
        </section>

        <LightString />

        <section className="section note-section">
          <div className="wrap note-grid">
            <h2>A note from us</h2>
            <div className="note">
              <p>
                CMP is three friends from Franklin, and this is our first season. We answer our own phone, we do every
                install ourselves, and if a strand goes out in December, one of us comes back to fix it.
              </p>
              <p>
                We&apos;d rather do a smaller number of houses really well. If that sounds good to you, send us a
                text.
              </p>
              <p className="signoff">The CMP crew</p>
            </div>
          </div>
        </section>

        <section id="prices" className="section section-alt">
          <div className="wrap prices-grid">
            <div>
              <h2>What it costs</h2>
              <p className="section-lead">
                One price covers the whole season. It includes the lights, clips, cords and timer, installation, free
                fixes, January takedown and storage until next year.
              </p>
              <p className="prices-fine">
                Bigger home or something custom? We price by the foot ($5.50 per foot of roofline) plus bushes and
                trees. The measurement and quote are free.
              </p>
            </div>
            <ul className="price-list">
              {PACKAGES.map((p) => {
                const featured = "featured" in p && p.featured;
                return (
                  <li key={p.name} className={featured ? "featured" : undefined}>
                    <div className="price-row">
                      <h3>{p.name}</h3>
                      <span className="dots" aria-hidden="true" />
                      <span className="price">{p.price}</span>
                    </div>
                    <p>
                      {p.items.join(". ")}.
                      {featured && <span className="tag">Most people pick this</span>}
                    </p>
                  </li>
                );
              })}
              <li className="price-list-cta">
                <a href="#estimate" className="btn btn-ghost">Estimate my house</a>
              </li>
            </ul>
          </div>
        </section>

        <section id="estimate" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Ballpark your price</h2>
              <p className="section-lead">Pick what fits your house. We&apos;ll confirm the real number when we measure.</p>
            </div>
            <Estimator />
          </div>
        </section>

        <section id="quote" className="section section-quote">
          <div className="wrap quote-inner">
            <div className="quote-copy">
              <h2>Get a free quote</h2>
              <p>
                Send us your info and one of us will text or call within a day to set up a time to measure. No
                pressure, no obligation.
              </p>
              <p className="quote-alt">
                Rather just talk? Call or text <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
              </p>
            </div>
            <div className="quote-form">
              <SignupForm />
            </div>
          </div>
        </section>

        <section id="season" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>How the season goes</h2>
            </div>
            <ol className="season">
              {season.map(([when, title, body]) => (
                <li key={title}>
                  <span className="season-when">{when}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section section-alt">
          <div className="wrap faq-wrap">
            <h2>Questions people ask</h2>
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

        <section className="final-cta">
          <LightString className="light-string-top" />
          <div className="wrap">
            <h2>Skip the ladder this year.</h2>
            <p>We&apos;re booking installs now in {AREAS.slice(0, 5).join(", ")} and nearby.</p>
            <a href="#quote" className="btn btn-primary">Get a free quote</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <p className="footer-name">CMP Holiday Lighting</p>
            <p className="footer-tag">Christmas light installation, based in Franklin, Indiana</p>
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

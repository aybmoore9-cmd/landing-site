import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import heroImage from "@/public/hero-example.jpg";
import { TOWNS, getTown } from "@/lib/towns";

const PHONE_DISPLAY = "317-750-7610";
const PHONE_TEL = "+13177507610";
const SITE = "https://landing-site-nine-sable.vercel.app";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }): Promise<Metadata> {
  const town = getTown((await params).town);
  if (!town) return {};
  const title = `Christmas Light Installation in ${town.short} | CMP Holiday Lighting`;
  const description = `Full-service Christmas light installation in ${town.name}, Indiana from $400. Lights, installation, bulb fixes, takedown and storage included.`;
  return {
    title,
    description,
    alternates: { canonical: `/christmas-lights/${town.slug}` },
    openGraph: { title, description, type: "website", url: `${SITE}/christmas-lights/${town.slug}` },
  };
}

const included = [
  "Commercial-grade LED lights, supplied by us",
  "Custom fit to your roofline",
  "Professional installation",
  "Free bulb fixes all season",
  "Takedown in January",
  "Storage until next year",
];

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const town = getTown((await params).town);
  if (!town) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Christmas light installation",
    name: `Christmas light installation in ${town.short}`,
    provider: { "@type": "HomeAndConstructionBusiness", name: "CMP Holiday Lighting", telephone: PHONE_TEL, url: SITE },
    areaServed: { "@type": "City", name: town.short },
    offers: { "@type": "Offer", priceCurrency: "USD", price: "400", description: "Full-service installation starting price" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="header">
        <div className="wrap header-inner">
          <Link href="/" className="logo">
            <span className="logo-name">CMP</span>
            <span className="logo-sub">Holiday Lighting</span>
          </Link>
          <div className="header-cta">
            <a href={`tel:${PHONE_TEL}`} className="header-phone">{PHONE_DISPLAY}</a>
            <Link href="/#quote" className="btn btn-primary btn-sm">Free quote</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="town-hero">
          <div className="wrap town-hero-inner">
            <div>
              <p className="eyebrow">{town.short}</p>
              <h1>Christmas light installation in {town.name}</h1>
              <p className="lead">{town.intro}</p>
              <div className="price-tag">
                <strong>Full service from $400</strong>
                <span>Lights, installation, maintenance, takedown and storage</span>
              </div>
              <div className="hero-ctas">
                <Link href="/#quote" className="btn btn-primary">Get my free quote</Link>
                <a href={`sms:${PHONE_TEL}`} className="btn btn-ghost">Text us</a>
              </div>
            </div>
            <div className="town-photo">
              <Image src={heroImage} alt="Home outlined in warm-white Christmas lights at dusk" placeholder="blur" sizes="(max-width: 960px) 100vw, 520px" />
              <span className="hero-caption">Example design</span>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap town-body">
            <div>
              <p className="kicker">Local service</p>
              <h2>Hassle-free holiday lighting for {town.name}</h2>
              <p className="section-lead">{town.local}</p>
            </div>
            <ul className="included-list town-included">
              {included.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 20 20" className="check" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" />
                    <path d="M5.5 10.5l3 3 6-6.5" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div><strong>{item}</strong></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="wrap faq-wrap">
            <div className="section-head">
              <p className="kicker">Questions</p>
              <h2>{town.name} FAQ</h2>
            </div>
            <div className="faq">
              {town.faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="wrap">
            <h2>Skip the ladder this year.</h2>
            <p>Full-service Christmas lights in {town.name} from $400.</p>
            <Link href="/#quote" className="btn btn-primary">Get my free quote</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <p className="logo-name">CMP Holiday Lighting</p>
            <p className="footer-tag">Professional Christmas light installation in Franklin, Indiana</p>
            <p className="footer-links">
              <Link href="/">Franklin</Link>
              {TOWNS.map((t) => (
                <Link key={t.slug} href={`/christmas-lights/${t.slug}`}>{t.name}</Link>
              ))}
            </p>
          </div>
          <div className="footer-contact">
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <a href="mailto:cmpholidaylighting@gmail.com">cmpholidaylighting@gmail.com</a>
          </div>
        </div>
        <p className="wrap footer-copy">© {new Date().getFullYear()} CMP Holiday Lighting</p>
      </footer>

      <nav className="mobile-bar" aria-label="Quick contact">
        <a href={`tel:${PHONE_TEL}`}>Call</a>
        <a href={`sms:${PHONE_TEL}`}>Text</a>
        <Link href="/#quote" className="mobile-bar-primary">Free quote</Link>
      </nav>
    </>
  );
}

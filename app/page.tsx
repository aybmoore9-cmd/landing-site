import SignupForm from "@/components/SignupForm";

const features = [
  {
    title: "Full-service installation",
    body: "We supply the lights and handle the whole install. No ladders, no tangled cords, no trips to the store.",
  },
  {
    title: "Custom design for your home",
    body: "Every job is planned around your roofline, trees and landscaping.",
  },
  {
    title: "Local and easy to reach",
    body: "Run by three Franklin locals. Sign up and we'll contact you with a free quote.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <span className="badge">CMP Holiday Lighting · Franklin, Indiana</span>
        <h1>Your home, lit for the holidays.</h1>
        <p className="lead">
          Professional Christmas light installation for homes in the Franklin, Indiana area. We bring the lights, you
          enjoy the glow.
        </p>
        <SignupForm />
      </section>

      <section className="features">
        {features.map((f) => (
          <div key={f.title} className="card">
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </section>

      <footer>
        CMP Holiday Lighting · <a href="tel:+13177507610">317-750-7610</a> ·{" "}
        <a href="mailto:cmpholidaylighting@gmail.com">cmpholidaylighting@gmail.com</a>
      </footer>
    </main>
  );
}

import SignupForm from "@/components/SignupForm";

const features = [
  { title: "Fast", body: "Built to get out of your way so you can focus on what matters." },
  { title: "Simple", body: "No clutter, no learning curve. It just works." },
  { title: "Yours", body: "Your data stays private and under your control." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <span className="badge">Coming soon</span>
        <h1>Something great is on the way.</h1>
        <p className="lead">
          Replace this line with a one-sentence pitch for your product. Sign up to be the first to know when we launch.
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

      <footer>© {new Date().getFullYear()} Your Company</footer>
    </main>
  );
}

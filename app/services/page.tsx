import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="section">
      <p className="eyebrow">SERVICES</p>
      <h1>Selected AI work.</h1>
      <p className="hero-copy">Initial focus: AI engineering, AI automation and AI prototyping.</p>
      <Link className="text-link" href="/">← Back home</Link>
    </main>
  );
}

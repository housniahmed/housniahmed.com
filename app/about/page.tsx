import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="section">
      <p className="eyebrow">ABOUT</p>
      <h1>From engineering to AI.</h1>
      <p className="hero-copy">A concise professional narrative will connect engineering, entrepreneurship, research and AI engineering.</p>
      <Link className="text-link" href="/">← Back home</Link>
    </main>
  );
}

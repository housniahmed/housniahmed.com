import Link from "next/link";

export default function NowPage() {
  return (
    <main className="section">
      <p className="eyebrow">NOW</p>
      <h1>What I&apos;m building now.</h1>
      <p className="hero-copy">Current focus, active builds and research will be maintained here as verified, time-sensitive information.</p>
      <Link className="text-link" href="/">← Back home</Link>
    </main>
  );
}

import Link from "next/link";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/ai-os", label: "AI OS" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ahmed El-Housni home">
        <span className="brand-mark">AH</span>
        <span>Ahmed El-Housni</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/contact">
        <span>Let&apos;s talk</span>
        <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

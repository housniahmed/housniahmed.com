import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">AHMED EL-HOUSNI</p>
          <p className="footer-statement">
            AI engineering, intelligent systems and practical automation.
          </p>
        </div>
        <Link className="footer-arrow" href="/contact" aria-label="Contact Ahmed">
          ↗
        </Link>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ahmed El-Housni</span>
        <div className="footer-links">
          <Link href="/resume">Resume</Link>
          <Link href="/about">About</Link>
          <Link href="/now">Now</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

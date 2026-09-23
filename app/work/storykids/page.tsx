import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

const stack = [
  ["Product", "Personalized digital storytelling"],
  ["Platform", "WordPress"],
  ["Commerce", "Stripe / WooCommerce"],
  ["Acquisition", "Meta Ads · content · landing pages"],
  ["Analytics", "GA4 · Meta Pixel"],
  ["Markets", "Europe · Morocco"],
];

const productLayers = [
  ["01", "Story", "A personalized narrative built around the child, family and a real-life idea or memory."],
  ["02", "Characters", "Family photos become references for coherent illustrated characters throughout the story."],
  ["03", "Experience", "The product extends beyond a static book with visual, audio and conversion experiences."],
  ["04", "Commerce", "Separate market journeys connect European checkout and Morocco-first WhatsApp conversion."],
];

const lessons = [
  ["The product is the system", "The experience is not just the final ebook. It includes the brief, personalization, review, payment, delivery and follow-up."],
  ["Proof should arrive early", "The Mission Cafard example became a concrete demonstration of what the product can create, rather than an abstract promise."],
  ["Markets need different paths", "Europe and Morocco use different conversion mechanics, so the site architecture keeps their journeys distinct."],
  ["Measurement follows the journey", "Analytics events are designed around meaningful product and commerce states rather than page views alone."],
];

export default function StoryKidsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="case-hero section-shell story-hero">
        <div className="case-kicker"><span>02</span><span>CASE STUDY · DIGITAL PRODUCT</span></div>
        <div className="case-hero-grid">
          <div>
            <h1>StoryKids</h1>
            <p className="case-hero-lead">
              Building a personalized storytelling product where AI-assisted
              creation, product experience, commerce and acquisition meet.
            </p>
            <div className="case-actions">
              <a className="button button-dark" href="https://www.story-kidz.com/" target="_blank" rel="noreferrer">
                Visit StoryKids <span>↗</span>
              </a>
              <Link className="button button-light" href="/work">Back to work</Link>
            </div>
          </div>
          <div className="case-fact-card">
            <span>PRODUCT</span><strong>Personalized children's stories</strong>
            <span>MARKETS</span><strong>Europe · Morocco</strong>
            <span>ROLE</span><strong>Product · marketing · automation · technical execution</strong>
          </div>
        </div>
      </section>

      <section className="story-demo section-shell">
        <div className="story-demo-card">
          <div className="story-cover">
            <div className="story-cover-inner">
              <span>STORY KIDS</span>
              <strong>Mission<br />Cafard</strong>
              <small>Une aventure familiale transformée en histoire.</small>
            </div>
          </div>
          <div className="story-demo-copy">
            <p className="eyebrow">01 — THE PRODUCT</p>
            <h2>Start with a real memory. Turn it into a story.</h2>
            <p>
              Mission Cafard is used as a product demonstration: a real family
              adventure transformed into a personalized story experience,
              including illustrated characters and original audio.
            </p>
            <p>
              It makes the product tangible. Instead of asking a parent to
              imagine what “personalized” means, the example shows the journey
              from a small everyday event to a finished creative artifact.
            </p>
          </div>
        </div>
      </section>

      <section className="case-dark story-architecture">
        <div className="section-shell">
          <div className="case-section-head inverse">
            <p className="eyebrow">02 — PRODUCT ARCHITECTURE</p>
            <h2>A creative product with a complete customer journey behind it.</h2>
            <p>
              The visible story is only one layer. The project also requires a
              reliable path from acquisition to personalization, payment,
              production, validation and delivery.
            </p>
          </div>

          <div className="story-layer-grid">
            {productLayers.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section section-shell">
        <div className="case-section-head">
          <p className="eyebrow">03 — THE EXPERIENCE</p>
          <h2>From family photos to a coherent illustrated world.</h2>
          <p>
            The product workflow uses family photos as references for the
            characters, then carries those visual characteristics through the
            story. The objective is consistency and recognition: the child
            should be able to see familiar people inside the fictional world.
          </p>
        </div>

        <div className="story-flow">
          <article><span>01</span><strong>Share</strong><p>Photos, names and the memory or idea behind the story.</p></article>
          <article><span>02</span><strong>Create</strong><p>Story development and illustrated character direction.</p></article>
          <article><span>03</span><strong>Review</strong><p>A validation step before the final creative output.</p></article>
          <article><span>04</span><strong>Deliver</strong><p>The finished personalized digital experience.</p></article>
        </div>
      </section>

      <section className="story-commerce">
        <div className="section-shell">
          <div className="story-commerce-grid">
            <div>
              <p className="eyebrow">04 — COMMERCE & GROWTH</p>
              <h2>One product, two market journeys.</h2>
              <p>
                The project separates the European and Moroccan journeys rather
                than forcing the same conversion mechanism onto both audiences.
              </p>
            </div>
            <div className="market-cards">
              <article>
                <span>EUROPE</span>
                <strong>Landing page → checkout → personalization</strong>
                <p>European offers use an online payment path.</p>
              </article>
              <article>
                <span>MOROCCO</span>
                <strong>Landing page → WhatsApp → assisted conversion</strong>
                <p>The Morocco journey is designed around direct conversation.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section section-shell">
        <div className="case-section-head">
          <p className="eyebrow">05 — TECHNICAL FOUNDATION</p>
          <h2>Enough infrastructure to make the creative product measurable.</h2>
        </div>
        <div className="stack-grid">
          {stack.map(([title, value]) => <div key={title}><span>{title}</span><strong>{value}</strong></div>)}
        </div>
        <p className="story-footnote">
          The project repository documents the current WordPress, commerce and
          analytics state separately from future improvements. This case study
          intentionally does not present unverified integrations or revenue
          metrics as completed results.
        </p>
      </section>

      <section className="case-section section-shell story-lessons">
        <div className="case-section-head">
          <p className="eyebrow">06 — WHAT THIS PROJECT TAUGHT</p>
          <h2>Creative products still need systems thinking.</h2>
        </div>
        <div className="lesson-grid">
          {lessons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="case-cta story-cta">
        <div className="section-shell">
          <p className="eyebrow">07 — PROJECT</p>
          <h2>Design the experience, then build the system that can deliver it.</h2>
          <div className="case-actions">
            <a className="button button-dark" href="https://www.story-kidz.com/" target="_blank" rel="noreferrer">Explore StoryKids <span>↗</span></a>
            <Link className="button button-light" href="/contact">Discuss a product <span>↗</span></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

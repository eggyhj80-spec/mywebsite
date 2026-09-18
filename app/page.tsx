"use client";

import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Case studies", "#case-studies"],
  ["AI & GEO", "#ai-geo"],
];

const strengths = [
  { number: "8+", label: "years across global tech, e-commerce & education" },
  { number: "$100K", label: "monthly paid-search budget managed" },
  { number: "2.9×", label: "Meta Ads ROAS at PositiveMedia" },
  { number: "40%", label: "developer engagement growth at Intel" },
];

const roles = [
  {
    company: "PositiveMedia",
    website: "https://thelight.com.au",
    dates: "Feb 2026 — Present",
    role: "Digital Marketing",
    summary: "Digital engagement, SEO-led content, Meta and Google Ads, and automated email journeys for audience and donor growth.",
  },
  {
    company: "RL Education",
    website: "https://rleducation.com.au",
    dates: "May 2025 — Jan 2026",
    role: "Marketing Manager",
    summary: "End-to-end growth strategy across paid, organic, CRM and social to grow enrolments, pipeline and revenue.",
  },
  {
    company: "Interhampers Australia",
    website: "https://interhampers.com.au",
    dates: "Dec 2024 — May 2025",
    role: "Digital & Performance Marketing",
    summary: "Performance and demand generation across Google and Meta, alongside SEO, CRO, lifecycle and product acquisition.",
  },
  {
    company: "Intel",
    website: "https://www.intel.com/content/www/us/en/developer/overview.html",
    dates: "Aug 2012 — Sep 2024",
    role: "Marketing Manager · APAC & Global Markets",
    summary: "Global GTM, demand generation and digital strategy for developer and ecosystem programs spanning AI, cloud and emerging technology.",
  },
];

const cases = [
  {
    index: "01",
    tag: "Paid media · Fundraising",
    title: "A more efficient donor acquisition engine",
    body: "Reworked Meta targeting and non-brand search at PositiveMedia, then used Looker Studio reporting to direct spend towards high-performing keywords and placements.",
    results: ["2.9 ROAS on Meta Ads", "2.6 campaign ROAS in non-peak periods", "44.8% of donations driven by Google Ad Grants"],
  },
  {
    index: "02",
    tag: "Performance · E-commerce",
    title: "More conversions, lower acquisition cost",
    body: "Combined paid-media management with SEO, CRO, landing-page and lifecycle improvements for Interhampers Australia.",
    results: ["+35% paid-media conversions", "−20% CPA", "+25% email open rate · +15% CTR"],
  },
  {
    index: "03",
    tag: "Demand generation · Education",
    title: "Growing high-intent demand through the funnel",
    body: "Owned paid, organic, CRM and social marketing at RL Education, connecting SEO and content work with nurture timing and sales handover.",
    results: ["+15% organic traffic in 3 months", "+10% enquiry-to-enrolment conversion", "+20% social audience · +25% engagement"],
  },
  {
    index: "04",
    tag: "Global GTM · Developer ecosystem",
    title: "Developer growth at global scale",
    body: "Led global demand generation, SEO, content, email and social programs at Intel, with full-funnel reporting across APAC and global markets.",
    results: ["+40% developer engagement", "+35% organic traffic", "25+ global events · 5,000+ developers engaged"],
  },
];

const capabilities = ["Full-funnel strategy", "Paid media optimisation", "SEO / GEO / CRO", "CRM & lifecycle", "GA4 & attribution", "AI workflows & agents"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jin Hao home">JH<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <i /> <i />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map(([name, href]) => <a key={name} href={href} onClick={closeMenu}>{name}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <span>↗</span></a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <p className="eyebrow reveal">Melbourne, Australia <span /> Available for senior opportunities</p>
        <div className="hero-grid">
          <div>
            <h1 className="reveal">Digital growth,<br /><em>made intentional.</em></h1>
            <p className="hero-copy reveal">Senior Digital &amp; Performance Marketing Manager shaping full-funnel growth at the intersection of performance, SEO/GEO, CRM and AI.</p>
            <div className="hero-actions reveal">
              <a className="button button-dark" href="#case-studies">Explore selected work <span>↓</span></a>
              <a className="text-link" href="#about">About Jin <span>→</span></a>
            </div>
          </div>
          <aside className="hero-note reveal">
              <p className="note-label">A considered approach</p>
              <p>Strategy is only useful when it moves a meaningful number. I build the systems that connect attention, intent and long-term customer value.</p>
          </aside>
        </div>
        <div className="marquee" aria-label="Core focus areas"><div>Performance <b>✦</b> Full funnel <b>✦</b> SEO / GEO <b>✦</b> CRM <b>✦</b> AI enablement <b>✦</b></div></div>
      </section>

      <section className="numbers-section">
        <div className="wrap numbers">
          {strengths.map((item) => <div className="metric" key={item.label}><strong>{item.number}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className="section wrap about" id="about">
        <div className="section-label"><span>01</span><p>About</p></div>
        <div className="about-content">
          <p className="large-copy">I turn complex marketing activity into <em>clear, measurable growth</em> — from the first search to the customer relationship that follows.</p>
          <div className="about-detail">
            <p>With 8+ years across global tech, e-commerce and education, I bring together channel depth and commercial thinking. My work spans demand generation, paid media, SEO/SEM, marketing automation, lifecycle strategy and sales enablement.</p>
            <p>I&apos;m particularly energised by the practical use of AI: building workflows, skills and agents that make marketing teams faster and more focused.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span>{capability}</div>)}
          </div>
        </div>
      </section>

      <section className="section wrap experience" id="experience">
        <div className="section-label"><span>02</span><p>Experience</p></div>
        <div className="roles">
          {roles.map((item, index) => <article className="role" key={item.company}>
            <span className="role-index">0{index + 1}</span>
            <div><h3><a href={item.website} target="_blank" rel="noreferrer">{item.company}<span aria-hidden="true">↗</span></a></h3><p className="role-title">{item.role}</p></div>
            <p className="role-summary">{item.summary}</p>
            <p className="role-date">{item.dates}</p>
          </article>)}
        </div>
      </section>

      <section className="section case-section" id="case-studies">
        <div className="wrap">
          <div className="section-label"><span>03</span><p>Selected case studies</p></div>
          <div className="case-intro"><h2>Results with<br /><em>context.</em></h2><p>A selection of work grounded in the outcomes recorded across my career.</p></div>
          <div className="case-grid">
            {cases.map((item) => <article className="case" key={item.index}>
              <div className="case-top"><span>{item.index}</span><span>{item.tag}</span></div>
              <h3>{item.title}</h3><p>{item.body}</p>
              <ul>{item.results.map((result) => <li key={result}>{result}<span>↗</span></li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section wrap ai-section" id="ai-geo">
        <div className="section-label"><span>04</span><p>AI &amp; GEO</p></div>
        <div className="ai-layout">
          <div><p className="eyebrow">The next layer of marketing</p><h2>Human judgement,<br /><em>amplified by AI.</em></h2></div>
          <div className="ai-copy"><p>My AI focus sits inside the marketing function, not beside it: using AI-powered workflow automations, skills and agents to streamline reporting, content production and marketing operations.</p><p>Alongside search optimisation, I bring a GEO mindset — creating clear, useful and technically sound content experiences that earn visibility across evolving discovery surfaces.</p></div>
        </div>
        <div className="ai-points">
          <div><span>01</span><h3>AI enablement</h3><p>Championing practical adoption across marketing workflows.</p></div>
          <div><span>02</span><h3>Workflow design</h3><p>Custom automations for reporting, content and marketing operations.</p></div>
          <div><span>03</span><h3>Search evolution</h3><p>SEO, GEO and conversion-focused content foundations.</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <p className="eyebrow">05 · Contact &amp; resume</p>
          <h2>Let&apos;s make the<br /><em>next move count.</em></h2>
          <div className="contact-bottom"><div><a className="email" href="mailto:eggyhj80@gmail.com">eggyhj80@gmail.com <span>↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/jin-hao-vic/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="/Jin-Hao-CV-Marketing-2026.docx" download>Download resume <span>↓</span></a></div></div><p>Melbourne, Australia<br />Senior digital marketing, performance and growth opportunities.</p></div>
        </div>
      </section>

      <footer className="footer wrap"><span>© {new Date().getFullYear()} Jin Hao</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

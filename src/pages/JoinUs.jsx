import { useState } from "react";
import "../styles/join.css";
import joinHero from "../assets/images/join/join-hero.png";
import joinWhyPhoto from "../assets/images/join/join-why-photo.png";
import joinCtaPhoto from "../assets/images/join/join-cta-photo.png";

const reasons = [
  {
    title: "Guidance Through Education",
    body: "Access curated resources to help individuals build strong foundations for lifelong commitment.",
  },
  {
    title: "Structured & Intentional Matching",
    body: "Our matchmaking emphasizes compatibility and shared values for meaningful connections.",
  },
  {
    title: "Mentorship & Community Support",
    body: "Get mentorship and community support, fostering a respectful and growth-focused environment.",
  },
  {
    title: "The Faith Based Connections",
    body: "We organize prayer retreats to deepen faith and strengthen our bonds.",
  },
];

const plans = [
  {
    key: "starter",
    title: "Starter",
    desc: "Begin your guided journey with essential access to the SMWAL platform.",
    monthly: 29,
    yearly: 24,
    save: "Save 17%",
    featured: false,
    button: "Get Started",
    benefits: [
      { text: "Create your intentional profile", included: true },
      { text: "Access guided matchmaking request", included: true },
      { text: "Basic mentorship resources", included: true },
      { text: "Community access", included: true },
      { text: "Educational content", included: false },
      { text: "Platform support", included: false },
    ],
  },
  {
    key: "guided",
    title: "Guided",
    desc: "Full access to mentorship, education, and structured matchmaking support.",
    monthly: 39,
    yearly: 33,
    save: "Save 15%",
    featured: true,
    button: "Choose Guided",
    benefits: [
      { text: "Everything in Starter", included: true },
      { text: "Full mentorship program access", included: true },
      { text: "Relationship & marriage preparation courses", included: true },
      { text: "Priority matchmaking consideration", included: true },
      { text: "Community events access", included: true },
      { text: "Priority support", included: true },
    ],
  },
  {
    key: "community",
    title: "Community Supporter",
    desc: "For members who want full access while supporting the mission and growth of SMWAL.",
    monthly: 49,
    yearly: 41,
    save: "Save 20%",
    featured: false,
    button: "Support & Join",
    benefits: [
      { text: "Everything in Guided plan", included: true },
      { text: "Priority mentorship sessions", included: true },
      { text: "Early access to new features", included: true },
      { text: "Exclusive community sessions", included: true },
      { text: "Support ministry expansion", included: true },
      { text: "Contributor recognition (optional)", included: true },
    ],
  },
];

function YoutubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.8a4.6 4.6 0 0 1-3.8-4.3H9.7v14.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1v-3a5.7 5.7 0 1 0 4.9 5.6V9.5a7.6 7.6 0 0 0 4 1.1V7.5a4.6 4.6 0 0 1-.1-1.7Z" />
    </svg>
  );
}

export default function JoinUs() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="jn-page">
      <nav className="jn-nav">
        <div className="jn-logo">
          <span className="jn-logo-icon"><span></span><span></span></span>
          <div className="jn-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="jn-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join" className="active">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <button className="jn-nav-cta">Download App</button>
      </nav>

      <div className="jn-hero">
        <img src={joinHero} alt="Members of the SMWAL community" />
      </div>

      <div className="jn-why-section">
        <div className="jn-why-image">
          <img src={joinWhyPhoto} alt="A couple's wedding day" />
        </div>

        <div>
          <span className="jn-eyebrow">Why Join Us?</span>
          <div className="jn-why-list">
            {reasons.map((reason, i) => (
              <div className="jn-why-card" key={reason.title}>
                <span className="jn-why-number">{i + 1}</span>
                <div className="jn-why-body">
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="jn-section">
        <span className="jn-eyebrow">The Pricing</span>
        <h2 className="jn-section-title">Simple and Transparent Pricing</h2>
        <p className="jn-section-subtitle">Choose a plan to begin your guided journey.</p>

        <div className="jn-pricing-toggle">
          <div className="jn-toggle-group">
            <button
              className={`jn-toggle-btn${billing === "monthly" ? " active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`jn-toggle-btn${billing === "yearly" ? " active" : ""}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly <span className="jn-toggle-save">Save 24%</span>
            </button>
          </div>
        </div>

        <div className="jn-pricing-grid">
          {plans.map((plan) => (
            <div className={`jn-price-card${plan.featured ? " featured" : ""}`} key={plan.key}>
              {plan.featured && <span className="jn-best-deal">↘ Best Deal</span>}
              <span className="jn-price-badge">{plan.save}</span>

              <h3 className="jn-price-title">{plan.title}</h3>
              <p className="jn-price-desc">{plan.desc}</p>

              <div className="jn-price-amount">
                ${billing === "monthly" ? plan.monthly : plan.yearly}
                <span>/Month</span>
              </div>

              <div className="jn-price-benefits-label">BENEFITS</div>

              <ul className="jn-price-list">
                {plan.benefits.map((b) => (
                  <li key={b.text} className={b.included ? "" : "muted"}>
                    <span className="jn-price-icon"></span>
                    {b.text}
                  </li>
                ))}
              </ul>

              <button className={`jn-price-btn${plan.featured ? " primary" : ""}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="jn-cta">
        <img className="jn-cta-bg" src={joinCtaPhoto} alt="" />
        <div className="jn-cta-content">
          <h2>Ready to begin your guided journey?</h2>
          <p>Access our full range of features through the SMWAL mobile application.</p>
          <div className="jn-cta-buttons">
            <button className="jn-btn-cta-primary">Get the App</button>
            <button className="jn-btn-cta-secondary">Join the Community</button>
          </div>
          <div className="jn-store-badges">
            <a href="#" className="jn-store-badge">
              <div className="jn-store-badge-text">
                <small>GET IT ON</small>
                <span>Google Play</span>
              </div>
            </a>
            <a href="#" className="jn-store-badge">
              <div className="jn-store-badge-text">
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="jn-footer">
        <ul className="jn-footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="jn-footer-bottom">
          <span className="jn-footer-copyright">© 2021 All Rights Reserved</span>
          <div className="jn-footer-socials">
            <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok"><TiktokIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
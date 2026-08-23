import { useState } from "react";
import "../styles/donations.css";
import donationsHero from "../assets/images/donations/donations-hero.png";
import donationsImpact from "../assets/images/donations/donations-impact.png";

const features = [
  {
    title: "Mentorship Programs",
    body: "Donations help provide guidance, counseling, and mentorship resources that prepare individuals for successful marriages.",
    icon: "book",
  },
  {
    title: "Guided Matchmaking",
    body: "Your support helps develop a matchmaking system focused on compatibility and long-term commitment.",
    icon: "heart",
  },
  {
    title: "Community & Education",
    body: "Contributions allow us to create educational resources, events, and community relationships that strengthen relationships and families.",
    icon: "book",
  },
];

const presetAmounts = [10, 25, 50, 100];

function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.2C.5 8.6 2.2 5 5.8 5c2 0 3.4 1 4.2 2.4C10.8 6 12.2 5 14.2 5c3.6 0 5.3 3.6 3.8 6.8C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

function FeatureIcon({ type }) {
  return type === "heart" ? <HeartIcon /> : <BookIcon />;
}

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("25");

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(String(amount));
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    console.log("Donating:", amount);
    // TODO: wire up Stripe checkout here
  };

  return (
    <div className="dn-page">
      <nav className="dn-nav">
        <div className="dn-logo">
          <span className="dn-logo-icon"><span></span><span></span></span>
          <div className="dn-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="dn-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations" className="active">Donations</a></li>
          <li><a href="/events">Events</a></li>
           <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
           
        </ul>

        <button className="dn-nav-cta">Support the Mission</button>
      </nav>

      <div className="dn-hero">
        <img className="dn-hero-bg" src={donationsHero} alt="" />
        <div className="dn-hero-overlay"></div>
        <div className="dn-hero-content">
          <h1>Your Support Fuels Our Community.</h1>
          <p>
            Donations directly support mentorship programs, educational resources,
            and the technological growth of our platform.
          </p>
          <div className="dn-hero-buttons">
            <button className="dn-btn-primary">Donate Now</button>
            <button className="dn-btn-secondary">Send Us a Message</button>
          </div>
        </div>
      </div>

      <div className="dn-impact-section">
        <span className="dn-eyebrow">The Impact</span>
        <h2 className="dn-impact-title">Supporting Meaningful Connections Through Guidance</h2>
        <p className="dn-impact-desc">
          Every contribution to SMWAL helps create a safe, structured, and mentorship-driven
          environment where individuals can prepare for and build lasting marriages rooted
          in shared values and purpose.
        </p>
        <button className="dn-btn-community">Join Our Community</button>

        <div className="dn-impact-image">
          <img src={donationsImpact} alt="A couple's wedding, part of the SMWAL community" />
        </div>

        <div className="dn-feature-grid">
          {features.map((feature) => (
            <div className="dn-feature-card" key={feature.title}>
              <span className="dn-feature-icon"><FeatureIcon type={feature.icon} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dn-contribute-section">
        <h2 className="dn-contribute-title">Make a Contribution</h2>
        <p className="dn-contribute-desc">
          Choose an amount to support the SMWAL mission. All donations are handled securely via Stripe.
        </p>

        <div className="dn-contribute-label">Custom Amount</div>
        <div className="dn-contribute-row">
          <input
            className="dn-contribute-input"
            type="number"
            min="1"
            value={customAmount}
            onChange={handleCustomChange}
            placeholder="Enter amount"
          />
          <button className="dn-contribute-submit" onClick={handleDonate}>
            Donate Via Stripe
          </button>
        </div>
        <p className="dn-contribute-hint">
          Even a small contribution helps someone find a meaningful and lasting marriage.
        </p>

        <div className="dn-amount-presets">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              className={`dn-amount-btn${selectedAmount === amount ? " active" : ""}`}
              onClick={() => handlePresetClick(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      <footer className="dn-footer">
        <ul className="dn-footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="dn-footer-bottom">
          <span className="dn-footer-copyright">© 2026 All Rights Reserved</span>
          <div className="dn-footer-socials">
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="TikTok">♪</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
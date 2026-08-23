import { useState } from "react";
import "../styles/home.css";
import hero1 from "../assets/images/home/hero-1.png";
import hero2 from "../assets/images/home/hero-2.png";
import hero3 from "../assets/images/home/hero-3.png";
import matchmakingImg from "../assets/images/home/purpose-matchmaking.png";
import mentorshipImg from "../assets/images/home/purpose-mentorship.png";
import communityImg from "../assets/images/home/purpose-community.png";
import lesson1 from "../assets/images/home/lesson-1.png";
import lesson2 from "../assets/images/home/lesson-2.png";
import lesson3 from "../assets/images/home/lesson-3.png";
import ctaBg from "../assets/images/home/cta-bg.png";

const purposeCards = [
  {
    img: matchmakingImg,
    title: "Guided Matchmaking",
    body: "Our guided matchmaking process focuses on compatibility, shared values, and long-term alignment — helping you find a partner with intention and clarity.",
    cta: "View Plans",
  },
  {
    img: mentorshipImg,
    title: "Mentorship & Education",
    body: "Access mentorship, education, and personal development designed to help you build a healthy, meaningful marriage.",
    cta: "Explore Resources",
  },
  {
    img: communityImg,
    title: "Community",
    body: "Join a growing community that believes in intentional relationships, strong families, and lifelong commitment built on shared values.",
    cta: "Join Community",
  },
];

const lessonCards = [
  {
    img: lesson1,
    title: "Understanding Intentional Relationships",
    body: "Learn the foundations of building purposeful and accountable connections.",
    type: "Audio Lesson",
    duration: "10 minutes",
  },
  {
    img: lesson2,
    title: "Preparing for Marriage Mindfully",
    body: "Readiness and self-awareness shape healthy relationships.",
    type: "Video Lesson",
    duration: "20 minutes",
  },
  {
    img: lesson3,
    title: "Communication with Integrity",
    body: "Explore honest communication in relationships.",
    type: "Video Lesson",
    duration: "25 minutes",
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

export default function Home() {
  const [billing, setBilling] = useState("monthly");

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleContactChange = (field) => (e) => {
    setContact({ ...contact, [field]: e.target.value });
  };

  const handleContactSubmit = () => {
    const errors = {};
    if (!contact.firstName.trim()) errors.firstName = "First name is required";
    if (!contact.lastName.trim()) errors.lastName = "Last name is required";
    if (!contact.email.trim()) errors.email = "Email is required";
    if (!contact.message.trim()) errors.message = "Message is required";
    setContactErrors(errors);
    if (Object.keys(errors).length === 0) {
      setContactSubmitted(true);
    }
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail.trim()) {
      setNewsletterEmail("");
    }
  };

  return (
    <div className="hm-page">
      <nav className="hm-nav">
        <div className="hm-logo">
          <span className="hm-logo-icon"><span></span><span></span></span>
          <div className="hm-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="hm-nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
          
        </ul>

        <button className="hm-nav-cta">Download App</button>
      </nav>

      <div className="hm-hero-wrap">
        <div className="hm-hero">
          <div className="hm-hero-copy">
            <h1>Building meaningful connections with purpose.</h1>
            <p>
              SMWAL is more than just a platform; it's a mission to foster intentional relationships
              through guided matchmaking, mentorship, and faith-aligned growth. We believe strong
              marriages don't happen by chance — they are built with intention, preparation, and the
              right support.
            </p>
            <div className="hm-hero-buttons">
              <button className="hm-btn-primary">Get the App</button>
              <button className="hm-btn-secondary">Support the Mission</button>
            </div>
            <div className="hm-store-badges">
              <a href="#" className="hm-store-badge">
            
                <div className="hm-store-badge-text">

                  <small>GET IT ON</small>
                  <span>Google Play</span>
                </div>
              </a>
              <a href="#" className="hm-store-badge">
                <div className="hm-store-badge-text">
                  <small>Download on the</small>
                  <span>App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="hm-collage">
            <img className="hm-collage-2" src={hero2} alt="" />
            <img className="hm-collage-3" src={hero3} alt="" />
            <img className="hm-collage-1" src={hero1} alt="" />
          </div>
        </div>
      </div>

      <div className="hm-section">
        <span className="hm-eyebrow">Our Purpose</span>
        <div className="hm-purpose-grid">
          {purposeCards.map((card) => (
            <div className="hm-purpose-card" key={card.title}>
              <img src={card.img} alt="" />
              <div className="hm-purpose-body">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <button className="hm-purpose-link">{card.cta} →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hm-section">
        <span className="hm-eyebrow">Our Curriculum</span>
        <h2 style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", margin: "0 0 10px" }}>
          Grow with Purpose
        </h2>
        <p style={{ color: "#a3a3ab", fontSize: 13, maxWidth: 480, margin: "0 0 28px" }}>
          Access structured lessons designed to guide you toward meaningful and intentional relationships.
        </p>
        <div className="hm-lessons-grid">
          {lessonCards.map((lesson) => (
            <div className="hm-lesson-card" key={lesson.title}>
              <img src={lesson.img} alt="" />
              <div className="hm-lesson-body">
                <h3>{lesson.title}</h3>
                <p>{lesson.body}</p>
                <div className="hm-lesson-meta">
                  <span className="hm-lesson-meta-item">
                    <span className="hm-lesson-dot"></span>{lesson.type}
                  </span>
                  <span className="hm-lesson-meta-item">
                    <span className="hm-lesson-dot"></span>{lesson.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hm-section">
        <span className="hm-eyebrow">The Pricing</span>
        <h2 style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", margin: "0 0 10px" }}>
          Simple and Transparent Pricing
        </h2>
        <p style={{ color: "#a3a3ab", fontSize: 13, margin: "0 0 28px" }}>
          Choose a plan to begin your guided journey.
        </p>

        <div className="hm-pricing-toggle">
          <div className="hm-toggle-group">
            <button
              className={`hm-toggle-btn${billing === "monthly" ? " active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`hm-toggle-btn${billing === "yearly" ? " active" : ""}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly <span className="hm-toggle-save">Save 24%</span>
            </button>
          </div>
        </div>

        <div className="hm-pricing-grid">
          {plans.map((plan) => (
            <div className={`hm-price-card${plan.featured ? " featured" : ""}`} key={plan.key}>
              {plan.featured && <span className="hm-best-deal">↘ Best Deal</span>}
              <span className="hm-price-badge">{plan.save}</span>

              <h3 className="hm-price-title">{plan.title}</h3>
              <p className="hm-price-desc">{plan.desc}</p>

              <div className="hm-price-amount">
                ${billing === "monthly" ? plan.monthly : plan.yearly}
                <span>/Month</span>
              </div>

              <div className="hm-price-benefits-label">BENEFITS</div>

              <ul className="hm-price-list">
                {plan.benefits.map((b) => (
                  <li key={b.text} className={b.included ? "" : "muted"}>
                    <span className="hm-price-icon"></span>
                    {b.text}
                  </li>
                ))}
              </ul>

              <button className={`hm-price-btn${plan.featured ? " primary" : ""}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hm-cta">
        <img className="hm-cta-bg" src={ctaBg} alt="" />
        <div className="hm-cta-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Take the first step toward a meaningful, guided, and faith-centered marriage
            journey supported by mentorship and intentional connections.
          </p>
          <div className="hm-cta-buttons">
            <button className="hm-btn-cta-primary">Join the Platform</button>
            <button className="hm-btn-cta-secondary">Support the Mission</button>
          </div>
        </div>
      </div>

      <div className="hm-contact-section">
        <div className="hm-contact-copy">
          <h2>A Community Built on Care and Respect</h2>
          <p>
            Every message matters to us. SMWAL is more than just a platform — it's a
            mission-driven community focused on helping individuals build meaningful and
            lasting marriages.
          </p>
          <button className="hm-nav-cta">Download the App</button>
        </div>

        <div className="hm-contact-form">
          <div className="hm-contact-title">Contact Us</div>

          <div className="hm-form-row">
            <div>
              <input
                className={`hm-form-input${contactErrors.firstName ? " error" : ""}`}
                placeholder="Enter First Name"
                value={contact.firstName}
                onChange={handleContactChange("firstName")}
              />
              {contactErrors.firstName && (
                <div className="hm-form-error">{contactErrors.firstName}</div>
              )}
            </div>
            <div>
              <input
                className={`hm-form-input${contactErrors.lastName ? " error" : ""}`}
                placeholder="Enter Last Name"
                value={contact.lastName}
                onChange={handleContactChange("lastName")}
              />
              {contactErrors.lastName && (
                <div className="hm-form-error">{contactErrors.lastName}</div>
              )}
            </div>
          </div>

          <input
            className={`hm-form-input${contactErrors.email ? " error" : ""}`}
            style={{ marginBottom: contactErrors.email ? 0 : 12 }}
            placeholder="Enter your email address"
            value={contact.email}
            onChange={handleContactChange("email")}
          />
          {contactErrors.email && (
            <div className="hm-form-error">{contactErrors.email}</div>
          )}

          <select
            className="hm-form-select"
            value={contact.subject}
            onChange={handleContactChange("subject")}
          >
            <option value="">Subject e.g. General Inquiry</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="partnership">Partnership</option>
          </select>

          <textarea
            className={`hm-form-textarea${contactErrors.message ? " error" : ""}`}
            placeholder="Write your message here"
            value={contact.message}
            onChange={handleContactChange("message")}
          />
          {contactErrors.message && (
            <div className="hm-form-error">{contactErrors.message}</div>
          )}

          {contactSubmitted ? (
            <div className="hm-form-success">Message sent successfully!</div>
          ) : (
            <button className="hm-form-submit" onClick={handleContactSubmit}>
              Send Message
            </button>
          )}
        </div>
      </div>

      <div className="hm-footer">
        <ul className="hm-footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
           <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <div className="hm-footer-newsletter">
          <p>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
          <div className="hm-newsletter-row">
            <input
              className="hm-newsletter-input"
              placeholder="Enter your email Address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <button className="hm-newsletter-btn" onClick={handleNewsletterSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="hm-footer-bottom">
        <span className="hm-footer-copyright">© 2026 All Rights Reserved</span>
        <div className="hm-footer-socials">
          <a href="#" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5a4.9 4.9 0 0 1 1.8 1.2 4.9 4.9 0 0 1 1.2 1.8c.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4a4.9 4.9 0 0 1-1.2 1.8 4.9 4.9 0 0 1-1.8 1.2c-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5a4.9 4.9 0 0 1-1.8-1.2 4.9 4.9 0 0 1-1.2-1.8c-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4a4.9 4.9 0 0 1 1.2-1.8A4.9 4.9 0 0 1 5.8 1.8c.4-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 .1 5.7.1 4.7.3 3.9.7A7 7 0 0 0 1.4 2.3 7 7 0 0 0 0 4.8c-.4.8-.6 1.8-.7 3.1C-.7 9.2-.7 9.6-.7 12.9c0 3.3 0 3.7.1 5 .1 1.3.3 2.3.7 3.1a7 7 0 0 0 1.5 2.5 7 7 0 0 0 2.5 1.5c.8.4 1.8.6 3.1.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.3 3.1-.7a7 7 0 0 0 2.5-1.5 7 7 0 0 0 1.5-2.5c.4-.8.6-1.8.7-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.7-3.1a7 7 0 0 0-1.5-2.5A7 7 0 0 0 20.1.7c-.8-.4-1.8-.6-3.1-.7C15.7 0 15.3 0 12 0Z"/>
            </svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.8a4.6 4.6 0 0 1-3.8-4H9.4v13.6a2.6 2.6 0 1 1-1.8-2.5v-3.4a5.9 5.9 0 1 0 5.1 5.9V9.1a7.9 7.9 0 0 0 4.6 1.5V7.2a4.6 4.6 0 0 1-.7-1.4Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
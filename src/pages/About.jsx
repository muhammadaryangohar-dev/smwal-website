import "../styles/about.css";
import aboutHero from "../assets/images/about/about-hero.png";
import aboutGroup from "../assets/images/about/about-group.png";
import teamMax from "../assets/images/about/team-max.png";
import teamElla from "../assets/images/about/team-ella.png";
import teamOliver from "../assets/images/about/team-oliver.png";
import teamHarry from "../assets/images/about/team-harry.png";
import impactWedding from "../assets/images/about/impact-wedding.png";
import experienceCouple from "../assets/images/about/experience-couple.png";

const team = [
  { img: teamMax, name: "Max Hunter", role: "Founder & Vision Lead", email: "Max@smwal.com" },
  { img: teamElla, name: "Ella Hunter-Ross", role: "Community & Partnerships", email: "Ella@smwal.com" },
  { img: teamOliver, name: "Oliver Hunter", role: "Platform & Experience", email: "Oliver@smwal.com" },
  { img: teamHarry, name: "Harry Bennett", role: "Mentorship & Growth", email: "Harry@smwal.com" },
];

const stats = [
  { number: "50K+", label: "Meaningful Connections" },
  { number: "70K+", label: "Engaged Users" },
  { number: "5K+", label: "Mentorship Sessions" },
  { number: "800+", label: "Successful Marriages" },
];

const features = [
  { title: "Mentor-supported journey", body: "Get guidance from mentors and support to help you grow and prepare for a lasting marriage.", icon: "book" },
  { title: "Structured matchmaking", body: "Our matchmaking focuses on compatibility and values, helping you connect with clarity and purpose.", icon: "person" },
  { title: "Faith-aligned environment", body: "Engage in a respectful space where connections are nurtured through shared beliefs and community support.", icon: "spark" },
];

function MailIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      <path d="M19 4l.7 1.6L21.3 6l-1.6.7L19 8.3l-.7-1.6L16.7 6l1.6-.7L19 4Z" />
    </svg>
  );
}
function FeatureIcon({ type }) {
  if (type === "book") return <BookIcon />;
  if (type === "spark") return <SparkIcon />;
  return <PersonIcon />;
}
function YoutubeIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" /></svg>;
}
function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" /></svg>;
}
function InstagramIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
function TiktokIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8a4.6 4.6 0 0 1-3.8-4.3H9.7v14.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1v-3a5.7 5.7 0 1 0 4.9 5.6V9.5a7.6 7.6 0 0 0 4 1.1V7.5a4.6 4.6 0 0 1-.1-1.7Z" /></svg>;
}

function RingsDivider() {
  return (
    <div className="ab-rings-divider" aria-hidden="true">
      <svg width="44" height="24" viewBox="0 0 44 24">
        <circle cx="16" cy="12" r="9" />
        <circle cx="28" cy="12" r="9" />
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <div className="ab-page">
      <nav className="ab-nav">
        <div className="ab-logo">
          <span className="ab-logo-icon"><span></span><span></span></span>
          <div className="ab-logo-text">
            <strong>Single &amp; Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="ab-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about" className="active">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <button className="ab-nav-cta">Download App</button>
      </nav>

      <div className="ab-hero">
        <img className="ab-hero-bg" src={aboutHero} alt="" />
        <div className="ab-hero-overlay"></div>
        <div className="ab-hero-content">
          <span className="ab-eyebrow">About SMWAL</span>
          <h1>Building marriages with intention, not chance.</h1>
          <p>
            A mission-driven platform dedicated to helping individuals build meaningful,
            guided, and faith-centered marriages through mentorship, education, and
            intentional connections.
          </p>
          <div className="ab-hero-buttons">
            <button className="ab-btn-primary">Get the App</button>
            <button className="ab-btn-secondary">Support the Mission</button>
          </div>
        </div>
      </div>

      <RingsDivider />

      <div className="ab-story">
        <span className="ab-eyebrow">Our Story</span>
        <p>
          SMWAL was created with a simple but powerful vision — to help individuals build
          meaningful and lasting marriages through guidance, preparation, and shared values.
        </p>
        <p>
          In a world of fast and often superficial connections, we saw the need for a
          structured and intentional approach to marriage. One that supports personal
          growth, mentorship, and compatibility before commitment. Today, SMWAL continues
          to grow as a trusted space for those seeking meaningful relationships and strong
          foundations for lifelong partnership.
        </p>

        <div className="ab-story-image">
          <img src={aboutGroup} alt="Community" />
        </div>
      </div>

      <div className="ab-section">
        <span className="ab-eyebrow">Get to Know Us</span>
        <p>
          SMWAL is built by a dedicated team committed to strengthening marriages and
          supporting individuals on their journey toward meaningful partnerships.
        </p>

        <div className="ab-team-grid">
          {team.map((member) => (
            <div className="ab-team-card" key={member.name}>
              <div className="ab-team-photo">
                <img src={member.img} alt={member.name} />
              </div>
              <h3 className="ab-team-name">{member.name}</h3>
              <p className="ab-team-role">{member.role}</p>
              <div className="ab-team-email">
                <span className="ab-team-email-icon"><MailIcon /></span>
                {member.email}
              </div>
            </div>
          ))}
        </div>
      </div>

      <RingsDivider />

      <div className="ab-impact">
        <span className="ab-eyebrow">Community Impact</span>
        <div className="ab-impact-image" style={{ marginTop: 16 }}>
          <img src={impactWedding} alt="A couple's wedding, part of the SMWAL community" />
          <p className="ab-impact-caption">Over 800 couples have married through the SMWAL community.</p>
        </div>
      </div>

      <div className="ab-stats-bar">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="ab-stat-number">{stat.number}</p>
            <p className="ab-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="ab-experience-section">
        <div className="ab-experience-copy">
          <span className="ab-eyebrow">The Experience</span>
          <h2>A Safe and Guided Experience</h2>
          <p>
            Every connection on SMWAL is guided with intention, accountability, and
            mentorship to ensure a respectful and meaningful journey.
          </p>

          <div className="ab-feature-list">
            {features.map((feature) => (
              <div className="ab-feature-card" key={feature.title}>
                <span className="ab-feature-icon"><FeatureIcon type={feature.icon} /></span>
                <div className="ab-feature-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ab-experience-image">
          <img src={experienceCouple} alt="A couple on the SMWAL journey" />
        </div>
      </div>

      <footer className="ab-footer">
        <ul className="ab-footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
            <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <div className="ab-footer-bottom">
          <span className="ab-footer-copyright">© 2026 All Rights Reserved</span>
          <div className="ab-footer-socials">
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
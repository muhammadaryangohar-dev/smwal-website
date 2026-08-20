import "../styles/about.css";
import aboutHero from "../assets/images/about/about-hero.png";
import aboutGroup from "../assets/images/about/about-group.png";

export default function About() {
  return (
    <div className="ab-page">
      <nav className="ab-nav">
        <div className="ab-logo">
          <span className="ab-logo-icon"><span></span><span></span></span>
          <div className="ab-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="ab-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about" className="active">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <button className="ab-nav-cta">Download App</button>
      </nav>

      <div className="ab-hero">
        <img className="ab-hero-bg" src={aboutHero} alt="" />
        <div className="ab-hero-overlay"></div>
        <div className="ab-hero-content">
          <h2>About SMWAL</h2>
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
      </div>
    </div>
  );
}
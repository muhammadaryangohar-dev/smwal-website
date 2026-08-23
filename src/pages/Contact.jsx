import { useState } from "react";
import "../styles/contact.css";

const subjectOptions = [
  "General Inquiry",
  "Membership Support",
  "Donations",
  "Partnerships",
  "Technical Issue",
  "Other",
];

function FlagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 3v18" />
      <path d="M4 4h13l-2.5 4L17 12H4" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message can't be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: wire up actual submit (API call / email service)
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="ct-page">
      <nav className="ct-nav">
        <div className="ct-logo">
          <span className="ct-logo-icon"><span></span><span></span></span>
          <div className="ct-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="ct-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/contact" className="active">Contact Us</a></li>
        </ul>

        <button className="ct-nav-cta">Download App</button>
      </nav>

      <div className="ct-hero">
        <div className="ct-hero-inner">
          <div className="ct-hero-copy">
            <h1>A Community Built on Care and Respect</h1>
            <p>
              Every message matters to us.
              <br />
              SMWAL is more than a platform — it's a mission-driven community
              focused on helping individuals build meaningful and lasting marriages.
            </p>
            <button className="ct-btn-primary">Download the App</button>
          </div>

          <form className="ct-form-card" onSubmit={handleSubmit} noValidate>
            <h2 className="ct-form-title">
              Contact Us
              <span className="ct-form-title-icon"><FlagIcon /></span>
            </h2>

            <div className="ct-form-row">
              <div>
                <input
                  className={`ct-form-input${errors.firstName ? " error" : ""}`}
                  type="text"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                />
                {errors.firstName && <div className="ct-form-error">{errors.firstName}</div>}
              </div>
              <div>
                <input
                  className={`ct-form-input${errors.lastName ? " error" : ""}`}
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                />
                {errors.lastName && <div className="ct-form-error">{errors.lastName}</div>}
              </div>
            </div>

            <input
              className={`ct-form-input${errors.email ? " error" : ""}`}
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange("email")}
              style={{ marginBottom: errors.email ? 0 : 12 }}
            />
            {errors.email && <div className="ct-form-error">{errors.email}</div>}

            <select
              className={`ct-form-select${formData.subject ? " filled" : ""}`}
              value={formData.subject}
              onChange={handleChange("subject")}
            >
              <option value="">Subject e.g. General Inquiry</option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.subject && <div className="ct-form-error">{errors.subject}</div>}

            <textarea
              className={`ct-form-textarea${errors.message ? " error" : ""}`}
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange("message")}
            />
            {errors.message && <div className="ct-form-error">{errors.message}</div>}

            {submitted && (
              <div className="ct-form-success">Thanks! Your message has been sent.</div>
            )}

            <button className="ct-form-submit" type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="ct-footer">
        <ul className="ct-footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donations</a></li>
          <li><a href="/events">Events</a></li>
            <li><a href="/learn">Learn</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="ct-footer-bottom">
          <span className="ct-footer-copyright">© 2026 All Rights Reserved</span>
          <div className="ct-footer-right">
            <div className="ct-chat-bubble">
              <span className="ct-chat-avatar p">P</span>
              <span className="ct-chat-avatar m">M</span>
            </div>
            <div className="ct-footer-socials">
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="TikTok">♪</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
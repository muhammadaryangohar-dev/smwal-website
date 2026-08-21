import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/events.css";
import communityHangout from "../assets/images/events/community-hangout.jpg";
import artWorkshop from "../assets/images/events/art-workshop.jpg";
import foodFestival from "../assets/images/events/food-festival.jpg";
import bookingConfirmedImg from "../assets/images/events/booking-confirmed.png";

const events = [
  {
    id: "community-hangout",
    title: "Community Hangout",
    price: "$15",
    meta: "Sat, Oct 26 · 1:00 PM · Greenfield Farm",
    image: communityHangout,
    description: "A guided in-person gathering organized by the ministry.",
    date: "Saturday, October 26, 2025",
    time: "Start: 1:00 PM | End: 6:00 PM",
    location: "Greenfield Farm",
    fee: "$15",
    expect: [
      "Guided group sessions",
      "Ministry-led teachings",
      "Safe and respectful interactions",
    ],
    cancellationPolicy:
      "Registrations are non-refundable unless the event is cancelled by the ministry.",
  },
  {
    id: "art-workshop",
    title: "Art Workshop",
    price: "$20",
    meta: "Sun, Oct 27 · 10:00 AM · City Gallery",
    image: artWorkshop,
    description: "A guided in-person gathering organized by the ministry.",
    date: "Sunday, October 27, 2025",
    time: "Start: 10:00 AM | End: 1:00 PM",
    location: "City Gallery",
    fee: "$20",
    expect: [
      "Guided group sessions",
      "Ministry-led teachings",
      "Safe and respectful interactions",
    ],
    cancellationPolicy:
      "Registrations are non-refundable unless the event is cancelled by the ministry.",
  },
  {
    id: "food-festival",
    title: "Food Festival",
    price: "$32",
    meta: "Fri, Nov 1 · 5:00 PM · Riverside Park",
    image: foodFestival,
    description: "A guided in-person gathering organized by the ministry.",
    date: "Friday, November 1, 2025",
    time: "Start: 5:00 PM | End: 9:00 PM",
    location: "Riverside Park",
    fee: "$32",
    expect: [
      "Guided group sessions",
      "Ministry-led teachings",
      "Safe and respectful interactions",
    ],
    cancellationPolicy:
      "Registrations are non-refundable unless the event is cancelled by the ministry.",
  },
];

// view: "list" | "detail" | "confirmation"
export default function Events() {
  const [view, setView] = useState("list");
  const [activeEvent, setActiveEvent] = useState(null);
  const navigate = useNavigate();

  const handleRegisterClick = (event) => {
    setActiveEvent(event);
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setActiveEvent(null);
    setView("list");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmPayment = () => {
    setView("confirmation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 const handleGoHome = () => {
  navigate("/");
};
  return (
    <div className="ev-page">
      <nav className="ev-nav">
        <div className="ev-logo">
          <span className="ev-logo-icon"><span></span><span></span></span>
          <div className="ev-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="ev-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/join">Join Us</a></li>
          <li><a href="/donations">Donate Us</a></li>
          <li><a href="/events" className="active">Events</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <button className="ev-nav-cta">Download App</button>
      </nav>

      {view === "detail" && activeEvent && (
        <EventDetail
          event={activeEvent}
          onBack={handleBackClick}
          onConfirm={handleConfirmPayment}
        />
      )}

      {view === "confirmation" && activeEvent && (
        <BookingConfirmation event={activeEvent} onGoHome={handleGoHome} />
      )}

      {view === "list" && (
        <>
          <div className="ev-hero">
            <h1>View Upcoming Events</h1>
            <p>
              Explore our upcoming ministry events designed to bring like-minded
              individuals together in a safe, guided, and faith-aligned setting.
            </p>

            <div className="ev-hero-buttons">
              <button className="ev-btn-primary">See Events</button>
              <button className="ev-btn-secondary">Support our Mission</button>
            </div>

            <div className="ev-store-badges">
              <a href="#" className="ev-store-badge">
                <span>▶</span>
                <span className="ev-store-badge-text">
                  <small>GET IT ON</small>
                  <span>Google Play</span>
                </span>
              </a>

              <a href="#" className="ev-store-badge">
                <span>🍎</span>
                <span className="ev-store-badge-text">
                  <small>Download on the</small>
                  <span>App Store</span>
                </span>
              </a>
            </div>
          </div>

          <div className="ev-section">
            <h2 className="ev-section-title">Connect Beyond the Screen</h2>

            <p className="ev-section-subtitle">
              Whether you're part of the app or visiting for the first time, you're welcome to join.
            </p>

            <div className="ev-grid">
              {events.map((event, index) => (
                <div className="ev-card" key={`${event.title}-${index}`}>
                  <div className="ev-card-image">
                    <img src={event.image} alt={event.title} />
                  </div>

                  <div className="ev-card-body">
                    <div className="ev-card-header">
                      <h3 className="ev-card-title">{event.title}</h3>
                      <span className="ev-card-price">{event.price}</span>
                    </div>

                    <p className="ev-card-meta">{event.meta}</p>

                    <button
                      className="ev-card-btn"
                      onClick={() => handleRegisterClick(event)}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <footer className="ev-footer">
        <div className="ev-footer-top">
          <ul className="ev-footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/join">Join Us</a></li>
            <li><a href="/donations">Donations</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="ev-footer-subscribe">
            <p className="ev-footer-subscribe-text">
              Subscribe to stay tuned for new web design and latest updates. Let's do it!
            </p>
            <div className="ev-footer-subscribe-form">
              <input
                type="email"
                placeholder="Enter your email Address"
                className="ev-footer-input"
              />
              <button className="ev-footer-subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="ev-footer-bottom">
          <span className="ev-footer-copyright">© 2021 All Rights Reserved</span>

          <div className="ev-footer-socials">
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="TikTok">♪</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EventDetail({ event, onBack, onConfirm }) {
  return (
    <div className="ev-detail">
      <button className="ev-detail-back" onClick={onBack}>
        ← Back to Events
      </button>

      <div className="ev-detail-hero">
        <img src={event.image} alt={event.title} />
        <div className="ev-detail-dots">
          <span className="ev-dot active"></span>
          <span className="ev-dot"></span>
          <span className="ev-dot"></span>
        </div>
      </div>

      <div className="ev-detail-body">
        <div className="ev-detail-header">
          <h2 className="ev-detail-title">{event.title}</h2>
          <button className="ev-detail-register-btn" onClick={onConfirm}>
            Register and Pay
          </button>
        </div>

        <p className="ev-detail-description">{event.description}</p>

        <div className="ev-detail-section">
          <span className="ev-detail-label">Date</span>
          <p className="ev-detail-value">{event.date}</p>
        </div>

        <div className="ev-detail-section">
          <span className="ev-detail-label">Time</span>
          <p className="ev-detail-value">{event.time}</p>
        </div>

        <div className="ev-detail-section">
          <span className="ev-detail-label">Location</span>
          <p className="ev-detail-value">{event.location}</p>
        </div>

        <div className="ev-detail-section">
          <span className="ev-detail-label">Event Fee</span>
          <p className="ev-detail-value">{event.fee}</p>
        </div>

        <div className="ev-detail-section">
          <span className="ev-detail-label">What to Expect</span>
          <ul className="ev-detail-list">
            {event.expect.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="ev-detail-section">
          <span className="ev-detail-label">Cancellation Policy</span>
          <p className="ev-detail-value">{event.cancellationPolicy}</p>
        </div>
      </div>
    </div>
  );
}

function BookingConfirmation({ event, onGoHome }) {
  return (
    <div className="ev-confirm-wrap">
      <div className="ev-confirm-card">
        <div className="ev-confirm-illustration">
          <img src={bookingConfirmedImg} alt="Booking confirmed" />
        </div>

        <div className="ev-confirm-title">
          Booking Confirmed!
          <span className="ev-confirm-check">✓</span>
        </div>

        <div className="ev-confirm-row">
          <span className="ev-confirm-label">Event</span>
          <span className="ev-confirm-value">{event.title}</span>
        </div>

        <div className="ev-confirm-row">
          <span className="ev-confirm-label">Date</span>
          <span className="ev-confirm-value">{event.date}</span>
        </div>

        <div className="ev-confirm-row">
          <span className="ev-confirm-label">Time</span>
          <span className="ev-confirm-value">{event.time}</span>
        </div>

        <div className="ev-confirm-row">
          <span className="ev-confirm-label">Location</span>
          <span className="ev-confirm-value">{event.location}</span>
        </div>

        <div className="ev-confirm-row ev-confirm-row-price">
          <div>
            <span className="ev-confirm-label">Total Price</span>
            <p className="ev-confirm-value">{event.fee}</p>
          </div>
          <span className="ev-confirm-paid-badge">Paid</span>
        </div>

        <button className="ev-confirm-home-btn" onClick={onGoHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/learn.css";
import { lessons } from "../data/lessons";

import userAvatar from "../assets/images/users/hunter-grohan.jpg";

const currentUser = {
  name: "Hunter Grohan",
  email: "Huntg@gmail.com",
  avatar: userAvatar,
};

const filters = [
  { key: "all", label: "All" },
  { key: "not_started", label: "Not Started" },
  { key: "in_progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

function statusLabel(status) {
  if (status === "not_started") return "Not started";
  if (status === "in_progress") return "In progress";
  return "Completed";
}

function ClockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function AudioIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Learn() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredLessons =
    activeFilter === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.status === activeFilter);

  return (
    <div className="lr-page">
      <nav className="lr-nav">
        <div className="lr-logo">
          <span className="lr-logo-icon"><span></span><span></span></span>
          <div className="lr-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="lr-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/join">Join Us</Link></li>
          <li><Link to="/donations">Donations</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/learn" className="active">Learn</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="lr-user-menu">
          <img className="lr-user-avatar" src={currentUser.avatar} alt={currentUser.name} />
          <div className="lr-user-info">
            <span className="lr-user-name">{currentUser.name}</span>
            <span className="lr-user-email">{currentUser.email}</span>
          </div>
          <span className="lr-user-chevron"><ChevronDownIcon /></span>
        </div>
      </nav>

      <div className="lr-header">
        <h1>Learn</h1>
        <div className="lr-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`lr-filter-btn${activeFilter === filter.key ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lr-grid">
        {filteredLessons.length === 0 && (
          <div className="lr-empty-state">No lessons in this category yet.</div>
        )}

        {filteredLessons.map((lesson) => (
          <Link to={`/learn/${lesson.id}`} className="lr-card" key={lesson.id}>
            <div className="lr-card-image">
              <img src={lesson.image} alt={lesson.title} />
              <span className={`lr-status-badge ${lesson.status}`}>
                {statusLabel(lesson.status)}
              </span>
            </div>
            <div className="lr-card-body">
              <h3 className="lr-card-title">{lesson.title}</h3>
              <p className="lr-card-desc">{lesson.description}</p>

              {lesson.status !== "not_started" && (
                <>
                  <div className="lr-progress-track">
                    <div
                      className="lr-progress-fill"
                      style={{ width: `${lesson.progress}%` }}
                    />
                  </div>
                  <div className="lr-progress-label">{lesson.progress}%</div>
                </>
              )}

              <div className="lr-card-meta">
                <span className="lr-meta-item">
                  <span className="lr-meta-icon">
                    {lesson.type === "Audio Lesson" ? <AudioIcon /> : <VideoIcon />}
                  </span>
                  {lesson.type}
                </span>
                <span className="lr-meta-item">
                  <span className="lr-meta-icon"><ClockIcon /></span>
                  {lesson.duration}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <footer className="lr-footer">
        <ul className="lr-footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/join">Join Us</Link></li>
          <li><Link to="/donations">Donations</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="lr-footer-bottom">
          <span className="lr-footer-copyright">© 2026 All Rights Reserved</span>
          <div className="lr-footer-socials">
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
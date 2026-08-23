import { useParams, Link } from "react-router-dom";
import "../styles/lesson-detail.css";
import { lessons } from "../data/lessons";
import userAvatar from "../assets/images/users/hunter-grohan.jpg";

const currentUser = {
  name: "Hunter Grohan",
  email: "Huntg@gmail.com",
  avatar: userAvatar,
};

function statusLabel(status) {
  if (status === "not_started") return "Not started";
  if (status === "in_progress") return "In Progress";
  return "Completed";
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function LessonDetail() {
  const { lessonId } = useParams();
  const lesson = lessons.find((l) => String(l.id) === lessonId);

  if (!lesson) {
    return (
      <div className="ld-page">
        <div className="ld-not-found">
          <p>Lesson not found.</p>
          <Link to="/learn">Back to Learn</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="ld-page">
      <nav className="ld-nav">
        <div className="ld-logo">
          <span className="ld-logo-icon"><span></span><span></span></span>
          <div className="ld-logo-text">
            <strong>Single & Married</strong>
            <span>WITH A LIFE</span>
          </div>
        </div>

        <ul className="ld-nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/join">Join Us</Link></li>
          <li><Link to="/donations">Donations</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/learn"className="active">Learn</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="ld-user-menu">
          <img className="ld-user-avatar" src={currentUser.avatar} alt={currentUser.name} />
          <div className="ld-user-info">
            <span className="ld-user-name">{currentUser.name}</span>
            <span className="ld-user-email">{currentUser.email}</span>
          </div>
          <span className="ld-user-chevron"><ChevronDownIcon /></span>
        </div>
      </nav>

      <div className="ld-hero">
        <img src={lesson.image} alt={lesson.title} />
      </div>

      <div className="ld-content">
        <div className="ld-info-card">
          <div className="ld-info-header">
            <h1>{lesson.title}</h1>
            <button className="ld-start-btn">Start Lesson</button>
          </div>
          <p className="ld-description">{lesson.description}</p>

          <div className="ld-field">
            <div className="ld-field-label">Status</div>
            <span className={`ld-status-badge ${lesson.status}`}>
              {statusLabel(lesson.status)}
            </span>
          </div>

          <div className="ld-field">
            <div className="ld-field-label">Value</div>
            <div className="ld-field-value">{lesson.value}</div>
          </div>

          <div className="ld-field">
            <div className="ld-field-label">Duration</div>
            <div className="ld-field-value">{lesson.duration}</div>
          </div>

          <div className="ld-field">
            <div className="ld-field-label">Format</div>
            <div className="ld-field-value">{lesson.format}</div>
          </div>

          <div className="ld-field">
            <div className="ld-field-label">What You'll Learn</div>
            <ol className="ld-learn-list">
              {lesson.learningPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ol>
          </div>

          <div className="ld-field">
            <div className="ld-field-label">Lesson Outline</div>
            <div className="ld-outline-grid">
              {lesson.outline.map((item, i) => (
                <div className="ld-outline-card" key={i}>
                  <img src={item.image} alt={item.title} />
                  <div className="ld-outline-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className={`ld-status-badge small ${item.status}`}>
                      {statusLabel(item.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
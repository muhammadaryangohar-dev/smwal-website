import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import loginPhoto from "../../assets/images/auth/login-photo.png";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEMO_EMAIL = "aryan@example.com";
const DEMO_PASSWORD = "messi123";

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeIcon({ off }) {
  return off ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.64v3h3.88c2.27-2.09 3.57-5.17 3.57-8.83Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58v-3.1H1.26a12 12 0 0 0 0 10.78l4.01-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.61l4.01 3.1C6.22 6.88 8.87 4.77 12 4.77Z"
      />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const errs = {};

    if (!EMAIL_RE.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }

    if (!form.password) {
      errs.password = "Enter your password.";
    }

    setErrors(errs);

    if (Object.keys(errs).length) {
      return;
    }

    if (
      form.email === DEMO_EMAIL &&
      form.password === DEMO_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setErrors({
        password: "Incorrect email or password.",
      });
    }
  }

  function handleGoogleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  }

  return (
    <div className="af-page">
      <div className="af-shell">
        <div className="af-photo">
          <img src={loginPhoto} alt="" />
        </div>

        <div className="af-card">
          <h1 className="af-card-title">Login to Continue</h1>

          <p className="af-card-subtitle">
            Sign in to continue your guided journey.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="af-field">
              <label className="af-label">Email</label>

              <div className="af-input-wrap">
                <span className="af-input-icon">
                  <MailIcon />
                </span>

                <input
                  className={`af-input${errors.email ? " error" : ""}`}
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {errors.email && (
                <p className="af-error-text">{errors.email}</p>
              )}
            </div>

            <div className="af-field">
              <label className="af-label">Password</label>

              <div className="af-input-wrap">
                <span className="af-input-icon">
                  <LockIcon />
                </span>

                <input
                  className={`af-input${errors.password ? " error" : ""}`}
                  type={showPw ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                  style={{ paddingRight: 40 }}
                />

                <button
                  type="button"
                  className="af-toggle-visibility"
                  onClick={() => setShowPw(!showPw)}
                  aria-label={
                    showPw ? "Hide password" : "Show password"
                  }
                >
                  <EyeIcon off={showPw} />
                </button>
              </div>

              {errors.password && (
                <p className="af-error-text">{errors.password}</p>
              )}
            </div>

            <div className="af-forgot-row">
              <button
                type="button"
                className="af-link-purple"
                onClick={() =>
                  alert(
                    "Forgot password feature is not available in this demo."
                  )
                }
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="af-button-primary"
            >
              Login
            </button>

            <div className="af-divider">OR</div>

            <button
              type="button"
              className="af-button-google"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon />
              Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import './Home.css';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // When Contact redirects here it passes { justSubmitted, firstName } via
  // router state. Copy that into local state so the banner survives a re-render
  // even after we clear the router state (which we do so a manual refresh of
  // Home doesn't show the banner again).
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    if (location.state?.justSubmitted) {
      setConfirmation({ firstName: location.state.firstName || '' });
      navigate('/', { replace: true, state: null });
    }
  }, [location.state, navigate]);

  return (
    <section className="home">
      {confirmation && (
        <div className="confirmation-banner" role="status" aria-live="polite">
          <span>
            Thanks{confirmation.firstName ? `, ${confirmation.firstName}` : ''} — your
            message was received. I'll get back to you shortly.
          </span>
          <button
            type="button"
            className="confirmation-close"
            aria-label="Dismiss confirmation"
            onClick={() => setConfirmation(null)}
          >
            ×
          </button>
        </div>
      )}

      <div className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Welcome</p>
          <h1>Hi, I'm Alex Bennett.</h1>
          <p className="lead">
            I design and build fast, accessible web experiences that turn ideas into
            products people enjoy using. Take a look around — the tour starts on the
            About page.
          </p>

          <div className="home-cta-row">
            <Link className="btn" to="/about">
              About Me
            </Link>
            <Link className="btn secondary" to="/projects">
              See Projects
            </Link>
          </div>
        </div>

        <div className="home-hero-art" aria-hidden="true">
          <Logo size={220} />
        </div>
      </div>

      <div className="card mission">
        <h2>Mission Statement</h2>
        <p>
          To craft honest, useful software — clean code paired with clear thinking —
          and to leave every project, teammate, and codebase a little better than I
          found it.
        </p>
      </div>
    </section>
  );
}

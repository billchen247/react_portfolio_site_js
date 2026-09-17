import headshotImage from '../assets/headshot.svg';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <h1 className="section-title">About Me</h1>

      <div className="about-grid">
        <img
          className="about-headshot"
          src={headshotImage}
          alt="Portrait of Alex Bennett"
          width={280}
          height={280}
        />

        <div>
          <h2 className="about-name">Alex Bennett</h2>
          <p className="about-tagline">Software developer · Web + mobile</p>

          <p>
            I'm a software developer who enjoys turning tricky problems into simple,
            polished user experiences. Over the past few years I've worked across the
            stack — building React front ends, Node services, and mobile apps — and
            picked up a deep appreciation for tests, thoughtful design, and shipping
            small.
          </p>

          <p>
            Outside of work I hike, read broadly, and volunteer teaching intro
            programming at the local library. I care about writing code that is kind
            to the next person who reads it.
          </p>

          {/*
            The PDF lives under /public so Vite serves it at the site root.
            "download" triggers save-as; target=_blank opens preview in a new tab.
          */}
          <a
            className="btn"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Résumé (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

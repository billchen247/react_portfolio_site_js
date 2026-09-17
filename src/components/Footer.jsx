import './Footer.css';

// Simple footer with copyright. Year updates automatically each render.
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>© {currentYear} Bill Chen. All rights reserved.</span>
        <span className="site-footer-meta">Built with React + Vite.</span>
      </div>
    </footer>
  );
}

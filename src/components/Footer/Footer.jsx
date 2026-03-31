import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com', short: 'li' },
  { label: 'GitHub', href: 'https://github.com', short: 'gh' },
  { label: 'LeetCode', href: 'https://leetcode.com', short: 'lc' },
];

const STACK_LINKS = [
  { label: 'Java & Spring Boot', href: '#skills' },
  { label: 'MySQL & JDBC', href: '#skills' },
  { label: 'REST API Design', href: '#skills' },
  { label: 'WebSockets', href: '#skills' },
  { label: 'Spring AI & LLMs', href: '#projects' },
];

export default function Footer() {
  const go = (href) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="footer__brand-mark">GD</div>
              <div className="footer__brand-name">Gourav Chandra Dey</div>
            </div>
            <p className="footer__brand-desc">
              Aspiring Backend Software Engineer. Building scalable Java & Spring Boot systems, one API at a time.
            </p>
            <div className="footer__brand-status">
              <span className="footer__status-dot" />
              Open to opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer__col-title">Navigation</div>
            <div className="footer__col-links">
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} className="footer__col-link" onClick={e => { e.preventDefault(); go(l.href); }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <div className="footer__col-title">Tech Stack</div>
            <div className="footer__col-links">
              {STACK_LINKS.map(l => (
                <a key={l.label} href={l.href} className="footer__col-link" onClick={e => { e.preventDefault(); go(l.href); }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Contact</div>
            <div className="footer__col-links">
              <a href="mailto:krgourav077@gmail.com" className="footer__col-link">krgourav077@gmail.com</a>
              <a href="tel:+916299038713" className="footer__col-link">+91 6299038713</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__col-link">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__col-link">GitHub</a>
              <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="footer__col-link">LeetCode</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            © {new Date().getFullYear()} <span>Gourav Chandra Dey</span>. All rights reserved.
          </div>

          <div className="footer__made">
            Built with <span className="footer__made-heart">♥</span> using React & Vite
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div className="footer__socials">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} title={s.label} target="_blank" rel="noreferrer" className="footer__social">
                  {s.short}
                </a>
              ))}
            </div>
            <button
              className="footer__top-btn"
              title="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

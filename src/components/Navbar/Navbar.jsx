import { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
    setOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <div className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="nav__logo-mark">GD</div>
          <div>
            <div className="nav__logo-text">Gourav Dey</div>
            <div className="nav__logo-sub">Backend Engineer</div>
          </div>
        </div>

        <div className="nav__links">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={`nav__link ${active === l.href ? 'active' : ''}`} onClick={e => go(e, l.href)}>
              {l.label}
            </a>
          ))}
          <div className="nav__status">
            <span className="nav__status-dot" />
            Open to work
          </div>
          <a href="#contact" className="nav__hire" onClick={e => go(e, '#contact')}>
            Hire Me ↗
          </a>
        </div>

        <button className={`nav__hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span className="nav__bar" /><span className="nav__bar" /><span className="nav__bar" />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'open' : ''}`}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav__link" onClick={e => go(e, l.href)}>{l.label}</a>
        ))}
        <a href="#contact" className="nav__hire" onClick={e => go(e, '#contact')}>Hire Me ↗</a>
      </div>
    </nav>
  );
}

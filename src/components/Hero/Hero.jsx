import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.css';

const ROLES = ['Backend Engineer', 'Java Developer', 'API Architect', 'Spring Boot Dev'];

const CODE_LINES = [
  { indent: 0, tokens: [{ t: 'comment', v: '// gourav-chandra-dey.java' }] },
  { indent: 0, tokens: [{ t: 'keyword', v: 'public class ' }, { t: 'class', v: 'GouravChandraDey' }, { t: 'plain', v: ' {' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'private final ' }, { t: 'class', v: 'String ' }, { t: 'plain', v: 'role = ' }, { t: 'string', v: '"Backend Engineer"' }, { t: 'plain', v: ';' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'private final ' }, { t: 'class', v: 'List' }, { t: 'plain', v: '<' }, { t: 'class', v: 'String' }, { t: 'plain', v: '> stack = ' }, { t: 'class', v: 'List' }, { t: 'plain', v: '.of(' }] },
  { indent: 2, tokens: [{ t: 'string', v: '"Java"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Spring Boot"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"MySQL"' }] },
  { indent: 1, tokens: [{ t: 'plain', v: ');' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'public ' }, { t: 'class', v: 'String ' }, { t: 'method', v: 'getStatus' }, { t: 'plain', v: '() {' }] },
  { indent: 2, tokens: [{ t: 'keyword', v: 'return ' }, { t: 'string', v: '"Open to opportunities 🚀"' }, { t: 'plain', v: ';' }] },
  { indent: 1, tokens: [{ t: 'plain', v: '}' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '}' }] },
];

const cls = { comment: 'c-comment', keyword: 'c-keyword', class: 'c-class', string: 'c-string', method: 'c-method', num: 'c-num', plain: 'c-plain' };
const indent = { 0: '', 1: 'c-indent-1', 2: 'c-indent-2' };

export default function Hero() {
  const typed = useTypewriter(ROLES, 72, 2100);

  return (
    <section className="hero" id="home">
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--a" />
      <div className="hero__orb hero__orb--b" />
      <div className="hero__orb hero__orb--c" />

      <div className="container hero__inner">
        {/* LEFT */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for full-time backend roles
          </div>

          <h1 className="hero__name">
            Gourav
            <span className="hero__name-accent"> Chandra Dey</span>
          </h1>

          <div className="hero__role-line">
            <span className="c-plain">&lt;</span>
            <span className="hero__role-typed">{typed}</span>
            <span className="hero__cursor" />
            <span className="c-plain">/&gt;</span>
          </div>

          <p className="hero__desc">
            Aspiring <strong>Backend Software Engineer</strong> specializing in{' '}
            <strong>Java & Spring Boot</strong>. I build scalable server-side
            architectures, secure REST APIs, and AI-powered backend systems using
            Spring AI and LLMs.
          </p>

          <div className="hero__ctas">
            <button className="btn btn-primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects ↓
            </button>
            <button className="btn btn-ghost" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let&apos;s Talk
            </button>
          </div>

          <div className="hero__socials">
            <span className="hero__social-label">find me on</span>
            <div className="hero__social-sep" />
            {[
              { label: 'LI', title: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'GH', title: 'GitHub', href: 'https://github.com' },
              { label: 'LC', title: 'LeetCode', href: 'https://leetcode.com' },
              { label: '@', title: 'Email', href: 'mailto:krgourav077@gmail.com' },
            ].map(s => (
              <a key={s.label} href={s.href} title={s.title} className="hero__social" target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Code Card */}
        <div className="hero__right">
          <div className="hero__code-card">
            <div className="hero__code-header">
              <div className="hero__code-dots">
                <div className="hero__code-dot" /><div className="hero__code-dot" /><div className="hero__code-dot" />
              </div>
              <span className="hero__code-filename">GouravChandraDey.java</span>
            </div>

            <div className="hero__code-body">
              {CODE_LINES.map((line, i) => (
                <div key={i} className={`hero__code-line ${indent[line.indent]}`}>
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={cls[tok.t]}>{tok.v}</span>
                  ))}
                </div>
              ))}
            </div>

            <div className="hero__stats-row">
              {[
                { num: '2+', label: 'Internships' },
                { num: '3+', label: 'Projects' },
                { num: '2026', label: 'Graduating' },
              ].map(s => (
                <div key={s.label} className="hero__stat">
                  <div className="hero__stat-num">{s.num}</div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-label">scroll</span>
      </div>
    </section>
  );
}

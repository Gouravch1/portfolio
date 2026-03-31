import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const CARDS = [
  { icon: '🔧', colorClass: 'about__card-icon--cyan', title: 'Scalable Backend Systems', body: 'Designing resilient Spring Boot services with clean architecture, proper layering, and optimized DB interactions.' },
  { icon: '🤖', colorClass: 'about__card-icon--violet', title: 'AI-Powered Applications', body: 'Using Spring AI to integrate LLMs into backend pipelines — from automated screening to real-time evaluation.' },
  { icon: '🔐', colorClass: 'about__card-icon--green', title: 'Secure RESTful APIs', body: 'Building production-grade APIs with RBAC, JWT, payment integrations, and robust error handling.' },
];

export default function About() {
  const { ref: leftRef, visible: lv } = useScrollReveal(0.12);
  const { ref: rightRef, visible: rv } = useScrollReveal(0.12);

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className={`reveal-left ${lv ? 'up' : ''}`} ref={leftRef}>
            <span className="eyebrow">About Me</span>
            <h2 className="section-title">Building the internet<br /><span className="grad">from the back</span></h2>

            <p className="about__subtitle" style={{ marginTop: 28 }}>
              I&apos;m <strong>Gourav Chandra Dey</strong>, a final-year CSE student at
              Dumka Engineering College graduating in 2026. I specialize in
              <strong> Java & Spring Boot</strong> backend development.
            </p>
            <p className="about__subtitle">
              Through two real-world internships and multiple personal projects, I&apos;ve
              built experience in scalable APIs, payment gateways, WebSocket systems, and
              <strong> AI-integrated backends</strong> using Spring AI.
            </p>

            <div className="about__highlight">
              <span className="about__highlight-icon">🎯</span>
              <div>
                <div className="about__highlight-title">What I&apos;m looking for</div>
                <div className="about__highlight-body">Entry-level backend developer roles at startups or mid-size IT companies where I can build impactful systems, grow fast, and contribute to a strong engineering culture.</div>
              </div>
            </div>

            <div className="about__edu">
              <div className="about__edu-icon">🎓</div>
              <div>
                <div className="about__edu-label">Education</div>
                <div className="about__edu-name">Dumka Engineering College</div>
                <div className="about__edu-deg">B.Tech in Computer Science & Engineering</div>
                <div className="about__edu-meta">
                  <span className="tag">2022 – 2026</span>
                  <span className="tag">Jharkhand, India</span>
                  <span className="tag tag--cyan">DSA · OOP · DBMS</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`reveal-right ${rv ? 'up' : ''}`} ref={rightRef}>
            <div className="about__cards">
              {CARDS.map(c => (
                <div key={c.title} className="about__card">
                  <div className={`about__card-icon ${c.colorClass}`}>{c.icon}</div>
                  <div>
                    <div className="about__card-title">{c.title}</div>
                    <div className="about__card-body">{c.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__metrics">
              {[{ num: '2', label: 'Internships' }, { num: '3+', label: 'Projects Built' }, { num: '2026', label: 'Graduating' }].map(m => (
                <div key={m.label} className="about__metric">
                  <div className="about__metric-num">{m.num}</div>
                  <div className="about__metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

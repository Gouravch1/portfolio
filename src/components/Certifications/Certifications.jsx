import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Certifications.css';

const CERTS = [
  { icon: '🎯', iconClass: 'cert-row__icon--green', name: 'Java Advanced Certification', issuer: 'GeeksforGeeks' },
  { icon: '🏆', iconClass: 'cert-row__icon--amber', name: 'Problem Solving Certification', issuer: 'HackerRank' },
  { icon: '⚙️', iconClass: 'cert-row__icon--cyan', name: 'Java Skill Test Certification', issuer: 'HackerRank' },
];

const ROADMAP = [
  { status: 'done', label: 'Core Java & OOP fundamentals' },
  { status: 'done', label: 'Spring Boot internship experience' },
  { status: 'active', label: 'DSA — sliding window, trees, graphs' },
  { status: 'active', label: 'System design basics' },
  { status: 'todo', label: 'Advanced Spring (Security, Cloud)' },
  { status: 'todo', label: 'First full-time backend role 🚀' },
];

export default function Certifications() {
  const { ref: leftRef, visible: lv } = useScrollReveal(0.12);
  const { ref: rightRef, visible: rv } = useScrollReveal(0.12);

  return (
    <section className="certs section" id="certifications">
      <div className="container">
        <div className="certs__layout">
          <div>
            <span className="eyebrow">Credentials</span>
            <h2 className="section-title" style={{ marginBottom: 36 }}>
              Certified &amp; <span className="grad">leveling up</span>
            </h2>

            <div className="certs__list" ref={leftRef}>
              {CERTS.map((c, i) => (
                <div
                  key={c.name}
                  className={`cert-row ${lv ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.13}s` }}
                >
                  <div className={`cert-row__icon ${c.iconClass}`}>{c.icon}</div>
                  <div className="cert-row__info">
                    <div className="cert-row__name">{c.name}</div>
                    <div className="cert-row__issuer">{c.issuer}</div>
                  </div>
                  <div className="cert-row__arrow">↗</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`certs__right reveal-right ${rv ? 'up' : ''}`} ref={rightRef}>
            <div className="certs__now">
              <div className="certs__now-label">
                <span />
                Currently grinding
              </div>
              <div className="certs__now-title">DSA → Core Java → Spring Boot</div>
              <div className="certs__now-body">
                Daily LeetCode in Java — sliding window, monotonic stacks, linked lists,
                and binary search. Building toward being fully interview-ready for backend roles.
              </div>
            </div>

            <div className="certs__roadmap">
              <div className="certs__roadmap-label">Learning Roadmap</div>
              <div className="certs__roadmap-steps">
                {ROADMAP.map((step, i) => (
                  <div key={i} className={`rm-step rm-step--${step.status}`}>
                    <div className={`rm-dot rm-dot--${step.status}`} />
                    {step.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

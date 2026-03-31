import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const SKILL_CARDS = [
  {
    variant: 'java',
    icon: '☕',
    title: 'Languages',
    chips: [
      { label: 'Java', hot: true }, { label: 'Core Java', hot: true },
      { label: 'Java 8+', hot: true }, { label: 'SQL', hot: false },
      { label: 'Streams & Lambdas', hot: false },
    ],
  },
  {
    variant: 'spring',
    icon: '🌿',
    title: 'Frameworks',
    chips: [
      { label: 'Spring Boot', hot: true }, { label: 'Spring AI', hot: true },
      { label: 'Spring Security', hot: false }, { label: 'REST API', hot: false },
      { label: 'WebSockets', hot: false }, { label: 'JDBC', hot: false },
    ],
  },
  {
    variant: 'db',
    icon: '🗄️',
    title: 'Database & DevOps',
    chips: [
      { label: 'MySQL', hot: true }, { label: 'Git', hot: false },
      { label: 'GitHub', hot: false }, { label: 'Postman', hot: false },
      { label: 'IntelliJ IDEA', hot: false },
    ],
  },
  {
    variant: 'core',
    icon: '🧠',
    title: 'CS Fundamentals',
    chips: [
      { label: 'DSA', hot: true }, { label: 'OOP', hot: true },
      { label: 'DBMS', hot: false }, { label: 'RBAC', hot: false },
      { label: 'Agile / Scrum', hot: false }, { label: 'REST Design', hot: false },
    ],
  },
];

const TOOLS = ['Cursor AI', 'Postman', 'IntelliJ IDEA', 'VS Code', 'GitHub', 'LeetCode', 'Maven', 'Docker (learning)'];

export default function Skills() {
  const { ref: headRef, visible: hv } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gv } = useScrollReveal(0.08);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className={`skills__head reveal ${hv ? 'up' : ''}`} ref={headRef}>
          <div>
            <span className="eyebrow">Technical Skills</span>
            <h2 className="section-title">What I <span className="grad">work with</span></h2>
          </div>
          <p className="skills__head-right">
            My core stack is <strong style={{color:'var(--text-1)'}}>Java + Spring Boot</strong> with MySQL.
            I actively practice DSA daily on LeetCode and am constantly deepening
            my understanding of clean backend architecture and system design.
          </p>
        </div>

        <div className="skills__grid" ref={gridRef}>
          {SKILL_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`skill-card skill-card--${card.variant} ${gv ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="skill-card__top">
                <div className="skill-card__icon">{card.icon}</div>
                <div>
                  <div className="skill-card__title">{card.title}</div>
                  <div className="skill-card__count">{card.chips.length} skills</div>
                </div>
              </div>
              <div className="skill-card__chips">
                {card.chips.map(c => (
                  <span key={c.label} className={`skill-chip ${c.hot ? 'skill-chip--hot' : ''}`}>{c.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`skills__belt reveal ${gv ? 'up' : ''}`} style={{ transitionDelay: '0.45s' }}>
          <span className="skills__belt-label">Tools & more</span>
          <div className="skills__belt-tools">
            {TOOLS.map(t => <span key={t} className="tool-chip">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

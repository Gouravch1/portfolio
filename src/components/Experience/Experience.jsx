import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

const EXP = [
  {
    emoji: '🚀',
    role: 'Backend Developer Intern',
    company: 'Systemic Altruism',
    type: 'Remote · Full-time',
    period: 'Jan – Mar 2025',
    bullets: [
      'Engineered backend services for a private analytics dashboard using Spring Boot and MySQL, improving scalability and data security protocols.',
      'Built server-side payment gateway integration with secure transaction flows, improving system data integrity end-to-end.',
      'Resolved critical production bugs within an Agile sprint cycle, boosting system reliability and reducing downtime.',
    ],
    tags: ['Spring Boot', 'MySQL', 'Agile', 'Payment Gateway', 'REST API', 'Security'],
  },
  {
    emoji: '💻',
    role: 'Java Development Intern',
    company: 'Ardent Computech Pvt. Ltd.',
    type: 'Remote · Internship',
    period: 'Jun – Jul 2024',
    bullets: [
      'Applied Core Java and JDBC to develop robust backend modules for data-driven applications.',
      'Implemented DAO pattern for clean separation of database logic, enabling efficient and reusable CRUD operations.',
    ],
    tags: ['Core Java', 'JDBC', 'DAO Pattern', 'MySQL', 'CRUD', 'OOP'],
  },
];

export default function Experience() {
  const { ref: leftRef, visible: lv } = useScrollReveal(0.12);
  const { ref: rightRef, visible: rv } = useScrollReveal(0.08);

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__layout">
          <div className={`experience__sticky reveal-left ${lv ? 'up' : ''}`} ref={leftRef}>
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">Where I&apos;ve <span className="grad">shipped things</span></h2>
            <p>Real-world backend engineering across two internships — from secure payment systems to scalable database-driven applications.</p>
            <a
              href="mailto:krgourav077@gmail.com"
              className="experience__sticky-cta"
            >
              📄 Download Resume ↗
            </a>
          </div>

          <div className="timeline" ref={rightRef}>
            {EXP.map((exp, i) => (
              <div
                key={exp.role}
                className={`tl-item ${rv ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.18}s` }}
              >
                <div className="tl-node">
                  <div className="tl-dot">{exp.emoji}</div>
                </div>
                <div className="tl-card">
                  <div className="tl-card__head">
                    <div className="tl-card__role">{exp.role}</div>
                    <div className="tl-card__period">{exp.period}</div>
                  </div>
                  <div className="tl-card__meta">
                    <span className="tl-card__company">{exp.company}</span>
                    <span className="tl-card__type">{exp.type}</span>
                  </div>
                  <div className="tl-card__bullets">
                    {exp.bullets.map((b, j) => <div key={j} className="tl-bullet">{b}</div>)}
                  </div>
                  <div className="tl-card__tags">
                    {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

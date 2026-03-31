import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

const PROJECTS = [
  {
    size: 'lg',
    icon: '🤖',
    label: 'Featured Project',
    title: 'AI-Integrated Job Portal',
    bullets: [
      'Built a full backend ecosystem for job matching with automated candidate screening and status tracking at scale.',
      'Integrated Spring AI to power an AI interviewer that processes candidate responses in real-time using LLMs.',
    ],
    stack: ['Spring Boot', 'Spring AI', 'MySQL', 'REST API', 'LLM'],
    gradVar: 'linear-gradient(90deg, #63b3ed, #b794f4)',
  },
  {
    size: 'lg',
    icon: '⚡',
    label: 'Featured Project',
    title: 'Real-Time Quiz & Learning Platform',
    bullets: [
      'Architected a WebSocket-based quiz backend with RBAC, real-time timers, and sub-100ms latency communication.',
      'Built administrative APIs for managing question repos, tracking user performance with full database persistence.',
    ],
    stack: ['Java', 'Spring Boot', 'WebSockets', 'MySQL', 'RBAC'],
    gradVar: 'linear-gradient(90deg, #68d391, #63b3ed)',
  },
  {
    size: 'sm',
    icon: '🌤️',
    label: 'REST API',
    title: 'Weather Forecasting Service',
    bullets: [
      'Integrated OpenWeatherMap API with server-side caching to reduce external calls by ~60%.',
      'Structured RESTful endpoints with robust error handling and graceful degradation.',
    ],
    stack: ['Spring Boot', 'OpenWeatherMap API', 'MySQL', 'Caching'],
    gradVar: 'linear-gradient(90deg, #f6ad55, #fc8181)',
  },
];

function ProjCard({ proj, idx, visible }) {
  return (
    <div
      className={`proj-card proj-card--${proj.size} ${visible ? 'visible' : ''}`}
      style={{ '--grad': proj.gradVar, transitionDelay: `${idx * 0.13}s` }}
    >
      <div className="proj-card__top">
        <div className="proj-card__icon">{proj.icon}</div>
        <div className="proj-card__actions">
          <a href="#" className="proj-card__btn" title="GitHub">gh</a>
          <a href="#" className="proj-card__btn" title="Live">↗</a>
        </div>
      </div>
      <div className="proj-card__label">{proj.label}</div>
      <h3 className="proj-card__title">{proj.title}</h3>
      <div className="proj-card__bullets">
        {proj.bullets.map((b, i) => <div key={i} className="proj-bullet">{b}</div>)}
      </div>
      <div className="proj-card__stack">
        {proj.stack.map(t => <span key={t} className="tag tag--cyan">{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useScrollReveal(0.07);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__head">
          <div>
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">Things I&apos;ve <span className="grad">built</span></h2>
          </div>
          <div className="projects__head-right">3 projects · all backend</div>
        </div>

        <div ref={ref}>
          <div className="projects__featured">
            {PROJECTS.filter(p => p.size === 'lg').map((proj, i) => (
              <ProjCard key={proj.title} proj={proj} idx={i} visible={visible} />
            ))}
          </div>

          <div className="projects__grid">
            {PROJECTS.filter(p => p.size === 'sm').map((proj, i) => (
              <ProjCard key={proj.title} proj={proj} idx={i + 2} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

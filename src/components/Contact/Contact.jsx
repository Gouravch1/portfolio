import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const LINKS = [
  { icon: '✉️', label: 'Email', value: 'krgourav077@gmail.com', href: 'mailto:krgourav077@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/gourav-chandra-dey', href: 'https://linkedin.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/gourav', href: 'https://github.com' },
  { icon: '📞', label: 'Phone', value: '+91 6299038713', href: 'tel:+916299038713' },
];

export default function Contact() {
  const { ref: linksRef, visible: lv } = useScrollReveal(0.1);
  const { ref: formRef, visible: fv } = useScrollReveal(0.1);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__layout">
          {/* LEFT */}
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="section-title">
              Let&apos;s build<br /><span className="grad">something together</span>
            </h2>
            <p className="contact__tagline">
              I&apos;m actively looking for backend developer roles. Whether you&apos;ve got
              an opportunity to discuss, want to collaborate on a project, or just want
              to say hi — my inbox is always open.
            </p>

            <div className="contact__avail">
              <span className="contact__avail-dot" />
              Open to work · Available immediately
            </div>

            <div className="contact__links" ref={linksRef}>
              {LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`contact__link ${lv ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="contact__link-icon">{link.icon}</div>
                  <div className="contact__link-meta">
                    <div className="contact__link-label">{link.label}</div>
                    <div className="contact__link-value">{link.value}</div>
                  </div>
                  <span className="contact__link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`contact__form-card ${fv ? 'visible' : ''}`}
            ref={formRef}
          >
            <div className="contact__form-header">
              <div className="contact__form-title">
                {sent ? '✅ Message received!' : 'Send a message'}
              </div>
              <div className="contact__form-dots">
                <div className="contact__form-dot" />
                <div className="contact__form-dot" />
                <div className="contact__form-dot" />
              </div>
            </div>

            <div className="contact__form-body">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-2)', fontSize: 15, lineHeight: 1.8 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  Thanks for reaching out! I&apos;ll get back to you within <strong style={{ color: 'var(--text-1)' }}>24 hours</strong>.
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="c-name">Name</label>
                      <input id="c-name" type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="c-email">Email</label>
                      <input id="c-email" type="email" placeholder="you@company.com" required />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="c-type">Opportunity Type</label>
                    <select id="c-type">
                      <option value="">Select type...</option>
                      <option>Full-time Role</option>
                      <option>Internship</option>
                      <option>Freelance / Contract</option>
                      <option>Collaboration</option>
                      <option>Just saying hi 👋</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="c-subject">Subject</label>
                    <input id="c-subject" type="text" placeholder="Backend Engineer opening at..." required />
                  </div>

                  <div className="form-field">
                    <label htmlFor="c-msg">Message</label>
                    <textarea id="c-msg" rows={5} placeholder="Tell me about the opportunity, your team, and what you're building..." required />
                  </div>

                  <button
                    type="submit"
                    className={`contact__submit ${sent ? 'contact__submit--sent' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>Sending<span style={{ animation: 'blink-cursor 0.8s step-end infinite' }}>...</span></>
                    ) : (
                      <>Send Message ↗</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

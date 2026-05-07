import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: "📊",
    title: "Business Plan Development",
    subtitle: "Investor-Ready from Day One",
    description:
      "Full business plan built for real scrutiny — not just a template. We map your concept, market opportunity, competitive positioning, and financial projections into a document that can stand in front of a bank, an investor, or a business partner.",
    deliverables: [
      "Executive summary & concept positioning",
      "Market analysis with location-specific data",
      "12-month ramp-up revenue projection",
      "3-scenario financial model (conservative / base / optimistic)",
      "Use of funds breakdown",
      "Operations, staffing & marketing plan",
      "Risk analysis & mitigation strategies",
      "Bilingual (EN/PT) available",
    ],
    tag: "Most Requested",
    tagColor: "#B8860B",
  },
  {
    icon: "🔍",
    title: "P&L Review & Cost Analysis",
    subtitle: "Know Where Your Money Really Goes",
    description:
      "You'd be surprised how many hospitality businesses are running with blind spots in their cost structure. We go line by line through your P&L, benchmark every metric against industry standards, and flag what's off — before it becomes a crisis.",
    deliverables: [
      "Full P&L audit with industry benchmarks",
      "COGS analysis & food cost optimization",
      "Labor cost breakdown by role",
      "Fixed vs. variable cost mapping",
      "Hidden cost identification",
      "Corrected projections with actionable targets",
      "KPI dashboard recommendation",
    ],
    tag: "High Impact",
    tagColor: "#1A3A5C",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "30-minute conversation to understand your concept, goals, and what you already have. No charge." },
  { step: "02", title: "Document Review", desc: "We analyze your existing materials — business plan, P&L, projections — and identify every gap and risk." },
  { step: "03", title: "Deep Analysis", desc: "We rebuild the numbers from scratch using real market benchmarks for your city, concept, and format." },
  { step: "04", title: "Delivery & Walkthrough", desc: "You receive a polished, investor-ready document. We walk through every number together so you own it completely." },
];

const stats = [
  { value: "10+", label: "Years in Hospitality Finance" },
  { value: "3", label: "Continents of Industry Experience" },
  { value: "PhD", label: "Hospitality Finance, UCF" },
  { value: "2", label: "Published Academic Books" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Consulting() {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", concept: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      const message = `Hi Mahala! 👋 I am interested in MahGui Consulting.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Concept:* ${formData.concept || "Not specified"}\n*Message:* ${formData.message || "Not specified"}`;
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/971521735949?text=${encoded}`, "_blank");
      setSubmitted(true);
    }
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: "#FAFAF7", color: "#1A1A1A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .consulting-hero {
          min-height: 92vh;
          background: #0F1E2E;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 768px) {
          .consulting-hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-visual { display: none; }
          .hero-content { padding: 80px 32px 60px; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr 1fr; }
          .contact-grid { grid-template-columns: 1fr; }
        }

        .hero-content {
          padding: 100px 64px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .hero-visual {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1A3A5C 0%, #0F1E2E 60%);
        }

        .hero-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 70% 40%, rgba(184,134,11,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 30% 70%, rgba(26,58,92,0.5) 0%, transparent 60%);
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(184,134,11,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,134,11,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .hero-chart {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-end;
          gap: 10px;
          padding: 32px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(184,134,11,0.2);
          border-radius: 12px;
          backdrop-filter: blur(8px);
          width: 320px;
        }

        .chart-bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          background: linear-gradient(180deg, #B8860B, rgba(184,134,11,0.3));
          transition: height 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .chart-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          text-align: center;
          margin-top: 6px;
        }

        .chart-value {
          position: absolute;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: #B8860B;
          white-space: nowrap;
          font-weight: 500;
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #B8860B;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #B8860B;
        }

        .hero-title {
          font-size: clamp(42px, 5vw, 72px);
          font-weight: 300;
          line-height: 1.05;
          color: #FFFFFF;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .hero-title em {
          font-style: italic;
          color: #B8860B;
        }

        .hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 480px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #B8860B;
          color: #0F1E2E;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 16px 32px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          align-self: flex-start;
        }
        .hero-cta:hover {
          background: #D4A017;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(184,134,11,0.3);
        }
        .hero-cta-arrow { transition: transform 0.25s ease; }
        .hero-cta:hover .hero-cta-arrow { transform: translateX(4px); }

        .section { padding: 100px 64px; }
        @media (max-width: 768px) { .section { padding: 64px 32px; } }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #B8860B;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .section-title em { font-style: italic; color: #B8860B; }

        .section-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: #555;
          line-height: 1.75;
          max-width: 560px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #E8E4DC;
          margin-top: 64px;
        }

        .stat-card {
          background: #FAFAF7;
          padding: 40px 32px;
          text-align: center;
        }

        .stat-value {
          font-size: 48px;
          font-weight: 300;
          color: #0F1E2E;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.03em;
        }

        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #888;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 56px;
        }

        .service-card {
          border: 1px solid #E8E4DC;
          padding: 48px 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          background: #FAFAF7;
        }
        .service-card.active {
          background: #0F1E2E;
          border-color: #0F1E2E;
        }
        .service-card:hover:not(.active) {
          border-color: #B8860B;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }

        .service-tag {
          position: absolute;
          top: 24px;
          right: 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .service-icon { font-size: 32px; margin-bottom: 20px; display: block; }

        .service-title {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 4px;
          transition: color 0.3s;
        }
        .service-card.active .service-title { color: #FFFFFF; }

        .service-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #B8860B;
          margin-bottom: 16px;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .service-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          margin-bottom: 24px;
          transition: color 0.3s;
        }
        .service-card.active .service-desc { color: rgba(255,255,255,0.65); }

        .service-deliverables {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .service-deliverables li {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #555;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
          transition: color 0.3s;
        }
        .service-card.active .service-deliverables li { color: rgba(255,255,255,0.7); }
        .service-deliverables li::before {
          content: '→';
          color: #B8860B;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .process-section {
          background: #0F1E2E;
          padding: 100px 64px;
        }
        @media (max-width: 768px) { .process-section { padding: 64px 32px; } }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          margin-top: 64px;
        }

        .process-step {
          background: #0F1E2E;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
        }
        .process-step::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #B8860B;
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
        }
        .process-step:hover::after { transform: scaleX(1); }

        .step-number {
          font-size: 56px;
          font-weight: 300;
          color: rgba(184,134,11,0.2);
          line-height: 1;
          margin-bottom: 24px;
          letter-spacing: -0.04em;
        }

        .step-title {
          font-size: 20px;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .step-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
        }

        .about-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: #F4F1EB;
        }
        @media (max-width: 768px) { .about-section { grid-template-columns: 1fr; } }

        .about-content {
          padding: 100px 64px;
        }
        @media (max-width: 768px) { .about-content { padding: 64px 32px; } }

        .about-visual {
          background: #1A3A5C;
          padding: 100px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .about-visual::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%);
        }

        .credential {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          position: relative;
          z-index: 1;
        }
        .credential:last-child { border-bottom: none; }

        .credential-icon {
          width: 40px;
          height: 40px;
          background: rgba(184,134,11,0.15);
          border: 1px solid rgba(184,134,11,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .credential-title {
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .credential-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }

        .contact-section {
          padding: 100px 64px;
          background: #FAFAF7;
        }
        @media (max-width: 768px) { .contact-section { padding: 64px 32px; } }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          margin-top: 56px;
          align-items: start;
        }

        .contact-info-title {
          font-size: 28px;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .contact-info-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          margin-bottom: 40px;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #444;
        }
        .contact-detail-icon {
          width: 36px;
          height: 36px;
          background: #F4F1EB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }

        .form-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
        }

        .form-input {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1A1A1A;
          background: #F4F1EB;
          border: 1px solid transparent;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.2s;
          resize: none;
          width: 100%;
        }
        .form-input:focus { border-color: #B8860B; }
        .form-input::placeholder { color: #AAA; }

        .form-submit {
          width: 100%;
          background: #0F1E2E;
          color: #FFFFFF;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 18px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 8px;
        }
        .form-submit:hover {
          background: #1A3A5C;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15,30,46,0.2);
        }

        .success-message {
          text-align: center;
          padding: 48px 32px;
          background: #F4F1EB;
        }
        .success-icon { font-size: 48px; margin-bottom: 16px; display: block; }
        .success-title { font-size: 28px; font-weight: 300; margin-bottom: 12px; }
        .success-body { font-family: 'DM Sans', sans-serif; font-size: 15px; color: #666; line-height: 1.7; }
      `}</style>

      {/* ── HERO ── */}
      <section className="consulting-hero">
        <div className="hero-content">
          <div className="eyebrow">MahGui Consulting</div>
          <h1 className="hero-title">
            Your numbers<br />
            should tell a<br />
            <em>compelling story.</em>
          </h1>
          <p className="hero-subtitle">
            Hospitality finance consulting for entrepreneurs who want investor-ready financials, honest analysis, and zero surprises on opening day.
          </p>
          <a href="#contact" className="hero-cta">
            Book a Discovery Call
            <span className="hero-cta-arrow">→</span>
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-grid-overlay" />
          <AnimatedChart />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" style={{ background: "#FAFAF7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">The Approach</div>
            <h2 className="section-title">Finance that <em>makes sense</em><br />for real operators.</h2>
            <p className="section-body">
              Most business plans look good on paper and fall apart in the first quarter. We build financial models grounded in actual market data — real food costs, real labor rates, real ramp-up curves — so you walk into every conversation with confidence and no blind spots.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: "#F4F1EB", paddingTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">Services</div>
            <h2 className="section-title">What we <em>deliver.</em></h2>
          </FadeIn>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`service-card ${activeService === i ? "active" : ""}`}
                  onClick={() => setActiveService(i)}
                >
                  <span
                    className="service-tag"
                    style={{
                      background: `${s.tagColor}18`,
                      color: s.tagColor,
                      border: `1px solid ${s.tagColor}40`,
                    }}
                  >
                    {s.tag}
                  </span>
                  <span className="service-icon">{s.icon}</span>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-subtitle">{s.subtitle}</p>
                  <p className="service-desc">{s.description}</p>
                  <ul className="service-deliverables">
                    {s.deliverables.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label" style={{ color: "#B8860B" }}>How It Works</div>
            <h2 className="section-title" style={{ color: "#FFFFFF" }}>
              From idea to<br /><em>investor-ready.</em>
            </h2>
          </FadeIn>
          <div className="process-grid">
            {process.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="process-step">
                  <div className="step-number">{p.step}</div>
                  <h4 className="step-title">{p.title}</h4>
                  <p className="step-desc">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="about-section">
        <div className="about-content">
          <FadeIn>
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">
              Academic rigor.<br /><em>Operator insight.</em>
            </h2>
            <p className="section-body" style={{ marginTop: 24 }}>
              Dr. Mahala Geronasso holds a PhD in Hospitality Finance from UCF and has spent over a decade working in hospitality across Brazil, Switzerland, France, the US, and the UAE. She is co-author of <em>Financial Management for the Hospitality Industry</em> (Kendall Hunt, 2025) and publishes research in leading journals including Cornell Hospitality Quarterly and Tourism Economics.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              MahGui Consulting brings that same analytical depth to entrepreneurs building real businesses — not academic exercises.
            </p>
          </FadeIn>
        </div>
        <div className="about-visual">
          {[
            { icon: "🎓", title: "PhD, Hospitality Finance", desc: "University of Central Florida — specialized in equity returns, financial performance, and capital structure in hospitality firms." },
            { icon: "📖", title: "Published Author", desc: "Co-author of Financial Management for the Hospitality Industry. Published research in Cornell Hospitality Quarterly, Tourism Economics, JHTT." },
            { icon: "🌍", title: "10+ Years, 5 Countries", desc: "Hands-on hospitality experience across Brazil, Switzerland, France, the United States, and the UAE." },
            { icon: "👩‍🏫", title: "Assistant Professor, Les Roches", desc: "Currently teaches hospitality finance, revenue management, and analytics at Les Roches Abu Dhabi at BBA and MSc levels." },
          ].map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="credential">
                <div className="credential-icon">{c.icon}</div>
                <div>
                  <div className="credential-title">{c.title}</div>
                  <div className="credential-desc">{c.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">Get Started</div>
            <h2 className="section-title">Let's look at<br /><em>your numbers.</em></h2>
          </FadeIn>
          <div className="contact-grid">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="contact-info-title">Book a free 30-minute discovery call.</h3>
                <p className="contact-info-body">
                  Tell us about your concept and what you have so far. We'll tell you exactly where the gaps are and what it would take to get you investor-ready. No commitment required.
                </p>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  Serving clients globally — UAE, USA, Brazil & beyond
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">🌐</div>
                  English · Portuguese · Spanish · French
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">⏱</div>
                  Typical turnaround: 5–10 business days
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="success-message">
                  <span className="success-icon">🍱</span>
                  <h3 className="success-title">Message received!</h3>
                  <p className="success-body">We'll be in touch within 24 hours to schedule your discovery call. Looking forward to diving into your numbers.</p>
                </div>
              ) : (
                <div>
                  <div className="form-field">
                    <label className="form-label">Your Name</label>
                    <input
                      className="form-input"
                      placeholder="Felipe Rodrigues"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="felipe@gostosabakery.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Your Concept</label>
                    <input
                      className="form-input"
                      placeholder="e.g. AYCE sushi restaurant, Orlando FL"
                      value={formData.concept}
                      onChange={e => setFormData({ ...formData, concept: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">What do you need help with?</label>
                    <textarea
                      className="form-input"
                      rows={4}
                      placeholder="Tell us where you are and what you're trying to accomplish..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button className="form-submit" onClick={handleSubmit}>
                    Request Discovery Call →
                  </button>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedChart() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setTimeout(() => setAnimated(true), 600); }, []);

  const bars = [
    { month: "Mo. 1", height: 8, value: "-$4k" },
    { month: "Mo. 2", height: 18, value: "$7k" },
    { month: "Mo. 3", height: 30, value: "$18k" },
    { month: "Mo. 4", height: 46, value: "$34k" },
    { month: "Mo. 6", height: 62, value: "$61k" },
    { month: "Mo. 9", height: 78, value: "$93k" },
    { month: "Mo. 12", height: 100, value: "$126k" },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px" }}>
      <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>
        Net Profit — 12-Month Ramp-Up
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 160, width: "100%" }}>
        {bars.map((b, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "flex-end", height: 140 }}>
              <div
                className="chart-bar"
                style={{ height: animated ? `${b.height}%` : "0%", width: "100%" }}
              >
                {animated && (
                  <span className="chart-value">{b.value}</span>
                )}
              </div>
            </div>
            <div className="chart-label">{b.month}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(184,134,11,0.7)", letterSpacing: "0.1em" }}>
        Base Case · 240 covers/day at Month 12
      </div>
    </div>
  );
}

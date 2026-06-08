/*
 * MahGui Consulting Page — v2
 * Colors: Rose #D4537E · Bordeaux #6B1A2E · Gold #A8852C
 * Integrated with MahGui Academy Navbar + Footer
 */
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ROSE    = "#D4537E";
const NAVY    = "#6B1A2E";
const GOLD    = "#A8852C";
const INK     = "#1a1714";
const PAPER   = "#f6f2ec";
const WARM    = "#efe8de";
const CARD    = "#fffdfa";
const MUTED   = "#8a8278";
const SOFT    = "#4a443d";

const WA = "971521735949";
function waLink(msg: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

const services = [
  {
    icon: "📊",
    title: "Business Plan Development",
    subtitle: "Investor-Ready from Day One",
    price: "$800 – $1,500",
    tag: "Most Requested",
    tagColor: GOLD,
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
  },
  {
    icon: "🔍",
    title: "P&L Review & Cost Analysis",
    subtitle: "Know Where Your Money Really Goes",
    price: "$300 – $500",
    tag: "High Impact",
    tagColor: NAVY,
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
  },
  {
    icon: "📦",
    title: "Complete Package",
    subtitle: "Everything Before Opening Day",
    price: "$1,000 – $1,800",
    tag: "Best Value",
    tagColor: ROSE,
    description:
      "Business Plan + P&L Review combined — everything you need before talking to an investor or opening your doors. Includes one revision round and a full walkthrough so you own every number.",
    deliverables: [
      "Everything in Business Plan",
      "Full P&L audit & benchmarks",
      "Hidden cost identification",
      "KPI dashboard recommendation",
      "1 revision round included",
      "Delivery in 7–10 business days",
    ],
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "30-minute conversation to understand your concept, goals, and what you already have. No charge." },
  { step: "02", title: "Document Review", desc: "We analyze your existing materials — business plan, P&L, projections — and identify every gap and risk." },
  { step: "03", title: "Deep Analysis", desc: "We rebuild the numbers from scratch using real market benchmarks for your city, concept, and format." },
  { step: "04", title: "Delivery & Walkthrough", desc: "You receive a polished, investor-ready document. We walk through every number together so you own it completely." },
];

const credentials = [
  { icon: "🎓", title: "PhD, Hospitality Finance — UCF", desc: "Specialized in equity returns, financial performance, and capital structure in hospitality firms." },
  { icon: "🇦🇪", title: "UAE MOHESR Recognized Qualification", desc: "Officially recognized by the UAE Ministry of Higher Education & Scientific Research. Doc. No. 2026053034." },
  { icon: "📖", title: "Published Author — Kendall Hunt", desc: "Co-author of Financial Management for the Hospitality Industry. Research in Cornell Hospitality Quarterly, Tourism Economics, JHTT." },
  { icon: "👩‍🏫", title: "Assistant Professor, Les Roches Abu Dhabi", desc: "Teaches hospitality finance, revenue management, and analytics at BBA and MSc levels." },
];

const caseMetrics = [
  { val: "$370K", lbl: "Investment justified" },
  { val: "3",     lbl: "Financial scenarios modeled" },
  { val: "12mo",  lbl: "Month-by-month projection" },
  { val: "14–18", lbl: "Month payback (base case)" },
];

const caseDeliverables = [
  "Full financial audit — identified $25K+/month in missing costs",
  "Corrected COGS (34% → 40%) and labor (25% → 30%) with real benchmarks",
  "12-month ramp-up model starting at 60 covers/day",
  "3 scenarios: conservative, base case & optimistic",
  "Florida liquor license analysis (SRX vs. 4COP)",
  "Investor-ready bilingual business plan (EN + PT)",
];

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function AnimatedChart() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnimated(true), 700); return () => clearTimeout(t); }, []);
  const bars = [
    { month: "Mo. 1", height: 8,   value: "-$4k"  },
    { month: "Mo. 2", height: 18,  value: "$7k"   },
    { month: "Mo. 3", height: 30,  value: "$18k"  },
    { month: "Mo. 4", height: 46,  value: "$34k"  },
    { month: "Mo. 6", height: 62,  value: "$61k"  },
    { month: "Mo. 9", height: 78,  value: "$93k"  },
    { month: "Mo. 12",height: 100, value: "$126k" },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 28 }}>
        Net Profit — 12-Month Ramp-Up
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 160, width: "100%" }}>
        {bars.map((b, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "flex-end", height: 140 }}>
              <div style={{
                width: "100%",
                height: animated ? `${b.height}%` : "0%",
                borderRadius: "4px 4px 0 0",
                background: `linear-gradient(180deg, ${ROSE}, rgba(212,83,126,0.3))`,
                transition: "height 1.2s cubic-bezier(0.34,1.56,0.64,1)",
                position: "relative",
              }}>
                {animated && (
                  <span style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", fontSize: 10, color: ROSE, fontWeight: 500, whiteSpace: "nowrap" }}>
                    {b.value}
                  </span>
                )}
              </div>
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 10, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 6 }}>{b.month}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, fontFamily: "sans-serif", fontSize: 11, color: `${ROSE}90`, letterSpacing: "0.1em" }}>
        Base Case · 240 covers/day at Month 12
      </div>
    </div>
  );
}

export default function Consulting() {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", concept: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    const msg = `Hi Mahala! 👋 I'm interested in MahGui Consulting.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Concept:* ${formData.concept || "Not specified"}\n*Message:* ${formData.message || "Not specified"}`;
    window.open(waLink(msg), "_blank");
    setSubmitted(true);
  };

  const s = {
    eyebrow: {
      fontFamily: "sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase" as const,
      color: GOLD,
      marginBottom: 18,
      display: "flex",
      alignItems: "center",
      gap: 12,
    } as React.CSSProperties,
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: PAPER, color: INK, minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 72,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "90vh",
        background: INK,
        overflow: "hidden",
      }}>
        <style>{`
          @media(max-width:768px){
            .c-hero{grid-template-columns:1fr!important;min-height:auto!important}
            .c-hero-visual{display:none!important}
            .c-hero-content{padding:80px 28px 60px!important}
            .c-services-grid{grid-template-columns:1fr!important}
            .c-process-grid{grid-template-columns:1fr 1fr!important}
            .c-about-grid{grid-template-columns:1fr!important}
            .c-contact-grid{grid-template-columns:1fr!important}
            .c-pricing-grid{grid-template-columns:1fr!important}
            .c-case-grid{grid-template-columns:1fr!important}
            .c-stats-grid{grid-template-columns:1fr 1fr!important}
            .c-cred-grid{grid-template-columns:1fr!important}
          }
        `}</style>
        {/* left */}
        <div className="c-hero-content" style={{ padding: "110px 64px 80px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <div style={{ ...s.eyebrow }}>
            <span style={{ display: "block", width: 32, height: 1, background: GOLD }} />
            MahGui Consulting
          </div>
          <h1 style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 300, lineHeight: 1.05, color: "#fff", marginBottom: 8, letterSpacing: "-0.02em" }}>
            Your numbers<br />should tell a<br /><em style={{ fontStyle: "italic", color: ROSE }}>compelling story.</em>
          </h1>
          <p style={{ fontFamily: "sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 48, maxWidth: 480 }}>
            Hospitality finance consulting for entrepreneurs who want investor-ready financials, honest analysis, and zero surprises on opening day.
          </p>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: ROSE, color: "#fff", fontFamily: "sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: "0.05em", padding: "16px 32px", border: "none", cursor: "pointer", textDecoration: "none", alignSelf: "flex-start", borderRadius: 2, transition: "all 0.25s" }}>
            Book a Discovery Call →
          </a>
        </div>
        {/* right chart */}
        <div className="c-hero-visual" style={{ position: "relative", background: `linear-gradient(135deg, ${NAVY} 0%, ${INK} 70%)`, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${ROSE}08 1px,transparent 1px),linear-gradient(90deg,${ROSE}08 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
          <AnimatedChart />
        </div>
      </section>

      {/* ── VERIFIED STRIP ── */}
      <div style={{ background: WARM, borderBottom: `1px solid rgba(26,23,20,0.08)`, padding: "18px 0" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>
          {[
            { icon: "🎓", text: "Ph.D. UCF", sub: "Verifiable via Parchment", href: "https://www.parchment.com/u/s/14Xd" },
            { icon: "🇦🇪", text: "UAE MOHESR Recognized", sub: "Doc. 2026053034 · uaeVerify.gov.ae", href: "https://uaeverify.gov.ae" },
            { icon: "🏆", text: "ICHRIE Best Paper 2026", sub: "International hospitality research award", href: "#" },
            { icon: "📚", text: "Kendall Hunt Published", sub: "Financial Management for Hospitality", href: "https://he.kendallhunt.com/product/financial-management-hospitality-industry" },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <div>
                <div style={{ fontFamily: "sans-serif", fontSize: 12, fontWeight: 600, color: INK }}>{item.text}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 10, color: MUTED }}>{item.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── APPROACH ── */}
      <section style={{ padding: "96px 64px", background: CARD, maxWidth: "100%" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Reveal>
            <div style={s.eyebrow}>The Approach</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Finance that <em style={{ fontStyle: "italic", color: ROSE }}>makes sense</em><br />for real operators.
            </h2>
            <p style={{ fontFamily: "sans-serif", fontSize: 16, fontWeight: 300, color: SOFT, lineHeight: 1.75, maxWidth: 560 }}>
              Most business plans look good on paper and fall apart in the first quarter. We build financial models grounded in actual market data — real food costs, real labor rates, real ramp-up curves — so you walk into every conversation with confidence and no blind spots.
            </p>
          </Reveal>
          {/* Stats */}
          <Reveal delay={0.15}>
            <div className="c-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "#E8E4DC", marginTop: 64 }}>
              {[
                { val: "10+", lbl: "Years in Hospitality Finance" },
                { val: "5",   lbl: "Countries of Industry Experience" },
                { val: "PhD", lbl: "Hospitality Finance, UCF" },
                { val: "2",   lbl: "Published Academic Books" },
              ].map((st, i) => (
                <div key={i} style={{ background: CARD, padding: "36px 28px", textAlign: "center" }}>
                  <div style={{ fontSize: 44, fontWeight: 300, color: INK, lineHeight: 1, marginBottom: 8, letterSpacing: "-0.03em" }}>{st.val}</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 12, color: MUTED, letterSpacing: "0.05em", textTransform: "uppercase" }}>{st.lbl}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "80px 64px", background: WARM }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Reveal>
            <div style={s.eyebrow}>Services</div>
            <h2 style={{ fontSize: "clamp(28px,3.8vw,48px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 56 }}>
              What we <em style={{ fontStyle: "italic", color: ROSE }}>deliver.</em>
            </h2>
          </Reveal>
          <div className="c-services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
            {services.map((sv, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  onClick={() => setActiveService(i)}
                  style={{
                    border: `1px solid ${activeService === i ? ROSE : "#E8E4DC"}`,
                    borderTop: `3px solid ${activeService === i ? ROSE : "transparent"}`,
                    padding: "40px 32px",
                    cursor: "pointer",
                    background: activeService === i ? INK : CARD,
                    transition: "all 0.3s",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", top: 18, right: 18, fontFamily: "sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 2, background: `${sv.tagColor}20`, color: sv.tagColor, border: `1px solid ${sv.tagColor}40` }}>{sv.tag}</span>
                  <span style={{ fontSize: 28, marginBottom: 18, display: "block" }}>{sv.icon}</span>
                  <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 4, color: activeService === i ? "#fff" : INK }}>{sv.title}</h3>
                  <div style={{ fontFamily: "sans-serif", fontSize: 12, color: ROSE, marginBottom: 6, letterSpacing: "0.04em" }}>{sv.subtitle}</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 18, fontWeight: 600, color: ROSE, marginBottom: 16 }}>{sv.price}</div>
                  <p style={{ fontFamily: "sans-serif", fontSize: 14, lineHeight: 1.7, color: activeService === i ? "rgba(255,255,255,0.65)" : "#666", marginBottom: 20 }}>{sv.description}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {sv.deliverables.map((d, j) => (
                      <li key={j} style={{ fontFamily: "sans-serif", fontSize: 13, color: activeService === i ? "rgba(255,255,255,0.7)" : SOFT, display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5 }}>
                        <span style={{ color: ROSE, flexShrink: 0, marginTop: 2 }}>→</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: INK, padding: "96px 64px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Reveal>
            <div style={{ ...s.eyebrow }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(28px,3.8vw,48px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 64, color: "#fff" }}>
              From idea to<br /><em style={{ fontStyle: "italic", color: ROSE }}>investor-ready.</em>
            </h2>
          </Reveal>
          <div className="c-process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.08)" }}>
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: INK, padding: "36px 28px" }}>
                  <div style={{ fontSize: 52, fontWeight: 300, color: `${ROSE}30`, lineHeight: 1, marginBottom: 20, letterSpacing: "-0.04em" }}>{p.step}</div>
                  <h4 style={{ fontSize: 19, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{p.title}</h4>
                  <p style={{ fontFamily: "sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section style={{ background: `${NAVY}f0`, padding: "96px 64px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Reveal>
            <div style={{ ...s.eyebrow, color: ROSE }}>Case Study</div>
            <h2 style={{ fontSize: "clamp(28px,3.8vw,44px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 48, color: "#fff" }}>
              From concept to investor-ready<br /><em style={{ fontStyle: "italic", color: ROSE }}>in one day.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="c-case-grid" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "44px 40px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: ROSE, marginBottom: 18 }}>Samba Poke & Sushi — Orlando, FL</div>
                <h3 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>Brazilian-Japanese AYCE Restaurant on International Drive</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: 28 }}>
                  A Brazilian entrepreneur needed a business plan and financial audit for a premium sushi rodízio concept launching inside an established bakery on I-Drive. The original plan had significant gaps: underestimated COGS, missing cost categories, and no ramp-up projection. We rebuilt it from the ground up.
                </p>
                <div className="c-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {caseMetrics.map((m, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "16px 14px" }}>
                      <div style={{ fontSize: 26, fontWeight: 600, color: "#fff", lineHeight: 1 }}>{m.val}</div>
                      <div style={{ fontFamily: "sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 400, color: "#fff", marginBottom: 18 }}>What we delivered</h4>
                <ul style={{ listStyle: "none" }}>
                  {caseDeliverables.map((d, i) => (
                    <li key={i} style={{ fontFamily: "sans-serif", fontSize: 14, color: "rgba(255,255,255,0.72)", paddingLeft: 20, position: "relative", marginBottom: 10, lineHeight: 1.5 }}>
                      <span style={{ position: "absolute", left: 0, color: ROSE }}>→</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Testimonial */}
          <Reveal delay={0.2}>
            <div style={{ marginTop: 32, background: "rgba(255,255,255,0.04)", border: `1px solid ${ROSE}40`, borderLeft: `4px solid ${ROSE}`, borderRadius: 12, padding: "32px 36px" }}>
              <div style={{ fontSize: 36, fontFamily: "Georgia,serif", color: ROSE, lineHeight: 1, marginBottom: 12 }}>"</div>
              <p style={{ fontFamily: "sans-serif", fontSize: 16, color: "rgba(255,255,255,0.82)", fontStyle: "italic", lineHeight: 1.75, marginBottom: 20 }}>
                Perfeito perfeito Mahala você é fantástica. O plano finalmente faz sentido e eu sei exatamente para onde vai cada dólar.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: ROSE, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", fontWeight: 600, fontSize: 14, color: "#fff" }}>FA</div>
                <div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 600, color: "#fff" }}>Felipe Andre</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Owner, Gostoso Bakery & Samba Poke and Sushi · Orlando, FL</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT / CREDENTIALS ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="c-about-grid">
        {/* left */}
        <div style={{ background: WARM, padding: "96px 64px" }}>
          <Reveal>
            <div style={s.eyebrow}>Who We Are</div>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Academic rigor.<br /><em style={{ fontStyle: "italic", color: ROSE }}>Operator insight.</em>
            </h2>
            <p style={{ fontFamily: "sans-serif", fontSize: 15, color: SOFT, lineHeight: 1.75, marginBottom: 16 }}>
              Dr. Mahala Geronasso holds a PhD in Hospitality Finance from UCF and has spent over a decade working in hospitality across Brazil, Switzerland, France, the US, and the UAE. She is co-author of <em>Financial Management for the Hospitality Industry</em> (Kendall Hunt) and publishes research in leading journals including Cornell Hospitality Quarterly and Tourism Economics.
            </p>
            <p style={{ fontFamily: "sans-serif", fontSize: 15, color: SOFT, lineHeight: 1.75, marginBottom: 24 }}>
              MahGui Consulting brings that same analytical depth to entrepreneurs building real businesses — not academic exercises.
            </p>
            <div style={{ marginTop: 8 }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Mahala-Perfil_897f720e.png"
                alt="Dr. Mahala Geronasso"
                style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", border: `3px solid ${ROSE}` }}
              />
              <div style={{ marginTop: 12, fontFamily: "sans-serif", fontSize: 14, fontWeight: 600, color: INK }}>Dr. Mahala Geronasso</div>
              <div style={{ fontFamily: "sans-serif", fontSize: 12, color: ROSE }}>Ph.D. · MBA · CHIA · Les Roches Abu Dhabi</div>
            </div>
          </Reveal>
        </div>
        {/* right */}
        <div style={{ background: NAVY, padding: "96px 64px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-50%", right: "-30%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,${ROSE}20 0%,transparent 70%)` }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            {credentials.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18, padding: "22px 0", borderBottom: i < credentials.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ width: 40, height: 40, background: `${ROSE}20`, border: `1px solid ${ROSE}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, borderRadius: 6 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 400, color: "#fff", marginBottom: 4 }}>{c.title}</div>
                    <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ background: INK, padding: "96px 64px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Reveal>
            <div style={s.eyebrow}>Pricing</div>
            <h2 style={{ fontSize: "clamp(28px,3.8vw,44px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, color: "#fff" }}>
              Transparent rates.<br /><em style={{ fontStyle: "italic", color: ROSE }}>No surprises.</em>
            </h2>
            <p style={{ fontFamily: "sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 56 }}>
              All engagements include a free 30-minute discovery call before any commitment.
            </p>
          </Reveal>
          <div className="c-pricing-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { title: "Business Plan", price: "$800–$1,500", note: "per project · 5–7 days", featured: false, items: ["12-month ramp-up projection","3 financial scenarios","ROI & payback analysis","Bilingual (EN/PT)"], msg: "Hi Mahala! I'm interested in the Business Plan service. Can you tell me more?" },
              { title: "Complete Package", price: "$1,000–$1,800", note: "per project · ~20% savings", featured: true, tag: "⭐ Best Value", items: ["Everything in Business Plan","Full P&L audit & benchmarks","Hidden cost identification","KPI dashboard recommendation","1 revision round included"], msg: "Hi Mahala! I'm interested in the Complete Package (Business Plan + P&L Review)." },
              { title: "P&L Review", price: "$300–$500", note: "per project · 3–5 days", featured: false, items: ["COGS & labor benchmarking","Fixed cost mapping","Corrected projections","Written recommendations"], msg: "Hi Mahala! I'm interested in the P&L Review service." },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: card.featured ? ROSE : "rgba(255,255,255,0.05)", border: `1px solid ${card.featured ? ROSE : "rgba(255,255,255,0.1)"}`, borderRadius: 16, padding: "36px 28px", position: "relative" }}>
                  {card.tag && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: NAVY, color: "#fff", fontFamily: "sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>{card.tag}</div>}
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 18, fontWeight: 500, color: card.featured ? INK : "#fff", marginBottom: 8 }}>{card.title}</div>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 36, fontWeight: 600, color: card.featured ? INK : ROSE, lineHeight: 1, marginBottom: 4 }}>{card.price}</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 12, color: card.featured ? `${INK}99` : "rgba(255,255,255,0.45)", marginBottom: 24 }}>{card.note}</div>
                  <ul style={{ listStyle: "none", marginBottom: 28 }}>
                    {card.items.map((item, j) => (
                      <li key={j} style={{ fontFamily: "sans-serif", fontSize: 13, color: card.featured ? INK : "rgba(255,255,255,0.75)", paddingLeft: 18, position: "relative", marginBottom: 8 }}>
                        <span style={{ position: "absolute", left: 0, color: card.featured ? INK : ROSE, fontWeight: 700, fontSize: 11 }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href={waLink(card.msg)} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "13px 20px", borderRadius: 999, fontFamily: "sans-serif", fontSize: 14, fontWeight: 500, textDecoration: "none", background: card.featured ? INK : "rgba(255,255,255,0.1)", color: "#fff", border: `1px solid ${card.featured ? INK : "rgba(255,255,255,0.25)"}`, transition: "all 0.2s" }}>
                    Get started →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p style={{ textAlign: "center", marginTop: 36, fontFamily: "sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
              Revenue management, leadership & career coaching are scoped individually.{" "}
              <a href={waLink("Hi Mahala! I'd like a custom quote for consulting services.")} target="_blank" rel="noopener noreferrer" style={{ color: ROSE, textDecoration: "none" }}>Contact me for a custom quote.</a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: CARD, padding: "96px 64px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Reveal>
            <div style={s.eyebrow}>Get Started</div>
            <h2 style={{ fontSize: "clamp(28px,3.8vw,44px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 56 }}>
              Let's look at<br /><em style={{ fontStyle: "italic", color: ROSE }}>your numbers.</em>
            </h2>
          </Reveal>
          <div className="c-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <Reveal delay={0.1}>
              <div>
                <h3 style={{ fontSize: 26, fontWeight: 300, marginBottom: 16 }}>Book a free 30-minute discovery call.</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: 15, color: SOFT, lineHeight: 1.75, marginBottom: 36 }}>
                  Tell us about your concept and what you have so far. We'll tell you exactly where the gaps are and what it would take to get you investor-ready. No commitment required.
                </p>
                {[
                  { icon: "📍", text: "Serving clients globally — UAE, USA, Brazil & beyond" },
                  { icon: "🌐", text: "English · Portuguese · Spanish · French" },
                  { icon: "⏱",  text: "Typical turnaround: 5–10 business days" },
                  { icon: "💬", text: "WhatsApp available for all time zones" },
                ].map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, fontFamily: "sans-serif", fontSize: 14, color: "#444" }}>
                    <div style={{ width: 36, height: 36, background: WARM, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, borderRadius: 8, flexShrink: 0 }}>{d.icon}</div>
                    {d.text}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 32px", background: WARM, borderRadius: 12 }}>
                  <span style={{ fontSize: 48, marginBottom: 16, display: "block" }}>🍱</span>
                  <h3 style={{ fontSize: 26, fontWeight: 300, marginBottom: 12 }}>Message received!</h3>
                  <p style={{ fontFamily: "sans-serif", fontSize: 15, color: SOFT, lineHeight: 1.7 }}>We'll be in touch within 24 hours to schedule your discovery call.</p>
                </div>
              ) : (
                <div>
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "Felipe Rodrigues" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "felipe@gostosabakery.com" },
                    { label: "Your Concept", key: "concept", type: "text", placeholder: "e.g. AYCE sushi restaurant, Orlando FL" },
                  ].map((field) => (
                    <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                      <label style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED }}>{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.key]}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{ fontFamily: "sans-serif", fontSize: 14, color: INK, background: WARM, border: "1px solid transparent", padding: "14px 16px", outline: "none", width: "100%", borderRadius: 2 }}
                      />
                    </div>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                    <label style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED }}>What do you need help with?</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us where you are and what you're trying to accomplish..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{ fontFamily: "sans-serif", fontSize: 14, color: INK, background: WARM, border: "1px solid transparent", padding: "14px 16px", outline: "none", width: "100%", resize: "none", borderRadius: 2 }}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    style={{ width: "100%", background: INK, color: "#fff", fontFamily: "sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: 18, border: "none", cursor: "pointer", borderRadius: 2, marginTop: 8 }}
                  >
                    Request Discovery Call →
                  </button>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

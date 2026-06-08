/*
 * MahGui Academy — Home Page (v2)
 * Redesign: Consulting-first · Personal brand · McKinsey-light elegance
 * Priority: Capture consulting clients → mentorship → courses
 */
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/lib/courses";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, BookOpen, TrendingUp, Users } from "lucide-react";

const ROSE = "#D4537E";
const GREEN = "#1D9E75";
const INK = "#1a1714";
const GOLD = "#a8852c";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, "")) || 0;

  useEffect(() => {
    if (!isInView || numericTarget === 0) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(numericTarget / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  if (numericTarget === 0) {
    return <span ref={ref} className="font-heading text-3xl lg:text-4xl font-bold" style={{ color: ROSE }}>{target}</span>;
  }
  return <span ref={ref} className="font-heading text-3xl lg:text-4xl font-bold" style={{ color: ROSE }}>{count}{suffix}</span>;
}

export default function Home() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCourses =
    activeFilter === "all"
      ? courses.slice(0, 6)
      : courses.filter((c) => c.category === activeFilter).slice(0, 6);

  const stats = [
    { value: "9", suffix: "+", label: t("stats.courses") },
    { value: "PhD", suffix: "", label: t("stats.phd") },
    { value: "10", suffix: "+", label: t("stats.years") },
    { value: "4", suffix: "", label: t("stats.continents") },
    { value: "2", suffix: "", label: t("stats.professors") },
  ];

  const consultingServices = [
    {
      icon: <TrendingUp size={20} />,
      title: lang === "pt" ? "Business Plan para F&B" : "F&B Business Plan",
      desc: lang === "pt"
        ? "Plano financeiro completo pronto para investidor — com projeções de 12 meses, 3 cenários e documentos bilíngues."
        : "Investor-ready financial plan with 12-month projections, 3 scenarios and bilingual documents.",
      price: "$800–$1,500",
    },
    {
      icon: <BookOpen size={20} />,
      title: lang === "pt" ? "Revisão de P&L" : "P&L Review",
      desc: lang === "pt"
        ? "Auditoria linha a linha dos seus números com benchmarks reais do setor — sem pontos cegos."
        : "Line-by-line audit of your financials against real industry benchmarks — no blind spots.",
      price: "$300–$500",
    },
    {
      icon: <Users size={20} />,
      title: lang === "pt" ? "Pacote Completo" : "Complete Package",
      desc: lang === "pt"
        ? "Business Plan + P&L Review juntos — tudo que você precisa antes de abrir as portas ou falar com um investidor."
        : "Business Plan + P&L Review combined — everything you need before opening day or investor conversations.",
      price: "$1,000–$1,800",
    },
  ];

  const credentials = [
    lang === "pt" ? "Ph.D. em Hospitality Management — UCF" : "Ph.D. in Hospitality Management — UCF",
    lang === "pt" ? "Reconhecida pelo MOHESR dos UAE" : "UAE MOHESR Recognized Qualification",
    lang === "pt" ? "Professora na Les Roches Abu Dhabi" : "Assistant Professor at Les Roches Abu Dhabi",
    "CHIA Certified · Bloomberg BESS",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">

        {/* ===== HERO — split layout ===== */}
        <section className="pt-20 pb-0 lg:pt-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf8f5 0%, #fff 60%)" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 lg:pb-20">

              {/* Left: text */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-6 px-3 py-1 rounded-full border" style={{ color: ROSE, borderColor: `${ROSE}40`, background: `${ROSE}10` }}>
                  {lang === "pt" ? "Finanças · Hospitalidade · Estratégia" : "Finance · Hospitality · Strategy"}
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.05] tracking-tight mb-6" style={{ color: INK }}>
                  {lang === "pt"
                    ? <>Sua operação de hospitalidade merece números que <em style={{ fontStyle: "italic", color: ROSE }}>fazem sentido.</em></>
                    : <>Your hospitality operation deserves numbers that <em style={{ fontStyle: "italic", color: ROSE }}>tell the right story.</em></>
                  }
                </h1>
                <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: "#6b5f56", maxWidth: 500 }}>
                  {lang === "pt"
                    ? "Consultoria financeira para negócios de F&B e hotelaria, cursos práticos e mentoria de carreira internacional — para quem quer crescer com rigor e resultado."
                    : "Financial consulting for F&B and hotel businesses, practical courses, and international career mentorship — for professionals who want to grow with rigor and results."
                  }
                </p>

                {/* Credentials */}
                <div className="space-y-2 mb-8">
                  {credentials.map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "#4a443d" }}>
                      <CheckCircle size={14} style={{ color: GREEN, flexShrink: 0 }} />
                      {c}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/consulting"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ backgroundColor: INK }}
                  >
                    {lang === "pt" ? "Ver serviços de consultoria" : "Explore consulting services"} <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium border transition-all hover:bg-muted"
                    style={{ borderColor: "#e0d8d0" }}
                  >
                    {lang === "pt" ? "Explorar cursos" : "Explore courses"}
                  </Link>
                </div>
              </motion.div>

              {/* Right: Mahala card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20" style={{ background: `radial-gradient(circle, ${ROSE}, transparent)` }} />
                  <div className="relative rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: "#e8e2da", background: "#fffdfa" }}>
                    {/* Top bar */}
                    <div className="h-1" style={{ background: `linear-gradient(90deg, ${ROSE}, ${GOLD})` }} />
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Mahala-Perfil_897f720e.png"
                      alt="Dr. Mahala Geronasso"
                      className="w-full aspect-[4/3] object-cover object-top"
                    />
                    <div className="p-6">
                      <div className="font-heading text-xl font-semibold mb-1" style={{ color: INK }}>Dr. Mahala Geronasso</div>
                      <div className="text-xs font-medium tracking-wide mb-4" style={{ color: ROSE }}>Ph.D. · MBA · CHIA · Les Roches Abu Dhabi</div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        {[
                          { val: "10+", lbl: lang === "pt" ? "Anos" : "Years" },
                          { val: "5", lbl: lang === "pt" ? "Países" : "Countries" },
                          { val: "2", lbl: lang === "pt" ? "Livros" : "Textbooks" },
                        ].map((s, i) => (
                          <div key={i} className="rounded-lg py-2.5 px-1" style={{ background: "#f6f2ec" }}>
                            <div className="font-heading text-xl font-bold" style={{ color: INK }}>{s.val}</div>
                            <div className="text-[10px] mt-0.5" style={{ color: "#8a8278" }}>{s.lbl}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== VERIFIED STRIP ===== */}
        <div className="border-y py-4" style={{ borderColor: "#ede8e0", background: "#faf7f3" }}>
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {[
                { icon: "🎓", text: "Ph.D. UCF", sub: lang === "pt" ? "Verificável via Parchment" : "Verifiable via Parchment", href: "https://www.parchment.com/u/s/14Xd" },
                { icon: "🇦🇪", text: "UAE MOHESR", sub: lang === "pt" ? "Qualificação Reconhecida · Doc. 2026053034" : "Recognized Qualification · Doc. 2026053034", href: "https://uaeverify.gov.ae" },
                { icon: "📚", text: "Kendall Hunt", sub: lang === "pt" ? "Livro-texto publicado" : "Published textbook", href: "https://he.kendallhunt.com/product/financial-management-hospitality-industry" },
                { icon: "🏆", text: "ICHRIE 2026", sub: lang === "pt" ? "Best Paper Award" : "Best Paper Award", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group no-underline">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold group-hover:underline" style={{ color: INK }}>{item.text}</div>
                    <div className="text-[10px]" style={{ color: "#8a8278" }}>{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CONSULTING SPOTLIGHT ===== */}
        <section className="py-20 lg:py-24" style={{ background: INK }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: ROSE }}>
                  {lang === "pt" ? "MahGui Consulting" : "MahGui Consulting"}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white">
                  {lang === "pt"
                    ? <>Seus números deveriam te dar <em style={{ fontStyle: "italic", color: ROSE }}>clareza.</em> Não dúvidas.</>
                    : <>Your numbers should give you <em style={{ fontStyle: "italic", color: ROSE }}>clarity.</em> Not questions.</>
                  }
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {lang === "pt"
                    ? "A maioria dos planos de negócio para F&B chega com COGS subestimado, custos ocultos e sem projeção de ramp-up. Nós reconstruímos isso com benchmarks reais de mercado — antes que o problema apareça na operação."
                    : "Most F&B business plans arrive with underestimated COGS, missing cost categories and no ramp-up projection. We rebuild that with real market benchmarks — before the problem shows up in your operations."
                  }
                </p>

                {/* Case highlight */}
                <div className="rounded-xl p-5 mb-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-3" style={{ color: ROSE }}>
                    {lang === "pt" ? "Caso Real — Samba Poke & Sushi, Orlando FL" : "Recent Case — Samba Poke & Sushi, Orlando FL"}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: "$370K", lbl: lang === "pt" ? "Investimento justificado" : "Investment justified" },
                      { val: "14–18mo", lbl: lang === "pt" ? "Payback (base)" : "Payback (base case)" },
                      { val: "3", lbl: lang === "pt" ? "Cenários modelados" : "Scenarios modeled" },
                      { val: "12mo", lbl: lang === "pt" ? "Projeção mês a mês" : "Month-by-month projection" },
                    ].map((m, i) => (
                      <div key={i} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <div className="font-heading text-xl font-bold text-white">{m.val}</div>
                        <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ROSE }}
                >
                  {lang === "pt" ? "Ver todos os serviços" : "View all consulting services"} <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Right: service cards */}
              <div className="space-y-4">
                {consultingServices.map((svc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-xl p-5 transition-all hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg p-2 mt-0.5 flex-shrink-0" style={{ background: `${ROSE}20`, color: ROSE }}>
                          {svc.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">{svc.title}</div>
                          <div className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{svc.desc}</div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold" style={{ color: ROSE }}>{svc.price}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="text-center pt-2"
                >
                  <Link
                    href="/consulting"
                    className="text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {lang === "pt" ? "Conversa inicial gratuita de 30 min →" : "Free 30-min discovery call →"}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="py-12 border-b" style={{ borderColor: "#ede8e0" }}>
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COURSES PREVIEW ===== */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ROSE }}>
                  {lang === "pt" ? "MahGui Academy" : "MahGui Academy"}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold">{t("courses.title")}</h2>
              </div>
              <Link
                href="/courses"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: ROSE }}
              >
                {t("courses.viewAll")} <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => {
                const key = cat === "all" ? "courses.filter.all" : `courses.filter.${cat}`;
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all ${
                      isActive ? "text-white border-transparent" : "text-muted-foreground border-border/60 hover:border-border hover:text-foreground"
                    }`}
                    style={isActive ? { backgroundColor: ROSE, borderColor: ROSE } : {}}
                  >
                    {t(key)}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>

            <div className="sm:hidden mt-6 text-center">
              <Link href="/courses" className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: ROSE }}>
                {t("courses.viewAll")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== INSTRUCTORS ===== */}
        <section className="py-16 lg:py-20 bg-[#FAFAF8]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">{t("professors.title")}</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t("professors.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden border shadow-sm"
                style={{ borderColor: "#e8e2da" }}
              >
                <div className="h-1.5" style={{ backgroundColor: ROSE }} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Mahala-Perfil_897f720e.png" alt="Dr. Mahala Geronasso" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{t("professors.mahala.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("professors.mahala.role")}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{t("professors.mahala.bio")}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <Link href="/professors" className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: ROSE }}>
                      {t("courses.viewAll")} <ArrowRight size={14} />
                    </Link>
                    <Link href="/consulting" className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: INK }}>
                      {lang === "pt" ? "Consultoria →" : "Consulting →"}
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden border shadow-sm"
                style={{ borderColor: "#e8e2da" }}
              >
                <div className="h-1.5" style={{ backgroundColor: GREEN }} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Gui-Perfil_d9e5066e.png" alt="Guilherme Gomes" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{t("professors.guilherme.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("professors.guilherme.role")}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{t("professors.guilherme.bio")}</p>
                  <Link href="/professors" className="inline-flex items-center gap-1 mt-4 text-sm font-medium" style={{ color: GREEN }}>
                    {t("courses.viewAll")} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== E-BOOK ===== */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border"
              style={{ borderColor: "#e8e2da", background: "linear-gradient(135deg, #FDF2F6 0%, #fff 50%, #E8F5F0 100%)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 p-8 lg:p-12 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-xl blur-xl" style={{ background: `${ROSE}18` }} />
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/ebook-cover_0a319ab1.png" alt="Financial Management for the Hospitality Industry" className="relative w-48 lg:w-56 rounded-lg shadow-xl" />
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full" style={{ backgroundColor: ROSE }}>{t("ebook.badge")}</span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold leading-snug">{t("ebook.title")}</h3>
                  <p className="text-sm font-medium" style={{ color: ROSE }}>{t("ebook.authors")}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("ebook.desc")}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span>{t("ebook.pages")}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{t("ebook.format")}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{t("ebook.publisher")}</span>
                  </div>
                  <a href="https://he.kendallhunt.com/product/financial-management-hospitality-industry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: ROSE }}>
                    {t("ebook.cta")} — {t("ebook.price")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== DUAL CTA ===== */}
        <section className="py-16 lg:py-20" style={{ background: "#f6f2ec" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Consulting CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 lg:p-10 text-white"
                style={{ background: INK }}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: ROSE }}>
                  MahGui Consulting
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4 text-white">
                  {lang === "pt" ? "Precisa de um business plan ou revisão financeira?" : "Need a business plan or financial audit?"}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.60)" }}>
                  {lang === "pt"
                    ? "Conversa inicial gratuita de 30 minutos. Sem compromisso."
                    : "Free 30-minute discovery call. No commitment."}
                </p>
                <Link
                  href="/consulting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ROSE }}
                >
                  {lang === "pt" ? "Explorar consultoria" : "Explore consulting"} <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Academy CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl p-8 lg:p-10 border"
                style={{ background: "#fff", borderColor: "#e8e2da" }}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: GREEN }}>
                  MahGui Academy
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4" style={{ color: INK }}>
                  {lang === "pt" ? "Quer aprender finanças e revenue management?" : "Want to learn finance and revenue management?"}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                  {lang === "pt"
                    ? "Cursos práticos criados por quem viveu a hospitalidade em 4 continentes."
                    : "Practical courses created by someone who lived hospitality across 4 continents."}
                </p>
                <Link
                  href="/plans"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: GREEN }}
                >
                  {t("cta.button")} <ArrowRight size={14} />
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

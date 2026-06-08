/*
 * MahGui Academy — Plans Page (v3)
 * Structure: Hero → Resume Workshop → Mentorship PASSPORT → FAQ → Consulting CTA
 * No subscription plans — individual course + mentorship only
 */
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ArrowRight, Gem, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const ROSE  = "#D4537E";
const GREEN = "#1D9E75";
const INK   = "#1a1a1a";
const NAVY  = "#6B1A2E";
const GOLD  = "#A8852C";

const RESUME_LINK    = "https://mahguiacademy.gumroad.com/l/international-resume-workshop";
const MENTORSHIP_LINK = "https://tally.so/r/QK24jA";
const WA_LINK        = "https://wa.me/971521735949";

export default function Plans() {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resumeIncludes = lang === "pt"
    ? ["Template ATS-friendly com instruções de uso","Guia de verbos de ação por função","Como adaptar seu CV para o mercado UAE e EUA","Como escrever um resumo profissional que chama atenção","Checklist pré-envio — o que nunca esquecer","Acesso vitalício + atualizações futuras"]
    : ["ATS-friendly template with usage instructions","Action verbs guide by function","How to adapt your CV for UAE and US markets","How to write a professional summary that stands out","Pre-submission checklist — what to never forget","Lifetime access + future updates"];

  const passportSteps = lang === "pt"
    ? ["P — Profile: Defina sua identidade profissional global",
       "A — Assets: Mapeie suas conquistas e diferenciais",
       "S — Story: Construa sua narrativa de carreira",
       "S — Strategy: Planeje sua movimentação internacional",
       "P — Positioning: Posicione-se para o cargo certo",
       "O — Outreach: Aborde recrutadores com confiança",
       "R — Results: Monitore e ajuste até chegar lá",
       "T — Transition: Execute a transição com segurança"]
    : ["P — Profile: Define your global professional identity",
       "A — Assets: Map your achievements and differentiators",
       "S — Story: Build your career narrative",
       "S — Strategy: Plan your international market move",
       "P — Positioning: Position yourself for the right role",
       "O — Outreach: Approach recruiters with confidence",
       "R — Results: Monitor and adjust until you get there",
       "T — Transition: Execute the move with security"];

  const mentorshipIncludes = [
    { icon: "🎯", title: lang === "pt" ? "Estratégia 1:1 personalizada" : "Personalized 1:1 strategy", desc: lang === "pt" ? "Sessões individuais com foco no seu perfil e objetivos específicos." : "Individual sessions focused on your profile and specific goals." },
    { icon: "📄", title: lang === "pt" ? "Currículo internacional" : "International resume", desc: lang === "pt" ? "Reconstrução completa para o padrão UAE/EUA — formato ATS." : "Full rebuild to UAE/USA standards — ATS format." },
    { icon: "🌐", title: "LinkedIn Optimization", desc: lang === "pt" ? "Headline, About e Experience reescritos para atrair os recrutadores certos." : "Headline, About, Experience rewritten to attract the right recruiters." },
    { icon: "🎤", title: lang === "pt" ? "Prep para entrevistas" : "Interview preparation", desc: lang === "pt" ? "Simulações reais e como apresentar seu valor em inglês." : "Real simulations and how to present your value in English." },
    { icon: "🤝", title: lang === "pt" ? "Estratégia de outreach" : "Outreach strategy", desc: lang === "pt" ? "Como abrir portas em mercados internacionais sem contatos prévios." : "How to open doors internationally without prior contacts." },
    { icon: "📚", title: lang === "pt" ? "Acesso total à Academy" : "Full Academy access", desc: lang === "pt" ? "Todos os cursos disponíveis durante o programa." : "All courses available throughout the program." },
  ];

  const faqs = lang === "pt"
    ? [
        { q: "O workshop de currículo é um curso gravado?", a: "Sim — é um produto digital que você compra uma vez e tem acesso vitalício. Inclui template, guias e checklist para você montar o seu CV internacional no próprio ritmo." },
        { q: "O que é o Método PASSPORT?", a: "É o método proprietário da Dra. Mahala para transição de carreira internacional na hospitalidade. Cada letra representa uma etapa do processo — do posicionamento até a transição efetiva. A mentoria é 100% baseada nesse framework." },
        { q: "A mentoria é individual ou em grupo?", a: "Individual e personalizada. Cada mentorado recebe atenção direta da Dra. Mahala com plano de ação criado especificamente para o seu perfil e objetivos. Os cohorts são pequenos e as vagas limitadas." },
        { q: "Quanto tempo dura a mentoria?", a: "6 meses de acompanhamento individual — tempo suficiente para passar por todas as etapas do PASSPORT com profundidade e consistência." },
        { q: "Posso fazer a mentoria sem experiência internacional?", a: "Sim — o método PASSPORT foi criado exatamente para quem quer dar o primeiro passo. Trabalhamos seu posicionamento a partir da experiência que você já tem." },
        { q: "Como funciona o processo de aplicação?", a: "Você preenche o formulário de aplicação, a Dra. Mahala lê manualmente e seleciona as candidaturas. Se aprovada(o), você recebe o link de pagamento para garantir sua vaga. As vagas são limitadas por cohort." },
        { q: "A consultoria financeira está incluída nos planos?", a: "Não — a MahGui Consulting (business plans e revisão de P&L para negócios de F&B) é um serviço separado com precificação própria. Veja os detalhes em /consulting." },
      ]
    : [
        { q: "Is the resume workshop a recorded course?", a: "Yes — it's a digital product you purchase once with lifetime access. It includes a template, guides and a checklist so you can build your international CV at your own pace." },
        { q: "What is the PASSPORT Method?", a: "It's Dr. Mahala's proprietary method for international hospitality career transitions. Each letter represents a step in the process — from positioning to the actual move. The mentorship is 100% built around this framework." },
        { q: "Is the mentorship individual or group?", a: "Individual and personalized. Every mentee receives direct attention from Dr. Mahala with an action plan created specifically for their profile and goals. Cohorts are small and spots are limited." },
        { q: "How long does the mentorship last?", a: "6 months of individual support — enough time to go through every PASSPORT step with depth and consistency." },
        { q: "Can I join the mentorship without international experience?", a: "Yes — the PASSPORT method was designed exactly for those taking their first international step. We build your positioning from the experience you already have." },
        { q: "How does the application process work?", a: "You fill out the application form, Dr. Mahala reads it manually and selects candidates. If approved, you receive the payment link to secure your spot. Spots are limited per cohort." },
        { q: "Is financial consulting included in the plans?", a: "No — MahGui Consulting (business plans and P&L review for F&B businesses) is a separate service. See details at /consulting." },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="pt-20 pb-14 lg:pt-28 lg:pb-20 text-center" style={{ background: "linear-gradient(135deg,#fdf8f5 0%,#fff 60%)" }}>
          <div className="container max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-5 px-3 py-1 rounded-full border" style={{ color: ROSE, borderColor: `${ROSE}40`, background: `${ROSE}10` }}>
                {lang === "pt" ? "Escolha o seu caminho" : "Choose your path"}
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5" style={{ color: INK }}>
                {lang === "pt"
                  ? <span>Invista no profissional<br />que você <em style={{ fontStyle: "italic", color: ROSE }}>quer ser.</em></span>
                  : <span>Invest in the professional<br />you <em style={{ fontStyle: "italic", color: ROSE }}>want to become.</em></span>
                }
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {lang === "pt"
                  ? "Um workshop prático para começar agora, ou uma mentoria individual de 6 meses para transformar sua trajetória na hospitalidade internacional."
                  : "A practical workshop to start now, or a 6-month individual mentorship to transform your international hospitality career."
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── RESUME WORKSHOP ── */}
        <section className="pb-20 lg:pb-24">
          <div className="container max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border" style={{ borderColor: "#e8e2da" }}>

              {/* left */}
              <div className="p-8 lg:p-12" style={{ background: "#faf7f3" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${ROSE}15`, color: ROSE }}>
                    <BookOpen size={20} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: ROSE }}>
                    {lang === "pt" ? "Workshop Digital" : "Digital Workshop"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-3" style={{ color: INK }}>
                  {lang === "pt" ? "International Resume Workshop" : "International Resume Workshop"}
                </h2>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                  {lang === "pt"
                    ? "Tudo que você precisa para montar um CV internacional que passe por sistemas ATS e chame atenção de recrutadores em hotéis e redes globais."
                    : "Everything you need to build an international resume that passes ATS systems and catches the attention of recruiters at global hotel brands."
                  }
                </p>
                <div className="mb-8">
                  <span className="font-heading text-4xl font-bold" style={{ color: INK }}>$27</span>
                  <span className="text-sm text-muted-foreground ml-2">{lang === "pt" ? "· acesso vitalício" : "· lifetime access"}</span>
                </div>
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ROSE }}>
                  {lang === "pt" ? "Comprar agora" : "Buy now"} <ArrowRight size={14} />
                </a>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  {lang === "pt" ? "Pagamento seguro via Gumroad" : "Secure payment via Gumroad"}
                </p>
              </div>

              {/* right */}
              <div className="p-8 lg:p-12 bg-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                  {lang === "pt" ? "O que está incluído" : "What's included"}
                </p>
                <ul className="space-y-4">
                  {resumeIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${ROSE}15` }}>
                        <Check size={11} strokeWidth={3} style={{ color: ROSE }} />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-xl" style={{ background: "#faf7f3", border: "1px solid #e8e2da" }}>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lang === "pt"
                      ? "💡 Criado pela Dra. Mahala com base na revisão de mais de 50 currículos de profissionais de hospitalidade no UAE — você aprende exatamente o que os recrutadores esperam ver."
                      : "💡 Created by Dr. Mahala based on reviewing 50+ hospitality professional resumes in the UAE — you learn exactly what recruiters expect to see."
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MENTORSHIP ── */}
        <section className="py-20 lg:py-28" style={{ background: INK }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: ROSE }}>
                {lang === "pt" ? "Mentoria Individual · Hospitality Without Borders" : "Individual Mentorship · Hospitality Without Borders"}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                {lang === "pt"
                  ? <span>O método que leva você<br />para <em style={{ fontStyle: "italic", color: ROSE }}>onde quer chegar.</em></span>
                  : <span>The method that takes you<br />to <em style={{ fontStyle: "italic", color: ROSE }}>where you want to be.</em></span>
                }
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
                {lang === "pt"
                  ? "6 meses de acompanhamento individual com a Dra. Mahala, baseado no Método PASSPORT — um framework proprietário de 8 etapas para transição de carreira internacional na hospitalidade."
                  : "6 months of individual support with Dr. Mahala, based on the PASSPORT Method — a proprietary 8-step framework for international hospitality career transitions."
                }
              </p>
            </motion.div>

            {/* PASSPORT steps */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-16">
              {passportSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-heading text-2xl font-bold mb-2" style={{ color: ROSE }}>{step[0]}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{step.slice(4)}</div>
                </motion.div>
              ))}
            </div>

            {/* What's included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
              {mentorshipIncludes.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h4 className="font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="max-w-3xl mx-auto rounded-2xl p-8 lg:p-12 text-center"
              style={{ background: `linear-gradient(135deg, ${NAVY}dd, ${INK})`, border: `1px solid ${ROSE}40` }}>
              <Gem size={32} style={{ color: ROSE, margin: "0 auto 16px" }} />
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                {lang === "pt" ? "Mentoria PASSPORT" : "PASSPORT Mentorship"}
              </h3>
              <p className="text-sm leading-relaxed mb-2 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                {lang === "pt"
                  ? "As vagas são limitadas por cohort. A Dra. Mahala lê todas as aplicações manualmente e seleciona quem pode realmente aproveitar o programa."
                  : "Spots are limited per cohort. Dr. Mahala reads every application manually and selects those who can truly make the most of the program."
                }
              </p>
              <p className="text-xs mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
                {lang === "pt" ? "Preço informado após aprovação da aplicação." : "Pricing shared after application approval."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={MENTORSHIP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ROSE }}>
                  {lang === "pt" ? "Aplicar agora" : "Apply now"} <ArrowRight size={14} />
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-medium text-white border transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                  {lang === "pt" ? "Perguntar via WhatsApp" : "Ask via WhatsApp"}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-24" style={{ background: "#faf7f3" }}>
          <div className="container max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: ROSE }}>FAQ</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold" style={{ color: INK }}>
                {lang === "pt" ? "Perguntas frequentes" : "Frequently asked questions"}
              </h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="rounded-xl overflow-hidden border bg-white" style={{ borderColor: "#e8e2da" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left transition-colors hover:bg-gray-50">
                    <span className="font-medium text-sm lg:text-base pr-4" style={{ color: INK }}>{faq.q}</span>
                    <ChevronDown size={18} style={{ color: ROSE, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                        <div className="px-5 lg:px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6b5f56", borderTop: "1px solid #f0ebe4", paddingTop: 16 }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSULTING BANNER ── */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" style={{ background: INK }}>
              <div className="p-8 lg:p-12">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: ROSE }}>
                  MahGui Consulting
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                  {lang === "pt"
                    ? <span>Tem um negócio de F&B?<br /><em style={{ fontStyle: "italic", color: ROSE }}>Precisa de um business plan?</em></span>
                    : <span>Have an F&B business?<br /><em style={{ fontStyle: "italic", color: ROSE }}>Need a business plan?</em></span>
                  }
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {lang === "pt"
                    ? "Business plans, revisão de P&L e análise financeira para restaurantes e conceitos de F&B. Serviço separado da Academy."
                    : "Business plans, P&L review and financial analysis for restaurants and F&B concepts. Separate from the Academy."
                  }
                </p>
                <Link href="/consulting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ROSE }}>
                  {lang === "pt" ? "Ver serviços" : "View services"} <ArrowRight size={14} />
                </Link>
              </div>
              <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="grid grid-cols-2 gap-4 h-full content-center">
                  {[
                    { val: "$800–$1,500", lbl: lang === "pt" ? "Business Plan completo" : "Full Business Plan" },
                    { val: "$300–$500",   lbl: "P&L Review" },
                    { val: "5–10",        lbl: lang === "pt" ? "dias de entrega" : "day delivery" },
                    { val: "EN + PT",     lbl: lang === "pt" ? "documentos bilíngues" : "bilingual documents" },
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="font-heading text-xl font-bold" style={{ color: ROSE }}>{m.val}</div>
                      <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

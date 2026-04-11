import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Crown, Gem } from "lucide-react";

interface PlanFeature { key: string; }
interface Plan { nameKey: string; descKey: string; priceKey: string; perKey: string; brlKey: string; features: PlanFeature[]; accent: string; popular?: boolean; badgeKey?: string; icon: React.ReactNode; }

export default function Plans() {
  const { t } = useLanguage();
  const GUMROAD = "https://mahguiacademy.gumroad.com/l/dgqyv";
  const plans: Plan[] = [
    { nameKey: "plans.individual", descKey: "plans.individual.desc", priceKey: "plans.individual.price", perKey: "plans.individual.per", brlKey: "plans.individual.brl", accent: "#6B7280", icon: <Star size={20} />, features: [{ key: "plans.feature.lifetime" }, { key: "plans.feature.materials" }, { key: "plans.feature.certificate" }, { key: "plans.feature.community" }] },
    { nameKey: "plans.monthly", descKey: "plans.monthly.desc", priceKey: "plans.monthly.price", perKey: "plans.monthly.per", brlKey: "plans.monthly.brl", accent: "#D4537E", popular: true, badgeKey: "plans.popular", icon: <Sparkles size={20} />, features: [{ key: "plans.feature.allCourses" }, { key: "plans.feature.newContent" }, { key: "plans.feature.certificate" }, { key: "plans.feature.community" }, { key: "plans.feature.priority" }] },
    { nameKey: "plans.annual", descKey: "plans.annual.desc", priceKey: "plans.annual.price", perKey: "plans.annual.per", brlKey: "plans.annual.brl", accent: "#1D9E75", badgeKey: "plans.save", icon: <Crown size={20} />, features: [{ key: "plans.feature.allCourses" }, { key: "plans.feature.newContent" }, { key: "plans.feature.certificate" }, { key: "plans.feature.community" }, { key: "plans.feature.priority" }, { key: "plans.feature.exclusive" }] },
    { nameKey: "plans.mentorship", descKey: "plans.mentorship.desc", priceKey: "plans.mentorship.price", perKey: "plans.mentorship.per", brlKey: "plans.mentorship.brl", accent: "#1a1a1a", icon: <Gem size={20} />, features: [{ key: "plans.feature.mentoring" }, { key: "plans.feature.careerPlan" }, { key: "plans.feature.network" }, { key: "plans.feature.allAccess" }, { key: "plans.feature.priority" }] },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="pt-16 pb-8 lg:pt-24 lg:pb-12">
          <div className="container text-center max-w-2xl mx-auto">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              {t("plans.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-muted-foreground">
              {t("plans.subtitle")}
            </motion.p>
          </div>
        </section>
        <section className="pb-20 lg:pb-28">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {plans.map((plan, i) => {
                const isHighlighted = plan.popular || plan.accent === "#1D9E75";
                return (
                  <motion.div key={plan.nameKey} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative bg-white rounded-xl overflow-hidden transition-all hover:shadow-lg ${isHighlighted ? "border-2 shadow-md" : "border border-border shadow-sm"}`}
                    style={isHighlighted ? { borderColor: plan.accent } : {}}>
                    {plan.badgeKey && (
                      <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: plan.accent }}>
                        {t(plan.badgeKey)}
                      </div>
                    )}
                    <div className="p-6 lg:p-7">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: plan.accent === "#1a1a1a" ? "#f3f4f6" : plan.accent + "18", color: plan.accent }}>
                        {plan.icon}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{t(plan.nameKey)}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed min-h-[3rem]">{t(plan.descKey)}</p>
                      <div className="mt-6 mb-6 pb-6 border-b border-border/50">
                        <span className="font-heading text-3xl font-bold text-foreground">{t(plan.priceKey)}</span>
                        <span className="text-sm text-muted-foreground ml-1.5">{t(plan.perKey)}</span>
                        <p className="text-xs text-muted-foreground mt-1">{t(plan.brlKey)}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((f) => (
                          <li key={f.key} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0" style={{ backgroundColor: plan.accent === "#1a1a1a" ? "#f3f4f6" : plan.accent + "18" }}>
                              <Check size={11} strokeWidth={3} style={{ color: plan.accent }} />
                            </div>
                            <span className="text-sm text-foreground/80">{t(f.key)}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={GUMROAD} target="_blank" rel="noopener noreferrer"
                        className={`w-full py-3 rounded-lg text-sm font-semibold transition-all text-center block ${isHighlighted ? "text-white hover:opacity-90" : "border-2 hover:bg-gray-50"}`}
                        style={isHighlighted ? { backgroundColor: plan.accent } : { borderColor: plan.accent === "#1a1a1a" ? "#d1d5db" : plan.accent, color: plan.accent === "#1a1a1a" ? "#374151" : plan.accent }}>
                        {t("plans.cta")}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-xs text-muted-foreground mt-8">
              {t("plans.brlNote")}
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

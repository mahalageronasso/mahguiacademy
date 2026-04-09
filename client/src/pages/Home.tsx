/*
 * MahGui Academy — Home Page
 * Design: Editorial Acadêmico Contemporâneo
 * - Hero com headline Playfair Display, "lived" em itálico rosa, "4 continents" em verde
 * - Stats row com números em destaque
 * - Courses preview com filtros por categoria
 * - CTA section final
 */
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/lib/courses";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

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
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  // For non-numeric like "PhD"
  if (numericTarget === 0) {
    return (
      <span ref={ref} className="font-heading text-3xl lg:text-4xl font-bold" style={{ color: "#D4537E" }}>
        {target}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-heading text-3xl lg:text-4xl font-bold" style={{ color: "#D4537E" }}>
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useLanguage();
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="container text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight"
            >
              {t("hero.title.1")}
              <em className="not-italic" style={{ color: "#D4537E", fontStyle: "italic" }}>
                {t("hero.title.lived")}
              </em>
              {t("hero.title.2")}
              <span style={{ color: "#1D9E75" }}>{t("hero.title.continents")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/plans"
                className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#D4537E" }}
              >
                {t("hero.cta.plans")}
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-6 py-3 rounded-md text-sm font-medium text-foreground transition-all hover:bg-muted"
              >
                {t("hero.cta.courses")}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="py-10 border-y border-border/40">
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
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">{t("courses.title")}</h2>
              <Link
                href="/courses"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#D4537E" }}
              >
                {t("courses.viewAll")} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => {
                const key = cat === "all" ? "courses.filter.all" : `courses.filter.${cat}`;
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all ${
                      isActive
                        ? "text-white border-transparent"
                        : "text-muted-foreground border-border/60 hover:border-border hover:text-foreground"
                    }`}
                    style={isActive ? { backgroundColor: "#D4537E", borderColor: "#D4537E" } : {}}
                  >
                    {t(key)}
                  </button>
                );
              })}
            </div>

            {/* Course grid */}
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

            {/* Mobile view all */}
            <div className="sm:hidden mt-6 text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 text-sm font-medium"
                style={{ color: "#D4537E" }}
              >
                {t("courses.viewAll")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== INSTRUCTORS PREVIEW ===== */}
        <section className="py-16 lg:py-20 bg-[#FAFAF8]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">{t("professors.title")}</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t("professors.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mahala */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden border border-border/40 shadow-sm"
              >
                <div className="h-1.5" style={{ backgroundColor: "#D4537E" }} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Mahala-Perfil_897f720e.png"
                      alt="Dr. Mahala Geronasso"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{t("professors.mahala.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("professors.mahala.role")}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {t("professors.mahala.bio")}
                  </p>
                  <Link
                    href="/professors"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
                    style={{ color: "#D4537E" }}
                  >
                    {t("courses.viewAll")} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>

              {/* Guilherme */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden border border-border/40 shadow-sm"
              >
                <div className="h-1.5" style={{ backgroundColor: "#1D9E75" }} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Gui-Perfil_d9e5066e.png"
                      alt="Guilherme Gomes"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{t("professors.guilherme.name")}</h3>
                      <p className="text-sm text-muted-foreground">{t("professors.guilherme.role")}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {t("professors.guilherme.bio")}
                  </p>
                  <Link
                    href="/professors"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
                    style={{ color: "#1D9E75" }}
                  >
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
              className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-[#FDF2F6] via-white to-[#E8F5F0]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 p-8 lg:p-12 items-center">
                {/* Book cover */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#D4537E]/10 rounded-xl blur-xl" />
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/ebook-cover_0a319ab1.png"
                      alt="Financial Management for the Hospitality Industry"
                      className="relative w-48 lg:w-56 rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Book info */}
                <div className="lg:col-span-3 space-y-4">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#D4537E" }}
                  >
                    {t("ebook.badge")}
                  </span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-snug">
                    {t("ebook.title")}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: "#D4537E" }}>
                    {t("ebook.authors")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("ebook.desc")}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span>{t("ebook.pages")}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{t("ebook.format")}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{t("ebook.publisher")}</span>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href="https://he.kendallhunt.com/product/financial-management-hospitality-industry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: "#D4537E" }}
                    >
                      {t("ebook.cta")} &mdash; {t("ebook.price")}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 lg:py-24">
          <div className="container text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl lg:text-4xl font-bold"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground"
            >
              {t("cta.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/plans"
                className="inline-flex items-center px-8 py-3.5 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#1D9E75" }}
              >
                {t("cta.button")}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

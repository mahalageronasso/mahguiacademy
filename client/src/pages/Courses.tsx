/*
 * MahGui Academy — Courses Page
 * Design: Editorial Acadêmico Contemporâneo
 * - Hero com imagem de fundo e overlay
 * - Filtros por categoria
 * - Grid completo de todos os cursos
 */
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/lib/courses";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Courses() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/courses-hero-jzoTAGdMg7yuQXFa3RuNTt.webp)",
            }}
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
          <div className="container relative text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl lg:text-5xl font-bold"
            >
              {t("courses.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground"
            >
              {t("hero.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-12 lg:py-16">
          <div className="container">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => {
                const key = cat === "all" ? "courses.filter.all" : `courses.filter.${cat}`;
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
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

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                {t("courses.noCourses")}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

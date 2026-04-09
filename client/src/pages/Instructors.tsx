/*
 * MahGui Academy — Instructors Page
 * Design: Editorial Acadêmico Contemporâneo
 * - Perfis completos com fotos reais, bios baseadas nos CVs
 * - Credenciais, áreas de expertise, cursos associados
 * - Layout assimétrico com imagem à esquerda/direita alternando
 */
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";

export default function Instructors() {
  const { t } = useLanguage();

  const mahalaCourses = courses.filter((c) => c.instructor === "mahala");
  const guilhermeCourses = courses.filter((c) => c.instructor === "guilherme");

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
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/about-instructors-bg-Bjo4wG9pkjQhv9oTB6zY23.webp)",
            }}
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/75 backdrop-blur-sm" />
          <div className="container relative text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-white"
            >
              {t("professors.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-white/70"
            >
              {t("professors.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* ===== MAHALA ===== */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Photo column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-2xl opacity-20"
                    style={{ backgroundColor: "#D4537E" }}
                  />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Mahala-Perfil_897f720e.png"
                    alt="Dr. Mahala Geronasso"
                    className="relative w-full rounded-xl object-cover aspect-[3/4]"
                  />
                </div>
              </motion.div>

              {/* Bio column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 space-y-6"
              >
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold">
                    {t("professors.mahala.name")}
                  </h2>
                  <p className="text-lg mt-1" style={{ color: "#D4537E" }}>
                    {t("professors.mahala.role")}
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <GraduationCap size={14} />, key: "professors.mahala.credential.1" },
                    { icon: <MapPin size={14} />, key: "professors.mahala.credential.2" },
                    { icon: <Briefcase size={14} />, key: "professors.mahala.credential.3" },
                    { icon: <Award size={14} />, key: "professors.mahala.credential.4" },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground bg-[#FDF2F6] px-3 py-1.5 rounded-full"
                    >
                      <span style={{ color: "#D4537E" }}>{item.icon}</span>
                      {t(item.key)}
                    </div>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {t("professors.mahala.bio")}
                </p>

                {/* Expertise */}
                <div>
                  <h4 className="font-heading text-lg font-semibold mb-3">
                    {t("professors.expertise")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border"
                        style={{ borderColor: "#D4537E40", color: "#D4537E" }}
                      >
                        {t(`professors.mahala.expertise.${i}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mahala's courses */}
            <div className="mt-14">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                {t("professors.courses")} Mahala
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {mahalaCourses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container">
          <div className="border-t border-border/40" />
        </div>

        {/* ===== GUILHERME ===== */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Bio column (left on desktop) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 space-y-6 order-2 lg:order-1"
              >
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold">
                    {t("professors.guilherme.name")}
                  </h2>
                  <p className="text-lg mt-1" style={{ color: "#1D9E75" }}>
                    {t("professors.guilherme.role")}
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <Award size={14} />, key: "professors.guilherme.credential.1" },
                    { icon: <GraduationCap size={14} />, key: "professors.guilherme.credential.2" },
                    { icon: <Briefcase size={14} />, key: "professors.guilherme.credential.3" },
                    { icon: <MapPin size={14} />, key: "professors.guilherme.credential.4" },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground bg-[#E8F5F0] px-3 py-1.5 rounded-full"
                    >
                      <span style={{ color: "#1D9E75" }}>{item.icon}</span>
                      {t(item.key)}
                    </div>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {t("professors.guilherme.bio")}
                </p>

                {/* Expertise */}
                <div>
                  <h4 className="font-heading text-lg font-semibold mb-3">
                    {t("professors.expertise")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border"
                        style={{ borderColor: "#1D9E7540", color: "#1D9E75" }}
                      >
                        {t(`professors.guilherme.expertise.${i}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Photo column (right on desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 order-1 lg:order-2"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-2xl opacity-20"
                    style={{ backgroundColor: "#1D9E75" }}
                  />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/Gui-Perfil_d9e5066e.png"
                    alt="Guilherme Gomes"
                    className="relative w-full rounded-xl object-cover aspect-[3/4]"
                  />
                </div>
              </motion.div>
            </div>

            {/* Guilherme's courses */}
            <div className="mt-14">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                {t("professors.courses")} Guilherme
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {guilhermeCourses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

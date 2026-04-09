/*
 * MahGui Academy — CourseCard
 * Design: Editorial Acadêmico Contemporâneo
 * - Card com imagem de capa real no topo
 * - Badge de categoria + badge de instrutor
 * - Preço em USD com opção BRL abaixo + botão Enroll
 */
import { useLanguage } from "@/contexts/LanguageContext";
import type { Course } from "@/lib/courses";
import { toast } from "sonner";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { t } = useLanguage();

  const isM = course.instructor === "mahala";
  const accentColor = isM ? "#D4537E" : "#1D9E75";
  const lightBg = isM ? "#FDF2F6" : "#E8F5F0";
  const instructorName = isM ? "Mahala" : "Guilherme";

  return (
    <div className="group bg-white rounded-lg border border-border/60 overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      {/* Course cover image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={course.image}
          alt={t(course.nameKey)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Instructor badge on image */}
        <span
          className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
          style={{ backgroundColor: accentColor + "CC" }}
        >
          {instructorName}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category badge */}
        <span
          className="text-[11px] font-semibold uppercase tracking-wider"
          style={{ color: accentColor }}
        >
          {t(course.categoryKey)}
        </span>

        {/* Course name */}
        <h3 className="font-heading text-base font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {t(course.nameKey)}
        </h3>

        {/* Meta */}
        <p className="text-xs text-muted-foreground">
          {course.lessons} {t("courses.lessons")} &middot; {course.hours}h
        </p>

        {/* Price + Enroll */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground line-through">
                US$ {course.originalPriceUsd}
              </span>
              <span className="text-base font-semibold text-foreground">
                US$ {course.priceUsd}
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground">
              {t("courses.orInBrl")} {course.priceBrl}
            </span>
          </div>
          <button
            onClick={() => toast(t("misc.comingSoon"))}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-md border transition-all hover:opacity-80"
            style={{
              borderColor: accentColor,
              color: accentColor,
            }}
          >
            {t("courses.enroll")}
          </button>
        </div>
      </div>
    </div>
  );
}

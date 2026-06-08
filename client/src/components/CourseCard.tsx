import { useLanguage } from "@/contexts/LanguageContext";
import type { Course } from "@/lib/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { t } = useLanguage();
  const isM = course.instructor === "mahala";
  const accentColor = isM ? "#D4537E" : "#1D9E75";
  const instructorName = isM ? "Mahala" : "Guilherme";
  const isComingSoon = course.status === "coming-soon";

  return (
    <div className={`group bg-white rounded-lg border border-border/60 overflow-hidden transition-all duration-200 ${
      isComingSoon ? "opacity-80" : "hover:shadow-lg hover:-translate-y-1"
    }`}>
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={course.image}
          alt={t(course.nameKey)}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isComingSoon ? "grayscale-[30%]" : "group-hover:scale-105"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Instructor badge */}
        <span
          className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
          style={{ backgroundColor: accentColor + "CC" }}
        >
          {instructorName}
        </span>

        {/* Coming Soon overlay */}
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full text-white backdrop-blur-sm"
              style={{ backgroundColor: "rgba(26,23,20,0.75)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
          {t(course.categoryKey)}
        </span>
        <h3 className="font-heading text-base font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {t(course.nameKey)}
        </h3>
        <p className="text-xs text-muted-foreground">
          {course.lessons} {t("courses.lessons")} &middot; {course.hours}h
        </p>

        <div className="flex items-center justify-between pt-1">
          {isComingSoon ? (
            <>
              <div>
                <span className="text-base font-semibold text-muted-foreground">
                  US$ {course.priceUsd}
                </span>
                <p className="text-[10px] text-muted-foreground">
                  {t("courses.orInBrl")} {course.priceBrl}
                </p>
              </div>
              <span
                className="text-xs font-semibold px-3.5 py-1.5 rounded-md border cursor-not-allowed"
                style={{ borderColor: "#e5e7eb", color: "#9ca3af" }}
              >
                Coming Soon
              </span>
            </>
          ) : (
            <>
              <div>
                <span className="text-base font-semibold text-foreground">
                  US$ {course.priceUsd}
                </span>
                <p className="text-[10px] text-muted-foreground">
                  {t("courses.orInBrl")} {course.priceBrl}
                </p>
              </div>
              <a
                href={course.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3.5 py-1.5 rounded-md border transition-all hover:opacity-80"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {t("courses.enroll")}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

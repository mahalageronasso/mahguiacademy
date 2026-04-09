/*
 * MahGui Academy — Footer
 * Design: Editorial Acadêmico Contemporâneo
 * - 3 colunas: brand, links rápidos, contato
 * - Linha fina separadora, copyright
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-0">
              <span className="font-heading text-2xl font-bold tracking-tight">
                <span style={{ color: "#D4537E" }}>Mah</span>
                <span style={{ color: "#1D9E75" }}>Gui</span>
              </span>
              <span className="font-heading text-2xl font-normal tracking-tight text-white">
                Academy
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/courses" className="text-sm text-white/60 hover:text-white transition-colors">
                {t("nav.courses")}
              </Link>
              <Link href="/plans" className="text-sm text-white/60 hover:text-white transition-colors">
                {t("nav.plans")}
              </Link>
              <Link href="/professors" className="text-sm text-white/60 hover:text-white transition-colors">
                {t("nav.professors")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t("footer.contact")}
            </h4>
            <a
              href="mailto:sdxinvestments@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Mail size={14} />
              {t("footer.email")}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} MahGui Academy. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

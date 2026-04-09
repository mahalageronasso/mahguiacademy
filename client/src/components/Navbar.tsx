/*
 * MahGui Academy — Navbar
 * Design: Editorial Acadêmico Contemporâneo
 * - Logo com Playfair Display, "Mah" em rosa, "Gui" em verde
 * - Tagline pill central
 * - Toggle EN/PT com botões circulares
 * - CTA "Get started" em fundo escuro
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/courses", label: t("nav.courses") },
    { href: "/plans", label: t("nav.plans") },
    { href: "/professors", label: t("nav.professors") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0 shrink-0">
          <span className="font-heading text-xl lg:text-2xl font-bold tracking-tight">
            <span style={{ color: "#D4537E" }}>Mah</span>
            <span style={{ color: "#1D9E75" }}>Gui</span>
          </span>
          <span className="font-heading text-xl lg:text-2xl font-normal tracking-tight text-foreground">
            Academy
          </span>
        </Link>

        {/* Center tagline pill — desktop only */}
        <div className="hidden lg:flex items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-sans text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#D4537E" }} />
            {t("nav.tagline")}
          </span>
        </div>

        {/* Right side nav */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language toggle */}
          <div className="flex items-center gap-1 rounded-full border border-border/60 p-0.5">
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={lang === "en" ? { backgroundColor: "#D4537E" } : {}}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                lang === "pt"
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={lang === "pt" ? { backgroundColor: "#D4537E" } : {}}
            >
              PT
            </button>
          </div>

          {/* CTA */}
          <Link
            href="/plans"
            className="inline-flex items-center px-5 py-2 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {t("nav.getStarted")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-white"
          >
            <div className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-muted-foreground">Language:</span>
                <div className="flex items-center gap-1 rounded-full border border-border/60 p-0.5">
                  <button
                    onClick={() => setLang("en")}
                    className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                      lang === "en"
                        ? "text-white"
                        : "text-muted-foreground"
                    }`}
                    style={lang === "en" ? { backgroundColor: "#D4537E" } : {}}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang("pt")}
                    className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                      lang === "pt"
                        ? "text-white"
                        : "text-muted-foreground"
                    }`}
                    style={lang === "pt" ? { backgroundColor: "#D4537E" } : {}}
                  >
                    PT
                  </button>
                </div>
              </div>
              <Link
                href="/plans"
                className="block w-full text-center py-2.5 rounded-md text-sm font-semibold text-white"
                style={{ backgroundColor: "#1a1a1a" }}
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.getStarted")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6 py-20">
          <div className="font-heading text-8xl font-bold mb-4" style={{ color: "#D4537E" }}>
            404
          </div>
          <h1 className="font-heading text-2xl font-bold mb-4">
            {lang === "pt" ? "Página não encontrada" : "Page not found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {lang === "pt"
              ? "A página que você está procurando não existe ou foi movida."
              : "The page you're looking for doesn't exist or has been moved."}
          </p>
          <Link href="/"
            className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#1a1a1a" }}>
            {lang === "pt" ? "Voltar para o início" : "Back to home"}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

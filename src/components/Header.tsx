import { getTranslations } from "next-intl/server";
import { Link } from "../i18n/navigation";
import { SelectLanguaje } from "./SelectLanguaje";

export async function Header() {
  // 1. Cargamos las traducciones.
  // Puedes usar namespaces como "HomePage" o "AboutPage"
  // o crear uno específico llamado "Navigation" en tus JSON.
  const tHome = await getTranslations("HomePage");
  const tAbout = await getTranslations("AboutPage");

  return (
    <nav className="container px-4 mx-auto mb-7 flex justify-between">
      {/* 2. El Link mantiene el idioma actual automáticamente */}
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          {/* 3. El texto dentro del Link ahora es dinámico */}
          {tHome("title")}
        </Link>

        <Link
          href="/about"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          {tAbout("title")}
        </Link>
      </div>
      <SelectLanguaje />
    </nav>
  );
}

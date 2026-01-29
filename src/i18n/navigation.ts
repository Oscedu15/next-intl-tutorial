// 1. Importamos 'createNavigation', una utilidad que envuelve las funciones
// de navegación estándar de Next.js para que "entiendan" los idiomas.
import { createNavigation } from "next-intl/navigation";

// 2. Importamos tu configuración de rutas (donde definiste "es", "en", "de").
import { routing } from "./routing";

// 3. Exportamos las herramientas de navegación ya configuradas.
// Al usar 'createNavigation(routing)', estas funciones automáticamente
// sabrán qué prefijo de idioma añadir a las URLs (como /es o /de).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

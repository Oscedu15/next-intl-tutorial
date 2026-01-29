// 1. Importamos la función creadora de middleware de next-intl.
// El middleware es un código que se ejecuta ANTES de que una petición se complete.
import createMiddleware from "next-intl/middleware";

// 2. Importamos el objeto 'routing' que definiste previamente.
// Este objeto contiene la configuración de tu app: idiomas permitidos (es, en, de)
// y el idioma por defecto.
import { routing } from "./i18n/routing";

// 3. Exportamos por defecto la ejecución del middleware pasándole tu configuración.
// Esto hace que, automáticamente, next-intl detecte el idioma del navegador,
// gestione las cookies de preferencia de idioma y maneje las redirecciones
// (por ejemplo, si alguien entra a "/" y su idioma es español, lo mande a "/es").
export default createMiddleware(routing);

// 4. Configuración del 'matcher' (el filtro de rutas).
export const config = {
  // El matcher le dice a Next.js en qué páginas debe "despertarse" este middleware.
  // Es vital para que el middleware no intente traducir archivos internos o imágenes.
  matcher: [
    // Se ejecuta en la raíz del sitio.
    "/",

    // Se ejecuta en cualquier ruta que empiece con uno de los idiomas soportados.
    // El ":path*" asegura que capture todas las sub-páginas (ej: /es/perfil, /en/about).
    "/(es|en|de)/:path*",
  ],
};

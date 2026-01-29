// 1. Importamos las herramientas necesarias del servidor y la lógica de rutas.
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl"; // Función para verificar si un idioma existe en nuestra lista.
import { routing } from "./routing"; // Traemos los locales: ["en", "es", "de"].

// 2. getRequestConfig define la configuración que usará cada petición (request) en el servidor.
// Se ejecuta cada vez que un usuario carga una página.
export default getRequestConfig(async ({ requestLocale }) => {
  // 3. Obtenemos el locale solicitado de la URL (ej: "en").
  // Importante: En las versiones más recientes, 'requestLocale' es una promesa,
  // por eso usamos el 'await'.
  const requested = await requestLocale;

  // 4. Validación de seguridad:
  // Verificamos: ¿El idioma que viene en la URL está en nuestra lista permitida?
  // - Si SI existe: usamos 'requested'.
  // - Si NO existe (o es null): usamos el idioma por defecto ('es').
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // 5. Retornamos la configuración final para esa petición.
  return {
    locale,
    // Importación Dinámica: Aquí ocurre la "magia".
    // Solo carga el archivo JSON del idioma necesario (ej: messages/es.json).
    // Esto hace que la app sea rápida porque no carga todos los idiomas a la vez.
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

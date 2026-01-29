// 1. Importamos 'defineRouting', que es la función de 'next-intl'
// encargada de validar y estructurar la configuración de rutas.
import { defineRouting } from "next-intl/routing";

// 2. Creamos y exportamos la constante 'routing'.
// Centralizar esto aquí permite que tanto el middleware como tus layouts
// lean siempre la misma configuración.
export const routing = defineRouting({
  // 3. 'locales': Define el "diccionario de idiomas" permitidos.
  // Cualquier idioma fuera de esta lista (ej: "fr") lanzará un 404 o usará el default.
  locales: ["en", "es", "de"],

  // 4. 'defaultLocale': El idioma de respaldo (fallback).
  // Si un usuario entra a una ruta sin idioma y el sistema no puede detectar
  // su preferencia, mostrará el sitio en español.
  defaultLocale: "es",

  // 5. 'localePrefix': Controla cómo se ven tus URLs.
  // Al poner "always", obligas a que TODAS las URLs incluyan el código del idioma.
  // Ejemplo: tu página de inicio nunca será solo "/", sino siempre "/es", "/en" o "/de".
  // Esto es excelente para el SEO, ya que ayuda a Google a indexar cada idioma por separado.
  localePrefix: "always",
});

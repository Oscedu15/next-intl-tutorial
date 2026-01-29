import { getTranslations, setRequestLocale } from "next-intl/server";

// --- NUEVA SECCIÓN DE METADATOS ---

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  // Cargamos las traducciones específicamente para los metadatos
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

// --- TU CÓDIGO ORIGINAL (CONSERVADO) ---

export default async function About({
  params,
}: {
  // 2. Tipado de parámetros:
  // Se define 'params' como una promesa que contiene el 'locale' (es, en, de).
  params: Promise<{ locale: string }>;
}) {
  // 3. Resolución del locale:
  // Esperamos la promesa para obtener el string del idioma actual.
  const { locale } = await params;

  // 4. Sincronización del idioma:
  // Informamos a next-intl cuál es el idioma activo para esta ruta específica.
  setRequestLocale(locale);

  // 5. Carga del "Namespace":
  // Buscamos específicamente el objeto "AboutPage" dentro de tu archivo JSON.
  const t = await getTranslations("AboutPage");

  return (
    // 6. Diseño con Tailwind CSS:
    // 'space-y-2': añade una separación vertical uniforme entre los elementos.
    <div className="space-y-2">
      {/* 7. Título dinámico:
          Extrae el valor de "title" (ej: "Über uns" si es alemán). */}
      <h1 className="text-4xl font-bold text-yellow-100">{t("title")}</h1>

      {/* 8. Descripción:
          Extrae "description" del JSON. */}
      <p className="text-white">{t("description")}</p>

      {/* 9. Etiqueta/Botón del equipo:
          Muestra el texto de "team". Fíjate que usaste clases de botón 
          pero en una etiqueta <p>. */}
      <p className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
        {t("team")}
      </p>
    </div>
  );
}

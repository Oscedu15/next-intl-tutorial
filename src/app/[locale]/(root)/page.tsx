// 1. Importaciones de Servidor:
// 'getTranslations' es la función asíncrona para obtener las traducciones en Server Components.
// 'setRequestLocale' asegura que el contexto del idioma se mantenga durante el renderizado estático.
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  // Cargamos las traducciones específicamente para los metadatos
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params,
}: {
  // 2. Tipado de Params:
  // Al igual que en el Layout, aquí 'params' es una Promise (estándar de Next.js 15+).
  params: Promise<{ locale: string }>;
}) {
  // 3. Resolución del idioma:
  // Obtenemos el valor real de 'locale' esperando a la promesa.
  const { locale } = await params;

  // 4. Configuración del Local para la petición:
  // Es vital llamar a esta función al inicio de cada página para que Next.js
  // pueda optimizar el cacheo y la generación estática.
  setRequestLocale(locale);

  // 5. Hook de traducción de Servidor:
  // Cargamos el namespace "HomePage" definido en tus archivos JSON (es.json, en.json, etc.).
  // 'await' es necesario porque es una operación de lectura de archivos en el servidor.
  const t = await getTranslations("HomePage");

  return (
    // 6. UI con Tailwind CSS:
    <div className="space-y-2">
      {/* 7. Uso de traducciones:
          Accedemos a las llaves específicas: title, description y cta. */}
      <h1 className="text-4xl font-bold text-yellow-100">{t("title")}</h1>
      <p className="text-white">{t("description")}</p>

      {/* Botón interactivo: Aunque la página sea de servidor, los textos 
          vienen ya traducidos desde el origen. */}
      <button className="bg-yellow-500 cursor-pointer text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors hover:text-white duration-300 transition-all bg-yellow-500">
        {t("cta")}
      </button>
    </div>
  );
}

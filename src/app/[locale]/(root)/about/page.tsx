import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-yellow-100">{t("title")}</h1>
      <p className="text-white">{t("description")}</p>
      <p className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
        {t("team")}
      </p>
    </div>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("HomePage");
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-yellow-100">{t("title")}</h1>
      <p className="text-white">{t("description")}</p>
      <button className="bg-yellow-500 cursor-pointer text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors hover:text-white duration-300 transition-all bg-yellow-500">
        {t("cta")}
      </button>
    </div>
  );
}

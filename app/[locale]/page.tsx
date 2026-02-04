import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import NotificationButton from "./NotificationButton";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Layout" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="mt-10 text-5xl">{t("title")}</h1>
      <NotificationButton></NotificationButton>
    </main>
  );
}

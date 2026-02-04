"use client";
import { useTranslations } from "next-intl";

export default function NotificationButton() {
  const t = useTranslations("HomePage");
  const handleRequestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("권한 허용");
    }
  };
  return (
    <button
      onClick={handleRequestPermission}
      className="btn my-10 btn-xl btn-soft btn-primary">
      {t("notifymebtn")}
    </button>
  );
}

"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

function initialNotification() {
  new Notification("Title!!", { body: "body!!" });
}

export default function NotificationButton() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);
  const t = useTranslations("HomePage");
  const handleRequestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      initialNotification();
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

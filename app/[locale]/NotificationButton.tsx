"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
// import saveSubscription from "../actions";
import { pushToMe, logServer } from "../actions";

function initialNotification() {
  new Notification("Title!!", { body: "body!!" });
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function NotificationButton() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);
  const NEXT_PUBLIC_VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const t = useTranslations("HomePage");
  const handleRequestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          NEXT_PUBLIC_VAPID_PUBLIC_KEY ? NEXT_PUBLIC_VAPID_PUBLIC_KEY : "",
        ),
      });
      try {
        await logServer(subscription.toJSON());
        await pushToMe();
      } catch (e) {}
      // try {
      //   const result = await saveSubscription(subscription.toJSON());
      //   if (result.sucess) {
      //     console.log("Saved subscription");
      //   }
      // } catch (e) {
      //   console.error("error!", e);
      // }
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

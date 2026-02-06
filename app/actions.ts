"use server";
import webpush from "web-push";

// 🎯 콘솔에서 복사한 님의 고유 주소 (하드코딩!)

// VAPID 설정 (환경변수에서 가져오기)
webpush.setVapidDetails(
  "mailto:your-email@example.com", // 아무 이메일이나 가능
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

// export default async function saveSubscription(subsJSON: PushSubscriptionJSON) {
//   subsJSON.endpoint;
// }

export async function logServer(subsJSON: PushSubscriptionJSON) {
  console.log(JSON.stringify(subsJSON));
}

// export async function pushToMe() {
//   try {
//     await webpush.sendNotification(
//       MY_PHONE_SUB as any,
//       JSON.stringify({
//         title: "립밤",
//         body: "바르자",
//         icon: "/bell-256.png",
//       }),
//     );
//     return { success: true };
//   } catch (e) {
//     return { success: false };
//   }
// }

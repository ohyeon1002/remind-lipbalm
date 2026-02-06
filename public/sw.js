const VERSION = "v1";
const CACHE_NAME = `remind-lipbalm-${VERSION}`;

self.addEventListener("push", (e) => {
  if (e.data) {
    const data = e.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/bell.svg",
      badge: "/bell.svg",
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    };
    e.waitUntil(self.registration.showNotification(data.title, options));
  }
});
self.addEventListener("fetch", (e) => {});
self.addEventListener("notificationClick", (e) => {
  alert("hey!");
});

const VERSION = "v1";
const CACHE_NAME = `remind-lipbalm-${VERSION}`;

self.addEventListener("push", (e) => {
  const message = e.data.json();
});
self.addEventListener("fetch", (e) => {});

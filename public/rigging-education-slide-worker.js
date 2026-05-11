/**
 * Serves cached slide-lesson HTML when offline (after "Save offline").
 * Scope: document navigations whose path includes /rigging/education/slides/
 */
const CACHE_NAME = "rigging-education-slides-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") return;
  const url = new URL(event.request.url);
  if (!url.pathname.includes("/rigging/education/slides/")) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request);
    })
  );
});

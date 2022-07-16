const cacheName = "site-cache-v1";
const assetsToCache = [
  "/pwa-a2sh/",
  "/pwa-a2sh/public/index.html",
  "/pwa-a2sh/public/service-worker.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

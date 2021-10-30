const cacheName = "site-cache-v1";
const assetsToCache = [
  "/portfolio/",
  "/portfolio/public/index.html",
  "/portfolio/public/serviceWorker.js",
];
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

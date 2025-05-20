var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

document.addEventListener("DOMContentLoaded", event => {
   // we can move only if we are not in a browser's tab
   isBrowser = matchMedia("(display-mode: browser)").matches;
   if (!isBrowser) {
      window.moveTo(0, 0);
      window.resizeTo(800, 600);
   }
});

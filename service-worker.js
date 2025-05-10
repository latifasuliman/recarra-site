self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('recarra-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        '/splash/splash-light.png',
        '/splash/splash-dark.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

const CACHE_NAME = 'quanta-pwa-cache-v1';

// Install Event
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch Event (Required for Android "Add to Home Screen" prompt)
self.addEventListener('fetch', (event) => {
  // Simple network-first proxy wrapper
  event.respondWith(
    fetch(event.request).catch(() => {
       return new Response("Network error occurred", {
         status: 408,
         headers: { "Content-Type": "text/plain" }
       });
    })
  );
});

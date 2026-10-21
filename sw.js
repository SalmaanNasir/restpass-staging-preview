const CACHE_NAME = 'restpass-public-v3';
const SCOPE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, '');
const scopedPath = (path) => `${SCOPE_PATH}${path}`;
const PUBLIC_SHELL = [
  scopedPath('/'),
  scopedPath('/manifest.webmanifest'),
  scopedPath('/brand/RestPass_Wordmark.svg'),
  scopedPath('/brand/RestPass_Wordmark_Dark.svg'),
  scopedPath('/icons/restpass-icon-192.png'),
  scopedPath('/icons/restpass-icon-512.png'),
];
const PRIVATE_PREFIXES = ['/checkout/', '/payment/', '/bookings/', '/my-bookings', '/hotel/', '/admin/'].map(scopedPath);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PUBLIC_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || PRIVATE_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match(scopedPath('/'))));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
    return response;
  })));
});

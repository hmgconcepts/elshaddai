/* El Shaddai Christian Drama Ministry — Service Worker v3
   Free PWA: offline support, instant repeat loads, app installability. */
const CACHE = 'ecdm-v3';
const CORE = [
  'index.html','start.html','about.html','watch.html','devotional.html','events.html',
  'prayer.html','give.html','team.html','mylist.html','contact.html','404.html',
  'assets/css/style.css','assets/js/main.js','assets/js/config.js','assets/js/videos.js',
  'assets/images/logo.jpg','assets/images/founder.jpg','manifest.webmanifest'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') {
    /* network-first for pages so visitors always get fresh content */
    e.respondWith(fetch(e.request).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('404.html'))));
  } else {
    /* cache-first for assets (css/js/images) = instant loads */
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok && (e.request.url.startsWith(self.location.origin) || e.request.url.includes('i.ytimg.com'))) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => r)));
  }
});

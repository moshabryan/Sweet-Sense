const CACHE_NAME = "sweetsense-v4";

// Daftar file yang WAJIB ada agar aplikasi bisa jalan offline.
// Saya hapus 'assets/style.css' karena di index.html kamu pakai style internal.
const urlsToCache = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './assets/LOGO2.png'
];

// 1. Install Service Worker
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Service Worker: Caching files...", urlsToCache);
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error("Service Worker: Cache Gagal!", err))
  );
});

// 2. Activate & Hapus Cache Lama
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Hapus cache lama", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. Fetch Strategy (Network First, lalu Cache, lalu Offline Page)
self.addEventListener("fetch", event => {
  // Abaikan request selain GET (seperti POST, chrome-extension, dll)
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith("http")) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Jika berhasil ambil dari internet, simpan copy-nya ke cache (agar nanti bisa offline)
        const resClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // Jika internet mati, ambil dari cache
        return caches.match(event.request).then(response => {
          if (response) return response;
          
          // Jika tidak ada di cache (misal halaman baru), tampilkan halaman offline.html
          if (event.request.headers.get("accept").includes("text/html")) {
            return caches.match('./offline.html');
          }
        });
      })
  );
});
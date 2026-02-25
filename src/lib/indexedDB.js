const DB_NAME = "rilhadas_db";
const DB_VERSION = 1;

let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("galleries")) {
        db.createObjectStore("galleries", { keyPath: "pageId" });
      }
      if (!db.objectStoreNames.contains("events")) {
        db.createObjectStore("events", { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

export async function getStore(storeName, mode = "readonly") {
  const db = await openDB();
  const tx = db.transaction(storeName, mode);
  return tx.objectStore(storeName);
}

export async function getAll(storeName) {
  const store = await getStore(storeName);
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getByKey(storeName, key) {
  const store = await getStore(storeName);
  return new Promise((resolve, reject) => {
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

export async function put(storeName, value) {
  const store = await getStore(storeName, "readwrite");
  return new Promise((resolve, reject) => {
    const req = store.put(value);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function deleteByKey(storeName, key) {
  const store = await getStore(storeName, "readwrite");
  return new Promise((resolve, reject) => {
    const req = store.delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

// Migrate localStorage data to IndexedDB (one-time)
export async function migrateFromLocalStorage() {
  try {
    // Migrate galleries
    const galleriesRaw = localStorage.getItem("rilhadas_galleries_v2");
    if (galleriesRaw) {
      const galleries = JSON.parse(galleriesRaw);
      for (const [pageId, pageGalleries] of Object.entries(galleries)) {
        await put("galleries", { pageId, galleries: pageGalleries });
      }
      localStorage.removeItem("rilhadas_galleries_v2");
      console.log("Galleries migrated from localStorage to IndexedDB");
    }

    // Migrate events
    const eventsRaw = localStorage.getItem("savory_events");
    if (eventsRaw) {
      const events = JSON.parse(eventsRaw);
      for (const event of events) {
        await put("events", event);
      }
      localStorage.removeItem("savory_events");
      console.log("Events migrated from localStorage to IndexedDB");
    }
  } catch (e) {
    console.warn("Migration from localStorage failed:", e);
  }
}

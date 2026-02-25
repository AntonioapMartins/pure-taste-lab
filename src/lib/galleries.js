const GALLERIES_KEY = "rilhadas_galleries_v2";

export function getAllGalleries() {
  try {
    const data = localStorage.getItem(GALLERIES_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function getPageGalleries(pageId) {
  const all = getAllGalleries();
  return all[pageId] || [];
}

function saveAll(data) {
  try {
    localStorage.setItem(GALLERIES_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    if (e?.name === "QuotaExceededError") {
      return false;
    }
    return false;
  }
}

// Compress image to reduce base64 size
export function compressImage(dataUrl, maxWidth = 1200, quality = 0.7) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let w = img.width;
      let h = img.height;
      if (w > maxWidth) {
        h = (maxWidth / w) * h;
        w = maxWidth;
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

export function createGallery(pageId, { title = "", type = "grid" }) {
  const all = getAllGalleries();
  if (!all[pageId]) all[pageId] = [];
  const gallery = {
    id: crypto.randomUUID(),
    title,
    type,
    photos: [],
    createdAt: new Date().toISOString(),
  };
  all[pageId].push(gallery);
  const ok = saveAll(all);
  if (!ok) {
    all[pageId].pop();
    return null;
  }
  return gallery;
}

export function updateGalleryMeta(pageId, galleryId, { title, type }) {
  const all = getAllGalleries();
  const list = all[pageId] || [];
  const idx = list.findIndex((g) => g.id === galleryId);
  if (idx === -1) return;
  if (title !== undefined) list[idx].title = title;
  if (type !== undefined) list[idx].type = type;
  saveAll(all);
}

export function deleteGallery(pageId, galleryId) {
  const all = getAllGalleries();
  if (!all[pageId]) return;
  all[pageId] = all[pageId].filter((g) => g.id !== galleryId);
  saveAll(all);
}

export function addPhotosToGallery(pageId, galleryId, photos) {
  const all = getAllGalleries();
  const list = all[pageId] || [];
  const gallery = list.find((g) => g.id === galleryId);
  if (!gallery) return false;
  const added = [];
  photos.forEach((p) => {
    added.push({
      id: crypto.randomUUID(),
      dataUrl: p.dataUrl,
      caption: p.caption || "",
      createdAt: new Date().toISOString(),
    });
  });
  gallery.photos.push(...added);
  const ok = saveAll(all);
  if (!ok) {
    gallery.photos.splice(gallery.photos.length - added.length, added.length);
    return false;
  }
  return true;
}

export function removePhoto(pageId, galleryId, photoId) {
  const all = getAllGalleries();
  const list = all[pageId] || [];
  const gallery = list.find((g) => g.id === galleryId);
  if (!gallery) return;
  gallery.photos = gallery.photos.filter((p) => p.id !== photoId);
  saveAll(all);
}

export const GALLERY_PAGES = [
  { id: "alojamento", label: "Alojamento" },
  { id: "kartodromo", label: "Kartódromo" },
  { id: "restaurante", label: "Restaurante" },
  { id: "desporto", label: "Desporto & Lazer" },
  { id: "escolas", label: "Escolas & Grupos" },
];

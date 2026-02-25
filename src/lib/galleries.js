import { getByKey, put } from "./indexedDB";

const STORE = "galleries";

// Compress image to reduce size
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

async function getPageRecord(pageId) {
  const record = await getByKey(STORE, pageId);
  return record ? record.galleries : [];
}

async function savePageRecord(pageId, galleries) {
  await put(STORE, { pageId, galleries });
}

export async function getPageGalleries(pageId) {
  return getPageRecord(pageId);
}

export async function createGallery(pageId, { title = "", type = "grid" }) {
  const galleries = await getPageRecord(pageId);
  const gallery = {
    id: crypto.randomUUID(),
    title,
    type,
    photos: [],
    createdAt: new Date().toISOString(),
  };
  galleries.push(gallery);
  await savePageRecord(pageId, galleries);
  return gallery;
}

export async function updateGalleryMeta(pageId, galleryId, { title, type }) {
  const galleries = await getPageRecord(pageId);
  const idx = galleries.findIndex((g) => g.id === galleryId);
  if (idx === -1) return;
  if (title !== undefined) galleries[idx].title = title;
  if (type !== undefined) galleries[idx].type = type;
  await savePageRecord(pageId, galleries);
}

export async function deleteGallery(pageId, galleryId) {
  const galleries = await getPageRecord(pageId);
  const filtered = galleries.filter((g) => g.id !== galleryId);
  await savePageRecord(pageId, filtered);
}

export async function addPhotosToGallery(pageId, galleryId, photos) {
  const galleries = await getPageRecord(pageId);
  const gallery = galleries.find((g) => g.id === galleryId);
  if (!gallery) return false;
  photos.forEach((p) => {
    gallery.photos.push({
      id: crypto.randomUUID(),
      dataUrl: p.dataUrl,
      caption: p.caption || "",
      createdAt: new Date().toISOString(),
    });
  });
  await savePageRecord(pageId, galleries);
  return true;
}

export async function removePhoto(pageId, galleryId, photoId) {
  const galleries = await getPageRecord(pageId);
  const gallery = galleries.find((g) => g.id === galleryId);
  if (!gallery) return;
  gallery.photos = gallery.photos.filter((p) => p.id !== photoId);
  await savePageRecord(pageId, galleries);
}

export const GALLERY_PAGES = [
  { id: "alojamento", label: "Alojamento" },
  { id: "kartodromo", label: "Kartódromo" },
  { id: "restaurante", label: "Restaurante" },
  { id: "desporto", label: "Desporto & Lazer" },
  { id: "escolas", label: "Escolas & Grupos" },
];

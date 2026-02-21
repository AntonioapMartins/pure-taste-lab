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
  localStorage.setItem(GALLERIES_KEY, JSON.stringify(data));
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
  saveAll(all);
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
  if (!gallery) return;
  photos.forEach((p) => {
    gallery.photos.push({
      id: crypto.randomUUID(),
      dataUrl: p.dataUrl,
      caption: p.caption || "",
      createdAt: new Date().toISOString(),
    });
  });
  saveAll(all);
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

const GALLERIES_KEY = "rilhadas_galleries";

export function getGalleries() {
  try {
    const data = localStorage.getItem(GALLERIES_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function getGallery(pageId) {
  const galleries = getGalleries();
  return galleries[pageId] || [];
}

export function saveGalleries(galleries) {
  localStorage.setItem(GALLERIES_KEY, JSON.stringify(galleries));
}

export function addGalleryImage(pageId, imageData) {
  const galleries = getGalleries();
  if (!galleries[pageId]) galleries[pageId] = [];
  galleries[pageId].push({
    id: crypto.randomUUID(),
    ...imageData,
    createdAt: new Date().toISOString(),
  });
  saveGalleries(galleries);
}

export function removeGalleryImage(pageId, imageId) {
  const galleries = getGalleries();
  if (!galleries[pageId]) return;
  galleries[pageId] = galleries[pageId].filter((img) => img.id !== imageId);
  saveGalleries(galleries);
}

export function reorderGallery(pageId, images) {
  const galleries = getGalleries();
  galleries[pageId] = images;
  saveGalleries(galleries);
}

export const GALLERY_PAGES = [
  { id: "alojamento", label: "Alojamento" },
  { id: "kartodromo", label: "Kartódromo" },
  { id: "restaurante", label: "Restaurante" },
  { id: "desporto", label: "Desporto & Lazer" },
  { id: "escolas", label: "Escolas & Grupos" },
];

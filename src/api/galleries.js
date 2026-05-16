import api from "./api";

export const getGalleries = () => api.get("/galleries");

export const getPageGalleries = async (pageId) => {
  const res = await getGalleries();
  return res.data.filter((g) => g.page === pageId);
};

export const createGallery = (formData) =>
  api.post("/galleries", formData);

export const updateGallery = (id, data) =>
  api.put(`/galleries/${id}`, data);

export const deleteGallery = (id) =>
  api.delete(`/galleries/${id}`);

export const addPhotosToGallery = (id, formData) =>
  api.post(`/galleries/${id}/images`, formData);

export const removePhoto = (id) =>
  api.delete(`/galleries/images/${id}`);

export const GALLERY_PAGES = [
  { id: "alojamento", label: "Alojamento" },
  { id: "kartodromo", label: "Kartódromo" },
  { id: "restaurante", label: "Restaurante" },
  { id: "desporto", label: "Desporto & Lazer" },
  { id: "escolas", label: "Escolas & Grupos" },
];
import { useState } from "react";
import { getGallery } from "@/lib/galleries";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const PhotoGallery = ({ pageId, fallbackImages = [] }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const galleryImages = getGallery(pageId);
  
  const images = galleryImages.length > 0 
    ? galleryImages.map((img) => ({ src: img.dataUrl, alt: img.caption || "" }))
    : fallbackImages;

  if (images.length === 0) return null;

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(-1);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
            onClick={() => openLightbox(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Dialog open={lightboxIndex >= 0} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          {lightboxIndex >= 0 && (
            <div className="relative flex items-center justify-center min-h-[60vh]">
              <button
                onClick={prevImage}
                className="absolute left-4 z-50 text-white/80 hover:text-white bg-black/40 rounded-full p-2"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <img
                src={images[lightboxIndex]?.src}
                alt={images[lightboxIndex]?.alt}
                className="max-w-full max-h-[85vh] object-contain"
              />
              <button
                onClick={nextImage}
                className="absolute right-4 z-50 text-white/80 hover:text-white bg-black/40 rounded-full p-2"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

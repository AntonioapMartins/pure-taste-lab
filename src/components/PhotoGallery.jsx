import { useEffect, useState } from "react";
import { getPageGalleries } from "@/api/galleries";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel";

export const PhotoGallery = ({ pageId, fallbackImages = [] }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxPhotos, setLightboxPhotos] = useState([]);

  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    let active = true;
    getPageGalleries(pageId)
      .then((list) => {
        if (!active) return;
        const normalized = (list || []).map((g) => ({
          id: g.id,
          title: g.title,
          type: g.gallery_type || g.type || "grid",
          photos: (g.images || g.photos || []).map((img) => ({
            id: img.id,
            dataUrl: img.image_url || img.dataUrl,
            caption: img.caption || "",
          })),
        }));
        setGalleries(normalized);
      })
      .catch(() => setGalleries([]));
    return () => {
      active = false;
    };
  }, [pageId]);

  const openLightbox = (photos, idx) => {
    setLightboxPhotos(photos);
    setLightboxIndex(idx);
  };
  const closeLightbox = () => setLightboxIndex(-1);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % lightboxPhotos.length);

  const allPhotos = galleries.flatMap((g) => g.photos);
  const hasFallback = allPhotos.length === 0 && fallbackImages.length > 0;

  if (galleries.length === 0 && !hasFallback) return null;

  const nonEmptyGalleries = galleries.filter((g) => g.photos.length > 0);
  if (galleries.length > 0 && nonEmptyGalleries.length === 0) return null;

  if (hasFallback) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {fallbackImages.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
            onClick={() => {
              setLightboxPhotos(fallbackImages);
              setLightboxIndex(idx);
            }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
          </div>
        ))}
        <LightboxDialog
          open={lightboxIndex >= 0}
          onClose={closeLightbox}
          photos={lightboxPhotos}
          index={lightboxIndex}
          onPrev={prevImage}
          onNext={nextImage}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {galleries.map((gallery) => {
        if (gallery.photos.length === 0) return null;
        const photos = gallery.photos.map((p) => ({ src: p.dataUrl, alt: p.caption || "" }));

        return (
          <div key={gallery.id}>
            {gallery.title && (
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{gallery.title}</h3>
            )}

            {gallery.type === "carousel" ? (
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-3">
                  {photos.map((photo, idx) => (
                    <CarouselItem key={idx} className="pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div
                        className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
                        onClick={() => openLightbox(photos, idx)}
                      >
                        <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
                    onClick={() => openLightbox(photos, idx)}
                  >
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <LightboxDialog
        open={lightboxIndex >= 0}
        onClose={closeLightbox}
        photos={lightboxPhotos}
        index={lightboxIndex}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
};

const LightboxDialog = ({ open, onClose, photos, index, onPrev, onNext }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
      <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white/80 hover:text-white">
        <X className="h-6 w-6" />
      </button>
      {index >= 0 && photos[index] && (
        <div className="relative flex items-center justify-center min-h-[60vh]">
          <button onClick={onPrev} className="absolute left-4 z-50 text-white/80 hover:text-white bg-black/40 rounded-full p-2">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img src={photos[index].src} alt={photos[index].alt} className="max-w-full max-h-[85vh] object-contain" />
          <button onClick={onNext} className="absolute right-4 z-50 text-white/80 hover:text-white bg-black/40 rounded-full p-2">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

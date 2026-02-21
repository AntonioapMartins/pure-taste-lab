import { useState, useRef } from "react";
import { getGallery, addGalleryImage, removeGalleryImage, GALLERY_PAGES } from "@/lib/galleries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as ImageIcon, Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const GalleryManager = () => {
  const [activeTab, setActiveTab] = useState(GALLERY_PAGES[0].id);
  const [galleries, setGalleries] = useState(() => {
    const obj = {};
    GALLERY_PAGES.forEach((p) => { obj[p.id] = getGallery(p.id); });
    return obj;
  });
  const [caption, setCaption] = useState("");
  const fileRef = useRef(null);

  const refresh = () => {
    const obj = {};
    GALLERY_PAGES.forEach((p) => { obj[p.id] = getGallery(p.id); });
    setGalleries(obj);
  };

  const handleAddImage = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "Imagem muito grande", description: `${file.name} excede 5MB.`, variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        addGalleryImage(activeTab, { dataUrl: reader.result, caption: caption || file.name });
        refresh();
        toast({ title: "Imagem adicionada" });
      };
      reader.readAsDataURL(file);
    });
    if (fileRef.current) fileRef.current.value = "";
    setCaption("");
  };

  const handleRemove = (pageId, imageId) => {
    removeGalleryImage(pageId, imageId);
    refresh();
    toast({ title: "Imagem removida" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <ImageIcon className="h-5 w-5 text-primary" />
          Galerias de Fotos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4 flex-wrap h-auto">
            {GALLERY_PAGES.map((page) => (
              <TabsTrigger key={page.id} value={page.id} className="text-xs sm:text-sm">
                {page.label}
                {galleries[page.id]?.length > 0 && (
                  <span className="ml-1.5 bg-primary/10 text-primary rounded-full px-1.5 py-0.5 text-xs">
                    {galleries[page.id].length}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {GALLERY_PAGES.map((page) => (
            <TabsContent key={page.id} value={page.id}>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="flex-1">
                  <Label htmlFor="gallery-caption" className="text-xs text-muted-foreground mb-1">Legenda (opcional)</Label>
                  <Input
                    id="gallery-caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Legenda da imagem"
                  />
                </div>
                <div className="flex items-end">
                  <Button size="sm" onClick={() => fileRef.current?.click()}>
                    <Plus className="h-4 w-4 mr-1" />
                    Adicionar Fotos
                  </Button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleAddImage}
                  />
                </div>
              </div>

              {galleries[page.id]?.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  <ImageIcon className="h-10 w-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Sem fotos nesta galeria</p>
                  <p className="text-xs">Adicione fotos para que apareçam na página de {page.label}.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {galleries[page.id].map((img) => (
                    <div key={img.id} className="relative group rounded-lg overflow-hidden aspect-[4/3]">
                      <img src={img.dataUrl} alt={img.caption} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Button
                          variant="destructive"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                          onClick={() => handleRemove(page.id, img.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      {img.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 truncate">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GalleryManager;

import { useState, useRef, useCallback, useEffect } from "react";
import {
  getPageGalleries, createGallery, updateGalleryMeta,
  deleteGallery, addPhotosToGallery, removePhoto, GALLERY_PAGES,
  compressImage,
} from "@/lib/galleries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Image as ImageIcon, Plus, Trash2, GalleryHorizontal, LayoutGrid, Pencil } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const GalleryManager = () => {
  const [activeTab, setActiveTab] = useState(GALLERY_PAGES[0].id);
  const [galleries, setGalleries] = useState({});
  const [photoCounts, setPhotoCounts] = useState({});

  const [createOpen, setCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState("grid");

  const [editGallery, setEditGallery] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editType, setEditType] = useState("grid");

  const fileRef = useRef(null);
  const [uploadTargetId, setUploadTargetId] = useState(null);

  const loadGalleries = useCallback(async () => {
    const results = {};
    const counts = {};
    for (const page of GALLERY_PAGES) {
      const g = await getPageGalleries(page.id);
      results[page.id] = g;
      counts[page.id] = g.reduce((sum, gal) => sum + gal.photos.length, 0);
    }
    setGalleries(results);
    setPhotoCounts(counts);
  }, []);

  useEffect(() => {
    loadGalleries();
  }, [loadGalleries]);

  const currentGalleries = galleries[activeTab] || [];

  const handleCreate = async () => {
    if (!newTitle.trim()) {
      toast({ title: "Título obrigatório", variant: "destructive" });
      return;
    }
    await createGallery(activeTab, { title: newTitle.trim(), type: newType });
    setNewTitle("");
    setNewType("grid");
    setCreateOpen(false);
    await loadGalleries();
    toast({ title: "Galeria criada" });
  };

  const handleUpdate = async () => {
    if (!editGallery) return;
    await updateGalleryMeta(activeTab, editGallery.id, { title: editTitle, type: editType });
    setEditGallery(null);
    await loadGalleries();
    toast({ title: "Galeria atualizada" });
  };

  const handleDelete = async (galleryId) => {
    await deleteGallery(activeTab, galleryId);
    await loadGalleries();
    toast({ title: "Galeria eliminada" });
  };

  const openUpload = (galleryId) => {
    setUploadTargetId(galleryId);
    setTimeout(() => fileRef.current?.click(), 50);
  };

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!uploadTargetId || files.length === 0) return;

    const results = [];
    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Imagem muito grande", description: `${file.name} excede 10MB.`, variant: "destructive" });
        continue;
      }
      const dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
      const compressed = await compressImage(dataUrl);
      results.push({ dataUrl: compressed, caption: file.name });
    }

    if (results.length > 0) {
      await addPhotosToGallery(activeTab, uploadTargetId, results);
      await loadGalleries();
      toast({ title: `${results.length} foto(s) adicionada(s)` });
    }

    if (fileRef.current) fileRef.current.value = "";
  };

  const handleRemovePhoto = async (galleryId, photoId) => {
    await removePhoto(activeTab, galleryId, photoId);
    await loadGalleries();
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
                {(photoCounts[page.id] || 0) > 0 && (
                  <span className="ml-1.5 bg-primary/10 text-primary rounded-full px-1.5 py-0.5 text-xs">
                    {photoCounts[page.id]}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {GALLERY_PAGES.map((page) => (
            <TabsContent key={page.id} value={page.id}>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-muted-foreground">
                  {(galleries[page.id] || []).length} galeria(s) nesta página
                </p>
                <Button size="sm" onClick={() => { setCreateOpen(true); setNewTitle(""); setNewType("grid"); }}>
                  <Plus className="h-4 w-4 mr-1" />
                  Nova Galeria
                </Button>
              </div>

              {(galleries[page.id] || []).length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  <ImageIcon className="h-10 w-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Sem galerias nesta página</p>
                  <p className="text-xs">Crie uma galeria para adicionar fotos.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {(galleries[page.id] || []).map((gallery) => (
                    <div key={gallery.id} className="border border-border rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          {gallery.type === "carousel" ? (
                            <GalleryHorizontal className="h-4 w-4 text-primary" />
                          ) : (
                            <LayoutGrid className="h-4 w-4 text-primary" />
                          )}
                          <h4 className="font-semibold text-foreground">{gallery.title}</h4>
                          <span className="text-xs bg-muted px-2 py-0.5 rounded">
                            {gallery.type === "carousel" ? "Carrossel" : "Grelha"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {gallery.photos.length} foto(s)
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => openUpload(gallery.id)}>
                            <Plus className="h-4 w-4 mr-1" />
                            Fotos
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
                            setEditGallery(gallery);
                            setEditTitle(gallery.title);
                            setEditType(gallery.type);
                          }}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(gallery.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>

                      {gallery.photos.length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                          {gallery.photos.map((photo) => (
                            <div key={photo.id} className="relative group rounded overflow-hidden aspect-square">
                              <img src={photo.dataUrl} alt={photo.caption} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                                  onClick={() => handleRemovePhoto(gallery.id, photo.id)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-muted-foreground text-center py-4">
                          Clique em "Fotos" para adicionar imagens a esta galeria.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFiles} />

        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-serif">Nova Galeria</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Título</Label>
                <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Ex: Quartos, Piscina..." />
              </div>
              <div className="space-y-2">
                <Label>Tipo de Galeria</Label>
                <Select value={newType} onValueChange={setNewType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grelha</SelectItem>
                    <SelectItem value="carousel">Carrossel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancelar</Button>
                <Button onClick={handleCreate}>Criar</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={!!editGallery} onOpenChange={(o) => { if (!o) setEditGallery(null); }}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-serif">Editar Galeria</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Título</Label>
                <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Tipo de Galeria</Label>
                <Select value={editType} onValueChange={setEditType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grelha</SelectItem>
                    <SelectItem value="carousel">Carrossel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setEditGallery(null)}>Cancelar</Button>
                <Button onClick={handleUpdate}>Guardar</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default GalleryManager;

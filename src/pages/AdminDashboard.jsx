import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "@/lib/auth";
import { getEvents, addEvent, updateEvent, deleteEvent } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, LogOut, CalendarDays, Image as ImageIcon, FileText, X } from "lucide-react";
import GalleryManager from "@/components/GalleryManager";
import { toast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const docInputRef = useRef(null);

  const loadEvents = async () => {
    const data = await getEvents();
    setEvents(data);
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/admin");
      return;
    }
    loadEvents();
  }, [navigate]);

  const resetForm = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setImagePreview("");
    setFiles([]);
    setEditingEvent(null);
  };

  const openCreate = () => {
    resetForm();
    setDialogOpen(true);
  };

  const openEdit = (event) => {
    setEditingEvent(event);
    setTitle(event.title || "");
    setDate(event.date || "");
    setDescription(event.description || "");
    setImagePreview(event.imageUrl || "");
    setFiles(event.files || []);
    setDialogOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "Imagem muito grande", description: "Máximo 10MB permitido.", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleDocChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    for (const file of selectedFiles) {
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Ficheiro muito grande", description: `${file.name} excede 10MB.`, variant: "destructive" });
        continue;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFiles((prev) => [...prev, { name: file.name, dataUrl: reader.result }]);
      };
      reader.readAsDataURL(file);
    }
    if (docInputRef.current) docInputRef.current.value = "";
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title.trim() || "",
      date: date || "",
      description: description.trim() || "",
      imageUrl: imagePreview || "",
      files,
    };

    if (!data.title && !data.date && !data.description && !data.imageUrl && data.files.length === 0) {
      toast({ title: "Evento vazio", description: "Preencha pelo menos um campo.", variant: "destructive" });
      return;
    }

    if (editingEvent) {
      await updateEvent(editingEvent.id, data);
      toast({ title: "Evento atualizado" });
    } else {
      await addEvent(data);
      toast({ title: "Evento criado" });
    }

    await loadEvents();
    setDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id) => {
    await deleteEvent(id);
    await loadEvents();
    toast({ title: "Evento eliminado" });
  };

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-serif font-bold text-foreground">Painel de Administração</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              Ver Site
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{events.length}</p>
                <p className="text-sm text-muted-foreground">Total de Eventos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {events.filter((e) => e.imageUrl).length}
                </p>
                <p className="text-sm text-muted-foreground">Com Imagem</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {events.filter((e) => e.date && new Date(e.date) >= new Date()).length}
                </p>
                <p className="text-sm text-muted-foreground">Próximos</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-serif">Eventos</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) resetForm(); }}>
              <DialogTrigger asChild>
                <Button size="sm" onClick={openCreate}>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Evento
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif">
                    {editingEvent ? "Editar Evento" : "Criar Evento"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-title">Título</Label>
                    <Input id="event-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do evento" maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-date">Data</Label>
                    <Input id="event-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-desc">Descrição</Label>
                    <Textarea id="event-desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do evento" maxLength={2000} rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label>Imagem de Capa</Label>
                    <div
                      className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="max-h-40 mx-auto rounded-md object-cover" />
                      ) : (
                        <div className="py-4">
                          <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">Clique para carregar (máx. 10MB)</p>
                        </div>
                      )}
                    </div>
                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  </div>
                  <div className="space-y-2">
                    <Label>Ficheiros (regulamentos, inscrições, etc.)</Label>
                    <div
                      className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => docInputRef.current?.click()}
                    >
                      <div className="py-2">
                        <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Clique para adicionar ficheiros (máx. 10MB cada)</p>
                      </div>
                    </div>
                    <input ref={docInputRef} type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.txt" multiple className="hidden" onChange={handleDocChange} />
                    {files.length > 0 && (
                      <div className="space-y-1 mt-2">
                        {files.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm bg-muted rounded px-3 py-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="flex-1 truncate">{file.name}</span>
                            <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(idx)}>
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3 justify-end">
                    <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button type="submit">
                      {editingEvent ? "Atualizar" : "Criar"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            {events.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <CalendarDays className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Sem eventos</p>
                <p className="text-sm">Crie o primeiro evento para começar.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Imagem</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Ficheiros</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>
                        {event.imageUrl ? (
                          <img src={event.imageUrl} alt={event.title} className="w-16 h-12 rounded object-cover" />
                        ) : (
                          <div className="w-16 h-12 rounded bg-muted flex items-center justify-center">
                            <ImageIcon className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{event.title || "—"}</TableCell>
                      <TableCell>{event.date ? new Date(event.date).toLocaleDateString("pt-PT") : "—"}</TableCell>
                      <TableCell>
                        {event.files && event.files.length > 0 ? (
                          <span className="text-sm text-primary">{event.files.length} ficheiro(s)</span>
                        ) : "—"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Button variant="ghost" size="icon" onClick={() => openEdit(event)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(event.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
        <div className="mt-8">
          <GalleryManager />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

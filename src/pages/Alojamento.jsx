import { BatteryCharging, Bed, Car, Dumbbell, Eye, PawPrint, Send, TreePine, Tv, UtensilsCrossed, Waves, Wifi, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageLayout } from "@/components/PageLayout";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Textarea } from "@/components/ui/textarea";
import aloj1 from "@/assets/alojamento/aloj1.jpg";
import aloj2 from "@/assets/alojamento/aloj2.jpg";
import alojamentoImage from "@/assets/alojamento.jpg";
import atividades1 from "@/assets/alojamento/atividades1.jpg";
import atividades2 from "@/assets/alojamento/atividades2.jpg";
import canoagem from "@/assets/alojamento/canoagem.jpg";
import duplo from "@/assets/alojamento/quarto_duplo.jpeg";
import individual from "@/assets/alojamento/quarto_individual.jpg";
import kartodromo from "@/assets/alojamento/kartodromo.jpg";
import rota from "@/assets/alojamento/rota.jpg";
import { toast } from "@/hooks/use-toast";
import twin from "@/assets/alojamento/quarto_twin.jpg";
import { useState } from "react";

const pricingData = {
  alta: [
    { room: "Quarto Duplo Com Pátio", price: "89,00€" },
    { room: "Quarto Duplo Vista Piscina", price: "89,00€" },
    { room: "Quarto Duplo Superior", price: "89,00€" },
    { room: "Quarto Twin Económico", price: "81,00€" },
    { room: "Quarto Twin Standard", price: "85,00€" },
    { room: "Quarto Twin C/ Cama Extra", price: "85,00€" },
    { room: "Quarto Twin Familiar", price: "89,00€" },
    { room: "Quarto Individual", price: "63,00€" },
  ],
  baixa: [
    { room: "Quarto Duplo Com Pátio", price: "73,50€" },
    { room: "Quarto Duplo Vista Piscina", price: "73,50€" },
    { room: "Quarto Duplo Superior", price: "73,50€" },
    { room: "Quarto Twin Económico", price: "66,50€" },
    { room: "Quarto Twin Standard", price: "70,00€" },
    { room: "Quarto Twin C/ Cama Extra", price: "70,00€" },
    { room: "Quarto Twin Familiar", price: "73,50€" },
    { room: "Quarto Individual", price: "45,00€" },
  ],
};

const amenities = [
  { icon: Tv, text: "TV ecrã plano com Tv cabo" },
  { icon: Wind, text: "Ar condicionado" },
  { icon: Wifi, text: "Internet WiFi gratuito" },
  { icon: Waves, text: "Piscina exterior sazonal" },
  { icon: Dumbbell, text: "Ginásio" },
  { icon: UtensilsCrossed, text: "Restaurante e churrascos" },
  { icon: Car, text: "Estacionamento privativo gratuito" },
  { icon: BatteryCharging, text: "3 postos carregamento elétrico" },
  { icon: PawPrint, text: "Pet Friendly" },
  { icon: Bed, text: "Mini frigorífico nos quartos" },
  { icon: Eye, text: "Varanda ou pátio" },
  { icon: TreePine, text: "Bar de apoio à piscina" },
];

const activities = [
  {
    title: "Percurso Entre Pontes e Rios — O Rio Vizela",
    description:
      "O rio Vizela nasce no Alto de Morgaír e percorre 45km até ao rio Ave. Nas margens de Rilhadas, o Vizela corre com todo o seu esplendor, alimentando os seus moinhos e tornando esta zona uma das mais bonitas de todo o seu percurso.",
    image: atividades1,
    },
  {
    title: "Ciclovia — Passeios Bike e E-Bike",
    description:
      "A ciclovia ocupa o traçado da linha de caminho-de-ferro Fafe-Guimarães, desativada em 1986. Com 15,4 km, passa pelo nosso espaço, sendo uma mais-valia para quem nos visita.",
      image: atividades2,
    },
  {
    title: "Caminhadas — Rota do Milénio",
    description:
      "Percursos pedonais pela região com paisagens deslumbrantes, pontes medievais e moinhos tradicionais.",
      image: rota,
    },
  {
    title: "Kartódromo a cerca de 1Km",
    description:
      "Kartódromo com diversas modalidades e eventos, ideal para quem procura adrenalina.",
      image: kartodromo,
    },
  {
    title: "Canoagem — Barragem de Queimadela",
    description:
      "Atividades aquáticas na barragem de Queimadela, perfeito para os amantes de desportos náuticos.",
      image: canoagem,
    },
];

const Alojamento = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    checkIn: "", checkOut: "", adults: "", children: "",
    rooms: "1", observations: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.checkIn || !formData.checkOut) {
      toast({ title: "Campos obrigatórios", description: "Preencha o nome, email, check-in e check-out.", variant: "destructive" });
      return;
    }
    toast({ title: "Pedido enviado!", description: "Entraremos em contacto brevemente." });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", checkIn: "", checkOut: "", adults: "", children: "", rooms: "1", observations: "" });
  };

  return (
    <PageLayout title="Alojamento - Casas De Campo">
      {/* Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>O ambiente rural e toda a envolvência paisagística, fazem do nosso alojamento, o local ideal para uma noite tranquila ou para eventos de grupos.</p>
            <p>Áreas amplas, terraços, maior conforto e liberdade de movimentos.</p>
            <p>Para além do contacto com a natureza exuberante deste nosso Minho, são diversas as nossas propostas para ocupar o seu tempo livre.</p>
            <p>Não esquecer que também somos <strong className="text-primary">Pet Friendly</strong>.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <img src={aloj1} alt="Casa de campo" className="w-full h-80 object-cover rounded-lg shadow-card" />
            <img src={aloj2} alt="Casa de campo exterior" className="w-full h-80 object-cover rounded-lg shadow-card" />
          </div>
        </div>
      </section>

      {/* Quartos */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">Quartos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <img src={duplo} alt="Quarto Duplo" className="w-full h-48 object-cover" />
              <CardHeader><CardTitle className="font-serif text-lg">Quarto Duplo Vista Piscina</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Os nossos quartos duplos dispõem de terraços com vista para o rio Vizela.</p></CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src={twin} alt="Quarto Twin" className="w-full h-48 object-cover" />
              <CardHeader><CardTitle className="font-serif text-lg">Quarto Twin Familiar</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Quartos twin com ocupação para 2 pessoas, com possibilidade de cama extra e vistas para o rio Vizela.</p></CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src={individual} alt="Quarto Individual" className="w-full h-48 object-cover" />
              <CardHeader><CardTitle className="font-serif text-lg">Quarto Individual</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Um quarto aconchegante e recatado, perfeito para viajantes individuais.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Availability Form */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2">Reserve diretamente através do nosso site oficial e usufrua das melhores tarifas.</p>
              <h2 className="text-3xl font-serif font-bold text-foreground">Pedido de Disponibilidade</h2>
            </div>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Primeiro Nome <span className="text-destructive">*</span></Label>
                      <Input id="firstName" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} placeholder="Primeiro nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Último Nome</Label>
                      <Input id="lastName" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} placeholder="Último nome" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="exemplo@dominio.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+351 000 000 000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn">Check-in <span className="text-destructive">*</span></Label>
                      <Input id="checkIn" type="date" value={formData.checkIn} onChange={(e) => handleChange("checkIn", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Check-out <span className="text-destructive">*</span></Label>
                      <Input id="checkOut" type="date" value={formData.checkOut} onChange={(e) => handleChange("checkOut", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Nº Adultos</Label>
                      <Select value={formData.adults} onValueChange={(v) => handleChange("adults", v)}>
                        <SelectTrigger><SelectValue placeholder="Selecionar" /></SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6].map((n) => (<SelectItem key={n} value={String(n)}>{n}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Nº Crianças</Label>
                      <Select value={formData.children} onValueChange={(v) => handleChange("children", v)}>
                        <SelectTrigger><SelectValue placeholder="Selecionar" /></SelectTrigger>
                        <SelectContent>
                          {[0,1,2,3,4].map((n) => (<SelectItem key={n} value={String(n)}>{n}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Nº Quartos <span className="text-destructive">*</span></Label>
                      <Select value={formData.rooms} onValueChange={(v) => handleChange("rooms", v)}>
                        <SelectTrigger><SelectValue placeholder="1" /></SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map((n) => (<SelectItem key={n} value={String(n)}>{n}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="observations">Observações</Label>
                    <Textarea id="observations" value={formData.observations} onChange={(e) => handleChange("observations", e.target.value)} placeholder="Informações adicionais, pedidos especiais..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Submeter Pedido
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preçário */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">Preçário</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="font-serif text-center">Época Alta — Reserva Direta</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {pricingData.alta.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-6 py-3">
                      <span className="text-sm text-foreground">{item.room}</span>
                      <span className="font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="font-serif text-center">Época Baixa — Reserva Direta</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {pricingData.baixa.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-6 py-3">
                      <span className="text-sm text-foreground">{item.room}</span>
                      <span className="font-bold text-secondary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-2 text-sm text-muted-foreground">
            <p><strong>Crianças até 6 anos não pagam</strong> | Crianças até 2 anos com berço grátis | Cama Extra 10€</p>
            <p><strong>Época Alta:</strong> Páscoa, Verão (1 Jul - 15 Set), WRC, Mundial Enduro, Passagem de Ano</p>
          </div>
        </div>
      </section>

      {/* Comodidades */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">Comodidades</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery pageId="alojamento" />

      {/* Atividades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">Atividades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((activity, idx) => (
              <Card key={idx} className="hover:shadow-hover transition-shadow">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Alojamento;

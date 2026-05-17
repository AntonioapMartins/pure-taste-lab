import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { EventsSection } from "@/components/EventsSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Phone, Mail, Users, Gauge, Trophy, ChevronRight } from "lucide-react";
import kartodromoImage from "@/assets/kartodromo.jpg";
import kart270 from "@/assets/kart-270cc.jpg";
import kart390 from "@/assets/kart-390cc.jpg";
import kartBilugar from "@/assets/kart-bilugar.jpg";

const fleetData = [
  {
    image: kart270,
    title: "SodiKart GT4",
    engine: "Honda 270cc, 9CV",
    count: 15,
    badge: "Individual & Grupos",
    description: "Frota reservada ao aluguer de pequenos grupos, encontra-se sempre em excelentes condições. É a única frota disponível para aluguer individual.",
    highlight: true,
  },
  {
    image: kart390,
    title: "SodiKart GT4R",
    engine: "Honda 390cc, 11CV",
    count: 25,
    badge: "Grupos",
    description: "Frota reservada ao aluguer de grupos. Fruto de uma política de manutenção cuidada e preventiva, encontra-se sempre em excelentes condições.",
    highlight: false,
  },
  {
    image: kartBilugar,
    title: "Sodi Bi-Lugar",
    engine: "Honda 270cc, 9CV",
    count: 1,
    badge: "Bi-Lugar",
    description: "Kart Bi-Lugar para alugueres regulares e formação na nossa Escola de Pilotos, adquirido novo em Novembro de 2024.",
    highlight: false,
  },
  {
    image: null,
    title: "SodiKart LR4",
    engine: "Honda 120cc, 3CV",
    count: 2,
    badge: "Crianças 7-12 anos",
    description: "Frota reservada a pequenos pilotos dos 7 aos 12 anos.",
    highlight: false,
  },
];

const Kartodromo = () => {
  const [activeFleet, setActiveFleet] = useState(0);

  return (
    <PageLayout title="Kartódromo">
      {/* Apresentação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={kartodromoImage}
                alt="Kartódromo de Rilhadas"
                className="w-full h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                O Kartódromo de Rilhadas, em Fafe, é um espaço único para os amantes de karting.
                Com uma pista desafiante rodeada pela natureza, oferece experiências inesquecíveis
                tanto para pilotos experientes como para iniciantes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Realizamos troféus de resistência, campeonatos e eventos especiais ao longo do ano.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Verão</p>
                    <p className="text-xs text-muted-foreground">09:00–12:30 / 14:00–18:30</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Inverno</p>
                    <p className="text-xs text-muted-foreground">09:00–12:30 / 14:00–18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground break-all">kartodromo@rilhadas.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">(+351) 93 668 20 92</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Nossa Frota — Interactive */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">A Nossa Frota</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Mais de 40 karts para todas as idades e níveis de experiência</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Fleet selector cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {fleetData.map((kart, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFleet(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                    activeFleet === idx
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                      : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Gauge className={`h-4 w-4 ${activeFleet === idx ? "text-primary-foreground" : "text-primary"}`} />
                    <span className="text-xs font-medium">{kart.count}x</span>
                  </div>
                  <p className={`text-sm font-bold ${activeFleet === idx ? "" : "text-foreground"}`}>{kart.title}</p>
                  <p className={`text-xs mt-0.5 ${activeFleet === idx ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {kart.engine}
                  </p>
                </button>
              ))}
            </div>

            {/* Active fleet detail */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="h-72 md:h-auto bg-muted">
                  {fleetData[activeFleet].image ? (
                    <img
                      src={fleetData[activeFleet].image}
                      alt={fleetData[activeFleet].title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Trophy className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{fleetData[activeFleet].badge}</Badge>
                    <Badge variant="outline">{fleetData[activeFleet].count} unidade{fleetData[activeFleet].count > 1 ? "s" : ""}</Badge>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {fleetData[activeFleet].title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">
                    Motor {fleetData[activeFleet].engine}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {fleetData[activeFleet].description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preçário com Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Preçário</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Consulte os nossos preços para aluguer individual, provas de grupo e aluguer de pista</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="individual" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="individual" className="text-xs sm:text-sm">
                  <Users className="h-4 w-4 mr-1.5 hidden sm:inline" />
                  Individual
                </TabsTrigger>
                <TabsTrigger value="grupo" className="text-xs sm:text-sm">
                  <Trophy className="h-4 w-4 mr-1.5 hidden sm:inline" />
                  Provas de Grupo
                </TabsTrigger>
                <TabsTrigger value="pista" className="text-xs sm:text-sm">
                  <Gauge className="h-4 w-4 mr-1.5 hidden sm:inline" />
                  Aluguer de Pista
                </TabsTrigger>
              </TabsList>

              <TabsContent value="individual">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-primary" />
                      Aluguer Kart Individual
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tempo</TableHead>
                            <TableHead className="text-center">SodiKart 270cc</TableHead>
                            <TableHead className="text-center">Kart Mini 120cc</TableHead>
                            <TableHead className="text-center">Bi-Lugar</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">15 min.</TableCell>
                            <TableCell className="text-center font-semibold text-primary">20€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">20€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">25€</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">20 min.</TableCell>
                            <TableCell className="text-center font-semibold text-primary">25€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">25€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">30€</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grupo" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-primary" />
                      SODIKART GT4 — 270cc
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Prova</TableHead>
                            <TableHead className="text-center">Treino</TableHead>
                            <TableHead className="text-center">Corrida</TableHead>
                            <TableHead className="text-center">Preço</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">5+15 = 20 min</TableCell>
                            <TableCell className="text-center">5 min</TableCell>
                            <TableCell className="text-center">15 min</TableCell>
                            <TableCell className="text-center font-semibold text-primary">32,50€</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">10+20 = 30 min</TableCell>
                            <TableCell className="text-center">10 min</TableCell>
                            <TableCell className="text-center">20 min</TableCell>
                            <TableCell className="text-center font-semibold text-primary">43€</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">15+60 = 75 min</TableCell>
                            <TableCell className="text-center">15 min</TableCell>
                            <TableCell className="text-center">60 min</TableCell>
                            <TableCell className="text-center font-semibold text-primary">87,50€</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-primary" />
                      SODIKART GT4R — 390cc
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Prova</TableHead>
                            <TableHead className="text-center">Treino</TableHead>
                            <TableHead className="text-center">Corrida</TableHead>
                            <TableHead className="text-center">Preço</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">5+15 = 20 min</TableCell>
                            <TableCell className="text-center">5 min</TableCell>
                            <TableCell className="text-center">15 min</TableCell>
                            <TableCell className="text-center font-semibold text-primary">39,50€</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">10+20 = 30 min</TableCell>
                            <TableCell className="text-center">10 min</TableCell>
                            <TableCell className="text-center">20 min</TableCell>
                            <TableCell className="text-center font-semibold text-primary">51€</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="font-medium">15+60 = 75 min</TableCell>
                            <TableCell className="text-center">15 min</TableCell>
                            <TableCell className="text-center">60 min</TableCell>
                            <TableCell className="text-center font-semibold text-primary">103€</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <p className="text-sm text-muted-foreground italic mt-4">Mais opções sob orçamento.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pista" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-primary" />
                      Aluguer de Pista — Kart Particular
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center">Dia Inteiro</TableHead>
                            <TableHead className="text-center">Manhã</TableHead>
                            <TableHead className="text-center">Tarde</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="text-center font-semibold text-primary">30,00€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">17,50€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">22,50€</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-primary" />
                      Recolha e Aluguer Anual
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center">Recolha Anual</TableHead>
                            <TableHead className="text-center">Recolha + Pista</TableHead>
                            <TableHead className="text-center">Recolha Diária</TableHead>
                            <TableHead className="text-center">Pista Anual</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-muted/50">
                            <TableCell className="text-center font-semibold text-primary">300€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">450€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">15€</TableCell>
                            <TableCell className="text-center font-semibold text-primary">300€</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Condições:</strong> O pagamento é antecipado e não inclui qualquer tipo de manutenção.
                      Apenas serão considerados Karts em recolha os que tiverem o pagamento em dia.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <PhotoGallery pageId="kartodromo" />

      <EventsSection />
    </PageLayout>
  );
};

export default Kartodromo;

import { PageLayout } from "@/components/PageLayout";
import { EventsSection } from "@/components/EventsSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import kartodromoImage from "@/assets/kartodromo.jpg";
import kart270 from "@/assets/kart-270cc.jpg";
import kart390 from "@/assets/kart-390cc.jpg";
import kartBilugar from "@/assets/kart-bilugar.jpg";

const Kartodromo = () => {
  return (
    <PageLayout title="Kartódromo">
      {/* Apresentação */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">HORÁRIO:</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Horário de Verão:</p>
                  <p>Das 09:00 às 12:30 e das 14:00 às 18:30</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horário de Inverno:</p>
                  <p>Das 09:00 às 12:30 e das 14:00 às 18:00</p>
                </div>
              </div>
            </div>

            <img
              src={kartodromoImage}
              alt="Kartódromo de Rilhadas"
              className="w-full h-80 object-cover rounded-lg shadow-card mb-8"
            />

            <div className="space-y-4 text-muted-foreground">
              <p>
                O Kartódromo de Rilhadas, em Fafe, é um espaço único para os amantes de karting.
                Com uma pista desafiante rodeada pela natureza, oferece experiências inesquecíveis
                tanto para pilotos experientes como para iniciantes.
              </p>
              <p>
                Realizamos troféus de resistência, campeonatos e eventos especiais ao longo do ano.
              </p>
              <p className="text-foreground font-medium">
                Contacto: kartodromo@rilhadas.com | (+351) 93 668 20 92
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Nossa Frota */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            A NOSSA FROTA
          </h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Kart 270cc */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src={kart270} alt="SodiKart GT4 270cc" className="w-full h-72 object-cover rounded-lg shadow-card" />
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  15 KARTS SODIKART GT4 — MOTORES HONDA 270CC, 9CV
                </h3>
                <p className="text-muted-foreground mb-2">
                  Frota reservada ao aluguer de pequenos grupos, encontra-se sempre em excelentes condições.
                </p>
                <p className="text-muted-foreground">
                  É a única frota disponível para aluguer individual.
                </p>
              </div>
            </div>

            {/* Kart 390cc */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  25 KARTS SODIKART GT4R — MOTORES HONDA 390CC, 11CV
                </h3>
                <p className="text-muted-foreground mb-2">
                  Frota reservada ao aluguer de grupos, sujeita a menos desgastes atípicos.
                </p>
                <p className="text-muted-foreground">
                  Fruto de uma política de manutenção cuidada e preventiva, encontra-se sempre em excelentes condições.
                </p>
              </div>
              <img src={kart390} alt="SodiKart GT4R 390cc" className="w-full h-72 object-cover rounded-lg shadow-card order-1 md:order-2" />
            </div>

            {/* Kart Bi-Lugar */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src={kartBilugar} alt="Kart Bi-Lugar 270cc" className="w-full h-72 object-cover rounded-lg shadow-card" />
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  1 KART SODI BI-LUGAR — MOTOR HONDA 270CC, 9CV
                </h3>
                <p className="text-muted-foreground">
                  Kart Bi-Lugar para alugueres regulares e para formação na nossa Escola de Pilotos, adquirido novo em Novembro de 2024.
                </p>
              </div>
            </div>

            {/* Kart Mini */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  2 KARTS SODIKART LR4 — MOTORES HONDA 120CC, 3CV
                </h3>
                <p className="text-muted-foreground">
                  Frota reservada a pequenos pilotos dos 7 aos 12 anos.
                </p>
              </div>
              <div className="w-full h-72 rounded-lg shadow-card bg-muted flex items-center justify-center order-1 md:order-2">
                <span className="text-muted-foreground text-sm">Kart Mini 120cc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preçário */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            PREÇÁRIO
          </h2>

          <div className="max-w-5xl mx-auto space-y-10">
            {/* Aluguer Individual */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Aluguer Kart Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tempo</TableHead>
                      <TableHead>SodiKart 270cc</TableHead>
                      <TableHead>Kart Mini 120cc</TableHead>
                      <TableHead>Bi-Lugar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">15 min.</TableCell>
                      <TableCell>20€</TableCell>
                      <TableCell>20€</TableCell>
                      <TableCell>25€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">20 min.</TableCell>
                      <TableCell>25€</TableCell>
                      <TableCell>25€</TableCell>
                      <TableCell>30€</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Provas de Grupo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Aluguer Provas de Grupo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">SODIKART GT4 270cc</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tipo de Prova</TableHead>
                        <TableHead>Treino</TableHead>
                        <TableHead>Corrida</TableHead>
                        <TableHead>Preço</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">5+15 = 20 min</TableCell>
                        <TableCell>5 min</TableCell>
                        <TableCell>15 min</TableCell>
                        <TableCell>32,50€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">10+20 = 30 min</TableCell>
                        <TableCell>10 min</TableCell>
                        <TableCell>20 min</TableCell>
                        <TableCell>43€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">15+60 = 75 min</TableCell>
                        <TableCell>15 min</TableCell>
                        <TableCell>60 min</TableCell>
                        <TableCell>87,50€</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">SODIKART GT4R 390cc</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tipo de Prova</TableHead>
                        <TableHead>Treino</TableHead>
                        <TableHead>Corrida</TableHead>
                        <TableHead>Preço</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">5+15 = 20 min</TableCell>
                        <TableCell>5 min</TableCell>
                        <TableCell>15 min</TableCell>
                        <TableCell>39,50€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">10+20 = 30 min</TableCell>
                        <TableCell>10 min</TableCell>
                        <TableCell>20 min</TableCell>
                        <TableCell>51€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">15+60 = 75 min</TableCell>
                        <TableCell>15 min</TableCell>
                        <TableCell>60 min</TableCell>
                        <TableCell>103€</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <p className="text-sm text-muted-foreground italic">Mais opções sob orçamento.</p>
              </CardContent>
            </Card>

            {/* Aluguer de Pista */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Aluguer de Pista — Kart Particular</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Dia Inteiro</TableHead>
                      <TableHead>Manhã</TableHead>
                      <TableHead>Tarde</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>30,00€</TableCell>
                      <TableCell>17,50€</TableCell>
                      <TableCell>22,50€</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Recolha Anual */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Aluguer de Pista e Recolha Anual</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Recolha Kart Anual</TableHead>
                      <TableHead>Recolha + Aluguer Pista</TableHead>
                      <TableHead>Recolha Diária</TableHead>
                      <TableHead>Aluguer Pista Anual</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>300,00€</TableCell>
                      <TableCell>450,00€</TableCell>
                      <TableCell>15,00€</TableCell>
                      <TableCell>300,00€</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Condições:</strong> O pagamento é antecipado e não inclui qualquer tipo de manutenção.
                  Apenas serão considerados Karts em recolha os que tiverem o pagamento em dia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
            GALERIA
          </h2>
          <div className="max-w-5xl mx-auto">
            <PhotoGallery pageId="kartodromo" />
          </div>
        </div>
      </section>

      <EventsSection />
    </PageLayout>
  );
};

export default Kartodromo;

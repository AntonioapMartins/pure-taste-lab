import { PageLayout } from "@/components/PageLayout";
import { EventsSection } from "@/components/EventsSection";
import kartodromoImage from "@/assets/kartodromo.jpg";

const Kartodromo = () => {
  return (
    <PageLayout title="Kartódromo">
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

      <EventsSection />
    </PageLayout>
  );
};

export default Kartodromo;

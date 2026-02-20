import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import alojamentoImage from "@/assets/alojamento.jpg";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-foreground text-center mb-8">
          Descubra a beleza do nosso espaço.
        </h2>
        <div className="max-w-4xl mx-auto text-center space-y-4 text-muted-foreground">
          <p>
            Ao vir descobrir e usufruir de Rilhadas Turismo, não terá só as nossas atividades para si,
            mas sim todo o nosso espaço inserido no meio da natureza, assim poderá fazer belos passeios
            locais e estender connosco a sua estadia e dos seus animais de estimação.
            Sim, somos <strong className="text-primary">Pet Friendly</strong>.
          </p>
          <p>
            Assim, deixamos-lhe estas fotos do nosso belo espaço, de que tanto nos orgulhamos.
          </p>
          <p>
            Para usufruir de mais vantagens e da melhor tarifa, reserve aqui, na nossa Página Oficial o seu alojamento.
          </p>
        </div>
        <div className="text-center mt-8">
          <Link to="/alojamento">
            <Button size="lg" className="font-semibold">
              RESERVE CONNOSCO
            </Button>
          </Link>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          <img src={alojamentoImage} alt="Espaço Rilhadas" className="w-full h-48 object-cover rounded-lg shadow-card" />
          <img src={alojamentoImage} alt="Natureza" className="w-full h-48 object-cover rounded-lg shadow-card" />
          <img src={alojamentoImage} alt="Casas de campo" className="w-full h-48 object-cover rounded-lg shadow-card hidden md:block" />
        </div>
      </div>
    </section>
  );
};

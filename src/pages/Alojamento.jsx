import { PageLayout } from "@/components/PageLayout";
import alojamentoImage from "@/assets/alojamento.jpg";

const Alojamento = () => {
  return (
    <PageLayout title="Alojamento - Casas De Campo">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
            <p>
              O ambiente rural e toda a envolvência paisagística, fazem do nosso alojamento, o local ideal
              para uma noite tranquila ou para eventos de grupos.
            </p>
            <p>
              Áreas amplas, terraços, maior conforto e liberdade de movimentos.
            </p>
            <p>
              Para além do contacto com a natureza exuberante deste nosso Minho, são diversas as nossas
              propostas para ocupar o seu tempo livre.
            </p>
            <p>
              Não esquecer que também somos <strong className="text-primary">Pet Friendly</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img src={alojamentoImage} alt="Casa de campo" className="w-full h-64 object-cover rounded-lg shadow-card" />
            <img src={alojamentoImage} alt="Casa de campo" className="w-full h-64 object-cover rounded-lg shadow-card" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Alojamento;

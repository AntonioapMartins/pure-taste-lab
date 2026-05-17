import { PageLayout } from "@/components/PageLayout";
import { PhotoGallery } from "@/components/PhotoGallery";
import desportoImage from "@/assets/desporto.jpg";

const DesportoLazer = () => {
  return (
    <PageLayout title="Desporto & Lazer">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={desportoImage}
              alt="Desporto e Lazer"
              className="w-full h-80 object-cover rounded-lg shadow-card mb-8"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Rilhadas Turismo oferece uma variedade de atividades desportivas e de lazer para todos os gostos e idades.
              </p>
              <p>
                Desde caminhadas pela natureza exuberante do Minho, passeios de bicicleta, atividades aquáticas,
                até experiências de aventura ao ar livre — há sempre algo novo para descobrir.
              </p>
              <p>
                O nosso espaço é ideal para quem procura descontrair e ao mesmo tempo manter-se ativo durante a estadia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PhotoGallery pageId="desporto" />
    </PageLayout>
  );
};

export default DesportoLazer;

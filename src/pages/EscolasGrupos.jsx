import { PageLayout } from "@/components/PageLayout";
import { PhotoGallery } from "@/components/PhotoGallery";
import escolasImage from "@/assets/escolas.jpg";

const EscolasGrupos = () => {
  return (
    <PageLayout title="Escolas & Grupos">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={escolasImage}
              alt="Escolas e Grupos"
              className="w-full h-80 object-cover rounded-lg shadow-card mb-8"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Rilhadas Turismo é o destino perfeito para visitas escolares e atividades em grupo.
                O nosso espaço proporciona experiências educativas em contacto direto com a natureza.
              </p>
              <p>
                Oferecemos programas personalizados para escolas, empresas e grupos organizados,
                com atividades que promovem o trabalho em equipa, a aprendizagem e a diversão.
              </p>
              <p>
                Contacte-nos para criar um programa à medida das suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">Galeria</h2>
          <PhotoGallery pageId="escolas" />
        </div>
      </section>
    </PageLayout>
  );
};

export default EscolasGrupos;

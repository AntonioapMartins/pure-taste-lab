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
      <PhotoGallery pageId="escolas" />
    </PageLayout>
  );
};

export default EscolasGrupos;

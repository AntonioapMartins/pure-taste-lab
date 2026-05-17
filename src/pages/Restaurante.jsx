import { PageLayout } from "@/components/PageLayout";
import { PhotoGallery } from "@/components/PhotoGallery";
import restauranteImage from "@/assets/restaurante.jpg";

const Restaurante = () => {
  return (
    <PageLayout title="Casa de Cancelo - Restaurante & Eventos">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Esta ilustre casa de traça tipicamente minhota foi recuperada e transformada num espaço multifuncional.
              </p>
              <p>
                Este espaço é vocacionado para um grande leque de eventos, como festas temáticas, desfiles de moda,
                conferências, concertos e todo o tipo de espetáculos; até encontros mais familiares e marcantes como
                casamentos, batizados, comunhões e aniversários, aqui todos os acontecimentos ganham um requinte singular.
              </p>
              <p>
                A origem rústica, aliada à elegância atual do seu interior permitem a conjugação única de espaços amplos,
                com recantos mais privados. O ambiente íntimo e acolhedor transporta-o para o conforto de uma casa de campo.
              </p>
              <p>
                Na mesa, uma ementa detalhada de inspiração tradicional, ideal para descontrair, conviver ou simplesmente
                apreciar. O resultado é um conjunto de memórias deliciosas que despertam os seus sentidos.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-foreground">Batizados e Comunhões</p>
                <p>Ementa Prata, Ementa Prata Plus</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Casamentos</p>
                <p>Ementa Ouro, Ementa Platina</p>
              </div>
            </div>
            <img
              src={restauranteImage}
              alt="Restaurante Casa de Cancelo"
              className="w-full h-80 object-cover rounded-lg shadow-card"
            />
          </div>
        </div>
      </section>
      <PhotoGallery pageId="restaurante" />
    </PageLayout>
  );
};

export default Restaurante;

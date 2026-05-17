import { PageLayout } from "@/components/PageLayout";
import caminhada from "@/assets/desporto/caminhada.jpg";
import canoagem from "@/assets/desporto/piscina.jpg";
import natureza from "@/assets/desporto/ciclovia.jpg";
import orientacao from "@/assets/desporto/orientacao.jpg";

const sections = [
  {
    title: "Orientação",
    image: orientacao,
    content: `
Percurso pedestre circular guiado por mapa onde o objetivo é responder a questões em cada ponto.

A atividade termina no ponto de partida com todas as respostas corretas.

Requer marcação prévia e grupo mínimo de 8 pessoas.
`,
  },
  {
    title: "Caminhadas",
    image: caminhada,
    content: `
Percurso certificado pela Federação de Campismo e Montanhismo de Portugal.

Atividade de natureza, ideal para grupos e famílias.
`,
  },
  {
    title: "Piscina",
    image: canoagem,
    content: `
Piscinas exteriores com zonas para adultos e crianças.

Bar de apoio e ambiente de lazer.

Aberta de julho a setembro.
`,
  },
  {
    title: "Ciclovia",
    image: natureza,
    content: `
Ciclovia Fafe–Guimarães com cerca de 14km.

Paisagens naturais e acessos múltiplos ao longo do percurso.
`,
  },
];

const DesportoLazer = () => {
  return (
    <PageLayout title="Desporto & Lazer">

      {/* SEÇÕES DETALHADAS */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">

          {sections.map((item, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={item.image}
                className="w-full h-80 object-cover rounded-xl"
              />

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">
                  {item.title}
                </h2>

                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </PageLayout>
  );
};

export default DesportoLazer;
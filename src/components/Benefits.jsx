import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import Restaurante from "@/assets/restaurante.jpg";
import alojamento from "@/assets/alojamento.jpg";
import benefitIcon1 from "../assets/benefits/icon-1.svg";
import benefitIcon2 from "../assets/benefits/icon-2.svg";
import bike from "@/assets/desporto/jogos.jpg";
import escolas from "@/assets/escolas.jpg";
import kart from "@/assets/kartodromo.jpg";

export const benefits = [
  {
    id: "0",
    title: "Alojamento Casas De Campo",
    text: "O ambiente rural e toda a envolvência paisagística, fazem do nosso alojamento, o local ideal para uma noite tranquila ou para eventos de grupos.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: alojamento,
  },
  {
    id: "1",
    title: "Kartódromo",
    text: "É amante de velocidade? Troque os semáforos e as longas filas de trânsito pelas curvas do nosso circuito! Desfrute de umas voltas de adrenalina total e descarregue esse stress, é tempo de velocidade!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: kart,
  },
  {
    id: "2",
    title: "Desporto e Lazer",
    text: "Desfrute de várias atividades desportivas e de lazer, tais como campos de futebol e voleibol de praias, piscina, slide e escaladas, trilhos para caminhadas e ciclismo.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon2,
    imageUrl: bike,
  },
  {
    id: "3",
    title: "Restaurante e Eventos",
    text: "Saboreie a nossa gastronomia regional, com produtos frescos e confecionados no local, num ambiente acolhedor e familiar.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: Restaurante,
  },
  {
    id: "4",
    title: "Programas para Escolas e Grupos",
    text: "Oferecemos programas personalizados para escolas e grupos, combinando atividades educativas, desportivas e de lazer, promovendo a integração e o desenvolvimento pessoal num ambiente seguro e estimulante.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: escolas,
  },
];

const Benefits = () => {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="container relative z-2">   
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              
              key={item.id}
            >
              <div className="relative z-10 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                <p className="body-2 mb-6 text-white/80">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider">
                    Explorar Mais
                  </p>
                  <Arrow />
                </div>
              </div>
              <div
                className="absolute inset-0.5 z-0 bg-primary border border-primary-foreground/10"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Restaurante from "@/assets/restaurante.jpg";
import alojamento from "@/assets/alojamento.jpg";
import bike from "@/assets/desporto/jogos.jpg";
import escolas from "@/assets/escolas.jpg";
import kart from "@/assets/kartodromo.jpg";

export const benefits = [
  {
    id: "0",
    title: "Alojamento Casas De Campo",
    text: "O ambiente rural e toda a envolvência paisagística fazem do nosso alojamento o local ideal para uma noite tranquila ou para eventos de grupos.",
    imageUrl: alojamento,
    path: "/alojamento",
  },
  {
    id: "1",
    title: "Kartódromo",
    text: "É amante de velocidade? Troque os semáforos pelas curvas do nosso circuito. Desfrute de adrenalina total e descarregue o stress!",
    imageUrl: kart,
    path: "/kartodromo",
  },
  {
    id: "2",
    title: "Desporto e Lazer",
    text: "Desfrute de várias atividades como campos de futebol, voleibol de praia, piscina, slide e escaladas ou trilhos para caminhadas.",
    imageUrl: bike,
    path: "/desporto-lazer",
  },
  {
    id: "3",
    title: "Restaurante e Eventos",
    text: "Saboreie a nossa gastronomia regional, com produtos frescos e confecionados no local, num ambiente acolhedor e familiar.",
    imageUrl: Restaurante,
    path: "/restaurante",
  },
  {
    id: "4",
    title: "Escolas e Grupos",
    text: "Programas personalizados combinando atividades educativas e de lazer, promovendo a integração e o desenvolvimento pessoal.",
    imageUrl: escolas,
    path: "/escolas-grupos",
  },
];

const BenefitCard = ({ item, index, visible }) => (
  <Link
    to={item.path}
    style={{
      animationDelay: visible ? `${index * 150}ms` : "0ms",
      opacity: visible ? undefined : 0,
    }}
    className={`group bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border flex flex-col ${
      visible ? "animate-drop-in" : ""
    }`}
  >
    <div className="relative h-64 overflow-hidden bg-muted">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
        {item.text}
      </p>
      <span className="inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase">
        Explorar Mais
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

const Benefits = () => {
  const topRow = benefits.slice(0, 3);
  const bottomRow = benefits.slice(3);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topRow.map((item, i) => (
            <BenefitCard key={item.id} item={item} index={i} visible={visible} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
          {bottomRow.map((item, i) => (
            <BenefitCard
              key={item.id}
              item={item}
              index={topRow.length + i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

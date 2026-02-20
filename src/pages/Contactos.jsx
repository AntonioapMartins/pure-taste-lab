import { PageLayout } from "@/components/PageLayout";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contactos = () => {
  return (
    <PageLayout title="Contactos">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">Contactos Geral</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    Rua de Cancelo nº444 Cepães, Fafe
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    (+351) 253 591 916
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    (+351) 914 969 022
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    geral@rilhadas.com
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">Contactos Kartódromo</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    (+351) 93 668 20 92
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    kartodromo@rilhadas.com
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contactos;

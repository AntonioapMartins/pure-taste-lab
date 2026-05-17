import { CalendarDays, Download, FileText, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { getEvents } from "@/lib/events";

export const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const upcomingEvents = events.filter((e) => e.date && new Date(e.date) >= new Date());
  const pastEvents = events.filter((e) => e.date && new Date(e.date) < new Date());
  const undatedEvents = events.filter((e) => !e.date);

  const allUpcoming = [...undatedEvents, ...upcomingEvents];

  if (events.length === 0) return null;

  const renderEventCard = (event) => (
    <Card key={event.id} className="overflow-hidden group hover:shadow-card-hover transition-shadow">
      {event.imageUrl && (
        <div className="w-full overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title || "Evento"}
            className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}
      <CardContent className="p-6">
        {event.date && (
          <div className="flex items-center gap-2 text-sm text-primary mb-3">
            <CalendarDays className="h-4 w-4" />
            <span>
              {new Date(event.date).toLocaleDateString("pt-PT", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        )}
        {event.title && (
          <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{event.title}</h3>
        )}
        {event.description && (
          <p className="text-sm text-muted-foreground whitespace-pre-line">{event.description}</p>
        )}
        {event.files && event.files.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-foreground">Ficheiros:</p>
            {event.files.map((file, idx) => (
              <a
                key={idx}
                href={file.dataUrl}
                download={file.name}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <FileText className="h-4 w-4" />
                <span>{file.name}</span>
                <Download className="h-3 w-3 ml-auto" />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="events" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        {allUpcoming.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-3">
                Próximos Eventos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {allUpcoming.map(renderEventCard)}
            </div>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-3">
                ÚLTIMOS EVENTOS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map(renderEventCard)}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

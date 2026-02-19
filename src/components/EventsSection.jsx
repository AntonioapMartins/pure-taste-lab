import { useEffect, useState } from "react";
import { getEvents } from "@/lib/events";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Image as ImageIcon } from "lucide-react";

export const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  if (events.length === 0) return null;

  return (
    <section id="events" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join us for cooking workshops, tastings, and culinary experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted overflow-hidden">
                {event.imageUrl ? (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(event.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

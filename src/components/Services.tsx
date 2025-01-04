import { Wrench, Shield, Trophy, Tool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Modificaciones 4x4",
    description: "Elevación, snorkel, winch y más",
    icon: Tool,
  },
  {
    title: "Mantenimiento Especializado",
    description: "Servicio completo para tu todoterreno",
    icon: Wrench,
  },
  {
    title: "Protecciones",
    description: "Defensas y protectores de bajos",
    icon: Shield,
  },
  {
    title: "Preparación Competición",
    description: "Optimización para competiciones off-road",
    icon: Trophy,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="animate-fade-up">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-montserrat">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-roboto">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
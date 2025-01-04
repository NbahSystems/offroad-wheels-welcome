import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80')"
        }}
      />
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Expertos en Preparación 4x4
          </h1>
          <p className="text-xl text-white font-roboto mb-8">
            Tu vehículo todoterreno merece lo mejor. Especialistas en modificaciones, mantenimiento y preparación para aventuras off-road.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Reserva tu Cita
          </Button>
        </div>
      </div>
    </div>
  );
};
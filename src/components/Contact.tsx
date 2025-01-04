import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Contacto
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="font-roboto">Calle Principal 123, Ciudad</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <p className="font-roboto">+34 123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <p className="font-roboto">info@offroadworkshop.com</p>
            </div>
          </div>
          <form className="space-y-6 animate-fade-up">
            <Input placeholder="Nombre" className="font-roboto" />
            <Input placeholder="Email" type="email" className="font-roboto" />
            <Textarea placeholder="Mensaje" className="font-roboto" />
            <Button className="w-full bg-primary hover:bg-primary/90">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
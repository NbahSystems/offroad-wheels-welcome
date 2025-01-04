import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">OffRoad Workshop</h3>
            <p className="font-roboto text-gray-300">
              Especialistas en preparación y mantenimiento de vehículos todoterreno
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Horario</h3>
            <p className="font-roboto text-gray-300">
              Lunes a Viernes: 9:00 - 19:00<br />
              Sábado: 9:00 - 14:00
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center font-roboto text-gray-300">
          <p>&copy; 2024 OffRoad Workshop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
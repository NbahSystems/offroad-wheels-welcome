import { Card, CardContent } from "@/components/ui/card";

const images = [
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519752594763-2f52cc64b72b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80",
];

export const Gallery = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Nuestros Trabajos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden animate-fade-up">
              <CardContent className="p-0">
                <img
                  src={image}
                  alt={`Trabajo ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
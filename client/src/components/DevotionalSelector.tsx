import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase, Trophy, Sparkles } from "lucide-react";

interface DevotionalSelectorProps {
  onSelect: (devotionalId: "raices" | "legado" | "atletas") => void;
}

export function DevotionalSelector({ onSelect }: DevotionalSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/logo-cad.png" 
              alt="Logo CAC" 
              className="h-24 w-24 object-contain"
            />
          </div>
          <h1 className="font-serif text-4xl font-bold text-primary mb-2">
            CAC - Centro de Adoración Cristiana
          </h1>
          <p className="text-lg text-muted-foreground">
            Selecciona tu devocional
          </p>
        </div>

        {/* Devocionales */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Raíces de Esperanza */}
          <Card 
            className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-primary"
            onClick={() => onSelect('raices')}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Raíces de Esperanza
              </h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                365 Días de Gratitud
              </p>
              <p className="text-sm text-muted-foreground">
                Un viaje diario de reflexión y agradecimiento, fortaleciendo tu fe y cultivando un corazón lleno de gratitud.
              </p>
              <Button 
                className="w-full mt-4"
                onClick={() => onSelect('raices')}
              >
                Comenzar
              </Button>
            </div>
          </Card>

          {/* Legado de Impacto */}
          <Card 
            className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-primary"
            onClick={() => onSelect('legado')}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Legado de Impacto
              </h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                365 Días de Liderazgo
              </p>
              <p className="text-sm text-muted-foreground">
                Principios bíblicos para empresarios, emprendedores y líderes que desean construir un legado de impacto eterno.
              </p>
              <Button 
                className="w-full mt-4"
                onClick={() => onSelect('legado')}
              >
                Comenzar
              </Button>
            </div>
          </Card>

          {/* Atletas de Cristo */}
          <Card 
            className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-orange-400 relative overflow-hidden"
            onClick={() => onSelect('atletas')}
          >
            {/* Badge "Próximamente" con animación */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 shadow-lg animate-pulse">
                <Sparkles className="h-3 w-3 mr-1" />
                Próximamente
              </Badge>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center ring-4 ring-orange-200 ring-opacity-50">
                <Trophy className="h-10 w-10 text-orange-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Atletas de Cristo
              </h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                365 Días de Victoria
              </p>
              <p className="text-sm text-muted-foreground">
                Principios deportivos aplicados a la fe cristiana para jóvenes atletas que buscan excelencia en la cancha y en la vida.
              </p>
              
              {/* Mensaje motivador */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 w-full">
                <p className="text-xs text-orange-700 font-medium">
                  🏆 ¡Estamos preparando algo increíble! Vista previa disponible con los primeros 5 días.
                </p>
              </div>
              
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                onClick={() => onSelect('atletas')}
              >
                Ver Vista Previa
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p className="font-serif italic">
            "Dad gracias en todo, porque esta es la voluntad de Dios."
          </p>
          <p className="mt-2 text-xs uppercase tracking-widest">
            1 Tesalonicenses 5:18
          </p>
        </div>
      </div>
    </div>
  );
}

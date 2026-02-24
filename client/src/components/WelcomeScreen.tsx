import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
  devotionalType: "raices" | "legado" | "atletas" | null;
}

export function WelcomeScreen({ onStart, devotionalType }: WelcomeScreenProps) {
  const imageSrc = devotionalType === "raices" 
    ? "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032111197/JAsjWrFAjnZsYtBI.png" 
    : devotionalType === "legado"
    ? "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032111197/LVSotKXzWPWXWQwi.png"
    : "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032111197/CJKldhDYMbxjOwDh.png";
  const title = devotionalType === "raices" ? "Raíces de Esperanza - 365 Días de Gratitud" : devotionalType === "legado" ? "Legado de Impacto - 365 Días de Liderazgo" : "Atletas de Cristo - 365 Días de Victoria";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        {/* Imagen de bienvenida */}
        <div className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <img
            src={imageSrc}
            alt="Devocional"
            className="
              w-full
              max-w-md
              h-auto
              object-contain
              rounded-2xl
              shadow-xl
            "
          />
          
          {/* Botón de inicio */}
          <Button
            onClick={onStart}
            size="lg"
            className="mt-8 px-12 py-6 text-lg font-semibold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-500"
          >
            ¡Comienza Tu Viaje Hoy!
          </Button>
        </div>
      </div>
    </div>
  );
}

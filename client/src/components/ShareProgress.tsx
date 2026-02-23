import { useProgress } from "@/contexts/ProgressContext";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ShareProgress() {
  const { completedDays } = useProgress();
  const count = completedDays.length;
  const total = 365;
  const percentage = Math.round((count / total) * 100);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  const message = `¡Llevo ${count} días de gratitud completados en Raíces de Esperanza! 🌿\n\nUn viaje de 365 días para cultivar un corazón agradecido.`;
  
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 text-xs uppercase tracking-widest font-medium border-green-200 text-green-800 hover:bg-green-50 hover:text-green-900 hover:border-green-300"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Progreso</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center text-primary">Tu Avance</DialogTitle>
          <DialogDescription className="text-center">
            Comparte tu compromiso de gratitud con tus amigos.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-6 space-y-6">
          {/* Progress Circle or Stat */}
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary/10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-primary">{count}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Días</span>
            </div>
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-primary"
                strokeDasharray="289.02652413026095" // 2 * pi * 46
                strokeDashoffset={289.02652413026095 * (1 - count / total)}
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-center text-lg font-serif italic text-foreground/80">
            "La gratitud se multiplica cuando se comparte."
          </p>

          <Button 
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            Compartir en WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

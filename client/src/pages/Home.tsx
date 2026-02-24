import { CalendarView } from "@/components/CalendarView";
import { DevotionalCard } from "@/components/DevotionalCard";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { NamePrompt } from "@/components/NamePrompt";
import { StatsDisplay } from "@/components/StatsDisplay";
import { Button } from "@/components/ui/button";
import { devotionalData } from "@/lib/devotional-data";
import { legadoData } from "@/lib/legado-data";
import { atletasData } from "@/lib/atletas-data";
import { DevotionalSelector } from "@/components/DevotionalSelector";
import { Calendar, ChevronLeft, ChevronRight, Download, Info, UserPen, ArrowLeft } from "lucide-react";
import { ShareProgress } from "@/components/ShareProgress";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NotificationManager } from "@/components/NotificationManager";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ProgressProvider } from "@/contexts/ProgressContext";

export default function Home() {
  const [, setLocation] = useLocation();

  const getTodayDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return Math.max(1, Math.min(dayOfYear, 365));
};

const getSuggestedDay = (today: number, completedDays: number[]) => {
  const completed = new Set(completedDays);
  // busca el primer NO leído empezando desde hoy (y si llega al 365 vuelve al 1)
  for (let offset = 0; offset < 365; offset++) {
    const day = ((today - 1 + offset) % 365) + 1;
    if (!completed.has(day)) return day;
  }
  return today;
};

// Función para obtener el siguiente día no leído
const getNextUnreadDay = (devotionalType: "raices" | "legado" | "atletas") => {
  const storageKey = `devotional-progress-${devotionalType}`;
  const completedDays = JSON.parse(localStorage.getItem(storageKey) || "{}");
  
  for (let day = 1; day <= 365; day++) {
    if (!completedDays[day]) {
      return day;
    }
  }
  return 1;
};
  
  const [selectedDevotional, setSelectedDevotional] = useState<"raices" | "legado" | "atletas" | null>(() => {
    return (localStorage.getItem("selected-devotional") as "raices" | "legado" | "atletas") || null;
  });
  
  const [currentDay, setCurrentDay] = useState(() => getTodayDayOfYear());

  const [view, setView] = useState<"daily" | "calendar" | "advent">("daily");
  const [showWelcome, setShowWelcome] = useState(() => {
    // Verificar si es la primera visita
    const hasVisited = localStorage.getItem("devotional-has-visited");
    return !hasVisited;
  });
  const [showNamePrompt, setShowNamePrompt] = useState(() => {
    // Mostrar formulario si no hay nombre guardado y ya pasó la bienvenida
    const hasVisited = localStorage.getItem("devotional-has-visited");
    const savedName = localStorage.getItem("user-name");
    return hasVisited && !savedName;
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("user-name") || "";
  });
  
  // Actualizar currentDay cuando cambia el devocional seleccionado
  useEffect(() => {
  if (!selectedDevotional) return;

  (async () => {
    try {
      const res = await fetch(`/api/progress?devotionalType=${selectedDevotional}`, {
        credentials: "include",
      });
      if (!res.ok) return;

      const data = await res.json();
      const completedDays = Array.isArray(data.completedDays) ? data.completedDays : [];

      const today = getTodayDayOfYear();
      const suggested = getSuggestedDay(today, completedDays);

      setCurrentDay(suggested);
    } catch (e) {
      // si falla, al menos dejamos "hoy"
      setCurrentDay(getTodayDayOfYear());
    }
  })();
}, [selectedDevotional]);
  
  // Obtener datos del devocional actual
  const currentDevotionalData = selectedDevotional === "legado" ? legadoData : selectedDevotional === "atletas" ? atletasData : devotionalData;
  const devotionalTitle = selectedDevotional === "legado" ? "Legado de Impacto" : selectedDevotional === "atletas" ? "Atletas de Cristo" : "Raíces de Esperanza";
  const devotionalSubtitle = selectedDevotional === "legado" ? "365 Días de Liderazgo" : selectedDevotional === "atletas" ? "365 Días de Victoria" : "365 Días de Gratitud";

  const handleStartJourney = () => {
    // Marcar que ya visitó la aplicación
    localStorage.setItem("devotional-has-visited", "true");
    setShowWelcome(false);
    
    // Siempre mostrar formulario de nombre si no existe
    const savedName = localStorage.getItem("user-name");
    if (!savedName) {
      setShowNamePrompt(true);
    }
  };
  
  const handleNameSubmit = (name: string) => {
    // Guardar nombre en localStorage
    localStorage.setItem("user-name", name);
    setUserName(name);
    setShowNamePrompt(false);
  };

  const currentDevotional = currentDevotionalData.find((d) => d.day === currentDay) || currentDevotionalData[0];

  const handleNext = () => {
    if (currentDay < currentDevotionalData.length) {
      setCurrentDay(currentDay + 1);
    }
  };

  const handlePrev = () => {
    if (currentDay > 1) {
      setCurrentDay(currentDay - 1);
    }
  };

  const handleSelectDay = (day: number) => {
    setCurrentDay(day);
    setView("daily");
  };

  const handleToday = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Ensure day is within range (1-365)
    const safeDay = Math.max(1, Math.min(dayOfYear, 365));
    
    setCurrentDay(safeDay);
    setView("daily");
  };

  const handleChangeDevotional = () => {
    // Limpiar selección actual para mostrar el selector
    localStorage.removeItem("selected-devotional");
    setSelectedDevotional(null);
  };

  // Mostrar selector de devocional si no hay uno seleccionado
  if (!selectedDevotional) {
    return <DevotionalSelector onSelect={(type) => {
      localStorage.setItem("selected-devotional", type);
      setSelectedDevotional(type);
    }} />;
  }
  
  // Mostrar pantalla de bienvenida en la primera visita
  if (showWelcome) {
    return <WelcomeScreen onStart={handleStartJourney} devotionalType={selectedDevotional} />;
  }
  
  // Mostrar formulario de nombre si está autenticado y no tiene nombre
  if (showNamePrompt) {
    return <NamePrompt onSubmit={handleNameSubmit} />;
  }

  return (
    <ProgressProvider devotionalType={selectedDevotional || "raices"}>
      <div className="min-h-screen bg-background flex flex-col items-center overflow-x-hidden">
      {/* Header */}
      <header className="w-full border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container px-4 md:px-8 py-4">
          {/* Top Row: Logo + Brand */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Logo CAC - Más prominente */}
              <div className="h-16 w-16 md:h-20 md:w-20 relative flex items-center justify-center bg-white rounded-lg shadow-md p-2">
                <img 
                  src="/images/logo-cad.png" 
                  alt="Logo CAC" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] mb-1">
                  CAC - Centro de Adoración Cristiana
                </div>
                <h1 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  {devotionalTitle}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-light">{devotionalSubtitle}</span>
                  {userName && (
                    <div className="flex items-center gap-1 animate-in fade-in slide-in-from-left-2 duration-700">
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs font-medium text-primary">Hola, {userName}</span>
                      <button
                        onClick={() => setShowNamePrompt(true)}
                        className="ml-1 text-muted-foreground hover:text-primary transition-colors"
                        title="Cambiar nombre"
                      >
                        <UserPen className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Theme Toggle - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Bottom Row: Navigation */}
          <div className="flex items-center justify-between gap-3">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 flex-1">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleChangeDevotional}
                className="gap-2 text-xs uppercase tracking-widest font-medium hover:bg-secondary hover:text-primary"
                title="Cambiar devocional"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Cambiar</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleToday}
                className="text-xs uppercase tracking-widest font-medium hover:bg-secondary hover:text-primary"
              >
                Hoy
              </Button>
              <Button 
                variant={view === "calendar" ? "default" : "outline"}
                size="sm" 
                onClick={() => setView(view === "calendar" ? "daily" : "calendar")}
                className="gap-2 text-xs uppercase tracking-widest font-medium border-primary/20 hover:border-primary hover:bg-transparent hover:text-primary"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Calendario</span>
              </Button>

              <div className="flex-1" />
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setLocation("/about")}
                className="gap-2 text-xs uppercase tracking-widest font-medium hover:bg-secondary hover:text-primary"
              >
                <Info className="h-3.5 w-3.5" />
                <span>Acerca de CAC</span>
              </Button>
              
              <ShareProgress />
              <NotificationManager />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden w-full">
              {/* First Row: Main Actions */}
              <div className="flex items-center gap-2 justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleChangeDevotional}
                    className="text-[10px] uppercase tracking-widest font-medium hover:bg-secondary hover:text-primary h-8 px-2"
                    title="Cambiar devocional"
                  >
                    <ArrowLeft className="h-3 w-3 mr-1" />
                    Cambiar
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleToday}
                    className="text-[10px] uppercase tracking-widest font-medium hover:bg-secondary hover:text-primary h-8 px-2"
                  >
                    Hoy
                  </Button>
                  <Button 
                    variant={view === "calendar" ? "default" : "outline"}
                    size="sm" 
                    onClick={() => setView(view === "calendar" ? "daily" : "calendar")}
                    className="text-[10px] uppercase tracking-widest font-medium border-primary/20 hover:border-primary hover:bg-transparent hover:text-primary h-8 px-2"
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Cal
                  </Button>
                </div>
                
                <ThemeToggle />
              </div>
              
              {/* Second Row: Additional Features */}
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setLocation("/about")}
                    className="text-[10px] uppercase tracking-widest font-medium hover:bg-secondary hover:text-primary h-8 px-2"
                  >
                    <Info className="h-3 w-3 mr-1" />
                    CAC
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <ShareProgress />
                  <NotificationManager />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full container py-8 sm:py-12 flex flex-col items-center justify-start px-4 md:px-8">
        
        {view === "calendar" ? (
          <CalendarView 
            currentDayId={currentDay} 
            onSelectDay={handleSelectDay} 
            onClose={() => setView("daily")}
          />

        ) : (
          <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-8 px-2 sm:px-0">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentDay === 1}
                className="h-12 w-12 rounded-none border-border hover:bg-secondary hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="text-center">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] block mb-1">
                  Semana {Math.ceil(currentDay / 7)}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                  {currentDevotional.month}
                </h2>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentDay === currentDevotionalData.length}
                className="h-12 w-12 rounded-none border-border hover:bg-secondary hover:text-primary transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Devotional Card */}
            <DevotionalCard 
              day={currentDevotional} 
              devotionalData={currentDevotionalData}
              devotionalTitle={devotionalTitle}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-border/40 mt-auto">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground font-serif italic">
            "Dad gracias en todo, porque esta es la voluntad de Dios."
          </p>
          <p className="text-[10px] text-muted-foreground/60 mt-2 uppercase tracking-widest">
            © 2026 Raíces de Esperanza
          </p>
          <button
            onClick={() => {
              const entries = JSON.parse(localStorage.getItem("devotional-journal") || "{}");
              let content = "MI DIARIO DE GRATITUD - RAÍCES DE ESPERANZA\n\n";
              
              Object.keys(entries).sort((a, b) => Number(a) - Number(b)).forEach(day => {
                const entry = entries[day];
                if (entry && entry.trim()) {
                  const devotional = devotionalData.find(d => d.day === Number(day));
                  content += `DÍA ${day}: ${devotional?.title || ''}\n`;
                  content += `${entry}\n\n-------------------\n\n`;
                }
              });

              if (Object.keys(entries).length === 0) {
                alert("Aún no tienes entradas en tu diario para exportar.");
                return;
              }

              const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = "mi-diario-gratitud.txt";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="mt-4 inline-flex items-center gap-2 text-[10px] text-primary hover:underline uppercase tracking-widest"
          >
            <Download className="w-3 h-3" />
            Exportar mi diario
          </button>
        </div>
      </footer>
    </div>
    </ProgressProvider>
  );
}

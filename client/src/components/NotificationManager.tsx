import { Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function NotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [reminderTime, setReminderTime] = useState("08:00");
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
      
      // Load saved settings
      const savedTime = localStorage.getItem("devotional-reminder-time");
      const savedEnabled = localStorage.getItem("devotional-reminder-enabled");
      
      if (savedTime) setReminderTime(savedTime);
      if (savedEnabled === "true") setIsEnabled(true);
      
      // Check for daily check
      if (savedEnabled === "true" && Notification.permission === "granted") {
        checkAndNotify(savedTime || "08:00");
      }
    }
  }, []);

  // Simple interval check for notifications (since we don't have a service worker for push)
  useEffect(() => {
    if (!isEnabled || permission !== "granted") return;

    const interval = setInterval(() => {
      checkAndNotify(reminderTime);
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isEnabled, permission, reminderTime]);

  const checkAndNotify = (time: string) => {
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, '0');
    const currentMinute = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${currentHour}:${currentMinute}`;
    
    const lastNotified = localStorage.getItem("last-notification-date");
    const today = new Date().toDateString();

    if (currentTime === time && lastNotified !== today) {
      new Notification("Raíces de Esperanza", {
        body: "Es momento de tu devocional diario de gratitud. 🌱",
        icon: "/images/logo-cad.png",
        tag: "daily-devotional"
      });
      localStorage.setItem("last-notification-date", today);
    }
  };

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      toast.error("Tu navegador no soporta notificaciones");
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);

    if (result === "granted") {
      setIsEnabled(true);
      localStorage.setItem("devotional-reminder-enabled", "true");
      toast.success("Notificaciones activadas");
      
      // Test notification
      new Notification("¡Notificaciones activadas!", {
        body: "Te avisaremos cada día a la hora programada.",
        icon: "/images/logo-cad.png"
      });
    } else {
      setIsEnabled(false);
      localStorage.setItem("devotional-reminder-enabled", "false");
      toast.error("Permiso denegado para notificaciones");
    }
  };

  const toggleNotifications = () => {
    if (isEnabled) {
      setIsEnabled(false);
      localStorage.setItem("devotional-reminder-enabled", "false");
      toast.info("Recordatorios desactivados");
    } else {
      if (permission === "granted") {
        setIsEnabled(true);
        localStorage.setItem("devotional-reminder-enabled", "true");
        toast.success("Recordatorios activados");
      } else {
        requestPermission();
      }
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setReminderTime(newTime);
    localStorage.setItem("devotional-reminder-time", newTime);
  };

  // Always render, handle support check on interaction
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-xs uppercase tracking-widest font-medium border border-border/50 hover:bg-secondary hover:text-primary transition-colors"
          title="Configurar recordatorios"
        >
          {isEnabled ? (
            <Bell className="h-3.5 w-3.5" />
          ) : (
            <BellOff className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span className="hidden sm:inline">Alertas</span>
          <span className="sm:hidden">Alertas</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recordatorio Diario</DialogTitle>
          <DialogDescription>
            Recibe una notificación diaria para cultivar tu hábito de gratitud.
            (Requiere tener esta pestaña abierta en segundo plano)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="text-sm font-medium">
              Activar notificaciones
            </Label>
            <Button
              id="notifications"
              variant={isEnabled ? "default" : "outline"}
              size="sm"
              onClick={toggleNotifications}
            >
              {isEnabled ? "Activado" : "Desactivado"}
            </Button>
          </div>
          
          {isEnabled && (
            <div className="grid grid-cols-4 items-center gap-4 animate-in fade-in slide-in-from-top-2">
              <Label htmlFor="time" className="text-right col-span-1">
                Hora
              </Label>
              <Input
                id="time"
                type="time"
                value={reminderTime}
                onChange={handleTimeChange}
                className="col-span-3"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

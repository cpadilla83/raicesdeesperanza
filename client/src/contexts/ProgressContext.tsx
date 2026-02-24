import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

type DevotionalType = "raices" | "legado" | "atletas";

interface ProgressContextType {
  completedDays: number[];
  toggleDayCompletion: (dayId: number) => Promise<void>;
  isDayCompleted: (dayId: number) => boolean;
  isLoading: boolean;
  refresh: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({
  children,
  devotionalType,
}: {
  children: ReactNode;
  devotionalType: DevotionalType;
}) {
  const { user } = useAuth();
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/progress?devotionalType=${devotionalType}`, {
        credentials: "include",
      });
      const data = await res.json();
      setCompletedDays(Array.isArray(data.completedDays) ? data.completedDays : []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, devotionalType]);

  const toggleDayCompletion = async (dayId: number) => {
    if (!user) return;

    // Optimistic UI
    setCompletedDays((prev) => (prev.includes(dayId) ? prev.filter((d) => d !== dayId) : [...prev, dayId]));

    const res = await fetch("/api/progress/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ devotionalType, dayNumber: dayId }),
    });

    if (!res.ok) {
      // Revertir si falló
      await refresh();
    }
  };

  const value = useMemo(
    () => ({
      completedDays,
      toggleDayCompletion,
      isDayCompleted: (dayId: number) => completedDays.includes(dayId),
      isLoading,
      refresh,
    }),
    [completedDays, isLoading]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within a ProgressProvider");
  return ctx;
}
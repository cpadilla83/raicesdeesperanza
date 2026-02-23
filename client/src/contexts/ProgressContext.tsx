import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface ProgressContextType {
  completedDays: number[];
  toggleDayCompletion: (dayId: number) => void;
  isDayCompleted: (dayId: number) => boolean;
  isLoading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children, devotionalType }: { children: ReactNode; devotionalType: "raices" | "legado" | "atletas" }) {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load from localStorage on mount
  useEffect(() => {
    const storageKey = `devotional-progress-${devotionalType}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedDays(parsed);
      } catch (e) {
        console.error("Failed to parse stored progress", e);
      }
    }
    setIsLoading(false);
  }, []);
  
  // Save to localStorage whenever completedDays changes
  useEffect(() => {
    if (!isLoading) {
      const storageKey = `devotional-progress-${devotionalType}`;
      localStorage.setItem(storageKey, JSON.stringify(completedDays));
    }
  }, [completedDays, isLoading, devotionalType]);
  
  const toggleDayCompletion = (dayId: number) => {
    setCompletedDays((prev) => {
      if (prev.includes(dayId)) {
        return prev.filter((id) => id !== dayId);
      } else {
        return [...prev, dayId];
      }
    });
  };
  
  const isDayCompleted = (dayId: number) => {
    return completedDays.includes(dayId);
  };
  
  return (
    <ProgressContext.Provider
      value={{
        completedDays,
        toggleDayCompletion,
        isDayCompleted,
        isLoading,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}

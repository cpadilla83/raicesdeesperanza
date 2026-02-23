import { DevotionalDay } from "@/lib/devotional-data";
import { cn } from "@/lib/utils";
import { Gift, Star } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";

interface AdventCalendarProps {
  days: DevotionalDay[];
  onSelectDay: (day: DevotionalDay) => void;
}

export function AdventCalendar({ days, onSelectDay }: AdventCalendarProps) {
  const { isDayCompleted } = useProgress();

  // Ensure we only have December days (335-365)
  const adventDays = days.filter(d => d.month === "Diciembre");

  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-500">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-4">
          <Gift className="w-8 h-8 text-red-700" />
        </div>
        <h2 className="text-4xl font-serif font-medium text-red-900 mb-4">Calendario de Adviento</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Celebra la cuenta regresiva hacia la Navidad y el fin de año con gratitud. 
          Cada día es un regalo para abrir.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {adventDays.map((day, index) => {
          const isCompleted = isDayCompleted(day.day);
          const dayOfMonth = index + 1; // 1 to 31
          const isChristmas = dayOfMonth === 25;
          const isNewYear = dayOfMonth === 31;

          return (
            <button
              key={day.day}
              onClick={() => onSelectDay(day)}
              className={cn(
                "relative aspect-square flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 group",
                isCompleted 
                  ? "bg-red-50 border-red-200 text-red-900" 
                  : "bg-white border-border hover:border-red-300 hover:shadow-lg hover:-translate-y-1",
                isChristmas && "col-span-2 row-span-2 bg-red-900 text-white border-red-900 hover:bg-red-800 hover:border-red-800",
                isNewYear && "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
              )}
            >
              {/* Decorative Ribbon for incomplete days */}
              {!isCompleted && !isChristmas && !isNewYear && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-red-50/50 -z-0 group-hover:bg-red-100/50 transition-colors" />
              )}

              {/* Day Number */}
              <span className={cn(
                "text-3xl font-serif font-bold z-10",
                isChristmas ? "text-6xl mb-2" : "mb-1"
              )}>
                {dayOfMonth}
              </span>

              {/* Status Icon */}
              <div className="z-10 mt-2">
                {isCompleted ? (
                  <Star className={cn("w-5 h-5 fill-current", isChristmas ? "text-yellow-400" : "text-red-400")} />
                ) : (
                  <Gift className={cn("w-5 h-5", isChristmas ? "text-white/80" : "text-muted-foreground group-hover:text-red-500")} />
                )}
              </div>

              {/* Label for special days */}
              {isChristmas && (
                <span className="text-sm font-medium uppercase tracking-widest mt-2 text-red-100">Navidad</span>
              )}
              {isNewYear && (
                <span className="text-xs font-medium uppercase tracking-widest mt-2 text-slate-300">Fin de Año</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

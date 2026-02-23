import { months } from "@/lib/devotional-data";
import { cn } from "@/lib/utils";
import { ChevronLeft, X, Check } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { useState } from "react";

interface CalendarViewProps {
  onSelectDay: (dayId: number) => void;
  onClose: () => void;
  currentDayId: number;
}

export function CalendarView({ onSelectDay, onClose, currentDayId }: CalendarViewProps) {
  const [selectedMonthId, setSelectedMonthId] = useState<number>(1);
  const { isDayCompleted } = useProgress();

  // Calculate days for the selected month
  // This is a simplified logic assuming standard year (2026 is not a leap year)
  const getDaysInMonth = (monthId: number) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[monthId - 1];
  };

  const getStartDayOfYear = (monthId: number) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayCount = 0;
    for (let i = 0; i < monthId - 1; i++) {
      dayCount += daysInMonth[i];
    }
    return dayCount + 1;
  };

  const daysInCurrentMonth = getDaysInMonth(selectedMonthId);
  const startDayId = getStartDayOfYear(selectedMonthId);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col animate-in fade-in duration-300">
      {/* Header */}
      <div className="container h-20 flex items-center justify-between border-b border-border">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary/70 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Volver
        </button>
        
        <h2 className="font-serif text-xl">Calendario</h2>
        
        <button 
          onClick={onClose}
          className="p-2 hover:bg-muted rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container py-12">
          
          {/* Month Selection */}
          <div className="flex overflow-x-auto pb-8 gap-4 mb-8 no-scrollbar">
            {months.map((month) => (
              <button
                key={month.id}
                onClick={() => setSelectedMonthId(month.id)}
                className={cn(
                  "flex-shrink-0 px-6 py-3 rounded-none border text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                  selectedMonthId === month.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                )}
              >
                {month.name}
              </button>
            ))}
          </div>

          {/* Month Title & Theme */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif mb-2">{months[selectedMonthId - 1].name}</h3>
            <p className="text-muted-foreground font-serif italic text-lg">
              {months[selectedMonthId - 1].theme}
            </p>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Array.from({ length: daysInCurrentMonth }).map((_, index) => {
              const dayId = startDayId + index;
              const dayNumber = index + 1;
              const isCurrent = dayId === currentDayId;
              const isCompleted = isDayCompleted(dayId);
              
              return (
                <button
                  key={dayId}
                  onClick={() => {
                    onSelectDay(dayId);
                    onClose();
                  }}
                  className={cn(
                    "aspect-square flex flex-col items-center justify-center border transition-all hover:scale-105 relative overflow-hidden",
                    isCurrent
                      ? "bg-primary text-primary-foreground border-primary"
                      : isCompleted 
                        ? "bg-secondary/50 text-foreground border-primary/30" 
                        : "bg-card text-card-foreground border-border hover:border-primary"
                  )}
                >
                  {isCompleted && !isCurrent && (
                    <div className="absolute top-1 right-1 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  
                  <span className={cn(
                    "text-2xl font-serif mb-1",
                    isCurrent ? "font-medium" : "font-normal"
                  )}>
                    {dayNumber}
                  </span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    isCurrent ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}>
                    Día {dayId}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

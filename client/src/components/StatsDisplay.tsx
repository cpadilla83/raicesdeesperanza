import { trpc } from "@/lib/trpc";
import { Users, Activity, TrendingUp } from "lucide-react";
import { useEffect } from "react";

export function StatsDisplay() {
  const { data: stats, refetch } = trpc.stats.getStats.useQuery();
  
  // Refetch stats every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [refetch]);

  if (!stats) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 md:gap-6 text-xs md:text-sm">
      {/* Usuarios en línea */}
      <div className="flex items-center gap-2 group">
        <div className="relative">
          <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
          <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-500 rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-foreground">{stats.usersOnline}</span>
          <span className="text-[9px] md:text-[10px] text-muted-foreground">En línea</span>
        </div>
      </div>

      {/* Activos este mes */}
      <div className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
        <div className="flex flex-col">
          <span className="font-bold text-foreground">{stats.activeThisMonth}</span>
          <span className="text-[9px] md:text-[10px] text-muted-foreground">Este mes</span>
        </div>
      </div>

      {/* Total de usuarios */}
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
        <div className="flex flex-col">
          <span className="font-bold text-foreground">{stats.totalUsers}</span>
          <span className="text-[9px] md:text-[10px] text-muted-foreground">Total</span>
        </div>
      </div>
    </div>
  );
}

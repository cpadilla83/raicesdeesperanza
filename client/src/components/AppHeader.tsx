import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function AppHeader() {
  const { user, logout } = useAuth();
  if (!user) return null;

  const label = user.displayName || user.name || user.email || "Usuario";

  return (
    <div className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="font-semibold">Raíces de Esperanza</div>

        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <div className="text-sm font-medium">{label}</div>
            {user.email && <div className="text-xs opacity-70">{user.email}</div>}
          </div>

          <Button variant="outline" onClick={logout}>
            Salir
          </Button>
        </div>
      </div>
    </div>
  );
}
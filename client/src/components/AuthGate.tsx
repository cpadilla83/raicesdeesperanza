import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.1 0 5.8 1.1 7.9 3l5.9-5.9C34.2 3.3 29.5 1.5 24 1.5 14.6 1.5 6.6 6.9 2.7 14.7l6.9 5.4C11.5 14 17.2 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.8-.4-4.1H24v7.7h12.8c-.3 2-1.7 5-4.9 7l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.4z" />
      <path fill="#FBBC05" d="M9.6 28.1c-.5-1.5-.8-3.2-.8-4.9s.3-3.4.8-4.9l-6.9-5.4C1.2 16 0.5 20.4 0.5 23.2s.7 7.2 2.2 10.3l6.9-5.4z" />
      <path fill="#34A853" d="M24 46.5c5.5 0 10.2-1.8 13.6-4.9l-7.5-5.8c-2 1.4-4.7 2.3-6.1 2.3-6.8 0-12.5-4.5-14.5-10.6l-6.9 5.4C6.6 41.1 14.6 46.5 24 46.5z" />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, loading, refresh } = useAuth();

  const [mode, setMode] = React.useState<"login" | "register">("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function submitEmail() {
    setSubmitting(true);
    setError(null);
    try {
      const endpoint = mode === "login" ? "/api/auth/email/login" : "/api/auth/email/register";

      const body =
        mode === "login"
          ? { email, password }
          : { email, password, name: name.trim() || undefined };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || "No se pudo continuar");
        return;
      }

      await refresh();
    } catch {
      setError("Error de red. Revisa el servidor.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Cargando…</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
          <div className="text-center">
            <div className="text-2xl font-semibold">Raíces de Esperanza</div>
            <div className="mt-2 text-sm opacity-80">
              Inicia sesión para guardar tu progreso y continuar en cualquier dispositivo.
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="mt-6 w-full h-11 flex items-center justify-center gap-3"
            onClick={() => window.location.assign("/api/auth/google/start")}
          >
            <GoogleIcon />
            <span>Continuar con Google</span>
          </Button>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <div className="text-xs opacity-70">o</div>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-3">
            {mode === "register" && (
              <Input placeholder="Nombre (opcional)" value={name} onChange={(e) => setName(e.target.value)} />
            )}

            <Input placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" />
            <Input
              placeholder="Contraseña (mín. 8 caracteres)"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>
            )}

            <Button className="w-full h-11" disabled={submitting} onClick={submitEmail} type="button">
              {mode === "login" ? "Iniciar sesión con email" : "Crear cuenta con email"}
            </Button>

            <button
              className="w-full text-sm underline opacity-80"
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login" ? "No tengo cuenta → Crear cuenta" : "Ya tengo cuenta → Iniciar sesión"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
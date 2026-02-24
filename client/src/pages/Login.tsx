import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";

export default function Login() {
  const { refresh } = useAuth();
  const [, setLocation] = useLocation();

  const [mode, setMode] = React.useState<"login" | "register">("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      const url =
        mode === "login" ? "/api/auth/email/login" : "/api/auth/email/register";

      const body: any =
        mode === "login"
          ? { email, password }
          : { email, password, name: name.trim() || undefined };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "No se pudo continuar");
        return;
      }

      await refresh();
      setLocation("/"); // ✅ después del login -> menú devocionales
    } catch {
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
        <div className="text-center">
          <div className="text-2xl font-semibold">
            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </div>
          <div className="mt-2 text-sm opacity-80">
            Usa tu correo y contraseña.
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {mode === "register" && (
          <div className="mt-5">
            <label className="text-sm">Nombre</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2 bg-background"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
          </div>
        )}

        <div className="mt-5">
          <label className="text-sm">Correo</label>
          <input
            className="mt-1 w-full rounded-lg border px-3 py-2 bg-background"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            inputMode="email"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm">Contraseña</label>
          <input
            className="mt-1 w-full rounded-lg border px-3 py-2 bg-background"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 8 caracteres"
            type="password"
          />
        </div>

        <Button className="mt-6 w-full" onClick={submit} disabled={loading}>
          {loading ? "Procesando..." : mode === "login" ? "Entrar" : "Crear cuenta"}
        </Button>

        <div className="mt-4 flex items-center justify-between text-sm">
          <button
            className="underline opacity-80"
            onClick={() => setLocation("/")}
            type="button"
          >
            Volver
          </button>

          <button
            className="underline opacity-80"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            type="button"
          >
            {mode === "login" ? "Crear cuenta" : "Ya tengo cuenta"}
          </button>
        </div>
      </div>
    </div>
  );
}
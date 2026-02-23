import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NamePromptProps {
  onSubmit: (name: string) => void;
}

export function NamePrompt({ onSubmit }: NamePromptProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Por favor ingresa tu nombre");
      return;
    }
    
    if (name.trim().length < 2) {
      setError("El nombre debe tener al menos 2 caracteres");
      return;
    }
    
    onSubmit(name.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur">
      <div className="w-full max-w-md p-8 mx-4">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="h-16 w-16 mx-auto mb-4 relative flex items-center justify-center">
            <img 
              src="/images/logo-cad.png" 
              alt="Logo CAD" 
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-primary mb-2">
            Bienvenido
          </h2>
          <p className="text-muted-foreground text-sm">
            Para comenzar tu viaje de gratitud, cuéntanos tu nombre
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-700">
          <div>
            <Input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              className="text-center text-lg h-12"
              autoFocus
              maxLength={100}
            />
            {error && (
              <p className="text-sm text-destructive mt-2 text-center">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-lg font-semibold uppercase tracking-wider"
          >
            Continuar
          </Button>
        </form>

        <p className="text-xs text-muted-foreground/60 text-center mt-6">
          Tu nombre se usará para personalizar tu experiencia
        </p>
      </div>
    </div>
  );
}

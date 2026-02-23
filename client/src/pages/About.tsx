import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, Heart, Users, BookOpen, Globe } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container px-4 md:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation("/")}
              className="hover:bg-secondary"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 relative flex items-center justify-center bg-white rounded-lg shadow-md p-2">
                <img 
                  src="/images/logo-cad.png" 
                  alt="Logo CAC" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  Acerca de CAC
                </h1>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  Centro de Adoración Cristiana
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
            <img 
              src="/images/logo-cad.png" 
              alt="Logo CAC" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Centro de Adoración Cristiana
          </h2>
          <p className="text-xl text-muted-foreground italic">
            "Edificando vidas, transformando comunidades"
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Nuestra Misión
            </h3>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90">
              El Centro de Adoración Cristiana (CAC) es una comunidad de fe comprometida con la adoración genuina, 
              el discipulado transformador y el servicio compasivo. Nuestra misión es guiar a las personas hacia 
              una relación profunda y significativa con Jesucristo, cultivando corazones agradecidos que reflejen 
              Su amor en cada aspecto de la vida.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Nuestra Visión
            </h3>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90">
              Ser una iglesia que impacte generaciones a través de la enseñanza bíblica sólida, 
              la adoración apasionada y el amor práctico. Aspiramos a ser un faro de esperanza en nuestra 
              comunidad, equipando a cada creyente para vivir una vida de gratitud, propósito y servicio 
              que glorifique a Dios.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Nuestros Valores
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Adoración Genuina</h4>
              <p className="text-foreground/80">
                Buscamos adorar a Dios en espíritu y en verdad, con corazones sinceros y vidas consagradas.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Palabra de Dios</h4>
              <p className="text-foreground/80">
                La Biblia es nuestra autoridad final y guía para toda enseñanza, doctrina y práctica de vida.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Comunidad</h4>
              <p className="text-foreground/80">
                Valoramos las relaciones auténticas donde cada persona es amada, conocida y cuidada.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Gratitud</h4>
              <p className="text-foreground/80">
                Cultivamos un estilo de vida de agradecimiento constante, reconociendo la bondad de Dios en todo.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Servicio</h4>
              <p className="text-foreground/80">
                Seguimos el ejemplo de Jesús sirviendo con amor y humildad tanto dentro como fuera de la iglesia.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Excelencia</h4>
              <p className="text-foreground/80">
                Honramos a Dios dando lo mejor de nosotros en cada área de ministerio y servicio.
              </p>
            </div>
          </div>
        </section>

        {/* About Raices de Esperanza */}
        <section className="mb-16 bg-primary/5 border border-primary/20 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Raíces de Esperanza
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            "Raíces de Esperanza" es un devocional de 365 días creado por el Centro de Adoración Cristiana 
            para ayudar a nuestra comunidad a cultivar un corazón agradecido durante todo el año. 
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            Cada día ofrece una reflexión bíblica, un desafío práctico, música cristiana inspiradora y 
            un espacio personal para escribir tu diario de gratitud. Nuestro deseo es que este recurso 
            te acompañe en tu caminar diario con Dios, transformando tu perspectiva y fortaleciendo tu fe 
            a través del poder de la gratitud.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => setLocation("/")}
            size="lg"
            className="text-sm uppercase tracking-widest font-medium"
          >
            Volver al Devocional
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-border/40 mt-12">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground font-serif italic">
            "Dad gracias en todo, porque esta es la voluntad de Dios."
          </p>
          <p className="text-[10px] text-muted-foreground/60 mt-2 uppercase tracking-widest">
            © 2026 Centro de Adoración Cristiana
          </p>
        </div>
      </footer>
    </div>
  );
}

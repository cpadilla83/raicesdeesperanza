import { DevotionalDay } from "@/lib/devotional-data";
import { MessageCircle, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ShareCardProps {
  day: DevotionalDay;
}

export function ShareCard({ day }: ShareCardProps) {
  const message = `*Día ${day.day} • ${day.month}*\n\n*${day.title}*\n\n📖 *${day.verse.reference}*\n"${day.verse.text}"\n\n"${day.quote.text}"\n— ${day.quote.author}\n\nRaíces de Esperanza 🌿`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 text-xs uppercase tracking-widest">
          <Share2 className="w-4 h-4" />
          Compartir
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none">
        <VisuallyHidden>
          <DialogTitle>Compartir Devocional</DialogTitle>
        </VisuallyHidden>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Preview Area */}
          <div className="p-4 bg-gray-100 flex justify-center overflow-auto max-h-[70vh]">
            <div 
              style={{
                width: "320px",
                backgroundColor: "#ffffff",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                aspectRatio: "4/5",
                position: "relative",
                backgroundImage: "linear-gradient(to bottom right, #ffffff, #f9fafb)",
                fontFamily: "serif"
              }}
            >
              {/* Logo Watermark */}
              <div style={{
                position: "absolute",
                top: "16px",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                opacity: 0.1
              }}>
                 <img 
                   src="/images/logo-cad.png" 
                   alt="" 
                   style={{ height: "64px", width: "auto", filter: "grayscale(100%)" }} 
                 />
              </div>

              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 10,
                width: "100%"
              }}>
                <span style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#1e3a8a",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  marginBottom: "24px",
                  display: "block",
                  fontFamily: "sans-serif"
                }}>
                  Día {day.day} • {day.month}
                </span>
                
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#111827",
                  marginBottom: "24px",
                  lineHeight: 1.25,
                  fontFamily: "serif"
                }}>
                  {day.title}
                </h3>
                
                {/* Bible Verse - Primero */}
                <div style={{
                  marginBottom: "32px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid #e5e7eb",
                  width: "100%"
                }}>
                  <p style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#1e3a8a",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                    fontFamily: "sans-serif"
                  }}>
                    📖 {day.verse.reference}
                  </p>
                  <p style={{
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: "#4b5563",
                    lineHeight: 1.5,
                    fontFamily: "serif"
                  }}>
                    "{day.verse.text}"
                  </p>
                </div>

                {/* Quote - Segundo */}
                <div style={{ position: "relative", marginBottom: "32px" }}>
                  <span style={{
                    fontSize: "36px",
                    color: "#1e3a8a",
                    opacity: 0.2,
                    position: "absolute",
                    top: "-16px",
                    left: "-8px",
                    fontFamily: "serif"
                  }}>"</span>
                  <p style={{
                    fontSize: "18px",
                    fontStyle: "italic",
                    color: "#374151",
                    position: "relative",
                    zIndex: 10,
                    padding: "0 16px",
                    fontFamily: "serif"
                  }}>
                    {day.quote.text}
                  </p>
                  <span style={{
                    fontSize: "36px",
                    color: "#1e3a8a",
                    opacity: 0.2,
                    position: "absolute",
                    bottom: "-32px",
                    right: "-8px",
                    fontFamily: "serif"
                  }}>"</span>
                </div>
                
                <p style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "8px",
                  fontFamily: "sans-serif"
                }}>
                  — {day.quote.author}
                </p>
              </div>

              <div style={{
                marginTop: "auto",
                paddingTop: "16px",
                borderTop: "1px solid #f3f4f6",
                width: "100%",
                zIndex: 10
              }}>
                <p style={{
                  fontSize: "10px",
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontFamily: "sans-serif",
                  margin: 0
                }}>
                  Raíces de Esperanza
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 bg-white border-t flex justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Comparte esperanza hoy
            </p>
            <Button 
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Compartir en WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

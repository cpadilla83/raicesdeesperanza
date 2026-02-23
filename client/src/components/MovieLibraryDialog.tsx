import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Film, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Movie {
  week: number;
  title: string;
  youtubeUrl: string;
}

interface MovieLibraryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  movies: Movie[];
  devotionalTitle: string;
}

export function MovieLibraryDialog({ 
  open, 
  onOpenChange, 
  movies,
  devotionalTitle 
}: MovieLibraryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Film className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-serif">Biblioteca de Películas</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">{devotionalTitle}</p>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(85vh-140px)]">
          <div className="px-6 py-4">
            <div className="space-y-3">
              {movies.map((movie) => (
                <div
                  key={movie.week}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        Semana {movie.week}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm mb-0.5">{movie.title}</h4>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 text-xs"
                      asChild
                    >
                      <a
                        href={movie.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Ver Trailer
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        <div className="px-6 py-4 border-t bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            {movies.length} películas disponibles en esta biblioteca
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

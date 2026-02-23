import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Music2, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Song {
  day: number;
  theme: string;
  title: string;
  artist: string;
  youtubeUrl: string;
  spotifyUrl: string;
}

interface MusicLibraryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  songs: Song[];
  devotionalTitle: string;
}

export function MusicLibraryDialog({ 
  open, 
  onOpenChange, 
  songs,
  devotionalTitle 
}: MusicLibraryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Music2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-serif">Biblioteca Musical</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">{devotionalTitle}</p>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(85vh-140px)]">
          <div className="px-6 py-4">
            <div className="space-y-3">
              {songs.map((song) => (
                <div
                  key={song.day}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        Día {song.day}
                      </span>
                      <span className="text-xs text-muted-foreground truncate">
                        {song.theme}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm mb-0.5 truncate">{song.title}</h4>
                    <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 text-xs"
                      asChild
                    >
                      <a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 text-xs"
                      asChild
                    >
                      <a
                        href={song.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Spotify
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
            {songs.length} canciones disponibles en esta biblioteca
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

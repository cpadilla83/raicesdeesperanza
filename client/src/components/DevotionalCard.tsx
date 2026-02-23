import { DevotionalDay } from "@/lib/devotional-data";
import { cn } from "@/lib/utils";
import { BookOpen, CheckCircle, Circle, Film, Music, Quote, Target, PenLine, Play, Square } from "lucide-react";
import { ShareCard } from "./ShareCard";
import { useProgress } from "@/contexts/ProgressContext";
import { useJournal } from "@/hooks/useJournal";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { MusicLibraryDialog } from "./MusicLibraryDialog";
import { MovieLibraryDialog } from "./MovieLibraryDialog";
import { Music2 } from "lucide-react";

interface DevotionalCardProps {
  day: DevotionalDay;
  className?: string;
  devotionalData: DevotionalDay[];
  devotionalTitle: string;
}

export function DevotionalCard({ day, className, devotionalData, devotionalTitle }: DevotionalCardProps) {
  const [activeTab, setActiveTab] = useState<"reflection" | "challenge" | "journal">("reflection");
  const { isDayCompleted, toggleDayCompletion } = useProgress();
  const { getEntry, saveEntry } = useJournal();
  const [journalText, setJournalText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicLibrary, setShowMusicLibrary] = useState(false);
  const [showMovieLibrary, setShowMovieLibrary] = useState(false);
  const isCompleted = isDayCompleted(day.day);

  useEffect(() => {
    setJournalText(getEntry(day.day));
  }, [day.day]);

  useEffect(() => {
    // Cleanup audio when component unmounts or day changes
    return () => {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    };
  }, [day.day]);

  const handleAudioToggle = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const text = `${day.title}. ${day.verse.text}. ${day.reflection}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      window.speechSynthesis.cancel(); // Stop any previous
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleJournalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setJournalText(newText);
    saveEntry(day.day, newText);
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      {/* Header Section - Minimalist */}
      <div className="text-center mb-12 relative">
        {/* Completion Toggle */}
        <button
          onClick={() => toggleDayCompletion(day.day)}
          className={cn(
            "absolute top-0 right-0 md:right-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all",
            isCompleted ? "text-primary" : "text-muted-foreground hover:text-primary"
          )}
          title={isCompleted ? "Marcar como no leído" : "Marcar como leído"}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-6 h-6" />
              <span className="hidden sm:inline">Leído</span>
            </>
          ) : (
            <>
              <Circle className="w-6 h-6" />
              <span className="hidden sm:inline">Marcar leído</span>
            </>
          )}
        </button>

        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-full border mb-6 transition-colors",
          isCompleted ? "bg-primary text-primary-foreground border-primary" : "border-primary text-foreground"
        )}>
          <span className="font-serif text-xl font-medium">{day.day}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-8 leading-tight tracking-tight">
          {day.title}
        </h1>
        
        <div className="max-w-xl mx-auto border-l-2 border-primary pl-6 py-2 text-left">
          <p className="text-lg md:text-xl font-serif italic text-foreground mb-2">
            "{day.verse.text}"
          </p>
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            {day.verse.reference}
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ShareCard day={day} />
          <button
            onClick={() => setShowMusicLibrary(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/20 rounded-md transition-colors hover:bg-primary/5 text-primary min-w-[180px] justify-center"
          >
            <Music2 className="w-4 h-4" />
            Biblioteca Musical
          </button>
          <button
            onClick={() => setShowMovieLibrary(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/20 rounded-md transition-colors hover:bg-primary/5 text-primary min-w-[180px] justify-center"
          >
            <Film className="w-4 h-4" />
            Biblioteca de Películas
          </button>
          <button
            onClick={handleAudioToggle}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-colors min-w-[120px] justify-center",
              isPlaying 
                ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" 
                : "text-primary border-primary/20 hover:bg-primary/5"
            )}
          >
            {isPlaying ? (
              <>
                <Square className="w-4 h-4 fill-current" />
                Detener
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                Escuchar
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-card text-card-foreground border border-border shadow-sm">
        
        {/* Tabs - Modern & Simple */}
        <div className="flex border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("reflection")}
            className={cn(
              "flex-1 py-5 px-2 text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap",
              activeTab === "reflection" 
                ? "bg-primary text-primary-foreground" 
                : "bg-transparent text-muted-foreground hover:text-primary"
            )}
          >
            <BookOpen className="w-4 h-4" />
            Reflexión
          </button>
          <button
            onClick={() => setActiveTab("challenge")}
            className={cn(
              "flex-1 py-5 px-2 text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap",
              activeTab === "challenge" 
                ? "bg-primary text-primary-foreground" 
                : "bg-transparent text-muted-foreground hover:text-primary"
            )}
          >
            <Target className="w-4 h-4" />
            Desafío
          </button>
          <button
            onClick={() => setActiveTab("journal")}
            className={cn(
              "flex-1 py-5 px-2 text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap",
              activeTab === "journal" 
                ? "bg-primary text-primary-foreground" 
                : "bg-transparent text-muted-foreground hover:text-primary"
            )}
          >
            <PenLine className="w-4 h-4" />
            Diario
          </button>
        </div>

        <div className="p-6 md:p-16">
          {activeTab === "reflection" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="prose prose-lg prose-stone max-w-none">
                <div className="whitespace-pre-line leading-loose text-foreground font-light text-lg">
                  {day.reflection}
                </div>
                
                <div className="mt-16 pt-8 border-t border-border">
                  <Quote className="w-6 h-6 text-primary mb-4" />
                  <blockquote className="text-2xl font-serif italic text-foreground leading-relaxed">
                    "{day.quote.text}"
                  </blockquote>
                  <cite className="block mt-4 text-xs font-bold text-muted-foreground uppercase tracking-widest not-italic">
                    — {day.quote.author}
                  </cite>
                </div>
              </div>
            </div>
          )}

          {activeTab === "challenge" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5" />
                  Práctica Diaria
                </h3>
                <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed border-l-4 border-primary pl-6">
                  {day.challenge}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
                {day.song && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Music className="w-5 h-5" />
                      <h4 className="text-xs font-bold uppercase tracking-widest">Canción</h4>
                    </div>
                    <div>
                      <p className="text-xl font-serif font-medium">{day.song.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{day.song.artist}</p>
                      <div className="flex gap-2 mt-3">
                        {day.song.youtubeUrl && (
                        <a 
                          href={day.song.youtubeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Escuchar en YouTube"
                          className="inline-flex items-center justify-center w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-md hover:shadow-lg"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                        )}
                        {day.song.spotifyUrl && (
                        <a 
                          href={day.song.spotifyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Escuchar en Spotify"
                          className="inline-flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors shadow-md hover:shadow-lg"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {day.movie && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Film className="w-5 h-5" />
                      <h4 className="text-xs font-bold uppercase tracking-widest">Película</h4>
                    </div>
                    <div>
                      <p className="text-xl font-serif font-medium">{day.movie.title}</p>
                      <p className="text-xs font-bold text-muted-foreground uppercase mt-1 mb-2">{day.movie.platform}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{day.movie.description}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* @ts-ignore - motivationalVideo exists in atletas-data */}
              {day.motivationalVideo && (
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Play className="w-5 h-5" />
                      <h4 className="text-xs font-bold uppercase tracking-widest">Video Motivacional</h4>
                    </div>
                    <div>
                      {/* @ts-ignore */}
                      <p className="text-xl font-serif font-medium">{day.motivationalVideo.title}</p>
                      {/* @ts-ignore */}
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{day.motivationalVideo.description}</p>
                      {/* @ts-ignore */}
                      <p className="text-xs text-muted-foreground mt-1">Duración: {day.motivationalVideo.duration}</p>
                      {/* @ts-ignore */}
                      {day.motivationalVideo.youtubeUrl && (
                        // @ts-ignore
                        <a 
                          href={day.motivationalVideo.youtubeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg text-sm font-medium"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          Ver en YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "journal" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                  <PenLine className="w-5 h-5" />
                  Mi Diario de Gratitud
                </h3>
                <p className="text-muted-foreground font-light mb-6">
                  Escribe aquí tus pensamientos, oraciones o motivos de gratitud para este día. Tus notas son privadas y se guardan solo en este dispositivo.
                </p>
                <Textarea
                  placeholder="Hoy estoy agradecido por..."
                  className="min-h-[300px] bg-muted/30 border-border focus:border-primary focus:ring-primary/20 resize-none font-serif text-lg leading-relaxed p-6"
                  value={journalText}
                  onChange={handleJournalChange}
                />
                <p className="text-xs text-muted-foreground mt-3 text-right italic">
                  Guardado automáticamente
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Music Library Dialog */}
      <MusicLibraryDialog
        open={showMusicLibrary}
        onOpenChange={setShowMusicLibrary}
        songs={devotionalData
          .filter(d => d.song && d.song.youtubeUrl && d.song.spotifyUrl)
          .map(d => ({
            day: d.day,
            theme: d.title,
            title: d.song!.title,
            artist: d.song!.artist,
            youtubeUrl: d.song!.youtubeUrl!,
            spotifyUrl: d.song!.spotifyUrl!,
          }))}
        devotionalTitle={devotionalTitle}
      />

      {/* Movie Library Dialog */}
      <MovieLibraryDialog
        open={showMovieLibrary}
        onOpenChange={setShowMovieLibrary}
        movies={devotionalData
          .filter(d => d.movie && d.movie.youtubeUrl)
          .map(d => ({
            week: Math.ceil(d.day / 7),
            title: d.movie!.title,
            youtubeUrl: d.movie!.youtubeUrl!,
          }))}
        devotionalTitle={devotionalTitle}
      />
    </div>
  );
}

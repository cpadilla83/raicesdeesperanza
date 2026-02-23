import { useEffect, useState, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export function useJournal() {
  const [entries, setEntries] = useState<Record<number, string>>({});
  const { user, isAuthenticated } = useAuth();
  
  // Fetch all journal entries from API if authenticated
  const { data: journalData } = trpc.journal.getAllEntries.useQuery(
    undefined,
    { 
      enabled: isAuthenticated,
      refetchOnWindowFocus: false,
    }
  );
  
  const saveMutation = trpc.journal.saveEntry.useMutation({
    onSuccess: (_, variables) => {
      // Optimistically update local state
      setEntries((prev) => ({
        ...prev,
        [variables.dayNumber]: variables.content,
      }));
    },
  });

  // Load journal entries from API or localStorage
  useEffect(() => {
    if (isAuthenticated && journalData) {
      // Use cloud data
      const entriesMap: Record<number, string> = {};
      journalData.forEach((entry) => {
        entriesMap[entry.dayNumber] = entry.content;
      });
      setEntries(entriesMap);
    } else if (!isAuthenticated) {
      // Fallback to localStorage for non-authenticated users
      const savedJournal = localStorage.getItem("devotional-journal");
      if (savedJournal) {
        try {
          setEntries(JSON.parse(savedJournal));
        } catch (e) {
          console.error("Error parsing journal", e);
        }
      }
    }
  }, [isAuthenticated, journalData]);

  const saveEntry = useCallback((dayId: number, text: string) => {
    if (isAuthenticated) {
      // Use API with debouncing
      saveMutation.mutate({ dayNumber: dayId, content: text });
    } else {
      // Fallback to localStorage
      setEntries((prev) => {
        const newEntries = { ...prev, [dayId]: text };
        localStorage.setItem("devotional-journal", JSON.stringify(newEntries));
        return newEntries;
      });
    }
  }, [isAuthenticated, saveMutation]);

  const getEntry = useCallback((dayId: number) => entries[dayId] || "", [entries]);

  return {
    entries,
    saveEntry,
    getEntry,
  };
}

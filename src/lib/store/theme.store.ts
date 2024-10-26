// src/lib/store/theme.store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/types/theme";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);

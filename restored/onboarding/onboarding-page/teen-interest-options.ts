// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Teen interest picker catalog (Helper72/73 option list).

import type { TeenInterest } from "./constants";

export type TeenInterestOption = {
  id: TeenInterest;
  emoji: string;
  label: string;
};

/** Interest chips with emoji + label (teen interests picker catalog). */
export const TEEN_INTEREST_OPTIONS: readonly TeenInterestOption[] = [
  { id: "animals", emoji: "🐶", label: "Animals" },
  { id: "fitness", emoji: "💪", label: "Fitness" },
  { id: "school", emoji: "📖", label: "School" },
  { id: "art_creative", emoji: "🎨", label: "Art & Creative" },
  { id: "beauty_style", emoji: "💄", label: "Beauty & Style" },
  { id: "science", emoji: "🧪", label: "Science" },
  { id: "money", emoji: "💸", label: "Money" },
  { id: "gaming", emoji: "👾", label: "Gaming" },
  { id: "music", emoji: "🎵", label: "Music" },
  { id: "sports", emoji: "🏀", label: "Sports" },
  { id: "coding", emoji: "🧑‍💻", label: "Coding" },
  { id: "other", emoji: "🔎", label: "Other" },
] as const;

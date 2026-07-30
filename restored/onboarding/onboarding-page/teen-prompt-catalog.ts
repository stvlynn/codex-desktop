// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Teen starter-prompt cards ranked by selected interests (Helpers 75–76).

import type { TeenInterest } from "./constants";

export type TeenPromptCard = {
  id: string;
  title: string;
  description: string;
  prompt: string;
  interests: readonly TeenInterest[];
  thumbnail: {
    emoji: string;
    className: string;
  };
};

/** Example prompt cards for teen onboarding. */
export const TEEN_PROMPT_CATALOG: readonly TeenPromptCard[] = [
  {
    id: "dodging-game",
    title: "Dodging Game",
    description: "Build a game you can play in your browser.",
    prompt:
      "Build me a browser game where I control a character, dodge obstacles, collect points, and try to beat my high score. Make it colorful and easy to play.",
    interests: ["gaming", "coding"],
    thumbnail: {
      emoji: "🎮",
      className: "bg-[linear-gradient(135deg,#DFF6FF_0%,#BEE6FF_100%)]",
    },
  },
  {
    id: "study-web-app",
    title: "Study web app",
    description: "Turn your notes into flashcards and quizzes.",
    prompt:
      "Create a study web app where I can paste notes, turn them into flashcards, quiz myself, and track what I need to review next.",
    interests: ["school", "science", "coding"],
    thumbnail: {
      emoji: "📚",
      className: "bg-[linear-gradient(135deg,#E7FFF2_0%,#C9F3D9_100%)]",
    },
  },
  {
    id: "outfit-picker",
    title: "Outfit picker",
    description: "Get outfit ideas based on your style, plans, and weather.",
    prompt:
      "Make an outfit picker app that asks about my style, plans, and the weather, then suggests outfit ideas and lets me save favorites.",
    interests: ["beauty_style", "art_creative"],
    thumbnail: {
      emoji: "👟",
      className: "bg-[linear-gradient(135deg,#FFF3F7_0%,#F6DDE8_100%)]",
    },
  },
  {
    id: "pet-care-tracker",
    title: "Pet care tracker",
    description: "Track feeding, walks, and reminders for a pet.",
    prompt:
      "Build a pet care tracker where I can log feeding, walks, training, and reminders for my pet. Add a cute dashboard and streaks.",
    interests: ["animals"],
    thumbnail: {
      emoji: "🐶",
      className: "bg-[linear-gradient(135deg,#FFF6DE_0%,#F9DFB4_100%)]",
    },
  },
  {
    id: "animal-avatar-maker",
    title: "Animal avatar maker",
    description: "Design cute animal characters and profile pictures.",
    prompt:
      "Build an animal avatar maker where I can design cute animal characters, choose colors and accessories, and save profile pictures.",
    interests: ["animals", "art_creative"],
    thumbnail: {
      emoji: "🐾",
      className: "bg-[linear-gradient(135deg,#F9F0FF_0%,#FFD9EF_100%)]",
    },
  },
  {
    id: "workout-planner",
    title: "Workout planner",
    description: "Plan workouts and track progress over time.",
    prompt:
      "Create a workout planner for teens with beginner-friendly workouts, rest days, progress tracking, and encouraging reminders.",
    interests: ["fitness", "sports"],
    thumbnail: {
      emoji: "💪",
      className: "bg-[linear-gradient(135deg,#EBFFF6_0%,#BEEBD7_100%)]",
    },
  },
  {
    id: "song-idea-board",
    title: "Song idea board",
    description: "Organize lyrics, moods, and playlist inspiration.",
    prompt:
      "Make a music idea board where I can save song concepts, lyric fragments, moods, cover art ideas, and playlists that inspire me.",
    interests: ["music", "art_creative"],
    thumbnail: {
      emoji: "🎵",
      className: "bg-[linear-gradient(135deg,#F2EDFF_0%,#D7CAFF_100%)]",
    },
  },
  {
    id: "budget-helper",
    title: "Budget helper",
    description: "Track savings goals and spending habits.",
    prompt:
      "Build a simple budget helper where I can track spending, savings goals, chores or job money, and see how long until I can afford something.",
    interests: ["money", "school"],
    thumbnail: {
      emoji: "💸",
      className: "bg-[linear-gradient(135deg,#F1FFE6_0%,#D5F2B6_100%)]",
    },
  },
  {
    id: "science-fair-lab",
    title: "Science fair lab",
    description: "Plan an experiment and organize observations.",
    prompt:
      "Create a science fair project planner that helps me choose a question, write a hypothesis, track observations, and prepare a presentation.",
    interests: ["science", "school"],
    thumbnail: {
      emoji: "🧪",
      className: "bg-[linear-gradient(135deg,#EAFBFF_0%,#C3EDF6_100%)]",
    },
  },
  {
    id: "team-stats-dashboard",
    title: "Team stats dashboard",
    description: "Track games, players, and season highlights.",
    prompt:
      "Build a sports team dashboard where I can track games, player stats, highlights, practice goals, and season progress.",
    interests: ["sports", "fitness"],
    thumbnail: {
      emoji: "🏀",
      className: "bg-[linear-gradient(135deg,#FFF0E6_0%,#FFD3B8_100%)]",
    },
  },
  {
    id: "portfolio-gallery",
    title: "Portfolio gallery",
    description: "Show off art, photos, writing, or projects.",
    prompt:
      "Make a personal portfolio gallery where I can show my art, photos, writing, projects, and a short bio in a clean visual layout.",
    interests: ["art_creative", "coding"],
    thumbnail: {
      emoji: "🎨",
      className: "bg-[linear-gradient(135deg,#FFF0FA_0%,#EFD1FF_100%)]",
    },
  },
];

/** Bundle Helper76 — top 3 prompts ranked by interest overlap. */
export function pickTeenPromptsForInterests(
  selectedInterests: readonly TeenInterest[],
  limit: number = 3,
): TeenPromptCard[] {
  return TEEN_PROMPT_CATALOG.map((prompt, index) => ({
    prompt,
    index,
    matchCount: prompt.interests.filter((interest) =>
      selectedInterests.includes(interest),
    ).length,
  }))
    .sort((left, right) =>
      right.matchCount === left.matchCount
        ? left.index - right.index
        : right.matchCount - left.matchCount,
    )
    .slice(0, limit)
    .map(({ prompt }) => prompt);
}

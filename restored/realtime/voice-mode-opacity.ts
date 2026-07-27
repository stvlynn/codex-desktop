// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `bat` — pure helper.

export type VoiceModePhase = "inactive" | "starting" | "stopping" | "active";
export type VoiceModeActivity = "idle" | "listening" | "thinking" | "speaking";

/** Opacity triad for voice UI listen/speak/think layers. */
export function voiceModeOpacity(phase: VoiceModePhase, activity: VoiceModeActivity): { listen: number; speak: number; think: number } | undefined {
  switch (phase) {
    case "inactive":
      return { listen: 0, speak: 0, think: 0 };
    case "starting":
      return { listen: 0, speak: 0, think: 1 };
    case "stopping":
      return { listen: 0.35, speak: 0, think: 0 };
    case "active":
      break;
  }
  switch (activity) {
    case "idle":
    case "listening":
      return { listen: 1, speak: 0, think: 0 };
    case "thinking":
      return { listen: 0.65, speak: 0, think: 1 };
    case "speaking":
      return { listen: 0.2, speak: 1, think: 0 };
  }
}

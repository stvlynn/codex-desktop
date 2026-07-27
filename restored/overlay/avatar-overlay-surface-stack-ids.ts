// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Avatar-overlay z-order stack (`Qge` / export `Zht`).

/** Ordered surface ids from highest to lowest overlay priority. */
export const AVATAR_OVERLAY_SURFACE_STACK_IDS = [
  "composer",
  "realtime-caption",
  "activity-slot-8",
  "activity-slot-7",
  "activity-slot-6",
  "activity-slot-5",
  "activity-slot-4",
  "activity-slot-3",
  "activity-slot-2",
  "activity-slot-1",
  "activity-slot-0",
  "voice-status",
  "voice-microphone",
  "voice-controls",
  "voice-output",
  "mascot-badge",
] as const;

export type AvatarOverlaySurfaceStackId =
  (typeof AVATAR_OVERLAY_SURFACE_STACK_IDS)[number];

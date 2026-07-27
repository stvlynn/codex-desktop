// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Avatar-overlay activity notification slot ids (`Nl` / `Lge` / `Rge`).

/** Base stacked slots (0–7) (`Nl`, co-located with `Uge`). */
export const ACTIVITY_SLOT_BASE_IDS = [
  "activity-slot-0",
  "activity-slot-1",
  "activity-slot-2",
  "activity-slot-3",
  "activity-slot-4",
  "activity-slot-5",
  "activity-slot-6",
  "activity-slot-7",
] as const;

/** Highest-priority activity slot id (`Lge` / export `agt`). */
export const ACTIVITY_SLOT_8_ID = "activity-slot-8";

/**
 * Bundle `Rge` / export `ogt`.
 * All activity slots including the overflow / badge slot.
 */
export const ACTIVITY_SLOT_IDS = [
  ...ACTIVITY_SLOT_BASE_IDS,
  ACTIVITY_SLOT_8_ID,
] as const;

export type ActivitySlotId = (typeof ACTIVITY_SLOT_IDS)[number];

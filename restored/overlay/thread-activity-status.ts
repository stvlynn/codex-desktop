// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Idle-timeout enums + thread activity status colors (`ipe` / `npe` / `rpe`).

/** Idle-timeout preference ids (`ipe` / export `r_t`). */
export const IDLE_TIMEOUT_IDS = [
  "off",
  "30-seconds",
  "1-minute",
  "3-minutes",
  "10-minutes",
  "30-minutes",
  "1-hour",
] as const;

export type IdleTimeoutId = (typeof IDLE_TIMEOUT_IDS)[number];

/** Milliseconds for each idle-timeout id (`ope`). */
export const IDLE_TIMEOUT_MS_BY_ID: Record<IdleTimeoutId, number | null> = {
  off: null,
  "30-seconds": 30_000,
  "1-minute": 60_000,
  "3-minutes": 180_000,
  "10-minutes": 600_000,
  "30-minutes": 1_800_000,
  "1-hour": 3_600_000,
};

/** Bundle `npe` / export `a_t`. */
export function idleTimeoutMsForId(id: IdleTimeoutId): number | null {
  return IDLE_TIMEOUT_MS_BY_ID[id];
}

export type ThreadActivityStatus =
  | "working"
  | "unread"
  | "idle"
  | "awaiting-approval"
  | "awaiting-response"
  | "error"
  | "off";

/**
 * Bundle `rpe` / export `o_t`.
 * 24-bit RGB ints used by overlay / tray status glyphs.
 */
export function threadActivityStatusColor(
  status: ThreadActivityStatus,
): number {
  switch (status) {
    case "working":
      return 3_166_206;
    case "unread":
      return 65_356;
    case "idle":
      return 16_777_215;
    case "awaiting-approval":
    case "awaiting-response":
      return 16_739_584;
    case "error":
      return 16_711_731;
    case "off":
      return 0;
  }
}

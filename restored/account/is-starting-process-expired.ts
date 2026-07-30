// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iyu` / export `Q`; companion `ayu` / `lyu`.

const START_AGE_SLACK_MS = 1000;

function isStartStaleAgainstMetrics(
  row: { row: { process: { startedAtMs?: number | null } } },
  snapshot:
    | { metrics?: { ageSeconds?: number | null } | null }
    | null
    | undefined,
  nowMs: number,
): boolean {
  const startedAtMs = row.row.process.startedAtMs;
  const ageSeconds = snapshot?.metrics?.ageSeconds;
  return startedAtMs == null || ageSeconds == null
    ? true
    : nowMs - ageSeconds * 1000 >= startedAtMs - START_AGE_SLACK_MS;
}

/** True when a `starting` process has expired (or looks stale). */
export function isStartingProcessExpired(
  row: {
    status: string;
    expiresAtMs?: number | null;
    row: { process: { startedAtMs?: number | null } };
  },
  snapshot:
    | { metrics?: { ageSeconds?: number | null } | null }
    | null
    | undefined,
  nowMs: number,
): boolean {
  if (row.status !== "starting") return false;
  if (row.expiresAtMs != null && row.expiresAtMs <= nowMs) return true;
  if (snapshot == null) return false;
  return isStartStaleAgainstMetrics(row, snapshot, nowMs);
}

// --- missing-relative-export aliases ---
export { isStartingProcessExpired as IsStartingProcessExpired };

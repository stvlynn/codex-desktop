// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Activity-entry ring buffer helpers (bundle `UEa`/`WEa`/`GEa`/`zEa` —
// exports `fF`/`pF`/`dF`/`uF`). Module-local buffer mirrors bundle `qV`.

export type ActivityEntrySnapshot = {
  entries: unknown[];
  generatedAtMs: number;
  maxEntries: number;
  version: number;
};

const DEFAULT_MAX_ENTRIES = 200;
const DEFAULT_VERSION = 1;

let entries: unknown[] = [];
let generation = 0;
let retainCount = 0;

/** Bundle `WEa` / export `pF`. */
export function getActivityEntryCount(): number {
  return entries.length;
}

/** Bundle `GEa` / export `dF`. */
export function clearActivityEntries(): void {
  entries = [];
  generation = 0;
}

/** Bundle `UEa` / export `fF`. */
export function createActivityEntriesSnapshot(maxEntries: number = DEFAULT_MAX_ENTRIES, version: number = DEFAULT_VERSION): ActivityEntrySnapshot {
  return {
    entries: [...entries],
    generatedAtMs: Date.now(),
    maxEntries,
    version,
  };
}

/** Bundle `zEa` / export `uF` — retain token while a consumer is active. */
export function retainActivityEntries(): () => void {
  retainCount += 1;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    retainCount = Math.max(0, retainCount - 1);
  };
}

export function getActivityRetainCount(): number {
  return retainCount;
}

/** Test/restore helper — not an app-initial export. */
export function __resetActivityEntriesForTests(): void {
  entries = [];
  generation = 0;
  retainCount = 0;
}

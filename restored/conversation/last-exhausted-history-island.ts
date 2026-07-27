// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_ot` companion for export `Zst`.

export type HistoryIslandBoundary = { status?: string };
export type HistoryIsland = {
  newerBoundary?: HistoryIslandBoundary;
  entries: Array<{ value: string }>;
};

/** Last island when its newer boundary is exhausted. */
export function lastExhaustedHistoryIsland(history: {
  islands: HistoryIsland[];
}): HistoryIsland | null {
  const island = history.islands.at(-1);
  return island?.newerBoundary?.status === "exhausted" ? island : null;
}

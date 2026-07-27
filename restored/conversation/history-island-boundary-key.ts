// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `oot` — pure helper.

/** Stable key for an island older/newer boundary. */
export function historyIslandBoundaryKey(
  island: {
    id: string;
    olderBoundary: { boundaryId?: string | null };
    newerBoundary: { boundaryId?: string | null };
  },
  side: "older" | "newer",
): string {
  const boundary =
    side === "older" ? island.olderBoundary : island.newerBoundary;
  return boundary.boundaryId == null
    ? `island:${island.id}:${side}`
    : `boundary:${boundary.boundaryId}`;
}

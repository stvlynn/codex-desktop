// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `Yer`) / export `f4`.
// Dispatch thread↔project assignment messages from extractFn(Yer).

export type DispatchThreadProjectAssignmentMessagePeers = {
  run: (...args: unknown[]) => unknown;
};

let peers: DispatchThreadProjectAssignmentMessagePeers | null = null;

/** Wire dispatchThreadProjectAssignmentMessage peers once companions land. */
export function setDispatchThreadProjectAssignmentMessagePeers(
  next: DispatchThreadProjectAssignmentMessagePeers,
): void {
  peers = next;
}

/**
 * Bundle export `f4` / internal `Yer`.
 * Dispatch thread↔project assignment messages from extractFn(Yer).
 */
export function dispatchThreadProjectAssignmentMessage(
  ...args: unknown[]
): unknown {
  if (peers == null) {
    throw new Error(
      "dispatchThreadProjectAssignmentMessage peers are not configured",
    );
  }
  return peers.run(...args);
}

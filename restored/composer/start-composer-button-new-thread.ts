// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `ats`) / export `aw`.

export type StartComposerButtonNewThreadPeers = {
  run: (...args: unknown[]) => Promise<unknown> | unknown;
};

let peers: StartComposerButtonNewThreadPeers | null = null;

/** Wire StartComposerButtonNewThread peers once companions land. */
export function setStartComposerButtonNewThreadPeers(
  next: StartComposerButtonNewThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aw` / internal `ats`.
 * Async helper body restored from extractFn(internal).
 */
export async function StartComposerButtonNewThread(
  ...args: unknown[]
): Promise<unknown> {
  if (peers == null) {
    throw new Error("StartComposerButtonNewThread peers are not configured");
  }
  return peers.run(...args);
}

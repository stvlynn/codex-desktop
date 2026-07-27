// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `HKi`) / export `xV`.

export type SetThreadPinnedFlagsPeers = {
  patchThreadFlags: (
    store: unknown,
    threadId: unknown,
    flags: Array<Record<string, unknown>>,
  ) => void;
};

let peers: SetThreadPinnedFlagsPeers | null = null;

/** Wire thread flag patcher once companions land. */
export function setSetThreadPinnedFlagsPeers(
  next: SetThreadPinnedFlagsPeers,
): void {
  peers = next;
}

/** @deprecated Prefer setSetThreadPinnedFlagsPeers */
export function bindSetThreadPinnedFlagsWriter(
  next: (
    store: unknown,
    threadId: unknown,
    flags: Array<Record<string, unknown>>,
  ) => void,
): void {
  peers = { patchThreadFlags: next };
}

/**
 * Bundle export `xV` / internal `HKi`.
 * Set isPinned (+ clear pinnedBeforeThreadId when unpinning).
 */
export function setThreadPinnedFlags(
  store: unknown,
  threadId: unknown,
  isPinned: boolean,
): void {
  if (peers == null) {
    throw new Error("SetThreadPinnedFlags peers are not configured");
  }
  peers.patchThreadFlags(
    store,
    threadId,
    isPinned
      ? [{ type: "isPinned", isPinned }]
      : [
          { type: "isPinned", isPinned },
          { type: "pinnedBeforeThreadId", beforeThreadId: null },
        ],
  );
}

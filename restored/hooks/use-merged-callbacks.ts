// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `kBt`) / export `krt`.

export type UseMergedCallbacksPeers = {
  useMemo: <T>(factory: () => T, deps: unknown[]) => T;
};

let peers: UseMergedCallbacksPeers | null = null;

/** Wire useMergedCallbacks peers once companions land. */
export function setUseMergedCallbacksPeers(
  next: UseMergedCallbacksPeers,
): void {
  peers = next;
}

/**
 * Bundle export `krt` / internal `kBt`.
 * Memoize a callback that fans out to each provided handler.
 */
export function useMergedCallbacks(
  ...callbacks: Array<(value: unknown) => void>
): (value: unknown) => void {
  if (peers == null) {
    throw new Error("UseMergedCallbacks peers are not configured");
  }
  return peers.useMemo(
    () => (value: unknown) => {
      for (const cb of callbacks) cb(value);
    },
    callbacks,
  );
}

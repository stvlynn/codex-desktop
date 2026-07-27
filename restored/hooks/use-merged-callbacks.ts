// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kBt`) / export `krt`.

export type UseMergedCallbacksPeers = {
  Uv: (...args: unknown[]) => unknown;
};

let peers: UseMergedCallbacksPeers | null = null;

/** Wire useMergedCallbacks peers once companions land. */
export function setUseMergedCallbacksPeers(next: UseMergedCallbacksPeers): void {
  peers = next;
}

/**
 * Bundle export `krt` / internal `kBt`.
 */
export function useMergedCallbacks() {
  if (peers == null) {
    throw new Error("useMergedCallbacks peers are not configured");
  }

  var e = [...arguments];
  return (0, peers.Uv.useMemo)(
    () => (t) => {
      e.forEach((e) => e(t));
    },
    e,
  );
}

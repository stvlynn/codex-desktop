// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ww`) / export `d5`.

export type BindWindowsPeers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  YGn: (...args: unknown[]) => unknown;
  ZGn: (...args: unknown[]) => unknown;
  platform: (...args: unknown[]) => unknown;
};

let peers: BindWindowsPeers | null = null;

/** Wire bindWindows peers once companions land. */
export function setBindWindowsPeers(next: BindWindowsPeers): void {
  peers = next;
}

/**
 * Bundle export `d5` / internal `Ww`.
 */
export function bindWindows() {
  if (peers == null) {
    throw new Error("bindWindows peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) =>
    peers.ZGn(e(peers.YGn).data?.platform),
  );
}

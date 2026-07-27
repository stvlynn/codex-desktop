// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bjs`) / export `hv`.

export type Cloud3Peers = {
  yjs: (...args: unknown[]) => unknown;
};

let peers: Cloud3Peers | null = null;

/** Wire cloud3 peers once companions land. */
export function setCloud3Peers(next: Cloud3Peers): void {
  peers = next;
}

/**
 * Bundle export `hv` / internal `bjs`.
 */
export function cloud3() {
  if (peers == null) {
    throw new Error("cloud3 peers are not configured");
  }

  return (0, peers.yjs.createContext)(null);
}

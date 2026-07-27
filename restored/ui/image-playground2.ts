// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tbs`) / export `pb`.

export type ImagePlayground2Peers = {
  ebs: (...args: unknown[]) => unknown;
};

let peers: ImagePlayground2Peers | null = null;

/** Wire imagePlayground2 peers once companions land. */
export function setImagePlayground2Peers(next: ImagePlayground2Peers): void {
  peers = next;
}

/**
 * Bundle export `pb` / internal `tbs`.
 */
export function imagePlayground2() {
  if (peers == null) {
    throw new Error("imagePlayground2 peers are not configured");
  }

  return (0, peers.ebs.createContext)(`default`);
}

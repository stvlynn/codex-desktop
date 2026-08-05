// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DE`) / export `$4`.

export type HostConfig2Peers = {
  G_: (...args: unknown[]) => unknown;
  K8n: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  q8n: (...args: unknown[]) => unknown;
};

let peers: HostConfig2Peers | null = null;

/** Wire hostConfig2 peers once companions land. */
export function setHostConfig2Peers(next: HostConfig2Peers): void {
  peers = next;
}

/**
 * Bundle export `$4` / internal `DE`.
 */
export function hostConfig2() {
  if (peers == null) {
    throw new Error("hostConfig2 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.K8n);
    return n != null && e === n.id ? n : peers.G_(e, t(peers.q8n));
  });
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bxu`) / export `M`.

export type BindRemoteHostedPipHiddenThreadIdsPeers = {
  Da: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Lxu: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Rxu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  zxu: (...args: unknown[]) => unknown;
};

let peers: BindRemoteHostedPipHiddenThreadIdsPeers | null = null;

/** Wire bindRemoteHostedPipHiddenThreadIds peers once companions land. */
export function setBindRemoteHostedPipHiddenThreadIdsPeers(next: BindRemoteHostedPipHiddenThreadIdsPeers): void {
  peers = next;
}

/**
 * Bundle export `M` / internal `Bxu`.
 */
export function bindRemoteHostedPipHiddenThreadIds() {
  if (peers == null) {
    throw new Error("bindRemoteHostedPipHiddenThreadIds peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), peers.Im(), Lxu = peers.Pm(`remote-hosted-pip-hidden-thread-ids`, []), Rxu = peers.Oa(peers.Q, (e, {
      get: t
    }) => peers.e == null || !(t(peers.Lxu) ?? []).includes(peers.e)), zxu = peers.Da(peers.Q, e => !1);
  });
}

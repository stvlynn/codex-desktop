// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SSe`) / export `Smt`.

export type BindDeferredSmtPeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _Se: (...args: unknown[]) => unknown;
  al: (...args: unknown[]) => unknown;
  bSe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vSe: (...args: unknown[]) => unknown;
  xSe: (...args: unknown[]) => unknown;
  ySe: (...args: unknown[]) => unknown;
};

let peers: BindDeferredSmtPeers | null = null;

/** Wire bindDeferredSmt peers once companions land. */
export function setBindDeferredSmtPeers(next: BindDeferredSmtPeers): void {
  peers = next;
}

/**
 * Bundle export `Smt` / internal `SSe`.
 */
export function bindDeferredSmt() {
  if (peers == null) {
    throw new Error("bindDeferredSmt peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), vSe = peers.pl([`read`, `created`, `updated`]), ySe = peers.sl({
      id: peers.X().min(1),
      url: peers.X().refine(peers._Se),
      title: peers.X().optional(),
      mimeType: peers.X().optional(),
      activities: peers.ol(peers.vSe).min(1)
    }), bSe = peers.sl({
      "openai/resourceActivities": peers.sl({
        version: peers.ml(1),
        resources: peers.ol(peers.ySe)
      }).passthrough()
    }).passthrough(), xSe = peers.sl({
      "openai/resourceActivities": peers.al().optional()
    }).passthrough();
  });
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vx`) / export `n9`.

export type BindDeferredPluginsN9Peers = {
  D7t: (...args: unknown[]) => unknown;
  fln: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  iln: (...args: unknown[]) => unknown;
  mln: (...args: unknown[]) => unknown;
  performanceTelemetry: (...args: unknown[]) => unknown;
  pln: (...args: unknown[]) => unknown;
  sln: (...args: unknown[]) => unknown;
  uln: (...args: unknown[]) => unknown;
};

let peers: BindDeferredPluginsN9Peers | null = null;

/** Wire bindDeferredPluginsN9 peers once companions land. */
export function setBindDeferredPluginsN9Peers(next: BindDeferredPluginsN9Peers): void {
  peers = next;
}

/**
 * Bundle export `n9` / internal `Vx`.
 */
export function bindDeferredPluginsN9() {
  if (peers == null) {
    throw new Error("bindDeferredPluginsN9 peers are not configured");
  }

  return new peers.iln({
    beginCpuSampling: () => {
      let e = crypto.randomUUID();
      return (
        peers.fln(e),
        {
          cancel: () => {
            if (peers.mln.delete(e)) return;
            let t = peers.gp?.performanceTelemetry;
            t != null && peers.pln(() => t.cancelSpanCpuSampling(e));
          },
          finish: async () => {
            if (peers.mln.delete(e)) return null;
            let t = peers.gp?.performanceTelemetry;
            if (t == null) return null;
            try {
              return await t.finishSpanCpuSampling(e);
            } catch {
              return null;
            }
          },
        }
      );
    },
    captureAppState: peers.sln,
    clientPlatform: peers.D7t(),
    hostType: `electron`,
    startTrace: peers.uln,
    wallNow: Date.now,
  });
}

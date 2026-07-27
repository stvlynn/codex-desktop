// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hx`) / export `i9`.

export type BindDesktopAppStartPeers = {
  D7t: (...args: unknown[]) => unknown;
  Vx: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fln: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  hln: (...args: unknown[]) => unknown;
  iln: (...args: unknown[]) => unknown;
  ix: (...args: unknown[]) => unknown;
  lln: (...args: unknown[]) => unknown;
  mln: (...args: unknown[]) => unknown;
  oln: (...args: unknown[]) => unknown;
  performanceTelemetry: (...args: unknown[]) => unknown;
  pln: (...args: unknown[]) => unknown;
  sln: (...args: unknown[]) => unknown;
  sx: (...args: unknown[]) => unknown;
  uln: (...args: unknown[]) => unknown;
};

let peers: BindDesktopAppStartPeers | null = null;

/** Wire bindDesktopAppStart peers once companions land. */
export function setBindDesktopAppStartPeers(next: BindDesktopAppStartPeers): void {
  peers = next;
}

/**
 * Bundle export `i9` / internal `Hx`.
 */
export function bindDesktopAppStart() {
  if (peers == null) {
    throw new Error("bindDesktopAppStart peers are not configured");
  }

  return peers.e(() => {
    peers.ix(), peers.sx(), peers._p(), peers.oln(), peers.lln(), mln = new Set(), hln = {
      app_start: `desktop.app_start`,
      artifact_generation: `desktop.artifact_generation`,
      artifact_preview: `desktop.artifact_preview`,
      plugins_page_load: `desktop.plugins_page_load`,
      review_open: `desktop.review_open`,
      thread_navigation: `desktop.thread_navigation`,
      turn_first_response_visible: `desktop.turn_submit`
    }, Vx = new peers.iln({
      beginCpuSampling: () => {
        let e = crypto.randomUUID();
        return peers.fln(peers.e), {
          cancel: () => {
            if (peers.mln.delete(peers.e)) return;
            let t = peers.gp?.performanceTelemetry;
            t != null && peers.pln(() => t.cancelSpanCpuSampling(peers.e));
          },
          finish: async () => {
            if (peers.mln.delete(peers.e)) return null;
            let t = peers.gp?.performanceTelemetry;
            if (t == null) return null;
            try {
              return await t.finishSpanCpuSampling(peers.e);
            } catch {
              return null;
            }
          }
        };
      },
      captureAppState: peers.sln,
      clientPlatform: peers.D7t(),
      hostType: `electron`,
      startTrace: peers.uln,
      wallNow: Date.now
    });
  });
}

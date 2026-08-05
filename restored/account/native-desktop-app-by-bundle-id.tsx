// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ZHc`) / export `Md`.

export type NativeDesktopAppByBundleIdPeers = {
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  XHc: (...args: unknown[]) => unknown;
  YHc: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  toLowerCase: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
  Hf: { ONE_MINUTE?: number; FIVE_MINUTES: number; [k: string]: unknown };
};

let peers: NativeDesktopAppByBundleIdPeers | null = null;

/** Wire NativeDesktopAppByBundleId peers once companions land. */
export function setNativeDesktopAppByBundleIdPeers(
  next: NativeDesktopAppByBundleIdPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Md` / internal `ZHc`.
 */
export function NativeDesktopAppByBundleId() {
  if (peers == null) {
    throw new Error("NativeDesktopAppByBundleId peers are not configured");
  }
  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.Uf(),
      peers.ap(),
      (YHc = peers.tp(peers.Q, `native-desktop-app-by-bundle-id`, (e) => ({
        enabled: peers.e != null,
        params:
          peers.e == null
            ? void 0
            : {
                bundleId: peers.e,
              },
        refetchOnWindowFocus: !1,
        select: (e) => peers.e.app,
        staleTime: peers.Hf.FIVE_MINUTES,
      }))),
      (XHc = peers.tp(peers.Q, `native-desktop-apps`, (e) => ({
        cacheKey: [`computer-use-tool-row-display-name`, peers.e],
        enabled: peers.e != null,
        params: {
          order: `usage`,
        },
        refetchOnWindowFocus: !1,
        select: (t) =>
          t.apps.find(
            (t) => t.displayName.toLowerCase() === peers.e?.toLowerCase(),
          ) ?? null,
        staleTime: peers.Hf.FIVE_MINUTES,
      }))));
  });
}

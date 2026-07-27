// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yLo`) / export `cO`.

export type BrowserUseWebviewHostPeers = {
  Mq: (...args: unknown[]) => unknown;
  Rj: (...args: unknown[]) => unknown;
  SLo: (...args: unknown[]) => unknown;
  bLo: (...args: unknown[]) => unknown;
  disposed: (...args: unknown[]) => unknown;
  queueMicrotask: (...args: unknown[]) => unknown;
  xLo: (...args: unknown[]) => unknown;
};
let peers: BrowserUseWebviewHostPeers | null = null;

/** Wire BrowserUseWebviewHost peers once companions land. */
export function setBrowserUseWebviewHostPeers(
  next: BrowserUseWebviewHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cO` / internal `yLo`.
 */
export function BrowserUseWebviewHost({
  adoptionLease,
  adoptedWebContentsId,
  bounds,
  browserTabId,
  children,
  conversationId,
  hostKind = "right-panel",
  initialUrl,
  isVisible,
  scale,
  shouldBootstrapWhenHidden,
  shouldPaint,
  webviewRef,
  windowZoom,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("BrowserUseWebviewHost peers are not configured");
  }
  let m = peers.Mq.useRef(null),
    h = peers.Mq.useId(),
    g = peers.Mq.useRef(false),
    _ = peers.Mq.useRef(false),
    v = peers.Mq.useRef(
      peers.Rj.getMountGeneration(conversationId, browserTabId),
    ),
    y = peers.Mq.useRef(peers.xLo(conversationId, browserTabId)),
    b = peers.Mq.useSyncExternalStore(
      peers.Rj.subscribe,
      () => {
        return peers.Rj.getCursorOverlayHost(conversationId, browserTabId);
      },
      () => {
        return null;
      },
    );
  y.current = peers.xLo(conversationId, browserTabId);
  peers.Mq.useLayoutEffect(() => {
    return (
      (_.current = true),
      () => {
        _.current = false;
      }
    );
  }, []);
  let x = isVisible && bounds != null;
  return (
    peers.Mq.useLayoutEffect(() => {
      let e = peers.xLo(conversationId, browserTabId);
      if (
        peers.bLo({
          hasManagedWebview: m.current != null,
          isPresented: x,
          shouldBootstrapWhenHidden,
        }) === "skip"
      ) {
        g.current = false;
        v.current = peers.Rj.getMountGeneration(conversationId, browserTabId);
        return;
      }
      let t = peers.Rj.claimMountGeneration(conversationId, browserTabId, h);
      return (
        (v.current = t),
        (g.current = true),
        () => {
          g.current = false;
          peers.queueMicrotask(() => {
            if (_.current && y.current === e && g.current) return;
            let n = peers.Rj.releaseMountGeneration(
              conversationId,
              browserTabId,
              h,
              t,
            );
            v.current === t && (v.current = n);
          });
        }
      );
    }, [browserTabId, conversationId, x, h, shouldBootstrapWhenHidden]),
    peers.Mq.useLayoutEffect(() => {
      let e = peers.xLo(conversationId, browserTabId);
      return () => {
        let t = m.current,
          n = v.current;
        peers.queueMicrotask(() => {
          let i = y.current;
          (_.current && i === e) ||
            peers.Rj.hasOtherMountGenerationClaim(
              conversationId,
              browserTabId,
              h,
              n,
            ) ||
            (t != null &&
              (peers.Rj.detachElectronWebview(t, webviewRef, hostKind, n),
              m.current === t && (m.current = null)));
        });
      };
    }, [browserTabId, conversationId, hostKind, h, webviewRef]),
    peers.Mq.useLayoutEffect(() => {
      m.current?.disposed && (m.current = null);
      let i = m.current,
        c = peers.bLo({
          hasManagedWebview: i != null,
          isPresented: x,
          shouldBootstrapWhenHidden,
        });
      if (c === "skip") {
        if (i != null) {
          let e = v.current;
          peers.Rj.hasOtherMountGenerationClaim(
            conversationId,
            browserTabId,
            h,
            e,
          ) || peers.Rj.detachElectronWebview(i, webviewRef, hostKind, e);
        }
        m.current === i && (m.current = null);
        return;
      }
      let g = peers.Rj.getWebview(conversationId, browserTabId, initialUrl, {
        adoptionLease,
        adoptedWebContentsId,
        hostKind,
      });
      m.current = g;
      peers.Rj.syncElectronWebview(
        g,
        {
          bounds,
          isVisible: x,
          mountGeneration: v.current,
          scale,
          shouldBootstrap: c === "bootstrap",
          shouldPaint,
          windowZoom,
        },
        webviewRef,
        hostKind,
      );
    }, [
      browserTabId,
      conversationId,
      hostKind,
      initialUrl,
      adoptionLease,
      adoptedWebContentsId,
      bounds,
      x,
      h,
      scale,
      shouldPaint,
      shouldBootstrapWhenHidden,
      webviewRef,
      windowZoom,
    ]),
    b == null || children == null ? null : peers.SLo.createPortal(children, b)
  );
}

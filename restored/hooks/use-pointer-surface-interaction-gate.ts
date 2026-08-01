// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kbu`) / export `K`.

export type UsePointerSurfaceInteractionGatePeers = {
  Abu: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  Lm: (...args: unknown[]) => unknown;
  Mat: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ResizeObserver: (...args: unknown[]) => unknown;
  V9: (...args: unknown[]) => unknown;
  bb56: (...args: unknown[]) => unknown;
  conversationId: (...args: unknown[]) => unknown;
  disconnect: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  jat: (...args: unknown[]) => unknown;
  observe: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  updateEligibility: (...args: unknown[]) => unknown;
};
let peers: UsePointerSurfaceInteractionGatePeers | null = null;

/** Wire usePointerSurfaceInteractionGate peers once companions land. */
export function setUsePointerSurfaceInteractionGatePeers(
  next: UsePointerSurfaceInteractionGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `K` / internal `kbu`.
 */
export function usePointerSurfaceInteractionGate(e: unknown) {
  if (peers == null) {
    throw new Error(
      "usePointerSurfaceInteractionGate peers are not configured",
    );
  }
  let { enabled, isEligible, locator, surface } = e,
    o = peers.Io(peers.Q),
    s = peers.Lm(),
    c = peers.V9.useRef(null),
    l = peers.V9.useRef(null),
    u = peers.V9.useRef(null),
    d = peers.V9.useRef(null),
    f = locator?.conversationId,
    p = locator?.hostId,
    m = () => {
      let e = l.current,
        t = c.current;
      if (e == null || t == null) return;
      let n = e.getBoundingClientRect();
      t.updateAnchor(
        peers.jat(n, {
          screenX: window.screenX,
          screenY: window.screenY,
        }),
      );
      let r = u.current;
      r != null &&
        t.updatePresentationOffset(peers.Mat(n, r.getBoundingClientRect()));
    };
  let h = m,
    g = (e, t) => {
      let n = t === undefined ? null : t;
      if (
        (d.current?.(),
        (d.current = null),
        (l.current = e),
        (u.current = n),
        e == null)
      )
        return;
      let r =
        typeof peers.ResizeObserver > "u" ? null : new peers.ResizeObserver(h);
      r?.observe(e);
      e.addEventListener("pointerdown", h, true);
      e.addEventListener("pointerup", h, true);
      window.addEventListener("blur", h);
      window.addEventListener("resize", h);
      let i = peers.Jf.subscribe("electron-window-position-changed", h);
      h();
      d.current = () => {
        r?.disconnect();
        e.removeEventListener("pointerdown", h, true);
        e.removeEventListener("pointerup", h, true);
        window.removeEventListener("blur", h);
        window.removeEventListener("resize", h);
        i();
      };
    };
  let _ = g,
    v = () => {
      return isEligible;
    };
  let y = peers.V9.useEffectEvent(v),
    b = () => {
      return h();
    };
  let x = peers.V9.useEffectEvent(b),
    S = (e) => {
      bb56: switch (e.kind) {
        case "danger":
          o.get(peers.rh).danger(e.message);
          break bb56;
        case "warning":
          o.get(peers.rh).warning(e.message);
      }
    };
  let C = S,
    w = () => {
      if (!enabled || f == null || p == null) return;
      let e = peers.gp.realtimeVoicePresentation;
      if (e == null) return;
      let t = {
          conversationId: f,
          hostId: p,
        },
        r = false,
        i = null;
      return (
        e.registerSurface(t, surface, y(), C).then((value) => {
          if (r) {
            value.unregister();
            return;
          }
          c.current = value;
          value.updateEligibility(y());
          x();
          i = () => {
            value.unregister();
          };
        }),
        () => {
          r = true;
          c.current = null;
          i?.();
          i = null;
        }
      );
    };
  let T;
  T = [f, enabled, p, C, surface];
  peers.V9.useEffect(w, T);
  let E, D;
  E = () => {
    c.current?.updateEligibility(isEligible);
  };
  D = [isEligible];
  peers.V9.useEffect(E, D);
  let O = () => {
    h();
  };
  let k;
  return ((k = [h, s]), peers.V9.useEffect(O, k), enabled ? _ : undefined);
}

// Semantic export aliases (split/export lane)
export { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate };

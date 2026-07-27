// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Q7e`) / export `Vlt`.

export type TooltipDelayProviderPeers = {
  C9e: (...args: unknown[]) => unknown;
  Qm: (...args: unknown[]) => unknown;
  S9e: (...args: unknown[]) => unknown;
  W7e: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Zm: (...args: unknown[]) => unknown;
  g9e: (...args: unknown[]) => unknown;
  h9e: (...args: unknown[]) => unknown;
  p9e: (...args: unknown[]) => unknown;
};
let peers: TooltipDelayProviderPeers | null = null;

/** Wire TooltipDelayProvider peers once companions land. */
export function setTooltipDelayProviderPeers(
  next: TooltipDelayProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Vlt` / internal `Q7e`.
 */
export function TooltipDelayProvider(props: unknown) {
  const Provider = peers.C9e.Provider;
  const Provider2 = peers.S9e.Provider;
  if (peers == null) {
    throw new Error("TooltipDelayProvider peers are not configured");
  }
  let { delayDuration, skipDelayDuration, children } = props,
    a = delayDuration === undefined ? peers.h9e : delayDuration,
    o = skipDelayDuration === undefined ? peers.g9e : skipDelayDuration,
    s = peers.Zm.useRef(null),
    c = peers.Zm.useRef(null),
    l = peers.Zm.useRef(null),
    u = peers.Zm.useRef(true),
    d = new Map();
  let f = peers.Zm.useRef(d),
    p = new Map();
  let m = peers.Zm.useRef(p),
    h = peers.Zm.useRef(false),
    g = peers.Zm.useRef(null),
    _ = () => {
      return o;
    };
  let v = peers.Wm(_),
    y = () => {
      g.current == null ||
        typeof window > "u" ||
        (window.clearTimeout(g.current), (g.current = null));
    };
  let b = y,
    x = (e) => {
      if ((f.current.delete(e), s.current !== e)) return;
      s.current = null;
      l.current = null;
      b();
      let t = v();
      if (!u.current || t === 0 || typeof window > "u") {
        c.current = null;
        h.current = false;
        return;
      }
      g.current = window.setTimeout(() => {
        g.current = null;
        c.current = null;
        h.current = false;
      }, t);
    };
  let S = x,
    C = (e, t, n) => {
      return (
        f.current.set(e, {
          close: n,
          variant: t,
        }),
        () => {
          f.current.delete(e);
        }
      );
    };
  let w = C,
    T = (e, t) => {
      return (
        m.current.set(e, t),
        () => {
          m.current.delete(e);
        }
      );
    };
  let E = T,
    D = (e, t, n, r) => {
      for (let [t, r] of f.current)
        t === e || (r.variant !== "tooltip" && n === "tooltip") || r.close();
      s.current = e;
      l.current !== e && (l.current = null);
      f.current.set(e, {
        close: r,
        variant: n,
      });
      b();
      c.current = t;
      h.current = true;
    };
  let O = D,
    k = (e, t) => {
      return h.current && c.current === e ? 0 : t;
    };
  let A = k,
    j = () => {
      let e = Array.from(m.current.values());
      f.current.clear();
      s.current = null;
      c.current = null;
      l.current = null;
      h.current = false;
      b();
      for (let t of e) t();
    };
  let M = j,
    N = (e) => {
      l.current === e && (l.current = null);
    };
  let P = N,
    F = (e) => {
      return l.current != null && l.current !== e;
    };
  let I = F,
    L = (e) => {
      l.current = e;
    };
  let R = L,
    z = {
      activateTooltip: O,
      clearHoverHandoffLock: P,
      deactivateTooltip: S,
      getOpenDelay: A,
      isHoverOpenBlocked: I,
      registerOpenTooltip: w,
      registerTooltipDismissHandler: E,
      setHoverHandoffLockTooltipId: R,
    };
  let B = z,
    V,
    H;
  V = () => {
    if (typeof window > "u") return;
    u.current = true;
    let e = f.current,
      t = m.current;
    return (
      window.addEventListener(peers.W7e, M),
      window.addEventListener("blur", M),
      () => {
        u.current = false;
        window.removeEventListener(peers.W7e, M);
        window.removeEventListener("blur", M);
        b();
        e.clear();
        t.clear();
      }
    );
  };
  H = [b, M];
  peers.Zm.useEffect(V, H);
  let U = <Provider value={B}>{children}</Provider>;
  return <Provider2 value={a}>{U}</Provider2>;
}

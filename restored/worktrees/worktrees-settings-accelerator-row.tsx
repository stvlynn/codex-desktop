// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qj`) / export `uZ`.

export type BindWorktreesSettingsAcceleratorRowPeers = {
  Jj: (...args: unknown[]) => unknown;
  QTr: (...args: unknown[]) => unknown;
  ZTr: (...args: unknown[]) => unknown;
  _Hr: (...args: unknown[]) => unknown;
  clearTimeout: (...args: unknown[]) => unknown;
  eEr: (...args: unknown[]) => unknown;
  fHr: (...args: unknown[]) => unknown;
  gHr: (...args: unknown[]) => unknown;
  mHr: (...args: unknown[]) => unknown;
  pHr: (...args: unknown[]) => unknown;
  setTimeout: (...args: unknown[]) => unknown;
  uHr: (...args: unknown[]) => unknown;
  vHr: (...args: unknown[]) => unknown;
  yHr: (...args: unknown[]) => unknown;
};
let peers: BindWorktreesSettingsAcceleratorRowPeers | null = null;

/** Wire bindWorktreesSettingsAcceleratorRow peers once companions land. */
export function setBindWorktreesSettingsAcceleratorRowPeers(
  next: BindWorktreesSettingsAcceleratorRowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uZ` / internal `qj`.
 */
export function bindWorktreesSettingsAcceleratorRow(e: unknown) {
  if (peers == null) {
    throw new Error(
      "bindWorktreesSettingsAcceleratorRow peers are not configured",
    );
  }
  let {
      accelerator,
      allowRepeat = false,
      enabled = true,
      onKeyDown,
      onKeyUp,
      capture = true,
      ignoreWithin,
      keyboardEventTarget,
    } = e,
    p;
  {
    let e = peers.eEr();
    p = peers.ZTr(accelerator).map((item) => {
      return peers.uHr(item, e);
    });
  }
  let m = p,
    h = m.length > 1,
    g = peers.Jj.useRef(false),
    _ = peers.Jj.useRef(null),
    v = peers.Jj.useRef(0),
    y = peers.Jj.useRef(null),
    b = onKeyUp != null,
    x = () => {
      v.current = 0;
      y.current != null && (peers.clearTimeout(y.current), (y.current = null));
    };
  let S = x,
    C = () => {
      g.current = false;
      _.current = null;
      S();
    };
  let w = C,
    T = () => {
      y.current != null && peers.clearTimeout(y.current);
      y.current = peers.setTimeout(S, peers.QTr);
    };
  let E = T,
    D = (event) => {
      if (
        !enabled ||
        (!allowRepeat && event.repeat) ||
        peers.fHr(event, peers.vHr) ||
        (ignoreWithin && peers.fHr(event, ignoreWithin))
      )
        return;
      let t = m[v.current];
      if (t != null && !(peers.fHr(event, peers.yHr) && (h || !peers.gHr(t)))) {
        if (!peers.mHr(event, t)) {
          if (!h) return;
          S();
          let t = m[0];
          if (t == null || !peers.mHr(event, t)) return;
        }
        if (!h) {
          g.current = true;
          _.current = t;
          onKeyDown(event);
          return;
        }
        if ((event.preventDefault(), (v.current += 1), v.current < m.length)) {
          E();
          return;
        }
        g.current = true;
        _.current = m[m.length - 1] ?? null;
        S();
        onKeyDown(event);
      }
    };
  let O = peers.Jj.useEffectEvent(D),
    k = (e) => {
      if (!g.current) return;
      let t = _.current;
      t != null &&
        peers.pHr(e, t) &&
        ((g.current = false), (_.current = null), onKeyUp?.(e));
    };
  let A = peers.Jj.useEffectEvent(k),
    j = () => {
      if (!enabled) {
        w();
        return;
      }
      let e = keyboardEventTarget ?? (typeof window > "u" ? null : window);
      if (e == null) {
        w();
        return;
      }
      return (
        e.addEventListener("keydown", O, {
          capture,
        }),
        b &&
          e.addEventListener("keyup", A, {
            capture,
          }),
        () => {
          e.removeEventListener("keydown", O, {
            capture,
          });
          b &&
            e.removeEventListener("keyup", A, {
              capture,
            });
          w();
        }
      );
    };
  let M;
  M = [accelerator, capture, enabled, b, keyboardEventTarget];
  peers.Jj.useEffect(j, M);
}

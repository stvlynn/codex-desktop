// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SVa`) / export `RM`.

export type EnsureWhamTaskClusterInitPeers = {
  CVa: (...args: unknown[]) => unknown;
  GH: (...args: unknown[]) => unknown;
  Node: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  eEr: (...args: unknown[]) => unknown;
  scrollIntoView: (...args: unknown[]) => unknown;
  wVa: (...args: unknown[]) => unknown;
  xVa: (...args: unknown[]) => unknown;
};
let peers: EnsureWhamTaskClusterInitPeers | null = null;

/** Wire ensureWhamTaskClusterInit peers once companions land. */
export function setEnsureWhamTaskClusterInitPeers(
  next: EnsureWhamTaskClusterInitPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RM` / internal `SVa`.
 */
export function ensureWhamTaskClusterInit(e: unknown) {
  if (peers == null) {
    throw new Error("ensureWhamTaskClusterInit peers are not configured");
  }
  let {
      items,
      isActive,
      getItemKey,
      onSelect,
      onHighlight,
      onEscape,
      autoHighlightFirst = true,
      captureWindowKeydown = false,
      keyboardEventScope,
      keyboardEventTarget,
      preserveHighlightOnItemsChange = false,
      shouldHandleKeyDown,
    } = e,
    _ = peers.eEr();
  let v = _,
    y = peers.GH.useRef(null),
    b = peers.GH.useRef(null),
    x = items == null ? 0 : items.length,
    [S, C] = peers.GH.useState(autoHighlightFirst && x > 0 ? 0 : -1),
    w = isActive && S >= 0 && S < x ? (items?.[S] ?? null) : null,
    T = w == null ? null : (getItemKey?.(w) ?? w);
  let E = T,
    D = (e) => {
      onHighlight?.(items?.[e] ?? null, e);
    };
  let O = peers.GH.useEffectEvent(D),
    k,
    A;
  k = () => {
    let e = b.current,
      t =
        e != null &&
        (items == null ||
          e.length !== x ||
          e.some((item, index) => {
            return item !== items[index];
          }));
    if (((b.current = items), !isActive || x === 0)) {
      S !== -1 && C(-1);
      return;
    }
    if (S >= 0 && S < x && (preserveHighlightOnItemsChange || !t)) return;
    let i = autoHighlightFirst ? 0 : -1;
    S !== i && C(i);
  };
  A = [
    autoHighlightFirst,
    S,
    isActive,
    items,
    x,
    preserveHighlightOnItemsChange,
  ];
  peers.GH.useEffect(k, A);
  let j = () => {
    if (E == null) {
      O(-1);
      return;
    }
    O(S);
  };
  let M;
  M = [S, E];
  peers.GH.useEffect(j, M);
  let N, P;
  N = () => {
    if (!isActive || S < 0 || S >= x) return;
    let e = y.current;
    e &&
      e
        .querySelectorAll('[data-list-navigation-item="true"]')
        .item(S)
        ?.scrollIntoView({
          block: "nearest",
        });
  };
  P = [S, isActive, x];
  peers.GH.useEffect(N, P);
  let F = (e) => {
    let t = items != null && e >= 0 && e < x ? items[e] : undefined;
    t && (C(e), onSelect(t, e));
  };
  let I = peers.Wm(F),
    L = (e) => {
      C((t) => {
        return x === 0
          ? -1
          : t < 0
            ? e >= 0
              ? 0
              : x - 1
            : peers.xVa(t + e, x);
      });
    };
  let R = L,
    z = peers.CVa,
    B = (event) => {
      if (!isActive || shouldHandleKeyDown?.(event) === false) return false;
      let { key } = event;
      if (x === 0)
        return key === "Escape" && onEscape
          ? (onEscape(), z(event), true)
          : false;
      if (key === "ArrowDown" || (v && event.ctrlKey && key === "n"))
        return (R(1), z(event), true);
      if (key === "ArrowUp" || (v && event.ctrlKey && key === "p"))
        return (R(-1), z(event), true);
      if (key === "Enter") {
        let t = S >= 0 ? S : autoHighlightFirst ? 0 : -1;
        return t >= 0 && t < x ? (I(t), z(event), true) : false;
      }
      return key === "Escape" && onEscape
        ? (onEscape(), z(event), true)
        : false;
    };
  let V = B,
    H,
    U;
  H = () => {
    if (!captureWindowKeydown || !isActive) return;
    let e = (event) => {
        (keyboardEventScope != null &&
          (!(event.target instanceof peers.Node) ||
            !keyboardEventScope.contains(event.target))) ||
          V(event);
      },
      t = keyboardEventTarget ?? window;
    return (
      t.addEventListener("keydown", e, true),
      () => {
        t.removeEventListener("keydown", e, true);
      }
    );
  };
  U = [
    captureWindowKeydown,
    V,
    isActive,
    keyboardEventScope,
    keyboardEventTarget,
  ];
  peers.GH.useEffect(H, U);
  let W = (e) => {
    let t = e === undefined ? {} : e;
    return {
      onKeyDown: (e) => {
        V(e) || t.onKeyDown?.(e);
      },
    };
  };
  let G = W,
    K = (e, t) => {
      let n = t === undefined ? {} : t;
      return {
        onClick: (t) => {
          I(e);
          n.onClick?.(t);
        },
        onMouseMove: (t) => {
          isActive && e >= 0 && e < x && C(e);
          n.onMouseMove?.(t);
        },
        "data-list-navigation-item": "true",
      };
    };
  let q = K;
  return {
    highlightedIndex: S,
    setHighlightedIndex: C,
    listRef: y,
    handleKeyDown: V,
    getInputProps: G,
    getItemProps: q,
  };
}

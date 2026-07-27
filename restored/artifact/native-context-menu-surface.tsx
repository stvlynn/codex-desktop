// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eh`) / export `Rlt`.

export type BindNativeContextMenuSurfacePeers = {
  $: (...args: unknown[]) => unknown;
  A9e: (...args: unknown[]) => unknown;
  D9e: (...args: unknown[]) => unknown;
  E9e: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Lm: (...args: unknown[]) => unknown;
  O9e: (...args: unknown[]) => unknown;
  PointerEvent: (...args: unknown[]) => unknown;
  T9e: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _7e: (...args: unknown[]) => unknown;
  d7e: (...args: unknown[]) => unknown;
  f7e: (...args: unknown[]) => unknown;
  g7e: (...args: unknown[]) => unknown;
  h7e: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  j9e: (...args: unknown[]) => unknown;
  k9e: (...args: unknown[]) => unknown;
  m7e: (...args: unknown[]) => unknown;
  onSelect: (...args: unknown[]) => unknown;
  p7e: (...args: unknown[]) => unknown;
  showContextMenu: (...args: unknown[]) => unknown;
  th: (...args: unknown[]) => unknown;
  u7e: (...args: unknown[]) => unknown;
  v7e: (...args: unknown[]) => unknown;
  w9e: (...args: unknown[]) => unknown;
  y7e: (...args: unknown[]) => unknown;
};
let peers: BindNativeContextMenuSurfacePeers | null = null;

/** Wire bindNativeContextMenuSurface peers once companions land. */
export function setBindNativeContextMenuSurfacePeers(
  next: BindNativeContextMenuSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rlt` / internal `eh`.
 */
export function bindNativeContextMenuSurface(props: unknown) {
  const D7e = peers.d7e;
  const Z = z;
  if (peers == null) {
    throw new Error("bindNativeContextMenuSurface peers are not configured");
  }
  let {
      items = [],
      getItems,
      children,
      disableNative,
      awaitBeforeOpen = true,
      onBeforeOpen,
    } = props,
    l = peers.Ju(),
    u = peers.Lm(),
    d = !disableNative && window.electronBridge?.showContextMenu != null;
  let p = peers.w9e(items, l.formatMessage);
  let [m, h] = peers.j9e.useState(p),
    g = (e) => {
      let t = peers.w9e(e, l.formatMessage);
      return (h(t), t);
    };
  let _ = g,
    v = () => {
      let e = getItems ? getItems() : (items ?? []);
      return peers.D9e(e) ? (h([]), e.then(_), []) : _(e);
    };
  let y = v,
    b = () => {
      if (!awaitBeforeOpen) {
        let e = y(),
          t = onBeforeOpen?.();
        return (t != null && Promise.resolve(t).then(y), e);
      }
      let e = onBeforeOpen?.();
      return (e != null && Promise.resolve(e).then(y), y());
    };
  let x = b,
    S = async () => {
      return (
        await onBeforeOpen?.(),
        _(await (getItems ? getItems() : (items ?? [])))
      );
    };
  let C = S,
    w = () => {
      getItems || h(peers.w9e(items ?? [], l.formatMessage));
    };
  let T;
  T = [getItems, l, items];
  peers.j9e.useEffect(w, T);
  let E = (e, t) => {
    peers.E9e(t === undefined ? m : t, e)?.onSelect?.();
  };
  let D = E,
    O = peers.O9e,
    k = async (event) => {
      if (!d) return;
      event.preventDefault();
      document.dispatchEvent(new peers.PointerEvent("pointercancel"));
      let t = awaitBeforeOpen ? await C() : x();
      if (t.length === 0) return;
      let n = (await window.electronBridge?.showContextMenu?.(peers.T9e(t)))
        ?.id;
      n && D(n, t);
    };
  let A = peers.Wm(k),
    j = children,
    M = j.props.onContextMenu,
    N = (event) => {
      if ((M?.(event), d)) {
        A(event);
        return;
      }
      event.stopPropagation();
    };
  let P = peers.Wm(N);
  if (d) {
    let e;
    {
      let n;
      n = {
        onContextMenu: P,
      };
      e = peers.j9e.cloneElement(j, n);
    }
    return e;
  }
  let F;
  {
    let e;
    e = {
      onContextMenu: P,
    };
    F = peers.j9e.cloneElement(j, e);
  }
  let I = F,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G;
  {
    let e = (t) => {
      return t.map((item) => {
        return item.type === "separator" ? (
          <peers.g7e
            key={item.id}
            className="mx-1 my-1 border-t border-token-border/60"
          />
        ) : item.type === "checkbox" ? (
          <peers.Xm
            key={item.id}
            tooltipContent={
              item.tooltipMessage ? (
                <peers.Z
                  {...item.tooltipMessage}
                  values={item.tooltipMessageValues}
                />
              ) : null
            }
          >
            <peers.h7e
              checked={item.checked ?? false}
              className={peers.$(
                "text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background",
                item.enabled === false && "cursor-default opacity-50",
              )}
              disabled={item.enabled === false}
              onCheckedChange={() => {
                item.onSelect?.();
              }}
            >
              <peers.k9e
                checked={item.checked === true}
                label={O(item)}
                showCheckbox={true}
              />
            </peers.h7e>
          </peers.Xm>
        ) : item.submenu ? (
          <peers._7e key={item.id}>
            <peers.v7e
              className="flex cursor-interaction items-center justify-between gap-1.5 rounded-lg p-1.5 text-sm text-token-foreground outline-hidden hover:bg-token-list-hover-background focus:bg-token-list-hover-background"
              disabled={item.enabled === false}
            >
              <peers.k9e icon={item.icon} label={O(item)} showChevron={true} />
            </peers.v7e>
            <peers.f7e>
              <peers.y7e
                className="z-50 m-px flex min-w-[200px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none"
                collisionPadding={6}
                style={{
                  zoom: u === 1 ? undefined : u,
                }}
              >
                {e(item.submenu)}
              </peers.y7e>
            </peers.f7e>
          </peers._7e>
        ) : (
          <peers.Xm
            key={item.id}
            tooltipContent={
              item.tooltipMessage ? (
                <peers.Z
                  {...item.tooltipMessage}
                  values={item.tooltipMessageValues}
                />
              ) : null
            }
          >
            <peers.m7e
              className={peers.$(
                "text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background",
                item.enabled === false && "cursor-default opacity-50",
              )}
              onSelect={(event) => {
                if (item.enabled === false) {
                  event.preventDefault();
                  return;
                }
                item.onSelect?.();
              }}
              aria-disabled={item.enabled === false}
            >
              <peers.k9e icon={item.icon} label={O(item)} />
            </peers.m7e>
          </peers.Xm>
        );
      });
    };
    z = peers.u7e;
    W = (e) => {
      e && x();
    };
    G = <D7e asChild={true}>{I}</D7e>;
    R = peers.f7e;
    L = peers.p7e;
    B =
      "z-50 m-px flex min-w-[180px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none";
    V = 6;
    let n = u === 1 ? undefined : u;
    H = {
      zoom: n,
    };
    U = e(m);
  }
  let K = (
    <L className={B} collisionPadding={V} style={H}>
      {U}
    </L>
  );
  let q = <R>{K}</R>;
  return (
    <Z onOpenChange={W}>
      {G}
      {q}
    </Z>
  );
}

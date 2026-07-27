// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `No`) / export `N_t`.

export type CollectionItemSlotPeers = {
  $ee: (...args: unknown[]) => unknown;
  Li: (...args: unknown[]) => unknown;
  Qee: (...args: unknown[]) => unknown;
  Ro: (...args: unknown[]) => unknown;
  ate: (...args: unknown[]) => unknown;
  cte: (...args: unknown[]) => unknown;
  ete: (...args: unknown[]) => unknown;
  fa: (...args: unknown[]) => unknown;
  ite: (...args: unknown[]) => unknown;
  node: (...args: unknown[]) => unknown;
  ote: (...args: unknown[]) => unknown;
  queryClient: (...args: unknown[]) => unknown;
  rte: (...args: unknown[]) => unknown;
  ste: (...args: unknown[]) => unknown;
  tte: (...args: unknown[]) => unknown;
  zo: (...args: unknown[]) => unknown;
};
let peers: CollectionItemSlotPeers | null = null;

/** Wire CollectionItemSlot peers once companions land. */
export function setCollectionItemSlotPeers(
  next: CollectionItemSlotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `N_t` / internal `No`.
 */
export function CollectionItemSlot({
  children,
  scope,
  value,
}: Record<string, unknown>) {
  const Provider = peers.zo.Provider;
  if (peers == null) {
    throw new Error("CollectionItemSlot peers are not configured");
  }
  let r = peers.Ro.useContext(peers.zo),
    i = peers.Ro.useContext(peers.ste),
    a = scope.parent == null ? undefined : r.get(scope.parent.id),
    o = value ?? peers.cte,
    s = scope.getKey == null ? JSON.stringify(o) : scope.getKey(o),
    c = peers.ite(),
    l = peers.Ro.useRef(null);
  if (scope.parent != null && a == null) throw Error("Missing parent scope");
  let u =
      scope.retain == null || a == null
        ? undefined
        : peers.ete({
            parentScope: a,
            providedValue: o,
            queryClient: i,
            scope,
            scopeKey: s,
          }),
    d = u != null && !peers.ate.default(u.node.value, o),
    f = a?.queryClient ?? i,
    p =
      u == null || (!d && u.node.queryClient === f)
        ? u?.node
        : {
            ...u.node,
            cachedBindings: d ? new WeakMap() : u.node.cachedBindings,
            queryClient: f,
            value: o,
          };
  if (
    c.current == null ||
    c.current.node.token !== scope ||
    !Object.is(c.current.node.key, s) ||
    c.current.parent !== a ||
    (u != null && c.current.retainedEntry !== u) ||
    (p != null && c.current.node !== p)
  ) {
    let e =
        p ??
        peers.Qee({
          parentScope: a,
          providedValue: o,
          queryClient: i,
          scope,
          scopeKey: s,
        }),
      n = peers.fa(r, scope);
    n.set(scope.id, e);
    c.current = {
      chain: n,
      node: e,
      parent: a,
      retainedEntry: u,
    };
  } else c.current.retainedEntry = u;
  (
    u == null
      ? peers.$ee({
          node: c.current.node,
          parentScope: a,
          providedValue: o,
          queryClient: i,
        })
      : d
  )
    ? (u ?? (c.current.node.cachedBindings = new WeakMap()),
      (l.current = {
        atom: c.current.node.contextVersionAtom,
        store: c.current.node.store,
      }))
    : (l.current = null);
  let m = c.current.retainedEntry,
    h = c.current.node;
  return (
    peers.Ro.useLayoutEffect(() => {
      let e = l.current;
      e != null &&
        (e.store.set(e.atom, (e) => {
          return e + 1;
        }),
        (l.current = null));
    }),
    peers.Ro.useLayoutEffect(() => {
      if (m != null && a != null) {
        let e = a.retainedScopeEntries.get(scope);
        e ?? ((e = new Map()), a.retainedScopeEntries.set(scope, e));
        e.set(s, m);
        m.node !== h &&
          ((m.node.cachedBindings = h.cachedBindings),
          (m.node.queryClient = h.queryClient),
          (m.node.value = h.value));
        return;
      }
      return () => {
        peers.Li(h);
      };
    }, [h, m, a, scope, s]),
    peers.Ro.useLayoutEffect(() => {
      if (!(m == null || a == null))
        return (
          (m.mountedCount += 1),
          (m.lastUsed = peers.rte()),
          peers.tte(a, scope),
          () => {
            --m.mountedCount;
            m.lastUsed = peers.rte();
            peers.tte(a, scope);
          }
        );
    }, [m, a, scope]),
    (<Provider value={c.current.chain}>{children}</Provider>)
  );
}

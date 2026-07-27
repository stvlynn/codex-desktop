// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Je`) / export `Mvt`.

export type BindMvtBindableHelperPeers = {
  E: (...args: unknown[]) => unknown;
  Ee: (...args: unknown[]) => unknown;
  Ke: (...args: unknown[]) => unknown;
  Re: (...args: unknown[]) => unknown;
  T: (...args: unknown[]) => unknown;
  V: (...args: unknown[]) => unknown;
  W: (...args: unknown[]) => unknown;
  _: (...args: unknown[]) => unknown;
  _defaulted: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  ae: (...args: unknown[]) => unknown;
  b: (...args: unknown[]) => unknown;
  cancelQueries: (...args: unknown[]) => unknown;
  clear: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  defaultMutationOptions: (...args: unknown[]) => unknown;
  defaultQueryOptions: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ensureInfiniteQueryData: (...args: unknown[]) => unknown;
  ensureQueryData: (...args: unknown[]) => unknown;
  fetchInfiniteQuery: (...args: unknown[]) => unknown;
  fetchQuery: (...args: unknown[]) => unknown;
  g: (...args: unknown[]) => unknown;
  getDefaultOptions: (...args: unknown[]) => unknown;
  getMutationCache: (...args: unknown[]) => unknown;
  getMutationDefaults: (...args: unknown[]) => unknown;
  getQueriesData: (...args: unknown[]) => unknown;
  getQueryCache: (...args: unknown[]) => unknown;
  getQueryData: (...args: unknown[]) => unknown;
  getQueryDefaults: (...args: unknown[]) => unknown;
  getQueryState: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  invalidateQueries: (...args: unknown[]) => unknown;
  isFetching: (...args: unknown[]) => unknown;
  isMutating: (...args: unknown[]) => unknown;
  mount: (...args: unknown[]) => unknown;
  mutationKey: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  ne: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  prefetchInfiniteQuery: (...args: unknown[]) => unknown;
  prefetchQuery: (...args: unknown[]) => unknown;
  w: (...args: unknown[]) => unknown;
};
let peers: BindMvtBindableHelperPeers | null = null;

/** Wire bindMvtBindableHelper peers once companions land. */
export function setBindMvtBindableHelperPeers(
  next: BindMvtBindableHelperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mvt` / internal `Je`.
 */
export function bindMvtBindableHelper() {
  if (peers == null) {
    throw new Error("bindMvtBindableHelper peers are not configured");
  }
  return class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      this.#e = peers.e.queryCache || new peers.Ke();
      this.#t = peers.e.mutationCache || new peers.Re();
      this.#n = peers.e.defaultOptions || {};
      this.#r = new Map();
      this.#i = new Map();
      this.#a = 0;
    }
    mount() {
      this.#a++;
      this.#a === 1 &&
        ((this.#o = peers.W.subscribe(async (e) => {
          peers.e && (await this.resumePausedMutations(), this.#e.onFocus());
        })),
        (this.#s = peers.ae.subscribe(async (e) => {
          peers.e && (await this.resumePausedMutations(), this.#e.onOnline());
        })));
    }
    unmount() {
      this.#a--;
      this.#a === 0 &&
        (this.#o?.(),
        (this.#o = undefined),
        this.#s?.(),
        (this.#s = undefined));
    }
    isFetching(e) {
      return this.#e.findAll({
        ...peers.e,
        fetchStatus: "fetching",
      }).length;
    }
    isMutating(e) {
      return this.#t.findAll({
        ...peers.e,
        status: "pending",
      }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({
        queryKey: peers.e,
      });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(peers.e),
        n = this.#e.build(this, t),
        r = peers.n.state.data;
      return r === undefined
        ? this.fetchQuery(peers.e)
        : (peers.e.revalidateIfStale &&
            peers.n.isStaleByTime(peers.b(t.staleTime, peers.n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(peers.e).map(({ queryKey, state }) => {
        return [peers.e, state.data];
      });
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({
          queryKey: peers.e,
        }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = peers._(t, peers.i);
      if (peers.a !== undefined)
        return this.#e.build(this, r).setData(peers.a, {
          ...peers.n,
          manual: true,
        });
    }
    setQueriesData(e, t, n) {
      return peers.ne.batch(() => {
        return this.#e.findAll(peers.e).map(({ queryKey }) => {
          return [peers.e, this.setQueryData(peers.e, t, peers.n)];
        });
      });
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({
        queryKey: peers.e,
      });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      peers.ne.batch(() => {
        t.findAll(peers.e).forEach((item) => {
          t.remove(peers.e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return peers.ne.batch(() => {
        return (
          peers.n.findAll(peers.e).forEach((item) => {
            peers.e.reset();
          }),
          this.refetchQueries(
            {
              type: "active",
              ...peers.e,
            },
            t,
          )
        );
      });
    }
    cancelQueries(e, t = {}) {
      let n = {
          revert: true,
          ...t,
        },
        r = peers.ne.batch(() => {
          return this.#e.findAll(peers.e).map((item) => {
            return peers.e.cancel(peers.n);
          });
        });
      return Promise.all(r).then(peers.g).catch(peers.g);
    }
    invalidateQueries(e, t = {}) {
      return peers.ne.batch(() => {
        return (
          this.#e.findAll(peers.e).forEach((item) => {
            peers.e.invalidate();
          }),
          peers.e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                {
                  ...peers.e,
                  type: peers.e?.refetchType ?? peers.e?.type ?? "active",
                },
                t,
              )
        );
      });
    }
    refetchQueries(e, t = {}) {
      let n = {
          ...t,
          cancelRefetch: t.cancelRefetch ?? true,
        },
        r = peers.ne.batch(() => {
          return this.#e
            .findAll(peers.e)
            .filter((item) => {
              return !peers.e.isDisabled() && !peers.e.isStatic();
            })
            .map((item) => {
              let t = peers.e.fetch(undefined, peers.n);
              return (
                peers.n.throwOnError || (t = t.catch(peers.g)),
                peers.e.state.fetchStatus === "paused" ? Promise.resolve() : t
              );
            });
        });
      return Promise.all(r).then(peers.g);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(peers.e);
      t.retry === undefined && (t.retry = false);
      let n = this.#e.build(this, t);
      return peers.n.isStaleByTime(peers.b(t.staleTime, peers.n))
        ? peers.n.fetch(t)
        : Promise.resolve(peers.n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(peers.e).then(peers.g).catch(peers.g);
    }
    fetchInfiniteQuery(e) {
      return (
        (peers.e.behavior = peers.Ee(peers.e.pages)),
        this.fetchQuery(peers.e)
      );
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(peers.e).then(peers.g).catch(peers.g);
    }
    ensureInfiniteQueryData(e) {
      return (
        (peers.e.behavior = peers.Ee(peers.e.pages)),
        this.ensureQueryData(peers.e)
      );
    }
    resumePausedMutations() {
      return peers.ae.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = peers.e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(peers.T(peers.e), {
        queryKey: peers.e,
        defaultOptions: t,
      });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((item) => {
          peers.E(peers.e, item.queryKey) &&
            Object.assign(peers.n, item.defaultOptions);
        }),
        peers.n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(peers.T(peers.e), {
        mutationKey: peers.e,
        defaultOptions: t,
      });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((item) => {
          peers.E(peers.e, item.mutationKey) &&
            Object.assign(peers.n, item.defaultOptions);
        }),
        peers.n
      );
    }
    defaultQueryOptions(e) {
      if (peers.e._defaulted) return peers.e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(peers.e.queryKey),
        ...peers.e,
        _defaulted: true,
      };
      return (
        (t.queryHash ||= peers.w(t.queryKey, t)),
        t.refetchOnReconnect === undefined &&
          (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === undefined && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === peers.V && (t.enabled = false),
        t
      );
    }
    defaultMutationOptions(e) {
      return peers.e?._defaulted
        ? peers.e
        : {
            ...this.#n.mutations,
            ...(peers.e?.mutationKey &&
              this.getMutationDefaults(peers.e.mutationKey)),
            ...peers.e,
            _defaulted: true,
          };
    }
    clear() {
      this.#e.clear();
      this.#t.clear();
    }
  };
}

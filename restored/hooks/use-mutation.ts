// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qt`) / export `_vt`.

export type UseMutationPeers = {
  Be: (...args: unknown[]) => unknown;
  Jt: (...args: unknown[]) => unknown;
  R: (...args: unknown[]) => unknown;
  g: (...args: unknown[]) => unknown;
  ne: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseMutationPeers | null = null;

/** Wire useMutation peers once companions land. */
export function setUseMutationPeers(next: UseMutationPeers): void {
  peers = next;
}

/**
 * Bundle export `_vt` / internal `qt`.
 */
export function useMutation(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useMutation peers are not configured");
  }

  let n = peers.rt(t),
    [r] = peers.Jt.useState(() => new peers.Be(n, e));
  peers.Jt.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  let i = peers.Jt.useSyncExternalStore(
      peers.Jt.useCallback((e) => r.subscribe(peers.ne.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    a = peers.Jt.useCallback(
      (e, t) => {
        r.mutate(e, t).catch(peers.g);
      },
      [r],
    );
  if (i.error && peers.R(r.options.throwOnError, [i.error])) throw i.error;
  return {
    ...i,
    mutate: a,
    mutateAsync: i.mutate,
  };
}

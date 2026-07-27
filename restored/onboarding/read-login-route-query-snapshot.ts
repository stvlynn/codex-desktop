// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `op`) / export `Yut`.

export type ReadLoginRouteQuerySnapshotPeers = {
  cp: (...args: unknown[]) => unknown;
  fetchFromHost: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  throwOnFailure: (...args: unknown[]) => unknown;
  vp: (...args: unknown[]) => unknown;
};

let peers: ReadLoginRouteQuerySnapshotPeers | null = null;

/** Wire readLoginRouteQuerySnapshot peers once companions land. */
export function setReadLoginRouteQuerySnapshotPeers(next: ReadLoginRouteQuerySnapshotPeers): void {
  peers = next;
}

/**
 * Bundle export `Yut` / internal `op`.
 */
async function readLoginRouteQuerySnapshot(e, t, n, r) {
  if (peers == null) {
    throw new Error("readLoginRouteQuerySnapshot peers are not configured");
  }

  let i = e.query.snapshot(peers.cp, t);
  await i.cancel();
  let a = i.getData();
  i.setData({
    value: n
  });
  try {
    let {
      success: e
    } = await (r?.fetchFromHost ?? peers.rp)(`set-global-state`, {
      params: {
        key: t,
        value: n
      }
    });
    if (!e) {
      if (r?.throwOnFailure) throw Error(`Failed to set global setting`);
      i.setData(a);
    }
  } catch (e) {
    throw i.setData(a), e;
  } finally {
    await i.invalidate(), peers.vp(i.queryKey);
  }
}

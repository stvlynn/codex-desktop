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

export type SetGlobalStateOptions = {
  fetchFromHost?: (...args: unknown[]) => Promise<{ success: boolean }>;
  throwOnFailure?: boolean;
};

/**
 * Bundle export `Yut` / internal `op`.
 * Despite the historical filename, this writes a desktop global-state key
 * (`set-global-state`) via the host bridge (used by first-run NUX accept).
 */
export async function readLoginRouteQuerySnapshot(
  scope: { query: { snapshot: (cp: unknown, key: unknown) => SnapshotHandle } },
  key: unknown,
  value: unknown,
  options?: SetGlobalStateOptions,
): Promise<void> {
  if (peers == null) {
    throw new Error("readLoginRouteQuerySnapshot peers are not configured");
  }

  const handle = scope.query.snapshot(peers.cp, key);
  await handle.cancel();
  const previous = handle.getData();
  handle.setData({
    value,
  });
  try {
    const { success } = await (options?.fetchFromHost ?? peers.rp)(
      `set-global-state`,
      {
        params: {
          key,
          value,
        },
      },
    );
    if (!success) {
      if (options?.throwOnFailure) throw Error(`Failed to set global setting`);
      handle.setData(previous);
    }
  } catch (error) {
    handle.setData(previous);
    throw error;
  } finally {
    await handle.invalidate();
    peers.vp(handle.queryKey);
  }
}

type SnapshotHandle = {
  cancel: () => Promise<void>;
  getData: () => unknown;
  setData: (next: unknown) => void;
  invalidate: () => Promise<void>;
  queryKey: unknown;
};

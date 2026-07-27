// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g5n`) / export `K4`.

export type UseBatchWriteMcpServerConfigPeers = {
  Bf: (...args: unknown[]) => unknown;
  M5n: (...args: unknown[]) => unknown;
  _5n: (...args: unknown[]) => unknown;
  b5n: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};

let peers: UseBatchWriteMcpServerConfigPeers | null = null;

/** Wire useBatchWriteMcpServerConfig peers once companions land. */
export function setUseBatchWriteMcpServerConfigPeers(next: UseBatchWriteMcpServerConfigPeers): void {
  peers = next;
}

/**
 * Bundle export `K4` / internal `g5n`.
 */
export function useBatchWriteMcpServerConfig(e: unknown) {
  if (peers == null) {
    throw new Error("useBatchWriteMcpServerConfig peers are not configured");
  }

  let t = (0, peers.M5n.c)(8),
    n = e?.hostId ?? `local`,
    r = peers.vE(),
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (e) => {
        let { filePath: t, key: r, value: i } = e;
        return peers.Bf(`batch-write-config-value`, {
          hostId: n,
          edits: [
            {
              keyPath: `mcp_servers.${r}`,
              value: i,
              mergeStrategy: `replace`,
            },
          ],
          filePath: t,
          expectedVersion: null,
        });
      }),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] !== n || t[3] !== r
    ? ((a = async () => {
        await peers.b5n(n, r);
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a))
    : (a = t[4]);
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = {
          mutationFn: i,
          onError: peers._5n,
          onSuccess: a,
        }),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    peers.qt(o)
  );
}

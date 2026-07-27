// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bw`) / export `w5`.

export type CallSitesConnectorAppToolPeers = {
  Hh: (...args: unknown[]) => unknown;
  Y7t: (...args: unknown[]) => unknown;
  Zf: (...args: unknown[]) => unknown;
  kWn: (...args: unknown[]) => unknown;
};

let peers: CallSitesConnectorAppToolPeers | null = null;

/** Wire callSitesConnectorAppTool peers once companions land. */
export function setCallSitesConnectorAppToolPeers(next: CallSitesConnectorAppToolPeers): void {
  peers = next;
}

/**
 * Bundle export `w5` / internal `Bw`.
 */
async function callSitesConnectorAppTool(e, t, n, r) {
  if (peers == null) {
    throw new Error("callSitesConnectorAppTool peers are not configured");
  }

  let { body: i } = await peers.Zf.getInstance().post(
      `/wham/apps`,
      JSON.stringify({
        id: 1,
        jsonrpc: `2.0`,
        method: `tools/call`,
        params: {
          arguments: t,
          name: e,
          ...(r == null
            ? {}
            : {
                _meta: {
                  _codex_apps: {
                    resource_uri: r,
                  },
                },
              }),
        },
      }),
      peers.Hh(),
    ),
    a = peers.kWn.parse(i);
  if (
    `error` in a ||
    a.result.isError === !0 ||
    a.result.structuredContent == null
  ) {
    let t = Error(`Sites tool call failed`);
    throw (
      peers.Y7t(t, {
        fingerprint: [`sites-connector-tool-call-failed`, e],
        tags: {
          connector: `sites`,
          toolName: e,
        },
      }),
      t
    );
  }
  let o = a.result.structuredContent,
    s = n.safeParse(o);
  return s.success ? s.data : o;
}

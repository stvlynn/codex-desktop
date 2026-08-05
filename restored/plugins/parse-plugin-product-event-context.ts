// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `T4i`) / export `Hz`.

export type ParsePluginProductEventContextPeers = {
  Lb: (...args: unknown[]) => unknown;
  M4i: (...args: unknown[]) => unknown;
  Rb: (...args: unknown[]) => unknown;
  S4i: (...args: unknown[]) => unknown;
};

let peers: ParsePluginProductEventContextPeers | null = null;

/** Wire parsePluginProductEventContext peers once companions land. */
export function setParsePluginProductEventContextPeers(
  next: ParsePluginProductEventContextPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hz` / internal `T4i`.
 */
export function parsePluginProductEventContext(e: unknown) {
  if (peers == null) {
    throw new Error("parsePluginProductEventContext peers are not configured");
  }

  let t = peers.M4i.safeParse(e);
  return (
    (t.success ? t.data.pluginProductEventContext : void 0) ?? {
      referrer:
        peers.S4i(e) == null
          ? peers.Lb.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED
          : peers.Lb.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK,
      source: peers.Rb.CODEX_PLUGIN_SOURCE_OTHER,
    }
  );
}

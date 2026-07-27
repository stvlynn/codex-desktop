// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `R4i`/`H4i` — export `jz`.

const PLUGIN_DETAIL_QUERY_ROOT = ["plugins", "detail"] as const;

/** Query key for a marketplace plugin detail fetch. */
export function pluginDetailQueryKey(args: {
  hostId: string;
  marketplacePath?: string | null;
  pluginName?: string | null;
  remoteMarketplaceName?: string | null;
}): unknown[] {
  return [
    ...PLUGIN_DETAIL_QUERY_ROOT,
    args.hostId,
    args.marketplacePath ?? "",
    args.remoteMarketplaceName ?? "",
    args.pluginName ?? "",
  ];
}

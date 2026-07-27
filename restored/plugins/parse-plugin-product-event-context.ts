// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `T4i`) / export `Hz`.

export type PluginProductEventContext = {
  referrer: unknown;
  source: unknown;
  [key: string]: unknown;
};

export type ParsePluginProductEventContextPeers = {
  safeParse: (value: unknown) => {
    success: boolean;
    data?: { pluginProductEventContext?: PluginProductEventContext };
  };
  deepLinkReferrerFromState: (value: unknown) => unknown | null | undefined;
  referrerUnspecified: unknown;
  referrerDeepLink: unknown;
  sourceOther: unknown;
};

let peers: ParsePluginProductEventContextPeers | null = null;

/** Wire zod schema + referrer enums once companions land. */
export function setParsePluginProductEventContextPeers(
  next: ParsePluginProductEventContextPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hz` / internal `T4i`.
 * Zod-safe plugin analytics context with deep-link referrer fallback.
 */
export function parsePluginProductEventContext(
  value: unknown,
): PluginProductEventContext {
  if (peers == null) {
    throw new Error("ParsePluginProductEventContext peers are not configured");
  }
  const parsed = peers.safeParse(value);
  return (
    (parsed.success ? parsed.data?.pluginProductEventContext : undefined) ?? {
      referrer:
        peers.deepLinkReferrerFromState(value) == null
          ? peers.referrerUnspecified
          : peers.referrerDeepLink,
      source: peers.sourceOther,
    }
  );
}

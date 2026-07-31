// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Host `plugins` feature probe (public name for zK / BN semantics).

import { useHostFeatureGate } from "./use-host-feature-gate";

/**
 * Bundle `BN` semantics under public name `useIsBrowserPluginEnabled` (zK).
 * zK itself was an ESM init thunk; the live probe is the host `plugins` feature.
 */
export function useIsBrowserPluginEnabled(args: {
  hostId: string;
}): boolean {
  const gate = useHostFeatureGate({
    featureName: "plugins",
    hostId: args.hostId,
    defaultEnabled: true,
  });
  return gate.enabled;
}

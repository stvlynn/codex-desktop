// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `q3r` / export `KK` — host feature-list gate probe.

import { requireBrowserUseGatePeers } from "./peers";
import type {
  HostFeatureGateArgs,
  HostFeatureGateResult,
} from "./types";

export function useHostFeatureGate(
  args: HostFeatureGateArgs,
): HostFeatureGateResult {
  const peers = requireBrowserUseGatePeers();
  const defaultEnabled = args.defaultEnabled ?? true;
  const { data, isLoading } = peers.useHostFeaturesQuery(args.hostId);
  const features = data ?? [];
  const match = features.find((entry) => entry.name === args.featureName);
  return {
    enabled: match?.enabled ?? defaultEnabled,
    isLoading,
  };
}

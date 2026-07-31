// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `c6r`/`i6r`/`WFo` — browser_use, external, and in-app browser gates.

import { requireBrowserUseGatePeers } from "./peers";
import type {
  BrowserUseGateResult,
  InAppBrowserFeatureSlice,
  UseBrowserUseGateArgs,
  UseExternalBrowserUseGateArgs,
  UseInAppBrowserFeatureArgs,
} from "./types";
import { useHostFeatureGate } from "./use-host-feature-gate";

/** Bundle `c6r` / export `BK`. */
export function useBrowserUseGate(
  args: UseBrowserUseGateArgs,
): BrowserUseGateResult {
  const peers = requireBrowserUseGatePeers();
  const isBrowserSidebarEnabled = peers.readAtom(
    peers.browserSidebarEnabledAtom,
  );
  const isBrowserAgentGateEnabled = peers.isGateEnabled("410262010");
  const hostGate = useHostFeatureGate({
    featureName: "browser_use",
    hostId: args.hostId,
  });
  const isBrowserUseEnabled = hostGate.enabled && !hostGate.isLoading;
  const runCodexInWsl = peers.readRunCodexInWsl() === true;
  const reason = peers.resolveBrowserUseAvailability({
    isBrowserAgentGateEnabled,
    isBrowserSidebarEnabled,
    isBrowserUseEnabled,
    isLoading: hostGate.isLoading,
    runCodexInWsl,
    windowType: "electron",
  });
  const available = reason === "available";
  return {
    allowed: available,
    available,
    isLoading: reason === "loading",
    reason,
  };
}

/** Bundle `i6r` / export `HK`. */
export function useExternalBrowserUseGate(
  args: UseExternalBrowserUseGateArgs,
): BrowserUseGateResult {
  const peers = requireBrowserUseGatePeers();
  const windowType = args.windowType ?? "electron";
  const isExternalBrowserUseGateEnabled = peers.isGateEnabled("410065390");
  const hostGate = useHostFeatureGate({
    featureName: "browser_use_external",
    hostId: args.hostId,
  });
  const reason = peers.resolveExternalBrowserUseAvailability({
    isExternalBrowserUseFeatureEnabled: hostGate.enabled,
    isExternalBrowserUseFeatureLoading: hostGate.isLoading,
    isExternalBrowserUseGateEnabled,
    windowType,
  });
  const available = reason === "available";
  return {
    allowed: available,
    available,
    isLoading: reason === "loading",
    reason,
  };
}

/** Bundle `WFo` / export `DO`. */
export function useInAppBrowserFeature(
  args: UseInAppBrowserFeatureArgs,
): InAppBrowserFeatureSlice {
  const peers = requireBrowserUseGatePeers();
  const inAppBrowser = useHostFeatureGate({
    featureName: "in_app_browser",
    hostId: args.hostId,
  });
  const sub = peers.readInAppBrowserSubfeatures();
  return {
    contactInfo: peers.combineInAppBrowserSubfeature({
      featureEnabled: sub.contactInfo.enabled,
      isFeatureLoading: sub.contactInfo.isLoading,
      inAppBrowser,
    }),
    downloads: peers.combineInAppBrowserSubfeature({
      featureEnabled: sub.downloads.enabled,
      isFeatureLoading: sub.downloads.isLoading,
      inAppBrowser,
    }),
    extensions: peers.combineInAppBrowserSubfeature({
      featureEnabled: sub.extensions.enabled,
      isFeatureLoading: sub.extensions.isLoading,
      inAppBrowser,
    }),
    history: peers.combineInAppBrowserSubfeature({
      featureEnabled: sub.history.enabled,
      isFeatureLoading: sub.history.isLoading,
      inAppBrowser,
    }),
    passwordManager: peers.combineInAppBrowserSubfeature({
      featureEnabled: sub.passwordManager.enabled,
      isFeatureLoading: sub.passwordManager.isLoading,
      inAppBrowser,
    }),
    siteSettings: peers.combineInAppBrowserSubfeature({
      featureEnabled: sub.siteSettings.enabled,
      isFeatureLoading: sub.siteSettings.isLoading,
      inAppBrowser,
    }),
  };
}

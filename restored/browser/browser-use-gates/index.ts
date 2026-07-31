// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Browser-use / host feature gates barrel (BK, HK, DO, KK, XK, VK, GK, zK).

export type {
  BrowserUseGatePeers,
  BrowserUseGateReason,
  BrowserUseGateResult,
  HostFeatureGateArgs,
  HostFeatureGateResult,
  InAppBrowserFeatureSlice,
  PluginInstallFlowController,
  UseBrowserUseGateArgs,
  UseExternalBrowserUseGateArgs,
  UseInAppBrowserFeatureArgs,
} from "./types";

export { setBrowserUseGatePeers } from "./peers";
export { useHostFeatureGate } from "./use-host-feature-gate";
export {
  useBrowserUseGate,
  useExternalBrowserUseGate,
  useInAppBrowserFeature,
} from "./use-browser-use-gates";
export { useComputerUseGate } from "./use-computer-use-gate";
export { useIsBrowserPluginEnabled } from "./use-is-browser-plugin-enabled";
export {
  ensureBrowserUseGateInit,
  ensureComputerUseGateInit,
} from "./ensure-inits";

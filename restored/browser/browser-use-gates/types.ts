// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared types for browser-use / host feature gates.

export type BrowserUseGateReason =
  | "available"
  | "loading"
  | "unavailable"
  | string;

export type BrowserUseGateResult = {
  allowed: boolean;
  available: boolean;
  isLoading: boolean;
  reason: BrowserUseGateReason;
};

export type HostFeatureGateArgs = {
  hostId: string;
  featureName: string;
  defaultEnabled?: boolean;
};

export type HostFeatureGateResult = {
  enabled: boolean;
  isLoading: boolean;
};

export type UseBrowserUseGateArgs = {
  hostId: string;
};

export type UseExternalBrowserUseGateArgs = {
  hostId: string;
  windowType?: string;
};

export type UseInAppBrowserFeatureArgs = {
  hostId: string;
};

export type InAppBrowserFeatureSlice = {
  contactInfo: unknown;
  downloads: unknown;
  extensions: unknown;
  history: unknown;
  passwordManager: unknown;
  siteSettings: unknown;
};

export type PluginInstallFlowController = {
  installPlugin: (
    plugin: unknown,
    options?: Record<string, unknown>,
  ) => unknown;
  showPluginInstallDetails: (
    plugin: unknown,
    options?: Record<string, unknown>,
  ) => unknown;
  status: unknown;
  uninstalling: unknown;
};

/** Runtime peers shared by browser-use gate hooks (host query / statsig / atoms). */
export type BrowserUseGatePeers = {
  readAtom: <T>(atom: unknown) => T;
  browserSidebarEnabledAtom: unknown;
  isGateEnabled: (gateId: string) => boolean;
  useHostFeaturesQuery: (hostId: string) => {
    data?: Array<{ name: string; enabled?: boolean }>;
    isLoading: boolean;
  };
  resolveBrowserUseAvailability: (input: {
    isBrowserAgentGateEnabled: boolean;
    isBrowserSidebarEnabled: unknown;
    isBrowserUseEnabled: boolean;
    isLoading: boolean;
    runCodexInWsl: boolean;
    windowType: string;
  }) => BrowserUseGateReason;
  resolveExternalBrowserUseAvailability: (input: {
    isExternalBrowserUseFeatureEnabled: boolean;
    isExternalBrowserUseFeatureLoading: boolean;
    isExternalBrowserUseGateEnabled: boolean;
    windowType: string;
  }) => BrowserUseGateReason;
  readRunCodexInWsl: () => unknown;
  readInAppBrowserSubfeatures: () => {
    contactInfo: { enabled: boolean; isLoading: boolean };
    downloads: { enabled: boolean; isLoading: boolean };
    extensions: { enabled: boolean; isLoading: boolean };
    history: { enabled: boolean; isLoading: boolean };
    passwordManager: { enabled: boolean; isLoading: boolean };
    siteSettings: { enabled: boolean; isLoading: boolean };
  };
  combineInAppBrowserSubfeature: (input: {
    featureEnabled: boolean;
    isFeatureLoading: boolean;
    inAppBrowser: HostFeatureGateResult;
  }) => unknown;
  useAppScopeNode: () => unknown;
  pluginInstallStatusAtom: unknown;
  pluginUninstallingAtom: unknown;
  openPluginInstallFlow: (
    scope: unknown,
    args: {
      hostId: string;
      mode: string;
      onSuccess?: unknown;
      options: Record<string, unknown>;
      plugin: unknown;
    },
  ) => unknown;
};

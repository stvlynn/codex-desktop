// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Z3r`) / export `WK`.

export type UseComputerUseWindowsGatePeers = {
  useHostPlatform: () => { isLoading: boolean; platform: string | undefined };
  readComputerUseGate: (gateId: string) => boolean;
  useComputerUseFeature: (input: {
    featureName: "computer_use";
    hostId: unknown;
  }) => { isLoading: boolean; enabled: boolean };
  useWindowsCompatibility: (input: { enabled: boolean }) => {
    isLoading: boolean;
    enabled: boolean;
  };
  isHostCompatiblePlatform: (platform: string | undefined) => boolean;
  resolveAvailability: (input: {
    areRequiredFeaturesEnabled: boolean;
    enabled: boolean;
    isAnyFeatureLoading: boolean;
    isComputerUseGateEnabled: boolean;
    isHostCompatiblePlatform: boolean;
    isPlatformLoading: boolean;
    windowType: "electron";
  }) => "available" | "loading" | "unavailable" | string;
};

let peers: UseComputerUseWindowsGatePeers | null = null;

/** Wire computer-use windows gate peers once companions land. */
export function setUseComputerUseWindowsGatePeers(
  next: UseComputerUseWindowsGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `WK` / internal `Z3r`.
 * Resolve computer-use availability on Windows Electron hosts.
 */
export function useComputerUseWindowsGate(options: {
  enabled?: boolean;
  hostId: unknown;
}): {
  availability: string;
  isAvailable: boolean;
  isLoading: boolean;
  isSoftLoading: boolean;
} {
  if (peers == null) {
    throw new Error("UseComputerUseWindowsGate peers are not configured");
  }
  const enabled = options.enabled === undefined ? true : options.enabled;
  const { isLoading: isPlatformLoading, platform } = peers.useHostPlatform();
  const isComputerUseGateEnabled = peers.readComputerUseGate("1506311413");
  const feature = peers.useComputerUseFeature({
    featureName: "computer_use",
    hostId: options.hostId,
  });
  const isWindowsReady = platform === "windows" && !isPlatformLoading;
  const windowsGateEnabled = enabled && isWindowsReady;
  const windowsCompat = peers.useWindowsCompatibility({
    enabled: windowsGateEnabled,
  });
  const isAnyFeatureLoading =
    feature.isLoading || (isWindowsReady && windowsCompat.isLoading);
  const areRequiredFeaturesEnabled =
    feature.enabled && (!isWindowsReady || windowsCompat.enabled);
  const availability = peers.resolveAvailability({
    areRequiredFeaturesEnabled,
    enabled,
    isAnyFeatureLoading,
    isComputerUseGateEnabled,
    isHostCompatiblePlatform: peers.isHostCompatiblePlatform(platform),
    isPlatformLoading,
    windowType: "electron",
  });
  return {
    availability,
    isAvailable: availability === "available",
    isLoading: availability === "loading" && isAnyFeatureLoading,
    isSoftLoading: availability === "loading",
  };
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Hna`) / export `eR`.

export type UseComputerUseNativeDesktopAppIconQueryArgs = {
  appPath?: string | null;
};

export type UseComputerUseNativeDesktopAppIconQueryPeers = {
  usePlatform: () => { platform?: string; isLoading: boolean };
  useNativeDesktopAppIconQuery: (args: {
    params: { appPath: string };
    queryConfig: {
      enabled: boolean;
      staleTime: unknown;
      refetchOnWindowFocus: boolean;
    };
  }) => { data?: { iconSmall?: unknown }; isLoading: boolean };
  infiniteStaleTime: unknown;
};

let peers: UseComputerUseNativeDesktopAppIconQueryPeers | null = null;

/** Wire native desktop icon query peers once companions land. */
export function setUseComputerUseNativeDesktopAppIconQueryPeers(
  next: UseComputerUseNativeDesktopAppIconQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eR` / internal `Hna`.
 * Load a small native desktop app icon for computer-use settings.
 */
export function useComputerUseNativeDesktopAppIconQuery(
  args: UseComputerUseNativeDesktopAppIconQueryArgs,
): { iconSmall: unknown; isLoading: boolean } {
  if (peers == null) {
    throw new Error(
      "UseComputerUseNativeDesktopAppIconQuery peers are not configured",
    );
  }
  const { appPath } = args;
  const { platform, isLoading: platformLoading } = peers.usePlatform();
  const enabled =
    (platform === "macOS" || platform === "windows") &&
    appPath != null &&
    appPath !== "";
  const query = peers.useNativeDesktopAppIconQuery({
    params: { appPath: appPath ?? "" },
    queryConfig: {
      enabled,
      staleTime: peers.infiniteStaleTime,
      refetchOnWindowFocus: false,
    },
  });
  return {
    iconSmall: enabled ? (query.data?.iconSmall ?? null) : null,
    isLoading: platformLoading || (enabled && query.isLoading),
  };
}

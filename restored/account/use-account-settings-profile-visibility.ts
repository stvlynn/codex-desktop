// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `FQl`) / export `Yi`.

export type UseAccountSettingsProfileVisibilityPeers = {
  useAccountIdentity: () => {
    accountId: unknown;
    authMethod: unknown;
    isLoading: boolean;
  };
  useProfileSettingsQuery: (args: { accountId: unknown; enabled: boolean }) => {
    data?: { profile_visible?: boolean } | null;
    isLoading: boolean;
  };
  defaultVisible: boolean;
};

let peers: UseAccountSettingsProfileVisibilityPeers | null = null;

/** Wire useAccountSettingsProfileVisibility peers once companions land. */
export function setUseAccountSettingsProfileVisibilityPeers(
  next: UseAccountSettingsProfileVisibilityPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yi` / internal `FQl`.
 * Resolve whether account profile settings are visible.
 */
export function useAccountSettingsProfileVisibility(): {
  isProfileVisible: boolean;
  isLoading: boolean;
} {
  if (peers == null) {
    throw new Error(
      "UseAccountSettingsProfileVisibility peers are not configured",
    );
  }
  const { accountId, isLoading: identityLoading } = peers.useAccountIdentity();
  const enabled = accountId != null && !identityLoading;
  const query = peers.useProfileSettingsQuery({ accountId, enabled });
  const isLoading = identityLoading || (enabled && query.isLoading);
  const isProfileVisible = query.data?.profile_visible ?? peers.defaultVisible;
  return { isProfileVisible, isLoading };
}

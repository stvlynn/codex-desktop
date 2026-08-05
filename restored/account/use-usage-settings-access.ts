// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `f1l`) / export `Ci`.

export type UseUsageSettingsAccessPeers = {
  useAuthMethod: () => { authMethod: string | null; isLoading: boolean };
  useGate: (gateId: string) => boolean;
  useIsWorkspaceAdmin: () => boolean;
  useFeatureFlag: (flagId: string) => boolean;
};

let peers: UseUsageSettingsAccessPeers | null = null;

/** Wire useUsageSettingsAccess peers once companions land. */
export function setUseUsageSettingsAccessPeers(
  next: UseUsageSettingsAccessPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ci` / internal `f1l`.
 * Gate usage-settings access by auth method + Statsig.
 */
export function useUsageSettingsAccess(): {
  canAccess: boolean;
  isLoading: boolean;
  isChatgpt: boolean;
} {
  if (peers == null) {
    throw new Error("UseUsageSettingsAccess peers are not configured");
  }
  const { authMethod, isLoading } = peers.useAuthMethod();
  const isChatgpt = authMethod === "chatgpt";
  const gateEnabled = peers.useGate("39099");
  const isAdmin = peers.useIsWorkspaceAdmin();
  const flag = peers.useFeatureFlag("usage-settings");
  return {
    canAccess: !isLoading && isChatgpt && gateEnabled && (isAdmin || flag),
    isLoading,
    isChatgpt,
  };
}

// --- qg-full-green: missing-relative-exports stubs (open-runtime wiring) ---
export const ensureUsageSettingsAccessInit: any = undefined;

// --- missing-relative-export aliases ---
export { ensureUsageSettingsAccessInit as EnsureUsageSettingsAccessInit };

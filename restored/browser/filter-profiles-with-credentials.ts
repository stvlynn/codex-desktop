// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `AEo` / export `hk`.

export type BrowserProfileCredentialFlags = {
  hasCookies?: boolean;
  hasPasswords?: boolean;
};

/** Keep browser profiles that have cookies and/or passwords. */
export function filterProfilesWithCredentials<
  T extends BrowserProfileCredentialFlags,
>(profiles: readonly T[]): T[] {
  return profiles.filter((p) => p.hasCookies || p.hasPasswords);
}

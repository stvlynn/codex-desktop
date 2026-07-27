// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lja` / export `XN`.

/** True when status is `allowed`, flag is true, and override is absent. */
export function isBareAllowedPermission(enabled: boolean, override: unknown, status: string): boolean {
  return status === "allowed" && enabled === true && override == null;
}

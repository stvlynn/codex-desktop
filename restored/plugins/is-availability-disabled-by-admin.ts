// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_X` / export `Sw`; companion `aes` / `pes`.

const DISABLED_BY_ADMIN = "DISABLED_BY_ADMIN";

/** True when plugin availability is disabled by admin. */
export function isAvailabilityDisabledByAdmin(
  availability: string | null | undefined,
): boolean {
  return availability === DISABLED_BY_ADMIN;
}

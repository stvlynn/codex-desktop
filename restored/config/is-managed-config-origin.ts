// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `T5n` / export `z4`.

/** Whether a config layer origin is MDM / session / legacy managed. */
export function isManagedConfigOrigin(
  origin: { type?: string } | null | undefined,
): boolean {
  if (origin == null) return false;
  return (
    origin.type === "mdm" ||
    origin.type === "sessionFlags" ||
    origin.type === "legacyManagedConfigTomlFromFile" ||
    origin.type === "legacyManagedConfigTomlFromMdm"
  );
}

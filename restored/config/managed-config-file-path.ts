// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `w5n` / export `L4`.

/** Resolve on-disk path for a named config layer, if any. */
export function managedConfigFilePath(
  name:
    | {
        type: "user" | "system" | "legacyManagedConfigTomlFromFile";
        file: string;
      }
    | { type: "project"; dotCodexFolder: string }
    | { type: string; [key: string]: unknown },
): string | null {
  if (
    name.type === "user" ||
    name.type === "system" ||
    name.type === "legacyManagedConfigTomlFromFile"
  ) {
    return (name as { file: string }).file;
  }
  if (name.type === "project") {
    return `${(name as { dotCodexFolder: string }).dotCodexFolder}/config.toml`;
  }
  return null;
}

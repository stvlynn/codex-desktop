// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Plugin display-name helper (bundle `$$r` / export `OJ`).

export type PluginDisplayNameSource = {
  name: string;
  interface?: { displayName?: string | null } | null;
};

/** Lightweight title-case for `owner:skill` style ids (approx. bundle `GT`). */
function formatSkillName(name: string): string {
  return name
    .split(":")
    .map((segment) =>
      segment
        .replace(/[_-]+/g, " ")
        .split(/\s+/)
        .filter((part) => part.length > 0)
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" "),
    )
    .join(": ");
}

/** Prefer `interface.displayName`, else title-cased `name`. */
export function getPluginDisplayName(plugin: PluginDisplayNameSource): string {
  const fromInterface = plugin.interface?.displayName?.trim();
  if (fromInterface) return fromInterface;
  return formatSkillName(plugin.name);
}

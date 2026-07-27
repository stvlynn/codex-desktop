// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `JKr`) / export `TX`.

export type NormalizeAppIconThemeEntriesPeers = {
  parseIcon: (icon: unknown) =>
    | { success: false }
    | {
        success: true;
        data: { src: string; theme?: string | null; [k: string]: unknown };
      };
  pickPreferred: (
    icons: Array<{ src: string; theme?: string | null; [k: string]: unknown }>,
  ) => unknown;
};

let peers: NormalizeAppIconThemeEntriesPeers | null = null;

/** Wire app icon theme normalize peers once companions land. */
export function setNormalizeAppIconThemeEntriesPeers(
  next: NormalizeAppIconThemeEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `TX` / internal `JKr`.
 * Normalize app icon entries into default/light/dark theme picks.
 */
export function normalizeAppIconThemeEntries(
  app: { icons?: unknown[] } | null | undefined,
): { defaultIcon: unknown; lightIcon: unknown; darkIcon: unknown } {
  if (peers == null) {
    throw new Error("NormalizeAppIconThemeEntries peers are not configured");
  }
  const icons = (app?.icons ?? []).flatMap((icon) => {
    const parsed = peers!.parseIcon(icon);
    if (!parsed.success || parsed.data.src.trim().length === 0) return [];
    return [{ ...parsed.data, src: parsed.data.src.trim() }];
  });
  const defaultIcon = peers.pickPreferred(icons.filter((i) => i.theme == null));
  const lightIcon =
    peers.pickPreferred(icons.filter((i) => i.theme === "light")) ??
    defaultIcon;
  const darkIcon =
    peers.pickPreferred(icons.filter((i) => i.theme === "dark")) ?? defaultIcon;
  return { defaultIcon, lightIcon, darkIcon };
}

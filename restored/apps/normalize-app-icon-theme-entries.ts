// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JKr`) / export `TX`.

export type NormalizeAppIconThemeEntriesPeers = {
  TCt: (...args: unknown[]) => unknown;
  YKr: (...args: unknown[]) => unknown;
  icons: (...args: unknown[]) => unknown;
};

let peers: NormalizeAppIconThemeEntriesPeers | null = null;

/** Wire normalizeAppIconThemeEntries peers once companions land. */
export function setNormalizeAppIconThemeEntriesPeers(
  next: NormalizeAppIconThemeEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `TX` / internal `JKr`.
 */
export function normalizeAppIconThemeEntries(e: unknown) {
  if (peers == null) {
    throw new Error("normalizeAppIconThemeEntries peers are not configured");
  }

  let t = (e?.icons ?? []).flatMap((e) => {
      let t = peers.TCt.safeParse(e);
      return !t.success || t.data.src.trim().length === 0
        ? []
        : [
            {
              ...t.data,
              src: t.data.src.trim(),
            },
          ];
    }),
    n = peers.YKr(t.filter((e) => e.theme == null)),
    r = peers.YKr(t.filter((e) => e.theme === `light`)) ?? n,
    i = peers.YKr(t.filter((e) => e.theme === `dark`)) ?? n,
    a = r ?? i,
    o = i ?? r;
  return a == null || o == null
    ? null
    : {
        logoDarkUrl: o,
        logoUrl: a,
      };
}

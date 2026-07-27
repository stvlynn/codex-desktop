// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LUn` / export `O5` — unique appgen apps from tool results (reverse order).
// Appgen detectors left injectable.

type AppgenApp = {
  projectId: string;
  [key: string]: unknown;
};

type IsAppgenItem = (item: unknown) => boolean;
type ParseAppgenApp = (item: unknown) => AppgenApp | null;

let isAppgenItem: IsAppgenItem | null = null;
let parseAppgenApp: ParseAppgenApp | null = null;

/** Wire appgen item predicate (`zUn` in the bundle). */
export function setAppgenItemPredicate(fn: IsAppgenItem): void {
  isAppgenItem = fn;
}

/** Wire appgen app parser (`RUn` in the bundle). */
export function setAppgenAppParser(fn: ParseAppgenApp): void {
  parseAppgenApp = fn;
}

export function collectUniqueAppgenApps(items: unknown[]): AppgenApp[] {
  const out: AppgenApp[] = [];
  const seen = new Set<string>();
  for (let i = items.length - 1; i >= 0; --i) {
    const item = items[i];
    if (item == null || isAppgenItem?.(item) !== true) continue;
    const app = parseAppgenApp?.(item) ?? null;
    if (app == null || seen.has(app.projectId)) continue;
    seen.add(app.projectId);
    out.push(app);
  }
  return out.reverse();
}

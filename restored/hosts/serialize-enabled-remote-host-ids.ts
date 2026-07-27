// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Serialize enabled remote-host id sets for react-query keys (`CGr` / `wGr`).

/**
 * Bundle `CGr` (co-located with remote-host registry hooks; not a chunk export).
 */
export function parseEnabledRemoteHostIdSet(serialized: string): Set<string> {
  return new Set(JSON.parse(serialized) as string[]);
}

/**
 * Bundle `wGr` (co-located).
 * Stable JSON key: sorted host ids.
 */
export function serializeEnabledRemoteHostIdSet(hostIds: ReadonlySet<string>): string {
  return JSON.stringify(Array.from(hostIds).sort((a, b) => a.localeCompare(b)));
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `SM` / export `FX`.

type CodexHomeQuery = { data?: { codexHome?: string | null } | null };

type ReadCodexHomeQuery = (input: unknown) => CodexHomeQuery;

let readCodexHomeQuery: ReadCodexHomeQuery | null = null;

/** Bind query reader used to resolve codex home (bundle `uKr`). */
export function bindReadCodexHomeFromQuery(next: ReadCodexHomeQuery): void {
  readCodexHomeQuery = next;
}

/** Read `codexHome` from the bound query hook result. */
export function readCodexHomeFromQuery(input: unknown): string | null | undefined {
  return readCodexHomeQuery?.(input).data?.codexHome;
}

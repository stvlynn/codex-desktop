// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `l5l` / export `Dr`.

import {
  CODEX_COMPANION_CATALOG,
  type CodexCompanion,
} from "./codex-companion-catalog";

const DEFAULT_COMPANION_ID = "codex";

/** Resolve a companion by id, falling back to Codex then first catalog entry. */
export function resolveCodexCompanionById(
  id: string,
  catalog: readonly CodexCompanion[] = CODEX_COMPANION_CATALOG,
): CodexCompanion {
  return (
    catalog.find((entry) => entry.id === id) ??
    catalog.find((entry) => entry.id === DEFAULT_COMPANION_ID) ??
    catalog[0] ??
    CODEX_COMPANION_CATALOG[0]
  );
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `N_s` / export `Bb` (+ companions `B_s` / local `LZ`).

const CODEX_LIMIT_NAME = "codex";

function normalizeLimitName(value: string | null | undefined): string | null {
  if (value == null) return null;
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[_\s.]+/g, "-");
  return normalized.length > 0 ? normalized : null;
}

function isCodexLimitName(value: string | null | undefined): boolean {
  return value == null ? true : value.trim().toLowerCase() === CODEX_LIMIT_NAME;
}

type LimitRow = { limitName?: string | null };

/** Filter usage rows to the active/selected model limit (or unset). */
export function filterRowsByActiveLimitName<T extends LimitRow>(
  rows: readonly T[],
  options: {
    activeLimitName?: string | null;
    selectedModel?: string | null;
  } = {},
): T[] {
  if (rows.length === 0) return [...rows];
  const selected = normalizeLimitName(options.selectedModel);
  const active = normalizeLimitName(options.activeLimitName);
  const focus =
    selected ?? (active && !isCodexLimitName(active) ? active : null);
  if (focus) {
    return rows.filter(
      (row) =>
        row.limitName == null || normalizeLimitName(row.limitName) === focus,
    );
  }
  return rows.filter((row) => row.limitName == null);
}

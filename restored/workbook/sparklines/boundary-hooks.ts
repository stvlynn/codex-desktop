// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: boundary ensures still owned by workbook-runtime
// (Binding662/_C color/theme side tables used by sparkline groups).

export type SparklinesBoundaryHooks = {
  ensureBinding662: () => void;
};

let hooks: SparklinesBoundaryHooks | null = null;

export function wireSparklinesBoundaryHooks(
  next: SparklinesBoundaryHooks,
): void {
  hooks = next;
}

function requireHooks(): SparklinesBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "sparklines boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureBinding662(): void {
  requireHooks().ensureBinding662();
}

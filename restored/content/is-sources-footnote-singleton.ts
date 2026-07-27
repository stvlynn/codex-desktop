// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sSa` / export `bI`.
// `FV` extracts attributes from grouped webpage refs; empty-length check
// approximated via `items` / `sources` / `attributes` presence.

export function isSourcesFootnoteSingleton(ref: {
  type?: unknown;
  start_idx?: unknown;
  end_idx?: unknown;
  attributes?: unknown;
  sources?: unknown;
  items?: unknown;
}): boolean {
  const attrs = Array.isArray(ref.attributes)
    ? ref.attributes
    : Array.isArray(ref.sources)
      ? ref.sources
      : Array.isArray(ref.items)
        ? ref.items
        : [];
  return (
    ref.type === "sources_footnote" &&
    typeof ref.start_idx === "number" &&
    Number.isInteger(ref.start_idx) &&
    ref.start_idx === ref.end_idx &&
    attrs.length > 0
  );
}

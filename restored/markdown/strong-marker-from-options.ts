// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Opt` — pure helper.

/** Markdown strong marker from serialize options (default `*`). */
export function strongMarkerFromOptions(
  _node: unknown,
  _parent: unknown,
  context: { options: { strong?: string } },
): string {
  return context.options.strong || "*";
}

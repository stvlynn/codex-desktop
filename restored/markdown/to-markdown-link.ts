// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Markdown link builders (`Ovt` / `kvt` / `$g`). Supporting helpers for composer mentions.

/** Escape markdown link label text (`Ovt`). */
export function escapeMarkdownLinkLabel(text: string): string {
  return text
    .replaceAll("\\", "\\\\")
    .replaceAll("](", "]\\(")
    .replaceAll("]", "\\]");
}

/** Escape markdown link destination (`kvt`). */
export function escapeMarkdownLinkHref(href: string): string {
  return href.replaceAll("\\", "\\\\").replaceAll(")", "\\)");
}

/** Build `[label](href)` with escaping (`$g`). */
export function toMarkdownLink(label: string, href: string): string {
  return `[${escapeMarkdownLinkLabel(label)}](${escapeMarkdownLinkHref(href)})`;
}

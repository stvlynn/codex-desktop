// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave BY — small real body for html→DocumentFragment helper.

/**
 * Append HTML text as paragraph line breaks into a DocumentFragment.
 * Bundle export `$nt` / internal `sKt`.
 */
export function appendHtmlLinesToFragment(
  props: { html: string; dir?: string; className?: string },
  _ref?: unknown,
): DocumentFragment {
  const fragment = document.createDocumentFragment();
  if (typeof props.html !== "string") return fragment;
  const paragraph = document.createElement("p");
  if (props.dir) paragraph.dir = props.dir;
  else paragraph.dir = "auto";
  if (props.className) paragraph.className = props.className;
  const lines = props.html.split(/(?:\r\n?|\n)/);
  for (let i = 0; i < lines.length; i++) {
    if (i > 0) paragraph.appendChild(document.createElement("br"));
    paragraph.appendChild(document.createTextNode(lines[i] ?? ""));
  }
  fragment.appendChild(paragraph);
  return fragment;
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sKt`) / export `$nt`.

export type AppendHtmlLinesToFragmentPeers = {
  iqt: (...args: unknown[]) => unknown;
};
let peers: AppendHtmlLinesToFragmentPeers | null = null;

/** Wire appendHtmlLinesToFragment peers once companions land. */
export function setAppendHtmlLinesToFragmentPeers(
  next: AppendHtmlLinesToFragmentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$nt` / internal `sKt`.
 */
export function appendHtmlLinesToFragment(
  { html, dir, className }: Record<string, unknown>,
  r: unknown,
) {
  if (peers == null) {
    throw new Error("appendHtmlLinesToFragment peers are not configured");
  }
  let i = document.createDocumentFragment();
  if (typeof html == "string") {
    let n = document.createElement("p");
    n.dir = dir || "auto";
    let r = html.split(/(?:\r\n?|\n)/);
    for (let e = 0, t = r.length; e < t; ++e) {
      let i = r[e];
      n.append(document.createTextNode(i));
      e < t - 1 && n.append(document.createElement("br"));
    }
    i.append(n);
  } else
    peers.iqt.render({
      xfaHtml: html,
      div: i,
      intent: "richText",
    });
  i.firstChild.classList.add("richText", className);
  r.append(i);
}

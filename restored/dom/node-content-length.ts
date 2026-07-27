// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ZS` — pure helper; also sW.

/** Text-node value length, else childNodes length. */
export function nodeContentLength(node: {
  nodeType: number;
  nodeValue: string | null;
  childNodes: { length: number };
}): number {
  return node.nodeType == 3
    ? (node.nodeValue?.length ?? 0)
    : node.childNodes.length;
}

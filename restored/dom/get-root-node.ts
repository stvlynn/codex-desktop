// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Oc` — pure helper.

/** Resolve `getRootNode()`, document, or ownerDocument. */
export function getRootNode(
  node: Node & { getRootNode?: () => Node },
): Node | Document {
  return typeof node.getRootNode === "function"
    ? node.getRootNode()
    : node.nodeType === 9
      ? (node as Document)
      : node.ownerDocument!;
}

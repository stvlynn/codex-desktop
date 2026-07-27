// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Sa` — pure helper.

type AncestorNode = {
  parent?: AncestorNode | null;
  value: Record<string, unknown>;
};

/** Merge `value` objects from root ancestor down to `node`. */
export function mergeAncestorValues(node: AncestorNode): Record<string, unknown> {
  const parentMerged =
    node.parent == null ? undefined : mergeAncestorValues(node.parent);
  return parentMerged == null ? node.value : { ...parentMerged, ...node.value };
}

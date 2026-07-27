// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Ha`) / export `Q_t`.

type TreeNode = [unknown, unknown, TreeNode[], unknown];

/**
 * Bundle export `Q_t` / internal `Ha`.
 * Attach a node under a parent key in a working tree map (or root list).
 */
export function applyFunctionHelper2(
  node: TreeNode,
  parentKey: TreeNode | null,
  state: { rootNodes: TreeNode[]; workingMap: Map<TreeNode, TreeNode> },
): void {
  if (parentKey === null) {
    state.rootNodes.push(node);
    return;
  }
  let working = state.workingMap.get(parentKey);
  if (working === undefined) {
    working = [parentKey[1], parentKey[2], [], null];
    state.workingMap.set(parentKey, working);
    applyFunctionHelper2(working, parentKey[0] as TreeNode | null, state);
  }
  working[2].push(node);
}

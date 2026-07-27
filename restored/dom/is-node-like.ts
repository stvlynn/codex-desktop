// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jBt` companion for `Hv` / `Ort`.

/** True when value has a DOM `nodeType`. */
export function isNodeLike(value: unknown): value is Node {
  return value != null && typeof value === "object" && "nodeType" in value;
}

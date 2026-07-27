// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xja` / export `IN` — extract ChatGPT project gizmo id (`g-p-…`).

export type GizmoCarrier = {
  gizmo_id?: unknown;
};

export function getProjectGizmoId(value: GizmoCarrier): string | null {
  const id = value.gizmo_id;
  return typeof id === "string" && id.startsWith("g-p-") ? id : null;
}

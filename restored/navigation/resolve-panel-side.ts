// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Prefer bottom vs right panel based on focus area + open state
// (bundle `rRi` / export `AU`).

export type PanelSide = "bottom" | "right";

export type PanelOpenState = {
  bottom?: boolean;
  right?: boolean;
};

/**
 * Bundle `rRi` / export `AU`.
 */
export function resolvePanelSide(
  focusArea: string | null | undefined,
  open: PanelOpenState,
): PanelSide | null {
  if (focusArea === "bottom-panel" && open.bottom) return "bottom";
  if ((focusArea === "right-panel" && open.right) || open.right) {
    return "right";
  }
  if (open.bottom) return "bottom";
  return null;
}

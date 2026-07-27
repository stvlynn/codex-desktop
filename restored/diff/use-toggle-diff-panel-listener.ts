// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave CB — small real body for toggle-diff-panel window listener.
// Deferred companion of EditorDiffPage / diff panel chrome.

import { useWindowEvent } from "../hooks/use-window-event";

export type ToggleDiffPanelDetail = {
  open: boolean;
};

/**
 * Subscribe to the host `toggle-diff-panel` window event and forward open state.
 * Bundle export `_h` / internal `K4s`.
 */
export function useToggleDiffPanelListener(
  onOpenChange: (open: boolean) => void,
): void {
  useWindowEvent(
    "toggle-diff-panel",
    (event: ToggleDiffPanelDetail) => {
      onOpenChange(event.open);
    },
    [onOpenChange],
  );
}

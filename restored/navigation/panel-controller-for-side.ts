// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `XI` / export `RU`.

import {
  bottomPanelController,
  rightPanelController,
  type PanelControllerAtoms,
  type PanelSide,
} from "./app-shell-atoms";

export function panelControllerForSide(side: PanelSide | string): PanelControllerAtoms {
  return side === "bottom" ? bottomPanelController : rightPanelController;
}

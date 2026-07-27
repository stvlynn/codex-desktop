// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `APr` / export `nQ` — ask host to add a workspace root option.

import { hostMessageBus } from "../navigation/host-message-bus";

/** Bundle `APr` / export `nQ`. */
export function addNewWorkspaceRootOption(): void {
  hostMessageBus.dispatchMessage("electron-add-new-workspace-root-option", {});
}

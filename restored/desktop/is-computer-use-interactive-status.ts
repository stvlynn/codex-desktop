// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sCu` / export `p`.

export type ComputerUseStatus =
  | "screen-recording-permission-needed"
  | "accessibility-permission-needed"
  | "ready"
  | "preparing"
  | "starting"
  | "failed"
  | string;

/** True when computer-use UI can show interactive affordances. */
export function isComputerUseInteractiveStatus(status: ComputerUseStatus | null | undefined): boolean | undefined {
  switch (status) {
    case "screen-recording-permission-needed":
    case "accessibility-permission-needed":
    case "ready":
      return true;
    case "preparing":
    case "starting":
    case "failed":
      return false;
  }
}

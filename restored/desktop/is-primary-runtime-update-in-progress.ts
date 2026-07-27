// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `siu` / export `qn`.

/** True while a primary-runtime update phase is actively progressing. */
export function isPrimaryRuntimeUpdateInProgress(
  state:
    | {
        phase?: string;
      }
    | null
    | undefined,
): boolean {
  switch (state?.phase) {
    case undefined:
    case "ready":
    case "error":
      return false;
    case "checking":
    case "downloading":
    case "verifying":
    case "extracting":
    case "validating":
    case "installed":
    case "configuring":
      return true;
    default:
      return false;
  }
}

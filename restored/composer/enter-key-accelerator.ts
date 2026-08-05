// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Bjs` / export `fv`.

/** Electron accelerator for composer enter-key behavior. */
export function enterKeyAccelerator(
  behavior: "enter" | "cmdIfMultiline" | "cmdAlways" | string,
): string | undefined {
  switch (behavior) {
    case "enter":
      return "CmdOrCtrl+Enter";
    case "cmdIfMultiline":
    case "cmdAlways":
      return "CmdOrCtrl+Shift+Enter";
    default:
      return undefined;
  }
}

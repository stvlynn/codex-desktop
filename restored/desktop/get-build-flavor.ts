// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Electron build flavor helper (`Jx` / export `q7`).

export type BuildFlavor = "prod" | (string & {});

/** Read the packaged build flavor from `window.electronBridge`. */
export function getBuildFlavor(): BuildFlavor {
  return window.electronBridge?.getBuildFlavor?.() || "prod";
}

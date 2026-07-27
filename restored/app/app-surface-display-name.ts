// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Human-readable labels for app surface ids (`Ume` / export `Pgt`).

import { AppSurfaceId } from "./app-surface-ids";

/** Bundle `Ume` / export `Pgt`. */
export function getAppSurfaceDisplayName(surface: AppSurfaceId): "Codex" | "ChatGPT" | undefined {
  switch (surface) {
    case AppSurfaceId.Codex:
      return "Codex";
    case AppSurfaceId.ChatGPT:
      return "ChatGPT";
  }
}

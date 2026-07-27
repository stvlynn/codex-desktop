// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hB` / export `vR`.

import { AppIconTG } from "./app-icon-tg";
import { LoadingPreviewIcon } from "./loading-preview-icon";

/** Pick the pencil-sparkle icon, else the default loading-preview glyph. */
export function resolveComposerActionIcon(
  kind: string,
): typeof AppIconTG | typeof LoadingPreviewIcon {
  return kind === "pencil-sparkle" ? AppIconTG : LoadingPreviewIcon;
}

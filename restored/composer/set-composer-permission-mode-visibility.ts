// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uNs` / export `av`.

import {
  coalesceComposerPermissionModeVisibility,
  type ComposerPermissionModeVisibility,
} from "../utils/coalesce-nullish";

/** Toggle visibility for a single composer permission mode. */
export function setComposerPermissionModeVisibility(input: {
  mode: keyof ComposerPermissionModeVisibility | string;
  visible: boolean;
  settings: ComposerPermissionModeVisibility | null | undefined;
}): ComposerPermissionModeVisibility {
  const base = coalesceComposerPermissionModeVisibility(input.settings);
  return { ...base, [input.mode]: input.visible };
}

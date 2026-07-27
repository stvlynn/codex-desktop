// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lNs` / export `rv`. Companion `mNs` default visibility map.

export const DEFAULT_COMPOSER_PERMISSION_MODE_VISIBILITY = {
  "guardian-approvals": true,
  "full-access": true,
} as const;

export type ComposerPermissionModeVisibility = {
  "guardian-approvals": boolean;
  "full-access": boolean;
  [mode: string]: boolean;
};

/** Nullish-coalesce composer permission-mode visibility to defaults. */
export function coalesceComposerPermissionModeVisibility(value: ComposerPermissionModeVisibility | null | undefined): ComposerPermissionModeVisibility {
  return value ?? { ...DEFAULT_COMPOSER_PERMISSION_MODE_VISIBILITY };
}

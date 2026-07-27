// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Workspace permission ids required for voice access (`Hln`).

/** Workspace permission keys checked before enabling voice features. */
export const WORKSPACE_VOICE_PERMISSION_IDS = [
  "chatgpt.workspace.feature.voice.access",
  "chatgpt.workspace.model.early-access",
] as const;

export type WorkspaceVoicePermissionId =
  (typeof WORKSPACE_VOICE_PERMISSION_IDS)[number];

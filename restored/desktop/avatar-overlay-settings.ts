// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Avatar-overlay / pet settings descriptors (bundle `GEe` / export `Spt`).

import {
  createGlobalStateSetting,
  type SettingDefinition,
} from "../settings/setting-definition";

/** Host key for floating pet width in px. */
export const AVATAR_OVERLAY_MASCOT_WIDTH_PX_KEY =
  "avatar-overlay-mascot-width-px";

/** Setting: floating Codex pet size (`GEe.petSize`). */
export const avatarOverlayPetSizeSetting: SettingDefinition<number> =
  createGlobalStateSetting({
    agentAccess: "read-write",
    default: 112,
    description: "Size of the floating Codex pet",
    key: AVATAR_OVERLAY_MASCOT_WIDTH_PX_KEY,
  });

/** Setting: selected Codex avatar id (`GEe.selectedAvatarId`). */
export const selectedAvatarIdSetting: SettingDefinition<string | null> =
  createGlobalStateSetting({
    agentAccess: "read-write",
    default: null,
    description: "Selected Codex avatar",
    key: "selected-avatar-id",
  });

/**
 * Bundle `GEe` / export `Spt` — avatar overlay related settings registry slice.
 */
export const avatarOverlaySettings = {
  petSize: avatarOverlayPetSizeSetting,
  selectedAvatarId: selectedAvatarIdSetting,
} as const;

/** Rolldown ESM init retained as no-op. */
export function ensureAvatarOverlaySettingsInit(): void {}

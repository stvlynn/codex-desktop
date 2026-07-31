// Restored from ref/webview/assets/avatar-overlay-mascot-size-4juuy68a.js
// Read/write floating pet width via avatar-overlay settings.
// Stage 3: Spt→avatarOverlaySettings; Lut/Iut/L_t mapped; ESM inits dropped.

import { appScopeAtom, useAppScope } from "../runtime/app-scope-runtime";
import { avatarOverlaySettings } from "../desktop/avatar-overlay-settings";
import { setSettingValue } from "../settings/settings-values";
import { useSettingValue } from "../settings/use-setting-value";

const DEFAULT_MASCOT_WIDTH_PX = avatarOverlaySettings.petSize.default;
const MASCOT_ASPECT_RATIO = 192 / 208;
const AVATAR_WIDTH_CSS_VAR = "--codex-avatar-width";

/** Bundle export `t` — default pet width in px. */
export const defaultAvatarOverlayMascotWidthPx = DEFAULT_MASCOT_WIDTH_PX;

/** Bundle export `n` — pet SVG aspect ratio (width/height). */
export const avatarOverlayMascotAspectRatio = MASCOT_ASPECT_RATIO;

/** Bundle export `r` — clamp pet width into the supported px range. */
export function clampAvatarOverlayMascotWidthPx(widthPx: number): number {
  return Number.isFinite(widthPx)
    ? Math.round(Math.min(224, Math.max(80, widthPx)))
    : DEFAULT_MASCOT_WIDTH_PX;
}

/**
 * Bundle `Sp`/`Iut` call shape used by this chunk: `(scope, setting, value)`.
 * Host binds the real settings writer; keep arity for Stage 3 consumers.
 */
function writePetSizeSetting(scope: unknown, widthPx: number): void {
  void (setSettingValue as (...args: unknown[]) => unknown)(
    scope,
    avatarOverlaySettings.petSize,
    clampAvatarOverlayMascotWidthPx(widthPx),
  );
}

/**
 * Bundle export `o` — current mascot width + setter wired to settings.
 */
export function useAvatarOverlayMascotSize(): {
  mascotWidthPx: number | null;
  setMascotWidthPx: (widthPx: number) => void;
} {
  const scope = useAppScope(appScopeAtom);
  const stored = useSettingValue(avatarOverlaySettings.petSize);
  const mascotWidthPx =
    stored === DEFAULT_MASCOT_WIDTH_PX
      ? null
      : clampAvatarOverlayMascotWidthPx(stored);

  return {
    mascotWidthPx,
    setMascotWidthPx: (widthPx: number) => writePetSizeSetting(scope, widthPx),
  };
}

/**
 * Bundle export `i` — CSS custom-property map for the avatar width.
 */
export function avatarOverlayMascotWidthStyle(widthPx: number | null | undefined): Record<string, string> | undefined {
  if (widthPx == null) return undefined;
  return {
    [AVATAR_WIDTH_CSS_VAR]: `${clampAvatarOverlayMascotWidthPx(widthPx)}px`,
  };
}

/** Bundle export `a` — Rolldown ESM init retained as no-op. */
export function ensureAvatarOverlayMascotSizeInit(): void {}

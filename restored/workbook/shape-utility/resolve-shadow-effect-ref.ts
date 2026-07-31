// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: shadow CSS/preset → effectReference (legacy bde).

import {
  matchShadowPresetName,
  parseTextShadowCss,
} from "../text-style";

export type PresentationThemeShadowHost = {
  ensureEffectStyle: (effectStyle: unknown) => string;
};

export type EffectReference = {
  index: string;
  color: undefined;
};

const SHADOW_PRESET_INDEX: Record<string, number> = {
  "shadow-none": 0,
  "shadow-sm": 4,
  shadow: 5,
  "shadow-md": 6,
  "shadow-lg": 7,
  "shadow-xl": 8,
  "shadow-2xl": 9,
};

/**
 * Legacy `bde` — resolve shadow preset/CSS into a presentation effectReference.
 */
export function resolveShadowEffectReference(
  shadow: string | undefined,
  theme?: PresentationThemeShadowHost | null,
): EffectReference | undefined {
  if (shadow === undefined) return;
  const preset = matchShadowPresetName(shadow);
  if (preset) {
    if (preset === "shadow-none") return;
    const index = SHADOW_PRESET_INDEX[preset];
    return !Number.isFinite(index) || index <= 0
      ? undefined
      : {
          index: String(index),
          color: undefined,
        };
  }
  const parsed = parseTextShadowCss(shadow);
  if (!(!parsed || parsed.kind === "none")) {
    if (!theme)
      throw Error(
        `Custom shadow "${shadow}" requires a presentation theme context.`,
      );
    return {
      index: theme.ensureEffectStyle(parsed.effectStyle),
      color: undefined,
    };
  }
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tLn` / export `a7` — first tone + remaining style_variants.

export const TONE_STYLE_PAYLOAD_TONE_KEY = "tone";
export const TONE_STYLE_PAYLOAD_STYLE_VARIANTS_KEY = "style_variants";

export type ToneStyleEntry = {
  tone: string;
  [key: string]: unknown;
};

export function toToneStylePayload(
  entries: ToneStyleEntry[] | null | undefined,
): Record<string, unknown> {
  const [first, ...rest] = entries ?? [];
  if (first == null) return {};
  return {
    [TONE_STYLE_PAYLOAD_TONE_KEY]: first.tone,
    [TONE_STYLE_PAYLOAD_STYLE_VARIANTS_KEY]: rest,
  };
}

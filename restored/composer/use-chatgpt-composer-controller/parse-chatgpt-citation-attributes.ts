// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Citation / reference attribute parsers (Zod schemas + index / marker helpers).

import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { zodObject, zodString } from "../../vendor/zod";

type CitationIndexSchema = {
  safeParse: (
    value: unknown,
  ) => { success: true; data: { index: number } } | { success: false };
};

type CitationMarkerSchema = {
  safeParse: (value: unknown) =>
    | {
        success: true;
        data: { marker_text?: string; marker_type?: string };
      }
    | { success: false };
};

let citationIndexSchema: CitationIndexSchema | undefined;
let citationMarkerSchema: CitationMarkerSchema | undefined;

/** Ensure citation attribute Zod schemas are materialized. */
export const ensureChatgptComposerControllerAuxInitO = rolldownRuntimeN(() => {
  zodString();
  citationIndexSchema = zodObject({
    index: zodString().regex(/^\d+$/).transform(Number),
  }).strip() as CitationIndexSchema;
  citationMarkerSchema = zodObject({
    marker_text: zodString().trim().min(1).optional(),
    marker_type: zodString().trim().min(1).optional(),
  }).strip() as CitationMarkerSchema;
});

/** Parse citation / reference attributes (primary schema → numeric index). */
export function parseChatgptCitationAttributes(
  attributes: unknown,
): number | null {
  const parsed = citationIndexSchema!.safeParse(attributes);
  return parsed.success ? parsed.data.index : null;
}

/** Parse citation / reference attributes (alternate schema → marker text). */
export function parseChatgptCitationAttributesAlt(
  attributes: unknown,
): string | null {
  const parsed = citationMarkerSchema!.safeParse(attributes);
  return parsed.success ? (parsed.data.marker_text ?? null) : null;
}

/** Parse citation marker type from alternate citation attributes. */
export function parseChatgptCitationMarkerType(
  attributes: unknown,
): string | null {
  const parsed = citationMarkerSchema!.safeParse(attributes);
  return parsed.success ? (parsed.data.marker_type ?? null) : null;
}

// Letter aliases for boundary / legacy consumers
export const useChatgptComposerControllerE = parseChatgptCitationAttributes;
export const useChatgptComposerControllerD = parseChatgptCitationAttributesAlt;
export const useChatgptComposerControllerHelper18 =
  parseChatgptCitationMarkerType;
export const useChatgptComposerControllerO =
  ensureChatgptComposerControllerAuxInitO;

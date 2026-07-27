// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Detect science / early-access model ids (`cme` / export `Wgt`).

const ROSALIND_NAME_RE = /rosalind/i;

/** Explicit science-model ids (`gme`). */
export const SCIENCE_MODEL_IDS = new Set([
  "gpt-rosalind-preview",
  "gpt-rosalind-5-5",
  "heisenberg",
]);

/** Bundle `ume` (co-located). */
export function normalizeModelId(value: string | null | undefined): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type IsScienceModelProps = {
  selectedModel: string | null | undefined;
  selectedModelDisplayName: string | null | undefined;
};

/**
 * Bundle `cme` / export `Wgt`.
 * True when the model id/name matches Rosalind or a known science id.
 */
export function isScienceModel({
  selectedModel,
  selectedModelDisplayName,
}: IsScienceModelProps): boolean {
  return [selectedModel, selectedModelDisplayName].some((value) => {
    if (ROSALIND_NAME_RE.test(value ?? "")) return true;
    return SCIENCE_MODEL_IDS.has(normalizeModelId(value));
  });
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Science-model chip label (`sme` / export `Vgt`).

import { isScienceModel } from "../models/is-science-model";

export type ResolveScienceModelLabelProps = {
  selectedModel: string | null | undefined;
  selectedModelDisplayName: string | null | undefined;
};

/**
 * Bundle `sme` / export `Vgt`.
 * Returns `"science"` for Rosalind / Heisenberg models, otherwise `null`.
 */
export function resolveScienceModelLabel(
  props: ResolveScienceModelLabelProps,
): "science" | null {
  return isScienceModel(props) ? "science" : null;
}

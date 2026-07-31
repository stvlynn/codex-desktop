// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: presentation recipe identity helper (legacy Binding1800).

import { esmInit } from "../../runtime/rolldown-runtime";

export type PresentationRecipe<TParams = any> = {
  name: string;
  summary: string;
  labels: string[];
  paramsSchema: { parse: (value: unknown) => TParams; [k: string]: any };
  exampleParams: TParams;
  run: (presentation: any, params: TParams) => void;
  notes?: string[];
};

export let defineRecipe: <T>(
  recipe: PresentationRecipe<T>,
) => PresentationRecipe<T>;

export const ensureDefineRecipeInit = esmInit(() => {
  defineRecipe = (recipe) => recipe;
});

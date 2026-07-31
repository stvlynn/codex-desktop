// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: presentation recipe registry + run (legacy Xqe/Zqe/aJe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { presentationRecipeCatalog } from "./recipe-catalog";
import {
  initRecipeInspectHelpers,
  inspectPresentationDiff,
} from "./recipe-inspect";
import { ensureChartAndEarlySlideRecipesInit } from "./recipes-chart-and-early-slides";
import { ensureSlideBasicsRecipesInit } from "./recipes-slide-basics";
import { ensureSlideMediaRecipesInit } from "./recipes-slide-media";
import { ensureSlideLayoutRecipesInit } from "./recipes-slide-layouts";
import { ensureSlideCompareRecipesInit } from "./recipes-slide-compare";
import { ensureComposePitchARecipesInit } from "./recipes-compose-pitch-a";
import { ensureComposePitchBRecipesInit } from "./recipes-compose-pitch-b";
import { ensureComposePitchCRecipesInit } from "./recipes-compose-pitch-c";
import { ensureComposePitchDRecipesInit } from "./recipes-compose-pitch-d";

export let presentationRecipeList: any[];
export let presentationRecipeByName: Map<string, any>;

export function getPresentationRecipe(name: string): any {
  return presentationRecipeByName.get(name) ?? null;
}

export function runPresentationRecipe(
  presentation: any,
  scriptName: string,
  params: Record<string, unknown> = {},
): any {
  const recipe = getPresentationRecipe(scriptName);
  if (!recipe) throw Error(`Unknown presentation recipe script: ${scriptName}`);
  const before = presentation.toSnapshot();
  const parsed = recipe.paramsSchema.parse(params);
  recipe.run(presentation, parsed);
  const after = presentation.toSnapshot();
  return {
    scriptName: recipe.name,
    labels: [...recipe.labels],
    params: parsed,
    inspect: inspectPresentationDiff(before, after),
  };
}

export const ensurePresentationRecipesInit = esmInit(() => {
  ensureChartAndEarlySlideRecipesInit();
  ensureSlideBasicsRecipesInit();
  ensureSlideMediaRecipesInit();
  ensureSlideLayoutRecipesInit();
  ensureSlideCompareRecipesInit();
  ensureComposePitchARecipesInit();
  ensureComposePitchBRecipesInit();
  ensureComposePitchCRecipesInit();
  ensureComposePitchDRecipesInit();
  presentationRecipeList = [...presentationRecipeCatalog];
  presentationRecipeByName = new Map(
    presentationRecipeList.map((item) => [item.name, item]),
  );
  initRecipeInspectHelpers();
});

// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: shared presentation recipe catalog.

import type { PresentationRecipe } from "./define-recipe";

export const presentationRecipeCatalog: PresentationRecipe[] = [];

export function registerPresentationRecipes(
  recipes: PresentationRecipe[],
): void {
  for (const recipe of recipes) {
    if (!recipe?.name) continue;
    if (presentationRecipeCatalog.some((item) => item.name === recipe.name))
      continue;
    presentationRecipeCatalog.push(recipe);
  }
}

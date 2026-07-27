// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fys` / export `Cb`.

import {
  CLAUDE_IMPORT_ONBOARDING_ITEM_ID,
  SIDEBAR_ONBOARDING_ITEM_IDS,
} from "./sidebar-onboarding-item-ids";

export type OnboardingItemSource =
  | "claude_import"
  | "sidebar"
  | "conversational_onboarding"
  | string;

/** Resolve checklist item source from explicit source or id heuristics. */
export function resolveOnboardingItemSource(item: {
  id: string;
  source?: string | null;
}): OnboardingItemSource {
  if (item.source != null) return item.source;
  if (item.id === CLAUDE_IMPORT_ONBOARDING_ITEM_ID) return "claude_import";
  if (SIDEBAR_ONBOARDING_ITEM_IDS.has(item.id)) return "sidebar";
  return "conversational_onboarding";
}

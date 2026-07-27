// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Uys` / export `hb`.

import { CLAUDE_IMPORT_ONBOARDING_ITEM_ID } from "./sidebar-onboarding-item-ids";

export type OnboardingChecklistItem = {
  id: string;
  completed?: boolean;
  source?: string;
  [key: string]: unknown;
};

/** Merge conversational + claude-import + sidebar items into checklist state. */
export function buildOnboardingChecklistState(args: {
  completedConversationalOnboardingTask:
    | OnboardingChecklistItem
    | null
    | undefined;
  hasCompletedClaudeImport: boolean;
  sidebarItems: readonly OnboardingChecklistItem[];
}): {
  version: 1;
  collapsed: false;
  items: OnboardingChecklistItem[];
} {
  const items: OnboardingChecklistItem[] = [];
  const completed = args.completedConversationalOnboardingTask;
  if (completed != null) {
    items.push({
      ...completed,
      completed: true,
      source: "conversational_onboarding",
    });
  }
  if (args.hasCompletedClaudeImport) {
    items.push({
      id: CLAUDE_IMPORT_ONBOARDING_ITEM_ID,
      completed: true,
      source: "claude_import",
    });
  }
  items.push(
    ...args.sidebarItems
      .filter(
        ({ id }) =>
          (!args.hasCompletedClaudeImport ||
            id !== CLAUDE_IMPORT_ONBOARDING_ITEM_ID) &&
          id !== completed?.id,
      )
      .map((item) => ({ ...item, completed: false, source: "sidebar" })),
  );
  return { version: 1, collapsed: false, items };
}

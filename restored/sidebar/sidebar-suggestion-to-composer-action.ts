// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Osc` — `ep` already mapped by wave BM to onboarding helper.

import {
  sidebarSuggestionLabel,
  type IntlLike,
  type SidebarSuggestionLike,
} from "./sidebar-suggestion-label";
import {
  sidebarSuggestionPrompt,
  type SidebarSuggestionPromptSource,
} from "./sidebar-suggestion-prompt";

export type SidebarSuggestion = SidebarSuggestionLike &
  SidebarSuggestionPromptSource & {
    action?: string;
    pluginSlots?: Record<string, unknown> | null;
    prependPluginMentions?: boolean;
  };

export type SidebarComposerAction =
  | { type: "sidebar_claude_import"; label: string }
  | { type: "sidebar_notification"; label: string }
  | {
      type: "sidebar";
      label: string;
      pluginSlots?: Record<string, unknown> | null;
      prependPluginMentions?: true;
      prompt: string;
    };

/** Map sidebar onboarding suggestion to composer action payload. */
export function sidebarSuggestionToComposerAction(suggestion: SidebarSuggestion, intl: IntlLike): SidebarComposerAction {
  if (suggestion.action === "import_claude") {
    return {
      type: "sidebar_claude_import",
      label: sidebarSuggestionLabel(suggestion, intl),
    };
  }
  if (suggestion.action === "enable_notifications") {
    return {
      type: "sidebar_notification",
      label: sidebarSuggestionLabel(suggestion, intl),
    };
  }
  const slots =
    suggestion.pluginSlots == null
      ? undefined
      : Object.fromEntries(
          Object.keys(suggestion.pluginSlots).map((key) => [key, `{${key}}`]),
        );
  return {
    type: "sidebar",
    label: sidebarSuggestionLabel(suggestion, intl),
    pluginSlots: suggestion.pluginSlots,
    prependPluginMentions:
      suggestion.prependPluginMentions === true ? true : undefined,
    prompt: sidebarSuggestionPrompt(suggestion, intl, slots),
  };
}

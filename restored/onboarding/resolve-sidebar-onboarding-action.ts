// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Osc` / export `ep`.

import {
  formatIntlOrString,
  type IntlShapeLike,
} from "./format-intl-or-string";
import { formatPromptWithSlots } from "./format-prompt-with-slots";

export type SidebarOnboardingAction = {
  action?: string;
  message?: string | unknown;
  prompt?: string | unknown;
  pluginSlots?: Record<string, unknown> | null;
  prependPluginMentions?: boolean;
};

/** Normalize a sidebar onboarding CTA into a typed action payload. */
export function resolveSidebarOnboardingAction(
  action: SidebarOnboardingAction,
  intl: IntlShapeLike,
): {
  type: "sidebar_claude_import" | "sidebar_notification" | "sidebar";
  label: string;
  pluginSlots?: Record<string, unknown> | null;
  prependPluginMentions?: true;
  prompt?: string;
} {
  if (action.action === "import_claude") {
    return {
      type: "sidebar_claude_import",
      label: formatIntlOrString(action as { message: string | unknown }, intl),
    };
  }
  if (action.action === "enable_notifications") {
    return {
      type: "sidebar_notification",
      label: formatIntlOrString(action as { message: string | unknown }, intl),
    };
  }
  const slots =
    action.pluginSlots == null
      ? undefined
      : Object.fromEntries(
          Object.keys(action.pluginSlots).map((key) => [key, `{${key}}`]),
        );
  return {
    type: "sidebar",
    label: formatIntlOrString(action as { message: string | unknown }, intl),
    pluginSlots: action.pluginSlots,
    prependPluginMentions:
      action.prependPluginMentions === true ? true : undefined,
    prompt: formatPromptWithSlots(
      action as { prompt: string | unknown },
      intl,
      slots,
    ),
  };
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Localized Browser / Computer plugin mention labels (bundle `z1r` / export `yJ`).

import type { IntlShape } from "react-intl";
import { browserPluginMentionMessages } from "./browser-plugin-mention-messages";
import { computerUsePluginMentionMessages } from "./computer-use-plugin-mention-messages";

export type PluginMentionLabels = {
  browserUse: string;
  computerUse: string;
};

/** Format Browser / Computer Use labels via react-intl (`z1r` / `yJ`). */
export function formatPluginMentionLabels(
  intl: Pick<IntlShape, "formatMessage">,
): PluginMentionLabels {
  return {
    browserUse: intl.formatMessage(browserPluginMentionMessages.label),
    computerUse: intl.formatMessage(
      computerUsePluginMentionMessages.computerUse,
    ),
  };
}

/** Default English labels without an intl instance (`B1r`). */
export function defaultPluginMentionLabels(): PluginMentionLabels {
  return {
    browserUse: browserPluginMentionMessages.label.defaultMessage,
    computerUse: computerUsePluginMentionMessages.computerUse.defaultMessage,
  };
}

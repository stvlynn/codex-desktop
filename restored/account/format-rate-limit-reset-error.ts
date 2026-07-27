// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rOs` / export `Fv`.

import type { MessageDescriptor } from "react-intl";

type IntlShape = {
  formatMessage: (message: MessageDescriptor) => string;
};

/** Format a rate-limit reset redemption error for the modal. */
export function formatRateLimitResetError(code: string, intl: IntlShape): string | undefined {
  switch (code) {
    case "already_redeemed":
      return intl.formatMessage({
        id: "codex.rateLimitResetModal.alreadyRedeemed",
        defaultMessage: "This reset was already used",
        description:
          "Error shown when a Codex rate limit reset request was already redeemed",
      });
    case "no_credit":
      return intl.formatMessage({
        id: "codex.rateLimitResetModal.noCredit",
        defaultMessage: "No resets are available",
        description:
          "Error shown when the user has no Codex rate limit resets available",
      });
    case "nothing_to_reset":
      return intl.formatMessage({
        id: "codex.rateLimitResetModal.nothingToReset",
        defaultMessage: "Your usage does not need a reset right now",
        description:
          "Error shown when the user's Codex usage does not need a rate limit reset",
      });
    default:
      return undefined;
  }
}

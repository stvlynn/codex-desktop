// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ocl` / export `Gc`.

import { subagentActivityMessages } from "./subagent-activity-messages";

export type IntlFormatMessage = {
  formatMessage: (descriptor: unknown) => string;
};

/** Pick a group-level subagent status message from per-agent statuses. */
export function subagentGroupStatusMessage(
  intl: IntlFormatMessage,
  statuses: string[],
): string {
  if (statuses.some((s) => s === "interrupted")) {
    return intl.formatMessage(subagentActivityMessages.groupInterrupted);
  }
  if (statuses.some((s) => s === "updated")) {
    return intl.formatMessage(subagentActivityMessages.groupUpdated);
  }
  if (statuses.length > 0 && statuses.every((s) => s === "done")) {
    return intl.formatMessage(subagentActivityMessages.groupFinished);
  }
  return intl.formatMessage(subagentActivityMessages.groupStartedWorking);
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// FormattedMessage labels for pull-request CI status rows (`hHl` / `so`).

import { FormattedMessage } from "react-intl";

import type { CiStatus } from "./ci-check-status";

/**
 * Returns the localized status row label for a PR checks summary.
 */
export function CiStatusMessage({ status }: { status: CiStatus }) {
  switch (status) {
    case "failing":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checksFailing"
          defaultMessage="Checks failing"
          description="Status row shown when pull request checks are failing"
        />
      );
    case "none":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.noCiChecks"
          defaultMessage="No CI checks"
          description="Status row shown when the pull request currently has no CI checks"
        />
      );
    case "passing":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checksSuccessful"
          defaultMessage="Checks successful"
          description="Status row shown when pull request checks are passing"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checksPending"
          defaultMessage="Checks pending"
          description="Status row shown when pull request checks are still pending"
        />
      );
    default:
      return null;
  }
}

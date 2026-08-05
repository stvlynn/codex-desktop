// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 22/22
/* split-lane-import-depth:1 */

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";

export function _pullRequestDetailQueryC(lagoon4: unknown) {
  let { type } = lagoon4;
  return (
    <div
      className="rounded-lg border border-token-border bg-token-bg-fog px-3 py-2 text-sm text-token-description-foreground"
      role="status"
    >
      {type === "checks" ? (
        <MemoizedFormattedMessage
          {...{
            id: "pullRequestDetail.checks.partial",
            defaultMessage: "Some check details couldn’t be loaded.",
            description:
              "Notice shown when pull request checks are partially unavailable",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "pullRequestDetail.reviews.partial",
            defaultMessage: "Some review details couldn’t be loaded.",
            description:
              "Notice shown when pull request reviews are partially unavailable",
          }}
        />
      )}
    </div>
  );
}

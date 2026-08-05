// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 22/22
/* split-lane-import-depth:1 */

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { LazyValueChildrenProvider } from "../../ui/lazy-value-children-provider";
import { ensureDetailPageSectionHeaderInit as EnsureDetailPageSectionHeaderInit } from "../../ui/detail-page";

// Wave5d soft stubs.
const Moss: any = undefined;
const Quest: any = undefined;
const Ridge: any = undefined;

const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const _pullRequestMediaT: any = undefined;

function Unity(event) {
  event.key === "Enter" &&
    (event.metaKey || event.ctrlKey) &&
    (event.preventDefault(), event.currentTarget.form?.requestSubmit());
}
export function _pullRequestDetailQueryO(cliff4: unknown) {
  let { actions, checks, empty, error, loading, notice, renderChecks } = cliff4,
    dusk4 = (
      <MemoizedFormattedMessage
        {...{
          id: "pullRequestDetail.checks.title",
          defaultMessage: "Checks",
          description: "Pull request checks section title",
        }}
      />
    );
  let elm4 =
    error == null ? (
      loading || checks == null ? (
        <Ridge
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.checks.loading",
                  defaultMessage: "Loading checks",
                  description: "Loading label for pull request checks",
                }}
              />
            ),
          }}
        />
      ) : checks.length > 0 ? (
        renderChecks(checks)
      ) : (
        <Moss
          {...{
            children: empty ?? (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.checks.empty",
                  defaultMessage: "No checks reported",
                  description: "Empty pull request checks list",
                }}
              />
            ),
          }}
        />
      )
    ) : (
      <Quest
        {...{
          description: error,
        }}
      />
    );
  return (
    <EnsureDetailPageSectionHeaderInit
      {...{
        id: "pull-request-checks",
        actions,
        collapsible: true,
        title: dusk4,
        children: [notice, elm4],
      }}
    />
  );
}
export function _pullRequestDetailQueryS(fern4: unknown) {
  let { actions, comments, error, footer, loading, notice, renderComment } =
      fern4,
    grove4 = comments?.length,
    hill4 = (
      <MemoizedFormattedMessage
        {...{
          id: "pullRequestDetail.comments.title",
          defaultMessage: "Comments",
          description: "Pull request comments section title",
        }}
      />
    );
  let isle4 =
    error == null ? (
      loading || comments == null ? (
        <Ridge
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.comments.loading",
                  defaultMessage: "Loading comments",
                  description: "Loading label for pull request comments",
                }}
              />
            ),
          }}
        />
      ) : comments.length > 0 ? (
        <LazyValueChildrenProvider
          {...{
            children: (
              <div className="flex flex-col gap-3">
                {comments.map((item) => (
                  <div key={item.id}>{renderComment(item)}</div>
                ))}
              </div>
            ),
          }}
        />
      ) : (
        <Moss
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.comments.empty",
                  defaultMessage: "No comments",
                  description: "Empty pull request comments list",
                }}
              />
            ),
          }}
        />
      )
    ) : (
      <Quest
        {...{
          description: error,
        }}
      />
    );
  let juniper4 = footer == null ? null : <div className="mt-3">{footer}</div>;
  return (
    <EnsureDetailPageSectionHeaderInit
      {...{
        id: "pull-request-comments",
        actions,
        collapsible: true,
        count: grove4,
        title: hill4,
        children: [notice, isle4, juniper4],
      }}
    />
  );
}

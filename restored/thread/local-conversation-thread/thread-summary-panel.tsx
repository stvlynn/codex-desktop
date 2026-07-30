// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Floating thread-summary popover (`novaR1`): Root + Content shell hosting the
// environment / PR / subagent / usage section slots (`sageR1`). Soft section
// peers stay throws: 0; PopoverMenu compound peers are not invoked (they throw
// until bindPopoverMenuParts is wired).

import type { ReactElement, ReactNode } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import {
  softReadSummaryPanelShouldHideInline,
  softReadSummaryPanelShouldShow,
} from "./runtime-bridges";

export type ThreadSummaryPanelProps = {
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
};

type SummarySectionSlotProps = {
  sectionKey: string;
  title: ReactNode;
  children?: ReactNode;
};

function SummarySectionSlot(props: SummarySectionSlotProps): ReactElement {
  return (
    <section
      data-popover-section={props.sectionKey}
      className="flex flex-col gap-1 px-3 py-2"
    >
      <h3 className="text-xs font-medium text-token-text-secondary">
        {props.title}
      </h3>
      {props.children ?? null}
    </section>
  );
}

/**
 * Soft section body for the summary panel (`sageR1` slots). Registers the
 * known section keys so the floating shell matches checkpoint structure.
 */
function ThreadSummarySections(props: {
  isVisible: boolean;
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
}): ReactElement {
  const {
    isVisible,
    onOpenBackgroundAgent,
    onOpenPullRequestSidePanel,
    onOpenSubagentsPanel,
  } = props;

  return (
    <div
      className="flex min-w-72 flex-col gap-1"
      data-local-thread-summary-sections=""
      data-visible={isVisible ? "true" : undefined}
      data-register-environment-actions="true"
    >
      <SummarySectionSlot
        sectionKey="environment"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.environment.title"
            defaultMessage="Environment"
            description="Section title for environment actions in the thread summary"
          />
        }
      />
      <SummarySectionSlot
        sectionKey="pull-request"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.pullRequest.title"
            defaultMessage="Pull request"
            description="Section title for pull-request actions in the thread summary"
          />
        }
      >
        {onOpenPullRequestSidePanel != null ? (
          <button
            type="button"
            className="text-left text-sm"
            onClick={() => onOpenPullRequestSidePanel()}
          >
            <MemoizedFormattedMessage
              id="codex.localConversation.pullRequest.open"
              defaultMessage="Open pull request"
              description="Opens the pull-request side panel from the summary"
            />
          </button>
        ) : null}
      </SummarySectionSlot>
      <SummarySectionSlot
        sectionKey="subagents"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.subagents.title"
            defaultMessage="Subagents"
            description="Section title for background agents in the thread summary"
          />
        }
      >
        {onOpenBackgroundAgent != null || onOpenSubagentsPanel != null ? (
          <div className="flex flex-col gap-1">
            {onOpenBackgroundAgent != null ? (
              <button
                type="button"
                className="text-left text-sm"
                onClick={() => onOpenBackgroundAgent()}
              >
                <MemoizedFormattedMessage
                  id="codex.localConversation.backgroundAgent.open"
                  defaultMessage="Open background agent"
                  description="Opens a background agent from the summary"
                />
              </button>
            ) : null}
            {onOpenSubagentsPanel != null ? (
              <button
                type="button"
                className="text-left text-sm"
                onClick={() => onOpenSubagentsPanel()}
              >
                <MemoizedFormattedMessage
                  id="codex.localConversation.subagents.open"
                  defaultMessage="Open subagents"
                  description="Opens the subagents panel from the summary"
                />
              </button>
            ) : null}
          </div>
        ) : null}
      </SummarySectionSlot>
      <SummarySectionSlot
        sectionKey="usage"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.usage.title"
            defaultMessage="Current task usage"
            description="Title for the usage section in the local conversation summary panel"
          />
        }
      />
    </div>
  );
}

/**
 * Bundle `novaR1` — floating summary panel for the local conversation thread.
 * Soft: does not call PopoverMenu (peers unbound); mounts an inline floating
 * shell with the same section contract.
 */
export function ThreadSummaryPanel(
  props: ThreadSummaryPanelProps,
): ReactElement | null {
  const {
    onOpenBackgroundAgent,
    onOpenPullRequestSidePanel,
    onOpenSubagentsPanel,
  } = props;

  const shouldShow = softReadSummaryPanelShouldShow();
  const shouldHideInlineImmediately = softReadSummaryPanelShouldHideInline();

  if (!shouldShow && shouldHideInlineImmediately) return null;

  return (
    <div
      className="pointer-events-auto absolute right-3 top-3 z-10"
      data-local-thread-summary-panel=""
      data-should-show={shouldShow ? "true" : undefined}
      data-should-hide-inline={shouldHideInlineImmediately ? "true" : undefined}
    >
      {/* Soft trigger peer (`reefR1` / NativeContextMenuSurface) — no-op mount. */}
      <div data-local-thread-summary-trigger="" hidden aria-hidden />
      {shouldShow ? (
        <div
          className="rounded-2xl border border-token-border bg-token-main-surface-primary p-1 shadow-sm"
          data-local-thread-summary-content=""
        >
          <ThreadSummarySections
            isVisible={shouldShow}
            onOpenBackgroundAgent={onOpenBackgroundAgent}
            onOpenPullRequestSidePanel={onOpenPullRequestSidePanel}
            onOpenSubagentsPanel={onOpenSubagentsPanel}
          />
        </div>
      ) : null}
    </div>
  );
}

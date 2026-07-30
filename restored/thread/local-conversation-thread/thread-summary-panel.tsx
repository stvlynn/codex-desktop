// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Floating thread-summary popover (`novaR1` / `sageR1`): soft PopoverMenu.Section
// stand-ins for every checkpoint sectionKey. Real PopoverMenu compound peers
// throw until bindPopoverMenuParts is wired — never invoke them here.

import type { ReactElement, ReactNode } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ElectronOnly } from "../../ui/electron-only";
import {
  softReadSummaryPanelShouldHideInline,
  softReadSummaryPanelShouldShow,
} from "./runtime-bridges";

export type ThreadSummaryPanelProps = {
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
  /** When true, skip the floating Root/Content soft shell (`localConversationThreadH`). */
  inlinePopoverContent?: boolean;
  registerEnvironmentActionCommands?: boolean;
};

type SummarySectionSlotProps = {
  sectionKey: string;
  title: ReactNode;
  titleSuffix?: ReactNode;
  after?: ReactNode;
  children?: ReactNode;
};

/**
 * Soft stand-in for `PopoverMenu.Section` (`lJo`). Keeps sectionKey contract
 * from checkpoint `sageR1` without calling unbound PopoverMenu peers.
 */
function SummarySectionSlot(props: SummarySectionSlotProps): ReactElement {
  return (
    <section
      data-popover-section={props.sectionKey}
      className="flex flex-col gap-1 px-3 py-2"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xs font-medium text-token-text-secondary">
          {props.title}
        </h3>
        {props.titleSuffix ?? null}
      </div>
      {props.after ?? null}
      {props.children ?? null}
    </section>
  );
}

/**
 * Soft `sageR1` — section roster matching checkpoint PopoverMenu.Section keys.
 * Bodies stay soft (store peers / AppInitial companions deepen later).
 */
function ThreadSummarySections(props: {
  isVisible: boolean;
  registerEnvironmentActionCommands?: boolean;
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
}): ReactElement {
  const {
    isVisible,
    registerEnvironmentActionCommands = true,
    onOpenBackgroundAgent,
    onOpenPullRequestSidePanel,
    onOpenSubagentsPanel,
  } = props;

  return (
    <div
      className="flex min-w-72 flex-col gap-1"
      data-local-thread-summary-sections=""
      data-visible={isVisible ? "true" : undefined}
      data-register-environment-actions={
        registerEnvironmentActionCommands ? "true" : undefined
      }
    >
      {/* cliff → sectionKey "automation" */}
      <SummarySectionSlot
        sectionKey="automation"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.heartbeatAutomation.title"
            defaultMessage="Scheduled"
            description="Title for the active scheduled task section in the thread summary side panel"
          />
        }
      />

      {/* tide / vale / apex → sectionKey "environment" */}
      <SummarySectionSlot
        sectionKey="environment"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.environmentSummary.title"
            defaultMessage="Environment"
            description="Title for the thread summary side panel environment and branch details section"
          />
        }
      />

      {/* elm → sectionKey "plan" */}
      <SummarySectionSlot
        sectionKey="plan"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.plan.title"
            defaultMessage="Plan"
            description="Title for the plan section in the thread summary panel"
          />
        }
      />

      {/* brookR2 → sectionKey "artifacts" */}
      <SummarySectionSlot
        sectionKey="artifacts"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.outputs.title"
            defaultMessage="Outputs"
            description="Title for the outputs section in the local conversation summary panel"
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

      {/* alphaR1 → sectionKey "side-chats" */}
      <SummarySectionSlot
        sectionKey="side-chats"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.sideChats.title"
            defaultMessage="Side chats"
            description="Title for the side chats section in the chat summary side panel"
          />
        }
      />

      {/* bravoR3 → sectionKey "background-subagents" */}
      <SummarySectionSlot
        sectionKey="background-subagents"
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

      {/* topazR1 → sectionKey "usage" */}
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

      {/* yellowR3 → sectionKey "background-tasks" */}
      <SummarySectionSlot
        sectionKey="background-tasks"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.backgroundTasks.title"
            defaultMessage="Background tasks"
            description="Title for the background tasks section in the thread summary panel"
          />
        }
      />

      {/* $C → sectionKey "computer-use-pip" */}
      <SummarySectionSlot
        sectionKey="computer-use-pip"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.remoteHostedPip.computerUse"
            defaultMessage="Computer Use"
            description="Section title for Computer Use controls in the thread summary side panel"
          />
        }
      />

      {/* echo / falcon → sectionKey "chrome-tabs" (ElectronOnly) */}
      <ElectronOnly electron={true}>
        <SummarySectionSlot
          sectionKey="chrome-tabs"
          title={
            <MemoizedFormattedMessage
              id="codex.localConversation.chromeTabs.title"
              defaultMessage="Chrome"
              description="Section title for Chrome tabs in the thread summary side panel"
            />
          }
        />
      </ElectronOnly>

      {/* kelpR3 → sectionKey "browser" */}
      <SummarySectionSlot
        sectionKey="browser"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.browserUse.title"
            defaultMessage="Browser"
            description="Title for the browser section in the thread summary side panel"
          />
        }
      />

      {/* lotusR1 → sectionKey "tool-sources" */}
      <SummarySectionSlot
        sectionKey="tool-sources"
        title={
          <MemoizedFormattedMessage
            id="codex.localConversation.sources.title"
            defaultMessage="Sources"
            description="Title for the thread summary side panel sources section"
          />
        }
      />
    </div>
  );
}

/**
 * Bundle `novaR1` — floating summary panel for the local conversation thread.
 * Soft: does not call PopoverMenu (peers unbound); mounts an inline floating
 * shell with the same sageR1 section contract.
 */
export function ThreadSummaryPanel(
  props: ThreadSummaryPanelProps,
): ReactElement | null {
  const {
    onOpenBackgroundAgent,
    onOpenPullRequestSidePanel,
    onOpenSubagentsPanel,
    inlinePopoverContent = false,
    registerEnvironmentActionCommands = true,
  } = props;

  const shouldShow = softReadSummaryPanelShouldShow();
  const shouldHideInlineImmediately = softReadSummaryPanelShouldHideInline();

  if (inlinePopoverContent) {
    return (
      <div
        className="rounded-2xl border border-token-border bg-token-main-surface-primary p-1 shadow-sm"
        data-local-thread-summary-popover-content=""
      >
        {/* Soft trigger peer (`reefR1` / NativeContextMenuSurface) — no-op mount. */}
        <div data-local-thread-summary-trigger="" hidden aria-hidden />
        <ThreadSummarySections
          isVisible={true}
          registerEnvironmentActionCommands={registerEnvironmentActionCommands}
          onOpenBackgroundAgent={onOpenBackgroundAgent}
          onOpenPullRequestSidePanel={onOpenPullRequestSidePanel}
          onOpenSubagentsPanel={onOpenSubagentsPanel}
        />
      </div>
    );
  }

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
            registerEnvironmentActionCommands={
              registerEnvironmentActionCommands
            }
            onOpenBackgroundAgent={onOpenBackgroundAgent}
            onOpenPullRequestSidePanel={onOpenPullRequestSidePanel}
            onOpenSubagentsPanel={onOpenSubagentsPanel}
          />
        </div>
      ) : null}
    </div>
  );
}

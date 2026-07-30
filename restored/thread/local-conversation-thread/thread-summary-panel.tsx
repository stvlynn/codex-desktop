// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Floating thread-summary popover (`novaR1` / `sageR1`) on real PopoverMenu
// compound (`XE`/`BJ`). Section bodies stay soft until AppInitial companions /
// store peers deepen; shell + Section roster use the public PopoverMenu API.

import type { ReactElement } from "react";

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ElectronOnly } from "../../ui/electron-only";
import { PopoverMenu } from "../../ui/popover-menu";
import {
  softReadSummaryPanelShouldHideInline,
  softReadSummaryPanelShouldShow,
} from "./runtime-bridges";

export type ThreadSummaryPanelProps = {
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
  /** When true, use PopoverContent shell (`localConversationThreadH`). */
  inlinePopoverContent?: boolean;
  registerEnvironmentActionCommands?: boolean;
};

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
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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
          <PopoverMenu.ItemButton
            onClick={() => onOpenPullRequestSidePanel()}
          >
            <PopoverMenu.ItemLabel>
              <MemoizedFormattedMessage
                id="codex.localConversation.pullRequest.open"
                defaultMessage="Open pull request"
                description="Opens the pull-request side panel from the summary"
              />
            </PopoverMenu.ItemLabel>
          </PopoverMenu.ItemButton>
        ) : null}
      </PopoverMenu.Section>

      {/* alphaR1 → sectionKey "side-chats" */}
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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
          <PopoverMenu.ItemGroup>
            {onOpenBackgroundAgent != null ? (
              <PopoverMenu.ItemButton onClick={() => onOpenBackgroundAgent()}>
                <PopoverMenu.ItemLabel>
                  <MemoizedFormattedMessage
                    id="codex.localConversation.backgroundAgent.open"
                    defaultMessage="Open background agent"
                    description="Opens a background agent from the summary"
                  />
                </PopoverMenu.ItemLabel>
              </PopoverMenu.ItemButton>
            ) : null}
            {onOpenSubagentsPanel != null ? (
              <PopoverMenu.ItemButton onClick={() => onOpenSubagentsPanel()}>
                <PopoverMenu.ItemLabel>
                  <MemoizedFormattedMessage
                    id="codex.localConversation.subagents.open"
                    defaultMessage="Open subagents"
                    description="Opens the subagents panel from the summary"
                  />
                </PopoverMenu.ItemLabel>
              </PopoverMenu.ItemButton>
            ) : null}
          </PopoverMenu.ItemGroup>
        ) : null}
      </PopoverMenu.Section>

      {/* topazR1 → sectionKey "usage" */}
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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
        <PopoverMenu.Section
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

      {/* kelpR3 → sectionKey "browser" / browser-tabs */}
      <PopoverMenu.Section
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
      <PopoverMenu.Section
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

/** Soft trigger peer (`reefR1` / NativeContextMenuSurface) — no-op mount. */
function SoftSummaryTrigger(): ReactElement {
  return <div data-local-thread-summary-trigger="" hidden aria-hidden />;
}

/**
 * Bundle `novaR1` / `localConversationThreadH` — floating + inline summary panel.
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

  const sections = (
    <ThreadSummarySections
      isVisible={inlinePopoverContent ? true : shouldShow}
      registerEnvironmentActionCommands={registerEnvironmentActionCommands}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      onOpenPullRequestSidePanel={onOpenPullRequestSidePanel}
      onOpenSubagentsPanel={onOpenSubagentsPanel}
    />
  );

  if (inlinePopoverContent) {
    return (
      <PopoverMenu.PopoverContent>
        <SoftSummaryTrigger />
        <PopoverMenu.Content>{sections}</PopoverMenu.Content>
      </PopoverMenu.PopoverContent>
    );
  }

  if (!shouldShow && shouldHideInlineImmediately) return null;

  return (
    <PopoverMenu.Root
      shouldHideInlineImmediately={shouldHideInlineImmediately}
      shouldShow={shouldShow}
    >
      <SoftSummaryTrigger />
      <PopoverMenu.Content>{sections}</PopoverMenu.Content>
    </PopoverMenu.Root>
  );
}

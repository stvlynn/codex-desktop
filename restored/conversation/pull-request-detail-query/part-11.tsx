// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/21
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { ensureUsageSettingsAccessInit as EnsureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Lo_Init as EnsureConversationPageEsm_Lo_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { findBrowserTabById } from "../../browser/find-browser-tab-by-id";
import { writeCodexThreadDeeplink as WriteCodexThreadDeeplink } from "../../clipboard/write-codex-thread-deeplink";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { primaryRuntimeDiagnosticsQueryKey } from "../../desktop/primary-runtime-diagnostics-query-key";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { DiffLinesStatsBadge } from "../../diff/diff-lines-stats-badge";
import { pullRequestsPageDetailCommentUnknownAuthor } from "../../git/pull-requests-page-detail-comment-unknown-author";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { usePlatformAwareFeatureGate as UsePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconCn } from "../../icons/app-icon-cn";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconUD } from "../../icons/app-icon-review-commit-glyph";
import { AppIconTG } from "../../icons/app-icon-tg";
import { AppIconTv } from "../../icons/app-icon-tv";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensurePetAutomationDayLookbackInit } from "../../pets/pet-automation-day-lookback";
import { ensureGoogleDriveConnectorIconsInit } from "../../plugins/ensure-google-drive-connector-icons-init";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { gpuTearingDebugSettingsAtom } from "../../settings/gpu-tearing-debug-settings";
import { ensureHooksQueriesInit, writeHooksStateMutationAtom as WriteHooksStateMutationAtom } from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { getSettingValue } from "../../settings/settings-values";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { AvatarCornerBadge } from "../../ui/avatar-corner-badge";
import { CopyButton } from "../../ui/copy-button";
import { deferredT1 } from "../../ui/deferred-t1";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU as DeferredUiU } from "../../ui/deferred-ui-u";
import { DETAIL_PAGE_STACK_CLASS, DetailPageSection, DetailPageSectionHeader, ensureDetailPageInit, ensureDetailPageSectionHeaderInit as EnsureDetailPageSectionHeaderInit } from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { LazyValueChildrenProvider } from "../../ui/lazy-value-children-provider";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { PopoverMenu } from "../../ui/popover-menu";
import { toolbar } from "../../ui/toolbar";
import { CircleDashedIcon, ensureCircleDashedIconInit as EnsureCircleDashedIconInit, ensureToolbarCircleDashedButtonInit as EnsureToolbarCircleDashedButtonInit, ToolbarCircleDashedButton } from "../../ui/toolbar-circle-dashed-button";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isString as IsString } from "../../utils/is-string";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { toPosixPath } from "../../utils/workspace-paths";
import { ArchiveChatHeartbeatConfirmDialog } from "../archive-chat-heartbeat-confirm-dialog";
import { deferredConversationSo } from "../deferred-conversation-so";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";
import { buildGithubPullRequestUrl } from "../github-pull-request-urls";

// Wave5d soft stubs.
const SetRemoteControlEnabledForHost: any = undefined;
const pullRequestDetailQueryY: any = undefined;

export function _pullRequestDetailQueryP(cedar4: unknown) {
  let {
      additions,
      baseBranch,
      checks,
      checksHaveError = false,
      checksAreLoading = false,
      children,
      comments,
      commentsHaveError = false,
      commentsAreLoading = false,
      deletions,
      headBranch,
      reviewersValue
    } = cedar4,
    daisy4 = headBranch == null && baseBranch == null ? null : <SetRemoteControlEnabledForHost {...{
      icon: <CoerceLocalFilesystemPath {...{
        className: "icon-sm shrink-0 text-token-text-tertiary"
      }} />,
      label: <MemoizedFormattedMessage {...{
        id: "pullRequestOverview.branch",
        defaultMessage: "Branch",
        description: "Branch field label in the pull request overview"
      }} />,
      children: <span className="flex min-w-0 items-center gap-2">{headBranch == null ? null : <span className="truncate">{headBranch}</span>}{headBranch != null && baseBranch != null ? <AppIconYlt {...{
          "aria-hidden": true,
          className: "icon-2xs shrink-0 text-token-text-tertiary"
        }} /> : null}{baseBranch == null ? null : <span className="truncate">{baseBranch}</span>}{additions != null && deletions != null ? <DiffLinesStatsBadge {...{
          className: "ms-1 shrink-0",
          linesAdded: additions,
          linesRemoved: deletions
        }} /> : null}</span>
    }} />;
  let ember4, flint4;
  ember4 = <UsePlatformAwareFeatureGate {...{
    className: "icon-sm shrink-0 text-token-text-tertiary"
  }} />;
  flint4 = <MemoizedFormattedMessage {...{
    id: "pullRequestOverview.reviewers",
    defaultMessage: "Reviewers",
    description: "Reviewer field label in the pull request overview"
  }} />;
  let garnet4 = <SetRemoteControlEnabledForHost {...{
    icon: ember4,
    label: flint4,
    children: reviewersValue
  }} />;
  let hazel4, ivory4;
  ivory4 = <AppIconCn {...{
    className: "icon-sm shrink-0 text-token-text-tertiary"
  }} />;
  hazel4 = <MemoizedFormattedMessage {...{
    id: "pullRequestOverview.comments",
    defaultMessage: "Comments",
    description: "Comments field label in the pull request overview"
  }} />;
  let jasper4 = <SetRemoteControlEnabledForHost {...{
    icon: ivory4,
    label: hazel4,
    children: <Frost {...{
      data: comments,
      hasError: commentsHaveError,
      loading: commentsAreLoading
    }} />
  }} />;
  let kelp4 = <span className="inline-flex shrink-0 text-token-text-tertiary [&_svg]:text-token-text-tertiary">{<Drift {...{
      data: checks,
      hasError: checksHaveError,
      loading: checksAreLoading
    }} />}</span>;
  let lotus4 = <MemoizedFormattedMessage {...{
    id: "pullRequestOverview.checks",
    defaultMessage: "Checks",
    description: "Checks field label in the pull request overview"
  }} />;
  let mint4 = <Eagle {...{
    data: checks,
    hasError: checksHaveError,
    loading: checksAreLoading
  }} />;
  let nova4 = <SetRemoteControlEnabledForHost {...{
    icon: kelp4,
    label: lotus4,
    children: mint4
  }} />;
  return <dl className="flex flex-col px-[var(--detail-page-inline-inset,0px)] pb-2 select-none">{daisy4}{garnet4}{jasper4}{nova4}{children}</dl>;
}
function Drift(olive4) {
  let {
    data,
    hasError,
    loading
  } = olive4;
  if (hasError) {
    let prism4;
    return <WriteCodexThreadDeeplink {...{
      className: "icon-sm shrink-0"
    }} />;
  }
  if (loading || data == null) {
    let quill4;
    return <VSCODE_EDITOR_ID {...{
      className: "icon-sm shrink-0"
    }} />;
  }
  return ArchiveChatHeartbeatConfirmDialog(data);
}
function Eagle(reef4) {
  let {
    data,
    hasError,
    loading
  } = reef4;
  if (hasError) {
    let sage4;
    return <MemoizedFormattedMessage {...{
      id: "pullRequestOverview.checks.error",
      defaultMessage: "Couldn’t load checks",
      description: "Checks error label in the pull request overview"
    }} />;
  }
  if (loading || data == null) {
    let topaz4;
    return <MemoizedFormattedMessage {...{
      id: "pullRequestOverview.checks.loading",
      defaultMessage: "Loading",
      description: "Loading checks value in the pull request overview"
    }} />;
  }
  switch (data.ciStatus) {
    case "failing":
      {
        let ultra4;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestSidePanel.overview.checks.failing",
          defaultMessage: "Failing",
          description: "Failing checks value in the pull request overview"
        }} />;
      }
    case "none":
      {
        let vapor4;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestSidePanel.overview.checks.none",
          defaultMessage: "No CI checks",
          description: "No checks value in the pull request overview"
        }} />;
      }
    case "passing":
      {
        let wheat4;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestSidePanel.overview.checks.passing",
          defaultMessage: "Successful",
          description: "Successful checks value in the pull request overview"
        }} />;
      }
    case "pending":
      {
        let yarn4;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestSidePanel.overview.checks.pending",
          defaultMessage: "Pending",
          description: "Pending checks value in the pull request overview"
        }} />;
      }
  }
}
function Frost(zephyr4) {
  let {
    data,
    hasError,
    loading
  } = zephyr4;
  if (hasError) {
    let bloom4;
    return <MemoizedFormattedMessage {...{
      id: "pullRequestOverview.comments.error",
      defaultMessage: "Couldn’t load comments",
      description: "Comments error label in the pull request overview"
    }} />;
  }
  if (loading || data == null) {
    let coral4;
    return <MemoizedFormattedMessage {...{
      id: "pullRequestOverview.comments.loading",
      defaultMessage: "Loading comments",
      description: "Loading comments label in the pull request overview"
    }} />;
  }
  let acorn4 = pullRequestDetailQueryY(data.activityItems);
  return <MemoizedFormattedMessage {...{
    id: "pullRequestDetail.metadata.commentCount",
    defaultMessage: "{count, plural, =0 {No comments} one {# comment} other {# comments}}",
    description: "Pull request comment count in pull request details",
    values: {
      count: acorn4.length
    }
  }} />;
}

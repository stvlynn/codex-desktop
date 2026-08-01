// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/21
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
const AppInitialAp: any = undefined;
const AppInitialJp: any = undefined;
const AppInitialZE: any = undefined;
const amber: any = undefined;
const cedar: any = undefined;
const deferredUiEnt: any = undefined;
const pullRequestMediaS: any = undefined;

var lemon,
  marble,
  nickel,
  onyx = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    marble = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureConversationPageEsm_GZ_Init();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    WritingBlockRenderer();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    ensureDropdownMenuPopoverInit();
    isIndeterminate();
    isRemoteControlConnectionFailedError();
    ensureAppScopeInit();
    pullRequestMediaS();
  }),
  pearl,
  quartz = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureAppScopeInit();
    AppInitialAp();
    pearl = clearActiveOverlayAfterNavigate(appScopeAtom, (quiet2, {
      get
    }) => get(AppInitialJp, {
      request: quiet2,
      source: "pull_requests_page"
    }).data ?? null);
  });
function River(rain2) {
  let {
      items,
      labelTone = "tertiary",
      wrapLabels = false
    } = rain2,
    seed2 = labelTone === "primary" ? "default" : "tertiary",
    trail2;
  {
    let urn2;
    urn2 = vine2 => {
      let wind2 = <>{<PopoverMenu.ItemLeading {...{
            variant: "custom",
            children: vine2.icon
          }} />}{<PopoverMenu.ItemLabel {...{
            className: wrapLabels ? "wrap-anywhere" : undefined,
            truncate: !wrapLabels,
            children: vine2.tooltipContent == null ? vine2.label : <OptionalTooltip {...{
              tooltipContent: vine2.tooltipContent,
              children: <span className={wrapLabels ? "wrap-anywhere" : "truncate"}>{vine2.label}</span>
            }} />
          }} />}</>,
        yarrow2 = vine2.trailing == null ? null : <PopoverMenu.ItemMeta {...{
          visibility: vine2.trailingVisible === false ? "interaction" : "always",
          onClick: vine2.action == null ? undefined : vine2.onClick,
          children: vine2.trailing
        }} />;
      return vine2.action == null ? vine2.onClick == null ? <PopoverMenu.Item key={vine2.id} {...{
        className: vine2.className,
        tone: seed2,
        children: [wind2, yarrow2]
      }} /> : <PopoverMenu.ItemButton key={vine2.id} {...{
        className: vine2.className,
        onClick: vine2.onClick,
        tone: seed2,
        children: [wind2, yarrow2]
      }} /> : <PopoverMenu.Item key={vine2.id} {...{
        className: vine2.className,
        interactive: vine2.onClick != null,
        tone: seed2,
        children: [vine2.onClick == null ? wind2 : <PopoverMenu.ItemTrigger {...{
          onClick: vine2.onClick,
          children: wind2
        }} />, <PopoverMenu.ItemActions {...{
          children: vine2.action
        }} />, yarrow2]
      }} />;
    };
    trail2 = items.map(urn2);
  }
  return <PopoverMenu.ItemGroup {...{
    children: trail2
  }} />;
}
var slate,
  timber,
  umbra = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_Hlt_Init();
    AppInitialZE();
  });
export function PullRequestDetailQueryT(azure2: unknown) {
  let {
      canFix = false,
      checks,
      fixTooltipContent,
      insetFixButtons = false,
      isCheckAttached,
      labelTone = "tertiary",
      onFixCheck,
      onRemoveCheck,
      wrapLabels = false
    } = azure2,
    birch2;
  {
    let dew2;
    dew2 = (alpha3, bravo3) => {
      let copper3 = alpha3.link,
        delta3 = !!isCheckAttached?.(alpha3),
        echo3 = delta3 ? onRemoveCheck : onFixCheck;
      return {
        action: alpha3.status === "failing" && echo3 != null ? <EnsureToolbarCircleDashedButtonInit {...{
          disabled: !delta3 && !canFix,
          inset: insetFixButtons,
          tooltipContent: fixTooltipContent,
          onClick: () => echo3(alpha3),
          children: delta3 ? <MemoizedFormattedMessage {...{
            id: "localConversation.pullRequest.actions.checks.remove",
            defaultMessage: "Remove",
            description: "Per-check action label for removing a failing pull request check from the task"
          }} /> : <MemoizedFormattedMessage {...{
            id: "localConversation.pullRequest.actions.checks.fix",
            defaultMessage: "Fix",
            description: "Per-check action label for fixing a single failing pull request check"
          }} />
        }} /> : undefined,
        className: copper3 == null ? undefined : "before:hidden",
        icon: Xenon(alpha3.status),
        id: bravo3,
        label: <span className="inline-flex max-w-full min-w-0 items-center gap-1.5"><span className={wrapLabels ? "wrap-anywhere" : "truncate"}>{alpha3.name}</span>{copper3 == null ? null : <HostFeatureConfigToggles {...{
            className: "icon-xs shrink-0 opacity-0 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100",
            href: copper3
          }} />}</span>,
        onClick: copper3 == null ? undefined : falcon3 => {
          deferredUiEnt({
            event: falcon3,
            href: copper3,
            initiator: "pull_request_link"
          });
        },
        tooltipContent: <Yellow {...{
          status: alpha3.status
        }} />,
        trailing: <span className="text-sm text-token-text-tertiary">{Willow(alpha3.status)}</span>
      };
    };
    birch2 = amber.default(checks, Violet).map(dew2);
  }
  let canyon2 = birch2;
  return <River {...{
    items: canyon2,
    labelTone: labelTone,
    wrapLabels: wrapLabels
  }} />;
}
function Violet(gamma3) {
  return cedar[gamma3.status];
}
function Willow(harbor3) {
  switch (harbor3) {
    case "failing":
      return <MemoizedFormattedMessage {...{
        id: "pullRequestSidePanel.checks.status.failed",
        defaultMessage: "Failed",
        description: "Status label for a failed pull request check"
      }} />;
    case "pending":
      return <MemoizedFormattedMessage {...{
        id: "pullRequestSidePanel.checks.status.inProgress",
        defaultMessage: "In progress",
        description: "Status label for an in-progress pull request check"
      }} />;
    case "passing":
      return <MemoizedFormattedMessage {...{
        id: "pullRequestSidePanel.checks.status.passed",
        defaultMessage: "Passed",
        description: "Status label for a passed pull request check"
      }} />;
    case "skipped":
      return <MemoizedFormattedMessage {...{
        id: "pullRequestSidePanel.checks.status.skipped",
        defaultMessage: "Skipped",
        description: "Status label for a skipped pull request check"
      }} />;
    case "neutral":
      return <MemoizedFormattedMessage {...{
        id: "pullRequestSidePanel.checks.status.neutral",
        defaultMessage: "Neutral",
        description: "Status label for a neutral pull request check"
      }} />;
    case "unknown":
      return <MemoizedFormattedMessage {...{
        id: "pullRequestSidePanel.checks.status.unknown",
        defaultMessage: "Unknown",
        description: "Status label for a pull request check with unknown status"
      }} />;
  }
}
function Xenon(indigo3) {
  switch (indigo3) {
    case "failing":
      return <WriteCodexThreadDeeplink {...{
        className: "icon-sm shrink-0 text-token-charts-red"
      }} />;
    case "pending":
      return <EnsureConversationPageEsm_Lo_Init {...{
        className: "icon-sm shrink-0 text-token-charts-yellow"
      }} />;
    case "passing":
      return <WriteHooksStateMutationAtom {...{
        className: "icon-sm shrink-0 text-token-charts-green"
      }} />;
    case "neutral":
    case "skipped":
    case "unknown":
      return <EnsureCircleDashedIconInit {...{
        className: "icon-sm shrink-0 text-token-text-tertiary"
      }} />;
  }
}
function Yellow(jade3) {
  let {
    status
  } = jade3;
  switch (status) {
    case "failing":
      {
        let kite3;
        return <MemoizedFormattedMessage {...{
          id: "localConversation.pullRequest.actions.checks.tooltip.failed",
          defaultMessage: "Failed test",
          description: "Tooltip shown for an individual failed pull request check"
        }} />;
      }
    case "pending":
      {
        let lemon3;
        return <MemoizedFormattedMessage {...{
          id: "localConversation.pullRequest.actions.checks.tooltip.pending",
          defaultMessage: "Pending test",
          description: "Tooltip shown for an individual pending pull request check"
        }} />;
      }
    case "skipped":
      {
        let marble3;
        return <MemoizedFormattedMessage {...{
          id: "localConversation.pullRequest.actions.checks.tooltip.skipped",
          defaultMessage: "Skipped test",
          description: "Tooltip shown for an individual skipped pull request check"
        }} />;
      }
    case "neutral":
      {
        let nickel3;
        return <MemoizedFormattedMessage {...{
          id: "localConversation.pullRequest.actions.checks.tooltip.neutral",
          defaultMessage: "Neutral test",
          description: "Tooltip shown for an individual neutral pull request check"
        }} />;
      }
    case "passing":
      {
        let onyx3;
        return <MemoizedFormattedMessage {...{
          id: "localConversation.pullRequest.actions.checks.tooltip.passed",
          defaultMessage: "Passed test",
          description: "Tooltip shown for an individual passed pull request check"
        }} />;
      }
    case "unknown":
      {
        let pearl3;
        return <MemoizedFormattedMessage {...{
          id: "localConversation.pullRequest.actions.checks.tooltip.unknown",
          defaultMessage: "Unknown test status",
          description: "Tooltip shown for an individual pull request check with unknown status"
        }} />;
      }
  }
}

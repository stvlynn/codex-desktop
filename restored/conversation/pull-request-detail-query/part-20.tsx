// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 20/21
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { ensureUsageSettingsAccessInit as EnsureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Lo_Init as EnsureConversationPageEsm_Lo_Init } from "../../boundaries/conversation-page-esm-inits";
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
const Alpha: any = undefined;
const AppInitialAD: any = undefined;
const AppInitialEv: any = undefined;
const AppInitialID: any = undefined;
const AppInitialJp: any = undefined;
const AppInitialLD: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialPm: any = undefined;
const AppInitialQtt: any = undefined;
const AppInitialVZ: any = undefined;
const Brook: any = undefined;
const CommitModal: any = undefined;
const Dismiss: any = undefined;
const EnsureEnvironmentLabelsSDInit: any = undefined;
const Gamma: any = undefined;
const Hill: any = undefined;
const Indigo: any = undefined;
const LocalConversationGitActions3: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const deferredUiEnt: any = undefined;
const ensureEnvironmentLabelsFDInit: any = undefined;
const ensureEnvironmentLabelsPDInit: any = undefined;
const falcon: any = undefined;
const grove: any = undefined;
const harbor: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const pullRequestDetailQueryD: any = undefined;
const pullRequestDetailQueryG: any = undefined;
const pullRequestDetailQueryW: any = undefined;
const quartz: any = undefined;
const vitePreload: any = undefined;

function Lagoon(pine5) {
  switch (pine5) {
    case "approved":
      return {
        Icon: AppIconTv,
        iconClassName: "text-token-charts-green"
      };
    case "changes_requested":
      return {
        Icon: Chatgpt2,
        iconClassName: "text-token-charts-red"
      };
    case "merged":
      return {
        Icon: ensureEnvironmentLabelsFDInit,
        iconClassName: "text-token-charts-purple"
      };
    case "opened":
      return {
        Icon: AppIconUD,
        iconClassName: "text-token-charts-green"
      };
  }
}
var meadow,
  nest,
  oak = esmInit(() => {
    meadow = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureImportSettingsCLInit();
    AppInitialEv();
    ensureEnvironmentLabelsPDInit();
    LocalConversationGitActions3();
    ensureConversationPageEsm_Act_Init();
    pullRequestDetailQueryG();
    pullRequestDetailQueryW();
  });
function Petal(quest5) {
  let {
      request
    } = quest5,
    ridge5 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    storm5 = CodexBrowserSurfaceActionType(pearl, request),
    tide5 = useIntl(),
    unity5 = CodexPluginActionResult(harbor),
    vale5 = wind.useId();
  if (storm5 == null) return null;
  let wave5 = request.account,
    apex5 = storm5.title?.trim() || `${storm5.pullRequest.owner}/${storm5.pullRequest.repository}`;
  let brook5 = apex5,
    cliff5 = tide5.formatMessage({
      id: "pullRequestDetail.openInBrowser",
      defaultMessage: "Open in browser",
      description: "Button to open the pull request in the default browser"
    });
  let dusk5 = cliff5,
    elm5 = function (dew5) {
      Gamma(ridge5, dew5);
    };
  let fern5 = elm5,
    grove5 = alpha6 => {
      deferredUiEnt({
        event: alpha6,
        href: buildGithubPullRequestUrl(storm5.pullRequest),
        initiator: "pull_request_link",
        useExternalBrowser: true
      });
    };
  let hill5 = <AppIconKtt {...{
    "aria-hidden": true,
    className: "icon-xs"
  }} />;
  let isle5 = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": dusk5,
    color: "ghostActive",
    size: "toolbar",
    uniform: true,
    onClick: grove5,
    children: hill5
  }} />;
  let juniper5 = <OptionalTooltip {...{
    tooltipContent: dusk5,
    children: isle5
  }} />;
  let lagoon5 = storm5.isAuthor && storm5.state === "open" ? <Indigo {...{
    account: wave5,
    detail: storm5,
    placement: "header"
  }} /> : null;
  let meadow5 = storm5.state !== "open" || storm5.isAuthor ? null : <Alpha {...{
    account: wave5,
    expectedHeadRevision: storm5.headRevision,
    pullRequest: storm5.pullRequest
  }} />;
  let nest5 = <AppInitialVZ />;
  let oak5 = <>{juniper5}{lagoon5}{meadow5}{nest5}</>;
  let petal5 = <Quiet {...{
    detail: storm5
  }} />;
  let quiet5 = <span className="max-w-[200px] truncate text-sm text-token-text-primary [@container_app-shell-detail-panel_(max-width:899px)]:hidden" title={brook5}>{brook5}</span>;
  let rain5 = <>{petal5}{quiet5}</>;
  let seed5 = tide5.formatMessage({
    id: "pullRequestDetail.tabs",
    defaultMessage: "Pull request view",
    description: "Accessible label for pull request detail tabs"
  });
  let trail5 = yarrow.map(item => <ReadLoginRouteQuerySnapshot key={item} {...{
    id: Trail(vale5, item),
    "aria-controls": Urn(vale5, item),
    "aria-selected": unity5 === item,
    color: unity5 === item ? "secondary" : "ghost",
    role: "tab",
    size: "toolbar",
    tabIndex: unity5 === item ? 0 : -1,
    onClick: () => {
      fern5(item);
    },
    onKeyDown: bravo6 => {
      Seed(bravo6, item, fern5);
    },
    children: <Rain {...{
      tab: item
    }} />
  }} />);
  let urn5 = <div aria-label={seed5} className="flex min-w-0 items-center gap-0.5 overflow-x-auto [padding-inline-start:var(--pull-request-tab-inset,0px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">{trail5}</div>;
  let vine5 = Urn(vale5, unity5);
  let wind5 = Trail(vale5, unity5);
  let yarrow5 = unity5 === "summary" ? <Brook {...{
    request
  }} /> : null;
  let azure5 = unity5 === "timeline" ? <Hill {...{
    account: wave5,
    items: storm5.activityItems,
    pullRequest: storm5.pullRequest
  }} /> : null;
  let birch5 = unity5 === "code" ? <wind.Suspense {...{
    fallback: <div className="flex h-full items-center justify-center" role="status">{<VSCODE_EDITOR_ID {...{}} />}<span className="sr-only">{<MemoizedFormattedMessage {...{
          id: "pullRequestDetail.code.loadingShell",
          defaultMessage: "Loading Code view",
          description: "Accessible loading state for the lazy Code tab"
        }} />}</span></div>,
    children: <Azure {...{
      request,
      baseBranch: storm5.baseBranch,
      headRevision: storm5.headRevision,
      headBranch: storm5.headBranch
    }} />
  }} /> : null;
  let canyon5 = <div id={vine5} aria-labelledby={wind5} className="relative min-h-0 flex-1" role="tabpanel">{yarrow5}{azure5}{birch5}</div>;
  return <AppIconAZ.DetailPanel {...{
    actions: oak5,
    leading: rain5,
    navigation: urn5,
    showCloseButton: false,
    children: canyon5
  }} />;
}
function Quiet(copper6) {
  let {
    detail
  } = copper6;
  if (detail.state !== "open") {
    let gamma6;
    return <EnsureEnvironmentLabelsSDInit {...{
      className: "icon-sm shrink-0",
      status: detail.state
    }} />;
  }
  let delta6 = detail.mergeBlocker === "conflicts",
    echo6 = detail.isDraft ? "draft" : "open",
    falcon6 = AppInitialID({
      canMerge: detail.canMerge,
      ciStatus: detail.ciStatus,
      hasMergeConflicts: delta6,
      status: echo6
    });
  return <CommitModal {...{
    className: "icon-sm shrink-0",
    state: falcon6
  }} />;
}
function Rain(harbor6) {
  let {
    tab
  } = harbor6;
  switch (tab) {
    case "summary":
      {
        let indigo6;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.tab.summary",
          defaultMessage: "Summary",
          description: "Summary tab label in the pull request detail view"
        }} />;
      }
    case "timeline":
      {
        let jade6;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.tab.timeline",
          defaultMessage: "Timeline",
          description: "Timeline tab label in the pull request detail view"
        }} />;
      }
    case "code":
      {
        let kite6;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.tab.code",
          defaultMessage: "Code",
          description: "Code tab label in the pull request detail view"
        }} />;
      }
  }
}
function Seed(event, lemon6, marble6) {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  let nickel6 = yarrow.indexOf(lemon6),
    onyx6 = event.key === "ArrowRight" ? 1 : -1,
    pearl6 = yarrow[(nickel6 + onyx6 + yarrow.length) % yarrow.length];
  pearl6 != null && (marble6(pearl6), event.currentTarget.parentElement?.querySelectorAll("[role=\"tab\"]")?.[yarrow.indexOf(pearl6)]?.focus());
}
function Trail(quartz6, river6) {
  return `${quartz6}-pull-request-${river6}-tab`;
}
function Urn(slate6, timber6) {
  return `${slate6}-pull-request-${timber6}-panel`;
}
var vine,
  wind,
  $,
  yarrow,
  Azure,
  birch = esmInit(() => {
    vine = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    wind = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialOZ();
    toolbar();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    AppInitialQtt();
    AppInitialLD();
    AppInitialAD();
    filterConversationTimelineItems();
    falcon();
    AppInitialPm();
    pullRequestDetailQueryD();
    onyx();
    quartz();
    grove();
    oak();
    ensureViteModulepreloadRuntime();
    yarrow = ["summary", "timeline", "code"];
    Azure = wind.lazy(async () => ({
      default: (await vitePreload(async () => {
        let {
          PullRequestCodeReview
        } = await import("../pull-request-code-review");
        return {
          PullRequestCodeReview
        };
      })).PullRequestCodeReview
    }));
  });
export function _pullRequestDetailQueryN(umbra6: unknown) {
  let {
      request,
      summaryOnly
    } = umbra6,
    violet6 = {
      request,
      source: "pull_requests_page"
    };
  let willow6 = CodexBrowserSurfaceActionType(AppInitialJp, violet6);
  if (willow6.isLoading) {
    let xenon6;
    return <_pullRequestDetailQueryT {...{
      error: null,
      isLoading: true,
      onRetry: Canyon
    }} />;
  }
  if (willow6.data == null) {
    let yellow6 = willow6.error?.message ?? null,
      zinc6 = () => {
        willow6.refetch();
      };
    let amber6;
    return <_pullRequestDetailQueryT {...{
      error: yellow6,
      isLoading: false,
      onRetry: zinc6
    }} />;
  }
  return summaryOnly ? <Brook {...{
    request
  }} /> : <Petal {...{
    request
  }} />;
}
function Canyon() {}
export function _pullRequestDetailQueryT(basalt6: unknown) {
  let {
    error,
    isLoading,
    onRetry
  } = basalt6;
  if (isLoading) {
    let flint6;
    return <AppIconAZ.DetailPanelLoading {...{
      loadingLabel: <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.loading",
        defaultMessage: "Loading pull request details",
        description: "Accessible status while pull request details load"
      }} />,
      showCloseButton: false
    }} />;
  }
  let cedar6 = <MemoizedFormattedMessage {...{
    id: "pullRequestDetail.retry",
    defaultMessage: "Try again",
    description: "Action to retry loading pull request details"
  }} />;
  let daisy6 = <ReadLoginRouteQuerySnapshot {...{
    onClick: onRetry,
    children: cedar6
  }} />;
  let ember6 = <MemoizedFormattedMessage {...{
    id: "pullRequestDetail.unavailable",
    defaultMessage: "Pull request details are unavailable",
    description: "Error title when pull request details are unavailable"
  }} />;
  return <AppIconAZ.DetailPanel {...{
    showCloseButton: false,
    children: <Dismiss {...{
      className: "h-full",
      actions: daisy6,
      description: error,
      title: ember6
    }} />
  }} />;
}
var dew, alpha1;

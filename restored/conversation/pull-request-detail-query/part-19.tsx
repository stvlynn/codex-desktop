// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 19/21
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
const AppInitialC: any = undefined;
const DeferredUiA22: any = undefined;
const DeferredUiV2: any = undefined;
const Indigo: any = undefined;
const IntlProvider: any = undefined;
const Lagoon: any = undefined;
const PullRequestDetailQueryC: any = undefined;
const PullRequestDetailQueryH: any = undefined;
const PullRequestDetailQueryI: any = undefined;
const PullRequestDetailQueryL: any = undefined;
const PullRequestDetailQueryT: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const _pullRequestDetailQueryA: any = undefined;
const _pullRequestDetailQueryC: any = undefined;
const _pullRequestDetailQueryD: any = undefined;
const _pullRequestDetailQueryF: any = undefined;
const _pullRequestDetailQueryM: any = undefined;
const _pullRequestDetailQueryO: any = undefined;
const _pullRequestDetailQueryP: any = undefined;
const _pullRequestDetailQueryS: any = undefined;
const deferredNavigationEN: any = undefined;
const deferredUiEG: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const pullRequestDetailQueryB: any = undefined;
const pullRequestDetailQueryE: any = undefined;
const pullRequestDetailQueryG: any = undefined;
const pullRequestDetailQueryS: any = undefined;
const pullRequestDetailQueryU: any = undefined;
const pullRequestDetailQueryUnderscore: any = undefined;
const pullRequestDetailQueryV: any = undefined;
const pullRequestDetailQueryW: any = undefined;
const pullRequestDetailQueryY: any = undefined;
const pullRequestMediaA: any = undefined;
const pullRequestMediaJ: any = undefined;
const pullRequestMediaO: any = undefined;
const pullRequestMediaS: any = undefined;
const pullRequestMediaW: any = undefined;
const quartz: any = undefined;
const remoteHostedPipHiddenThreadIds: any = undefined;
const sidebarElectronPinThread: any = undefined;

function Brook(oak4) {
  let {
      request
    } = oak4,
    petal4 = CodexPluginActionType(appScopeAtom),
    quiet4 = useIntl(),
    rain4 = CodexBrowserSurfaceActionType(pearl, request),
    seed4 = CodexBrowserSurfaceActionType(pullRequestMediaW, request),
    [trail4, urn4] = _i.useState(null),
    [vine4, wind4] = _i.useState(null),
    yarrow4,
    azure4;
  if (yarrow4 = () => () => {
    vine4?.abort();
  }, azure4 = [vine4], _i.useEffect(yarrow4, azure4), rain4 == null) return null;
  let birch4 = request.account,
    canyon4 = pullRequestDetailQueryY(rain4.activityItems);
  let dew4 = canyon4,
    alpha5 = pullRequestDetailQueryUnderscore(rain4.commentAttachments);
  let bravo5 = alpha5,
    copper5 = pullRequestDetailQueryB(rain4.reviewers);
  let delta5 = copper5,
    echo5 = rain4.title?.trim() || null;
  let falcon5 = echo5,
    gamma5 = rain4.authorLogin,
    harbor5 = rain4.authorAvatarUrl ?? remoteHostedPipHiddenThreadIds(gamma5, 32);
  let indigo5 = harbor5,
    jade5 = rain4.isAuthor && rain4.state === "open",
    kite5 = jade5 && appServices.pullRequestMessageGeneration != null,
    lemon5 = trail4?.draft ?? rain4.body,
    marble5 = quiet4.formatMessage({
      id: "pullRequestDetail.description.actions",
      defaultMessage: "Description actions",
      description: "Button to edit or generate a pull request description"
    });
  let nickel5 = marble5,
    onyx5 = quiet4.formatMessage({
      id: "pullRequestDetail.description.edit",
      defaultMessage: "Edit description",
      description: "Button to edit a pull request description"
    });
  let pearl5 = onyx5,
    quartz5 = () => {
      if (seed4 || vine4 != null) return;
      let kelp5 = new AbortController();
      wind4(kelp5);
      urn4({
        draft: lemon5,
        error: null
      });
      pullRequestMediaJ({
        appServerVersion: petal4.get(DeferredUiA22, birch4.hostId),
        body: lemon5,
        detail: rain4,
        pullRequestInstructions: getSettingValue(petal4.get, gitSettingsDefinitions.pullRequestInstructions) ?? null,
        request,
        signal: kelp5.signal,
        title: falcon5
      }).then(value => {
        let lotus5 = petal4.get(pearl, request);
        kelp5.signal.aborted || lotus5?.isAuthor !== true || lotus5.state !== "open" || urn4(mint5 => mint5?.draft === lemon5 ? {
          draft: value,
          error: null
        } : mint5);
      }).catch(error => {
        kelp5.signal.aborted || urn4(nova5 => nova5 == null ? nova5 : {
          ...nova5,
          error: Dusk(error, quiet4)
        });
      }).finally(() => {
        wind4(olive5 => olive5 === kelp5 ? null : olive5);
      });
    };
  let river5 = quartz5,
    slate5 = jade5 ? <Indigo {...{
      account: birch4,
      detail: rain4,
      placement: "title"
    }} /> : undefined;
  let timber5 = gamma5 == null && indigo5 == null ? undefined : <span className="flex items-center gap-2">{indigo5 == null ? <UsePlatformAwareFeatureGate {...{
      className: "icon-sm shrink-0"
    }} /> : <img alt="" className="icon-sm shrink-0 rounded-full bg-white" src={indigo5} />}{gamma5}{rain4.createdAt == null ? null : <><span aria-hidden={true}>{<MemoizedFormattedMessage {...{
          id: "pullRequestDetail.authorDateSeparator",
          defaultMessage: "·",
          description: "Separator between pull request author and date"
        }} />}</span>{<INLINE_MENTION_GROUP_CLASS {...{
        dateString: rain4.createdAt
      }} />}</>}<span aria-hidden={true}>{<MemoizedFormattedMessage {...{
        id: "pullRequestDetail.reviewStateSeparator",
        defaultMessage: "·",
        description: "Separator before the pull request review state"
      }} />}</span>{rain4.isDraft ? <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.reviewState.draft",
      defaultMessage: "Draft",
      description: "Status indicating that a pull request is a draft"
    }} /> : <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.reviewState.ready",
      defaultMessage: "Ready for review",
      description: "Status indicating that a pull request is ready for review"
    }} />}</span>;
  let umbra5 = falcon5 ?? <MemoizedFormattedMessage {...{
    id: "pullRequestDetail.title.unavailable",
    defaultMessage: "Pull request",
    description: "Fallback title for a pull request"
  }} />;
  let violet5 = <div className="pt-4 select-text">{<EnsureUsageSettingsAccessInit {...{
      variant: "page",
      actions: slate5,
      subtitle: timber5,
      title: umbra5
    }} />}</div>;
  let willow5 = rain4.baseBranch?.trim() || null;
  let xenon5 = rain4.headBranch?.trim() || null;
  let yellow5 = <_pullRequestDetailQueryD {...{
    reviewers: delta5
  }} />;
  let zinc5 = <_pullRequestDetailQueryP {...{
    additions: rain4.additions,
    baseBranch: willow5,
    checks: rain4,
    comments: rain4,
    deletions: rain4.deletions,
    headBranch: xenon5,
    reviewersValue: yellow5
  }} />;
  let amber5 = kite5 ? <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "xs",
    disabled: seed4 || vine4 != null,
    triggerButton: <OptionalTooltip {...{
      side: "left",
      tooltipContent: nickel5,
      children: <ReadLoginRouteQuerySnapshot {...{
        "aria-label": nickel5,
        className: "h-7 w-7",
        color: "ghost",
        size: "icon",
        children: <CopyButton {...{
          "aria-hidden": true,
          className: "icon-xs"
        }} />
      }} />
    }} />,
    children: [trail4 == null ? <DropdownMenu.Item {...{
      LeftIcon: CopyButton,
      disabled: seed4 || vine4 != null,
      onSelect: () => {
        urn4({
          draft: rain4.body,
          error: null
        });
      },
      children: <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.description.edit",
        defaultMessage: "Edit description",
        description: "Button to edit a pull request description"
      }} />
    }} /> : null, <DropdownMenu.Item {...{
      LeftIcon: AppIconTG,
      disabled: seed4 || vine4 != null,
      onSelect: river5,
      children: <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.description.generate",
        defaultMessage: "Generate with Codex",
        description: "Menu item to generate a pull request description using the latest changes"
      }} />
    }} />]
  }} /> : jade5 && trail4 == null ? <OptionalTooltip {...{
    side: "left",
    tooltipContent: pearl5,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": pearl5,
      className: "h-7 w-7",
      color: "ghost",
      disabled: seed4,
      size: "icon",
      onClick: () => {
        urn4({
          draft: rain4.body,
          error: null
        });
      },
      children: <CopyButton {...{
        "aria-hidden": true,
        className: "icon-xs"
      }} />
    }} />
  }} /> : undefined;
  let basalt5 = trail4 == null ? undefined : {
    draft: trail4.draft,
    error: trail4.error,
    isGenerating: vine4 != null,
    isPending: seed4,
    onCancel: () => {
      vine4 == null ? urn4(null) : (vine4.abort(), wind4(null));
    },
    onChange: prism5 => {
      urn4({
        draft: prism5,
        error: null
      });
    },
    onSave: () => {
      let quill5 = petal4.get(pearl, request);
      seed4 || vine4 != null || quill5?.isAuthor !== true || quill5.state !== "open" || (urn4({
        ...trail4,
        error: null
      }), petal4.get(pullRequestMediaO, request).mutateAsync(trail4.draft).then(() => {
        urn4(null);
      }).catch(error => {
        urn4({
          ...trail4,
          error: error.message
        });
      }));
    }
  };
  let cedar5 = <PullRequestDetailQueryL {...{
    account: birch4,
    actions: amber5,
    body: rain4.body,
    editing: basalt5,
    loading: false
  }} />;
  let daisy5 = rain4.checks,
    ember5 = deferredConversationSo(rain4.ciStatus);
  let flint5 = rain4.partial.checks ? <_pullRequestDetailQueryC {...{
    type: "checks"
  }} /> : undefined;
  let garnet5 = <_pullRequestDetailQueryO {...{
    checks: daisy5,
    empty: ember5,
    loading: false,
    notice: flint5,
    renderChecks: Cliff
  }} />;
  let hazel5 = <PullRequestDetailQueryC {...{
    account: birch4,
    pullRequest: rain4.pullRequest
  }} />;
  let ivory5 = rain4.partial.reviews ? <_pullRequestDetailQueryC {...{
    type: "reviews"
  }} /> : undefined;
  let _e = reef5 => <PullRequestDetailQueryH {...{
    account: birch4,
    comment: reef5,
    commentAttachment: pullRequestDetailQueryV(reef5, bravo5),
    pullRequest: rain4.pullRequest
  }} />;
  let jasper5 = <_pullRequestDetailQueryS {...{
    comments: dew4,
    footer: hazel5,
    loading: false,
    notice: ivory5,
    renderComment: _e
  }} />;
  return <PullRequestDetailQueryI {...{
    header: violet5,
    overview: zinc5,
    description: cedar5,
    checks: garnet5,
    comments: jasper5
  }} />;
}
function Cliff(sage5) {
  return <PullRequestDetailQueryT {...{
    checks: sage5,
    labelTone: "primary",
    wrapLabels: true
  }} />;
}
function Dusk(topaz5, ultra5) {
  switch (topaz5 instanceof pullRequestMediaA ? topaz5.reason : "generation_failed") {
    case "unsupported":
      return ultra5.formatMessage({
        id: "pullRequestDetail.description.generationUnsupported",
        defaultMessage: "This host can't generate a pull request description",
        description: "Error shown when the current host cannot generate pull request descriptions"
      });
    case "target_changed":
    case "head_changed":
      return ultra5.formatMessage({
        id: "pullRequestDetail.description.generationPullRequestChanged",
        defaultMessage: "The pull request changed. Refresh and try again",
        description: "Error shown when a pull request changes while generating its description"
      });
    case "diff_failed":
      return ultra5.formatMessage({
        id: "pullRequestDetail.description.generationDiffFailed",
        defaultMessage: "Couldn't load the pull request changes",
        description: "Error shown when the pull request changes cannot be loaded for description generation"
      });
    case "status_failed":
      return ultra5.formatMessage({
        id: "pullRequestDetail.description.generationStatusFailed",
        defaultMessage: "Couldn't verify the pull request. Try again",
        description: "Error shown when the pull request cannot be verified after description generation"
      });
    case "generation_failed":
      return ultra5.formatMessage({
        id: "pullRequestDetail.description.generationError",
        defaultMessage: "Couldn't generate the pull request description",
        description: "Error shown when pull request description generation fails"
      });
    case "empty_result":
      return ultra5.formatMessage({
        id: "pullRequestDetail.description.generationEmpty",
        defaultMessage: "The generated description was empty. Try again",
        description: "Error shown when pull request description generation returns no content"
      });
  }
}
var elm,
  _i,
  fern,
  grove = esmInit(() => {
    elm = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    _i = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureImportSettingsCLInit();
    useUsageSettingsAccess();
    ensureComposerEsm_Hlt_Init();
    AppInitialC();
    deferredUiEG();
    isIndeterminate();
    sidebarElectronPinThread();
    deferredNavigationEN();
    pullRequestDetailQueryE();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    pullRequestMediaS();
    pullRequestDetailQueryG();
    pullRequestDetailQueryW();
    onyx();
    pullRequestDetailQueryS();
    quartz();
    _pullRequestDetailQueryM();
    _pullRequestDetailQueryF();
    pullRequestDetailQueryU();
    _pullRequestDetailQueryA();
  });
function Hill(vapor5) {
  let {
      account,
      items,
      pullRequest
    } = vapor5,
    wheat5 = items.length === 0 ? <div className="py-8 text-center text-token-text-tertiary">{<MemoizedFormattedMessage {...{
        id: "pullRequestDetail.timeline.empty",
        defaultMessage: "No timeline activity yet",
        description: "Empty state for a pull request timeline"
      }} />}</div> : <ol className="flex flex-col gap-4">{items.map(item => <li key={`${item.type}:${item.id}`}>{item.type === "event" ? <Isle {...{
          item
        }} /> : <PullRequestDetailQueryH {...{
          account,
          comment: item,
          commentAttachment: null,
          pullRequest
        }} />}</li>)}</ol>;
  let yarn5 = <PullRequestDetailQueryC {...{
    account,
    pullRequest
  }} />;
  return <div className="h-full overflow-y-auto"><div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-7">{wheat5}{yarn5}</div></div>;
}
function Isle(zephyr5) {
  let {
      item
    } = zephyr5,
    Acorn5,
    bloom5,
    coral5,
    drift5;
  {
    let {
      Icon,
      iconClassName
    } = Lagoon(item.event);
    drift5 = "flex items-center gap-3 rounded-[var(--radius-token-composer-single-line)] border border-token-border bg-token-main-surface-primary py-3 ps-3 pe-4";
    coral5 = "flex size-7 shrink-0 items-center justify-center rounded-full bg-token-bg-fog";
    Acorn5 = Icon;
    bloom5 = IntlProvider("icon-sm", iconClassName);
  }
  let eagle5 = <Acorn5 {...{
    className: bloom5
  }} />;
  let frost5 = <span className={coral5}>{eagle5}</span>;
  let glide5 = <div className="min-w-0 flex-1 text-base text-token-text-secondary">{<Juniper {...{
      item
    }} />}</div>;
  let honey5 = <span className="shrink-0 text-sm text-token-text-tertiary">{<INLINE_MENTION_GROUP_CLASS {...{
      dateString: item.createdAt
    }} />}</span>;
  return <div className={drift5}>{frost5}{glide5}{honey5}</div>;
}
function Juniper(iris5) {
  let {
      item
    } = iris5,
    jewel5 = item.actorLogin ?? <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.timeline.unknownActor",
      defaultMessage: "Someone",
      description: "Fallback actor for a pull request timeline event"
    }} />;
  let knoll5 = jewel5;
  switch (item.event) {
    case "approved":
      {
        let lunar5;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.timeline.approved",
          defaultMessage: "{actor} approved these changes",
          description: "Timeline event for an approved pull request review",
          values: {
            actor: knoll5
          }
        }} />;
      }
    case "changes_requested":
      {
        let moss5;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.timeline.changesRequested",
          defaultMessage: "{actor} requested changes",
          description: "Timeline event for requested pull request changes",
          values: {
            actor: knoll5
          }
        }} />;
      }
    case "merged":
      {
        let north5;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.timeline.merged",
          defaultMessage: "{actor} merged this pull request",
          description: "Timeline event for a merged pull request",
          values: {
            actor: knoll5
          }
        }} />;
      }
    case "opened":
      {
        let orbit5;
        return <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.timeline.opened",
          defaultMessage: "{actor} opened this pull request",
          description: "Timeline event for an opened pull request",
          values: {
            actor: knoll5
          }
        }} />;
      }
  }
}

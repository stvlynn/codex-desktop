// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 1/21
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { ensureUsageSettingsAccessInit as EnsureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init } from "../../boundaries/composer-esm-inits";
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
const pullRequestDetailQueryK: any = undefined;
const pullRequestDetailQueryO: any = undefined;

const SetRemoteControlEnabledForHost: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-a22.tsx) */
const DeferredUiA22: any = undefined;
/** Wave GA unresolved companion (jsx-collision:abortWorkspaceScopedRequest@git/abort-workspace-scoped-request.ts) */
const AppInitialAD: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-mutation-facades.ts) */
const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePullRequestMediaApInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialAp: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePersonalizationCInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialC: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/commit-modal.ts) */
const CommitModal: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/sidebar-electron-pin-thread.ts) */
const sidebarElectronPinThread: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/local-conversation-git-actions3.tsx) */
const LocalConversationGitActions3: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-e1.ts) */
const deferredUiE1: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-eg.tsx) */
const deferredUiEG: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/deferred-navigation-en-2.ts) */
const deferredNavigationEN: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:copyContinuousScale@d3/copy-continuous-scale.ts) */
const AppInitialEv: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsFDInit: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/apply-svg.tsx) */
const applySvg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiH@ui/deferred-ui-h.ts) */
const AppInitialH: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureEnvironmentLabelsIDInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialID: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/dismiss.ts) */
const Dismiss: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave GA unresolved companion (jsx-collision:projectDeletePermissionMessages@chatgpt/project-delete-permission-messages.ts) */
const AppInitialJm: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/codex-thread.tsx) */
const AppInitialJp: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureEnvironmentLabelsLDInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialLD: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const remoteHostedPipHiddenThreadIds: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-mk.tsx) */
const deferredUiMk: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsPDInit: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave GA unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredHostsHelperPm@hosts/deferred-hosts-helper-pm.ts) */
const AppInitialPm: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_Qtt_Init@boundaries/composer-esm-inits.ts) */
const AppInitialQtt: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const EnsureEnvironmentLabelsSDInit: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ub-2.ts) */
const deferredUiUB: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHostStub: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave GA unresolved companion (jsx-collision:versionedAccountState@account/versioned-account-state.ts) */
const AppInitialVZ: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isNotNullish@utils/is-not-nullish.ts) */
const AppInitialXM: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_ZE_Init@boundaries/composer-esm-inits.ts) */
const AppInitialZE: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const _pullRequestMediaT: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaA: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaC: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaD: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaE: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaJ: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaK: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaN: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaO: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaR: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaS: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaT: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaV: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaW: any = undefined;
/** Wave GA unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaY: any = undefined;
function Alpha(echo1) {
  let {
      account,
      expectedHeadRevision,
      pullRequest
    } = echo1,
    falcon1 = useIntl(),
    gamma1 = _n.useId(),
    harbor1 = {
      account,
      pullRequest
    };
  let indigo1 = CodexBrowserSurfaceActionType(pullRequestMediaD, harbor1),
    [jade1, kite1] = _n.useState(false),
    [lemon1, marble1] = _n.useState(""),
    [nickel1, onyx1] = _n.useState("comment"),
    [pearl1, quartz1] = _n.useState(null),
    river1 = nickel1 !== "approve",
    slate1 = async function (event) {
      if (event.preventDefault(), indigo1.isPending) return;
      let coral1 = lemon1.trim();
      if (river1 && coral1.length === 0) {
        quartz1(nickel1 === "request_changes" ? falcon1.formatMessage({
          id: "pullRequestSubmitReview.commentRequired.requestChanges",
          defaultMessage: "Add a comment before requesting changes",
          description: "Validation error when a change request review has no comment"
        }) : falcon1.formatMessage({
          id: "pullRequestSubmitReview.commentRequired.comment",
          defaultMessage: "Add a comment before submitting the review",
          description: "Validation error when a comment-only review has no comment"
        }));
        return;
      }
      quartz1(null);
      try {
        await indigo1.mutateAsync({
          body: coral1.length === 0 ? null : coral1,
          event: nickel1,
          expectedHeadRevision
        });
        marble1("");
        onyx1("comment");
        kite1(false);
      } catch (drift1) {
        let eagle1 = drift1;
        quartz1(eagle1 instanceof Error ? eagle1.message : falcon1.formatMessage({
          id: "pullRequestSubmitReview.error",
          defaultMessage: "GitHub could not submit this review",
          description: "Fallback error for submitting a pull request review"
        }));
      }
    };
  let timber1 = slate1,
    umbra1 = <ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      size: "toolbar",
      onClick: () => {
        quartz1(null);
        kite1(true);
      },
      children: <MemoizedFormattedMessage {...{
        id: "pullRequestSubmitReview.open",
        defaultMessage: "Submit review",
        description: "Button that opens the pull request review form"
      }} />
    }} />;
  let violet1 = frost1 => {
    indigo1.isPending || kite1(frost1);
  };
  let willow1 = <RealtimeVoiceHostId {...{
    className: "sr-only",
    children: <MemoizedFormattedMessage {...{
      id: "pullRequestSubmitReview.title",
      defaultMessage: "Submit review",
      description: "Title for the pull request review form"
    }} />
  }} />;
  let xenon1 = <IsStartingProcessExpired {...{
    className: "sr-only",
    children: <MemoizedFormattedMessage {...{
      id: "pullRequestSubmitReview.description",
      defaultMessage: "Choose a review decision and optionally add a comment.",
      description: "Accessible description for the pull request review form"
    }} />
  }} />;
  let yellow1 = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: <MemoizedFormattedMessage {...{
        id: "pullRequestSubmitReview.title",
        defaultMessage: "Submit review",
        description: "Title for the pull request review form"
      }} />,
      subtitle: <MemoizedFormattedMessage {...{
        id: "pullRequestSubmitReview.subtitle",
        defaultMessage: "The review applies only if the displayed head commit still matches.",
        description: "Expected-head safety explanation for pull request reviews"
      }} />
    }} />
  }} />;
  let zinc1 = <legend className="text-sm font-medium text-token-foreground">{<MemoizedFormattedMessage {...{
      id: "pullRequestSubmitReview.decision",
      defaultMessage: "Review decision",
      description: "Label for pull request review decision choices"
    }} />}</legend>;
  let amber1 = nickel1 === "comment",
    basalt1,
    cedar1;
  basalt1 = glide1 => {
    onyx1(glide1);
    quartz1(null);
  };
  cedar1 = <MemoizedFormattedMessage {...{
    id: "pullRequestSubmitReview.decision.comment",
    defaultMessage: "Comment",
    description: "Comment-only pull request review decision"
  }} />;
  let daisy1 = <Copper {...{
    checked: amber1,
    name: gamma1,
    value: "comment",
    onChange: basalt1,
    children: cedar1
  }} />;
  let ember1 = nickel1 === "approve",
    flint1,
    garnet1;
  flint1 = honey1 => {
    onyx1(honey1);
    quartz1(null);
  };
  garnet1 = <MemoizedFormattedMessage {...{
    id: "pullRequestSubmitReview.decision.approve",
    defaultMessage: "Approve",
    description: "Approve pull request review decision"
  }} />;
  let hazel1 = <Copper {...{
    checked: ember1,
    name: gamma1,
    value: "approve",
    onChange: flint1,
    children: garnet1
  }} />;
  let ivory1 = nickel1 === "request_changes",
    jasper1,
    kelp1;
  jasper1 = iris1 => {
    onyx1(iris1);
    quartz1(null);
  };
  kelp1 = <MemoizedFormattedMessage {...{
    id: "pullRequestSubmitReview.decision.requestChanges",
    defaultMessage: "Request changes",
    description: "Request-changes pull request review decision"
  }} />;
  let lotus1 = <Copper {...{
    checked: ivory1,
    name: gamma1,
    value: "request_changes",
    onChange: jasper1,
    children: kelp1
  }} />;
  let mint1 = <div className="flex flex-wrap gap-3">{daisy1}{hazel1}{lotus1}</div>;
  let nova1 = <fieldset className="flex flex-col gap-3" disabled={indigo1.isPending}>{zinc1}{mint1}</fieldset>;
  let olive1 = <MemoizedFormattedMessage {...{
    id: "pullRequestSubmitReview.comment",
    defaultMessage: "Review comment",
    description: "Label for the pull request review comment"
  }} />;
  let prism1 = nickel1 === "approve" ? falcon1.formatMessage({
    id: "pullRequestSubmitReview.optionalComment",
    defaultMessage: "Optional comment",
    description: "Placeholder for an optional approval comment"
  }) : falcon1.formatMessage({
    id: "pullRequestSubmitReview.requiredComment",
    defaultMessage: "Add a comment…",
    description: "Placeholder for a required review comment"
  });
  let quill1 = event => {
    marble1(event.currentTarget.value);
    quartz1(null);
  };
  let reef1 = <label className="flex flex-col gap-2 text-sm font-medium text-token-foreground">{olive1}<textarea autoFocus={true} className="min-h-28 w-full resize-y rounded-xl border border-token-border bg-token-input-background px-3 py-2 font-normal text-token-input-foreground outline-none placeholder:text-token-description-foreground focus:ring-1 focus:ring-token-focus-border" disabled={indigo1.isPending} placeholder={prism1} value={lemon1} onChange={quill1} onKeyDown={Bravo} /></label>;
  let sage1 = pearl1 == null ? null : <div className="bg-token-error-background/20 rounded-lg border border-token-error-foreground/30 px-3 py-2 text-sm text-token-error-foreground" role="alert">{pearl1}</div>;
  let topaz1 = <DeferredUiU {...{
    className: "flex flex-col gap-4",
    children: [nova1, reef1, sage1]
  }} />;
  let ultra1, vapor1;
  ultra1 = () => {
    kite1(false);
  };
  vapor1 = <MemoizedFormattedMessage {...{
    id: "pullRequestSubmitReview.cancel",
    defaultMessage: "Cancel",
    description: "Button to cancel submitting a review"
  }} />;
  let wheat1 = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: indigo1.isPending,
    onClick: ultra1,
    children: vapor1
  }} />;
  let yarn1 = <MemoizedFormattedMessage {...{
    id: "pullRequestSubmitReview.submit",
    defaultMessage: "Submit review",
    description: "Button to submit a pull request review"
  }} />;
  let zephyr1 = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    loading: indigo1.isPending,
    type: "submit",
    children: yarn1
  }} />;
  let acorn1 = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHostStub {...{
      children: [wheat1, zephyr1]
    }} />
  }} />;
  let bloom1 = <DeferredUiB {...{
    as: "form",
    "aria-busy": indigo1.isPending,
    className: "gap-2",
    onSubmit: timber1,
    children: [willow1, xenon1, yellow1, topaz1, acorn1]
  }} />;
  return <>{umbra1}{<UsePointerSurfaceInteractionGate {...{
      open: jade1,
      showDialogClose: false,
      size: "wide",
      onOpenChange: violet1,
      children: bloom1
    }} />}</>;
}
function Bravo(event) {
  event.key === "Enter" && (event.metaKey || event.ctrlKey) && (event.preventDefault(), event.currentTarget.form?.requestSubmit());
}
function Copper(jewel1) {
  let {
      checked,
      children,
      name,
      value,
      onChange
    } = jewel1,
    knoll1 = () => {
      onChange(value);
    };
  let lunar1 = <input checked={checked} className="cursor-interaction" name={name} type="radio" value={value} onChange={knoll1} />;
  return <label className="flex cursor-interaction items-center gap-2 text-sm text-token-foreground">{lunar1}{children}</label>;
}
var delta,
  _n,
  echo,
  falcon = esmInit(() => {
    delta = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    _n = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    pullRequestMediaS();
  });
export function pullRequestDetailQueryM(moss1: unknown, north1: unknown, orbit1: unknown) {
  moss1.set(pullRequestDetailQueryO, AppInitialJm(north1), orbit1);
}
export function pullRequestDetailQueryN(pine1: unknown, quest1: unknown, ridge1: unknown) {
  pine1.set(pullRequestDetailQueryK, AppInitialJm(quest1), ridge1);
}

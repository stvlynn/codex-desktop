// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/21
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
const IntlProvider: any = undefined;
const lunar: any = undefined;
const remoteHostedPipHiddenThreadIds: any = undefined;

export function _pullRequestDetailQueryD(drift4: unknown) {
  let {
      reviewers
    } = drift4,
    eagle4 = useIntl();
  if (reviewers.length === 0) {
    let glide4;
    return <span className="text-token-text-tertiary">{<MemoizedFormattedMessage {...{
        id: "pullRequest.reviewers.empty",
        defaultMessage: "No reviewers",
        description: "Empty state for a pull request without reviewers"
      }} />}</span>;
  }
  let frost4;
  {
    let honey4;
    honey4 = iris4 => {
      let jewel4 = Iris(eagle4, iris4);
      return <OptionalTooltip key={`${iris4.kind}:${iris4.label}`} {...{
        delayDuration: 0,
        tooltipContent: jewel4,
        children: <span aria-label={jewel4} className="relative block size-5 shrink-0 rounded-full border border-token-bg-primary bg-token-bg-secondary" role="img">{iris4.kind === "team" ? <span aria-hidden={true} className="flex size-full items-center justify-center text-token-text-primary">{<UsePlatformAwareFeatureGate {...{
              className: "icon-xs"
            }} />}</span> : <img aria-hidden={true} alt="" className="size-full rounded-full object-cover" src={remoteHostedPipHiddenThreadIds(iris4.label, 40) ?? undefined} />}<span aria-hidden={true} className={IntlProvider("absolute end-[-2px] bottom-[-2px] size-2 rounded-full border border-token-bg-primary", iris4.status === "approved" && "bg-token-charts-green", iris4.status === "waiting" && "bg-token-charts-yellow", iris4.status === "changes_requested" && "bg-token-charts-red")} /></span>
      }} />;
    };
    frost4 = reviewers.map(honey4);
  }
  return <span className="hide-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto overflow-y-hidden py-0.5">{frost4}</span>;
}
function Iris(knoll4, lunar4) {
  let moss4 = knoll4.formatMessage(lunar[lunar4.status]);
  return lunar4.kind === "team" ? knoll4.formatMessage({
    id: "pullRequest.reviewers.teamAccessibility",
    defaultMessage: "{reviewer} team, {status}",
    description: "Accessible label for a pull request review team and its status"
  }, {
    reviewer: lunar4.label,
    status: moss4
  }) : knoll4.formatMessage({
    id: "pullRequest.reviewers.userAccessibility",
    defaultMessage: "{reviewer}, {status}",
    description: "Accessible label for a pull request reviewer and their status"
  }, {
    reviewer: lunar4.label,
    status: moss4
  });
}

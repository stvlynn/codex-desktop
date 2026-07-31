// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 15/22
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
const Unity: any = undefined;

const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const _pullRequestMediaT: any = undefined;


function Moss(north4) {
  let {
    children,
    className,
    tone,
    ...rest
  } = north4;
  let orbit4 = (tone === undefined ? "secondary" : tone) === "danger" ? "text-token-charts-red" : "text-token-text-tertiary",
    pine4 = IntlProvider("flex min-h-[var(--height-token-row)] items-center justify-center gap-2 py-row-y text-[length:var(--detail-row-font-size,var(--text-base))] leading-5", orbit4, className);
  return <div className={pine4} {...rest}>{children}</div>;
}
var north,
  orbit,
  pine = esmInit(() => {
    north = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
  });
function Quest(quest4) {
  let {
      description
    } = quest4,
    ridge4 = description ?? <MemoizedFormattedMessage {...{
      id: "pullRequestSidePanel.error.description",
      defaultMessage: "Couldn’t load this pull request section",
      description: "Fallback error description for pull request sections"
    }} />;
  return <Moss {...{
    role: "alert",
    tone: "danger",
    children: ridge4
  }} />;
}
function Ridge(storm4) {
  let {
      label
    } = storm4,
    tide4 = <VSCODE_EDITOR_ID {...{
      className: "icon-sm"
    }} />;
  return <Moss {...{
    "aria-busy": "true",
    children: [tide4, <span className="sr-only">{label}</span>]
  }} />;
}
var $r,
  storm,
  tide = esmInit(() => {
    $r = reactCompilerRuntime();
    ensureIntlFormattersInit();
    pine();
    ensureComposerEsm_Sut_Init();
  });
export function PullRequestDetailQueryL(unity4: unknown) {
  let {
      account,
      actions,
      body,
      editing,
      error,
      loading
    } = unity4,
    vale4 = useIntl(),
    wave4 = editing == null ? "viewing" : "editing",
    apex4 = <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.description.title",
      defaultMessage: "Description",
      description: "Pull request description section title"
    }} />;
  let brook4 = editing == null ? error == null ? loading || body == null ? <Ridge {...{
    label: <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.description.loading",
      defaultMessage: "Loading description",
      description: "Loading label for the pull request description"
    }} />
  }} /> : body.trim().length > 0 ? <_pullRequestMediaT {...{
    account,
    allowBasicHtml: true,
    className: "min-w-0 text-token-text-primary [&_h2]:font-medium",
    cwd: null,
    children: body
  }} /> : <Moss {...{
    children: <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.description.empty",
      defaultMessage: "No description provided",
      description: "Empty pull request description"
    }} />
  }} /> : <Quest {...{
    description: error
  }} /> : <form aria-busy={editing.isPending || editing.isGenerating} className="flex flex-col gap-2" onSubmit={event => {
    event.preventDefault();
    editing.onSave();
  }}><textarea autoFocus={true} aria-label={vale4.formatMessage({
      id: "pullRequestDetail.editDescription.label",
      defaultMessage: "Pull request description",
      description: "Accessible label for the pull request description input"
    })} className="min-h-48 w-full resize-y rounded-xl border border-token-border bg-token-input-background px-3 py-2 text-token-input-foreground outline-none focus:ring-1 focus:ring-token-focus-border" disabled={editing.isPending || editing.isGenerating} value={editing.draft} onChange={event => {
      editing.onChange(event.currentTarget.value);
    }} onKeyDown={Unity} />{editing.error == null ? null : <div className="text-sm text-token-error-foreground" role="alert">{editing.error}</div>}<div className="flex justify-end gap-1.5">{<ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        disabled: editing.isPending,
        size: "toolbar",
        onClick: editing.onCancel,
        children: <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.edit.cancel",
          defaultMessage: "Cancel",
          description: "Button to cancel editing a pull request"
        }} />
      }} />}{<ReadLoginRouteQuerySnapshot {...{
        color: "primary",
        disabled: editing.isGenerating,
        loading: editing.isPending,
        size: "toolbar",
        type: "submit",
        children: <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.edit.save",
          defaultMessage: "Save",
          description: "Button to save pull request edits"
        }} />
      }} />}</div></form>;
  return <EnsureDetailPageSectionHeaderInit key={wave4} {...{
    id: "pull-request-description",
    actions,
    collapsible: true,
    title: apex4,
    children: brook4
  }} />;
}

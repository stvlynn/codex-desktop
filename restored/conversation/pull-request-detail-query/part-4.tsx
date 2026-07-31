// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/21
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
const AppInitialPl: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const SetRemoteControlEnabledForHostStub: any = undefined;
const marble: any = undefined;
const pullRequestMediaE: any = undefined;
const pullRequestMediaK: any = undefined;
const pullRequestMediaT: any = undefined;
const pullRequestMediaW: any = undefined;

function Indigo(hill1) {
  let {
      account,
      detail,
      placement
    } = hill1,
    isle1 = CodexPluginActionType(appScopeAtom),
    juniper1 = useIntl(),
    lagoon1 = {
      account,
      pullRequest: detail.pullRequest
    };
  let meadow1 = lagoon1,
    nest1 = CodexBrowserSurfaceActionType(pullRequestMediaW, meadow1),
    [oak1, petal1] = marble.useState(null),
    [quiet1, rain1] = marble.useState(false),
    [seed1, trail1] = marble.useState("squash"),
    [urn1, vine1] = marble.useState(null),
    wind1 = () => {
      vine1(null);
      rain1(true);
    };
  let yarrow1 = placement === "header" && detail.isAuthor && detail.state === "open" && !detail.isDraft && detail.isAutoMergeEnabled !== true && !nest1,
    azure1;
  if (azure1 = {
    enabled: yarrow1
  }, ContextMenuRegistration("git.mergePullRequest", wind1, azure1), !detail.isAuthor || detail.state !== "open") return null;
  let birch1 = !detail.canMerge || nest1,
    canyon1,
    dew1;
  dew1 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let basalt2 = Kite(detail, nest1, juniper1),
      cedar2 = function (flint2) {
        vine1(null);
        isle1.get(pullRequestMediaE, meadow1).mutateAsync(flint2).catch(error => {
          vine1(error.message);
        });
      };
    let daisy2 = cedar2,
      ember2;
    if (ember2 = async function (event) {
      if (event.preventDefault(), !(oak1 == null || nest1)) {
        vine1(null);
        try {
          let garnet2 = oak1.trim();
          if (garnet2.length === 0) return;
          await isle1.get(pullRequestMediaK, meadow1).mutateAsync(garnet2);
          petal1(null);
        } catch (hazel2) {
          let ivory2 = hazel2;
          vine1(ivory2 instanceof Error ? ivory2.message : juniper1.formatMessage({
            id: "pullRequestDetail.actions.updateError",
            defaultMessage: "GitHub could not update this pull request",
            description: "Fallback error for a pull request update"
          }));
        }
      }
    }, canyon1 = ember2, placement === "header") {
      let jasper2 = urn1 == null || quiet1 ? null : <span className="max-w-48 truncate text-xs text-token-error-foreground" role="alert">{urn1}</span>;
      let kelp2 = nest1 ? <VSCODE_EDITOR_ID {...{
        className: "icon-sm"
      }} /> : null;
      let lotus2 = detail.isDraft ? <MemoizedFormattedMessage {...{
        id: "codex.pullRequests.reviewState.draft",
        defaultMessage: "Draft",
        description: "Button that opens pull request review state options when the pull request is a draft"
      }} /> : <MemoizedFormattedMessage {...{
        id: "codex.pullRequests.reviewState.ready",
        defaultMessage: "Ready for review",
        description: "Button that opens pull request review state options when the pull request is ready for review"
      }} />;
      let mint2 = <ReadLoginRouteQuerySnapshot {...{
        "aria-busy": nest1,
        color: "secondary",
        disabled: nest1,
        size: "toolbar",
        children: [kelp2, lotus2]
      }} />;
      let nova2 = <Jade {...{
        disabled: nest1,
        isDraft: detail.isDraft,
        onUpdate: daisy2
      }} />;
      let olive2 = <div className="hidden [@container_app-shell-detail-panel_(min-width:900px)]:contents">{<DropdownMenuPopover {...{
          align: "end",
          contentWidth: "xs",
          disabled: nest1,
          triggerButton: mint2,
          children: nova2
        }} />}</div>;
      let prism2 = juniper1.formatMessage({
        id: "pullRequestDetail.actions.more",
        defaultMessage: "More pull request actions",
        description: "Accessible label for compact pull request author actions"
      });
      let quill2 = nest1 ? <VSCODE_EDITOR_ID {...{
        className: "icon-sm"
      }} /> : <AppIconQI {...{
        "aria-hidden": true,
        className: "icon-xs"
      }} />;
      let reef2 = <ReadLoginRouteQuerySnapshot {...{
        "aria-busy": nest1,
        "aria-label": prism2,
        color: "secondary",
        disabled: nest1,
        size: "toolbar",
        uniform: true,
        children: quill2
      }} />;
      let sage2 = <Jade {...{
        disabled: nest1,
        isDraft: detail.isDraft,
        onUpdate: daisy2
      }} />;
      let topaz2 = <span className="[@container_app-shell-detail-panel_(min-width:900px)]:hidden">{<DropdownMenuPopover {...{
          align: "end",
          contentWidth: "menuBounded",
          disabled: nest1,
          triggerButton: reef2,
          children: sage2
        }} />}</span>;
      let ultra2 = basalt2 == null ? undefined : juniper1.formatMessage({
          id: "pullRequestDetail.actions.merge.disabled.label",
          defaultMessage: "Merge unavailable: {reason}",
          description: "Accessible label for a disabled merge button that includes the reason it is unavailable"
        }, {
          reason: basalt2
        }),
        vapor2 = birch1 || undefined,
        wheat2 = birch1 ? 0 : undefined,
        yarn2,
        zephyr2;
      yarn2 = () => {
        vine1(null);
        rain1(true);
      };
      zephyr2 = <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.actions.merge",
        defaultMessage: "Merge",
        description: "Button to merge a pull request"
      }} />;
      let acorn2 = <ReadLoginRouteQuerySnapshot {...{
        color: "primary",
        disabled: birch1,
        size: "toolbar",
        onClick: yarn2,
        children: zephyr2
      }} />;
      let bloom2 = <span aria-label={ultra2} aria-disabled={vapor2} className="inline-flex rounded-lg outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border" role="group" tabIndex={wheat2}>{acorn2}</span>;
      let coral2 = <OptionalTooltip {...{
          tooltipContent: basalt2,
          children: bloom2
        }} />,
        drift2 = apex2 => {
          nest1 || rain1(apex2);
        };
      let eagle2 = event => {
        event.preventDefault();
        !nest1 && (vine1(null), isle1.get(pullRequestMediaT, meadow1).mutateAsync({
          expectedHeadRevision: detail.headRevision,
          mergeMethod: seed1
        }).then(() => {
          rain1(false);
        }).catch(error => {
          vine1(error.message);
        }));
      };
      let frost2 = <RealtimeVoiceHostId {...{
        className: "sr-only",
        children: <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.merge.title",
          defaultMessage: "Merge pull request",
          description: "Title for the pull request merge confirmation"
        }} />
      }} />;
      let glide2 = <IsStartingProcessExpired {...{
        className: "sr-only",
        children: <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.merge.description",
          defaultMessage: "Choose a merge method and confirm.",
          description: "Accessible description for pull request merge confirmation"
        }} />
      }} />;
      let honey2 = <DeferredUiU {...{
        children: <DeferredUiH {...{
          title: <MemoizedFormattedMessage {...{
            id: "pullRequestDetail.merge.title",
            defaultMessage: "Merge pull request",
            description: "Title for the pull request merge confirmation"
          }} />,
          subtitle: <MemoizedFormattedMessage {...{
            id: "pullRequestDetail.merge.subtitle",
            defaultMessage: "GitHub will merge only if the displayed head commit still matches.",
            description: "Safety explanation in the pull request merge confirmation"
          }} />
        }} />
      }} />;
      let iris2 = juniper1.formatMessage({
        id: "pullRequestDetail.merge.method",
        defaultMessage: "Merge method",
        description: "Accessible label for the merge method control"
      });
      let jewel2 = {
        id: "squash",
        label: <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.merge.squash",
          defaultMessage: "Squash",
          description: "Squash merge method"
        }} />
      };
      let knoll2 = [jewel2, {
        id: "merge",
        label: <MemoizedFormattedMessage {...{
          id: "pullRequestDetail.merge.commit",
          defaultMessage: "Merge commit",
          description: "Merge commit method"
        }} />
      }];
      let lunar2 = <AppInitialPl ariaLabel={iris2} options={knoll2} selectedId={seed1} onSelect={trail1} />;
      let moss2 = urn1 == null ? null : <div className="mt-2 text-sm text-token-error-foreground" role="alert">{urn1}</div>;
      let north2 = <DeferredUiU {...{
        children: [lunar2, moss2]
      }} />;
      let orbit2, pine2;
      orbit2 = () => {
        rain1(false);
      };
      pine2 = <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.merge.cancel",
        defaultMessage: "Cancel",
        description: "Button to cancel merging a pull request"
      }} />;
      let quest2 = <ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        disabled: nest1,
        onClick: orbit2,
        children: pine2
      }} />;
      let ridge2 = <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.merge.confirm",
        defaultMessage: "Merge",
        description: "Button to confirm merging a pull request"
      }} />;
      let storm2 = <ReadLoginRouteQuerySnapshot {...{
        color: "primary",
        loading: nest1,
        type: "submit",
        children: ridge2
      }} />;
      let tide2 = <DeferredUiU {...{
        children: <SetRemoteControlEnabledForHostStub {...{
          children: [quest2, storm2]
        }} />
      }} />;
      let unity2 = <DeferredUiB {...{
        as: "form",
        "aria-busy": nest1,
        onSubmit: eagle2,
        children: [frost2, glide2, honey2, north2, tide2]
      }} />;
      let vale2 = <UsePointerSurfaceInteractionGate {...{
        open: quiet1,
        showDialogClose: false,
        onOpenChange: drift2,
        children: unity2
      }} />;
      let wave2;
      wave2 = <>{jasper2}{olive2}{topaz2}{coral2}{vale2}</>;
      dew1 = wave2;
      break bb0;
    }
  }
  if (dew1 !== Symbol.for("react.early_return_sentinel")) return dew1;
  let alpha2 = juniper1.formatMessage({
    id: "pullRequestDetail.title.edit",
    defaultMessage: "Edit title",
    description: "Button to edit a pull request title"
  });
  let bravo2 = alpha2,
    copper2 = () => {
      vine1(null);
      petal1(detail.title ?? "");
    };
  let delta2 = <CopyButton {...{
    "aria-hidden": true,
    className: "icon-xs"
  }} />;
  let echo2 = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": bravo2,
    className: "h-7 w-7",
    color: "ghost",
    size: "icon",
    onClick: copper2,
    children: delta2
  }} />;
  let falcon2 = <OptionalTooltip {...{
    side: "left",
    tooltipContent: bravo2,
    children: echo2
  }} />;
  let gamma2 = oak1 != null,
    harbor2 = brook2 => {
      !brook2 && !nest1 && petal1(null);
    };
  let indigo2 = <RealtimeVoiceHostId {...{
    className: "sr-only",
    children: bravo2
  }} />;
  let jade2 = <IsStartingProcessExpired {...{
    className: "sr-only",
    children: <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.edit.description",
      defaultMessage: "Update the pull request and save it to GitHub.",
      description: "Accessible description for pull request editors"
    }} />
  }} />;
  let kite2 = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: bravo2
    }} />
  }} />;
  let lemon2 = juniper1.formatMessage({
    id: "pullRequestDetail.editTitle.label",
    defaultMessage: "Pull request title",
    description: "Accessible label for the pull request title input"
  });
  let marble2 = oak1 ?? "",
    nickel2 = event => {
      petal1(event.currentTarget.value);
      vine1(null);
    };
  let onyx2 = <input autoFocus={true} aria-label={lemon2} className="w-full rounded-xl border border-token-border bg-token-input-background px-3 py-2 text-token-input-foreground outline-none focus:ring-1 focus:ring-token-focus-border" disabled={nest1} value={marble2} onChange={nickel2} />;
  let pearl2 = urn1 == null ? null : <div className="mt-2 text-sm text-token-error-foreground" role="alert">{urn1}</div>;
  let quartz2 = <DeferredUiU {...{
    children: [onyx2, pearl2]
  }} />;
  let river2, slate2;
  river2 = () => {
    petal1(null);
  };
  slate2 = <MemoizedFormattedMessage {...{
    id: "pullRequestDetail.edit.cancel",
    defaultMessage: "Cancel",
    description: "Button to cancel editing a pull request"
  }} />;
  let timber2 = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: nest1,
    onClick: river2,
    children: slate2
  }} />;
  let umbra2 = nest1 || oak1?.trim().length === 0;
  let violet2 = nest1 ? <VSCODE_EDITOR_ID {...{
    className: "icon-sm"
  }} /> : null;
  let willow2 = <MemoizedFormattedMessage {...{
    id: "pullRequestDetail.edit.save",
    defaultMessage: "Save",
    description: "Button to save pull request edits"
  }} />;
  let xenon2 = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    disabled: umbra2,
    type: "submit",
    children: [violet2, willow2]
  }} />;
  let yellow2 = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHostStub {...{
      children: [timber2, xenon2]
    }} />
  }} />;
  let zinc2 = <DeferredUiB {...{
    as: "form",
    "aria-busy": nest1,
    onSubmit: canyon1,
    children: [indigo2, jade2, kite2, quartz2, yellow2]
  }} />;
  let amber2 = <UsePointerSurfaceInteractionGate {...{
    open: gamma2,
    showDialogClose: false,
    onOpenChange: harbor2,
    children: zinc2
  }} />;
  return <>{falcon2}{amber2}</>;
}
function Jade(cliff2) {
  let {
      disabled,
      isDraft,
      onUpdate
    } = cliff2,
    dusk2 = isDraft ? AppIconZlt : undefined,
    elm2 = isDraft ? undefined : () => {
      onUpdate("mark-draft");
    };
  let fern2 = <MemoizedFormattedMessage {...{
    id: "codex.pullRequests.reviewState.option.draft",
    defaultMessage: "Draft",
    description: "Menu option to mark a pull request as draft"
  }} />;
  let grove2 = <DropdownMenu.Item {...{
    "aria-checked": isDraft,
    disabled,
    RightIcon: dusk2,
    role: "menuitemradio",
    onSelect: elm2,
    children: fern2
  }} />;
  let hill2 = !isDraft,
    isle2 = isDraft ? undefined : AppIconZlt,
    juniper2 = isDraft ? () => {
      onUpdate("mark-ready");
    } : undefined;
  let lagoon2 = <MemoizedFormattedMessage {...{
    id: "codex.pullRequests.reviewState.option.ready",
    defaultMessage: "Ready for review",
    description: "Menu option to mark a pull request ready for review"
  }} />;
  let meadow2 = <DropdownMenu.Item {...{
    "aria-checked": hill2,
    disabled,
    RightIcon: isle2,
    role: "menuitemradio",
    onSelect: juniper2,
    children: lagoon2
  }} />;
  return <>{grove2}{meadow2}</>;
}
function Kite(nest2, oak2, petal2) {
  return oak2 ? petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.pending",
    defaultMessage: "Another pull request update is in progress",
    description: "Tooltip explaining why the merge button is disabled while another pull request update is running"
  }) : nest2.canMerge ? null : nest2.isDraft ? petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.draft",
    defaultMessage: "Mark this pull request ready for review before merging",
    description: "Tooltip explaining why a draft pull request cannot be merged"
  }) : nest2.mergeBlocker === "conflicts" ? petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.conflicts",
    defaultMessage: "Resolve merge conflicts before merging",
    description: "Tooltip explaining why a pull request with conflicts cannot be merged"
  }) : nest2.mergeBlocker === "unknown" ? petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.unknown",
    defaultMessage: "GitHub is still checking whether this can be merged",
    description: "Tooltip explaining that GitHub has not finished determining whether a pull request can be merged"
  }) : nest2.ciStatus === "failing" ? petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.failingChecks",
    defaultMessage: "Fix failing checks before merging",
    description: "Tooltip explaining why a pull request with failing checks cannot be merged"
  }) : nest2.ciStatus === "pending" ? petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.pendingChecks",
    defaultMessage: "Wait for checks to finish before merging",
    description: "Tooltip explaining why a pull request with pending checks cannot be merged"
  }) : petal2.formatMessage({
    id: "pullRequestDetail.actions.merge.disabled.blocked",
    defaultMessage: "This pull request can’t be merged yet",
    description: "Fallback tooltip explaining why a pull request cannot be merged"
  });
}

// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 9/21
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import {
  ensureUsageSettingsAccessInit as EnsureUsageSettingsAccessInit,
  useUsageSettingsAccess,
} from "../../account/use-usage-settings-access";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wdt_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_GZ_Init,
  ensureConversationPageEsm_Lo_Init as EnsureConversationPageEsm_Lo_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  ensureHooksQueriesInit,
  writeHooksStateMutationAtom as WriteHooksStateMutationAtom,
} from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { getSettingValue } from "../../settings/settings-values";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { AvatarCornerBadge } from "../../ui/avatar-corner-badge";
import { CopyButton } from "../../ui/copy-button";
import { deferredT1 } from "../../ui/deferred-t1";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU as DeferredUiU } from "../../ui/deferred-ui-u";
import {
  DETAIL_PAGE_STACK_CLASS,
  DetailPageSection,
  DetailPageSectionHeader,
  ensureDetailPageInit,
  ensureDetailPageSectionHeaderInit as EnsureDetailPageSectionHeaderInit,
} from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { LazyValueChildrenProvider } from "../../ui/lazy-value-children-provider";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { PopoverMenu } from "../../ui/popover-menu";
import { toolbar } from "../../ui/toolbar";
import {
  CircleDashedIcon,
  ensureCircleDashedIconInit as EnsureCircleDashedIconInit,
  ensureToolbarCircleDashedButtonInit as EnsureToolbarCircleDashedButtonInit,
  ToolbarCircleDashedButton,
} from "../../ui/toolbar-circle-dashed-button";
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
const Daisy: any = undefined;
const Gamma: any = undefined;
const IntlProvider: any = undefined;
const Sage: any = undefined;
const _pullRequestMediaT: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;

export function pullRequestDetailQueryV(wind3: unknown, yarrow3: unknown) {
  if (wind3.reviewThreadId != null) {
    let azure3 = yarrow3.byReviewThreadId.get(wind3.reviewThreadId);
    if (azure3 != null) return azure3;
  }
  return (wind3.url == null ? null : yarrow3.byUrl.get(wind3.url)) ?? null;
}
export function pullRequestDetailQueryUnderscore(birch3: unknown) {
  let canyon3 = new Map(),
    dew3 = new Map();
  for (let alpha4 of birch3 ?? []) {
    alpha4.reviewThreadId != null &&
      !canyon3.has(alpha4.reviewThreadId) &&
      canyon3.set(alpha4.reviewThreadId, alpha4);
    alpha4.url != null && !dew3.has(alpha4.url) && dew3.set(alpha4.url, alpha4);
  }
  return {
    byReviewThreadId: canyon3,
    byUrl: dew3,
  };
}
export function pullRequestDetailQueryY(bravo4: unknown) {
  return bravo4.filter((item) => item.type !== "event");
}
function Vapor(copper4, delta4) {
  return delta4 == null
    ? copper4.line == null || copper4.path == null || copper4.side == null
      ? null
      : {
          line: copper4.line,
          path: copper4.path,
          side: copper4.side,
          start_line: copper4.startLine ?? undefined,
          start_side: copper4.startSide ?? undefined,
        }
    : delta4.position;
}
export function pullRequestDetailQueryX(
  echo4: unknown,
  falcon4: unknown,
  gamma4: unknown,
) {
  switch (falcon4) {
    case "closed":
      return "close";
    case "draft":
      return "mark-draft";
    case "open":
      return echo4 === "closed"
        ? gamma4
          ? "reopen-ready"
          : "reopen"
        : "mark-ready";
  }
}
export function pullRequestDetailQueryB(harbor4: unknown) {
  return yarn
    .default([
      ...harbor4.requested,
      ...harbor4.requestedTeams,
      ...harbor4.approved,
      ...harbor4.changesRequested,
      ...harbor4.commented,
    ])
    .map((item) => ({
      kind: harbor4.requestedTeams.includes(item) ? "team" : "user",
      label: item,
      status: Wheat(harbor4, item),
    }));
}
function Wheat(indigo4, jade4) {
  return indigo4.changesRequested.includes(jade4)
    ? "changes_requested"
    : indigo4.approved.includes(jade4)
      ? "approved"
      : "waiting";
}
export var yarn,
  pullRequestDetailQueryS = esmInit(() => {
    yarn = commonJsInit(ensureGoogleDriveConnectorIconsInit(), 1);
  });
export function PullRequestDetailQueryH(kite4: unknown) {
  let {
      account,
      comment,
      commentAttachment,
      metadataAccessory,
      metadataAccessoryFlush,
      pullRequest,
    } = kite4,
    lemon4 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    [marble4, nickel4] = bloom.useState(false),
    onyx4 = comment.path ?? commentAttachment?.position.path ?? null,
    pearl4 = onyx4 == null ? null : acorn.default.posix.basename(onyx4);
  let quartz4 = pearl4,
    river4 = Vapor(comment, commentAttachment);
  let slate4 = river4,
    timber4 =
      commentAttachment == null
        ? undefined
        : {
            ...commentAttachment,
            authorAvatarUrl: comment.authorAvatarUrl,
            authorLogin: comment.authorLogin,
            reviewThreadId: comment.reviewThreadId,
          };
  let umbra4 =
    metadataAccessory ??
    (account != null && pullRequest != null ? (
      <Sage
        {...{
          account,
          comment,
          onDirtyChange: nickel4,
          pullRequest,
        }}
      />
    ) : null);
  let violet4 = metadataAccessoryFlush ?? pullRequest != null,
    willow4 =
      account == null || pullRequest == null || slate4 == null
        ? undefined
        : () => {
            Gamma(lemon4, "code");
            Daisy(
              lemon4,
              {
                account,
                pullRequest,
              },
              slate4,
            );
          };
  let xenon4 = slate4 != null,
    yellow4 = comment.url ?? undefined,
    zinc4 = (amber4, basalt4) => (
      <_pullRequestMediaT
        {...{
          account,
          allowBasicHtml: true,
          className: IntlProvider(
            "text-size-chat break-words text-token-foreground [&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-token-border/16 [&_details]:bg-token-bg-primary/40 [&_details]:px-3.5 [&_details]:py-3 [&_p]:leading-6 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-token-foreground",
            !basalt4 && "px-3 py-2.5",
          ),
          cwd: null,
          children: amber4,
        }}
      />
    );
  return (
    <IsString
      {...{
        authorAvatarUrl: comment.authorAvatarUrl,
        authorLogin: comment.authorLogin,
        body: comment.body,
        comment: timber4,
        createdAt: comment.createdAt,
        fileName: quartz4,
        metadataAccessory: umbra4,
        metadataAccessoryFlush: violet4,
        onOpenFile: willow4,
        preventCollapse: marble4,
        position: slate4,
        replies: comment.replies,
        showDiffLocation: xenon4,
        surface: "card",
        url: yellow4,
        renderBody: zinc4,
      }}
    />
  );
}

// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 22/22
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
const Moss: any = undefined;
const Quest: any = undefined;
const Ridge: any = undefined;

const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const _pullRequestMediaT: any = undefined;

function Unity(event) {
  event.key === "Enter" &&
    (event.metaKey || event.ctrlKey) &&
    (event.preventDefault(), event.currentTarget.form?.requestSubmit());
}
export function _pullRequestDetailQueryO(cliff4: unknown) {
  let { actions, checks, empty, error, loading, notice, renderChecks } = cliff4,
    dusk4 = (
      <MemoizedFormattedMessage
        {...{
          id: "pullRequestDetail.checks.title",
          defaultMessage: "Checks",
          description: "Pull request checks section title",
        }}
      />
    );
  let elm4 =
    error == null ? (
      loading || checks == null ? (
        <Ridge
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.checks.loading",
                  defaultMessage: "Loading checks",
                  description: "Loading label for pull request checks",
                }}
              />
            ),
          }}
        />
      ) : checks.length > 0 ? (
        renderChecks(checks)
      ) : (
        <Moss
          {...{
            children: empty ?? (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.checks.empty",
                  defaultMessage: "No checks reported",
                  description: "Empty pull request checks list",
                }}
              />
            ),
          }}
        />
      )
    ) : (
      <Quest
        {...{
          description: error,
        }}
      />
    );
  return (
    <EnsureDetailPageSectionHeaderInit
      {...{
        id: "pull-request-checks",
        actions,
        collapsible: true,
        title: dusk4,
        children: [notice, elm4],
      }}
    />
  );
}
export function _pullRequestDetailQueryS(fern4: unknown) {
  let { actions, comments, error, footer, loading, notice, renderComment } =
      fern4,
    grove4 = comments?.length,
    hill4 = (
      <MemoizedFormattedMessage
        {...{
          id: "pullRequestDetail.comments.title",
          defaultMessage: "Comments",
          description: "Pull request comments section title",
        }}
      />
    );
  let isle4 =
    error == null ? (
      loading || comments == null ? (
        <Ridge
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.comments.loading",
                  defaultMessage: "Loading comments",
                  description: "Loading label for pull request comments",
                }}
              />
            ),
          }}
        />
      ) : comments.length > 0 ? (
        <LazyValueChildrenProvider
          {...{
            children: (
              <div className="flex flex-col gap-3">
                {comments.map((item) => (
                  <div key={item.id}>{renderComment(item)}</div>
                ))}
              </div>
            ),
          }}
        />
      ) : (
        <Moss
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.comments.empty",
                  defaultMessage: "No comments",
                  description: "Empty pull request comments list",
                }}
              />
            ),
          }}
        />
      )
    ) : (
      <Quest
        {...{
          description: error,
        }}
      />
    );
  let juniper4 = footer == null ? null : <div className="mt-3">{footer}</div>;
  return (
    <EnsureDetailPageSectionHeaderInit
      {...{
        id: "pull-request-comments",
        actions,
        collapsible: true,
        count: grove4,
        title: hill4,
        children: [notice, isle4, juniper4],
      }}
    />
  );
}
export function _pullRequestDetailQueryC(lagoon4: unknown) {
  let { type } = lagoon4;
  return (
    <div
      className="rounded-lg border border-token-border bg-token-bg-fog px-3 py-2 text-sm text-token-description-foreground"
      role="status"
    >
      {type === "checks" ? (
        <MemoizedFormattedMessage
          {...{
            id: "pullRequestDetail.checks.partial",
            defaultMessage: "Some check details couldn’t be loaded.",
            description:
              "Notice shown when pull request checks are partially unavailable",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "pullRequestDetail.reviews.partial",
            defaultMessage: "Some review details couldn’t be loaded.",
            description:
              "Notice shown when pull request reviews are partially unavailable",
          }}
        />
      )}
    </div>
  );
}

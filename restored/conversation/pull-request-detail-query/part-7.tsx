// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 7/21
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
const ReadLoginRouteQuerySnapshot: any = undefined;
const _r: any = undefined;
const applySvg: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiE1: any = undefined;
const deferredUiJ1: any = undefined;
const pullRequestMediaC: any = undefined;
const pullRequestMediaR: any = undefined;
const pullRequestMediaV: any = undefined;
const pullRequestMediaY: any = undefined;

function Daisy(quartz3, river3, slate3) {
  let timber3 = {
    position: slate3,
    request: river3,
  };
  jasper.set(quartz3, timber3);
  pullRequestMediaY(quartz3, "");
  pullRequestMediaV(quartz3, river3, slate3.path);
  requestAnimationFrame(() => {
    Ember(quartz3, timber3, garnet);
  });
}
function Ember(umbra3, violet3, willow3) {
  if (jasper.get(umbra3) !== violet3) return;
  let { position, request } = violet3;
  pullRequestMediaV(umbra3, request, position.path);
  let xenon3 = Flint(position.path),
    yellow3 =
      xenon3 == null
        ? null
        : findBrowserTabById({
            container: xenon3,
            includeShadowRoots: true,
            lineNumber: position.line,
            side: position.side === "left" ? "deletions" : "additions",
          });
  if (yellow3 == null) {
    xenon3 != null &&
      (xenon3
        .querySelector(AppActionSelector.reviewFileToggleCollapsed)
        ?.click(),
      xenon3.scrollIntoView({
        behavior: "auto",
        block: "start",
      }));
    $n(umbra3, violet3, willow3);
    return;
  }
  yellow3.scrollIntoView({
    behavior: "auto",
    block: "center",
  });
  window.setTimeout(() => {
    if (jasper.get(umbra3) !== violet3) return;
    let zinc3 = Flint(position.path),
      amber3 =
        zinc3 == null
          ? null
          : findBrowserTabById({
              container: zinc3,
              includeShadowRoots: true,
              lineNumber: position.line,
              side: position.side === "left" ? "deletions" : "additions",
            });
    if (amber3 == null) {
      $n(umbra3, violet3, willow3);
      return;
    }
    amber3.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
    jasper.delete(umbra3);
  }, ivory);
}
function $n(basalt3, cedar3, daisy3) {
  if (daisy3 <= 1) {
    jasper.delete(basalt3);
    return;
  }
  window.setTimeout(() => {
    Ember(basalt3, cedar3, daisy3 - 1);
  }, hazel);
}
function Flint(ember3) {
  let flint3 = toPosixPath(ember3);
  for (let garnet3 of document.querySelectorAll(AppActionSelector.reviewFile))
    if (garnet3.getAttribute("data-review-path") === flint3) return garnet3;
  return null;
}
var garnet,
  hazel,
  ivory,
  jasper,
  kelp = esmInit(() => {
    dataAppActionReviewFileExpanded();
    ensureAppShellAtomsInit();
    ensureComposerEsm_Wdt_Init();
    pullRequestMediaR();
    garnet = 200;
    hazel = 50;
    ivory = 600;
    jasper = new WeakMap();
  });
function or(hazel3, ivory3) {
  if (!ivory3) {
    hazel3.style.removeProperty("height");
    return;
  }
  hazel3.style.height = "auto";
  hazel3.style.height = `${Math.min(hazel3.scrollHeight, quill)}px`;
}
function Lotus(jasper3) {
  let {
      authorAvatar,
      autoFocus = false,
      isPending,
      isReply = false,
      replyToAuthorLogin,
      onDirtyChange,
      onCancel,
      onSubmit,
    } = jasper3,
    kelp3 = useIntl(),
    lotus3 = olive.useRef(null),
    [mint3, nova3] = olive.useState(""),
    [olive3, prism3] = olive.useState(null),
    quill3 = mint3.trim();
  let reef3 = quill3,
    sage3 = (elm3, fern3) => {
      or(fern3, mint3.length > 0);
    };
  let topaz3 = useResizeObserver(sage3),
    ultra3,
    vapor3;
  ultra3 = () => (
    onDirtyChange?.(mint3.length > 0),
    () => {
      onDirtyChange?.(false);
    }
  );
  vapor3 = [mint3.length, onDirtyChange];
  olive.useEffect(ultra3, vapor3);
  let wheat3 = () => {
    let grove3 = lotus3.current;
    grove3 != null && or(grove3, mint3.length > 0);
  };
  let yarn3;
  yarn3 = [mint3];
  olive.useLayoutEffect(wheat3, yarn3);
  let zephyr3 = isReply
    ? kelp3.formatMessage({
        id: "pullRequestsPage.detail.commentReplyInput.submit",
        defaultMessage: "Post reply",
        description:
          "Accessible label for posting a pull request activity reply",
      })
    : kelp3.formatMessage({
        id: "pullRequestsPage.detail.commentInput.submit",
        defaultMessage: "Post comment",
        description:
          "Accessible label for posting a pull request detail comment",
      });
  let acorn3 = zephyr3,
    bloom3 = isReply
      ? kelp3.formatMessage({
          id: "pullRequestsPage.detail.commentReplyInput.ariaLabel",
          defaultMessage: "Pull request reply",
          description:
            "Accessible label for the pull request detail reply composer",
        })
      : kelp3.formatMessage({
          id: "pullRequestsPage.detail.commentInput.ariaLabel",
          defaultMessage: "Pull request comment",
          description:
            "Accessible label for the pull request detail comment composer",
        });
  let coral3 = bloom3,
    drift3 = deferredUiE1(lotus3, topaz3);
  let eagle3 = isReply
    ? kelp3.formatMessage(
        {
          id: "pullRequestsPage.detail.commentReplyInput.placeholder",
          defaultMessage: "Reply to {author}",
          description:
            "Placeholder shown when replying to a pull request activity comment",
        },
        {
          author:
            replyToAuthorLogin ??
            kelp3.formatMessage({
              id: "pullRequestsPage.detail.commentReplyInput.unknownAuthor",
              defaultMessage: "comment",
              description:
                "Fallback reply target label for the pull request activity reply composer",
            }),
        },
      )
    : kelp3.formatMessage({
        id: "pullRequestsPage.detail.commentInput.placeholder",
        defaultMessage: "Leave a comment",
        description:
          "Placeholder shown in the pull request detail comment composer",
      });
  let frost3 = (event) => {
    nova3(event.currentTarget.value);
    prism3(null);
  };
  let glide3 = (
    <textarea
      ref={drift3}
      aria-label={coral3}
      autoFocus={autoFocus}
      className="block min-h-7 w-full min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-0 pt-2.5 pb-0 text-base leading-7 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground"
      disabled={isPending}
      placeholder={eagle3}
      rows={1}
      value={mint3}
      onChange={frost3}
      onKeyDown={Mint}
    />
  );
  let honey3 = glide3,
    iris3 =
      onCancel == null ? null : (
        <OptionalTooltip
          {...{
            delayDuration: 250,
            tooltipContent: kelp3.formatMessage({
              id: "pullRequestsPage.detail.commentReplyInput.cancelTooltip",
              defaultMessage: "Cancel reply",
              description:
                "Tooltip for closing a pull request activity reply composer",
            }),
            children: (
              <ReadLoginRouteQuerySnapshot
                {...{
                  "aria-label": kelp3.formatMessage({
                    id: "pullRequestsPage.detail.commentReplyInput.cancel",
                    defaultMessage: "Cancel",
                    description:
                      "Button label for closing a pull request activity reply composer",
                  }),
                  color: "ghost",
                  size: "composerSm",
                  uniform: true,
                  onClick: onCancel,
                  children: (
                    <Chatgpt2
                      {...{
                        className: "icon-xs",
                      }}
                    />
                  ),
                }}
              />
            ),
          }}
        />
      );
  let jewel3 = reef3.length === 0,
    knoll3 = isPending ? null : (
      <AppIconPlt
        {...{
          className: "icon-xs",
        }}
      />
    );
  let lunar3 = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": acorn3,
        color: "primary",
        disabled: jewel3,
        loading: isPending,
        size: "composerSm",
        type: "submit",
        uniform: true,
        children: knoll3,
      }}
    />
  );
  let moss3 = (
    <OptionalTooltip
      {...{
        delayDuration: 250,
        tooltipContent: acorn3,
        children: lunar3,
      }}
    />
  );
  let north3 = (
    <>
      {iris3}
      {moss3}
    </>
  );
  let orbit3 = north3,
    pine3 = (
      <CodexPluginActionResult.Input
        {...{
          layout: "multiline",
          children: honey3,
        }}
      />
    );
  let quest3 = (
    <CodexPluginActionResult.FooterInlineControls
      {...{
        gap: "normal",
        children: authorAvatar,
      }}
    />
  );
  let ridge3 = (
    <CodexPluginActionResult.FooterAction
      {...{
        children: null,
      }}
    />
  );
  let storm3 = (
    <CodexPluginActionResult.FooterControls
      {...{
        children: (
          <CodexPluginActionResult.FooterActions
            {...{
              children: orbit3,
            }}
          />
        ),
      }}
    />
  );
  let tide3 = (
    <CodexPluginActionResult.Footer
      {...{
        children: [quest3, ridge3, storm3],
      }}
    />
  );
  let unity3 = (
    <CodexPluginActionResult
      {...{
        layout: "multiline",
        radiusVariant: "single-line",
        surfaceVariant: "secondary",
        children: (
          <CodexPluginActionResult.Body
            {...{
              children: [pine3, tide3],
            }}
          />
        ),
      }}
    />
  );
  let vale3 = unity3,
    wave3 = async function (event) {
      if ((event.preventDefault(), !(reef3.length === 0 || isPending))) {
        prism3(null);
        try {
          await onSubmit(reef3);
          nova3("");
        } catch (hill3) {
          let isle3 = hill3;
          prism3(
            isle3 instanceof Error
              ? isle3.message
              : kelp3.formatMessage({
                  id: "pullRequestsPage.detail.commentInput.error",
                  defaultMessage: "GitHub could not post this comment",
                  description: "Fallback error for a pull request comment",
                }),
          );
        }
      }
    };
  let apex3 = wave3,
    brook3 = (juniper3) => {
      apex3(juniper3);
    };
  let cliff3 = isReply ? <div className="mt-4">{vale3}</div> : vale3;
  let dusk3 =
    olive3 == null ? null : (
      <div className="px-1 text-sm text-token-charts-red" role="alert">
        {olive3}
      </div>
    );
  return (
    <form className="flex w-full flex-col gap-2" onSubmit={brook3}>
      {cliff3}
      {dusk3}
    </form>
  );
}
function Mint(event) {
  (event.metaKey || event.ctrlKey) &&
    event.key === "Enter" &&
    (event.preventDefault(), event.currentTarget.form?.requestSubmit());
}
var nova,
  olive,
  prism,
  quill,
  reef = esmInit(() => {
    nova = reactCompilerRuntime();
    olive = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    CodexBrowserSurfaceActionType();
    applySvg();
    ensureConversationPageEsm_Act_Init();
    deferredUiJ1();
    deferredT1();
    quill = 192;
  });
export function PullRequestDetailQueryC(lagoon3: unknown) {
  let {
      account,
      pullRequest,
      replyToAuthorLogin,
      replyToReviewThreadId,
      source,
      onDirtyChange,
      onCancel,
      onSuccess,
    } = lagoon3,
    meadow3 = {
      account,
      pullRequest,
    };
  let nest3 = CodexBrowserSurfaceActionType(pullRequestMediaC, meadow3),
    oak3 = replyToReviewThreadId != null,
    petal3 = account.login.slice(0, 1).toUpperCase();
  let quiet3 = (
    <AvatarCornerBadge
      {...{
        children: (
          <span className="flex size-6 items-center justify-center rounded-full border border-token-border/20 bg-token-bg-primary/60 text-xs font-semibold text-token-foreground">
            {petal3}
          </span>
        ),
      }}
    />
  );
  let rain3 = async (seed3) => {
    await nest3.mutateAsync({
      body: seed3,
      replyToReviewThreadId: replyToReviewThreadId ?? null,
      source,
    });
    onSuccess?.();
  };
  return (
    <Lotus
      {...{
        authorAvatar: quiet3,
        autoFocus: oak3,
        isPending: nest3.isPending,
        isReply: oak3,
        replyToAuthorLogin,
        onDirtyChange,
        onCancel,
        onSubmit: rain3,
      }}
    />
  );
}
function Sage(trail3) {
  let { account, comment, onDirtyChange, pullRequest } = trail3,
    [urn3, vine3] = _r.useState(false);
  if (comment.reviewThreadId == null) return null;
  return urn3 ? (
    <PullRequestDetailQueryC
      {...{
        account,
        pullRequest,
        replyToAuthorLogin: comment.authorLogin,
        replyToReviewThreadId: comment.reviewThreadId,
        onDirtyChange,
        onCancel: () => {
          onDirtyChange?.(false);
          vine3(false);
        },
        onSuccess: () => {
          onDirtyChange?.(false);
          vine3(false);
        },
      }}
    />
  ) : (
    <div className="pe-3 pb-3">
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "secondary",
            size: "default",
            onClick: () => {
              vine3(true);
            },
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "pullRequestDetail.comment.reply",
                  defaultMessage: "Reply",
                  description:
                    "Button to reply to a pull request review comment",
                }}
              />
            ),
          }}
        />
      }
    </div>
  );
}

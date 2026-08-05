// Restored from ref/webview/assets/pull-request-code-review-BqqvupGf.js
// Wave FX — full polished body from `pull-request-code-review-BqqvupGf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 41 (verified 42/83).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/5
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ensureCodeThemeRegistryInit } from "../../appearance/code-theme-catalog";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_LR_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wdt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { OPENAI_PRIMARY_RUNTIME_ID } from "../../config/openai-primary-runtime-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { diffVirtualizationMetrics } from "../../diff/diff-virtualization-metrics";
import { SwitchToSplitDiffButton } from "../../diff/switch-to-split-diff-button";
import { FileTreeSearchField } from "../../files/file-tree-search-field";
import { subscribeCustomEventTarget } from "../../hooks/subscribe-custom-event-target";
import { useDeferredCleanupEffect } from "../../hooks/use-deferred-cleanup-effect";
import { hostConfig2 } from "../../hosts/host-config2";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { setKeyedStoreAtomValueXU } from "../../utils/set-keyed-store-atom-value";
import { toPosixPath } from "../../utils/workspace-paths";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";

// Wave5d soft stubs.
const alpha: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const AppInitialDW: any = undefined;
const AppInitialEE: any = undefined;
const AppInitialJD: any = undefined;
const AppInitialLW: any = undefined;
const AppInitialXD: any = undefined;
const AppInitialZD: any = undefined;
const FormattedMessage: any = undefined;
const localThread2: any = undefined;
const Alpha: any = undefined;
const pullRequestMediaB: any = undefined;
const pullRequestMediaC: any = undefined;
const pullRequestMediaG: any = undefined;
const pullRequestMediaM: any = undefined;
const pullRequestMediaO: any = undefined;
const pullRequestMediaP: any = undefined;
const pullRequestMediaR: any = undefined;
const pullRequestMediaU: any = undefined;
const pullRequestMediaX: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
var bravo,
  copper,
  delta,
  $e,
  echo,
  falcon,
  gamma,
  harbor,
  indigo,
  at,
  jade = esmInit(() => {
    bravo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    copper = commonJsInit(react(), 1);
    FormattedMessage();
    alpha();
    $e = 12;
    echo = 160;
    falcon = 0.5;
    gamma = 720;
    harbor = 150;
    indigo = {
      version: 0,
      listeners: new Set(),
    };
    at = copper.createContext(null);
  });
function kite() {
  let umbra = CodexPluginActionType(ensureComposerEsm_S8_Init),
    violet = useIntl(),
    willow = CodexPluginActionResult(AppInitialLW),
    xenon = CodexPluginActionResult(pullRequestMediaC),
    [yellow, zinc] = marble.useState(true),
    amber = AppInitialZD(zinc, "pull-request-review"),
    basalt = xenon
      ? violet.formatMessage({
          id: "pullRequestsPage.codeReview.hideFileTree",
          defaultMessage: "Hide file tree",
          description: "Tooltip to hide the pull request code review file tree",
        })
      : violet.formatMessage({
          id: "pullRequestsPage.codeReview.showFileTree",
          defaultMessage: "Show file tree",
          description: "Tooltip to show the pull request code review file tree",
        });
  let cedar = basalt,
    daisy = () => {
      amber(!yellow);
    };
  let ember = (
    <AppInitialEE
      expanded={yellow}
      onToggleExpanded={daisy}
      showHideWhitespace={false}
      showLoadFullFiles={false}
    />
  );
  let flint = (mint) => {
    umbra.set(AppInitialLW, mint === "left" ? "unified" : "split");
  };
  let garnet = (
    <SwitchToSplitDiffButton
      {...{
        diffMode: willow,
        onSelectDiffMode: flint,
      }}
    />
  );
  let hazel = xenon ? "secondary" : "ghost",
    ivory = () => {
      pullRequestMediaB(umbra, !xenon);
    };
  let jasper = (
    <AppIconIR
      {...{
        className: "icon-xs",
      }}
    />
  );
  let kelp = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": cedar,
        "aria-pressed": xenon,
        color: hazel,
        size: "toolbar",
        uniform: true,
        onClick: ivory,
        children: jasper,
      }}
    />
  );
  let lotus = (
    <OptionalTooltip
      {...{
        tooltipContent: cedar,
        delayOpen: true,
        children: kelp,
      }}
    />
  );
  return (
    <div className="flex items-center gap-px">
      {ember}
      {garnet}
      {lotus}
    </div>
  );
}
var lemon,
  marble,
  nickel,
  onyx = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    marble = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    subscribeCustomEventTarget();
    AppInitialXD();
    ensureComposerEsm_LR_Init();
    localThread2();
    filterConversationTimelineItems();
    pullRequestMediaR();
  });
function pearl(nova) {
  let {
      request,
      commentAuthorAvatarUrl,
      commentAuthorLabel,
      cwd,
      diffMode,
      file,
      hostConfig,
      path,
      reviewDiffMetrics,
      renderReadonlyCommentActions,
      renderReadonlyCommentBody,
      onRequestChanges,
    } = nova,
    olive = CodexPluginActionType(ensureComposerEsm_S8_Init),
    prism = useIntl(),
    quill = {
      path,
      request,
    };
  let reef = CodexBrowserSurfaceActionType(pullRequestMediaO, quill),
    sage = {
      path,
      request,
    };
  let topaz = CodexBrowserSurfaceActionType(pullRequestMediaU, sage),
    ultra = {
      path,
      request,
    };
  let vapor = CodexBrowserSurfaceActionType(pullRequestMediaM, ultra),
    wheat = {
      path,
      request,
    };
  let yarn = CodexBrowserSurfaceActionType(pullRequestMediaP, wheat),
    zephyr = CodexPluginActionResult(AppInitialDW),
    acorn = CodexPluginActionResult(ensureCodeThemeRegistryInit),
    [bloom, coral] = river.useState(file.metadata.type !== "deleted"),
    drift;
  {
    let jewel;
    jewel = (knoll) => {
      let { error, submissionKey } = knoll;
      return (
        <div
          key={`${submissionKey.revision}:${submissionKey.commentKey}`}
          className="bg-token-error-background/20 mx-1 flex items-center justify-between gap-3 rounded-lg border border-token-error-foreground/30 px-3 py-2 text-sm text-token-error-foreground"
          role="alert"
        >
          <span>
            {error instanceof Error
              ? error.message
              : prism.formatMessage({
                  id: "pullRequestDetail.code.commentError",
                  defaultMessage: "GitHub could not post this comment",
                  description: "Fallback error for a pull request code comment",
                })}
          </span>
          {
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "secondary",
                size: "toolbar",
                onClick: () => {
                  pullRequestMediaG(olive, request, path, submissionKey);
                },
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "pullRequestDetail.code.retryComment",
                      defaultMessage: "Retry",
                      description:
                        "Action to retry a failed pull request code comment",
                    }}
                  />
                ),
              }}
            />
          }
        </div>
      );
    };
    drift = yarn.map(jewel);
  }
  let eagle = (lunar) => {
    pullRequestMediaX(olive, request, path, lunar);
  };
  let frost = (moss) => {
    pullRequestMediaX(olive, request, path, [
      ...reef,
      {
        ...moss,
        content: [
          {
            content_type: "text",
            text: "",
          },
        ],
        replyToReviewThreadId: moss.reviewThreadId ?? null,
      },
    ]);
  };
  let glide = file.metadata.additionLines ? "line-info" : "metadata",
    honey = () => {
      olive.set(ensureCodeThemeRegistryInit, !acorn);
    };
  let iris = (
    <AppInitialJD
      cwd={cwd}
      diff={file}
      diffViewWrap={acorn}
      expandScope="pull-request-review"
      enableComments={true}
      comments={reef}
      readonlyComments={topaz}
      renderReadonlyCommentActions={renderReadonlyCommentActions}
      renderReadonlyCommentBody={renderReadonlyCommentBody}
      submittingCommentKeys={vapor}
      commentAuthorAvatarUrl={commentAuthorAvatarUrl}
      commentAuthorLabel={commentAuthorLabel}
      onCommentsChange={eagle}
      onOpenChange={coral}
      onRequestChanges={onRequestChanges}
      onReadonlyCommentReply={frost}
      hostConfig={hostConfig}
      hunkSeparators={glide}
      loadFullContent={false}
      open={bloom}
      metrics={reviewDiffMetrics}
      onToggleWrap={honey}
      richPreviewEnabled={zephyr}
      roundedCorners={true}
      stickyHeader={true}
      viewType={diffMode}
    />
  );
  return (
    <>
      {drift}
      {iris}
    </>
  );
}
var quartz,
  river,
  slate,
  timber = esmInit(() => {
    quartz = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    river = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    semanticAccentColors();
    subscribeCustomEventTarget();
    filterConversationTimelineItems();
    pullRequestMediaR();
  });

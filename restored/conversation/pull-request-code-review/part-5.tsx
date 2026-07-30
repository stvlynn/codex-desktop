// Restored from ref/webview/assets/pull-request-code-review-BqqvupGf.js
// Wave FX — full polished body from `pull-request-code-review-BqqvupGf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 41 (verified 42/83).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/5
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ensureCodeThemeRegistryInit } from "../../appearance/code-theme-catalog";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_LR_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
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
const delta: any = undefined;
const echo: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const PullRequestMediaT: any = undefined;
const Dismiss: any = undefined;
const AppInitialCj: any = undefined;
const AppInitialGA: any = undefined;
const AppInitialLW: any = undefined;
const AppInitialSW: any = undefined;
const DeferredDL: any = undefined;
const GhCliStatus: any = undefined;
const LineInfo: any = undefined;
const TransactionEventPlugin: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const dismiss: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const Delta: any = undefined;
const Echo: any = undefined;
const falcon: any = undefined;
const pullRequestMediaA: any = undefined;
const pullRequestMediaB: any = undefined;
const pullRequestMediaC: any = undefined;
const pullRequestMediaD: any = undefined;
const pullRequestMediaF: any = undefined;
const pullRequestMediaH: any = undefined;
const pullRequestMediaI: any = undefined;
const pullRequestMediaL: any = undefined;
const pullRequestMediaN: any = undefined;
const pullRequestMediaR: any = undefined;
const pullRequestMediaS: any = undefined;
const pullRequestMediaT: any = undefined;
const pullRequestMediaUnderscore: any = undefined;
const pullRequestMediaV: any = undefined;
const pullRequestMediaY: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
export function PullRequestCodeReview(marble: any) {
  let {
      request,
      baseBranch,
      headRevision,
      headBranch,
      onRequestChanges
    } = marble,
    nickel = CodexPluginActionType(ensureComposerEsm_S8_Init),
    onyx = CodexPluginActionResult(AppInitialLW),
    pearl = CodexBrowserSurfaceActionType(pullRequestMediaA, request),
    quartz = CodexBrowserSurfaceActionType(pullRequestMediaL, request),
    river = CodexBrowserSurfaceActionType(pullRequestMediaH, request),
    slate = CodexBrowserSurfaceActionType(pullRequestMediaD, request),
    timber = CodexPluginActionResult(pullRequestMediaS),
    umbra = CodexPluginActionResult(pullRequestMediaC),
    violet = CodexBrowserSurfaceActionType(pullRequestMediaI, request),
    willow = request.account,
    xenon = CodexBrowserSurfaceActionType(hostConfig2, willow.hostId),
    yellow = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.codeFontSize) ?? 12,
    zinc = diffVirtualizationMetrics(yellow);
  let amber = zinc,
    [basalt] = lemon.useState(indigo),
    cedar = lemon.useRef(null),
    daisy = eagle => {
      if (eagle == null) {
        cedar.current != null && pullRequestMediaUnderscore(nickel, cedar.current.scrollTop);
        cedar.current = null;
        basalt.cleanUp();
        return;
      }
      cedar.current = eagle;
      basalt.setup(eagle);
      eagle.scrollTop = nickel.get(pullRequestMediaF);
    };
  let ember = daisy;
  if (pearl?.isLoading === true) {
    let frost = <VSCODE_EDITOR_ID {...{}} />;
    let glide;
    return <div className="flex h-full items-center justify-center" role="status">
        {frost}
        <span className="sr-only">
          {<MemoizedFormattedMessage {...{
          id: "pullRequestDetail.code.loading",
          defaultMessage: "Loading pull request changes",
          description: "Loading state for the pull request Code tab"
        }} />}
        </span>
      </div>;
  }
  if (pearl?.data?.status !== "success" || pearl.data.headRevision !== headRevision) {
    let honey = () => {
      pearl?.refetch();
    };
    let iris = <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.code.retry",
      defaultMessage: "Try again",
      description: "Action to retry loading a pull request diff"
    }} />;
    let jewel = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      onClick: honey,
      children: iris
    }} />;
    let knoll = pearl?.data?.status === "error" ? pearl.data.error : pearl?.data?.status === "success" ? <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.code.stale",
      defaultMessage: "The pull request changed while its diff was loading.",
      description: "Error shown when a pull request diff revision is stale"
    }} /> : pearl?.error?.message;
    let lunar = <MemoizedFormattedMessage {...{
      id: "pullRequestDetail.code.unavailable",
      defaultMessage: "Changes unavailable",
      description: "Error title for an unavailable pull request diff"
    }} />;
    let moss;
    return <Dismiss {...{
      className: "h-full",
      actions: jewel,
      description: knoll,
      title: lunar
    }} />;
  }
  if (quartz?.length === 0) {
    let north;
    return <Dismiss {...{
      className: "h-full",
      title: <MemoizedFormattedMessage {...{
        id: "pullRequestDetail.code.empty",
        defaultMessage: "No changed files",
        description: "Empty state for a pull request without a diff"
      }} />
    }} />;
  }
  let flint = headBranch?.trim() || null;
  let garnet = flint,
    hazel = baseBranch?.trim() || null;
  let ivory = hazel,
    jasper = quartz ?? [];
  let kelp;
  {
    let orbit;
    orbit = pine => {
      let quest = toPosixPath(pine.metadata.name);
      return <div key={quest} id={jade(quest)} {...toPosixPath.reviewFile(quest)}>
          {<Alpha {...{
          request,
          commentAuthorLabel: willow.login,
          cwd: null,
          diffMode: onyx,
          file: pine,
          hostConfig: xenon,
          path: quest,
          reviewDiffMetrics: amber,
          renderReadonlyCommentActions: gamma,
          renderReadonlyCommentBody: ridge => <PullRequestMediaT {...{
            account: willow,
            allowBasicHtml: true,
            className: "text-size-chat px-3 py-2.5 break-words text-token-foreground [&_p]:leading-6",
            cwd: null,
            children: ridge
          }} />,
          onRequestChanges
        }} />}
        </div>;
    };
    kelp = jasper.map(orbit);
  }
  let lotus = <div className="flex flex-col gap-3">{kelp}</div>;
  let mint = <div ref={ember} className="h-full min-h-0 overflow-x-hidden overflow-y-auto pr-4 pb-3 pl-2 [overflow-anchor:none]">
      {lotus}
    </div>;
  let nova = mint,
    olive = storm => {
      pullRequestMediaY(nickel, storm);
    };
  let prism = <div className="shrink-0 pb-1">
      {<FileTreeSearchField {...{
      inputId: "pull-request-code-file-search",
      searchQuery: timber,
      onQueryChange: olive
    }} />}
    </div>;
  let quill = slate ?? undefined,
    reef = tide => {
      pullRequestMediaV(nickel, request, tide);
      document.getElementById(jade(tide))?.scrollIntoView({
        block: "start"
      });
    };
  let sage = <div className="min-h-0 flex-1">
      {<GhCliStatus {...{
      activePath: quill,
      commentCountByPath: violet,
      cwd: null,
      entries: river,
      onSelectPath: reef
    }} />}
    </div>;
  let topaz = <div className="flex h-full min-h-0 flex-col pt-2">
      {prism}
      {sage}
    </div>;
  let ultra = topaz,
    vapor = garnet == null ? null : <span className="truncate">{garnet}</span>;
  let wheat = garnet != null && ivory != null ? <>
        <span className="sr-only">
          {<MemoizedFormattedMessage {...{
        id: "pullRequestDetail.code.branchDirection",
        defaultMessage: "into",
        description: "Accessible relationship between the head and base branches in the pull request Code toolbar"
      }} />}
        </span>
        {<AppIconYlt {...{
      "aria-hidden": true,
      className: "icon-2xs shrink-0"
    }} />}
      </> : null;
  let be = ivory == null ? null : <span className="truncate">{ivory}</span>;
  let yarn = <div className="flex min-w-0 items-center gap-2 text-sm text-token-text-tertiary [@container_(max-width:399px)]:hidden">
      {vapor}
      {wheat}
      {be}
    </div>;
  let zephyr = <Bravo {...{}} />;
  let acorn = <div className="@container flex h-toolbar-pane shrink-0 items-center justify-between gap-2 overflow-hidden border-b border-token-border-default ps-5 pe-2 [@container_(min-width:400px)]:pe-3 [@container_(min-width:500px)]:ps-6">
      {yarn}
      {zephyr}
    </div>;
  let bloom = unity => {
    pullRequestMediaB(nickel, unity);
  };
  let coral = <div className="min-h-0 flex-1">
      {<Copper {...{
      id: "pull-request-code-review-files-right",
      className: "h-full min-h-0",
      defaultLeftPercent: 76,
      drawerBreakpoint: 680,
      drawerMaxWidth: 360,
      drawerVisibleInset: 56,
      isRightOpen: umbra,
      left: nova,
      minLeftWidth: 420,
      minRightWidth: 220,
      onRightOpenChange: bloom,
      right: ultra,
      rightClassName: "pr-4 pl-2"
    }} />}
    </div>;
  let drift = <div className="flex h-full min-h-0 flex-col">
      {acorn}
      {coral}
    </div>;
  return <DeferredDL.Provider {...{
    value: basalt,
    children: drift
  }} />;
}
function gamma(vale, wave, apex) {
  return wave ? <div className="flex items-center gap-1" onClick={harbor}>
      {<ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      size: "toolbar",
      onClick: apex,
      children: <MemoizedFormattedMessage {...{
        id: "pullRequestsPage.codeReview.comment.reply",
        defaultMessage: "Reply",
        description: "Action button shown on a pull request review comment in the code review tab"
      }} />
    }} />}
    </div> : null;
}
function harbor(event) {
  event.preventDefault();
  event.stopPropagation();
}
function indigo() {
  return new AppInitialSW();
}
function jade(brook) {
  return `pull-request-file-${encodeURIComponent(brook)}`;
}
var kite, lemon, $;
esmInit(() => {
  kite = reactCompilerRuntime();
  TransactionEventPlugin();
  LineInfo();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  lemon = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  dataAppActionReviewFileExpanded();
  ensureSettingsQueryAtomsInit();
  useDeferredCleanupEffect();
  useClearBrowserBrowsingDataMutation();
  ensureComposerEsm_Sut_Init();
  delta();
  subscribeCustomEventTarget();
  AppIconYlt();
  AppInitialGA();
  AppInitialCj();
  filterConversationTimelineItems();
  extractColonPrefixedNamedTokens();
  setKeyedStoreAtomValueXU();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Wdt_Init();
  pullRequestMediaN();
  echo();
  falcon();
  pullRequestMediaR();
})();

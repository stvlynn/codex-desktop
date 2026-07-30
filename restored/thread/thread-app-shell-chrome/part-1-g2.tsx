// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 2/2
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import { ArtifactFilePreviewIcon, ensureArtifactFilePreviewIconInit as EnsureArtifactFilePreviewIconInit } from "../../artifact/artifact-file-preview-icon";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_CU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_IB_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_LR_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_NA_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_GZ_Init } from "../../boundaries/conversation-page-esm-inits";
import { useState } from "react";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { MEMORIES_ID } from "../../config/memories-id";
import { BrowserConversationPanel } from "../../conversation/browser-conversation-panel";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { resolveThreadProjectSelection } from "../../conversation/resolve-thread-project-selection";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { ensureDiffStatsAggregateInit } from "../../diff/ensure-diff-stats-aggregate-init";
import { isChatgptProjectsWorkspace } from "../../environments/is-chatgpt-projects-workspace";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { openOrFocusFilePanelTab } from "../../files/open-or-focus-file-panel-tab";
import { pickPreferredOpenTarget } from "../../files/pick-preferred-open-target";
import { useContentRectSize } from "../../hooks/use-content-rect-size";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { ensureUseMediaQueryInit, useMediaQuery } from "../../hooks/use-media-query";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAA } from "../../icons/app-icon-aa";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { ensureAppIconL0Init } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { TerminalFileIcon } from "../../icons/terminal-file-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { buildMcpToolCallItem } from "../../mcp/build-mcp-tool-call-item";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit, reviewFilesAtom } from "../../navigation/app-shell-atoms";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { listConversationBrowserTabMatches } from "../../navigation/list-conversation-browser-tab-matches";
import { panelControllerForSide } from "../../navigation/panel-controller-for-side";
import { resolvePinnedPanelPlacement } from "../../navigation/resolve-pinned-panel-placement";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { HotkeyKeysLabel } from "../../settings/hotkey-keys-label";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { closeBottomPanelOrOverlay } from "../../shell/close-bottom-panel-or-overlay";
import { sidebarelectronProductmodeChatgptMessages } from "../../sidebar/sidebarelectron-productmode-chatgpt-messages";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { activatePanelTabOrFallback } from "../../ui/activate-panel-tab-or-fallback";
import { closeSidePanelUnlessWindowResize } from "../../ui/close-side-panel-unless-window-resize";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { cx } from "../../ui/cx";
import { DEFAULT_MOTION_TRANSITION } from "../../ui/default-motion-transition";
import { motion } from "../../vendor/framer-motion";
import { deferredUiYE } from "../../ui/deferred-ui-ye";
import { deferredW1 } from "../../ui/deferred-w1";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ensureClipboardCopyErrorToastInit } from "../../ui/ensure-clipboard-copy-error-toast-init";
import { PLACEMENT_RIGHT_BOTTOM } from "../../ui/placement-right-bottom";
import { PopoverMenu } from "../../ui/popover-menu";
import { TabStripSizedButton } from "../../ui/tab-strip-sized-button";
import { codexProjectKey } from "../../utils/codex-project-key";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { identity } from "../../utils/identity";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { ensurePersonalizationJutInit, ensureSettingsGlyphI0Init, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureHotkeyThreadB1Init } from "../../utils/wave-av-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { localConversationThreadUpperA, localConversationThreadUpperL as LocalConversationThreadUpperL, localConversationThreadUpperR } from "../local-conversation-thread";
import { threadOverflowMenuO, threadOverflowMenuS } from "../thread-overflow-menu";
import { initThreadPanelToggleButton as InitThreadPanelToggleButton, ThreadPanelToggleButton } from "../thread-panel-toggle-button";



const jasper = {
  closed: { opacity: 0, y: -8, transition: { duration: 0.06, ease: DEFAULT_MOTION_TRANSITION.ease, when: "afterChildren" } },
  open: { opacity: 1, y: 0, transition: { duration: 0.09, ease: DEFAULT_MOTION_TRANSITION.ease, when: "beforeChildren" } },
};
const kelp = {
  closed: { transition: { staggerChildren: 0.008, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.012, staggerChildren: 0.016 } },
};
const lotus = {
  closed: { opacity: 0, y: -6, transition: { duration: 0.045, ease: DEFAULT_MOTION_TRANSITION.ease } },
  open: { opacity: 1, y: 0, transition: { duration: 0.075, ease: DEFAULT_MOTION_TRANSITION.ease } },
};
const lemon: any = (item: any) => item?.id ?? String(item);
const nickel: any = (artifact: any) => artifact?.title ?? artifact?.name ?? "";
const marble: any = (artifact: any) => artifact?.title ?? artifact?.name ?? "";
const ThreadAppShellChromeHelper6: any = (_props: any) => null;

function ThreadAppShellChromeHelper19(nipple) {
  let {
      artifacts,
      onOpen
    } = nipple,
    [orifice, pin] = useState(null),
    race;
  {
    let sleeve;
    sleeve = (trunnion, boss) => <ThreadAppShellChromeHelper20 key={lemon(trunnion)} {...{
      hideDivider: orifice === boss || orifice === boss + 1,
      artifact: trunnion,
      onOpen,
      onActiveChange: cam => pin(cam ? boss : null)
    }} />;
    race = artifacts.map(sleeve);
  }
  return <ul className="mx-auto flex w-full max-w-xl flex-col px-panel">
      {race}
    </ul>;
}
function ThreadAppShellChromeHelper20(detent) {
  let {
      artifact,
      hideDivider,
      onActiveChange,
      onOpen
    } = detent,
    eccentric = hideDivider && "after:hidden",
    follower = cx("relative flex w-full after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-token-border-light after:content-[''] last:after:hidden", eccentric);
  let guide = nickel(artifact);
  let helix = cx("cursor-interaction relative min-h-10 w-full rounded-md px-2.5 py-2 text-left", "hover:bg-token-list-hover-background", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong");
  let impeller, journal, kingpin, land;
  impeller = () => onActiveChange(false);
  journal = () => onActiveChange(true);
  kingpin = () => onActiveChange(true);
  land = () => onActiveChange(false);
  let mesh = thrust => onOpen(artifact, thrust);
  let neck = <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
      {<ThreadAppShellChromeHelper6 {...{
      artifact,
      iconClassName: "icon-xs",
      imageClassName: "size-full rounded"
    }} />}
    </span>;
  let pad = marble(artifact);
  let quillshaft = <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
      {pad}
    </span>;
  let roller = <span className="flex min-w-0 items-center gap-2">
      {neck}
      {quillshaft}
    </span>;
  let spindle = <button type="button" title={guide} className={helix} onBlur={impeller} onFocus={journal} onMouseEnter={kingpin} onMouseLeave={land} onClick={mesh}>
      {roller}
    </button>;
  return <li className={follower}>
      {spindle}
    </li>;
}

export type ThreadAppShellChromeHelper17Props = {
  actions: Array<{
    id: string;
    title?: unknown;
    onSelect?: (...args: unknown[]) => unknown;
    Icon?: any;
    mcpServerIcon?: unknown;
    keyboardShortcut?: unknown;
  }>;
  onOpenArtifact?: (...args: unknown[]) => unknown;
  outputArtifacts?: unknown[] | null;
};

export function ThreadAppShellChromeHelper17(gasket: ThreadAppShellChromeHelper17Props) {
  let {
      actions,
      onOpenArtifact,
      outputArtifacts
    } = gasket,
    handle = outputArtifacts != null && outputArtifacts.length > 0 ? outputArtifacts : null,
    insert = CodexPluginActionResult(readPrefersReducedMotionAtom),
    [jacket, knurl] = useState(null),
    [lever, mount] = useState(false),
    [nozzle, platen] = useContentRectSize(),
    ratchet = insert ? undefined : "open",
    shim = insert ? undefined : jasper,
    tappet = lever && "shadow-sm",
    arbor = cx("sticky top-0 z-10 flex flex-col gap-6 bg-token-main-surface-primary", tappet);
  let bushing = actions.length > 0 ? <motion.ul {...{
    className: "mx-auto flex w-full max-w-xl flex-col gap-1 px-panel",
    variants: insert ? undefined : kelp,
    children: actions.map(item => <motion.li key={item.id} {...{
      className: "w-full",
      variants: insert ? undefined : lotus,
      children: <button type="button" className={cx("cursor-interaction flex min-h-10 w-full items-center gap-2 rounded-md bg-token-bg-fog px-2.5 py-2 text-left", "hover:bg-token-list-hover-background", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong")} onClick={item.onSelect}>
                    <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
                      {item.mcpServerIcon == null ? <item.Icon {...{
            className: "icon-xs"
          }} /> : ensureComposerEsm_IB_Init(item.mcpServerIcon)}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
                      {item.title}
                    </span>
                    {item.keyboardShortcut ? <span className="ml-auto shrink-0 pl-2 text-token-text-secondary">
                        {<HotkeyKeysLabel {...{
            keysLabel: item.keyboardShortcut
          }} />}
                      </span> : null}
                  </button>
    }} />)
  }} /> : <div className="mx-auto w-full max-w-xl rounded-lg border border-token-border-default p-3 text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
      id: "thread.sidePanel.newTab.empty",
      defaultMessage: "No tabs are available for this chat",
      description: "Empty message on the side panel New tab page when the current chat has no available side panel tab actions."
    }} />}
      </div>;
  let collar = handle == null ? null : <div className="mx-auto w-full max-w-xl px-panel pb-1">
        <h3 className="pl-2.5 text-sm font-normal text-token-text-secondary">
          {<MemoizedFormattedMessage {...{
        id: "thread.sidePanel.newTab.suggested.heading",
        defaultMessage: "Suggested",
        description: "Heading for suggested artifacts shown on the side panel New tab page"
      }} />}
        </h3>
      </div>;
  let dowel = <div ref={nozzle} className={arbor}>
      {bushing}
      {collar}
    </div>;
  let flange = handle == null ? null : <>
        {<ThreadAppShellChromeHelper18 {...{
      headerHeight: platen.height,
      root: jacket,
      onCoveredChange: mount
    }} />}
        {<ThreadAppShellChromeHelper19 {...{
      artifacts: handle,
      onOpen: onOpenArtifact
    }} />}
      </>;
  return <div ref={knurl} className="flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto bg-token-main-surface-primary p-2 select-none">
      {<motion.div {...{
      animate: ratchet,
      className: "flex w-full flex-1 flex-col justify-center",
      initial: false,
      variants: shim,
      children: [dowel, flange]
    }} />}
    </div>;
}
function ThreadAppShellChromeHelper18(gib) {
  let {
      headerHeight,
      root,
      onCoveredChange
    } = gib,
    hub = headerHeight == null ? "0px" : `-${Math.ceil(headerHeight)}px 0px 0px 0px`,
    idler = jig => {
      if (jig == null || root == null) return;
      if (typeof IntersectionObserver > "u") {
        onCoveredChange(false);
        return;
      }
      let keeper = new IntersectionObserver(lug => {
        let mandrel = lug[0];
        mandrel != null && onCoveredChange(!mandrel.isIntersecting);
      }, {
        root,
        rootMargin: hub
      });
      return keeper.observe(jig), () => {
        keeper.disconnect();
      };
    };
  return <div key={hub} aria-hidden={true} className="h-px" ref={idler} />;
}

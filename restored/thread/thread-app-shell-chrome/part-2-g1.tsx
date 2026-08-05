// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 1/2
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import {
  ArtifactFilePreviewIcon,
  ensureArtifactFilePreviewIconInit as EnsureArtifactFilePreviewIconInit,
} from "../../artifact/artifact-file-preview-icon";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationsGateAtom,
  useStepsProseAtom,
} from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_BU_Init,
  ensureComposerEsm_CU_Init,
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_IB_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_J0_Init,
  ensureComposerEsm_LR_Init,
  ensureComposerEsm_M0_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_NA_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wdt_Init,
  ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init,
  ensureComposerEsm_Ytt_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_A0_Init,
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_GZ_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  ensureUseMediaQueryInit,
  useMediaQuery,
} from "../../hooks/use-media-query";
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
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import {
  ensureAppShellAtomsInit,
  reviewFilesAtom,
} from "../../navigation/app-shell-atoms";
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
import {
  ensurePersonalizationJutInit,
  ensureSettingsGlyphI0Init,
  ensureSettingsGlyphRBInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureHotkeyThreadB1Init } from "../../utils/wave-av-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import {
  localConversationThreadUpperA,
  localConversationThreadUpperL as LocalConversationThreadUpperL,
  localConversationThreadUpperR,
} from "../local-conversation-thread";
import {
  threadOverflowMenuO,
  threadOverflowMenuS,
} from "../thread-overflow-menu";
import {
  initThreadPanelToggleButton as InitThreadPanelToggleButton,
  ThreadPanelToggleButton,
} from "../thread-panel-toggle-button";

/** app-initial companion (stub only; never promote) */
const AppInitialEW: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialJZ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialNZ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOZ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialQU: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVE: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWE: any = undefined;
/** split companion stub */
const CodexDismissTooltips: any = undefined;
/** split companion stub */
const LocalConversationThread: any = undefined;
/** split companion stub */
const PendingWorktrees: any = undefined;
/** split companion stub */
const Remote7: any = undefined;
/** split companion stub */
const chatProcessRegister: any = undefined;
/** split companion stub */
const copper: any = undefined;
/** split companion stub */
const deferredUiE1: any = undefined;
/** split companion stub */
const deferredUiJ1: any = undefined;
/** split companion stub */
const deferredUiO1: any = undefined;
/** split companion stub */
const falcon: any = undefined;
/** split companion stub */
const flint: any = undefined;
/** split companion stub */
const kite: any = undefined;
/** split companion stub */
const lemon: any = undefined;
/** split companion stub */
const localThread2: any = undefined;
/** split companion stub */
const marble: any = undefined;
/** split companion stub */
const nickel: any = undefined;
/** split companion stub */
const pearl: any = undefined;
/** split companion stub */
const prism: any = undefined;
/** split companion stub */
const reef: any = undefined;
/** split companion stub */
const slate: any = undefined;
/** split companion stub */
const toggleThreadSidePanel: any = undefined;
/** split companion stub */
const violet: any = undefined;

const ThreadAppShellChromeHelper6: any = undefined;
const ThreadAppShellChromeHelper25: any = undefined;
const ThreadAppShellChromeHelper22: any = undefined;
const ThreadAppShellChromeHelper21: any = undefined;
const ThreadAppShellChromeHelper14: any = undefined;

function ThreadAppShellChromeHelper19(nipple) {
  let { artifacts, onOpen } = nipple,
    [orifice, pin] = hazel.useState(null),
    race;
  {
    let sleeve;
    sleeve = (trunnion, boss) => (
      <ThreadAppShellChromeHelper20
        key={lemon(trunnion)}
        {...{
          hideDivider: orifice === boss || orifice === boss + 1,
          artifact: trunnion,
          onOpen,
          onActiveChange: (cam) => pin(cam ? boss : null),
        }}
      />
    );
    race = artifacts.map(sleeve);
  }
  return (
    <ul className="mx-auto flex w-full max-w-xl flex-col px-panel">{race}</ul>
  );
}
function ThreadAppShellChromeHelper20(detent) {
  let { artifact, hideDivider, onActiveChange, onOpen } = detent,
    eccentric = hideDivider && "after:hidden",
    follower = cx(
      "relative flex w-full after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-token-border-light after:content-[''] last:after:hidden",
      eccentric,
    );
  let guide = nickel(artifact);
  let helix = cx(
    "cursor-interaction relative min-h-10 w-full rounded-md px-2.5 py-2 text-left",
    "hover:bg-token-list-hover-background",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong",
  );
  let impeller, journal, kingpin, land;
  impeller = () => onActiveChange(false);
  journal = () => onActiveChange(true);
  kingpin = () => onActiveChange(true);
  land = () => onActiveChange(false);
  let mesh = (thrust) => onOpen(artifact, thrust);
  let neck = (
    <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
      {
        <ThreadAppShellChromeHelper6
          {...{
            artifact,
            iconClassName: "icon-xs",
            imageClassName: "size-full rounded",
          }}
        />
      }
    </span>
  );
  let pad = marble(artifact);
  let quillshaft = (
    <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
      {pad}
    </span>
  );
  let roller = (
    <span className="flex min-w-0 items-center gap-2">
      {neck}
      {quillshaft}
    </span>
  );
  let spindle = (
    <button
      type="button"
      title={guide}
      className={helix}
      onBlur={impeller}
      onFocus={journal}
      onMouseEnter={kingpin}
      onMouseLeave={land}
      onClick={mesh}
    >
      {roller}
    </button>
  );
  return <li className={follower}>{spindle}</li>;
}
var _r,
  hazel,
  ivory,
  jasper,
  kelp,
  lotus,
  mint = esmInit(() => {
    _r = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    ensureComposerEsm_MT_Init();
    hazel = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureConversationPageEsm_GZ_Init();
    CodexDismissTooltips();
    resolveThreadProjectSelection();
    deferredUiJ1();
    ensurePersonalizationJutInit();
    deferredW1();
    pearl();
    slate();
    kite();
    jasper = {
      closed: {
        opacity: 0,
        y: -8,
        transition: {
          duration: 0.06,
          ease: DEFAULT_MOTION_TRANSITION.ease,
          when: "afterChildren",
        },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.09,
          ease: DEFAULT_MOTION_TRANSITION.ease,
          when: "beforeChildren",
        },
      },
    };
    kelp = {
      closed: {
        transition: {
          staggerChildren: 0.008,
          staggerDirection: -1,
        },
      },
      open: {
        transition: {
          delayChildren: 0.012,
          staggerChildren: 0.016,
        },
      },
    };
    lotus = {
      closed: {
        opacity: 0,
        y: -6,
        transition: {
          duration: 0.045,
          ease: DEFAULT_MOTION_TRANSITION.ease,
        },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.075,
          ease: DEFAULT_MOTION_TRANSITION.ease,
        },
      },
    };
  });
export function threadAppShellChromeT(bravo: unknown) {
  let echo = CodexPluginActionType(ensureComposerEsm_S8_Init),
    olivePrime = CodexPluginActionResult(AppInitialQU),
    prismPrime = CodexPluginActionResult(AppInitialEW)[0] ?? null,
    quillPrime = CodexPluginActionResult(
      requestRealtimeVoicePresentationSurface,
    ),
    reefPrime = CodexPluginActionResult(
      ensureConversationPageEsm_A0_Init.activeTab$,
    ),
    sagePrime = useIntl(),
    topazPrime = CodexPluginActionResult(ensureComposerEsm_M0_Init),
    ultraPrime = CodexPluginActionResult(PendingWorktrees) === "ready",
    vaporPrime = CodexBrowserSurfaceActionType(deferredUiE1, "toggleSidePanel"),
    wheatPrime = `thread-${bravo.threadType}`,
    yarnPrime =
      ultraPrime && bravo.threadType === "remote"
        ? bravo.showReviewTab
        : ultraPrime && olivePrime.kind === "git",
    zephyrPrime = prism.useRef(null),
    acornPrime,
    bloomPrime;
  acornPrime = () => {
    let irisPrime = reefPrime?.tabId ?? null;
    if (!topazPrime) {
      zephyrPrime.current = irisPrime;
      return;
    }
    zephyrPrime.current !== irisPrime &&
      ((zephyrPrime.current = irisPrime),
      closeSidePanelUnlessWindowResize(echo, reefPrime));
  };
  bloomPrime = [reefPrime, topazPrime, echo];
  prism.useEffect(acornPrime, bloomPrime);
  let coralPrime = () => AppInitialVE(echo);
  let driftPrime;
  driftPrime = {
    enabled: yarnPrime,
  };
  ContextMenuRegistration("openReviewTab", coralPrime, driftPrime);
  let eaglePrime = () => PopoverMenu(echo);
  let frostPrime;
  frostPrime = {
    enabled: yarnPrime,
  };
  ContextMenuRegistration("toggleReviewTab", eaglePrime, frostPrime);
  let glidePrime, honeyPrime;
  glidePrime = () => {
    !ultraPrime ||
      bravo.threadType === "remote" ||
      prismPrime == null ||
      openOrFocusFilePanelTab(echo, null, {
        hostId: quillPrime.id,
        workspaceRoot: prismPrime,
      });
  };
  honeyPrime = [quillPrime.id, ultraPrime, bravo.threadType, echo, prismPrime];
  writeScrollTop("toggle-file-tree-panel", glidePrime, honeyPrime);
  return (
    <>
      {bravo.threadType === "remote" ? (
        <>
          {
            <ThreadAppShellChromeHelper22
              {...{
                actionIdPrefix: wheatPrime,
              }}
            />
          }
          {<ThreadAppShellChromeHelper21 {...{}} />}
          {
            <AppIconAZ.HeaderAction
              {...{
                actionId: `${wheatPrime}-panel-toggles`,
                align: "end",
                order: 300,
                slotPosition: "right",
                children: (
                  <InitThreadPanelToggleButton
                    {...{
                      label: sagePrime.formatMessage(reef.toggleSidePanel),
                      disabled: !bravo.showReviewTab,
                      pressed: topazPrime,
                      shortcut: vaporPrime,
                      onClick: () => toggleThreadSidePanel(echo),
                      children: topazPrime ? (
                        <AppIconAZ className="icon-xs rotate-180" />
                      ) : (
                        <AppIconMZ
                          {...{
                            className: "icon-xs rotate-180",
                          }}
                        />
                      ),
                    }}
                  />
                ),
              }}
            />
          }
        </>
      ) : (
        <>
          {ultraPrime &&
          bravo.threadType === "local" &&
          bravo.conversationId != null ? (
            <ThreadAppShellChromeHelper14
              {...{
                conversationId: bravo.conversationId,
              }}
            />
          ) : null}
          {null}
          {
            <ThreadAppShellChromeHelper22
              {...{
                actionIdPrefix: wheatPrime,
              }}
            />
          }
          {
            <ThreadAppShellChromeHelper25
              {...{
                conversationId: bravo.conversationId,
              }}
            />
          }
        </>
      )}
    </>
  );
}
export const threadAppShellChromeN = esmInit(() => {
  olive = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  prism = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_B7_Init();
  codexProjectKey();
  ensureConversationPageEsm_GZ_Init();
  AppInitialOZ();
  ensureSettingsGlyphI0Init();
  deferredUiO1();
  ensureConversationPageEsm_B0_Init();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  chatProcessRegister();
  copper();
  falcon();
  ensureSkillsPageHelpersInit();
  AppInitialNZ();
  AppInitialJZ();
  ensureConversationPageEsm_Act_Init();
  findSidebarSectionElement();
  LocalConversationThread();
  fileSourceBrowserMessages();
  ensureAppScopeInit();
  filterConversationTimelineItems();
  listAvailableCodeThemes();
  ensureHotkeyThreadB1Init();
  Remote7();
  resolvePinnedPanelPlacement();
  ensureComposerEsm_BU_Init();
  kite();
  violet();
  ThreadPanelToggleButton();
  flint();
  mint();
  AppInitialWE();
  ensureAppShellAtomsInit();
  localThread2();
  quill = '[role="tabpanel"][data-app-shell-tab-panel-controller="bottom"]';
  reef = identity({
    toggleSidePanel: {
      id: "thread.sidePanel.toggle",
      defaultMessage: "Toggle side panel",
      description: "Toggles the thread side panel in a local or new thread",
    },
  });
});

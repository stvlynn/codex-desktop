// Restored from ref/webview/assets/thread-overflow-menu-jSLwXfym.js
// Wave GA — full polished body from `thread-overflow-menu-jSLwXfym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 97/135).
// AST split 1/2
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexThreadForkDestination } from "../../analytics/codex-thread-fork-destination";
import { CODEX_THREAD_FORK_SELECTED_TYPE } from "../../analytics/codex-thread-fork-selected-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { getArtifactViewerFromOpen } from "../../artifacts/get-artifact-viewer-from-open";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { defaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { findAutomationForConversation } from "../../automation/find-automation-for-conversation";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_BU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init as EnsureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_QN_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Qa_Init } from "../../conversation/conversation-page-esm-inits";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { useBrowserOpenTarget } from "../../browser/use-browser-open-target";
import { sidebarRealtimeStatusMessages } from "../../chat/sidebar-realtime-status";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { ArchiveChatHeartbeatConfirmDialog } from "../../conversation/archive-chat-heartbeat-confirm-dialog";
import { deferredConversationSo } from "../../conversation/deferred-conversation-so";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { ensureSidebarThreadKeyPrefixesInit, toLocalSidebarThreadKey } from "../../conversation/sidebar-thread-keys";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { useCanPinThreadAction } from "../../conversation/use-can-pin-thread-action";
import { useOpenThreadInNewWindow } from "../../conversation/use-open-thread-in-new-window";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconKo } from "../../icons/app-icon-ko";
import { AppIconMA } from "../../icons/app-icon-ma";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconZa } from "../../icons/app-icon-za";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { handleAnchorOpenHrefAfterExternalCheck } from "../../navigation/handle-anchor-open-href-after-external-check";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { panelControllerForSide } from "../../navigation/panel-controller-for-side";
import { ensurePetNotificationMenuInit } from "../../pets/ensure-pet-notification-menu-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { threadActionErrorMessages } from "../../sidebar/thread-action-error-messages";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { dismissTooltips } from "../../ui/dismiss-tooltips";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { InsetBorderPanel } from "../../ui/inset-border-panel";
import { remote } from "../../ui/remote";
import { codexProjectKey } from "../../utils/codex-project-key";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { runGateWithOptionalExposureLog } from "../../utils/run-gate-with-optional-exposure-log";
import { ensurePersonalizationCInit, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";

import {
  threadOverflowMenuI,
  threadOverflowMenuO,
  threadOverflowMenuR as ThreadOverflowMenuR,
  threadOverflowMenuS,
} from "./part-2";

const AppIconJo: any = undefined;
const AppInitialD: any = undefined;
const AppInitialDr: any = undefined;
const AppInitialF: any = undefined;
const AppInitialGo: any = undefined;
const AppInitialHr: any = undefined;
const AppInitialIB: any = undefined;
const AppInitialJl: any = undefined;
const AppInitialK2: any = undefined;
const AppInitialL: any = undefined;
const AppInitialM: any = undefined;
const AppInitialOE: any = undefined;
const AppInitialP: any = undefined;
const AppInitialS: any = undefined;
const AppInitialSB: any = undefined;
const AppInitialUr: any = undefined;
const AppInitialWo: any = undefined;
const AppInitialXl: any = undefined;
const AppInitialYl: any = undefined;
const AppInitialYo: any = undefined;
const DeferredUiL2: any = undefined;
const DeferredUiO22: any = undefined;
const DeferredUiU232: any = undefined;
const DeferredUiV2: any = undefined;
const InfiniteScrollSentinel: any = undefined;
const InitialRoute3: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const WorkspaceWrite: any = undefined;
const applyFooterUoylu22: any = undefined;
const deferredUiA4: any = undefined;
const deferredUiE1: any = undefined;
const deferredUiUT: any = undefined;
const deferredUiXj: any = undefined;
const ensureSelectWorkspaceKNInit: any = undefined;
const forkConversationFromLatest: any = undefined;
const forkConversationWithGitOrigins: any = undefined;
const remoteHostedPipHiddenThreadIds: any = undefined;
const sidebarElectronPinThread: any = undefined;


export function threadOverflowMenuT({
  conversationId,
  getConversationMarkdown,
  markdownParentConversationId,
  pendingWorktree,
  onRenamePendingWorktree,
  onTogglePendingWorktreePin,
  sideChatTab,
  cwd,
  title,
  canPin = true,
  hideForkActions,
  isWorktreeThread: quill = false,
  archiveNavigation = "home",
  archiveSource = "thread_overflow_menu",
  dropdownAlign = "start",
  triggerButtonClassName,
  triggerButtonColor = "ghost",
  triggerIconClassName = "icon-sm"
}: {
  conversationId?: unknown;
  getConversationMarkdown?: unknown;
  markdownParentConversationId?: unknown;
  pendingWorktree?: unknown;
  onRenamePendingWorktree?: unknown;
  onTogglePendingWorktreePin?: unknown;
  sideChatTab?: unknown;
  cwd?: unknown;
  title?: unknown;
  canPin?: unknown;
  hideForkActions?: unknown;
  isWorktreeThread?: unknown;
  archiveNavigation?: unknown;
  archiveSource?: unknown;
  dropdownAlign?: unknown;
  triggerButtonClassName?: unknown;
  triggerButtonColor?: unknown;
  triggerIconClassName?: unknown;
  [key: string]: unknown;
}) {
  let reef = CodexPluginActionType(ensureComposerEsm_S8_Init),
    sage = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    topaz = useIntl(),
    {
      archiveThread,
      renameThread,
      copyAppLink,
      copyConversationMarkdown,
      copySessionId,
      copyWorkingDirectory
    } = usePointerSurfaceInteractionGate(),
    ultra = useNavigate(),
    [vapor, wheat] = lemon.useState(false),
    [yarn, zephyr] = lemon.useState(null),
    [acorn, bloom] = lemon.useState(null),
    [coral, drift] = lemon.useState(null),
    [eagle, frost] = lemon.useState(false),
    glide = CodexBrowserSurfaceActionType(DeferredUiU232, conversationId),
    honey = CodexBrowserSurfaceActionType(deferredUiUT, toLocalSidebarThreadKey(conversationId ?? resolveScienceModelLabel("missing-conversation"))),
    $e = CodexPluginActionResult(AppInitialSB),
    iris = CodexBrowserSurfaceActionType(deferredUiA4, conversationId),
    {
      isPinned,
      togglePin
    } = useCanPinThreadAction(conversationId, {
      canPin
    }),
    jewel = pendingWorktree?.isPinned ?? isPinned,
    knoll = () => {
      if (canPin) {
        if (pendingWorktree != null) {
          onTogglePendingWorktreePin?.();
          return;
        }
        togglePin();
      }
    },
    lunar = CodexBrowserSurfaceActionType(deferredUiE1, "toggleThreadPin"),
    moss = canPin ? lunar : null,
    north = CodexBrowserSurfaceActionType(deferredUiE1, "renameThread"),
    orbit = CodexBrowserSurfaceActionType(deferredUiE1, "archiveThread"),
    pine = CodexBrowserSurfaceActionType(deferredUiE1, "copyWorkingDirectory"),
    quest = CodexBrowserSurfaceActionType(deferredUiE1, "copySessionId"),
    ridge = CodexBrowserSurfaceActionType(deferredUiE1, "copyDeeplink"),
    storm = CodexBrowserSurfaceActionType(deferredUiE1, "copyConversationMarkdown"),
    tide = CodexBrowserSurfaceActionType(deferredUiE1, "openSideChat"),
    {
      canOpenThreadInNewWindow,
      openThreadInNewWindow
    } = useOpenThreadInNewWindow({
      conversationId
    }),
    unity = CodexBrowserSurfaceActionType(AppInitialHr, conversationId),
    vale = unity.isEligible;
  CodexBrowserSurfaceActionType(DeferredUiL2, conversationId);
  let wave = conversationId != null && sideChatTab != null && !isCurrentSpecialWindowRoute(),
    apex = CodexBrowserSurfaceActionType(DeferredUiO22, conversationId),
    brook = useDvtBindable(getArtifactViewerFromOpen),
    cliff = rain => {
      if (conversationId == null) return;
      let trail = honey ?? (iris === "projectless" || $e?.includes(conversationId) === true ? null : undefined),
        urn = archiveNavigation === "home" ? () => {
          ensureComposerEsm_QN_Init(reef, "work");
          ultra("/", {
            replace: true,
            state: {
              focusComposerNonce: Date.now(),
              ...(trail === undefined ? {} : {
                project: remoteHostedPipHiddenThreadIds(trail)
              })
            }
          });
        } : undefined;
      archiveThread({
        conversationId,
        hostId: glide,
        source: rain,
        onArchiveStart: urn,
        appHistory: {
          onRedoStart: vine => {
            vine && urn?.();
          }
        }
      });
    },
    dusk = wind => {
      conversationId != null && (async () => {
        let yarrow = null;
        try {
          yarrow = findAutomationForConversation({
            automations: (await invokeDesktopRpc("list-automations")).items,
            conversationId,
            includePausedAutomations: true
          });
        } catch (azure) {
          appActionSidebarProjectRefSchema.error("Error checking heartbeat automation before archive", {
            safe: {},
            sensitive: {
              error: azure
            }
          });
        }
        if (yarrow == null) {
          cliff(wind);
          return;
        }
        zephyr(wind);
        drift(yarrow.name);
        wheat(true);
      })();
    },
    elm = birch => {
      if (birch != null) {
        AppInitialYl({
          scope: reef,
          automationId: birch.id,
          title: birch.name
        });
        return;
      }
      AppInitialXl({
        scope: reef,
        seed: {
          directiveKey: `thread-overflow-${conversationId}`,
          mode: null,
          id: null,
          kind: "heartbeat",
          name: title ?? "",
          prompt: "",
          rrule: "",
          cwds: [],
          executionEnvironment: null,
          localEnvironmentConfigPath: null,
          model: null,
          reasoningEffort: null,
          targetThreadId: conversationId,
          status: "ACTIVE"
        },
        title: title ?? topaz.formatMessage({
          id: "localConversation.automation.newTabTitle",
          defaultMessage: "New scheduled task",
          description: "Right panel tab title for a scheduled task created from a task"
        })
      });
    },
    fern = () => {
      conversationId == null || sideChatTab == null || threadOverflowMenuS(reef, sideChatTab, {
        sourceConversationId: conversationId,
        cwd,
        hostId: glide,
        collaborationMode: apex,
        intl: topaz
      }).catch(error => {
        appActionSidebarProjectRefSchema.error("Error opening side chat", {
          safe: {},
          sensitive: {
            error
          }
        });
        reef.get(toastAtom).danger(topaz.formatMessage({
          id: "threadHeader.openSideChatError",
          defaultMessage: "Failed to open side chat",
          description: "Error message shown when opening a side chat fails"
        }));
      });
    };
  if (ContextMenuRegistration("copyConversationMarkdown", () => {
    conversationId != null && getConversationMarkdown != null && copyConversationMarkdown({
      conversationId,
      parentConversationId: markdownParentConversationId ?? null,
      getMarkdown: getConversationMarkdown
    });
  }, {
    enabled: conversationId != null && getConversationMarkdown != null
  }), ContextMenuRegistration("openSideChat", fern, {
    enabled: conversationId != null && wave
  }), writeScrollTop("rename-thread", () => {
    conversationId == null && pendingWorktree == null || bloom(title ?? "");
  }, [conversationId, pendingWorktree, title]), writeScrollTop("archive-thread", ({
    source
  }) => {
    dusk(source);
  }, [dusk]), writeScrollTop("copy-conversation-path", () => {
    copyWorkingDirectory(cwd);
  }, [cwd]), writeScrollTop("copy-working-directory", () => {
    copyWorkingDirectory(cwd);
  }, [cwd]), writeScrollTop("copy-session-id", () => {
    conversationId && copySessionId(conversationId);
  }, [conversationId]), writeScrollTop("copy-deeplink", () => {
    conversationId && copyAppLink(conversationId);
  }, [conversationId]), conversationId == null && pendingWorktree == null) return null;
  let grove = cwd != null && (quill || honey?.repositoryData != null),
    hill = async () => {
      if (conversationId == null) return;
      logProductEvent(reef, CODEX_THREAD_FORK_SELECTED_TYPE, {
        destination: quill ? CodexThreadForkDestination.CODEX_THREAD_FORK_DESTINATION_SAME_WORKTREE : CodexThreadForkDestination.CODEX_THREAD_FORK_DESTINATION_LOCAL,
        source: handleAnchorOpenHrefAfterExternalCheck.CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU
      });
      let canyon = await forkConversationFromLatest(reef, {
        sourceConversationId: conversationId,
        sourceWorkspaceRoot: cwd
      });
      canyon != null && ultra(`/local/${canyon}`);
    },
    isle = async () => {
      if (conversationId == null) return;
      logProductEvent(reef, CODEX_THREAD_FORK_SELECTED_TYPE, {
        destination: CodexThreadForkDestination.CODEX_THREAD_FORK_DESTINATION_NEW_WORKTREE,
        source: handleAnchorOpenHrefAfterExternalCheck.CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU
      });
      let dew = await forkConversationWithGitOrigins(reef, {
        localEnvironmentSelectionsByWorkspace: brook,
        sourceConversationId: conversationId,
        sourceWorkspaceRoot: cwd
      });
      dew != null && cwd != null && ultra(`/local/${dew.clientThreadId}`);
    },
    juniper = () => {
      yarn != null && (wheat(false), cliff(yarn));
    },
    lagoon = jewel ? sidebarElectronPinThread : deferredConversationSo,
    meadow = topaz.formatMessage(threadActionErrorMessages.moreActions),
    nest = <MemoizedFormattedMessage {...lagoon} />,
    oak = conversationId != null && !hideForkActions && true,
    petal = canOpenThreadInNewWindow,
    quiet = unity.reason === "turn_in_progress";
  return <>{conversationId == null ? null : <ThreadOverflowMenuR enabled={canPin} onToggle={knoll} />}{<DropdownMenuPopover open={eagle} onOpenChange={frost} triggerButton={<ReadLoginRouteQuerySnapshot size="icon" color={triggerButtonColor} className={triggerButtonClassName ?? "no-drag"} aria-label={meadow}><AppIconQI className={triggerIconClassName} /></ReadLoginRouteQuerySnapshot>} align={dropdownAlign} contentWidth="menu">{canPin ? <DropdownMenu.Item onSelect={knoll} LeftIcon={jewel ? AppIconZa : defaultHourlyScheduleConfig} keyboardShortcut={moss}>{nest}</DropdownMenu.Item> : null}<DropdownMenu.Item onSelect={() => bloom(title ?? "")} LeftIcon={AppIconYj} keyboardShortcut={north}><MemoizedFormattedMessage {...threadActionErrorMessages.renameThread} /></DropdownMenu.Item>{conversationId == null ? null : <DropdownMenu.Item onSelect={() => dusk(archiveSource)} LeftIcon={AppIconJo} keyboardShortcut={orbit}><MemoizedFormattedMessage {...threadActionErrorMessages.archiveThread} /></DropdownMenu.Item>}<DropdownMenu.Separator />{null}{wave ? <DropdownMenu.Item onSelect={fern} LeftIcon={AppInitialP} keyboardShortcut={tide}><MemoizedFormattedMessage id="threadHeader.openSideChat" defaultMessage="Open side chat" description="Menu item to fork a local chat into an ephemeral right panel side chat" /></DropdownMenu.Item> : null}<DropdownMenu.FlyoutSubmenuItem LeftIcon={AppIconPR} label={<MemoizedFormattedMessage id="threadHeader.copyActions" defaultMessage="Copy" description="Menu item that opens task copy actions" />}><DropdownMenu.Item onSelect={() => copyWorkingDirectory(cwd)} LeftIcon={AppIconPR} keyboardShortcut={pine} disabled={!cwd}><MemoizedFormattedMessage {...threadActionErrorMessages.copyWorkingDirectory} /></DropdownMenu.Item>{conversationId == null ? null : <>{<DropdownMenu.Item onSelect={() => copySessionId(conversationId)} LeftIcon={AppIconPR} keyboardShortcut={quest}><MemoizedFormattedMessage {...threadActionErrorMessages.copySessionId} /></DropdownMenu.Item>}{<DropdownMenu.Item onSelect={() => copyAppLink(conversationId)} LeftIcon={AppIconPR} keyboardShortcut={ridge}><MemoizedFormattedMessage {...threadActionErrorMessages.copyAppLink} /></DropdownMenu.Item>}</>}{conversationId != null && getConversationMarkdown != null ? <DropdownMenu.Item onSelect={() => copyConversationMarkdown({
          conversationId,
          parentConversationId: markdownParentConversationId ?? null,
          getMarkdown: getConversationMarkdown
        })} LeftIcon={AppIconPR} keyboardShortcut={storm}><MemoizedFormattedMessage {...threadActionErrorMessages.copyConversationMarkdown} /></DropdownMenu.Item> : null}</DropdownMenu.FlyoutSubmenuItem>{oak ? <DropdownMenu.FlyoutSubmenuItem LeftIcon={coerceLocalFilesystemPath} label={<MemoizedFormattedMessage id="threadHeader.forkActions" defaultMessage="Continue in…" description="Menu item that opens chat continuation options" />}><DropdownMenu.Item onSelect={() => {
          hill();
        }} LeftIcon={quill ? ProjectDropdownGlyphIcon : AppIconFB}><MemoizedFormattedMessage {...quill ? threadActionErrorMessages.forkIntoSameWorktree : threadActionErrorMessages.forkIntoLocal} /></DropdownMenu.Item>{!sage && grove ? <DropdownMenu.Item onSelect={() => {
          isle();
        }} LeftIcon={ProjectDropdownGlyphIcon}><MemoizedFormattedMessage {...threadActionErrorMessages.forkIntoWorktree} /></DropdownMenu.Item> : null}</DropdownMenu.FlyoutSubmenuItem> : null}<ElectronOnly electron={true}>{eagle && conversationId != null ? <Jade canAddHeartbeatAutomation={vale} conversationId={conversationId} onSelect={elm} showDisabledAddHeartbeatAutomation={quiet} /> : null}</ElectronOnly>{petal ? <DropdownMenu.Separator /> : null}{canOpenThreadInNewWindow ? <DropdownMenu.Item onSelect={openThreadInNewWindow} LeftIcon={AppInitialDr}><MemoizedFormattedMessage {...threadActionErrorMessages.openInNewWindow} /></DropdownMenu.Item> : null}</DropdownMenuPopover>}{acorn == null ? null : <AppInitialWo initialValue={acorn} messages={undefined} onClose={() => bloom(null)} requireNonEmpty={pendingWorktree != null} trimOnSave={pendingWorktree != null} onSave={ever => {
      if (pendingWorktree != null) {
        onRenamePendingWorktree?.(ever);
        return;
      }
      conversationId != null && renameThread({
        conversationId,
        title: ever
      });
    }} />}{vapor && <ArchiveChatHeartbeatConfirmDialog heartbeatAutomationName={coral} open={true} onOpenChange={wheat} onConfirm={juniper} />}</>;
}
function Jade(ivory) {
  let {
      canAddHeartbeatAutomation,
      conversationId,
      onSelect,
      showDisabledAddHeartbeatAutomation
    } = ivory,
    {
      data
    } = CodexPluginActionResult(ensurePersonalizationCInit),
    jasper = findAutomationForConversation({
      automations: data?.items ?? [],
      conversationId,
      includePausedAutomations: true
    });
  let kelp = jasper,
    lotus = kelp != null;
  if (!(lotus || canAddHeartbeatAutomation || showDisabledAddHeartbeatAutomation)) return null;
  let mint = () => onSelect(kelp);
  let nova = !lotus && !canAddHeartbeatAutomation,
    olive = lotus ? threadActionErrorMessages.editAutomation : threadActionErrorMessages.addAutomation,
    prism = <MemoizedFormattedMessage {...olive} />;
  return <DropdownMenu.Item onSelect={mint} LeftIcon={AppIconCct} disabled={nova}>{prism}</DropdownMenu.Item>;
}
var kite, lemon, $;
export const threadOverflowMenuN = esmInit(() => {
  kite = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  lemon = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  DeferredUiV2();
  AppInitialS();
  ensurePetNotificationMenuInit();
  AppInitialUr();
  AppInitialJl();
  codexProjectKey();
  ensureConversationPageEsm_GZ_Init();
  InitialRoute3();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_K1_Init();
  ensureSelectWorkspaceKNInit();
  AppInitialYo();
  usePluginsFeatureEnabled();
  AppInitialM();
  ensureDropdownMenuPopoverInit();
  CHATGPT_PRODUCT_ID();
  ensureConversationPageEsm_FR_Init();
  deferredUiXj();
  AppInitialOE();
  AppInitialIB();
  normalizeCronScheduleFields();
  ensureCodexSpriteAssetsInit();
  isRemoteControlConnectionFailedError();
  ensureConversationPageEsm_Qa_Init();
  ensureSettingsGlyphRBInit();
  threadActionErrorMessages();
  findSidebarSectionElement();
  ensureComposerEsm_K9_Init();
  deferredUiH();
  filterConversationTimelineItems();
  ensureComposerEsm_F7_Init();
  InfiniteScrollSentinel();
  InsetBorderPanel();
  AppInitialGo();
  ensureSidebarThreadKeyPrefixesInit();
  remote();
  posixPathBasename();
  scrollAppActionTargetTo();
  AppIconKo();
  useCanPinThreadAction();
  threadOverflowMenuO();
  AppIconMA();
  threadOverflowMenuI();
  sidebarRealtimeStatusMessages();
  $ = getJsxRuntime();
});

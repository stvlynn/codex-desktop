// Restored from ref/webview/assets/quick-chat-window-_GO18s8K.js
// Wave FZ — full polished body from `quick-chat-window-_GO18s8K/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 102/137).
// AST split 2/3
/* split-lane-import-depth:1 */


import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserProfileImportPasswordStatus } from "../../analytics/codex-browser-profile-import-password-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexRemoteControlRefreshSource } from "../../analytics/codex-remote-control-refresh-source";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationFlagsAtom, chatgptConversationServerIdAtom, chatgptConversationTitleAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_BI_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_RV_Init as EnsureComposerEsm_RV_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_ZI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_Mx_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { _useChatgptComposerControllerI, _useChatgptComposerControllerR, _useChatgptComposerControllerT, useChatgptComposerControllerA as UseChatgptComposerControllerA, useChatgptComposerControllerB as UseChatgptComposerControllerB, useChatgptComposerControllerF, useChatgptComposerControllerI, useChatgptComposerControllerN, useChatgptComposerControllerO, useChatgptComposerControllerP as UseChatgptComposerControllerP, useChatgptComposerControllerR, useChatgptComposerControllerT, useChatgptComposerControllerV as UseChatgptComposerControllerV, useChatgptComposerControllerW, useChatgptComposerControllerX, useChatgptComposerControllerY } from "../../boundaries/use-chatgpt-composer-controller/index";
import { activateConversationSurface } from "../../conversation/activate-conversation-surface";
import { ArtifactReferenceLink } from "../../conversation/artifact-reference-link";
import { isCustomAgentId } from "../../conversation/is-custom-agent-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { renderStringOrIntlMessage } from "../../i18n/render-string-or-intl-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { buildSiteSettingsPath as BuildSiteSettingsPath } from "../../navigation/site-settings-path";
import { useColdNavigate as UseColdNavigate } from "../../navigation/use-cold-navigate";
import { ProjectMarkerIcon } from "../../projects/project-marker-icon";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { openRightPanel } from "../../shell/open-right-panel";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { FloatingSurfaceCssClass } from "../../ui/floating-surface-css-classes";
import { ensureIconPixelSizeInit, getIconPixelSize } from "../../ui/icon-pixel-size";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { identity as Identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { safeZodValue } from "../../utils/safe-zod-value";
import { quickChatDockPositionAtom, quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";
import { attachQuickChatProject, mapQuickChatSurfaceMode, markQuickChatConversationStarted, openOrFocusQuickChat, setQuickChatDockPosition, setQuickChatSize } from "../../windows/quick-chat-surface-helpers";

/** split companion stub */
const quill: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAx: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBx: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialHT: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialLx: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialMP: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPP: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWP: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWx: any = undefined;
/** split companion stub */
const DeferredUiQx: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const drift: any = undefined;
/** split companion stub */
const honey: any = undefined;
/** split companion stub */
const iris: any = undefined;
/** split companion stub */
const lemon: any = undefined;
/** split companion stub */
const nickel: any = undefined;
/** split companion stub */
const olive: any = undefined;
/** split companion stub */
const umbra: any = undefined;
/** split companion stub */
const useQuickChatConversationFilter: any = undefined;
/** split companion stub */
const violet: any = undefined;
/** split companion stub */
const willow: any = undefined;

const ReadLoginRouteQuerySnapshot: any = undefined;
const QuickChatWindowHelper9: any = undefined;
const QuickChatWindowHelper8: any = undefined;
const QuickChatWindowHelper17: any = undefined;
const QuickChatWindowHelper16: any = undefined;
const QuickChatWindowHelper1: any = undefined;
const InfiniteScrollSentinel: any = undefined;
const AppInitialTT: any = undefined;
const AppInitialS: any = undefined;
const AppInitialNn: any = undefined;
const AppInitialDr: any = undefined;

function QuickChatWindowHelper24(yellowPrime) {
  let {
      children,
      footer,
      initialScrollMode = "follow",
      isWindowZoomApplied = true,
      scrollOrigin = "bottom",
      variant = "floating"
    } = yellowPrime,
    zincPrime = useIntl(),
    {
      contentRef,
      footerRef,
      scrollToLatest,
      showScrollToLatest,
      spacerRef: amberPrime,
      viewportRef
    } = quill(scrollOrigin, initialScrollMode, isWindowZoomApplied),
    basaltPrime = footer == null ? null : <div ref={footerRef} className="absolute inset-x-0 bottom-0 z-10 w-full shrink-0" data-thread-scroll-footer="true">
          <div className="relative z-10">
            {scrollOrigin === "bottom" ? <div className="relative h-0">
                <AppInitialNn className="bottom-[calc(100%+6*var(--spacing))]" label={zincPrime.formatMessage({
            id: "quickChat.scrollToLatestMessage",
            defaultMessage: "Scroll to latest message",
            description: "Label for the button that returns a quick chat to the latest message"
          })} onClick={scrollToLatest} show={showScrollToLatest} />
              </div> : null}
            {footer}
          </div>
        </div>;
  let cedarPrime = basaltPrime,
    daisyPrime = footer == null ? honey.headerScrollFade : honey.windowScrollMask,
    emberPrime = IntlProvider(daisyPrime, "[container-type:inline-size] flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto [container-name:thread-content] [overflow-anchor:none] focus:outline-none");
  let flintPrime = footer != null && honey.scrollContent,
    garnetPrime = IntlProvider("flex min-h-full shrink-0 flex-col", flintPrime);
  let hazelPrime = variant === "window" ? "px-5" : "px-4",
    ivoryPrime = IntlProvider("flex flex-1 shrink-0 flex-col pt-4", hazelPrime);
  let jasperPrime = <div ref={contentRef} className={ivoryPrime} data-quick-chat-thread-scroll-content="true">
      {children}
    </div>;
  let kelpPrime = <div ref={amberPrime} aria-hidden={true} className="shrink-0" data-quick-chat-thread-scroll-spacer="true" />;
  let lotusPrime = <div className={garnetPrime}>
      {jasperPrime}
      {kelpPrime}
    </div>;
  let mintPrime = <div ref={viewportRef} className={emberPrime} data-quick-chat-thread-scroll-container="true" tabIndex={0}>
      {lotusPrime}
    </div>;
  return <div className="relative flex min-h-0 flex-1 flex-col">
      {mintPrime}
      {cedarPrime}
    </div>;
}
var jewel,
  knoll,
  lunar = esmInit(() => {
    jewel = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    AppInitialPn();
    drift();
    iris();
  });
export function quickChatWindowT(vaporPrime: unknown) {
  let {
      canPopOut,
      session,
      variant = "floating",
      onAddToComposer,
      onClose,
      onPopOut
    } = vaporPrime,
    wheatPrime = CodexPluginActionType(appScopeAtom),
    yarnPrime = useIntl(),
    zephyrPrime = getIconPixelSize(),
    acornPrime = ensureIconPixelSizeInit(storm.useSyncExternalStore(pine, quest), variant === "floating" ? zephyrPrime : 1),
    bloomPrime = ensureIconPixelSizeInit(storm.useSyncExternalStore(pine, ridge), variant === "floating" ? zephyrPrime : 1),
    coralPrime = ContextMenuRegistration(),
    driftPrime = storm.useId(),
    eaglePrime = CodexPluginActionResult(toastAtom),
    frostPrime = CodexPluginActionResult(quickChatDockPositionAtom),
    glidePrime = CodexPluginActionResult(AppInitialLx),
    honeyPrime = CodexPluginActionResult(quickChatSurfaceCollapsedAtom),
    irisPrime = CodexPluginActionResult(AppInitialBx),
    jewelPrime = mapQuickChatSurfaceMode(variant);
  let knollPrime = jewelPrime,
    lunarPrime = ensureComposerEsm_Tft_Init(),
    mossPrime = createInMemoryStorageAdapter(0),
    northPrime = createInMemoryStorageAdapter(0),
    {
      contextSourceConversationId,
      conversationId,
      initialScrollMode,
      projectId,
      projectName,
      title
    } = session,
    orbitPrime = {
      flatConversationHistory: true
    };
  let pinePrime = useQuickChatConversationFilter(orbitPrime),
    questPrime = pinePrime.chatTargets.flatMap($n);
  let ridgePrime = questPrime,
    stormPrime = CodexBrowserSurfaceActionType(apex, ridgePrime),
    tidePrime = CodexBrowserSurfaceActionType(brook, ridgePrime),
    unityPrime = CodexBrowserSurfaceActionType(AppInitialWP, conversationId),
    valePrime = CodexBrowserSurfaceActionType(chatgptConversationServerIdAtom, conversationId),
    wavePrime = CodexBrowserSurfaceActionType(chatgptConversationTitleAtom, conversationId),
    apexPrime = session.hasConversation || valePrime != null,
    brookPrime = wavePrime ?? projectId,
    cliffPrime = brookPrime == null ? null : pinePrime.projectNamesById.get(brookPrime) ?? projectName;
  let duskPrime = cliffPrime,
    elmPrime = CodexBrowserSurfaceActionType(chatgptConversationServerIdAtom, conversationId),
    fernPrime = CodexBrowserSurfaceActionType(AppInitialMP, conversationId),
    grovePrime = CodexBrowserSurfaceActionType(AppInitialPP, conversationId),
    hillPrime = CodexBrowserSurfaceActionType(chatgptConversationTitleAtom, conversationId),
    islePrime = CodexBrowserSurfaceActionType(useChatgptComposerControllerI, conversationId),
    $e = CodexBrowserSurfaceActionType(isCustomAgentId, conversationId),
    juniperPrime = [];
  let [lagoonPrime, meadowPrime] = storm.useState(juniperPrime),
    [nestPrime, oakPrime] = storm.useState(null),
    [at, petalPrime] = storm.useState(null),
    quietPrime = storm.useRef(moss),
    rainPrime = storm.useRef(null),
    [seedPrime, trailPrime] = storm.useState(false),
    urnPrime = lagoonPrime.length > 0 || nestPrime != null,
    _t = seedPrime || islePrime != null && !$e || urnPrime,
    vinePrime = variant === "window" ? window : null,
    windPrime = orificePrime => {
      quietPrime.current(orificePrime);
    };
  let yarrowPrime = {
    disabled: _t,
    dropTarget: vinePrime,
    onFilesDropped: windPrime
  };
  let azurePrime = AppInitialHT(yarrowPrime),
    rest,
    isDragActive;
  ({
    isDragActive,
    ...rest
  } = azurePrime);
  let [birchPrime, canyonPrime] = storm.useState(null),
    dewPrime = birchPrime ?? irisPrime ?? openOrFocusQuickChat,
    [everPrime, fieldPrime] = storm.useState(false),
    [grainPrime, havenPrime] = storm.useState(false),
    inkPrime,
    jadeitePrime;
  {
    let pinPrime = yarnPrime.formatMessage({
        id: "quickChat.recentFallbackTitle",
        defaultMessage: "Untitled chat",
        description: "Fallback title for a recent ChatGPT conversation in Quick Chat"
      }),
      racePrime = (trunnionPrime, bossPrime) => [trunnionPrime, tidePrime[bossPrime] ?? trunnionPrime];
    let sleevePrime = new Map(ridgePrime.map(racePrime));
    inkPrime = lemon({
      optimisticConversationIdBySourceId: sleevePrime,
      optimisticTitleByConversationId: new Map(ridgePrime.map((item, index) => [sleevePrime.get(item) ?? item, stormPrime[index] ?? null])),
      recentFallbackTitle: pinPrime,
      sourceTargets: [...pinePrime.pinnedTargets, ...pinePrime.chatTargets]
    });
    jadeitePrime = nickel(inkPrime);
  }
  let kernelPrime = jadeitePrime,
    leafPrime = title ?? unityPrime,
    maplePrime,
    nimbusPrime,
    opalPrime,
    plumePrime;
  {
    nimbusPrime = apexPrime && leafPrime != null ? leafPrime : yarnPrime.formatMessage({
      id: "quickChat.title",
      defaultMessage: "New chat",
      description: "Title of the Quick Chat window"
    });
    let camPrime;
    camPrime = yarnPrime.formatMessage({
      id: "quickChat.close",
      defaultMessage: "Close chat",
      description: "Label for closing Quick Chat"
    });
    maplePrime = camPrime;
    let detentPrime;
    detentPrime = yarnPrime.formatMessage({
      id: "quickChat.history.back",
      defaultMessage: "Back to chat",
      description: "Accessible label for returning from Quick Chat history to the current chat"
    });
    opalPrime = detentPrime;
    plumePrime = yarnPrime.formatMessage({
      id: "quickChat.history.open",
      defaultMessage: "View chat history, current chat: {title}",
      description: "Accessible label for opening Quick Chat history from the current chat title"
    }, {
      title: nimbusPrime
    });
  }
  let quillowPrime = plumePrime,
    rootPrime = yarnPrime.formatMessage({
      id: "quickChat.newChat",
      defaultMessage: "New chat",
      description: "Action for starting a new Quick Chat conversation"
    });
  let silkPrime = rootPrime,
    thornPrime = yarnPrime.formatMessage({
      id: "quickChat.popOut",
      defaultMessage: "Open in a new window",
      description: "Label for moving Quick Chat into a separate ChatGPT window"
    });
  let uplandPrime = thornPrime,
    $t = yarnPrime.formatMessage({
      id: "quickChat.resizeWidth",
      defaultMessage: "Resize chat width",
      description: "Accessible label for resizing the chat width"
    });
  let vistaPrime = $t,
    wispPrime = yarnPrime.formatMessage({
      id: "quickChat.resizeHeight",
      defaultMessage: "Resize chat height",
      description: "Accessible label for resizing the chat height"
    });
  let yonderPrime = wispPrime,
    on = Math.max(0, acornPrime - 32 - 46),
    zenithPrime = bloomPrime / 2,
    anvilPrime = Math.min(unity, on),
    beaconPrime = Math.min(vale, zenithPrime),
    cragPrime = north(dewPrime.height, anvilPrime, on),
    domePrime = north(dewPrime.width, beaconPrime, zenithPrime),
    eddyPrime = umbra(frostPrime, {
      height: cragPrime,
      width: domePrime
    }, acornPrime, bloomPrime),
    fjordPrime,
    glenPrime,
    hearthPrime,
    inletPrime,
    jettyPrime,
    _n,
    knobPrime;
  {
    fjordPrime = async () => {
      if (valePrime != null) {
        DeferredUiQx(wheatPrime, {
          action: CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_ADD_TO_CODEX_CLICKED,
          dockPosition: frostPrime,
          hasConversation: apexPrime,
          source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
          surface: knollPrime
        });
        havenPrime(true);
        try {
          await onAddToComposer({
            conversationId: valePrime,
            title: leafPrime?.trim() || yarnPrime.formatMessage({
              id: "quickChat.untitledConversation",
              defaultMessage: "Untitled conversation",
              description: "Fallback title when adding an untitled Quick Chat conversation to Codex"
            })
          });
        } catch {
          DeferredUiQx(wheatPrime, {
            action: CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_ADD_TO_CODEX_FAILED,
            dockPosition: frostPrime,
            hasConversation: apexPrime,
            source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
            surface: knollPrime
          });
          havenPrime(false);
          eaglePrime.warning(yarnPrime.formatMessage({
            id: "quickChat.addToComposerFailed",
            defaultMessage: "Could not add this chat to Codex yet",
            description: "Toast shown when Quick Chat cannot be added to a Codex composer"
          }));
          return;
        }
        DeferredUiQx(wheatPrime, {
          action: CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_ADD_TO_CODEX_SUCCEEDED,
          dockPosition: frostPrime,
          hasConversation: apexPrime,
          source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
          surface: knollPrime
        });
        glenPrime(CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON);
      }
    };
    let eccentricPrime;
    eccentricPrime = journalPrime => {
      let {
        cancel,
        conversationId: _conversationId
      } = useChatgptComposerControllerT(wheatPrime, journalPrime);
      meadowPrime(kingpinPrime => [...kingpinPrime, {
        cancel,
        conversationId: _conversationId,
        returnFocus: orbit(),
        title: journalPrime.query
      }]);
    };
    jettyPrime = eccentricPrime;
    let followerPrime;
    followerPrime = landPrime => {
      oakPrime({
        ...landPrime,
        returnFocus: orbit()
      });
    };
    _n = followerPrime;
    let guidePrime;
    guidePrime = () => {
      let meshPrime = nestPrime?.returnFocus;
      oakPrime(null);
      requestAnimationFrame(() => {
        meshPrime?.focus();
      });
    };
    hearthPrime = guidePrime;
    let helixPrime;
    helixPrime = neckPrime => {
      let padPrime = lagoonPrime.slice(neckPrime),
        quillshaftPrime = padPrime[0]?.returnFocus;
      if (padPrime.length !== 0) {
        for (let rollerPrime of padPrime) rollerPrime.cancel();
        meadowPrime(spindlePrime => spindlePrime.slice(0, neckPrime));
        requestAnimationFrame(() => {
          quillshaftPrime?.focus();
        });
      }
    };
    knobPrime = helixPrime;
    let impellerPrime;
    impellerPrime = () => {
      knobPrime(lagoonPrime.length - 1);
    };
    inletPrime = impellerPrime;
    glenPrime = thrustPrime => {
      for (let yokePrime of lagoonPrime) yokePrime.cancel();
      onClose(thrustPrime);
    };
  }
  let ledgePrime = (bafflePrime, capstanPrime) => {
    let diaphragmPrime = capstanPrime === undefined ? {
        height: cragPrime,
        width: domePrime
      } : capstanPrime,
      elbowPrime = umbra(frostPrime, diaphragmPrime, acornPrime, bloomPrime),
      ferrulePrime = {
        x: elbowPrime.x + mossPrime.get(),
        y: elbowPrime.y + northPrime.get()
      },
      grommetPrime = umbra(bafflePrime, diaphragmPrime, acornPrime, bloomPrime);
    mossPrime.stop();
    northPrime.stop();
    mossPrime.jump(ferrulePrime.x - grommetPrime.x);
    northPrime.jump(ferrulePrime.y - grommetPrime.y);
    bafflePrime !== frostPrime && tide.flushSync(() => {
      setQuickChatDockPosition(wheatPrime, bafflePrime, {
        source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_DRAG,
        surface: knollPrime
      });
    });
    AppQueryClientProvider(mossPrime, 0, wave);
    AppQueryClientProvider(northPrime, 0, wave);
  };
  let mirePrime = ledgePrime,
    nookPrime = (headerPrime, injectorPrime) => {
      let jumperPrime = willow(frostPrime, headerPrime, {
          height: cragPrime,
          width: domePrime
        }, mossPrime.get(), injectorPrime.width, acornPrime, bloomPrime),
        kerfPrime = eddyPrime.y + northPrime.get() + cragPrime,
        louverPrime = umbra(frostPrime, injectorPrime, acornPrime, bloomPrime),
        manifoldPrime = north(kerfPrime - injectorPrime.height, 16, acornPrime - injectorPrime.height - 16);
      mossPrime.stop();
      northPrime.stop();
      tide.flushSync(() => {
        canyonPrime(injectorPrime);
      });
      mossPrime.jump(jumperPrime);
      northPrime.jump(manifoldPrime - louverPrime.y);
    };
  let oxbowPrime = nookPrime,
    pondPrime = nipPrime => {
      setQuickChatSize(wheatPrime, nipPrime, {
        source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_RESIZE_HANDLE,
        surface: knollPrime
      });
      mirePrime(frostPrime, nipPrime);
    };
  let quarryPrime = pondPrime,
    rapidsPrime = (outletPrime, packingPrime) => {
      attachQuickChatProject(wheatPrime, outletPrime, packingPrime);
    };
  let spurPrime = rapidsPrime,
    torPrime = brookPrime == null ? "-ml-2" : undefined,
    updraftPrime = reducerPrime => {
      wheatPrime.set(quickChatSurfaceCollapsedAtom, reducerPrime);
    };
  let vergePrime = <AppInitialS breadcrumbTriggerClassName={torPrime} disabled={apexPrime} menuOpen={honeyPrime} projectId={brookPrime} projectName={duskPrime} projectlessTriggerLabel={nimbusPrime} showProjectlessIcon={false} variant="breadcrumb" onMenuOpenChange={updraftPrime} onProjectChange={spurPrime} />;
  let weirPrime = vergePrime,
    yardPrime = variant === "floating" ? false : undefined,
    anchorPrime = IntlProvider("flex flex-col overflow-hidden text-token-foreground", variant === "floating" && IntlProvider(FloatingSurfaceCssClass.floatingSurface, "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))] bg-token-dropdown-background shadow-2xl ring-[0.5px] ring-token-border"), variant === "window" && IntlProvider(FloatingSurfaceCssClass.zoomedViewport, "relative overflow-hidden bg-token-editor-background/55"));
  let boltPrime = variant === "floating" ? "quick-chat" : undefined,
    cogPrime = variant === "floating",
    discPrime = variant === "floating" ? "dialog" : undefined,
    edgePrime = event => {
      event.key !== "Escape" || event.defaultPrevented || (nestPrime == null ? lagoonPrime.length > 0 ? (event.preventDefault(), event.stopPropagation(), inletPrime()) : everPrime ? (event.preventDefault(), event.stopPropagation(), tide.flushSync(() => {
        fieldPrime(false);
      }), rainPrime.current?.focus()) : variant === "floating" && (event.preventDefault(), event.stopPropagation(), glenPrime(CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ESCAPE_KEY)) : (event.preventDefault(), event.stopPropagation(), hearthPrime()));
    };
  let forgePrime = variant === "floating" ? {
    height: cragPrime,
    left: eddyPrime.x,
    top: eddyPrime.y,
    width: domePrime,
    x: mossPrime,
    y: northPrime
  } : undefined;
  let gearPrime = () => {
    let strainerPrime = violet({
      height: cragPrime,
      left: eddyPrime.x + mossPrime.get(),
      top: eddyPrime.y + northPrime.get(),
      width: domePrime
    }, acornPrime, bloomPrime);
    mirePrime(strainerPrime);
  };
  let hingePrime = () => {
    mossPrime.stop();
    northPrime.stop();
  };
  let ironPrime = event => {
    variant !== "floating" || event.button !== 0 || !(event.target instanceof Element) || event.target.closest("[data-quick-chat-drag-handle]") == null || event.target.closest("button, a, input, textarea, select, [role='button'], [role='menuitem']") != null || (event.preventDefault(), lunarPrime.start(event));
  };
  let jointPrime = variant === "floating" ? <QuickChatWindowHelper16 {...{
    currentSize: {
      height: cragPrime,
      width: domePrime
    },
    defaultSize: openOrFocusQuickChat,
    heightLabel: yonderPrime,
    maximumSize: {
      height: on,
      width: zenithPrime
    },
    minimumSize: {
      height: anvilPrime,
      width: beaconPrime
    },
    widthLabel: vistaPrime,
    onResize: oxbowPrime,
    onResizeEnd: quarryPrime,
    onResizingChange: teePrime => {
      teePrime && (mossPrime.stop(), northPrime.stop());
    }
  }} /> : null;
  let keystonePrime = urnPrime ? true : undefined,
    latchPrime = apexPrime && lagoonPrime.length === 0 ? <_useChatgptComposerControllerR {...{
      conversationId
    }} /> : null;
  let motorPrime = variant === "floating" ? true : undefined,
    nutPrime = variant === "floating" && "cursor-grab touch-none select-none active:cursor-grabbing",
    pistonPrime = variant === "window" && "draggable",
    rivetPrime = IntlProvider("flex h-toolbar group/header shrink-0 items-center px-3", nutPrime, pistonPrime);
  let screwPrime = variant === "window" ? {
    paddingInlineEnd: Math.max(coralPrime.right / zephyrPrime, 12),
    paddingInlineStart: Math.max(coralPrime.left / zephyrPrime, 12)
  } : undefined;
  let torquePrime = everPrime ? <div className="flex min-w-0 flex-1 items-center gap-1">
      {<ReadLoginRouteQuerySnapshot {...{
      "aria-label": opalPrime,
      autoFocus: true,
      className: "-ml-1",
      color: "ghostActive",
      size: "toolbar",
      uniform: true,
      onClick: () => {
        fieldPrime(false);
      },
      children: <AppIconYlt {...{
        className: "icon-xs rotate-180"
      }} />
    }} />}
      <h2 id={driftPrime} className="truncate text-base font-medium">
        {<MemoizedFormattedMessage {...{
        id: "quickChat.history.title",
        defaultMessage: "History",
        description: "Title of the Quick Chat conversation history view"
      }} />}
      </h2>
    </div> : <div className="flex min-w-0 flex-1 items-center gap-1">
      {apexPrime ? <>
          {<OptionalTooltip {...{
        tooltipContent: silkPrime,
        delayOpen: true,
        children: <ReadLoginRouteQuerySnapshot {...{
          "aria-label": silkPrime,
          className: "-ml-1",
          color: "ghostActive",
          size: "toolbar",
          uniform: true,
          onClick: () => AppInitialWx(wheatPrime, {
            source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_HEADER_NEW_CHAT,
            surface: knollPrime
          }),
          children: <AppIconYm {...{
            className: "icon-xs"
          }} />
        }} />
      }} />}
          <div aria-hidden={true} className="mx-1 h-4 w-px shrink-0 bg-token-border" />
        </> : null}
      <h2 id={driftPrime} className="min-w-0 flex-1">
        {<ToolbarBreadcrumb {...{
        textSm: true,
        ancestors: brookPrime == null ? [] : [{
          id: "quick-chat-project",
          content: weirPrime
        }],
        current: apexPrime ? <ReadLoginRouteQuerySnapshot {...{
          allowShrink: true,
          "aria-label": quillowPrime,
          className: "group/history -mx-2 w-full text-sm font-medium text-token-text-secondary",
          color: "ghostMuted",
          size: "toolbar",
          onClick: () => {
            fieldPrime(true);
          },
          children: [<span className="truncate">
                        {nimbusPrime}
                      </span>, <AppIconYlt {...{
            className: "icon-xs shrink-0 opacity-0 group-hover/header:opacity-60 group-focus-visible/history:opacity-60"
          }} />]
        }} /> : brookPrime == null ? weirPrime : nimbusPrime
      }} />}
      </h2>
    </div>;
  let _quickChatWindowT = everPrime || valePrime == null ? null : <OptionalTooltip {...{
    tooltipContent: <MemoizedFormattedMessage {...{
      id: "quickChat.addToTaskTooltip",
      defaultMessage: "Add this Quick Chat to the current chat",
      description: "Tooltip for adding the Quick Chat conversation to the current chat"
    }} />,
    delayOpen: true,
    children: <ReadLoginRouteQuerySnapshot {...{
      color: "ghostActive",
      disabled: grainPrime,
      size: "toolbar",
      onClick: () => {
        fjordPrime();
      },
      children: [<CodexPluginActionType {...{
        className: "icon-xs"
      }} />, <MemoizedFormattedMessage {...{
        id: "quickChat.addToTask",
        defaultMessage: "Add to chat",
        description: "Visible label for adding the Quick Chat conversation to the current chat"
      }} />]
    }} />
  }} />;
  let _quickChatWindowN = canPopOut ? <OptionalTooltip {...{
    tooltipContent: uplandPrime,
    delayOpen: true,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": uplandPrime,
      color: "ghostActive",
      size: "icon",
      onClick: event => {
        let unionPrime = event.currentTarget.closest('[data-pip-obstacle="quick-chat"]')?.getBoundingClientRect();
        unionPrime != null && (DeferredUiQx(wheatPrime, {
          action: CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_POPPED_OUT,
          dockPosition: frostPrime,
          hasConversation: apexPrime,
          source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_POPOUT_BUTTON,
          surface: knollPrime
        }), onPopOut?.(valePrime ?? conversationId, olive(unionPrime, zephyrPrime)));
      },
      children: <AppInitialDr className="icon-xs" />
    }} />
  }} /> : null;
  let valvePrime = variant === "floating" ? <ReadLoginRouteQuerySnapshot {...{
    "aria-label": maplePrime,
    color: "ghostActive",
    size: "icon",
    onClick: () => {
      glenPrime(CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_CLOSE_BUTTON);
    },
    children: <EnsureComposerEsm_RV_Init {...{
      className: "icon-xs"
    }} />
  }} /> : null;
  let axlePrime = <div className="flex shrink-0 gap-1">
      {_quickChatWindowT}
      {_quickChatWindowN}
      {valvePrime}
    </div>;
  let _r = <header data-quick-chat-drag-handle={motorPrime} className={rivetPrime} style={screwPrime}>
      {torquePrime}
      {axlePrime}
    </header>;
  let bracketPrime = variant === "window" ? "px-5 pb-5" : FloatingSurfaceCssClass.floatingComposerInset,
    clampPrime = islePrime == null || $e ? <QuickChatWindowHelper26 key={conversationId} {...{
      ref: rainPrime,
      autoPrepare: false,
      conversationId,
      getExtraDeveloperInstructions: contextSourceConversationId == null || valePrime != null ? undefined : () => AppInitialAx(wheatPrime, contextSourceConversationId),
      projectId: brookPrime,
      projectName: duskPrime,
      radiusVariant: "single-line",
      isPrimaryComposer: false,
      showLockdownSlashCommand: true,
      surfaceVariant: variant === "window" ? "opaque" : "default",
      onProjectChangeFromSlashCommand: apexPrime ? null : spurPrime,
      onFileDropTargetChange: ventPrime => {
        let {
          disabled,
          onFilesDropped
        } = ventPrime;
        quietPrime.current = onFilesDropped;
        trailPrime(disabled);
      },
      onSubmitAccepted: () => {
        markQuickChatConversationStarted(wheatPrime, conversationId, {
          fileCount: grovePrime?.length ?? 0,
          selectedTextAttachmentCount: hillPrime?.length ?? 0,
          source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_COMPOSER,
          surface: knollPrime
        });
      }
    }} /> : <UseChatgptComposerControllerP {...{
      conversationId,
      isTemporaryChat: false,
      onContinueSuccess: () => {
        onClose(CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_UNSPECIFIED);
      },
      request: islePrime
    }} />;
  let drillPrime = <div className={bracketPrime}>{clampPrime}</div>;
  let enginePrime = variant === "floating",
    framePrime = everPrime ? "top" : "bottom",
    gasketPrime = everPrime ? true : undefined,
    handlePrime = everPrime && "hidden",
    insertPrime = IntlProvider("flex min-h-0 flex-1 flex-col", handlePrime);
  let jacketPrime = everPrime ? true : undefined,
    knurlPrime = apexPrime ? undefined : <QuickChatWindowHelper8 {...{
      conversationId,
      conversations: inkPrime,
      variant: glidePrime,
      onConversationSelect: (wyePrime, zenerPrime) => {
        activateConversationSurface(wheatPrime, wyePrime, zenerPrime, {
          source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_EMPTY_STATE_CONVERSATION,
          surface: knollPrime
        });
      },
      onViewAll: () => {
        fieldPrime(true);
      }
    }} />;
  let leverPrime = elmPrime ? {
    attachments: grovePrime,
    prompt: fernPrime,
    selectedTextAttachments: hillPrime
  } : null;
  let mountPrime = <UseChatgptComposerControllerA {...{
    browserConversationId: undefined,
    conversationId,
    emptyState: knurlPrime,
    renderMode: "conversation",
    pendingSubmission: leverPrime
  }} />;
  let nozzlePrime = <UseChatgptComposerControllerV {...{
    value: _n,
    children: mountPrime
  }} />;
  let platenPrime = <div aria-hidden={gasketPrime} className={insertPrime} inert={jacketPrime}>
      {nozzlePrime}
    </div>;
  let ratchetPrime = everPrime ? undefined : true,
    shimPrime = !everPrime && "hidden",
    tappetPrime = IntlProvider("flex min-h-0 flex-1 flex-col", shimPrime);
  let arborPrime = everPrime ? undefined : true,
    bushingPrime,
    collarPrime;
  bushingPrime = (alphaSecond, bravoSecond) => {
    fieldPrime(false);
    activateConversationSurface(wheatPrime, alphaSecond, bravoSecond, {
      source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_HISTORY_CONVERSATION,
      surface: knollPrime
    });
  };
  collarPrime = () => {
    fieldPrime(false);
    AppInitialWx(wheatPrime, {
      source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_HISTORY_NEW_CHAT,
      surface: knollPrime
    });
  };
  let dowelPrime = <QuickChatWindowHelper1 {...{
    conversations: kernelPrime,
    onConversationSelect: bushingPrime,
    onNewChat: collarPrime
  }} />;
  let flangePrime = <InfiniteScrollSentinel {...{
    hasNextPage: pinePrime.canFetchNextConversationPage,
    isFetchingNextPage: pinePrime.isFetchingNextConversationPage,
    onLoadNextPage: pinePrime.fetchNextConversationPage
  }} />;
  let gibPrime = <div className="flex min-h-full flex-1 flex-col py-2 text-base">
      {dowelPrime}
      {flangePrime}
    </div>;
  let hubPrime = <div aria-hidden={ratchetPrime} className={tappetPrime} inert={arborPrime}>
      {gibPrime}
    </div>;
  let idlerPrime = <div className="relative flex min-h-0 flex-1 flex-col">
      {<QuickChatWindowHelper24 key={conversationId} {...{
      footer: drillPrime,
      initialScrollMode,
      isWindowZoomApplied: enginePrime,
      scrollOrigin: framePrime,
      variant: variant,
      children: [platenPrime, hubPrime]
    }} />}
    </div>;
  let jigPrime = <div aria-hidden={urnPrime} className="relative z-0 flex min-h-0 flex-1 flex-col" inert={keystonePrime}>
      {latchPrime}
      {_r}
      {idlerPrime}
    </div>;
  let keeperPrime = lagoonPrime.map((item, index) => <QuickChatWindowHelper9 key={item.conversationId} {...{
    ancestors: [{
      id: conversationId,
      label: nimbusPrime,
      onClick: () => {
        knobPrime(0);
      }
    }, ...lagoonPrime.slice(0, index).map((_item, _index) => ({
      id: _item.conversationId,
      label: _item.title,
      onClick: () => {
        knobPrime(_index + 1);
      }
    }))],
    isActive: nestPrime == null && index === lagoonPrime.length - 1,
    minimizeLabel: variant === "floating" ? maplePrime : undefined,
    onMinimize: variant === "floating" ? () => {
      glenPrime(CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_CLOSE_BUTTON);
    } : undefined,
    title: item.title,
    variant: variant,
    children: [index === lagoonPrime.length - 1 ? <_useChatgptComposerControllerR {...{
      conversationId: item.conversationId
    }} /> : null, <QuickChatWindowHelper24 {...{
      footer: null,
      scrollOrigin: "top",
      variant: variant,
      children: <UseChatgptComposerControllerV {...{
        value: _n,
        children: <UseChatgptComposerControllerA {...{
          browserConversationId: undefined,
          conversationId: item.conversationId,
          renderInitialContentAsComplete: true,
          renderMode: "sidebar"
        }} />
      }} />
    }} />]
  }} />);
  let lugPrime = <UseChatgptComposerControllerB {...{
    value: jettyPrime,
    children: [jointPrime, jigPrime, keeperPrime]
  }} />;
  let mandrelPrime = nestPrime != null && at != null ? <QuickChatWindowHelper17 {...{
    onClose: hearthPrime,
    portalContainer: at,
    request: nestPrime,
    variant: variant
  }} /> : null;
  let nipplePrime = isDragActive && !_t ? <BuildSiteSettingsPath {...{}} /> : null;
  return <ensureIntlFormattersInit.section {...{
    ref: petalPrime,
    ...rest,
    "aria-labelledby": driftPrime,
    "aria-modal": yardPrime,
    className: anchorPrime,
    "data-pip-obstacle": boltPrime,
    "data-state": "open",
    drag: cogPrime,
    dragControls: lunarPrime,
    dragListener: false,
    dragMomentum: false,
    role: discPrime,
    onKeyDownCapture: edgePrime,
    style: forgePrime,
    onDragEnd: gearPrime,
    onDragStart: hingePrime,
    onPointerDownCapture: ironPrime,
    children: [lugPrime, mandrelPrime, nipplePrime]
  }} />;
}
function moss() {}
function $n(novaPrime) {
  return novaPrime.kind === "optimistic" ? [ensureComposerEsm_ZI_Init(novaPrime.conversationId)] : [];
}
function QuickChatWindowHelper26(olivePrime) {
  let prismPrime = {
    conversationId: olivePrime.conversationId
  };
  let quillPrime = useChatgptComposerControllerN(prismPrime);
  return <AppInitialTT>
      {<ProjectMarkerIcon {...{
      ...olivePrime,
      composerController: quillPrime
    }} />}
    </AppInitialTT>;
}
function north(reefPrime, sagePrime, topazPrime) {
  return Math.min(Math.max(reefPrime, sagePrime), topazPrime);
}
function orbit() {
  return document.activeElement instanceof HTMLElement ? document.activeElement : null;
}
function pine(ultraPrime) {
  return window.addEventListener("resize", ultraPrime), () => {
    window.removeEventListener("resize", ultraPrime);
  };
}
function quest() {
  return window.innerHeight;
}
function ridge() {
  return window.innerWidth;
}
var or, storm, tide, $, unity, vale, wave, apex, brook;

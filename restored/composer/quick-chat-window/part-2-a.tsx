// Restored from ref/webview/assets/quick-chat-window-_GO18s8K.js
// Wave FZ — full polished body from `quick-chat-window-_GO18s8K/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 102/137).
// AST split 2/3 — lane a (thread scroll container, conversation actions)
/* split-lane-import-depth:1 */

import { CodexRemoteControlRefreshSource } from "../../analytics/codex-remote-control-refresh-source";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { useChatgptComposerControllerT } from "../../composer/use-chatgpt-composer-controller";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { esmInit } from "../../runtime/rolldown-runtime";

/** split companion stub */
const DeferredUiQx: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPn: any = undefined;
/** split companion stub */
const drift: any = undefined;
/** split companion stub */
const honey: any = undefined;
/** split companion stub */
const iris: any = undefined;
/** split companion stub */
const quill: any = undefined;
const AppInitialNn: any = undefined;

export function QuickChatWindowHelper24(yellowPrime: any) {
  let {
      children,
      footer,
      initialScrollMode = "follow",
      isWindowZoomApplied = true,
      scrollOrigin = "bottom",
      variant = "floating",
    } = yellowPrime,
    zincPrime = useIntl(),
    {
      contentRef,
      footerRef,
      scrollToLatest,
      showScrollToLatest,
      spacerRef: amberPrime,
      viewportRef,
    } = quill(scrollOrigin, initialScrollMode, isWindowZoomApplied),
    basaltPrime =
      footer == null ? null : (
        <div
          ref={footerRef}
          className="absolute inset-x-0 bottom-0 z-10 w-full shrink-0"
          data-thread-scroll-footer="true"
        >
          <div className="relative z-10">
            {scrollOrigin === "bottom" ? (
              <div className="relative h-0">
                <AppInitialNn
                  className="bottom-[calc(100%+6*var(--spacing))]"
                  label={zincPrime.formatMessage({
                    id: "quickChat.scrollToLatestMessage",
                    defaultMessage: "Scroll to latest message",
                    description:
                      "Label for the button that returns a quick chat to the latest message",
                  })}
                  onClick={scrollToLatest}
                  show={showScrollToLatest}
                />
              </div>
            ) : null}
            {footer}
          </div>
        </div>
      );
  let cedarPrime = basaltPrime,
    daisyPrime =
      footer == null ? honey.headerScrollFade : honey.windowScrollMask,
    emberPrime = IntlProvider(
      daisyPrime,
      "[container-type:inline-size] flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto [container-name:thread-content] [overflow-anchor:none] focus:outline-none",
    );
  let flintPrime = footer != null && honey.scrollContent,
    garnetPrime = IntlProvider("flex min-h-full shrink-0 flex-col", flintPrime);
  let hazelPrime = variant === "window" ? "px-5" : "px-4",
    ivoryPrime = IntlProvider("flex flex-1 shrink-0 flex-col pt-4", hazelPrime);
  let jasperPrime = (
    <div
      ref={contentRef}
      className={ivoryPrime}
      data-quick-chat-thread-scroll-content="true"
    >
      {children}
    </div>
  );
  let kelpPrime = (
    <div
      ref={amberPrime}
      aria-hidden={true}
      className="shrink-0"
      data-quick-chat-thread-scroll-spacer="true"
    />
  );
  let lotusPrime = (
    <div className={garnetPrime}>
      {jasperPrime}
      {kelpPrime}
    </div>
  );
  let mintPrime = (
    <div
      ref={viewportRef}
      className={emberPrime}
      data-quick-chat-thread-scroll-container="true"
      tabIndex={0}
    >
      {lotusPrime}
    </div>
  );
  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      {mintPrime}
      {cedarPrime}
    </div>
  );
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
function orbit() {
  return document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
}
export function createQuickChatWindowActions(props: any) {
  let {
    apexPrime,
    eaglePrime,
    frostPrime,
    havenPrime,
    knollPrime,
    lagoonPrime,
    leafPrime,
    meadowPrime,
    nestPrime,
    oakPrime,
    onAddToComposer,
    onClose,
    valePrime,
    wheatPrime,
    yarnPrime,
  } = props;
  let fjordPrime = async () => {
    if (valePrime != null) {
      DeferredUiQx(wheatPrime, {
        action:
          CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_ADD_TO_CODEX_CLICKED,
        dockPosition: frostPrime,
        hasConversation: apexPrime,
        source:
          CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
        surface: knollPrime,
      });
      havenPrime(true);
      try {
        await onAddToComposer({
          conversationId: valePrime,
          title:
            leafPrime?.trim() ||
            yarnPrime.formatMessage({
              id: "quickChat.untitledConversation",
              defaultMessage: "Untitled conversation",
              description:
                "Fallback title when adding an untitled Quick Chat conversation to Codex",
            }),
        });
      } catch {
        DeferredUiQx(wheatPrime, {
          action:
            CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_ADD_TO_CODEX_FAILED,
          dockPosition: frostPrime,
          hasConversation: apexPrime,
          source:
            CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
          surface: knollPrime,
        });
        havenPrime(false);
        eaglePrime.warning(
          yarnPrime.formatMessage({
            id: "quickChat.addToComposerFailed",
            defaultMessage: "Could not add this chat to Codex yet",
            description:
              "Toast shown when Quick Chat cannot be added to a Codex composer",
          }),
        );
        return;
      }
      DeferredUiQx(wheatPrime, {
        action:
          CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_ADD_TO_CODEX_SUCCEEDED,
        dockPosition: frostPrime,
        hasConversation: apexPrime,
        source:
          CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
        surface: knollPrime,
      });
      glenPrime(
        CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_ADD_TO_CODEX_BUTTON,
      );
    }
  };
  let jettyPrime = (journalPrime) => {
    let { cancel, conversationId: _conversationId } =
      useChatgptComposerControllerT(wheatPrime, journalPrime);
    meadowPrime((kingpinPrime) => [
      ...kingpinPrime,
      {
        cancel,
        conversationId: _conversationId,
        returnFocus: orbit(),
        title: journalPrime.query,
      },
    ]);
  };
  let _n = (landPrime) => {
    oakPrime({
      ...landPrime,
      returnFocus: orbit(),
    });
  };
  let hearthPrime = () => {
    let meshPrime = nestPrime?.returnFocus;
    oakPrime(null);
    requestAnimationFrame(() => {
      meshPrime?.focus();
    });
  };
  let knobPrime = (neckPrime) => {
    let padPrime = lagoonPrime.slice(neckPrime),
      quillshaftPrime = padPrime[0]?.returnFocus;
    if (padPrime.length !== 0) {
      for (let rollerPrime of padPrime) rollerPrime.cancel();
      meadowPrime((spindlePrime) => spindlePrime.slice(0, neckPrime));
      requestAnimationFrame(() => {
        quillshaftPrime?.focus();
      });
    }
  };
  let inletPrime = () => {
    knobPrime(lagoonPrime.length - 1);
  };
  let glenPrime = (thrustPrime) => {
    for (let yokePrime of lagoonPrime) yokePrime.cancel();
    onClose(thrustPrime);
  };
  return {
    _n,
    fjordPrime,
    glenPrime,
    hearthPrime,
    inletPrime,
    jettyPrime,
    knobPrime,
  };
}

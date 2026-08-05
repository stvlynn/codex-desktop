// Restored from ref/webview/assets/hotkey-window-detail-layout-DIfApsiC.js
// Wave FX — full polished body from `hotkey-window-detail-layout-DIfApsiC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 31/37).

import { ensureAppActionPayloadSchemasInit } from "../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { ensureCodexSpriteAssetsInit } from "../assets/ensure-codex-sprite-assets-init";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
} from "../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { chatgpt2 as Chatgpt2 } from "../browser/chatgpt2";
import { ContextMenuRegistration } from "../hooks/use-context-menu-registration";
import {
  ensureUseHotkeyWindowDetailLayoutInit,
  HotkeyWindowDetailLayoutContext,
} from "../hooks/use-hotkey-window-detail-layout";
import {
  ensureUseHotkeyWindowDismissOnEscapeInit,
  useHotkeyWindowDismissOnEscape,
} from "../hooks/use-hotkey-window-dismiss-on-escape";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { AppIconYm } from "../icons/app-icon-ym";
import { PanelWidthIcon } from "../icons/panel-width-icon";
import { findSidebarSectionElement } from "../navigation/app-action-dom";
import { getRouteContextValue as GetRouteContextValue } from "../navigation/get-route-context-value";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";
import { OptionalTooltip } from "../ui/optional-tooltip";
import { codexProjectKey } from "../utils/codex-project-key";
import { identity } from "../utils/identity";
import { appServices } from "./desktop-services";

/** Wave FX unresolved companion (jsx-collision:resolveCodexCompanionById@pets/resolve-codex-companion-by-id.ts) */
const AppInitialDr: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureSidebarPanelIconInit: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureTrafficLightInsetsInit: any = undefined;
/** Wave FX unresolved companion (app-initial-unresolved-short) */
const appInitialValue: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureDockChevronIconInit: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function alpha(nickel) {
  let {
      commandId,
      enabled = true,
      onKeyDown,
      onKeyUp,
      capture,
      ignoreWithin,
      keyboardEventTarget,
    } = nickel,
    onyx = CodexBrowserSurfaceActionType(appInitialValue, commandId),
    pearl = onyx ?? "",
    quartz = enabled && onyx != null,
    river;
  river = {
    accelerator: pearl,
    enabled: quartz,
    onKeyDown,
    onKeyUp,
    capture,
    ignoreWithin,
    keyboardEventTarget,
  };
  PanelWidthIcon(river);
}
var bravo,
  copper = esmInit(() => {
    bravo = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureSidebarPanelIconInit();
    codexProjectKey();
  });
function HotkeyWindowDetailLayoutHelper2(slate) {
  let {
      title,
      onDismiss,
      showDismissButton = true,
      reserveWindowControlsSafeArea = false,
      rightActions,
    } = slate,
    timber = useIntl(),
    umbra = ContextMenuRegistration(),
    violet = reserveWindowControlsSafeArea ? umbra.left : 0,
    willow = reserveWindowControlsSafeArea ? umbra.right : 0,
    xenon = violet + 12,
    yellow = willow + 12,
    zinc = xenon + (showDismissButton ? 52 : 0),
    amber = yellow + 84,
    basalt = {
      left: zinc,
      right: amber,
    };
  let cedar = (
    <div
      className="absolute inset-y-0 flex items-center justify-center text-base font-medium text-token-foreground/60 select-none"
      style={basalt}
    >
      {title}
    </div>
  );
  let daisy = showDismissButton ? (
    <div
      className="absolute flex items-center gap-0"
      style={{
        left: xenon,
      }}
    >
      {
        <OptionalTooltip
          {...{
            tooltipContent: (
              <MemoizedFormattedMessage
                {...{
                  ...harbor.dismiss,
                }}
              />
            ),
            delayOpen: true,
            children: (
              <ReadLoginRouteQuerySnapshot
                {...{
                  size: "toolbar",
                  color: "ghost",
                  "aria-label": timber.formatMessage(harbor.dismiss),
                  onClick: onDismiss,
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
      }
    </div>
  ) : null;
  let ember = {
    right: yellow,
  };
  let flint = (
    <div className="absolute flex items-center gap-0" style={ember}>
      {rightActions}
    </div>
  );
  return (
    <div className="draggable relative flex h-toolbar-sm items-center justify-center px-3">
      {cedar}
      {daisy}
      {flint}
    </div>
  );
}
function HotkeyWindowDetailLayoutHelper3(garnet) {
  let { title, mainWindowPath, canCollapseToHome = true } = garnet,
    hazel = useIntl(),
    ivory = canCollapseToHome ? (
      <OptionalTooltip
        {...{
          tooltipContent: (
            <MemoizedFormattedMessage
              {...{
                ...harbor.newThread,
              }}
            />
          ),
          delayOpen: true,
          children: (
            <ReadLoginRouteQuerySnapshot
              {...{
                size: "toolbar",
                color: "ghost",
                "aria-label": hazel.formatMessage(harbor.newThread),
                onClick: delta,
                children: (
                  <AppIconYm
                    {...{
                      className: "icon-sm",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : null;
  let jasper = (
    <MemoizedFormattedMessage
      {...{
        ...harbor.openInMainWindow,
      }}
    />
  );
  let kelp = hazel.formatMessage(harbor.openInMainWindow);
  let lotus = () => {
    ensureAppActionPayloadSchemasInit.dispatchMessage("open-in-main-window", {
      path: mainWindowPath,
    });
  };
  let mint = <AppInitialDr className="icon-sm" />;
  let nova = (
    <OptionalTooltip
      {...{
        tooltipContent: jasper,
        delayOpen: true,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              size: "toolbar",
              color: "ghost",
              "aria-label": kelp,
              onClick: lotus,
              children: mint,
            }}
          />
        ),
      }}
    />
  );
  let olive = (
    <>
      {ivory}
      {nova}
    </>
  );
  return (
    <HotkeyWindowDetailLayoutHelper2
      {...{
        title,
        onDismiss: echo,
        rightActions: olive,
      }}
    />
  );
}
function delta() {
  appServices.hotkeyWindowHotkeys?.collapseToHome();
}
function echo() {
  appServices.hotkeyWindowHotkeys?.dismiss();
}
var falcon,
  gamma,
  harbor,
  indigo = esmInit(() => {
    falcon = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureTrafficLightInsetsInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    ensureDockChevronIconInit();
    ensureCodexSpriteAssetsInit();
    ensureConversationPageEsm_Act_Init();
    findSidebarSectionElement();
    ensureDynamicScriptLoadInit();
    harbor = identity({
      dismiss: {
        id: "hotkeyWindow.dismiss",
        defaultMessage: "Dismiss Popout Window",
        description: "Tooltip label for dismissing the hotkey window",
      },
      newThread: {
        id: "hotkeyWindow.threadPage.newButton",
        defaultMessage: "Start New Chat",
        description:
          "Tooltip label for the hotkey window header button that returns to hotkey window home",
      },
      openInMainWindow: {
        id: "hotkeyWindow.threadPage.openInMainWindow",
        defaultMessage: "Open in Main Window",
        description:
          "Tooltip label for the hotkey window header button that opens the current page in the main app window",
      },
    });
  });
export function HotkeyWindowDetailLayout() {
  useHotkeyWindowDismissOnEscape();
  let [prism, quill] = lemon.useState(null),
    reef = prism != null && prism.canCollapseToHome !== false,
    sage;
  sage = {
    commandId: "newTask",
    enabled: reef,
    onKeyDown: jade,
  };
  alpha(sage);
  let topaz =
    prism == null ? null : (
      <HotkeyWindowDetailLayoutHelper3
        {...{
          title: prism.title,
          mainWindowPath: prism.mainWindowPath,
          canCollapseToHome: prism.canCollapseToHome !== false,
        }}
      />
    );
  let ultra = (
    <div className="min-h-0 flex-1">{<GetRouteContextValue {...{}} />}</div>
  );
  return (
    <ensureUseHotkeyWindowDetailLayoutInit.Provider
      {...{
        value: quill,
        children: (
          <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-token-border-light bg-token-main-surface-primary">
            {topaz}
            {ultra}
          </div>
        ),
      }}
    />
  );
}
function jade(event) {
  event.preventDefault();
  event.stopPropagation();
  appServices.hotkeyWindowHotkeys?.collapseToHome();
}
var kite, lemon, marble;
esmInit(() => {
  kite = reactCompilerRuntime();
  lemon = commonJsInit(react(), 1);
  ensureComposerEsm_P5_Init();
  copper();
  ensureDynamicScriptLoadInit();
  indigo();
  HotkeyWindowDetailLayoutContext();
  ensureUseHotkeyWindowDismissOnEscapeInit();
})();

/** Wave FX: bind no longer required after full body promote */
export function bindHotkeyWindowDetailLayout(_next: unknown): void {}
export function ensureHotkeyWindowDetailLayoutInit(): void {}

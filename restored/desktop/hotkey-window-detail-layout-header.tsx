// Restored from ref/webview/assets/hotkey-window-detail-layout-DIfApsiC.js
// Wave FX — full polished body from `hotkey-window-detail-layout-DIfApsiC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 31/37).

import { ensureAppActionPayloadSchemasInit } from "../actions/app-action-payload-schemas";
import { chatgpt2 as Chatgpt2 } from "../browser/chatgpt2";
import { ContextMenuRegistration } from "../hooks/use-context-menu-registration";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { AppIconYm } from "../icons/app-icon-ym";
import { OptionalTooltip } from "../ui/optional-tooltip";
import { appServices } from "./desktop-services";
import { harbor } from "./hotkey-window-detail-layout-init";

/** Wave FX unresolved companion (jsx-collision:resolveCodexCompanionById@pets/resolve-codex-companion-by-id.ts) */
const AppInitialDr: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
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
export function HotkeyWindowDetailLayoutHelper3(garnet: any) {
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

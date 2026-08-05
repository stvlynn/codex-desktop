// Restored from ref/webview/assets/hotkey-window-detail-layout-DIfApsiC.js
// Wave FX — full polished body from `hotkey-window-detail-layout-DIfApsiC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 31/37).

import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { ensureComposerEsm_P5_Init } from "../composer/composer-esm-inits";
import {
  ensureUseHotkeyWindowDetailLayoutInit,
  HotkeyWindowDetailLayoutContext,
} from "../hooks/use-hotkey-window-detail-layout";
import {
  ensureUseHotkeyWindowDismissOnEscapeInit,
  useHotkeyWindowDismissOnEscape,
} from "../hooks/use-hotkey-window-dismiss-on-escape";
import { getRouteContextValue as GetRouteContextValue } from "../navigation/get-route-context-value";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { appServices } from "./desktop-services";
import { HotkeyWindowDetailLayoutHelper3 } from "./hotkey-window-detail-layout-header";
import { alpha, copper, indigo } from "./hotkey-window-detail-layout-init";

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

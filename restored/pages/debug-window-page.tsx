// Restored from ref/webview/assets/debug-window-page-Bg0HT6g0.js
// Wave FY — full polished body from `debug-window-page-Bg0HT6g0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Companion imports rewritten via IMPORT_MAP + app-initial exportSources (17/17).

import { isBusinessPlan } from "../account/plan-type-helpers";
import {
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_P5_Init,
} from "../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { Navigate } from "../boundaries/react-router-navigation";
import { DebugModal, ensureDebugModalInit } from "../desktop/debug-modal";
import { CodexBuildEnvironment } from "../env/codex-build-environment";
import { ensureDebugPanelTurnFilesInit } from "../hooks/debug-panel-turn-files";
import { strongMarkerFromOptions } from "../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { ElectronOnly } from "../ui/electron-only";
export function DebugWindowPage() {
  let [echo, falcon] = copper.useState(null),
    gamma;
  if (
    ((gamma = (harbor) => {
      let { conversationId } = harbor;
      falcon(conversationId);
    }),
    writeScrollTop("debug-window-origin-conversation-changed", gamma),
    !CodexBuildEnvironment.allowDebugMenu(isBusinessPlan()))
  ) {
    let indigo;
    return (
      <Navigate
        {...{
          to: "/",
          replace: true,
        }}
      />
    );
  }
  return (
    <ElectronOnly
      {...{
        electron: true,
        children: (
          <main className="h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground">
            {
              <DebugModal
                {...{
                  conversationIdOverride: echo,
                  onClose: alpha,
                  showHeader: false,
                  showPopOutButton: false,
                }}
              />
            }
          </main>
        ),
      }}
    />
  );
}
function alpha() {
  return window.close();
}
var bravo, copper, delta;
esmInit(() => {
  bravo = reactCompilerRuntime();
  strongMarkerFromOptions();
  copper = commonJsInit(react(), 1);
  ensureComposerEsm_P5_Init();
  ensureComposerEsm_K1_Init();
  findSidebarSectionElement();
  ensureDebugPanelTurnFilesInit();
  ensureDebugModalInit();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindDebugWindowPage(_next: unknown): void {}
export function ensureDebugWindowPageInit(): void {}

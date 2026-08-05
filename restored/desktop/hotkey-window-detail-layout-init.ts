// Restored from ref/webview/assets/hotkey-window-detail-layout-DIfApsiC.js
// Wave FX — full polished body from `hotkey-window-detail-layout-DIfApsiC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 31/37).

import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { ensureCodexSpriteAssetsInit } from "../assets/ensure-codex-sprite-assets-init";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
} from "../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../conversation/conversation-page-esm-inits";
import { ensureIntlFormattersInit } from "../i18n/use-intl";
import { PanelWidthIcon } from "../icons/panel-width-icon";
import { findSidebarSectionElement } from "../navigation/app-action-dom";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { esmInit } from "../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";
import { codexProjectKey } from "../utils/codex-project-key";
import { identity } from "../utils/identity";

/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureSidebarPanelIconInit: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureTrafficLightInsetsInit: any = undefined;
/** Wave FX unresolved companion (app-initial-unresolved-short) */
const appInitialValue: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureDockChevronIconInit: any = undefined;
export function alpha(nickel: any) {
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
var bravo;
export var copper = esmInit(() => {
  bravo = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  ensureSidebarPanelIconInit();
  codexProjectKey();
});
var falcon, gamma;
export var harbor;
export var indigo = esmInit(() => {
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

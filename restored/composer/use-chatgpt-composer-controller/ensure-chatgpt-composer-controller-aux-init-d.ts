// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Composer-controller aux init D (Value359 deps + _D overlay materialization).

import { ensureAppScopeHostInit as appInitialMT } from "../../runtime/app-scope-runtime";
import { chatgptConversationFlagsAtom as _appInitialLP } from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_BF_Init as appInitialBF,
  ensureComposerEsm_DP_Init as appInitialDP,
  ensureComposerEsm_E4_Init as appInitialE4,
  ensureComposerEsm_MF_Init as AppInitialMF,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_XP_Init as appInitialXP,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { subagentPanelR } from "../../composer/subagent-panel";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit as appInitialI0 } from "../../navigation/app-shell-atoms";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { ensureChatgptSubagentFinalResponseQueryInit } from "./chatgpt-subagent-final-response-atom";
import { ensureChatgptComposerMarkdownSurfaceInit } from "./ensure-chatgpt-composer-markdown-surface-init";

/** Value359 — subagent overlay dependency fan-in before aux init D. */
export const ensureChatgptComposerSubagentOverlayDepsInit = rolldownRuntimeN(
  () => {
    appInitialIvt();
    appInitialTft();
    appInitialMT();
    appInitialHft();
    // Residual stub may be undefined; preserve call shape from the bundle.
    (subagentPanelR as any)?.();
    (_appInitialLP as any)();
    ensureChatgptComposerMarkdownSurfaceInit();
    ensureChatgptSubagentFinalResponseQueryInit();
    appInitialXP();
    AppInitialMF();
    appInitialBF();
    appInitialJvt();
  },
);

export const _useChatgptComposerControllerD = rolldownRuntimeN(() => {
  appInitialI0();
  appInitialDP();
  appInitialE4();
  ensureChatgptComposerSubagentOverlayDepsInit();
  appInitialJvt();
});

export const ensureChatgptComposerControllerAuxInitD =
  _useChatgptComposerControllerD;

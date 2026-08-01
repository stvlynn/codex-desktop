// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Composer-controller aux init O — overlay materialization over U.

import { ensureAppScopeHostInit as appInitialMT } from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_jP_Init as appInitialJP,
  ensureComposerEsm_M0_Init as appInitialM0,
  ensureComposerEsm_XP_Init as appInitialXP,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit as appInitialCot } from "../../navigation/app-shell-atoms";
import { rolldownRuntimeN, rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { ensureChatgptComposerStreamingContextInit } from "./chatgpt-composer-streaming-context";
import { useChatgptComposerControllerA } from "./chatgpt-conversation-updates-mount";
import { _useChatgptComposerControllerC } from "./chatgpt-pending-loading-indicator";
import { useChatgptComposerControllerU } from "./ensure-chatgpt-composer-controller-aux-init-u";
import { useChatgptComposerControllerN } from "./ensure-chatgpt-composer-controller-flags-init";

export const _useChatgptComposerControllerO = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialMT();
  void rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  appInitialM0();
  appInitialCot();
  appInitialJP();
  useChatgptComposerControllerN();
  useChatgptComposerControllerA();
  useChatgptComposerControllerU();
  _useChatgptComposerControllerC();
  ensureChatgptComposerStreamingContextInit();
  appInitialXP();
  appInitialJvt();
});

export const ensureChatgptComposerControllerOverlayInit =
  _useChatgptComposerControllerO;

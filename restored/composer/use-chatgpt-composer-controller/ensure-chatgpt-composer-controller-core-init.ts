// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Core ESM materialization init for the ChatGPT composer-controller surface.

import {
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../boundaries/app-scope-runtime";
import {
  ensureComposerEsm_F7_Init as appInitialF7,
  ensureComposerEsm_ML_Init as appInitialML,
  ensureComposerEsm_U__Init as AppInitialU,
  ensureComposerEsm_XP_Init as appInitialXP,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { markConversationError as _AppInitialYP } from "../../conversation/mark-conversation-error";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import {
  ensureChatgptComposerControllerHandoffUiInit,
  useChatgptComposerControllerR,
} from "./continue-chatgpt-temporary-chat";

let slot9: unknown;
let slot10: unknown;

export const ensureChatgptComposerControllerCoreInit = rolldownRuntimeN(() => {
  slot9 = appInitialIvt();
  appInitialMT();
  AppInitialU();
  appInitialIft();
  appInitialF7();
  appInitialML();
  useChatgptComposerControllerR();
  ensureChatgptComposerControllerHandoffUiInit();
  _AppInitialYP();
  appInitialXP();
  slot10 = appInitialJvt();
});

export const useChatgptComposerControllerF =
  ensureChatgptComposerControllerCoreInit;

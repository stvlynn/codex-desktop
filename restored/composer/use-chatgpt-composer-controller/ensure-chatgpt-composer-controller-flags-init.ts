// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Flags / feature-gate ESM materialization init for the composer controller.

import {
  ensureComposerEsm_CF_Init as appInitialCF,
  ensureComposerEsm_XF_Init as AppInitialXF,
} from "../../boundaries/composer-esm-inits";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

const slot11 = rolldownRuntimeN(() => {});

export const ensureChatgptComposerControllerFlagsInit = rolldownRuntimeN(() => {
  slot11();
  appInitialCF();
  AppInitialXF();
});

export const useChatgptComposerControllerN =
  ensureChatgptComposerControllerFlagsInit;

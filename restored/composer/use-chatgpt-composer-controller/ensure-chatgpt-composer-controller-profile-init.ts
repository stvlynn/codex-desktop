// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Profile / workspace ESM materialization init for the ChatGPT composer controller.

import {
  ensureComposerEsm_BI_Init as ensureComposerBiInit,
  ensureComposerEsm_nP_Init as ensureComposerNpInit,
  ensureComposerEsm_TI_Init as ensureComposerTiInit,
  ensureComposerEsm_XP_Init as ensureComposerXpInit,
} from "../../composer/composer-esm-inits";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

/** Ensure profile-related composer ESM inits are materialized. */
export const ensureChatgptComposerControllerProfileInit = rolldownRuntimeN(
  () => {
    ensureComposerTiInit();
    ensureComposerBiInit();
    ensureComposerXpInit();
    ensureComposerNpInit();
  },
);

// Letter alias for boundary / legacy consumers
export const useChatgptComposerControllerW =
  ensureChatgptComposerControllerProfileInit;

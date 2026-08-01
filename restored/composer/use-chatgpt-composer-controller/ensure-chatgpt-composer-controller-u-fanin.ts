// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// U mega-init fan-in cluster (Value314/318/324/327/329/332/336/339/349).
// Component bodies already live in composer/; these are orphan ensure stubs.

import {
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../runtime/app-scope-runtime";
import { chatgptConversationFlagsAtom as _appInitialLP } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_AG_Init as appInitialAG,
  ensureComposerEsm_a8_Init as AppInitialA8,
  ensureComposerEsm_as_Init as AppInitialAs,
  ensureComposerEsm_bl_Init as appInitialBl,
  ensureComposerEsm_cL_Init as appInitialCL,
  ensureComposerEsm_cR_Init as appInitialCR,
  ensureComposerEsm_CF_Init as _appInitialCF,
  ensureComposerEsm_CU_Init as appInitialCU,
  ensureComposerEsm_eV_Init as appInitialEV,
  ensureComposerEsm_F7_Init as appInitialF7,
  ensureComposerEsm_fb_Init as appInitialFb,
  ensureComposerEsm_Ilt_Init as appInitialIlt,
  ensureComposerEsm_JL_Init as appInitialJL,
  ensureComposerEsm_jP_Init as appInitialJP,
  ensureComposerEsm_K9_Init as appInitialK9,
  ensureComposerEsm_Kg_Init as appInitialKg,
  ensureComposerEsm_kI_Init as appInitialKI,
  ensureComposerEsm_klt_Init as appInitialKlt,
  ensureComposerEsm_LL_Init as appInitialLL,
  ensureComposerEsm_LR_Init as appInitialLR,
  ensureComposerEsm_lv_Init as AppInitialLv,
  ensureComposerEsm_ML_Init as appInitialML,
  ensureComposerEsm_n0_Init as appInitialN0,
  ensureComposerEsm_NA_Init as appInitialNA,
  ensureComposerEsm_nP_Init as appInitialNP,
  ensureComposerEsm_oR_Init as appInitialOR,
  ensureComposerEsm_P5_Init as appInitialP5,
  ensureComposerEsm_q0_Init as appInitialQ0,
  ensureComposerEsm_rK_Init as appInitialRK,
  ensureComposerEsm_rN_Init as appInitialRN,
  ensureComposerEsm_RV_Init as appInitialRV,
  ensureComposerEsm_s8_Init as appInitialS8,
  ensureComposerEsm_S6_Init as AppInitial6,
  ensureComposerEsm_Sd_Init as appInitialD,
  ensureComposerEsm_Sdt_Init as appInitialDt,
  ensureComposerEsm_sG_Init as AppInitialSG,
  ensureComposerEsm_Sp_Init as appInitialSp,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_tlt_Init as appInitialTlt,
  ensureComposerEsm_udt_Init as appInitialUdt,
  ensureComposerEsm_w1_Init as appInitialW1,
  ensureComposerEsm_XP_Init as appInitialXP,
  ensureComposerEsm_YL_Init as appInitialYL,
  ensureComposerEsm_Ytt_Init as appInitialYtt,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { ensureConversationWorkRouteInit as appInitialC8 } from "../../conversation/conversation-work-path";
import { markConversationError as _AppInitialYP } from "../../conversation/mark-conversation-error";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import { AppIconYlt as appInitialXlt } from "../../icons/app-icon-ylt";
import { rolldownRuntimeN, rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { Button as appInitialBut } from "../../ui/button";
import { zodString as __appInitialCT } from "../../vendor/zod";
import { ensureChatgptBrowserHostContextInit } from "./chatgpt-browser-host-context";
import { ensureChatgptComposerStreamingContextInit } from "./chatgpt-composer-streaming-context";
import { ensureChatgptContentReferenceFootnoteDepsInit } from "./chatgpt-content-reference-footnote-registry";
import { useChatgptComposerControllerR } from "./continue-chatgpt-temporary-chat";
import { ensureChatgptComposerMarkdownSurfaceInit } from "./ensure-chatgpt-composer-markdown-surface-init";

/** Value314+318 — trusted-contact / safety-settings surface fan-in. */
export const ensureChatgptTrustedContactSurfaceInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialS8();
  AppInitial6();
  appInitialTft();
  appInitialMT();
  void rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  (appInitialBut as any)();
  appInitialLL();
  appInitialIlt();
  appInitialN0();
  appInitialK9();
  appInitialIft();
  appInitialTI();
  ensureChatgptComposerMarkdownSurfaceInit();
  _appInitialCF();
  appInitialJvt();
});

/** Value324 — assistant-message surface fan-in (fade delays already in module). */
export const ensureChatgptAssistantMessageSurfaceInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialMT();
  void rolldownRuntimeS(appInitialLvt(), 1);
  appInitialQ0();
  appInitialLL();
  (_appInitialLP as any)();
  (_appInitialYI as any)();
  ensureChatgptComposerStreamingContextInit();
  ensureChatgptComposerMarkdownSurfaceInit();
  ensureChatgptContentReferenceFootnoteDepsInit();
  appInitialXP();
  ensureChatgptBrowserHostContextInit();
  ensureChatgptTrustedContactSurfaceInit();
  appInitialJvt();
});

/** Value327 — conversation work-route peer surface. */
export const ensureChatgptConversationWorkRouteSurfaceInit = rolldownRuntimeN(
  () => {
    appInitialIvt();
    appInitialHft();
    appInitialP5();
    appInitialRK();
    appInitialC8();
    appInitialJvt();
  },
);

/** Value329 — handoff/peer chrome deps before Value332. */
const ensureChatgptHandoffPeerDepsInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialHft();
  appInitialJL();
  appInitialYL();
  appInitialCR();
  appInitialD();
  appInitialJvt();
});

/** Value332 — handoff peer surface (calls Value329). */
export const ensureChatgptHandoffPeerSurfaceInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialMT();
  appInitialF7();
  appInitialML();
  useChatgptComposerControllerR();
  ensureChatgptHandoffPeerDepsInit();
  appInitialJvt();
});

/** Value336 — composer widget / chrome surface fan-in. */
export const ensureChatgptComposerWidgetSurfaceInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialTft();
  appInitialDt();
  void rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  appInitialAG();
  appInitialRV();
  AppInitialSG();
  appInitialNA();
  appInitialFb();
  (appInitialXlt as any)();
  appInitialLR();
  appInitialYtt();
  AppInitialAs();
  appInitialBl();
  appInitialOR();
  appInitialEV();
  appInitialKlt();
  appInitialCU();
  appInitialKg();
  appInitialSp();
  appInitialD();
  appInitialW1();
  ensureChatgptComposerMarkdownSurfaceInit();
  appInitialJvt();
});

/** Value339 — safety-review peer deps before Value349. */
const ensureChatgptSafetyReviewDepsInit = rolldownRuntimeN(() => {
  appInitialIvt();
  appInitialTft();
  appInitialCL();
  AppInitialLv();
  appInitialJvt();
});

/** Value349 — safety-review surface (scheme/href/schema already in helpers). */
export const ensureChatgptSafetyReviewSurfaceInit = rolldownRuntimeN(() => {
  appInitialIvt();
  AppInitialA8();
  appInitialMT();
  void rolldownRuntimeS(appInitialLvt(), 1);
  (__appInitialCT as any)();
  appInitialRN();
  appInitialK9();
  ensureChatgptSafetyReviewDepsInit();
  appInitialIft();
  appInitialTlt();
  appInitialUdt();
  (_AppInitialYP as any)();
  appInitialJP();
  appInitialKI();
  appInitialNP();
  appInitialJvt();
});

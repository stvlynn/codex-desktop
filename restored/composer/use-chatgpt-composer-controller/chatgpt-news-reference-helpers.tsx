// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// News / entity content-reference leaf helpers (Helper75–78).

import { pickContentReferenceDisplayTitle as _AppInitialOI } from "../../content/pick-content-reference-display-title";
import {
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_UL_Init as AppInitialUL,
  ensureComposerEsm_oL_Init as AppInitialOL,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

const slot43 = () => {};
const slot85 = () => {};

var slot89,
  slot90,
  slot91 = rolldownRuntimeN(() => {
    slot89 = appInitialIvt();
    appInitialTft();
    AppInitialUL();
    AppInitialOL();
    slot85();
    slot43();
    slot90 = appInitialJvt();
  });
export function useChatgptComposerControllerHelper75(
  request10963: any,
  request10964: any,
) {
  return new Intl.NumberFormat(undefined, request10964).format(request10963);
}
export function $d(request10771: any) {
  return typeof request10771 == "number" && Number.isFinite(request10771)
    ? request10771
    : null;
}
export function useChatgptComposerControllerHelper76(request10495: any) {
  return typeof request10495 == "string" && request10495.trim().length > 0
    ? request10495.trim()
    : null;
}
export function useChatgptComposerControllerHelper77(request9336: any) {
  if (request9336 == null) return null;
  try {
    return new URL(request9336).hostname.replace(/^www\./, "");
  } catch {
    return request9336;
  }
}
export function useChatgptComposerControllerHelper78(request9900: any) {
  return typeof request9900 == "object" && request9900
    ? Object.fromEntries(Object.entries(request9900))
    : null;
}
var slot92 = rolldownRuntimeN(() => {});

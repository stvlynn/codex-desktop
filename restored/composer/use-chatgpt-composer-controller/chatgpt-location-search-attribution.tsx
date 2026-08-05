// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Location-search citation + maps attribution peers (Helper181 + Value240–248).

import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../i18n/use-intl";
import { findModelVersionOptionId as _AppInitialOI } from "../../models/find-model-version-option-id";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import {
  D_ as useChatgptComposerControllerMapsAttributionPeerInit,
  E_ as useChatgptComposerControllerSafeContentReferenceHref,
  O_ as useChatgptComposerControllerContentReferenceAnchor,
  j_ as useChatgptComposerControllerLocationSearchPeerInit,
} from "./chatgpt-forecast-file-content-references";
import { useChatgptComposerControllerHelper76 } from "./chatgpt-news-reference-helpers";

const D_ = useChatgptComposerControllerMapsAttributionPeerInit;
const E_ = useChatgptComposerControllerSafeContentReferenceHref;
const O_ = useChatgptComposerControllerContentReferenceAnchor;
const j_ = useChatgptComposerControllerLocationSearchPeerInit;

/** Residual stub peers still registered on the open boundary. */
const slot88 = rolldownRuntimeN(() => {});
const slot92 = rolldownRuntimeN(() => {});

export let slot240: any;
export let slot241: any;
export const slot242 = rolldownRuntimeN(() => {
  slot240 = appInitialIvt();
  _appInitialYI();
  D_();
  slot88();
  j_();
  slot241 = appInitialJvt();
});
export function useChatgptComposerControllerHelper181(request2676: any) {
  let { reference } = request2676,
    slot7423 = appInitialJft(),
    slot7424 = E_(reference);
  let slot7425 = slot7424,
    slot7426 = useChatgptComposerControllerHelper76(reference.provider);
  let slot7427 = slot7426,
    slot7428 =
      slot7427 === "google_maps"
        ? slot245
        : (_AppInitialOI(reference) ??
          slot7423.formatMessage({
            id: "chatgpt.contentReferences.locationSearch.maps",
            defaultMessage: "Maps",
            description: "Fallback label for a location search citation link",
          }));
  let slot7429 = slot7428,
    slot7430 = `${slot246}${slot7429}${slot247}`;
  if (slot7425 == null) {
    let slot14989;
    return <span>{slot7430}</span>;
  }
  return (
    <span>
      {slot246}
      <O_ href={slot7425}>{slot7429}</O_>
      {slot247}
    </span>
  );
}
export let slot243: any;
export let slot244: any;
export let slot245: any;
export let slot246: any;
export let slot247: any;
export const slot248 = rolldownRuntimeN(() => {
  slot243 = appInitialIvt();
  appInitialHft();
  _appInitialYI();
  D_();
  j_();
  slot92();
  slot244 = appInitialJvt();
  slot245 = "Google Maps";
  slot246 = " (";
  slot247 = ") ";
});

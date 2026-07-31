// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Code / link_title content-reference citations (Helper179–180).

import { InlineMention as appInitialQL } from "../../composer/inline-mention";
import { AppIconMH as appInitialMH } from "../../icons/app-icon-mh";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { findModelVersionOptionId as _AppInitialOI } from "../../models/find-model-version-option-id";
import {
  E_ as useChatgptComposerControllerSafeContentReferenceHref,
  O_ as useChatgptComposerControllerContentReferenceAnchor,
} from "./chatgpt-forecast-file-content-references";
import { useChatgptComposerControllerHelper70 } from "./chatgpt-content-reference-cards";

const AppInitialQL = appInitialQL;
const E_ = useChatgptComposerControllerSafeContentReferenceHref;
const O_ = useChatgptComposerControllerContentReferenceAnchor;

export function useChatgptComposerControllerHelper179(request4637: any) {
  const AppInitialQL = appInitialQL;
  let { reference } = request4637,
    slot10710 = appInitialJft(),
    slot10711 =
      _AppInitialOI(reference) ??
      slot10710.formatMessage({
        id: "chatgpt.contentReferences.code.label",
        defaultMessage: "Code",
        description: "Fallback label for a code execution citation",
      });
  let slot10712 = slot10711;
  return <AppInitialQL icon={appInitialMH}>{slot10712}</AppInitialQL>;
}

export function useChatgptComposerControllerHelper180(request3133: any) {
  const UseChatgptComposerControllerHelper70 =
    useChatgptComposerControllerHelper70;
  let { reference } = request3133,
    slot8320 = _AppInitialOI(reference);
  let slot8321 = slot8320,
    slot8322 = E_(reference);
  let slot8323 = slot8322;
  if (slot8321 == null) {
    let slot15028;
    return <UseChatgptComposerControllerHelper70 reference={reference} />;
  }
  if (slot8323 == null) {
    let slot13601;
    return (
      <span className="underline decoration-current underline-offset-2">
        {slot8321}
      </span>
    );
  }
  return (
    <O_
      className="underline decoration-current underline-offset-2"
      href={slot8323}
    >
      {slot8321}
    </O_>
  );
}

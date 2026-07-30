// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Flatten assistant turn content-references into turn-sources entries.

import { getContentReferenceAttributes as appInitialF } from "../../content/get-content-reference-attributes";
import { isSourcesFootnoteSingleton as _appInitialBI } from "../../content/is-sources-footnote-singleton";
import { pickContentReferenceUrl as AppInitialSI } from "../../content/pick-content-reference-url";
import { findModelVersionOptionId as _AppInitialOI } from "../../models/find-model-version-option-id";
import {
  turnSourcesModelN,
  turnSourcesModelT,
} from "../../conversation/turn-sources-model";
import { nonEmptyStringOrNull as appInitialRF } from "../../utils/non-empty-string-or-null";

function useChatgptComposerControllerHelper291(request4669) {
  if (
    request4669.type === "webpage" ||
    request4669.type === "webpage_extended" ||
    request4669.type === "grouped_webpages"
  )
    return appInitialF(request4669).flatMap((item) => {
      let slot15588 = turnSourcesModelT({
        label: item.label,
        title: item.title,
        url: item.url,
      });
      return slot15588 == null ? [] : [slot15588];
    });
  let slot10779 = null;
  if (request4669.type === "file") slot10779 = AppInitialSI(request4669);
  else if (request4669.type === "image_inline") {
    let slot15483 = Array.isArray(request4669.asset_pointer_links)
      ? request4669.asset_pointer_links
      : [];
    slot10779 =
      appInitialRF(request4669.clicked_from_url) ?? appInitialRF(slot15483[0]);
  }
  if (slot10779 == null) return [];
  let slot10780 = turnSourcesModelT({
    title: _AppInitialOI(request4669),
    url: slot10779,
  });
  return slot10780 == null ? [] : [slot10780];
}

function useChatgptComposerControllerHelper290(request5471) {
  let slot11726 = request5471.flatMap((item) => {
      return item.type === "chatgpt-reasoning-group" ? item.items : [item];
    }),
    slot11727 = slot11726.some((item) => {
      return (
        item.type === "assistant-message" &&
        item.contentReferences.some(_appInitialBI)
      );
    });
  return turnSourcesModelN(
    slot11726
      .flatMap((item) => {
        return item.type === "assistant-message"
          ? [
              ...(slot11727 ? [] : item.contentReferences),
              ...(item.sourcesFooterReferences ?? []),
            ]
          : [];
      })
      .flatMap(useChatgptComposerControllerHelper291),
  );
}

export {
  useChatgptComposerControllerHelper290,
  useChatgptComposerControllerHelper291,
};

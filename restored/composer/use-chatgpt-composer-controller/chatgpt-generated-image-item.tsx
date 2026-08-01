// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Generated-image turn item renderer + image-src diagnostics.

import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationServerIdAtom as appInitialFP,
  writingBlocksControllerAtom as appInitialCI,
} from "../../composer/composer-appscope-atoms";
import { ToneSectionEditor as _appInitialHl } from "../../composer/tone-section-editor";
import { GeneratedImageTabs as AppInitialTc } from "../../conversation/generated-image-tabs";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { isProtocolRelativeOrAbsoluteUrl as AppInitialJI } from "../../utils/is-protocol-relative-or-absolute-url";
import { useChatgptComposerControllerHelper104 } from "./chatgpt-conversation-image-download";

const slot373 = new Set<string>();

function useChatgptComposerControllerHelper294(request6707) {
  if (request6707 == null) return "none";
  if (request6707.startsWith("sediment://")) return "sediment";
  if (request6707.startsWith("file-service://")) return "file-service";
  if (request6707.startsWith("data:image/")) return "data-url";
  try {
    return new URL(request6707).protocol.replace(/:$/, "") || "unknown";
  } catch {
    return "unknown";
  }
}

function useChatgptComposerControllerHelper293({ conversationId, item }) {
  let slot12678 = `${conversationId}:${item.id}:${item.src ?? "no-src"}`;
  slot373.has(slot12678) ||
    (slot373.add(slot12678),
    appInitialDdt.debug("ChatGPT image render diagnostic", {
      safe: {
        hasSource: item.src != null,
        sourceKind: useChatgptComposerControllerHelper294(item.src),
        status: item.status,
      },
      sensitive: {
        conversationId,
        itemId: item.id,
        src: item.src,
      },
    }));
}

function useChatgptComposerControllerHelper292(request1403) {
  const AppInitialHl = _appInitialHl;
  let {
      conversationId,
      index,
      item,
      items,
      localConversationId,
      shouldBlockExternalEgress,
    } = request1403,
    slot5034 = appInitialLT(appInitialFft),
    slot5035,
    slot5036;
  slot5036 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot6565 = slot5034.get(appInitialFP, conversationId);
    if (
      (useChatgptComposerControllerHelper293({
        conversationId,
        item,
      }),
      item.src == null)
    ) {
      let slot14542;
      slot14542 = <AppInitialHl />;
      slot5036 = slot14542;
      break bb0;
    }
    if (shouldBlockExternalEgress && AppInitialJI(item.src)) {
      slot5036 = null;
      break bb0;
    }
    if (slot6565 == null) {
      let slot14520;
      slot14520 = <AppInitialHl />;
      slot5036 = slot14520;
      break bb0;
    }
    for (let slot14380 = index - 1; slot14380 >= 0; --slot14380) {
      let slot14733 = items[slot14380];
      if (slot14733?.type !== "generated-image" || slot14733.src == null) break;
      if (!shouldBlockExternalEgress || !AppInitialJI(slot14733.src)) {
        slot5036 = null;
        break bb0;
      }
    }
    let slot6566 = [];
    for (let slot12565 = index; slot12565 < items.length; slot12565 += 1) {
      let slot12947 = items[slot12565];
      if (slot12947?.type !== "generated-image" || slot12947.src == null) break;
      (shouldBlockExternalEgress && AppInitialJI(slot12947.src)) ||
        slot6566.push({
          ...slot12947,
          previewSrc:
            shouldBlockExternalEgress &&
            slot12947.previewSrc != null &&
            AppInitialJI(slot12947.previewSrc)
              ? slot12947.src
              : slot12947.previewSrc,
        });
    }
    slot5035 = (
      <AppInitialTc
        images={slot6566}
        conversationId={localConversationId}
        imageAssetResolver={useChatgptComposerControllerHelper104(
          slot5034.get(appInitialCI),
          slot6565,
        )}
      />
    );
  }
  return slot5036 === Symbol.for("react.early_return_sentinel")
    ? slot5035
    : slot5036;
}

export {
  useChatgptComposerControllerHelper292,
  useChatgptComposerControllerHelper293,
  useChatgptComposerControllerHelper294,
};

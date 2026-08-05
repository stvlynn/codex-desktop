// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Collect GenUI refresh targets from a conversation tree (Helper9).

import { extractContentReferencesFromMessage as AppInitialCI } from "../../content/extract-content-references-from-message";
import { hasDilField as AppInitialVI } from "../../content/has-dil-field";
import { walkChatgptMessageTree as appInitialPF } from "../../conversation/walk-chatgpt-message-tree";
import { chatgptGenUiRefreshMetadataSchema } from "./chatgpt-conversation-update-schemas";

export function useChatgptComposerControllerHelper9(request6167: any) {
  return appInitialPF(request6167).flatMap((item) => {
    let slot12948 = item.id,
      slot12949 = chatgptGenUiRefreshMetadataSchema.safeParse(item.metadata),
      slot12950 = slot12949.success
        ? (slot12949.data.is_complete ?? item.status !== "in_progress")
        : false;
    return item.author.role !== "assistant" ||
      slot12948 == null ||
      !slot12949.success ||
      !slot12950
      ? []
      : AppInitialCI(item.metadata).flatMap((_item, index) => {
          return AppInitialVI(_item)
            ? [
                {
                  messageId: slot12948,
                  refIndex: index,
                },
              ]
            : [];
        });
  });
}

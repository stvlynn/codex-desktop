// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Refetch a loaded ChatGPT conversation into the app-scope store (Helper16).

import {
  chatgptConversationBranchAtom as appInitialRP,
  chatgptConversationStatusAtom as appInitialGP,
  chatgptThreadDerivedAtomBP as appInitialBP,
  writingBlocksControllerAtom as appInitialCI,
} from "../../composer/composer-appscope-atoms";
import { chatgptMessageFallbackId as _appInitialIF } from "../../conversation/chatgpt-message-fallback-id";
import { appLogger as appInitialDdt } from "../../logging/app-logger";

export function useChatgptComposerControllerHelper16(request3043: any, request3044: any, request3045: any) {
  let slot8169 =
    request3043.get(
      appInitialGP,
      request3044,
    );
  return (
    appInitialDdt.info("chatgpt_conversation_refetch_started", {
      safe: {
        reason: request3045,
        statusBefore: slot8169,
      },
      sensitive: {
        conversationId: request3044,
      },
    }),
    request3043
      .get(appInitialCI)
      .get(request3044)
      .then((value) => {
        _appInitialIF(request3043, value, {
          mergeActiveBranch: true,
        });
        let slot10892 =
          request3043.get(
            appInitialBP,
            request3044,
          );
        appInitialDdt.info("chatgpt_conversation_refetch_completed", {
          safe: {
            asyncStatus: value.async_status ?? null,
            currentNodeApplied:
              request3043.get(
                appInitialRP,
                request3044,
              ) === value.current_node,
            mappingSize:
              slot10892 == null
                ? 0
                : Object.keys(slot10892).length,
            reason: request3045,
            snapshotMappingSize: Object.keys(value.mapping).length,
            statusAfter: request3043.get(
              appInitialGP,
              request3044,
            ),
            statusBefore: slot8169,
          },
          sensitive: {
            conversationId: request3044,
          },
        });
      })
      .catch((error) => {
        appInitialDdt.warning(
          "Failed to refetch ChatGPT conversation after an update",
          {
            safe: {
              reason: request3045,
              statusBefore: slot8169,
            },
            sensitive: {
              conversationId: request3044,
              error,
            },
          },
        );
      })
  );
}

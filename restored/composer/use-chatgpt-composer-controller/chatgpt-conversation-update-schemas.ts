// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Conversation-update Zod schemas + poll delay constants (Value12–19).

import {
  ensureComposerEsm_BF_Init as appInitialBF,
  ensureComposerEsm_II_Init as appInitialII,
  ensureComposerEsm_MI_Init as appInitialMI,
  ensureComposerEsm_odt_Init as appInitialOdt,
} from "../../composer/composer-esm-inits";
import { isChatgptMessageNode as AppInitialNI } from "../../conversation/is-chatgpt-message-node";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import {
  ensureZodRuntime,
  zodArray,
  zodBoolean,
  zodCustom as appInitialHT,
  zodLiteral as appInitialYT,
  zodObject as appInitialXT,
  zodRecord as appInitialST,
  zodString as appInitialCT,
  zodUnknown as appInitialET,
} from "../../vendor/zod";

void _appInitialYI;
let chatgptGenUiRefreshMetadataSchema,
  chatgptMessageNodeSchema,
  chatgptConversationUpdateEventSchema,
  chatgptConversationUpdatesBatchSchema,
  chatgptConversationUpdateItemSchema,
  chatgptWidgetRefreshMinIntervalMs,
  chatgptWidgetRefreshBackoffMs,
  conversationUpdateNotFoundRetryMs,
  ensureChatgptConversationUpdateSchemasInit = rolldownRuntimeN(() => {
    ensureZodRuntime();
    appInitialOdt();
    appInitialMI();
    /* ThreadResourceCard materialization — component import keeps chunk live */
    appInitialII();
    appInitialBF();
    chatgptGenUiRefreshMetadataSchema = appInitialXT({
      genui_refresh: appInitialXT({
        enabled: appInitialYT(true),
        name: appInitialCT().trim().min(1),
      }).passthrough(),
      is_complete: zodBoolean().optional(),
    }).passthrough();
    chatgptMessageNodeSchema = appInitialHT(AppInitialNI);
    chatgptConversationUpdateEventSchema = appInitialXT({
      payload: appInitialXT({
        conversation_id: appInitialCT(),
        update_content: appInitialST(appInitialCT(), appInitialET()).optional(),
        update_type: appInitialCT(),
      }),
      type: appInitialYT("conversation-update"),
    });
    chatgptConversationUpdatesBatchSchema = appInitialXT({
      payload: appInitialXT({
        updates: zodArray(appInitialET()),
      }),
      type: appInitialYT("conversation-updates"),
    });
    chatgptConversationUpdateItemSchema = appInitialXT({
      conversation_id: appInitialCT(),
      message: appInitialET().optional(),
      type: appInitialCT(),
    });
    chatgptWidgetRefreshMinIntervalMs = 1e3;
    chatgptWidgetRefreshBackoffMs = 5e3;
    conversationUpdateNotFoundRetryMs = 1e3;
  });

export {
  chatgptGenUiRefreshMetadataSchema,
  chatgptMessageNodeSchema,
  chatgptConversationUpdateEventSchema,
  chatgptConversationUpdatesBatchSchema,
  chatgptConversationUpdateItemSchema,
  chatgptWidgetRefreshMinIntervalMs,
  chatgptWidgetRefreshBackoffMs,
  ensureChatgptConversationUpdateSchemasInit,
  conversationUpdateNotFoundRetryMs,
};

// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Parse conversation-update / conversation-updates wire payloads (Helper11).

import { conversationUnreadStatusSchema as AppInitialFI } from "../../conversation/conversation-unread-status-schema";
import {
  chatgptMessageNodeSchema,
  chatgptConversationUpdateEventSchema,
  chatgptConversationUpdatesBatchSchema,
  chatgptConversationUpdateItemSchema,
} from "./chatgpt-conversation-update-schemas";

export function useChatgptComposerControllerHelper11(request1633: any) {
  let slot5441 =
    chatgptConversationUpdateEventSchema.safeParse(
      request1633,
    );
  if (slot5441.success) {
    let { conversation_id, update_content, update_type } =
      slot5441.data.payload;
    switch (update_type) {
      case "async-task-completed":
      case "async-task-update-message": {
        let slot14506 =
          chatgptMessageNodeSchema.safeParse(
            update_content?.message,
          );
        return slot14506.success
          ? [
              {
                conversationId: conversation_id,
                message: slot14506.data,
                type: "message",
              },
            ]
          : [
              {
                conversationId: conversation_id,
                type: "refetch",
              },
            ];
      }
      case "add-messages":
      case "async-task-insert-message":
      case "refetch-conversation":
        return [
          {
            conversationId: conversation_id,
            type: "refetch",
          },
        ];
      case "set-conversation-async-status": {
        let slot12779 = AppInitialFI.safeParse(
          update_content?.conversation_async_status,
        );
        if (!slot12779.success) return [];
        let slot12780 = [
          {
            asyncStatus: slot12779.data,
            conversationId: conversation_id,
            type: "async-status",
          },
        ];
        return (
          update_content?.is_async_correction === true &&
            slot12780.push({
              conversationId: conversation_id,
              type: "refetch",
            }),
          slot12780
        );
      }
      default:
        return [];
    }
  }
  let slot5442 =
    chatgptConversationUpdatesBatchSchema.safeParse(
      request1633,
    );
  return slot5442.success
    ? slot5442.data.payload.updates.flatMap(
        (item) => {
          let slot9368 =
            chatgptConversationUpdateItemSchema.safeParse(item);
          if (!slot9368.success) return [];
          let { conversation_id, type } =
            slot9368.data;
          if (
            type === "add-turn-message" ||
            type === "replace-turn-message" ||
            type === "stream-message-start" ||
            type === "upsert-turn-message"
          ) {
            let slot14363 =
              chatgptMessageNodeSchema.safeParse(
                slot9368.data.message,
              );
            return slot14363.success
              ? [
                  {
                    conversationId: conversation_id,
                    message: slot14363.data,
                    type: "message",
                  },
                ]
              : [
                  {
                    conversationId: conversation_id,
                    type: "refetch",
                  },
                ];
          }
          return type === "add-conversation-item" ||
            type === "convert-turn-to-paragen" ||
            type === "discard-items" ||
            type === "resolve-paragen" ||
            type === "stream-message-done"
            ? [
                {
                  conversationId: conversation_id,
                  type: "refetch",
                },
              ]
            : [];
        },
      )
    : [];
}

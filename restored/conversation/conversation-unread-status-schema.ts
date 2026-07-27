// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `O_a` / export `FI` — nullable unread/stream status code enum.

import { z } from "zod";

/** Conversation stream/unread status codes used by ChatGPT thread badges. */
export const ConversationUnreadStatusCode = {
  ONE: 1,
  TWO: 2,
  STREAMING: 3,
  UNREAD: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
} as const;

export type ConversationUnreadStatusCode =
  (typeof ConversationUnreadStatusCode)[keyof typeof ConversationUnreadStatusCode];

/** Bundle `D_a` base enum (not separately exported to composer). */
export const conversationUnreadStatusCodeSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
]);

/** Bundle `O_a` / export `FI`. */
export const conversationUnreadStatusSchema =
  conversationUnreadStatusCodeSchema.nullable();

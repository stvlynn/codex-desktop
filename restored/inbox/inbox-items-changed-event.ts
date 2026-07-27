// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Inbox mutation event name (`Sge`, co-located with `Dge`).

/** Bundle `Sge` (co-located with packet-004 inbox/browser consts). */
export const InboxItemsChangedEvent = {
  CHANGED: "inbox-items-changed",
} as const;

export type InboxItemsChangedEvent =
  (typeof InboxItemsChangedEvent)[keyof typeof InboxItemsChangedEvent];

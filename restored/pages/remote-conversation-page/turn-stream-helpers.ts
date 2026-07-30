// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Stream / thread-event merge helpers for remote turns.

import {
  isRemoteStreamMethod,
  parseRemoteStreamEnvelope,
  type RemoteStreamEnvelope,
} from "./turn-helpers";

export type ThreadEventNotification = {
  method: string;
  params: unknown;
};

export type StoredThreadEvent = {
  id: string;
  notification: ThreadEventNotification;
};

export type LiveOrStoredThreadEventItem = {
  id?: unknown;
  item_type?: string;
  event?: unknown;
  [key: string]: unknown;
};

/** True for plain objects (staging helper). */
export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === "object" && !!value;
}

/** Stable item identity for image-generation dedupe. */
export function threadItemIdentity(item: {
  type?: string;
  id?: string;
}): string {
  return `${item.type ?? ""}:${item.id ?? ""}`;
}

/** Parse a raw stream envelope into a typed notification (staging helper). */
export function parseThreadEventNotification(
  value: unknown,
): ThreadEventNotification | null {
  if (!isPlainObject(value)) return null;
  const parsed = parseRemoteStreamEnvelope(value as RemoteStreamEnvelope);
  return parsed;
}

/** Map stored turn.thread_events into timeline envelopes (staging helper). */
export function storedTurnEventsToNotifications(
  turn:
    | {
        thread_events?: { events?: unknown[] } | null;
      }
    | null
    | undefined,
): StoredThreadEvent[] {
  const events = turn?.thread_events?.events;
  if (!Array.isArray(events)) return [];
  return events.flatMap((item, index) => {
    const notification = parseThreadEventNotification(item);
    return notification == null
      ? []
      : [{ id: `stored:${index}`, notification }];
  });
}

/** Map a live stream item into a timeline envelope (staging helper). */
export function liveStreamItemToNotification(
  item: LiveOrStoredThreadEventItem | null | undefined,
): StoredThreadEvent | null {
  if (!isPlainObject(item) || item.item_type !== "thread_event") {
    return null;
  }
  const notification = parseThreadEventNotification(item.event);
  if (notification == null) return null;
  return {
    id: typeof item.id === "string" ? item.id : crypto.randomUUID(),
    notification,
  };
}

/**
 * Merge stored + live events; after completion drop live except optional
 * image-generation completions (staging helper).
 */
export function mergeStoredAndLiveThreadEvents(args: {
  turnStatus: string | null | undefined;
  storedEvents: StoredThreadEvent[];
  liveEvents: StoredThreadEvent[];
  preserveLiveImageGenerationEvents?: boolean;
}): StoredThreadEvent[] {
  const {
    turnStatus,
    storedEvents,
    liveEvents,
    preserveLiveImageGenerationEvents = false,
  } = args;
  const hasCompletedAgentMessage = storedEvents.some((item) => {
    const params = item.notification.params as
      | { item?: { type?: string } }
      | undefined;
    return (
      item.notification.method === "item/completed" &&
      params?.item?.type === "agentMessage"
    );
  });
  if (turnStatus !== "completed" || !hasCompletedAgentMessage) {
    return [...storedEvents, ...liveEvents];
  }
  if (!preserveLiveImageGenerationEvents) return storedEvents;

  const seen = new Set(
    storedEvents.flatMap((item) => {
      if (item.notification.method !== "item/completed") return [];
      const params = item.notification.params as
        | { item?: { type?: string; id?: string } }
        | undefined;
      return params?.item ? [threadItemIdentity(params.item)] : [];
    }),
  );

  const liveImageCompletions = liveEvents.filter((item) => {
    if (item.notification.method !== "item/completed") return false;
    const params = item.notification.params as
      | { item?: { type?: string; id?: string } }
      | undefined;
    return (
      params?.item?.type === "imageGeneration" &&
      !seen.has(threadItemIdentity(params.item))
    );
  });
  return [...storedEvents, ...liveImageCompletions];
}

/** Terminal cloud turn statuses that close the live stream (staging helper). */
export function isTerminalRemoteTurnStatus(
  status: string | null | undefined,
): boolean {
  return (
    status === "completed" || status === "failed" || status === "cancelled"
  );
}

/** Re-export stream method predicate used by parsers. */
export { isRemoteStreamMethod };

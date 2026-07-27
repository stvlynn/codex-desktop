// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `dJn`) / export `B8`.

export type FilterConversationTimelineItemsPeers = {
  buildUserMessageItem: (args: {
    input: unknown;
    attachments: unknown[];
    commentAttachments: unknown[];
    sentAtMs: number | null;
  }) => { item: unknown };
  shouldHideSteeringOrUser: (
    items: unknown[],
    index: number,
    item: unknown,
    params: unknown,
    shouldHideUserMessage?: (input: unknown) => boolean,
  ) => boolean;
  shouldKeepItem: (args: {
    item: unknown;
    hideTodoListItems: boolean;
    status: unknown;
    isBackgroundSubagentsEnabled: boolean;
  }) => boolean;
};

let peers: FilterConversationTimelineItemsPeers | null = null;

/** Wire timeline filter peers once companions land. */
export function setFilterConversationTimelineItemsPeers(
  next: FilterConversationTimelineItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `B8` / internal `dJn`.
 * Whether a conversation turn should appear in the timeline.
 */
export function filterConversationTimelineItems(
  turn: {
    params?: {
      input?: unknown;
      attachments?: unknown[];
      commentAttachments?: unknown[];
    };
    turnStartedAtMs?: number | null;
    items:
      | Map<unknown, { type?: string } | null>
      | Array<{ type?: string } | null>;
    status?: unknown;
  },
  _unused: unknown,
  options?: {
    hideTodoListItems?: boolean;
    isBackgroundSubagentsEnabled?: boolean;
    shouldHideUserMessage?: (input: unknown) => boolean;
  },
): boolean {
  if (peers == null) {
    throw new Error("FilterConversationTimelineItems peers are not configured");
  }
  const {
    hideTodoListItems = false,
    isBackgroundSubagentsEnabled = true,
    shouldHideUserMessage,
  } = options ?? {};
  const params = turn.params ?? {};
  if (
    shouldHideUserMessage?.(params.input) !== true &&
    peers.buildUserMessageItem({
      input: params.input,
      attachments: params.attachments ?? [],
      commentAttachments: params.commentAttachments ?? [],
      sentAtMs: turn.turnStartedAtMs ?? null,
    }).item != null
  ) {
    return true;
  }
  const entries =
    turn.items instanceof Map
      ? [...turn.items.entries()]
      : turn.items.map((item, index) => [index, item] as const);
  for (const [index, item] of entries) {
    if (item == null) continue;
    if (
      hideTodoListItems &&
      turn.status !== "inProgress" &&
      item.type === "todo-list"
    ) {
      continue;
    }
    if (item.type === "userMessage" || item.type === "steeringUserMessage") {
      if (
        peers.shouldHideSteeringOrUser(
          entries.map(([, value]) => value),
          Number(index),
          item,
          params,
          shouldHideUserMessage,
        )
      ) {
        continue;
      }
    }
    if (
      peers.shouldKeepItem({
        item,
        hideTodoListItems,
        status: turn.status,
        isBackgroundSubagentsEnabled,
      })
    ) {
      return true;
    }
  }
  return false;
}

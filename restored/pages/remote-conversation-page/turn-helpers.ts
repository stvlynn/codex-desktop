// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Pure turn / message helpers for the remote conversation page.

export type RemoteTurnStatusInput = {
  cancellation_requested_at?: string | number | null;
  turn_status?: string | null;
};

export type RemoteTurnPresentationStatus =
  | "completed"
  | "failed"
  | "interrupted"
  | "inProgress"
  | undefined;

/** Map cloud turn fields to presentation status. */
export function classifyRemoteTurnStatus(
  turn: RemoteTurnStatusInput,
): RemoteTurnPresentationStatus {
  if (
    turn.cancellation_requested_at != null &&
    (turn.turn_status === "pending" || turn.turn_status === "in_progress")
  ) {
    return "interrupted";
  }
  switch (turn.turn_status) {
    case "completed":
      return "completed";
    case "failed":
      return "failed";
    case "cancelled":
      return "interrupted";
    case "in_progress":
    case "pending":
      return "inProgress";
    default:
      return undefined;
  }
}

export type MessageLikeItem = {
  type?: string;
  content?: Array<{ content_type?: string; text?: string }>;
};

/** Flatten message items into a single text content part. */
export function assistantTextContentParts(
  items: MessageLikeItem[],
): Array<{ type: "text"; text: string; text_elements: unknown[] }> {
  const text = items
    .flatMap((item) => (item.type === "message" ? (item.content ?? []) : []))
    .filter((part) => part.content_type === "text")
    .map((part) => part.text ?? "")
    .join("\n");
  return text.trim().length > 0
    ? [{ type: "text", text, text_elements: [] }]
    : [];
}

/** Join all text content parts across items. */
export function joinMessageTextContent(items: MessageLikeItem[]): string {
  return items
    .flatMap((item) =>
      (item.content ?? []).filter((part) => part.content_type === "text"),
    )
    .map((part) => part.text ?? "")
    .join("");
}

const STREAM_METHODS = new Set([
  "turn/started",
  "turn/completed",
  "turn/diff/updated",
  "turn/plan/updated",
  "item/started",
  "item/completed",
  "item/agentMessage/delta",
  "item/plan/delta",
  "item/reasoning/summaryTextDelta",
  "item/reasoning/textDelta",
  "item/commandExecution/outputDelta",
  "error",
]);

/** Known remote stream method names. */
export function isRemoteStreamMethod(method: string): boolean {
  return STREAM_METHODS.has(method);
}

export type RemoteStreamEnvelope = {
  method?: unknown;
  params?: unknown;
};

/** Narrow a stream envelope to a known method. */
export function parseRemoteStreamEnvelope(
  value: RemoteStreamEnvelope | null | undefined,
): { method: string; params: unknown } | null {
  if (value == null || typeof value !== "object") return null;
  const method = value.method;
  if (typeof method !== "string" || !isRemoteStreamMethod(method)) return null;
  return { method, params: value.params };
}

/** Seconds → milliseconds when numeric. */
export function secondsToMillis(value: unknown): number | null {
  return typeof value === "number" ? value * 1000 : null;
}

/** Primary/secondary CTA action bag predicate. */
export function isPrimarySecondaryActions(
  actions: unknown,
): actions is { primary: unknown; secondary?: unknown } {
  return (
    !!actions &&
    typeof actions === "object" &&
    "primary" in (actions as Record<string, unknown>)
  );
}

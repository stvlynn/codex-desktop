// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Timeline navigator / text / preview helpers for remote turns.

import { joinColonKey } from "../../utils/join-colon-key";
import type { RemoteTurnLike } from "./turn-diff-helpers";

/** Query a turn container node inside the timeline root. */
export function queryTurnContainer(
  root: { current: HTMLElement | null },
  turnKey: string,
): HTMLElement | null {
  const node = root.current;
  if (node == null) return null;
  return (
    (node.querySelector(
      `[data-content-search-turn-key="${turnKey}"]`,
    ) as HTMLElement | null) ??
    (node.querySelector(
      `[data-content-search-assistant-turn-key="${turnKey}"]`,
    ) as HTMLElement | null)
  );
}

export type SetupLogEvent = {
  key: { type?: string; created_at?: string | null };
  line: string;
};

/** Flatten stored setup-script log events. */
export function flattenSetupScriptLogs(
  event: SetupLogEvent,
  index: number,
): Array<{ id: string; createdAt: string; line: string }> {
  return event.key.type === "UserSetupScript"
    ? [
        {
          id: `stored:${index}`,
          createdAt: event.key.created_at ?? "",
          line: event.line,
        },
      ]
    : [];
}

/** Unwrap a stored/live notification envelope. */
export function unwrapThreadEventNotification<T>(envelope: {
  notification: T;
}): T {
  return envelope.notification;
}

/** Join message text parts across content arrays. */
export function joinTextContentParts(
  items: Array<{
    content?: Array<{ content_type?: string; text?: string }>;
  }>,
): string {
  return items
    .flatMap((item) =>
      (item.content ?? []).filter((part) => part.content_type === "text"),
    )
    .map((part) => part.text ?? "")
    .join("");
}

export type TimelineOutputPreviewType =
  | "file"
  | "image"
  | "website"
  | "pull-request"
  | "review"
  | "commit"
  | null;

/** Map an output item type to a timeline preview chip type. */
export function classifyOutputPreviewType(
  item: { type?: string } | null | undefined,
): TimelineOutputPreviewType {
  switch (item?.type) {
    case "output_diff":
    case "follow_up_diff":
    case "output_asset_pointer":
      return "file";
    case "output_image_asset_pointer":
      return "image";
    case "output_preview":
    case "output_deployment_info":
      return "website";
    case "pr":
      return "pull-request";
    case "comment":
    case "cr":
    case "review":
    case "sr":
    case "suggested_task":
      return "review";
    case "message":
    case "output_session_info":
    case "partial_repo_snapshot":
    case "rollout_summary":
    case undefined:
      return null;
    default:
      return null;
  }
}

export type TurnGrouping = {
  node: {
    userTurn: RemoteTurnLike & {
      input_items?: Array<{ type?: string; content?: unknown[] }>;
    };
    assistantTurns: RemoteTurnLike[];
  };
  activeId: string | null | undefined;
};

/**
 * Build lightweight timeline navigator items from groupings.
 * `pickAssistant` mirrors public `pickPreferredById`.
 */
export function buildTimelineNavigatorItems(
  groupings: TurnGrouping[],
  pickAssistant: (
    turns: RemoteTurnLike[],
    activeId: string | null | undefined,
  ) => RemoteTurnLike | null,
): Array<{
  id: string;
  turnKey: string;
  isHeartbeat: boolean;
  getLabel: () => string;
  getPreview: () => {
    outputs: Array<{
      label: string | null;
      type: NonNullable<TimelineOutputPreviewType> | "commit";
    }>;
    response: string;
  };
}> {
  return groupings.map(({ node, activeId }) => {
    const turnKey = joinColonKey("user", node.userTurn.id);
    const assistant = pickAssistant(node.assistantTurns, activeId);
    const outputs = assistant?.output_items ?? [];
    return {
      id: joinColonKey(turnKey, "message"),
      turnKey,
      isHeartbeat: false,
      getLabel: () =>
        joinTextContentParts(
          (node.userTurn.input_items ?? []).filter(
            (item) => item.type === "message",
          ) as Array<{
            content?: Array<{ content_type?: string; text?: string }>;
          }>,
        ).trim(),
      getPreview: () => {
        const previewOutputs = outputs.flatMap((item) => {
          const type = classifyOutputPreviewType(item);
          if (type == null) return [];
          let label: string | null = null;
          if (item.type === "pr") {
            label = (item.pr_title ?? "").trim() || null;
          } else if (
            item.type === "comment" ||
            item.type === "suggested_task"
          ) {
            label = item.title?.trim() || null;
          }
          return [{ label, type }];
        });
        if (assistant?.direct_push_pushed_commit_sha != null) {
          previewOutputs.push({ label: null, type: "commit" });
        }
        return {
          outputs: previewOutputs,
          response: joinTextContentParts(
            outputs.filter((item) => item.type === "message") as Array<{
              content?: Array<{ content_type?: string; text?: string }>;
            }>,
          ).trim(),
        };
      },
    };
  });
}

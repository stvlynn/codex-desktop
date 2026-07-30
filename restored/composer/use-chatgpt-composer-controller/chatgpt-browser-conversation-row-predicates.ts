// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Turn-item predicates and flatteners for ChatGPT browser-conversation rows.

import { joinColonKey } from "../../utils/join-colon-key";

type TurnItem = {
  type?: string;
  completed?: boolean;
  src?: string | null;
  deliveryStatus?: string;
  steeringStatus?: string;
  message?: string;
  items?: TurnItem[];
  reasoningRecap?: unknown;
  id?: string;
  branchSource?: unknown;
  status?: string;
};

export function isGeneratedImageItem(item: TurnItem): boolean {
  return item.type === "generated-image";
}
export function isGeneratedImageWithSrc(item: TurnItem): boolean {
  return item.type === "generated-image" && item.src != null;
}
export function isTurnItemCompleted(item: { completed?: boolean }): boolean {
  return item.completed === true;
}
export function isChatgptReasoningGroup(item: TurnItem): boolean {
  return item.type === "chatgpt-reasoning-group";
}
export function isMcpToolCallItem(item: TurnItem): boolean {
  return item.type === "mcp-tool-call";
}
export function userMessageToTextUnits(
  item: TurnItem,
): Array<{ type: "text"; text: string; text_elements: unknown[] }> {
  return item.type === "user-message" &&
    item.deliveryStatus !== "not-sent" &&
    item.steeringStatus !== "pending"
    ? [{ type: "text", text: item.message ?? "", text_elements: [] }]
    : [];
}
export function isUserMessageItem(item: TurnItem): boolean {
  return item.type === "user-message";
}
export function flattenReasoningGroupOrItem(item: TurnItem): TurnItem[] {
  return item.type === "chatgpt-reasoning-group" ? (item.items ?? []) : [item];
}
export function hasReasoningRecap(item: TurnItem): boolean {
  return item.reasoningRecap != null;
}
export function reasoningGroupChildItems(item: TurnItem): TurnItem[] {
  return item.items ?? [];
}
export function isTodoPlanEntryCompleted(entry: { status?: string }): boolean {
  return entry.status === "completed";
}
export function conversationSearchUnitKey(
  item: TurnItem,
  index: number,
  turnId: unknown,
): string | undefined {
  if (item.type !== "assistant-message" && item.type !== "user-message") {
    return undefined;
  }
  const role = item.type === "assistant-message" ? "assistant" : "user";
  return joinColonKey(String(turnId ?? ""), joinColonKey(role, String(index)));
}
export function findLastAssistantMessage(items: TurnItem[]): TurnItem | null {
  for (let i = items.length - 1; i >= 0; --i) {
    const item = items[i];
    if (item?.type === "assistant-message") return item;
  }
  return null;
}
export function findBranchSourceInTurnItems(items: TurnItem[]): unknown {
  for (const item of items) {
    if (
      (item.type === "assistant-message" || item.type === "user-message") &&
      item.branchSource != null
    ) {
      return item.branchSource;
    }
  }
  return null;
}

export const useChatgptComposerControllerHelper295 = isGeneratedImageItem;
export const useChatgptComposerControllerHelper296 = isGeneratedImageWithSrc;
export const $S = isTurnItemCompleted;
export const useChatgptComposerControllerHelper297 = isChatgptReasoningGroup;
export const useChatgptComposerControllerHelper298 = isMcpToolCallItem;
export const useChatgptComposerControllerHelper299 = userMessageToTextUnits;
export const useChatgptComposerControllerHelper300 = isUserMessageItem;
export const useChatgptComposerControllerHelper301 =
  flattenReasoningGroupOrItem;
export const useChatgptComposerControllerHelper302 = hasReasoningRecap;
export const useChatgptComposerControllerHelper303 = reasoningGroupChildItems;
export const useChatgptComposerControllerHelper304 = isChatgptReasoningGroup;
export const useChatgptComposerControllerHelper306 = isTodoPlanEntryCompleted;
export const useChatgptComposerControllerHelper309 = conversationSearchUnitKey;
export const useChatgptComposerControllerHelper310 = findLastAssistantMessage;
export const useChatgptComposerControllerHelper311 =
  findBranchSourceInTurnItems;

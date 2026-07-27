// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `owa` / export `PF`.

export type ChatgptConversationMappingNode = {
  id?: string;
  parent?: string | null;
  message?: unknown;
};

export type ChatgptConversationTree = {
  current_node?: string | null;
  mapping: Record<string, ChatgptConversationMappingNode | undefined>;
};

export function walkChatgptMessageTree(conversation: ChatgptConversationTree): ChatgptConversationMappingNode[] {
  const nodes: ChatgptConversationMappingNode[] = [];
  const seen = new Set<string>();
  let cursor: string | null = conversation.current_node ?? null;
  while (cursor != null && !seen.has(cursor)) {
    const node = conversation.mapping[cursor];
    if (node == null) break;
    nodes.push(node);
    seen.add(cursor);
    cursor = (node.parent as string | null | undefined) ?? null;
  }
  return nodes;
}

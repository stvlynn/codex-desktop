// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dJn`) / export `B8`.

export type FilterConversationTimelineItemsPeers = {
  attachments: (...args: unknown[]) => unknown;
  bJn: (...args: unknown[]) => unknown;
  commentAttachments: (...args: unknown[]) => unknown;
  fJn: (...args: unknown[]) => unknown;
  input: (...args: unknown[]) => unknown;
  v_: (...args: unknown[]) => unknown;
};

let peers: FilterConversationTimelineItemsPeers | null = null;

/** Wire filterConversationTimelineItems peers once companions land. */
export function setFilterConversationTimelineItemsPeers(next: FilterConversationTimelineItemsPeers): void {
  peers = next;
}

/**
 * Bundle export `B8` / internal `dJn`.
 */
export function filterConversationTimelineItems(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("filterConversationTimelineItems peers are not configured");
  }

  let {
    hideTodoListItems: r = !1,
    isBackgroundSubagentsEnabled: i = !0,
    shouldHideUserMessage: a
  } = n ?? {};
  if ((a?.(e.params.input) === !0 ? null : peers.v_({
    input: e.params?.input,
    attachments: e.params?.attachments ?? [],
    commentAttachments: e.params?.commentAttachments ?? [],
    sentAtMs: e.turnStartedAtMs ?? null
  }).item) != null) return !0;
  for (let [t, n] of e.items.entries()) if (n != null && !(r && e.status !== `inProgress` && n.type === `todo-list`) && (n.type !== `userMessage` || !peers.bJn(e.items, t, n, e.params, a)) && (n.type !== `steeringUserMessage` || a?.(n.input) !== !0) && peers.fJn(n, {
    isBackgroundSubagentsEnabled: i
  })) return !0;
  for (let e of t) switch (e.method) {
    case `item/commandExecution/requestApproval`:
    case `item/permissions/requestApproval`:
    case `item/tool/requestUserInput`:
      return !0;
    case `item/tool/requestOptionPicker`:
    case `item/tool/requestSetupCodexContextPicker`:
      return !0;
    case `account/chatgptAuthTokens/refresh`:
    case `attestation/generate`:
    case `applyPatchApproval`:
    case `currentTime/read`:
    case `execCommandApproval`:
    case `item/fileChange/requestApproval`:
    case `item/plan/requestImplementation`:
    case `item/tool/call`:
    case `mcpServer/elicitation/request`:
      break;
  }
  return !1;
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wDa` / export `iF`. Store writers left injectable.

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

type Snapshot = {
  conversation_id: string;
  disabled_tool_ids?: unknown;
  title?: string | null;
  conversation_origin?: unknown;
  [key: string]: unknown;
};

let resolveId: (id: string) => string = (id) => id;
let readState: (
  get: ScopeLike["get"],
  id: string,
) => {
  status?: string;
  title?: string | null;
  conversationOrigin?: unknown;
  [key: string]: unknown;
} | null = () => null;
let setDisabledTools: (
  scope: ScopeLike,
  id: string,
  tools: unknown,
) => void = () => {};
let extractExtras: (snapshot: Snapshot) => Record<string, unknown> = () => ({});
let writeMerged: (args: Record<string, unknown>) => void = () => {};

export function setApplyServerConversationSnapshotDeps(args: {
  resolveId: typeof resolveId;
  readState: typeof readState;
  setDisabledTools: typeof setDisabledTools;
  extractExtras: typeof extractExtras;
  writeMerged: typeof writeMerged;
}): void {
  resolveId = args.resolveId;
  readState = args.readState;
  setDisabledTools = args.setDisabledTools;
  extractExtras = args.extractExtras;
  writeMerged = args.writeMerged;
}

export function applyServerConversationSnapshot(
  scope: ScopeLike,
  snapshot: Snapshot,
  { mergeActiveBranch = false }: { mergeActiveBranch?: boolean } = {},
): void {
  const id = resolveId(snapshot.conversation_id);
  const prev = readState(scope.get, id);
  setDisabledTools(scope, id, snapshot.disabled_tool_ids);
  const title = snapshot.title?.trim() || null;
  const extras = extractExtras(snapshot);
  if (prev != null && (prev.status === "streaming" || mergeActiveBranch)) {
    writeMerged({
      scope,
      id,
      prev,
      title,
      snapshot,
      extras,
      mergeActiveBranch,
    });
    return;
  }
  writeMerged({
    scope,
    id,
    prev,
    title,
    snapshot,
    extras,
    mergeActiveBranch: false,
  });
}

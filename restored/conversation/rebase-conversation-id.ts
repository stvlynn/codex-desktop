// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LDa` / export `ZP` — move client conversation state onto a new id.

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

let resolveId: (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null = () => null;
let toClientId: (id: string) => string = (id) => id;
let readState: (
  get: ScopeLike["get"],
  id: string,
) => Record<string, unknown> | null = () => null;
let linkIds: (scope: ScopeLike, from: string, to: string) => void = () => {};
let writeState: (
  scope: ScopeLike,
  state: Record<string, unknown>,
) => void = () => {};
let clearState: (scope: ScopeLike, id: string) => void = () => {};
let isClientId: (id: string) => boolean = () => false;

// atom handles injected as opaque tokens
let atoms: {
  unread?: unknown;
  suppressUnread?: unknown;
  flag?: unknown;
  counter?: unknown;
  clientToServer?: unknown;
  pending?: unknown;
} = {};

export function setRebaseConversationIdDeps(args: {
  resolveId: typeof resolveId;
  toClientId: typeof toClientId;
  readState: typeof readState;
  linkIds: typeof linkIds;
  writeState: typeof writeState;
  clearState: typeof clearState;
  isClientId?: typeof isClientId;
  atoms: typeof atoms;
}): void {
  resolveId = args.resolveId;
  toClientId = args.toClientId;
  readState = args.readState;
  linkIds = args.linkIds;
  writeState = args.writeState;
  clearState = args.clearState;
  if (args.isClientId) isClientId = args.isClientId;
  atoms = args.atoms;
}

export function rebaseConversationId(scope: ScopeLike, fromId: string, toId: string): void {
  if (fromId === toId) return;
  const resolvedFrom = resolveId(scope.get, fromId);
  if (resolvedFrom == null) return;
  const nextId = toClientId(toId);
  const state = readState(scope.get, resolvedFrom);
  if (state == null) return;
  linkIds(scope, resolvedFrom, nextId);
  const pending =
    atoms.pending != null ? scope.get(atoms.pending, fromId) : null;
  const unread =
    atoms.unread != null ? scope.get(atoms.unread, resolvedFrom) : undefined;
  const suppress =
    atoms.suppressUnread != null
      ? scope.get(atoms.suppressUnread, resolvedFrom)
      : undefined;
  const flag =
    atoms.flag != null ? scope.get(atoms.flag, resolvedFrom) : undefined;
  const counter =
    atoms.counter != null ? scope.get(atoms.counter, resolvedFrom) : 0;
  writeState(scope, { ...state, conversationId: nextId });
  if (atoms.unread != null) scope.set(atoms.unread, nextId, unread);
  if (atoms.suppressUnread != null) {
    scope.set(atoms.suppressUnread, nextId, suppress);
  }
  if (atoms.flag != null) scope.set(atoms.flag, nextId, flag);
  if (atoms.counter != null) {
    scope.set(
      atoms.counter,
      nextId,
      Math.max(
        Number(counter) || 0,
        Number(scope.get(atoms.counter, nextId)) || 0,
      ),
    );
  }
  if (isClientId(fromId) && atoms.clientToServer != null) {
    scope.set(atoms.clientToServer, fromId, nextId);
  }
  clearState(scope, resolvedFrom);
  if (pending != null && atoms.pending != null) {
    scope.set(atoms.pending, nextId, pending);
    scope.set(atoms.pending, fromId, null);
  }
}

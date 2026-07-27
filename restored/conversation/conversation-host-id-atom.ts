// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Conversation host-id family atom (bundle `rD` / export `_2`).
// Thin AppScope-adjacent facade: host binds the real jotai family.

/** Opaque atom-family token read as `scope.get(conversationHostIdAtom, id)`. */
export let conversationHostIdAtom: unknown = Symbol.for(
  "codex.conversation.host-id-atom",
);

/** Inject the host jotai family for conversation → hostId. */
export function bindConversationHostIdAtom(atomFamily: unknown): void {
  conversationHostIdAtom = atomFamily;
}

export function ensureConversationHostIdAtomInit(): void {}

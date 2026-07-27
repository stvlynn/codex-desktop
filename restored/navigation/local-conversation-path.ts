// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lu` / export `$pt` companion used by `rw`.
// Constant `hTe` = `/local`.

const LOCAL_CONVERSATION_ROOT = "/local";

/** Build `/local/<conversationId>`. */
export function localConversationPath(conversationId: string): string {
  return `${LOCAL_CONVERSATION_ROOT}/${conversationId}`;
}

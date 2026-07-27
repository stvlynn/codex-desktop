// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `TXr` / export `AY`.

export type LibraryPreviewStartState = {
  aeonStartTarget: null;
  browserTabMentionConversationId: null;
  entrypoint: "library-preview";
  implicitAttachment: unknown;
  kind: "new";
  routeConversationId: null;
};

/** Default composer/start state when opening from library preview. */
export function createLibraryPreviewStartState(
  implicitAttachment: unknown,
): LibraryPreviewStartState {
  return {
    aeonStartTarget: null,
    browserTabMentionConversationId: null,
    entrypoint: "library-preview",
    implicitAttachment,
    kind: "new",
    routeConversationId: null,
  };
}

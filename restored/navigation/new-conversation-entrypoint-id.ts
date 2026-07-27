// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eT` / export `R8`; companions `IJn` / `LJn` / `FJn`.

export const HOME_NEW_CONVERSATION_ENTRYPOINT = "new-conversation";
export const PANEL_NEW_CONVERSATION_ENTRYPOINT = "panel-new-conversation";

/** Entrypoint id for home vs panel new-conversation flows. */
export function newConversationEntrypointId(input: {
  entrypoint: string;
}): string {
  return input.entrypoint === "home"
    ? HOME_NEW_CONVERSATION_ENTRYPOINT
    : PANEL_NEW_CONVERSATION_ENTRYPOINT;
}

/** True when value is a new-conversation entrypoint id. */
export function isNewConversationEntrypointId(value: string): boolean {
  return (
    value === HOME_NEW_CONVERSATION_ENTRYPOINT ||
    value === PANEL_NEW_CONVERSATION_ENTRYPOINT
  );
}

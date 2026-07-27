// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `WM` / export `NY`.

import { newConversationEntrypointId } from "../navigation/new-conversation-entrypoint-id";

export type ConversationSurfaceRef =
  | { kind: "new"; entrypoint: "home" | "panel" }
  | {
      kind: "new";
      entrypoint: "library-preview";
      implicitAttachment:
        | {
            kind: "file";
            file: { fsPath?: string | null; path?: string | null };
          }
        | {
            kind: "image";
            image: { localPath?: string | null; src?: string | null };
          };
    }
  | { kind: "local"; clientThreadId: string }
  | { kind: "cloud"; taskId: string }
  | { kind: "chatgpt"; conversationId?: string | null }
  | { kind: "other" };

/** Stable id for a conversation surface / draft key. */
export function conversationSurfaceStableId(
  surface: ConversationSurfaceRef,
): string | undefined {
  switch (surface.kind) {
    case "new":
      switch (surface.entrypoint) {
        case "home":
        case "panel":
          return newConversationEntrypointId({
            entrypoint: surface.entrypoint,
          });
        case "library-preview":
          switch (surface.implicitAttachment.kind) {
            case "file":
              return `library-preview:${
                surface.implicitAttachment.file.fsPath ||
                surface.implicitAttachment.file.path
              }`;
            case "image":
              return `library-preview:${
                surface.implicitAttachment.image.localPath ??
                surface.implicitAttachment.image.src
              }`;
          }
          return;
        default:
          return;
      }
    case "local":
      return surface.clientThreadId;
    case "cloud":
      return `cloud:${surface.taskId}`;
    case "chatgpt":
      return `chatgpt:${surface.conversationId ?? "new"}`;
    case "other":
      return "other";
  }
}

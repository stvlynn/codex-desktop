// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// App surface id enum (`El` / export `Ngt`).

/** Bundle `El` / export `Ngt`. */
export const AppSurfaceId = {
  Codex: "codex",
  ChatGPT: "chatgpt",
} as const;

export type AppSurfaceId = (typeof AppSurfaceId)[keyof typeof AppSurfaceId];

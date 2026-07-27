// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bZn` / export `r8`.

export const ChatgptSafetyLinkSurface = {
  CHATGPT_SAFETY_LINK_SURFACE_UNSPECIFIED:
    "CHATGPT_SAFETY_LINK_SURFACE_UNSPECIFIED",
  CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT:
    "CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT",
  CHATGPT_SAFETY_LINK_SURFACE_INTEGRATED_VOICE:
    "CHATGPT_SAFETY_LINK_SURFACE_INTEGRATED_VOICE",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type ChatgptSafetyLinkSurface =
  (typeof ChatgptSafetyLinkSurface)[keyof typeof ChatgptSafetyLinkSurface];

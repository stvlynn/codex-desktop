// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_Zn` / export `t8`.

export const ChatgptSafetyLinkInteractionActionType = {
  CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_UNSPECIFIED:
    "CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_UNSPECIFIED",
  CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN:
    "CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN",
  CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED:
    "CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type ChatgptSafetyLinkInteractionActionType =
  (typeof ChatgptSafetyLinkInteractionActionType)[keyof typeof ChatgptSafetyLinkInteractionActionType];

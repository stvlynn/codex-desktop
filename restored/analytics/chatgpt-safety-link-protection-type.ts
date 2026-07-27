// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yZn` / export `n8`.

export const ChatgptSafetyLinkProtectionType = {
  CHATGPT_SAFETY_LINK_PROTECTION_TYPE_UNSPECIFIED:
    "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_UNSPECIFIED",
  CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO:
    "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO",
  CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER:
    "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type ChatgptSafetyLinkProtectionType =
  (typeof ChatgptSafetyLinkProtectionType)[keyof typeof ChatgptSafetyLinkProtectionType];

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map mobile client ids to store platforms (`QTs` / export `Qv`).

export type MobileStorePlatform = "ios" | "android";

/**
 * Bundle `QTs` / export `Qv`.
 * ChatGPT / Sora iOS → `ios`; ChatGPT Android → `android`; else `null`.
 */
export function mobileClientIdToStorePlatform(
  clientId: string | null | undefined,
): MobileStorePlatform | null {
  if (clientId === "chatgpt_mobile_ios" || clientId === "sora_mobile_ios") {
    return "ios";
  }
  if (clientId === "chatgpt_mobile_android") return "android";
  return null;
}

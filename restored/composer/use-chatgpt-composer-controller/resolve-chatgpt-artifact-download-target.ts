// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Resolve a download URL into a ChatGPT artifact download target.

import { normalizeChatgptAssetUrl } from "../../content/normalize-chatgpt-asset-url";

/** Resolve a download URL into an artifact download target. */
export function resolveChatgptArtifactDownloadTarget(
  downloadUrl: unknown,
): unknown {
  return normalizeChatgptAssetUrl(downloadUrl as string);
}

// Letter alias for boundary / legacy consumers
export const useChatgptComposerControllerG =
  resolveChatgptArtifactDownloadTarget;

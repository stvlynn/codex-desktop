// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zk` / export `i1`.

import { isLinuxPlatform } from "./is-linux-platform";
import { isMacPlatform } from "./is-mac-platform";
import { normalizeAcceleratorToken } from "./normalize-accelerator-token";
import { splitWhitespaceTokens } from "./split-whitespace-tokens";

/** Human-readable accelerator label (bundle `i1`). */
export function formatAcceleratorLabel(accelerator: string, isMac: boolean = isMacPlatform(),
  isLinux: boolean = !isMac && isLinuxPlatform(),
): string {
  const parts = accelerator.includes("+")
    ? accelerator
        .split("+")
        .map((t) => t.trim())
        .filter(Boolean)
    : splitWhitespaceTokens(accelerator);
  return parts
    .map((token) => normalizeAcceleratorToken(token, isMac, isLinux))
    .join(" ");
}

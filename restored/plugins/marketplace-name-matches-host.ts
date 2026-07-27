// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oqa` / export `vM`.

import {
  isOpenaiBundledId,
  resolveOpenaiBundledId,
} from "../config/is-openai-bundled-id";
import { parseSkillsManagePath } from "../skills/parse-skills-manage-path";

/** True when path marketplace is absent, non-bundled, or matches host. */
export function marketplaceNameMatchesHost(
  entry: { path: string },
  hostMarketplaceName: string | null | undefined,
): boolean {
  const marketplaceName =
    parseSkillsManagePath(entry.path)?.pluginMarketplaceName ?? null;
  return (
    hostMarketplaceName == null ||
    marketplaceName == null ||
    !isOpenaiBundledId(marketplaceName) ||
    marketplaceName === resolveOpenaiBundledId(hostMarketplaceName)
  );
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Nes` / export `vw`.

import { isOpenaiBundledId } from "../config/is-openai-bundled-id";
import { hostFromAtSeparatedId } from "./host-from-at-separated-id";

/** Drop browser plugins unless marketplace host is missing or openai-bundled. */
export function filterBrowserPluginsUnlessBundled<
  T extends { plugin: { id: string; name: string } },
>(entries: T[]): T[] {
  return entries.filter((entry) => {
    const host = hostFromAtSeparatedId(entry.plugin.id);
    return (
      entry.plugin.name !== "browser" ||
      host == null ||
      !isOpenaiBundledId(host)
    );
  });
}

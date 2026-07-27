// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_Hi` / export `IH`.

import { filterOpenTargets, type OpenTargetLike } from "./filter-open-targets";

/** Pick preferred open-with target, else first filtered candidate. */
export function pickPreferredOpenTarget(args: {
  preferredTarget: string | null | undefined;
  targets: readonly OpenTargetLike[];
  availableTargets: readonly string[];
  includeHiddenTargets?: boolean;
  mode?: "editor" | "native" | string;
}): OpenTargetLike | null {
  const {
    preferredTarget,
    targets,
    availableTargets,
    includeHiddenTargets = true,
    mode = "editor",
  } = args;
  const filtered = filterOpenTargets({
    targets,
    availableTargets,
    includeHiddenTargets,
    mode,
  });
  if (filtered.length === 0) return null;
  if (preferredTarget) {
    return (
      filtered.find((target) => target.target === preferredTarget) ??
      filtered[0] ??
      null
    );
  }
  return filtered[0] ?? null;
}

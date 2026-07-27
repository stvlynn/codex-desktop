// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `v5r` / export `TK`.

import {
  isAbsolutePath,
  joinRelativePathSegments,
} from "../utils/workspace-paths";
import { isUncPath, isWinDrivePath } from "../utils/win-path-predicates";

const INTERNAL_TESTING_MARKETPLACE_SEGMENT =
  ".tmp/marketplaces/openai-internal-testing";

function isEligibleDiscoveryRoot(
  pathValue: string,
  codexHome: string | null,
): boolean {
  if (codexHome == null) return isAbsolutePath(pathValue);
  if (isWinDrivePath(codexHome) || isUncPath(codexHome)) {
    return isWinDrivePath(pathValue) || isUncPath(pathValue);
  }
  return pathValue.startsWith("/") && !pathValue.startsWith("//");
}

function dedupeDiscoveryRoots(
  roots: readonly string[],
  codexHome: string | null,
): string[] {
  return Array.from(
    new Set(
      roots
        .map((root) => root.trim())
        .filter(
          (root) => root.length > 0 && isEligibleDiscoveryRoot(root, codexHome),
        ),
    ),
  );
}

/** Build deduped skill discovery roots for a host/workspace. */
export function buildSkillDiscoveryRoots(input: {
  codexHome: string | null;
  hostId: string;
  rootsOverrideCwd?: string | readonly string[] | null;
  workspaceRoots?: readonly string[] | null;
}): string[] {
  const marketplaceRoot =
    input.hostId === "local" && input.codexHome != null
      ? joinRelativePathSegments(
          input.codexHome,
          INTERNAL_TESTING_MARKETPLACE_SEGMENT,
        )
      : null;
  const baseRoots =
    typeof input.rootsOverrideCwd === "string"
      ? [input.rootsOverrideCwd]
      : [...(input.rootsOverrideCwd ?? input.workspaceRoots ?? [])];
  return dedupeDiscoveryRoots(
    [...baseRoots, ...(marketplaceRoot == null ? [] : [marketplaceRoot])],
    input.codexHome,
  );
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RL` companion for open-target picking.

export type OpenTargetLike = {
  target: string;
  appPath?: string | null;
  hidden?: boolean;
};

/** Filter open-with targets for editor/native modes. */
export function filterOpenTargets(args: {
  targets: readonly OpenTargetLike[];
  availableTargets: readonly string[];
  includeHiddenTargets?: boolean;
  mode?: "editor" | "native" | string;
}): OpenTargetLike[] {
  const {
    targets,
    availableTargets,
    includeHiddenTargets = false,
    mode = "editor",
  } = args;
  const withAppPath = targets.filter((target) => target.appPath != null);
  if (withAppPath.length > 0) return withAppPath;
  if (mode === "native") {
    return targets.filter(
      (target) =>
        target.target === "systemDefault" || target.target === "fileManager",
    );
  }
  const available = new Set(availableTargets);
  return targets.filter(
    (target) =>
      available.has(target.target) && (includeHiddenTargets || !target.hidden),
  );
}

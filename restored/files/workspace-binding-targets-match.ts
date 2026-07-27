// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uRi` / `lRi` companions (unexported); extractFn(internal).
// Used by terminal workspace-mismatch banners.

import { pathsReferToSameWorkspaceResource } from "../utils/workspace-path-keys";

export type WorkspaceBindingTarget = {
  hostId?: string | null;
  workspaceRoot?: string | null;
};

/** Bundle `uRi` — true when two workspace targets refer to the same place. */
export function workspaceBindingTargetsMatch(left: WorkspaceBindingTarget | null | undefined, right: WorkspaceBindingTarget): boolean {
  if (left == null) return false;
  if (
    left.hostId != null &&
    right.hostId != null &&
    left.hostId !== right.hostId
  ) {
    return false;
  }
  if (left.workspaceRoot == null || right.workspaceRoot == null) {
    return left.workspaceRoot === right.workspaceRoot;
  }
  return pathsReferToSameWorkspaceResource(
    left.workspaceRoot,
    right.workspaceRoot,
  );
}

/** Bundle `lRi` — show mismatch banner when binding ≠ current and ≠ dismissed. */
export function shouldShowWorkspaceBindingMismatch(args: {
  binding: WorkspaceBindingTarget | null | undefined;
  currentTarget: WorkspaceBindingTarget;
  dismissedTarget: WorkspaceBindingTarget | null | undefined;
}): boolean {
  if (args.binding == null) return false;
  return (
    !workspaceBindingTargetsMatch(args.binding, args.currentTarget) &&
    !workspaceBindingTargetsMatch(args.dismissedTarget, args.currentTarget)
  );
}

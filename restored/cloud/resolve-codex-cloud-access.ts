// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Codex Cloud access resolution (`p2r` / `g2r` cluster).

import { isWorkspacePlan, type WorkspacePlan } from "./is-workspace-plan";

export type CodexCloudAccess =
  | "disabled"
  | "enabled"
  | "enabled_needs_setup"
  | "error"
  | "loading";

export type AuthMethod = "chatgpt" | (string & {});

export type ResolveCodexCloudAccessProps = {
  authMethod: AuthMethod;
  cachedAccess: CodexCloudAccess | null | undefined;
  resolvedAccess: CodexCloudAccess | null | undefined;
};

/**
 * Lightweight access resolver used while account / workspace settings load.
 */
export function resolveCodexCloudAccess({
  authMethod,
  cachedAccess,
  resolvedAccess,
}: ResolveCodexCloudAccessProps): { access: CodexCloudAccess } {
  if (authMethod !== "chatgpt") {
    return { access: "disabled" };
  }

  const access = resolvedAccess ?? "loading";
  if ((access === "loading" || access === "error") && cachedAccess != null) {
    return { access: cachedAccess };
  }

  return { access };
}

export type ResolveCodexCloudAccessStatusProps = {
  plan: WorkspacePlan | null | undefined;
  authMethod: AuthMethod;
  isLoading: boolean;
  hasErrors: boolean;
  needsOnboarding: boolean;
  hasWorkspaceEnabledCodex: boolean;
  hasLoggedDisabledRef?: { current: boolean };
  logInfo?: (message: string) => void;
};

/**
 * Derives the persisted Codex Cloud access state from plan + workspace settings.
 */
export function resolveCodexCloudAccessStatus({
  plan,
  authMethod,
  isLoading,
  hasErrors,
  needsOnboarding,
  hasWorkspaceEnabledCodex,
  hasLoggedDisabledRef,
  logInfo,
}: ResolveCodexCloudAccessStatusProps): CodexCloudAccess {
  const logOnce = (message: string) => {
    if (hasLoggedDisabledRef && !hasLoggedDisabledRef.current) {
      logInfo?.(message);
      hasLoggedDisabledRef.current = true;
    }
  };

  if (authMethod !== "chatgpt") {
    logOnce(
      "Codex Cloud access disabled because user is not logged in via ChatGPT.",
    );
    return "disabled";
  }

  if (isLoading) {
    return "loading";
  }
  if (hasErrors) {
    return "error";
  }
  if (isWorkspacePlan(plan) && !hasWorkspaceEnabledCodex) {
    logOnce(
      "Codex Cloud access disabled because workspace has not enabled Codex.",
    );
    return "disabled";
  }
  if (needsOnboarding) {
    return "enabled_needs_setup";
  }
  return "enabled";
}

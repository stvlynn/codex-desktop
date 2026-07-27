// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map sandbox policy objects to permission-mode id strings (`kpe`, co-located with `Dpe`).

import type { SandboxPolicyLike } from "./resolve-agent-mode-from-policy";

export type SandboxModeId =
  | "danger-full-access"
  | "read-only"
  | "workspace-write";

/**
 * Bundle `kpe` (co-located with `Dpe` / `resolveAgentModeFromPolicy`).
 * `externalSandbox` maps to `null`.
 */
export function sandboxPolicyToModeId(
  policy: SandboxPolicyLike,
): SandboxModeId | null {
  switch (policy.type) {
    case "dangerFullAccess":
      return "danger-full-access";
    case "readOnly":
      return "read-only";
    case "workspaceWrite":
      return "workspace-write";
    case "externalSandbox":
      return null;
    default:
      return null;
  }
}

export type AgentPermissionSnapshot = {
  activePermissionProfile: { id: string } | null;
  sandboxPolicy: SandboxPolicyLike;
};

/**
 * Bundle `Ape` (co-located) — wire format preferring profile id over sandbox mode.
 */
export function agentConfigToPermissionWire(
  config: AgentPermissionSnapshot,
): { permissions: string } | { sandbox: SandboxModeId | null } {
  return config.activePermissionProfile == null
    ? { sandbox: sandboxPolicyToModeId(config.sandboxPolicy) }
    : { permissions: config.activePermissionProfile.id };
}

/**
 * Bundle `jpe` (co-located) — local config shape preferring profile id.
 */
export function agentConfigToLocalPermissionRef(
  config: AgentPermissionSnapshot,
): { permissions: string } | { sandboxPolicy: SandboxPolicyLike } {
  return config.activePermissionProfile == null
    ? { sandboxPolicy: config.sandboxPolicy }
    : { permissions: config.activePermissionProfile.id };
}

export type WorkspaceRootsConfig = {
  runtimeWorkspaceRoots?: readonly string[] | null;
  sandboxPolicy: SandboxPolicyLike;
};

/**
 * Bundle `Mpe` (co-located) — runtime roots, else workspaceWrite.writableRoots.
 */
export function resolveWorkspaceRoots(
  config: WorkspaceRootsConfig,
): readonly string[] {
  if (config.runtimeWorkspaceRoots != null) {
    return config.runtimeWorkspaceRoots;
  }
  return config.sandboxPolicy.type === "workspaceWrite"
    ? (config.sandboxPolicy.writableRoots ?? [])
    : [];
}

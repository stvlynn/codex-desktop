// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Collapse approval + sandbox policy into an agent mode id (`Dpe` cluster).

export type SandboxPolicyLike =
  | {
      type: "readOnly";
      networkAccess?: boolean;
    }
  | {
      type: "workspaceWrite";
      writableRoots?: readonly string[];
      excludeSlashTmp?: boolean;
      excludeTmpdirEnvVar?: boolean;
      networkAccess?: boolean;
    }
  | {
      type: "externalSandbox";
    }
  | {
      type: "dangerFullAccess";
    }
  | {
      type: string;
      [key: string]: unknown;
    };

/** Granular approval-policy object compared via deep equality (`tme` / `qpe`). */
export const GRANULAR_APPROVAL_POLICY = {
  granular: {
    sandbox_approval: false,
    rules: false,
    skill_approval: false,
    request_permissions: true,
    mcp_elicitations: true,
  },
} as const;

export type ResolveAgentModeFromPolicyProps = {
  approvalPolicy: unknown;
  approvalsReviewer: string | null | undefined;
  sandboxPolicy: SandboxPolicyLike | null | undefined;
};

export type ResolvedAgentMode =
  | "read-only"
  | "granular"
  | "guardian-approvals"
  | "auto"
  | "full-access"
  | "custom"
  | null;

/** Bundle `Epe` (co-located). */
export function isGuardianApprovalsReviewer(reviewer: string | null | undefined): boolean {
  return reviewer === "auto_review" || reviewer === "guardian_subagent";
}

/** Bundle `Npe` (co-located). */
export function isStrictReadOnlySandbox(policy: SandboxPolicyLike): boolean {
  return policy.type === "readOnly" && policy.networkAccess === false;
}

/** Bundle `Ppe` (co-located). */
export function isDefaultWorkspaceWriteSandbox(policy: SandboxPolicyLike): boolean {
  return (
    policy.type === "workspaceWrite" &&
    policy.excludeSlashTmp === false &&
    policy.excludeTmpdirEnvVar === false &&
    policy.networkAccess === false
  );
}

/** Bundle `qpe` (co-located) — deep-equal to `tme`. */
export function isGranularApprovalPolicy(policy: unknown): boolean {
  if (policy == null || typeof policy !== "object") return false;
  const granular = (policy as { granular?: unknown }).granular;
  if (granular == null || typeof granular !== "object") return false;
  const g = granular as Record<string, unknown>;
  const expected = GRANULAR_APPROVAL_POLICY.granular;
  return (
    g.sandbox_approval === expected.sandbox_approval &&
    g.rules === expected.rules &&
    g.skill_approval === expected.skill_approval &&
    g.request_permissions === expected.request_permissions &&
    g.mcp_elicitations === expected.mcp_elicitations
  );
}

/**
 * Bundle `Dpe` (co-located with `Tpe` / `Zgt` init; not a chunk export).
 * Inverse of `resolveDefaultAgentMode` — map policy fields back to a mode chip.
 */
export function resolveAgentModeFromPolicy({
  approvalPolicy,
  approvalsReviewer,
  sandboxPolicy,
}: ResolveAgentModeFromPolicyProps): ResolvedAgentMode {
  if (approvalPolicy == null || sandboxPolicy == null) return null;

  if (
    sandboxPolicy.type === "readOnly" &&
    approvalPolicy === "on-request" &&
    isStrictReadOnlySandbox(sandboxPolicy)
  ) {
    return "read-only";
  }

  if (
    sandboxPolicy.type === "workspaceWrite" &&
    isGranularApprovalPolicy(approvalPolicy) &&
    approvalsReviewer === "user" &&
    isDefaultWorkspaceWriteSandbox(sandboxPolicy)
  ) {
    return "granular";
  }

  if (
    sandboxPolicy.type === "workspaceWrite" &&
    approvalPolicy === "on-request" &&
    isDefaultWorkspaceWriteSandbox(sandboxPolicy)
  ) {
    return isGuardianApprovalsReviewer(approvalsReviewer)
      ? "guardian-approvals"
      : "auto";
  }

  if (sandboxPolicy.type === "dangerFullAccess" && approvalPolicy === "never") {
    return "full-access";
  }

  return "custom";
}

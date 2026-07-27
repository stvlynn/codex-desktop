// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Default non-full-access agent mode for projectless threads (`h4r`).

export type AgentMode =
  | "read-only"
  | "auto"
  | "granular"
  | "guardian-approvals"
  | "full-access"
  | "custom";

export type PermissionRequirements = {
  allowedPermissionProfiles?: Record<string, boolean> | null;
  allowedSandboxModes?: readonly string[] | null;
  allowedApprovalPolicies?: readonly string[] | null;
  allowedApprovalsReviewers?: readonly string[] | null;
} | null;

export type ResolveDefaultAgentModeProps = {
  isProjectless: boolean;
  requirements: PermissionRequirements;
};

function isGranularModeAllowed(
  mode: AgentMode,
  requirements: PermissionRequirements,
): boolean {
  if (requirements == null) {
    return true;
  }

  const profileId = ":workspace";
  const sandboxMode = "workspace-write";
  const approvalPolicy = "on-request";
  const approvalsReviewer = "user";

  if (
    requirements.allowedPermissionProfiles != null &&
    requirements.allowedPermissionProfiles[profileId] !== true
  ) {
    return false;
  }

  const allowedSandboxModes = requirements.allowedSandboxModes;
  if (
    allowedSandboxModes != null &&
    !allowedSandboxModes.includes(sandboxMode)
  ) {
    return false;
  }

  const allowedApprovalPolicies = requirements.allowedApprovalPolicies;
  if (
    allowedApprovalPolicies != null &&
    !allowedApprovalPolicies.includes(approvalPolicy)
  ) {
    return false;
  }

  const allowedApprovalsReviewers = requirements.allowedApprovalsReviewers;
  if (
    allowedApprovalsReviewers != null &&
    !allowedApprovalsReviewers.includes(approvalsReviewer)
  ) {
    return false;
  }

  return mode === "granular";
}

/** Projectless threads default to granular when allowed, otherwise auto. */
export function resolveDefaultAgentMode({
  isProjectless,
  requirements,
}: ResolveDefaultAgentModeProps): Extract<AgentMode, "auto" | "granular"> {
  return isProjectless && isGranularModeAllowed("granular", requirements)
    ? "granular"
    : "auto";
}

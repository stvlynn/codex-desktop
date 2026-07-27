// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Agent-mode id lists + default permission snapshots (`Zpe` / `Qpe` / `nme`).

import { GRANULAR_APPROVAL_POLICY } from "./resolve-agent-mode-from-policy";
import type { AgentMode } from "./resolve-default-agent-mode";

/** Legacy reviewer id string (`Ype`). */
export const GUARDIAN_APPROVAL_REVIEWER_ID = "guardian_approval";

/** Default read-only mode id (`Xpe`). */
export const DEFAULT_AGENT_MODE_ID: AgentMode = "read-only";

/** All selectable agent modes including custom (`Zpe`). */
export const AGENT_MODE_IDS = [
  "read-only",
  "auto",
  "granular",
  "guardian-approvals",
  "full-access",
  "custom",
] as const satisfies readonly AgentMode[];

/** Preset modes without the custom chip (`Qpe`). */
export const AGENT_MODE_PRESET_IDS = [
  "read-only",
  "auto",
  "granular",
  "guardian-approvals",
  "full-access",
] as const satisfies readonly Exclude<AgentMode, "custom">[];

/** Mode picker display order (`$pe`). */
export const AGENT_MODE_PICKER_ORDER = [
  "custom",
  "auto",
  "granular",
  "guardian-approvals",
  "read-only",
] as const satisfies readonly AgentMode[];

/** Strict read-only sandbox snapshot (`eme`). */
export const READ_ONLY_SANDBOX_POLICY = {
  type: "readOnly",
  networkAccess: false,
} as const;

export type AgentModePermissionSnapshot = {
  permissionProfileId: string;
  sandboxMode: string;
  approvalPolicy: string | typeof GRANULAR_APPROVAL_POLICY;
  approvalsReviewer: string;
};

/**
 * Bundle `nme` (co-located with `rme` / packet-004).
 * Default permission fields for each non-custom agent mode.
 */
export const AGENT_MODE_PERMISSION_SNAPSHOTS: Record<
  Exclude<AgentMode, "custom">,
  AgentModePermissionSnapshot
> = {
  "read-only": {
    permissionProfileId: ":read-only",
    sandboxMode: "read-only",
    approvalPolicy: "on-request",
    approvalsReviewer: "user",
  },
  auto: {
    permissionProfileId: ":workspace",
    sandboxMode: "workspace-write",
    approvalPolicy: "on-request",
    approvalsReviewer: "user",
  },
  granular: {
    permissionProfileId: ":workspace",
    sandboxMode: "workspace-write",
    approvalPolicy: GRANULAR_APPROVAL_POLICY,
    approvalsReviewer: "user",
  },
  "guardian-approvals": {
    permissionProfileId: ":workspace",
    sandboxMode: "workspace-write",
    approvalPolicy: "on-request",
    approvalsReviewer: "guardian_subagent",
  },
  "full-access": {
    permissionProfileId: ":danger-full-access",
    sandboxMode: "danger-full-access",
    approvalPolicy: "never",
    approvalsReviewer: "user",
  },
};

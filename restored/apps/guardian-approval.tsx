// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rme`) / export `Jgt`.

export type BindGuardianApprovalPeers = {
  $pe: (...args: unknown[]) => unknown;
  Jpe: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  Qpe: (...args: unknown[]) => unknown;
  Xpe: (...args: unknown[]) => unknown;
  Ype: (...args: unknown[]) => unknown;
  Zpe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eme: (...args: unknown[]) => unknown;
  nme: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  tme: (...args: unknown[]) => unknown;
};

let peers: BindGuardianApprovalPeers | null = null;

/** Wire bindGuardianApproval peers once companions land. */
export function setBindGuardianApprovalPeers(next: BindGuardianApprovalPeers): void {
  peers = next;
}

/**
 * Bundle export `Jgt` / internal `rme`.
 */
export function bindGuardianApproval() {
  if (peers == null) {
    throw new Error("bindGuardianApproval peers are not configured");
  }

  return peers.e(() => {
    Jpe = peers.r(peers.Mo()), Ype = `guardian_approval`, Xpe = `read-only`, Zpe = [`read-only`, `auto`, `granular`, `guardian-approvals`, `full-access`, `custom`], Qpe = [`read-only`, `auto`, `granular`, `guardian-approvals`, `full-access`], $pe = [`custom`, `auto`, `granular`, `guardian-approvals`, `read-only`], eme = {
      type: `readOnly`,
      networkAccess: !1
    }, tme = {
      granular: {
        sandbox_approval: !1,
        rules: !1,
        skill_approval: !1,
        request_permissions: !0,
        mcp_elicitations: !0
      }
    }, nme = {
      "read-only": {
        permissionProfileId: `:read-only`,
        sandboxMode: `read-only`,
        approvalPolicy: `on-request`,
        approvalsReviewer: `user`
      },
      auto: {
        permissionProfileId: `:workspace`,
        sandboxMode: `workspace-write`,
        approvalPolicy: `on-request`,
        approvalsReviewer: `user`
      },
      granular: {
        permissionProfileId: `:workspace`,
        sandboxMode: `workspace-write`,
        approvalPolicy: peers.tme,
        approvalsReviewer: `user`
      },
      "guardian-approvals": {
        permissionProfileId: `:workspace`,
        sandboxMode: `workspace-write`,
        approvalPolicy: `on-request`,
        approvalsReviewer: `guardian_subagent`
      },
      "full-access": {
        permissionProfileId: `:danger-full-access`,
        sandboxMode: `danger-full-access`,
        approvalPolicy: `never`,
        approvalsReviewer: `user`
      }
    };
  });
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dIc`) / export `af`.

export type WorkspaceAccessPolicyIconPeers = {
  AIo: (...args: unknown[]) => unknown;
  Jrr: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  fIc: (...args: unknown[]) => unknown;
  jIo: (...args: unknown[]) => unknown;
  lIc: (...args: unknown[]) => unknown;
  oIc: (...args: unknown[]) => unknown;
  pIc: (...args: unknown[]) => unknown;
  pb: (...args: unknown[]) => unknown;
};
let peers: WorkspaceAccessPolicyIconPeers | null = null;

/** Wire WorkspaceAccessPolicyIcon peers once companions land. */
export function setWorkspaceAccessPolicyIconPeers(
  next: WorkspaceAccessPolicyIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `af` / internal `dIc`.
 */
export function WorkspaceAccessPolicyIcon(props: unknown) {
  const Jrr = peers.Jrr;
  const LIc = peers.lIc;
  const OIc = peers.oIc;
  const Pb = peers.pb;
  if (peers == null) {
    throw new Error("WorkspaceAccessPolicyIcon peers are not configured");
  }
  let { accessPolicy, ...rest } = props;
  let i;
  i = Symbol.for("react.early_return_sentinel");
  bb0: {
    let e = peers.AIo(accessPolicy);
    switch (e.accessMode) {
      case "admins_only":
      case "custom":
        i = peers.jIo(e) ? <Jrr {...rest} /> : <LIc {...rest} />;
        break bb0;
      case "workspace_all": {
        let e;
        e = <OIc {...rest} />;
        i = e;
        break bb0;
      }
      case "public": {
        let e;
        e = <Pb {...rest} />;
        i = e;
        break bb0;
      }
    }
  }
  if (i !== Symbol.for("react.early_return_sentinel")) return i;
}

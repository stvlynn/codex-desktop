// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `j_`) / export `Qot`.

export type BindBindInstallPeers = {
  AEt: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BEt: (...args: unknown[]) => unknown;
  FEt: (...args: unknown[]) => unknown;
  IEt: (...args: unknown[]) => unknown;
  LEt: (...args: unknown[]) => unknown;
  MEt: (...args: unknown[]) => unknown;
  NEt: (...args: unknown[]) => unknown;
  OEt: (...args: unknown[]) => unknown;
  PEt: (...args: unknown[]) => unknown;
  REt: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  VEt: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _l: (...args: unknown[]) => unknown;
  al: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fl: (...args: unknown[]) => unknown;
  jEt: (...args: unknown[]) => unknown;
  kEt: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  ul: (...args: unknown[]) => unknown;
  vl: (...args: unknown[]) => unknown;
  yEt: (...args: unknown[]) => unknown;
  zEt: (...args: unknown[]) => unknown;
};

let peers: BindBindInstallPeers | null = null;

/** Wire bindBindInstall peers once companions land. */
export function setBindBindInstallPeers(next: BindBindInstallPeers): void {
  peers = next;
}

/**
 * Bundle export `Qot` / internal `j_`.
 */
export function bindBindInstall() {
  if (peers == null) {
    throw new Error("bindBindInstall peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.Sl(),
      peers.yEt(),
      (OEt = peers.pl([`session`, `always`])),
      (kEt = peers
        .ul([peers.OEt, peers.ol(peers.OEt).min(1).max(2)])
        .optional()),
      (AEt = peers.ml(`always`).optional()),
      (jEt = peers
        .sl({
          is_auth_failure: peers.ml(!0),
          connector_id: peers.X(),
          connector_name: peers.X(),
          install_url: peers.X(),
          auth_reason: peers.X().optional(),
          link_id: peers.X().optional(),
          requested_scopes: peers.ol(peers.X().trim().min(1)).optional(),
        })
        .passthrough()),
      (MEt = peers
        .sl({
          _codex_apps: peers.sl({
            connector_auth_failure: peers.jEt,
          }),
        })
        .passthrough()),
      (NEt = peers
        .sl({
          name: peers.X().trim().min(1),
          value: peers._l(),
          display_name: peers.X().trim().min(1).optional(),
        })
        .transform(({ name: e, value: t, display_name: n }) => ({
          name: peers.e,
          value: t,
          displayName: n ?? peers.e,
        }))),
      (PEt = {
        codex_approval_kind: peers.ml(`tool_suggestion`),
        suggest_type: peers.pl([`install`, `enable`]),
        suggest_reason: peers.X(),
        tool_id: peers.X(),
        tool_name: peers.X(),
        persist: peers.AEt,
      }),
      (FEt = peers
        .sl({
          ...peers.PEt,
          tool_type: peers.ml(`connector`),
          install_url: peers.X(),
        })
        .passthrough()),
      (IEt = peers
        .sl({
          ...peers.PEt,
          tool_type: peers.ml(`plugin`),
          install_url: peers.X().optional(),
          remote_plugin_id: peers.X().trim().min(1).optional(),
        })
        .passthrough()),
      (LEt = peers.dl(`tool_type`, [peers.FEt, peers.IEt])),
      (REt = peers
        .sl({
          codex_approval_kind: peers.ml(`mcp_tool_call`),
          codex_request_type: peers.ml(`approval_request`).optional(),
          connector_id: peers.X(),
          connector_name: peers.X().optional(),
          tool_name: peers.X().optional(),
          tool_title: peers.X().optional(),
          tool_params: peers.fl(peers.X(), peers._l()),
          tool_params_display: peers.al().optional(),
          persist: peers.kEt,
        })
        .passthrough()),
      (zEt = peers.dl(`codex_approval_kind`, [peers.LEt, peers.REt])),
      (BEt = peers.pl([`low`, `high`])),
      (VEt = peers.sl({
        riskLevel: peers.vl((e) => peers.e ?? void 0, peers.BEt.optional()),
        subtitle: peers.vl((e) => peers.e ?? void 0, peers.X().optional()),
      })));
  });
}

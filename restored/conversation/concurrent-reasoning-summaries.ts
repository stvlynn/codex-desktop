// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iS`) / export `j7`.

export type BindConcurrentReasoningSummariesPeers = {
  Au: (...args: unknown[]) => unknown;
  Bbe: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Znn: (...args: unknown[]) => unknown;
  cun: (...args: unknown[]) => unknown;
  dun: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fun: (...args: unknown[]) => unknown;
  hun: (...args: unknown[]) => unknown;
  lun: (...args: unknown[]) => unknown;
  mun: (...args: unknown[]) => unknown;
  oun: (...args: unknown[]) => unknown;
  pun: (...args: unknown[]) => unknown;
  sun: (...args: unknown[]) => unknown;
  uun: (...args: unknown[]) => unknown;
};

let peers: BindConcurrentReasoningSummariesPeers | null = null;

/** Wire bindConcurrentReasoningSummaries peers once companions land. */
export function setBindConcurrentReasoningSummariesPeers(next: BindConcurrentReasoningSummariesPeers): void {
  peers = next;
}

/**
 * Bundle export `j7` / internal `iS`.
 */
export function bindConcurrentReasoningSummaries() {
  if (peers == null) {
    throw new Error("bindConcurrentReasoningSummaries peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.Znn(), peers.Gf(), peers.Fh(), oun = `feature_overrides`, sun = `concurrent_reasoning_summaries`, cun = `default_mode_request_user_input`, lun = `open_in_codex`, uun = `thread_tools`, dun = `settings_tools`, fun = `writing_blocks`, pun = [{
      gateName: `30039772`,
      featureKey: `enable_request_compression`
    }, {
      gateName: `1786883712`,
      featureKey: `unified_exec`
    }, {
      gateName: `1615536597`,
      featureKey: `shell_snapshot`
    }, {
      gateName: `770526561`,
      featureKey: `remote_models`
    }, {
      gateName: `2734851136`,
      featureKey: `responses_websockets_v2`
    }, {
      gateName: `321109023`,
      featureKey: `remote_compaction_v2`
    }, {
      gateName: `3701003275`,
      featureKey: `standalone_web_search`
    }, {
      gateName: `1156958996`,
      featureKey: `collaboration_modes`
    }, {
      gateName: `2929104770`,
      featureKey: peers.cun
    }, {
      gateName: `1444479692`,
      featureKey: `personality`
    }, {
      gateName: `3390468622`,
      featureKey: `request_rule`
    }, {
      gateName: `1935276618`,
      featureKey: `image_generation`
    }, {
      gateName: `3762443246`,
      featureKey: `item_ids`
    }, {
      gateName: `3841562911`,
      featureKey: `resize_all_images`
    }, {
      gateName: `138621433`,
      featureKey: `image_detail_original`
    }, {
      gateName: `2307253562`,
      featureKey: `codex_git_commit`
    }, {
      gateName: `3026692602`,
      featureKey: peers.Bbe
    }, {
      gateName: `3902016271`,
      featureKey: `guardian_approval`
    }, {
      gateName: `1663911278`,
      featureKey: `apps_mcp_path_override`
    }, {
      gateName: `358284800`,
      featureKey: `apply_patch_streaming_events`
    }, {
      gateName: `2701734443`,
      featureKey: `tool_search_always_defer_mcp_tools`
    }, {
      gateName: `3855910053`,
      featureKey: `workspace_owner_usage_nudge`
    }, {
      gateName: `2395575782`,
      featureKey: peers.uun
    }, {
      gateName: `1859936703`,
      featureKey: peers.dun
    }, {
      gateName: `649513069`,
      featureKey: peers.lun
    }, {
      gateName: `2707717541`,
      featureKey: peers.fun
    }, {
      gateName: `2508143457`,
      featureKey: peers.sun
    }], mun = [{
      name: `3902942138`,
      param: peers.oun,
      featureAllowlist: new Set([`shell_snapshot`, `unified_exec`, `responses_websockets_v2`, peers.cun, `tool_search_always_defer_mcp_tools`])
    }], hun = [{
      featureKeys: [`enable_mcp_apps`],
      layerName: `2138468235`,
      param: `enable_mcp_apps`
    }, {
      featureKeys: [`apps`, `plugins`],
      layerName: `223073164`,
      param: `enable_plugins`
    }, {
      featureKeys: [`tool_suggest`],
      layerName: `223073164`,
      param: `enable_tool_suggest`
    }, {
      featureKeys: [`auth_elicitation`],
      layerName: `223073164`,
      param: `enable_auth_elicitation`
    }, {
      featureKeys: [`tool_call_mcp_elicitation`],
      layerName: `223073164`,
      param: `enable_tool_call_mcp_elicitation`
    }];
  });
}

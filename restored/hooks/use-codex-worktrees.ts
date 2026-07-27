// Restored from ref/webview/assets/use-codex-worktrees-FWkscfGb.js
// React Query hook listing Codex-managed git worktrees for a host.
// Stage 3: G3/H3/K3/U3→host-rpc-client; X_/Z_→query-key; Tpt→gitSettingsDefinitions.

import { useQuery } from "./use-query";
import { QueryStaleTimes } from "../config/query-stale-times";
import { useSettingValue } from "../settings/use-setting-value";
import { gitSettingsDefinitions } from "../settings/git-settings-definitions";
import {
  ensureHostConfigIdInit,
  ensureHostRpcClientsInit,
  getHostConfigId,
  getHostRpcClient,
  type HostConfigLike,
} from "./host-rpc-client";
import {
  codexWorktreesQueryKey,
  ensureCodexWorktreesQueryKeyInit,
} from "./codex-worktrees-query-key";
ensureHostRpcClientsInit();
ensureHostConfigIdInit();
ensureCodexWorktreesQueryKeyInit();

/**
 * Bundle export `n` — query Codex worktrees for the given host config.
 */
export function useCodexWorktrees(
  host: HostConfigLike,
  operationSource: unknown,
): ReturnType<typeof useQuery> {
  const hostId = getHostConfigId(host);
  const configuredRoot = useSettingValue(
    gitSettingsDefinitions.worktreeRoot,
  ) as string;
  const worktreesRoot = host.kind === "local" ? configuredRoot : null;
  const queryKey = codexWorktreesQueryKey(hostId, worktreesRoot);
  return useQuery({
    queryKey,
    queryFn: ({ signal }: { signal?: AbortSignal }) => {
      return getHostRpcClient("git").request({
        method: "codex-worktrees",
        params: {
          hostConfig: host,
          operationSource,
          worktreesRoot,
        },
        signal,
      });
    },
    staleTime: QueryStaleTimes.INFINITE,
    gcTime: 1_800_000,
  });
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseCodexWorktreesInit(): void {}

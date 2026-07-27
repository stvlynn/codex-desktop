// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `aSo`) / export `dA`.

export type ResolveLocalEnvironmentForWorkspaceArgs = {
  hostConfig: { id: string };
  hostId: string;
  operationSource: unknown;
  selectionsByWorkspace: unknown;
  workspaceRoot: string;
};

export type ResolveLocalEnvironmentForWorkspacePeers = {
  resolvePinnedConfig: (args: {
    hostConfig: { id: string };
    operationSource: unknown;
    workspaceRoot: string;
  }) => Promise<
    | { status: "error" }
    | { status: "found"; configPath: string }
    | { status: "absent" }
  >;
  invoke: (
    method: string,
    args: { params: Record<string, unknown> },
  ) => Promise<Record<string, unknown>>;
  resolveSelection: (args: {
    canValidateSelection: boolean;
    environments: Array<{
      configPath: string;
      type: string;
    }>;
    hostId: string;
    selectionsByWorkspace: unknown;
    workspaceRoot: string;
  }) => { resolvedConfigPath: string | null };
  pathsEqual: (a: string, b: string) => boolean;
};

let peers: ResolveLocalEnvironmentForWorkspacePeers | null = null;

/** Wire local-environment resolution peers once companions land. */
export function setResolveLocalEnvironmentForWorkspacePeers(
  next: ResolveLocalEnvironmentForWorkspacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `dA` / internal `aSo`.
 * Resolve the local environment config path for a workspace root.
 */
export async function resolveLocalEnvironmentForWorkspace(
  args: ResolveLocalEnvironmentForWorkspaceArgs,
): Promise<string | null> {
  if (peers == null) {
    throw new Error(
      "ResolveLocalEnvironmentForWorkspace peers are not configured",
    );
  }
  const {
    hostConfig,
    hostId,
    operationSource,
    selectionsByWorkspace,
    workspaceRoot,
  } = args;
  const pinned =
    hostConfig.id === hostId
      ? await peers.resolvePinnedConfig({
          hostConfig,
          operationSource,
          workspaceRoot,
        })
      : { status: "absent" as const };
  if (pinned.status === "error") return null;
  if (pinned.status === "found") {
    if (pinned.configPath === "__none__") return null;
    try {
      const { environment } = (await peers.invoke("local-environment", {
        params: { configPath: pinned.configPath, hostId },
      })) as { environment: { type: string; configPath?: string } };
      return environment.type === "success"
        ? (environment.configPath ?? pinned.configPath)
        : null;
    } catch {
      return null;
    }
  }
  const { canValidateSelection, environments } = await peers
    .invoke("local-environments", {
      params: { hostId, workspaceRoot },
    })
    .then(
      (result) => ({
        canValidateSelection: true,
        environments: (result.environments ?? []) as Array<{
          configPath: string;
          type: string;
        }>,
      }),
      () => ({
        canValidateSelection: false,
        environments: [] as Array<{ configPath: string; type: string }>,
      }),
    );
  const resolvedConfigPath = peers.resolveSelection({
    canValidateSelection,
    environments,
    hostId,
    selectionsByWorkspace,
    workspaceRoot,
  }).resolvedConfigPath;
  if (resolvedConfigPath == null || resolvedConfigPath === "__none__") {
    return null;
  }
  const matched = environments.find((env) =>
    peers!.pathsEqual(env.configPath, resolvedConfigPath),
  );
  if (matched != null) {
    return matched.type === "success" ? matched.configPath : null;
  }
  try {
    const { environment } = (await peers.invoke("local-environment", {
      params: { configPath: resolvedConfigPath, hostId },
    })) as { environment: { type: string; configPath?: string } };
    return environment.type === "success"
      ? (environment.configPath ?? resolvedConfigPath)
      : null;
  } catch {
    return null;
  }
}

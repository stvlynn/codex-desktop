// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aSo`) / export `dA`.

export type ResolveLocalEnvironmentForWorkspacePeers = {
  Sf: (...args: unknown[]) => unknown;
  eSo: (...args: unknown[]) => unknown;
  oSo: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
};
let peers: ResolveLocalEnvironmentForWorkspacePeers | null = null;

/** Wire resolveLocalEnvironmentForWorkspace peers once companions land. */
export function setResolveLocalEnvironmentForWorkspacePeers(
  next: ResolveLocalEnvironmentForWorkspacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `dA` / internal `aSo`.
 */
export async function resolveLocalEnvironmentForWorkspace({
  hostConfig,
  hostId,
  operationSource,
  selectionsByWorkspace,
  workspaceRoot,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "resolveLocalEnvironmentForWorkspace peers are not configured",
    );
  }
  let a =
    hostConfig.id === hostId
      ? await peers.oSo({
          hostConfig,
          operationSource,
          workspaceRoot,
        })
      : {
          status: "absent",
        };
  if (a.status === "error") return null;
  if (a.status === "found") {
    if (a.configPath === "__none__") return null;
    try {
      let { environment } = await peers.rp("local-environment", {
        params: {
          configPath: a.configPath,
          hostId,
        },
      });
      return environment.type === "success" ? environment.configPath : null;
    } catch {
      return null;
    }
  }
  let { canValidateSelection, environments } = await peers
      .rp("local-environments", {
        params: {
          hostId,
          workspaceRoot,
        },
      })
      .then(
        ({ environments: _environments }) => {
          return {
            canValidateSelection: true,
            environments: _environments,
          };
        },
        () => {
          return {
            canValidateSelection: false,
            environments: [],
          };
        },
      ),
    c = peers.eSo({
      canValidateSelection,
      environments,
      hostId,
      selectionsByWorkspace,
      workspaceRoot,
    }).resolvedConfigPath;
  if (c == null || c === "__none__") return null;
  let l = environments.find((item) => {
    return peers.Sf(item.configPath, c);
  });
  if (l != null) return l.type === "success" ? l.configPath : null;
  try {
    let { environment } = await peers.rp("local-environment", {
      params: {
        configPath: c,
        hostId,
      },
    });
    return environment.type === "success" ? environment.configPath : null;
  } catch {
    return null;
  }
}

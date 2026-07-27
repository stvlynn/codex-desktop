// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fA`) / export `P$`.

export type ResolveProjectlessThreadWorkspacePeers = {
  dA: (...args: unknown[]) => unknown;
  ou: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
};
let peers: ResolveProjectlessThreadWorkspacePeers | null = null;

/** Wire resolveProjectlessThreadWorkspace peers once companions land. */
export function setResolveProjectlessThreadWorkspacePeers(
  next: ResolveProjectlessThreadWorkspacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `P$` / internal `fA`.
 */
export async function resolveProjectlessThreadWorkspace(
  e: unknown,
  { directoryName, prompt }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error(
      "resolveProjectlessThreadWorkspace peers are not configured",
    );
  }
  if (!peers.dA(e))
    return {
      cwd: peers.ou(e),
      projectlessOutputDirectory: null,
      workspaceRoots: e,
    };
  let { cwd, outputDirectory, workspaceRoot } = await peers.rp(
    "projectless-thread-cwd",
    {
      params: {
        directoryName,
        prompt: prompt ?? null,
      },
    },
  );
  return {
    cwd,
    projectlessOutputDirectory: outputDirectory,
    workspaceRoots: [workspaceRoot],
  };
}

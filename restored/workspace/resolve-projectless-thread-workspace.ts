// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `fA`) / export `P$`.

export type ResolveProjectlessThreadWorkspacePeers = {
  needsProjectless: (roots: unknown) => boolean;
  fallbackCwd: (roots: unknown) => unknown;
  ipc: (
    method: string,
    payload: { params: { directoryName?: unknown; prompt: unknown } },
  ) => Promise<{
    cwd: unknown;
    outputDirectory: unknown;
    workspaceRoot: unknown;
  }>;
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
 * Resolve cwd/output directory for a projectless thread, or pass roots through.
 */
export async function resolveProjectlessThreadWorkspace(
  workspaceRoots: unknown,
  opts: { directoryName?: unknown; prompt?: unknown } = {},
): Promise<{
  cwd: unknown;
  projectlessOutputDirectory: unknown;
  workspaceRoots: unknown;
}> {
  if (peers == null) {
    throw new Error(
      "ResolveProjectlessThreadWorkspace peers are not configured",
    );
  }
  if (!peers.needsProjectless(workspaceRoots)) {
    return {
      cwd: peers.fallbackCwd(workspaceRoots),
      projectlessOutputDirectory: null,
      workspaceRoots,
    };
  }
  const { cwd, outputDirectory, workspaceRoot } = await peers.ipc(
    "projectless-thread-cwd",
    {
      params: {
        directoryName: opts.directoryName,
        prompt: opts.prompt ?? null,
      },
    },
  );
  return {
    cwd,
    projectlessOutputDirectory: outputDirectory,
    workspaceRoots: [workspaceRoot],
  };
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `S2r`) / export `Hq`.

export type BuildAgentTurnStartPayloadPeers = {
  O_t: (...args: unknown[]) => unknown;
  Yg: (...args: unknown[]) => unknown;
  wl: (...args: unknown[]) => unknown;
};
let peers: BuildAgentTurnStartPayloadPeers | null = null;

/** Wire buildAgentTurnStartPayload peers once companions land. */
export function setBuildAgentTurnStartPayloadPeers(
  next: BuildAgentTurnStartPayloadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hq` / internal `S2r`.
 */
export function buildAgentTurnStartPayload({
  agentMode,
  permissionProfileId,
  shouldSendPermissionOverrides,
  workspaceRoots,
  config,
  configOverrides,
  input,
  commentAttachments,
  collaborationMode,
  serviceTier,
  serviceName,
  cwd,
  fileAttachments,
  addedFiles,
  memoryPreferences,
  mode,
  threadSource,
  threadStartKind: _,
  workspaceKind = "project",
  projectlessOutputDirectory,
  projectAssignment,
  baseInstructions,
  additionalDeveloperInstructions,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("buildAgentTurnStartPayload peers are not configured");
  }
  if (workspaceKind === "projectless" && projectlessOutputDirectory == null)
    throw Error("Projectless conversations require an output directory");
  let C = peers.Yg([...fileAttachments, ...addedFiles]),
    w =
      shouldSendPermissionOverrides === false
        ? null
        : peers.wl(agentMode, workspaceRoots, config);
  return (
    w != null &&
      permissionProfileId != null &&
      ((w.activePermissionProfile = {
        id: permissionProfileId,
        extends: null,
      }),
      (w.runtimeWorkspaceRoots = workspaceRoots)),
    {
      input,
      commentAttachments,
      workspaceRoots,
      collaborationMode,
      multiAgentMode: peers.O_t,
      serviceTier,
      ...(serviceName === undefined
        ? {}
        : {
            serviceName,
          }),
      ...(w == null
        ? {
            useAppServerPermissionDefault: true,
          }
        : {
            permissions: w,
            approvalsReviewer: w.approvalsReviewer,
          }),
      cwd,
      attachments: C,
      workspaceKind,
      projectAssignment,
      mode,
      threadSource,
      threadStartKind: _,
      config: configOverrides,
      ...(workspaceKind === "projectless"
        ? {
            projectlessOutputDirectory,
          }
        : {}),
      memoryPreferences,
      baseInstructions,
      additionalDeveloperInstructions,
    }
  );
}

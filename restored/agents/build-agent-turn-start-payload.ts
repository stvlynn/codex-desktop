// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `S2r`) / export `Hq`.

export type BuildAgentTurnStartPayloadArgs = {
  agentMode: unknown;
  permissionProfileId?: string | null;
  shouldSendPermissionOverrides?: boolean;
  workspaceRoots: unknown[];
  config: unknown;
  configOverrides: unknown;
  input: unknown;
  commentAttachments: unknown;
  collaborationMode: unknown;
  serviceTier: unknown;
  serviceName?: unknown;
  cwd: unknown;
  fileAttachments: unknown[];
  addedFiles: unknown[];
  memoryPreferences: unknown;
  mode: unknown;
  threadSource: unknown;
  threadStartKind: unknown;
  workspaceKind?: string;
  projectlessOutputDirectory?: string | null;
  projectAssignment: unknown;
  baseInstructions: unknown;
  additionalDeveloperInstructions: unknown;
};

export type BuildAgentTurnStartPayloadPeers = {
  mergeAttachments: (items: unknown[]) => unknown;
  buildPermissions: (
    agentMode: unknown,
    workspaceRoots: unknown[],
    config: unknown,
  ) => null | {
    approvalsReviewer?: unknown;
    activePermissionProfile?: { id: string; extends: null };
    runtimeWorkspaceRoots?: unknown[];
    [key: string]: unknown;
  };
  multiAgentMode: unknown;
};

let peers: BuildAgentTurnStartPayloadPeers | null = null;

/** Wire agent turn-start payload peers once companions land. */
export function setBuildAgentTurnStartPayloadPeers(
  next: BuildAgentTurnStartPayloadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hq` / internal `S2r`.
 * Assemble the payload used to start an agent turn.
 */
export function buildAgentTurnStartPayload(
  args: BuildAgentTurnStartPayloadArgs,
): Record<string, unknown> {
  if (peers == null) {
    throw new Error("BuildAgentTurnStartPayload peers are not configured");
  }
  const workspaceKind = args.workspaceKind ?? "project";
  if (
    workspaceKind === "projectless" &&
    args.projectlessOutputDirectory == null
  ) {
    throw new Error("Projectless conversations require an output directory");
  }
  const attachments = peers.mergeAttachments([
    ...args.fileAttachments,
    ...args.addedFiles,
  ]);
  let permissions =
    args.shouldSendPermissionOverrides === false
      ? null
      : peers.buildPermissions(
          args.agentMode,
          args.workspaceRoots,
          args.config,
        );
  if (permissions != null && args.permissionProfileId != null) {
    permissions = {
      ...permissions,
      activePermissionProfile: {
        id: args.permissionProfileId,
        extends: null,
      },
      runtimeWorkspaceRoots: args.workspaceRoots,
    };
  }
  return {
    input: args.input,
    commentAttachments: args.commentAttachments,
    workspaceRoots: args.workspaceRoots,
    collaborationMode: args.collaborationMode,
    multiAgentMode: peers.multiAgentMode,
    serviceTier: args.serviceTier,
    ...(args.serviceName === undefined
      ? {}
      : { serviceName: args.serviceName }),
    ...(permissions == null
      ? { useAppServerPermissionDefault: true }
      : {
          permissions,
          approvalsReviewer: permissions.approvalsReviewer,
        }),
    cwd: args.cwd,
    attachments,
    workspaceKind,
    projectAssignment: args.projectAssignment,
    mode: args.mode,
    threadSource: args.threadSource,
    threadStartKind: args.threadStartKind,
    config: args.configOverrides,
    ...(workspaceKind === "projectless"
      ? { projectlessOutputDirectory: args.projectlessOutputDirectory }
      : {}),
    memoryPreferences: args.memoryPreferences,
    baseInstructions: args.baseInstructions,
    additionalDeveloperInstructions: args.additionalDeveloperInstructions,
  };
}

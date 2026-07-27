// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iYs` / export `Cg`.

/** Whether the composer should offer a cloud/remote follow-up path. */
export function shouldOfferCloudFollowUp(args: {
  composerMode: string;
  draftRemoteHostId: string;
  followUpType: string;
  hasStartedBranchConversation: boolean;
}): boolean {
  return (
    args.composerMode === "local" &&
    args.draftRemoteHostId !== "local" &&
    args.followUpType !== "local" &&
    (!args.hasStartedBranchConversation || args.followUpType === "cloud")
  );
}

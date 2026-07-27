// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OOs` / export `Dv`.

export type ReferralProgram = {
  programId: string;
  entrypoint: "persistent";
};

/** Map account kind onto referral program ids. */
export function resolveReferralProgram(
  kind: string | null | undefined,
): ReferralProgram | null {
  switch (kind?.toLowerCase()) {
    case "personal":
      return { programId: "codex_referral_consumer", entrypoint: "persistent" };
    case "workspace":
      return {
        programId: "codex_referral_workspace",
        entrypoint: "persistent",
      };
    case undefined:
    case null:
      return null;
    default:
      return null;
  }
}

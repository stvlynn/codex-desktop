// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xti`) / export `pG`.

export type StartAttachmentJourneyPeers = {
  XZn: (...args: unknown[]) => unknown;
  wti: (...args: unknown[]) => unknown;
};
let peers: StartAttachmentJourneyPeers | null = null;

/** Wire startAttachmentJourney peers once companions land. */
export function setStartAttachmentJourneyPeers(
  next: StartAttachmentJourneyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pG` / internal `xti`.
 */
export function startAttachmentJourney(
  e: unknown,
  { attachmentPath, journey, templateId }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("startAttachmentJourney peers are not configured");
  }
  peers.wti(
    e,
    {
      templateId,
      templateOrigin: peers.XZn.CODEX_ARTIFACT_TEMPLATE_ORIGIN_BUILT_IN_ASSET,
      inclusion: {
        type: "attachment",
        path: attachmentPath,
      },
    },
    journey,
  );
}

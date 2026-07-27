// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `xti`) / export `pG`.

export type StartAttachmentJourneyPeers = {
  startJourney: (
    store: unknown,
    draft: {
      templateId: unknown;
      templateOrigin: unknown;
      inclusion: { type: "attachment"; path: unknown };
    },
    journey: unknown,
  ) => void;
  builtInOrigin: unknown;
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
 * Start an artifact template journey with an attachment inclusion.
 */
export function startAttachmentJourney(
  store: unknown,
  args: { attachmentPath: unknown; journey: unknown; templateId: unknown },
): void {
  if (peers == null) {
    throw new Error("StartAttachmentJourney peers are not configured");
  }
  peers.startJourney(
    store,
    {
      templateId: args.templateId,
      templateOrigin: peers.builtInOrigin,
      inclusion: { type: "attachment", path: args.attachmentPath },
    },
    args.journey,
  );
}

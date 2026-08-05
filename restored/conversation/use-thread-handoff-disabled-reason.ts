// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CJs`) / export `Fg`.

export type UseThreadHandoffDisabledReasonPeers = {
  Fl: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  MD: (...args: unknown[]) => unknown;
  bJs: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  wJs: (...args: unknown[]) => unknown;
  xJs: (...args: unknown[]) => unknown;
};

let peers: UseThreadHandoffDisabledReasonPeers | null = null;

/** Wire useThreadHandoffDisabledReason peers once companions land. */
export function setUseThreadHandoffDisabledReasonPeers(
  next: UseThreadHandoffDisabledReasonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fg` / internal `CJs`.
 */
export function useThreadHandoffDisabledReason(e: unknown) {
  if (peers == null) {
    throw new Error("useThreadHandoffDisabledReason peers are not configured");
  }

  let t = (0, peers.wJs.c)(8),
    n = peers.Ju(),
    r = peers.Fo(peers.xJs, e),
    {
      data: i,
      isError: a,
      isLoading: o,
    } = peers.MD(peers.Fl.QUEUED_FOLLOW_UPS);
  switch (
    peers.bJs({
      pendingPastedTextAttachmentCount: r,
      queuedFollowUpsError: a,
      queuedFollowUpsLoading: o,
      queuedFollowUpCount: i?.[e]?.length ?? 0,
    })
  ) {
    case `loading-queued-follow-ups`: {
      let e;
      return (
        t[0] === n
          ? (e = t[1])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.loadingQueuedFollowUps`,
              defaultMessage: `Checking queued messages before handing off this chat`,
              description: `Message shown when task handoff is disabled while queued messages are loading`,
            })),
            (t[0] = n),
            (t[1] = e)),
        e
      );
    }
    case `pending-pasted-text-attachments`: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.pendingPastedTextAttachments`,
              defaultMessage: `Wait for pasted text attachments to finish before handing off this task`,
              description: `Message shown when task handoff is disabled while pasted text attachments are being created`,
            })),
            (t[2] = n),
            (t[3] = e)),
        e
      );
    }
    case `queued-follow-ups`: {
      let e;
      return (
        t[4] === n
          ? (e = t[5])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.queuedFollowUps`,
              defaultMessage: `Send or remove queued messages before handing off this task`,
              description: `Message shown when task handoff is disabled because queued messages would remain attached to the source task`,
            })),
            (t[4] = n),
            (t[5] = e)),
        e
      );
    }
    case `unavailable-queued-follow-ups`: {
      let e;
      return (
        t[6] === n
          ? (e = t[7])
          : ((e = n.formatMessage({
              id: `localConversation.threadHandoff.disabled.unavailableQueuedFollowUps`,
              defaultMessage: `Unable to check queued messages before handing off this task`,
              description: `Message shown when task handoff is disabled because queued messages could not be loaded`,
            })),
            (t[6] = n),
            (t[7] = e)),
        e
      );
    }
    case null:
      return null;
  }
}

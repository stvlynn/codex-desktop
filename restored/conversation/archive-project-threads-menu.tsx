// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pPr`) / export `rQ`.

export type ArchiveProjectThreadsMenuPeers = {
  Fo: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  nPr: (...args: unknown[]) => unknown;
  rPr: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  sj: (...args: unknown[]) => unknown;
  tPr: (...args: unknown[]) => unknown;
  uPr: (...args: unknown[]) => unknown;
  vPr: (...args: unknown[]) => unknown;
  yPr: (...args: unknown[]) => unknown;
};
let peers: ArchiveProjectThreadsMenuPeers | null = null;

/** Wire ArchiveProjectThreadsMenu peers once companions land. */
export function setArchiveProjectThreadsMenuPeers(
  next: ArchiveProjectThreadsMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rQ` / internal `pPr`.
 */
export function ArchiveProjectThreadsMenu(props: unknown) {
  const UPr = peers.uPr;
  if (peers == null) {
    throw new Error("ArchiveProjectThreadsMenu peers are not configured");
  }
  let {
      projectLabel,
      threadKeys,
      currentThreadKey,
      onArchivedCurrentThread,
      onOpenChange,
      onDropdownOpenChange,
    } = props,
    c = peers.Io(peers.Q),
    l = peers.Ju(),
    u = peers.rt(),
    [d, f] = peers.yPr.useState(false),
    p = peers.Fo(peers.tPr, threadKeys),
    m = peers.nPr(p);
  let h = m,
    g = () => {
      h.length === 0 ||
        d ||
        (f(true),
        (async () => {
          let {
            succeededCount,
            failedCount,
            archivedCurrentThread,
            archivedRemoteCount,
          } = await peers.rPr({
            archiveableTasks: h,
            currentThreadKey,
          });
          if (
            (archivedRemoteCount > 0 &&
              u.invalidateQueries({
                queryKey: ["tasks"],
              }),
            f(false),
            onOpenChange(false),
            onDropdownOpenChange?.(false),
            archivedCurrentThread && onArchivedCurrentThread?.(),
            succeededCount > 0 && failedCount === 0)
          ) {
            c.get(peers.rh).success(
              l.formatMessage(
                {
                  id: "sidebarElectron.archiveProjectThreads.success",
                  defaultMessage:
                    "Archived {count, plural, one {# task} other {# tasks}}",
                  description:
                    "Success toast after archiving all archiveable tasks in a project",
                },
                {
                  count: succeededCount,
                },
              ),
            );
            return;
          }
          if (succeededCount > 0) {
            c.get(peers.rh).danger(
              l.formatMessage(
                {
                  id: "sidebarElectron.archiveProjectThreads.partialError",
                  defaultMessage:
                    "Archived {successCount, plural, one {# task} other {# tasks}} in {projectLabel}; {failedCount} failed",
                  description:
                    "Error toast shown when only some project tasks archive successfully",
                },
                {
                  successCount: succeededCount,
                  failedCount,
                  projectLabel,
                },
              ),
            );
            return;
          }
          c.get(peers.rh).danger(
            l.formatMessage(
              {
                id: "sidebarElectron.archiveProjectThreads.error",
                defaultMessage:
                  "Failed to archive active chats in {projectLabel}",
                description:
                  "Error toast shown when archiving all archiveable tasks in a project fails",
              },
              {
                projectLabel,
              },
            ),
          );
        })());
    };
  let _ = g;
  return (
    <UPr
      open={true}
      onOpenChange={onOpenChange}
      onConfirm={_}
      count={h.length}
      projectLabel={projectLabel}
      isArchiving={d}
    />
  );
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rf`) / export `Pdt`.

export type BindDataAppActionReviewFileExpandedPeers = {
  Ff: (...args: unknown[]) => unknown;
  If: (...args: unknown[]) => unknown;
  Lf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zXe: (...args: unknown[]) => unknown;
};

let peers: BindDataAppActionReviewFileExpandedPeers | null = null;

/** Wire bindDataAppActionReviewFileExpanded peers once companions land. */
export function setBindDataAppActionReviewFileExpandedPeers(
  next: BindDataAppActionReviewFileExpandedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pdt` / internal `Rf`.
 */
export function bindDataAppActionReviewFileExpanded() {
  if (peers == null) {
    throw new Error(
      "bindDataAppActionReviewFileExpanded peers are not configured",
    );
  }

  return peers.e(() => {
    ((Ff = {
      reviewFileExpanded: `data-app-action-review-file-expanded`,
      reviewFileToggle: `data-app-action-review-file-toggle`,
      reviewPath: `data-review-path`,
      reviewScroll: `data-app-action-review-scroll`,
      sidebarProjectCollapsed: `data-app-action-sidebar-project-collapsed`,
      sidebarProjectId: `data-app-action-sidebar-project-id`,
      sidebarProjectLabel: `data-app-action-sidebar-project-label`,
      sidebarProjectListId: `data-app-action-sidebar-project-list-id`,
      sidebarProjectRow: `data-app-action-sidebar-project-row`,
      sidebarProjectSelect: `data-app-action-sidebar-select-project`,
      sidebarProjectShowAll: `data-app-action-sidebar-project-show-all`,
      sidebarProjectShowAllToggle: `data-app-action-sidebar-project-show-all-toggle`,
      sidebarScroll: `data-app-action-sidebar-scroll`,
      sidebarSection: `data-app-action-sidebar-section`,
      sidebarSectionCollapsed: `data-app-action-sidebar-section-collapsed`,
      sidebarSectionHeading: `data-app-action-sidebar-section-heading`,
      sidebarSectionToggle: `data-app-action-sidebar-section-toggle`,
      sidebarThreadActive: `data-app-action-sidebar-thread-active`,
      sidebarThreadHostId: `data-app-action-sidebar-thread-host-id`,
      sidebarThreadId: `data-app-action-sidebar-thread-id`,
      sidebarThreadKind: `data-app-action-sidebar-thread-kind`,
      sidebarThreadPinned: `data-app-action-sidebar-thread-pinned`,
      sidebarThreadRow: `data-app-action-sidebar-thread-row`,
      sidebarThreadTitle: `data-app-action-sidebar-thread-title`,
      timelineScroll: `data-app-action-timeline-scroll`,
    }),
      (If = {
        reviewFile: `[${peers.Ff.reviewPath}]`,
        reviewFileToggle: `[${peers.Ff.reviewFileToggle}]`,
        reviewFileToggleCollapsed: `[${peers.Ff.reviewFileToggle}][${peers.Ff.reviewFileExpanded}="false"]`,
        reviewScroll: `[${peers.Ff.reviewScroll}]`,
        sidebarProjectList: (e) =>
          `[${peers.Ff.sidebarProjectListId}="${CSS.escape(peers.e)}"]`,
        sidebarProjectRow: `[${peers.Ff.sidebarProjectRow}]`,
        sidebarProjectSelect: `[${peers.Ff.sidebarProjectSelect}]`,
        sidebarProjectShowAllToggle: `[${peers.Ff.sidebarProjectShowAllToggle}]`,
        sidebarScroll: `[${peers.Ff.sidebarScroll}]`,
        sidebarSection: `[${peers.Ff.sidebarSection}]`,
        sidebarSectionToggle: `[${peers.Ff.sidebarSectionToggle}]`,
        sidebarThreadRow: `[${peers.Ff.sidebarThreadRow}]`,
        timelineScroll: `[${peers.Ff.timelineScroll}]`,
        timelineTurn: `[data-content-search-turn-key]`,
      }),
      (zXe = [
        peers.If.sidebarSection,
        peers.If.sidebarProjectRow,
        peers.If.sidebarThreadRow,
      ].join(`,`)),
      (Lf = {
        reviewFile: (e) => ({
          [peers.Ff.reviewPath]: peers.e,
        }),
        reviewFileToggle: (e) => ({
          [peers.Ff.reviewFileExpanded]: String(peers.e),
          [peers.Ff.reviewFileToggle]: ``,
        }),
        reviewScroll: {
          [peers.Ff.reviewScroll]: ``,
        },
        sidebarProjectList: ({ projectId: e, showAll: t }) => ({
          [peers.Ff.sidebarProjectListId]: peers.e,
          [peers.Ff.sidebarProjectShowAll]: String(t),
        }),
        sidebarProjectRow: ({ collapsed: e, label: t, projectId: n }) => ({
          [peers.Ff.sidebarProjectCollapsed]: String(peers.e),
          [peers.Ff.sidebarProjectId]: n,
          [peers.Ff.sidebarProjectLabel]: t,
          [peers.Ff.sidebarProjectRow]: ``,
        }),
        sidebarProjectSelect: {
          [peers.Ff.sidebarProjectSelect]: ``,
        },
        sidebarProjectShowAllToggle: {
          [peers.Ff.sidebarProjectShowAllToggle]: ``,
        },
        sidebarScroll: {
          [peers.Ff.sidebarScroll]: ``,
        },
        sidebarSection: ({ collapsed: e, heading: t }) => ({
          [peers.Ff.sidebarSection]: ``,
          [peers.Ff.sidebarSectionCollapsed]: String(peers.e),
          [peers.Ff.sidebarSectionHeading]: t,
        }),
        sidebarSectionToggle: {
          [peers.Ff.sidebarSectionToggle]: ``,
        },
        sidebarThreadRow: ({
          active: e,
          hostId: t,
          id: n,
          kind: r,
          pinned: i,
          title: a,
        }) => ({
          [peers.Ff.sidebarThreadActive]: String(peers.e),
          [peers.Ff.sidebarThreadHostId]: t ?? ``,
          [peers.Ff.sidebarThreadId]: n,
          [peers.Ff.sidebarThreadKind]: r,
          [peers.Ff.sidebarThreadPinned]: String(i),
          [peers.Ff.sidebarThreadRow]: ``,
          [peers.Ff.sidebarThreadTitle]: a,
        }),
        timelineScroll: {
          [peers.Ff.timelineScroll]: ``,
        },
      }));
  });
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// `data-*` attribute names for review / sidebar / timeline app-actions
// (bundle `Ff`; consumed by exports `Mdt`/`jdt`/`Ndt`).

export const AppActionDataAttribute = {
  reviewFileExpanded: "data-app-action-review-file-expanded",
  reviewFileToggle: "data-app-action-review-file-toggle",
  reviewPath: "data-review-path",
  reviewScroll: "data-app-action-review-scroll",
  sidebarProjectCollapsed: "data-app-action-sidebar-project-collapsed",
  sidebarProjectId: "data-app-action-sidebar-project-id",
  sidebarProjectLabel: "data-app-action-sidebar-project-label",
  sidebarProjectListId: "data-app-action-sidebar-project-list-id",
  sidebarProjectRow: "data-app-action-sidebar-project-row",
  sidebarProjectSelect: "data-app-action-sidebar-select-project",
  sidebarProjectShowAll: "data-app-action-sidebar-project-show-all",
  sidebarProjectShowAllToggle:
    "data-app-action-sidebar-project-show-all-toggle",
  sidebarScroll: "data-app-action-sidebar-scroll",
  sidebarSection: "data-app-action-sidebar-section",
  sidebarSectionCollapsed: "data-app-action-sidebar-section-collapsed",
  sidebarSectionHeading: "data-app-action-sidebar-section-heading",
  sidebarSectionToggle: "data-app-action-sidebar-section-toggle",
  sidebarThreadActive: "data-app-action-sidebar-thread-active",
  sidebarThreadHostId: "data-app-action-sidebar-thread-host-id",
  sidebarThreadId: "data-app-action-sidebar-thread-id",
  sidebarThreadKind: "data-app-action-sidebar-thread-kind",
  sidebarThreadPinned: "data-app-action-sidebar-thread-pinned",
  sidebarThreadRow: "data-app-action-sidebar-thread-row",
  sidebarThreadTitle: "data-app-action-sidebar-thread-title",
  timelineScroll: "data-app-action-timeline-scroll",
} as const;

export type AppActionDataAttributeName =
  (typeof AppActionDataAttribute)[keyof typeof AppActionDataAttribute];

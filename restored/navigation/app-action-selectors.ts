// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// CSS selectors for review / sidebar / timeline app-actions
// (bundle `If` / export `Mdt`).

import { AppActionDataAttribute as Ff } from "./app-action-data-attributes";

export const AppActionSelector = {
  reviewFile: `[${Ff.reviewPath}]`,
  reviewFileToggle: `[${Ff.reviewFileToggle}]`,
  reviewFileToggleCollapsed: `[${Ff.reviewFileToggle}][${Ff.reviewFileExpanded}="false"]`,
  reviewScroll: `[${Ff.reviewScroll}]`,
  sidebarProjectList: (projectListId: string): string =>
    `[${Ff.sidebarProjectListId}="${CSS.escape(projectListId)}"]`,
  sidebarProjectRow: `[${Ff.sidebarProjectRow}]`,
  sidebarProjectSelect: `[${Ff.sidebarProjectSelect}]`,
  sidebarProjectShowAllToggle: `[${Ff.sidebarProjectShowAllToggle}]`,
  sidebarScroll: `[${Ff.sidebarScroll}]`,
  sidebarSection: `[${Ff.sidebarSection}]`,
  sidebarSectionToggle: `[${Ff.sidebarSectionToggle}]`,
  sidebarThreadRow: `[${Ff.sidebarThreadRow}]`,
  timelineScroll: `[${Ff.timelineScroll}]`,
  timelineTurn: "[data-content-search-turn-key]",
} as const;

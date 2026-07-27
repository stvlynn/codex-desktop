// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Builders that produce `data-*` prop bags for review / sidebar / timeline
// (bundle `Lf` / export `jdt`).

import { AppActionDataAttribute as Ff } from "./app-action-data-attributes";

export const AppActionDataAttr = {
  reviewFile: (path: string): Record<string, string> => ({
    [Ff.reviewPath]: path,
  }),
  reviewFileToggle: (expanded: boolean): Record<string, string> => ({
    [Ff.reviewFileExpanded]: String(expanded),
    [Ff.reviewFileToggle]: "",
  }),
  reviewScroll: { [Ff.reviewScroll]: "" } as Record<string, string>,
  sidebarProjectList: ({
    projectId,
    showAll,
  }: {
    projectId: string;
    showAll: boolean;
  }): Record<string, string> => ({
    [Ff.sidebarProjectListId]: projectId,
    [Ff.sidebarProjectShowAll]: String(showAll),
  }),
  sidebarProjectRow: ({
    collapsed,
    label,
    projectId,
  }: {
    collapsed: boolean;
    label: string;
    projectId: string;
  }): Record<string, string> => ({
    [Ff.sidebarProjectCollapsed]: String(collapsed),
    [Ff.sidebarProjectId]: projectId,
    [Ff.sidebarProjectLabel]: label,
    [Ff.sidebarProjectRow]: "",
  }),
  sidebarProjectSelect: {
    [Ff.sidebarProjectSelect]: "",
  } as Record<string, string>,
  sidebarProjectShowAllToggle: {
    [Ff.sidebarProjectShowAllToggle]: "",
  } as Record<string, string>,
  sidebarScroll: { [Ff.sidebarScroll]: "" } as Record<string, string>,
  sidebarSection: ({
    collapsed,
    heading,
  }: {
    collapsed: boolean;
    heading: string;
  }): Record<string, string> => ({
    [Ff.sidebarSection]: "",
    [Ff.sidebarSectionCollapsed]: String(collapsed),
    [Ff.sidebarSectionHeading]: heading,
  }),
  sidebarSectionToggle: {
    [Ff.sidebarSectionToggle]: "",
  } as Record<string, string>,
  sidebarThreadRow: ({
    active,
    hostId,
    id,
    kind,
    pinned,
    title,
  }: {
    active: boolean;
    hostId?: string | null;
    id: string;
    kind: string;
    pinned: boolean;
    title: string;
  }): Record<string, string> => ({
    [Ff.sidebarThreadActive]: String(active),
    [Ff.sidebarThreadHostId]: hostId ?? "",
    [Ff.sidebarThreadId]: id,
    [Ff.sidebarThreadKind]: kind,
    [Ff.sidebarThreadPinned]: String(pinned),
    [Ff.sidebarThreadRow]: "",
    [Ff.sidebarThreadTitle]: title,
  }),
  timelineScroll: { [Ff.timelineScroll]: "" } as Record<string, string>,
} as const;

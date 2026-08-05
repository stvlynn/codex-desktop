// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Class maps + sizing tokens for DropdownMenu peers (`qR` / `XYi` / `_Xi`).

import type {
  DropdownMenuContentMaxHeight,
  DropdownMenuContentWidth,
  DropdownMenuItemIconSize,
} from "./types";

export const CONTENT_AVAILABLE_STYLE = {
  maxWidth:
    "min(var(--radix-dropdown-menu-content-available-width), calc(100vw - 16px))",
  maxHeight:
    "min(var(--radix-dropdown-menu-content-available-height), calc(100vh - 16px))",
} as const;

export const ITEM_CLASS = {
  content: "flex w-full items-center gap-1.5",
  contentWithIconAndSubText: "flex w-full items-center gap-3",
  icon: "shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100",
  itemBase:
    "text-token-foreground outline-hidden rounded-lg px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-sm",
  itemInteractive:
    "group hover:bg-token-list-hover-background focus:bg-token-list-hover-background cursor-interaction",
} as const;

export const META_CLASS = {
  sectionLabel:
    "px-[var(--padding-row-x)] py-1 text-sm text-token-description-foreground",
  messageBase: "px-[var(--padding-row-x)] text-sm",
} as const;

export const ITEM_ICON_SIZE_CLASS: Record<DropdownMenuItemIconSize, string> = {
  xs: "icon-xs",
  sm: "icon-sm",
  md: "icon-md",
};

export const CONTENT_WIDTH_CLASS: Record<DropdownMenuContentWidth, string> = {
  icon: "min-w-[120px]",
  xs: "min-w-[160px]",
  sm: "min-w-[180px]",
  menuNarrow: "w-52",
  menu: "min-w-[220px]",
  menuFixed: "w-[220px]",
  menuBounded: "min-w-[200px] max-w-[320px]",
  menuWide: "w-[240px]",
  sidebar: "min-w-[172px] max-w-[240px]",
  workspace: "min-w-[260px]",
  panel: "w-[280px]",
  panelWide: "w-[360px]",
};

export const CONTENT_MAX_HEIGHT_PX: Record<
  DropdownMenuContentMaxHeight,
  number
> = {
  compact: 200,
  list: 250,
  tall: 350,
};

export const SUBMENU_COLLAPSE_TRANSITION = {
  duration: 0.3,
  ease: [0.19, 1, 0.22, 1] as const,
};

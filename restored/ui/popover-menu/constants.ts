// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Class maps for PopoverMenu item peers (bundle init `nJo`).

import type {
  PopoverMenuItemInteraction,
  PopoverMenuItemLeadingVariant,
  PopoverMenuItemMetaTone,
  PopoverMenuItemMetaVariant,
  PopoverMenuItemTone,
} from "./types";

export const ITEM_BASE_CLASS =
  "group/summary-panel-item relative isolate flex min-h-token-button-composer w-full min-w-0 items-center gap-token-button-composer-gap rounded-sm border-0 bg-transparent px-0 py-1 text-left";

export const ITEM_INTERACTIVE_BACKGROUND_CLASS =
  "cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-token-list-hover-background";

export const ITEM_INTERACTION_CLASS: Record<PopoverMenuItemInteraction, string> =
  {
    background: ITEM_INTERACTIVE_BACKGROUND_CLASS,
    foreground: "cursor-interaction hover:text-token-foreground",
  };

export const FOCUS_RING_CLASS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border";

export const ICON_SLOT_CLASS =
  "icon-sm flex items-center justify-center [&_svg]:size-full";

export const ITEM_TONE_CLASS: Record<PopoverMenuItemTone, string> = {
  "conversation-summary": "text-token-conversation-summary-trailing",
  critical: "text-token-charts-red",
  default: "text-token-foreground",
  muted: "text-token-text-secondary",
  tertiary: "text-token-text-tertiary",
};

export const ITEM_LEADING_SIZE_CLASS: Record<
  PopoverMenuItemLeadingVariant,
  string
> = {
  custom: "mr-2.5 w-4",
  glyph: "mr-2 w-[18px]",
  preview: "icon-sm mr-2 overflow-hidden rounded-sm",
  status: "mr-2.5 w-4",
};

export const ITEM_LEADING_INNER_CLASS: Record<
  PopoverMenuItemLeadingVariant,
  string | null
> = {
  custom: null,
  glyph: "icon-sm [&>*]:size-full [&_svg]:size-full",
  preview: null,
  status: "icon-xs [&>*]:size-full [&_svg]:size-full",
};

export const ITEM_META_TONE_CLASS: Record<PopoverMenuItemMetaTone, string> = {
  critical: "text-token-charts-red",
  default: "text-token-foreground",
  muted: "text-token-text-tertiary",
};

export const ITEM_META_VARIANT_CLASS: Record<
  PopoverMenuItemMetaVariant,
  string
> = {
  icon: "icon-xs [&>*]:size-full [&_svg]:size-full",
  text: "text-base",
};

export const SECTION_CONTENT_CLASS = "flex flex-col gap-0.5 px-3.5";

export const SECTION_COLLAPSE_TRANSITION = {
  duration: 0.3,
  ease: [0.19, 1, 0.22, 1] as const,
};

export const SECTION_COLLAPSED_STYLE = {
  height: 0,
  opacity: 0,
  marginTop: 0,
};

export const SECTION_EXPANDED_STYLE = {
  height: "auto" as const,
  opacity: 1,
  marginTop: 2,
};

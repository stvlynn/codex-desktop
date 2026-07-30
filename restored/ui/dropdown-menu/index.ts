// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu compound (`JB` / internal `KR`) — Codex-styled radix menu API.
//
// Leftovers (documented, not blockers for the public compound):
// - `GYi` host sidebar pointer-down dismiss (`Jf`/`Jm`) soft → window blur only
// - `Lm` electron zoom scale soft (always 1; portal zoom omitted)
// - Bundled radix fork body stays npm `@radix-ui/react-dropdown-menu`

import { DropdownMenuCheckboxItem } from "./checkbox-item";
import { DropdownMenuContent } from "./content";
import { DropdownMenuFlyoutSubmenuItem } from "./flyout-submenu-item";
import { DropdownMenuItem } from "./item";
import { DropdownMenuItemIcon } from "./item-icon";
import {
  DropdownMenuMessage,
  DropdownMenuSection,
  DropdownMenuSectionLabel,
  DropdownMenuSeparator,
  DropdownMenuTitle,
} from "./presentational";
import { DropdownMenuPopover } from "./popover";
import { DropdownMenuInput, DropdownMenuSearchInput } from "./search-input";
import { DropdownMenuSubmenuItem } from "./submenu-item";
import { DropdownMenuTrigger } from "./trigger";
import type { DropdownMenuCompound } from "./types";

export type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuCompound,
  DropdownMenuContentMaxHeight,
  DropdownMenuContentProps,
  DropdownMenuContentWidth,
  DropdownMenuFlyoutSubmenuItemProps,
  DropdownMenuInputProps,
  DropdownMenuItemIconProps,
  DropdownMenuItemIconSize,
  DropdownMenuItemProps,
  DropdownMenuMessageProps,
  DropdownMenuMessageTone,
  DropdownMenuPopoverProps,
  DropdownMenuSearchInputProps,
  DropdownMenuSearchVariant,
  DropdownMenuSectionLabelProps,
  DropdownMenuSectionProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubmenuItemProps,
  DropdownMenuSurface,
  DropdownMenuTitleProps,
  DropdownMenuTriggerProps,
} from "./types";

export {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuFlyoutSubmenuItem,
  DropdownMenuInput,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuMessage,
  DropdownMenuPopover,
  DropdownMenuSearchInput,
  DropdownMenuSection,
  DropdownMenuSectionLabel,
  DropdownMenuSeparator,
  DropdownMenuSubmenuItem,
  DropdownMenuTitle,
  DropdownMenuTrigger,
};

/**
 * Bundle export `JB` / internal `KR` — compound namespace used as
 * `DropdownMenu.Item`, `DropdownMenu.Content`, …
 */
export const DropdownMenu: DropdownMenuCompound = {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  ItemIcon: DropdownMenuItemIcon,
  Input: DropdownMenuInput,
  SearchInput: DropdownMenuSearchInput,
  Separator: DropdownMenuSeparator,
  SectionLabel: DropdownMenuSectionLabel,
  Message: DropdownMenuMessage,
  Title: DropdownMenuTitle,
  SubmenuItem: DropdownMenuSubmenuItem,
  FlyoutSubmenuItem: DropdownMenuFlyoutSubmenuItem,
  Section: DropdownMenuSection,
};

/** Bundle path ESM init retained as no-op (`QB`). */
export function ensureDropdownMenuInit(): void {}

/** Legacy no-op — peers are now inlined; kept for any stale callers. */
export function setBindDropdownMenuPartsPeers(_next: unknown): void {}

/** Legacy binder — returns the live compound. */
export function bindDropdownMenuParts(): DropdownMenuCompound {
  return DropdownMenu;
}

/** Legacy alias used by some extractFn stubs. */
export function setDropdownMenuPeers(_next: unknown): void {}

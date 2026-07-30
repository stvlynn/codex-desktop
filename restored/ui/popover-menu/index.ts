// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu compound (`XE` / internal `BJ`) — thread-summary panel menu API.
//
// Leftovers (documented, not blockers for the public compound):
// - Section expand persistence / timed autoCollapse via `$E`/`SJo` store atoms

import { ExpandableItemList } from "../expandable-item-list";
import {
  PopoverMenuIconButton,
  PopoverMenuItemActionLink,
  PopoverMenuItemActions,
  PopoverMenuSectionActions,
} from "./item-actions";
import {
  PopoverMenuItem,
  PopoverMenuItemButton,
  PopoverMenuItemGroup,
  PopoverMenuItemTrigger,
} from "./item";
import {
  PopoverMenuItemAvatarButton,
  PopoverMenuItemAvatarGroup,
  PopoverMenuItemLabel,
  PopoverMenuItemLeading,
  PopoverMenuItemMeta,
} from "./item-slots";
import { PopoverMenuSection, PopoverMenuSectionCount } from "./section";
import {
  PopoverMenuContent,
  PopoverMenuHeaderButton,
  PopoverMenuPopoverContent,
  PopoverMenuRoot,
} from "./shells";
import type { PopoverMenuCompound } from "./types";

export type {
  PopoverMenuCompound,
  PopoverMenuContentProps,
  PopoverMenuHeaderButtonProps,
  PopoverMenuIconButtonProps,
  PopoverMenuItemActionLinkProps,
  PopoverMenuItemActionsProps,
  PopoverMenuItemAvatarButtonProps,
  PopoverMenuItemAvatarGroupProps,
  PopoverMenuItemButtonProps,
  PopoverMenuItemGroupProps,
  PopoverMenuItemLabelProps,
  PopoverMenuItemLeadingProps,
  PopoverMenuItemMetaProps,
  PopoverMenuItemProps,
  PopoverMenuItemTriggerProps,
  PopoverMenuPopoverContentProps,
  PopoverMenuRootProps,
  PopoverMenuSectionActionsProps,
  PopoverMenuSectionCountProps,
  PopoverMenuSectionHandle,
  PopoverMenuSectionProps,
} from "./types";

export {
  PopoverMenuContent,
  PopoverMenuHeaderButton,
  PopoverMenuIconButton,
  PopoverMenuItem,
  PopoverMenuItemActionLink,
  PopoverMenuItemActions,
  PopoverMenuItemAvatarButton,
  PopoverMenuItemAvatarGroup,
  PopoverMenuItemButton,
  PopoverMenuItemGroup,
  PopoverMenuItemLabel,
  PopoverMenuItemLeading,
  PopoverMenuItemMeta,
  PopoverMenuItemTrigger,
  PopoverMenuPopoverContent,
  PopoverMenuRoot,
  PopoverMenuSection,
  PopoverMenuSectionActions,
  PopoverMenuSectionCount,
};

/**
 * Bundle export `XE` / internal `BJ` — compound namespace used as
 * `PopoverMenu.Item`, `PopoverMenu.Section`, …
 *
 * `List` reuses the already-promoted ExpandableItemList (`rJo` / `eD`).
 */
export const PopoverMenu: PopoverMenuCompound = {
  Content: PopoverMenuContent,
  HeaderButton: PopoverMenuHeaderButton,
  IconButton: PopoverMenuIconButton,
  Item: PopoverMenuItem,
  ItemActionLink: PopoverMenuItemActionLink,
  ItemActions: PopoverMenuItemActions,
  ItemAvatarGroup: PopoverMenuItemAvatarGroup,
  ItemAvatarButton: PopoverMenuItemAvatarButton,
  ItemButton: PopoverMenuItemButton,
  ItemGroup: PopoverMenuItemGroup,
  ItemLabel: PopoverMenuItemLabel,
  ItemLeading: PopoverMenuItemLeading,
  ItemMeta: PopoverMenuItemMeta,
  ItemTrigger: PopoverMenuItemTrigger,
  List: ExpandableItemList,
  PopoverContent: PopoverMenuPopoverContent,
  Root: PopoverMenuRoot,
  Section: PopoverMenuSection,
  SectionActions: PopoverMenuSectionActions,
  SectionCount: PopoverMenuSectionCount,
};

/** Bundle path ESM init retained as no-op (`MJo`). */
export function ensurePopoverMenuInit(): void {}

/** Legacy no-op — peers are now inlined; kept for any stale callers. */
export function setBindPopoverMenuPartsPeers(_next: unknown): void {}

/** Legacy binder — returns the live compound. */
export function bindPopoverMenuParts(): PopoverMenuCompound {
  return PopoverMenu;
}

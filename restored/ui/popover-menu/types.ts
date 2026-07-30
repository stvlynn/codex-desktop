// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared PopoverMenu (`XE` / `BJ`) prop contracts for thread-summary panel peers.

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
} from "react";

export type PopoverMenuItemTone =
  | "conversation-summary"
  | "critical"
  | "default"
  | "muted"
  | "tertiary";

export type PopoverMenuItemInteraction = "background" | "foreground";

export type PopoverMenuItemLeadingVariant =
  | "custom"
  | "glyph"
  | "preview"
  | "status";

export type PopoverMenuItemMetaTone = "critical" | "default" | "muted";

export type PopoverMenuItemMetaVariant = "icon" | "text";

export type PopoverMenuVisibility = "always" | "interaction";

export type PopoverMenuSectionMode = "accordion" | "dropdown" | "headerless";

export type PopoverMenuItemProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  interactive?: boolean;
  ref?: Ref<HTMLDivElement>;
  tone?: PopoverMenuItemTone;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className" | "ref">;

export type PopoverMenuItemButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  interaction?: PopoverMenuItemInteraction;
  ref?: Ref<HTMLButtonElement>;
  tone?: PopoverMenuItemTone;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "disabled" | "ref" | "type"
>;

export type PopoverMenuItemTriggerProps = {
  children?: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "type"
>;

export type PopoverMenuItemGroupProps = {
  children?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;

export type PopoverMenuItemLeadingProps = {
  children?: ReactNode;
  className?: string;
  variant?: PopoverMenuItemLeadingVariant;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export type PopoverMenuItemAvatarButtonProps = {
  children?: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "type"
>;

export type PopoverMenuItemAvatarGroupProps = {
  children?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export type PopoverMenuItemLabelProps = {
  children?: ReactNode;
  className?: string;
  truncate?: boolean;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export type PopoverMenuItemMetaProps = {
  children?: ReactNode;
  className?: string;
  tone?: PopoverMenuItemMetaTone;
  truncate?: boolean;
  variant?: PopoverMenuItemMetaVariant;
  visibility?: PopoverMenuVisibility;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export type PopoverMenuItemActionsProps = {
  children?: ReactNode;
  className?: string;
  visibility?: PopoverMenuVisibility;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export type PopoverMenuItemActionLinkProps = {
  children?: ReactNode;
  className?: string;
  label: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">;

export type PopoverMenuSectionActionsProps = {
  children?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export type PopoverMenuSectionCountProps = {
  count: number;
};

export type PopoverMenuSectionHandle = {
  collapse: () => void;
  expand: () => void;
};

export type PopoverMenuSectionProps = {
  after?: ReactNode | ((state: { isExpanded: boolean }) => ReactNode);
  autoCollapse?: boolean;
  children?: ReactNode;
  defaultCollapsed?: boolean;
  mode?: PopoverMenuSectionMode;
  onChange?: (option: string) => void;
  ref?: Ref<PopoverMenuSectionHandle>;
  sectionKey: string;
  sectionOptions?: readonly string[];
  title?: ReactNode;
  titleSuffix?: ReactNode;
};

export type PopoverMenuRootProps = {
  children?: ReactNode;
  shouldHideInlineImmediately?: boolean;
  shouldShow?: boolean;
};

export type PopoverMenuContentProps = {
  children?: ReactNode;
};

export type PopoverMenuPopoverContentProps = {
  children?: ReactNode;
  style?: CSSProperties;
};

export type PopoverMenuHeaderButtonProps = {
  label: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  pressed?: boolean;
  shortcut?: ReactNode;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "aria-pressed" | "children" | "color" | "onClick" | "title"
>;

export type PopoverMenuIconButtonProps = {
  children?: ReactNode;
  className?: string;
  /** Button color token; defaults to `ghost`. */
  color?: string;
  disableTooltip?: boolean;
  label: string;
  shortcut?: ReactNode;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "children" | "className" | "color"
>;

export type PopoverMenuCompound = {
  Content: (props: PopoverMenuContentProps) => ReactElement;
  HeaderButton: (props: PopoverMenuHeaderButtonProps) => ReactElement;
  IconButton: (props: PopoverMenuIconButtonProps) => ReactElement;
  Item: (props: PopoverMenuItemProps) => ReactElement;
  ItemActionLink: (props: PopoverMenuItemActionLinkProps) => ReactElement;
  ItemActions: (props: PopoverMenuItemActionsProps) => ReactElement;
  ItemAvatarButton: (props: PopoverMenuItemAvatarButtonProps) => ReactElement;
  ItemAvatarGroup: (props: PopoverMenuItemAvatarGroupProps) => ReactElement;
  ItemButton: (props: PopoverMenuItemButtonProps) => ReactElement;
  ItemGroup: (props: PopoverMenuItemGroupProps) => ReactElement;
  ItemLabel: (props: PopoverMenuItemLabelProps) => ReactElement;
  ItemLeading: (props: PopoverMenuItemLeadingProps) => ReactElement;
  ItemMeta: (props: PopoverMenuItemMetaProps) => ReactElement;
  ItemTrigger: (props: PopoverMenuItemTriggerProps) => ReactElement;
  List: typeof import("../expandable-item-list").ExpandableItemList;
  PopoverContent: (props: PopoverMenuPopoverContentProps) => ReactElement;
  Root: (props: PopoverMenuRootProps) => ReactElement;
  Section: (props: PopoverMenuSectionProps) => ReactElement | null;
  SectionActions: (props: PopoverMenuSectionActionsProps) => ReactElement;
  SectionCount: (props: PopoverMenuSectionCountProps) => ReactElement | null;
};

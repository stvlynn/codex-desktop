// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared DropdownMenu (`JB` / `KR`) prop contracts.

import type {
  ComponentType,
  CSSProperties,
  HTMLAttributes,
  InputHTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  Ref,
  SVGProps,
} from "react";
import type {
  DropdownMenuContentProps as RadixContentProps,
  DropdownMenuItemProps as RadixItemProps,
  DropdownMenuCheckboxItemProps as RadixCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";

export type DropdownMenuSurface = "bare" | "menu" | "opaque" | "panel";

export type DropdownMenuContentWidth =
  | "icon"
  | "xs"
  | "sm"
  | "menuNarrow"
  | "menu"
  | "menuFixed"
  | "menuBounded"
  | "menuWide"
  | "sidebar"
  | "workspace"
  | "panel"
  | "panelWide";

export type DropdownMenuContentMaxHeight = "compact" | "list" | "tall";

export type DropdownMenuItemIconSize = "xs" | "sm" | "md";

export type DropdownMenuMessageTone = "error" | "muted";

export type DropdownMenuSearchVariant = "default" | "inset";

export type DropdownMenuTriggerProps = {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  ref?: Ref<HTMLButtonElement>;
} & Omit<HTMLAttributes<HTMLButtonElement>, "children" | "className" | "disabled" | "ref">;

export type DropdownMenuContentProps = {
  align?: RadixContentProps["align"];
  children?: ReactNode;
  className?: string;
  onKeyDownCapture?: RadixContentProps["onKeyDownCapture"];
  ref?: Ref<HTMLDivElement>;
  sideOffset?: number;
  style?: CSSProperties;
  surface?: DropdownMenuSurface;
} & Omit<
  RadixContentProps,
  "align" | "children" | "className" | "onKeyDownCapture" | "sideOffset" | "style"
>;

export type DropdownMenuItemProps = {
  LeftIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  RightIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  SubText?: ReactNode;
  allowWrap?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  focusableWhenDisabled?: boolean;
  href?: string;
  keyboardShortcut?: ReactNode;
  leftIconClassName?: string;
  onClick?: (event: MouseEvent) => void;
  onSelect?: RadixItemProps["onSelect"];
  rightIcon?: ReactNode;
  rightIconClassName?: string;
  subTextAllowWrap?: boolean;
  tooltipAlign?: string;
  tooltipDisabled?: boolean;
  tooltipInteractive?: boolean;
  tooltipOpenWhen?: string;
  tooltipSide?: string;
  tooltipText?: ReactNode;
  tooltipTextClassName?: string;
} & Omit<
  RadixItemProps,
  "children" | "className" | "disabled" | "onClick" | "onSelect"
>;

export type DropdownMenuItemIconProps = {
  children?: ReactNode;
  className?: string;
  size?: DropdownMenuItemIconSize;
};

export type DropdownMenuCheckboxItemProps = {
  SubText?: ReactNode;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onSelect?: RadixCheckboxItemProps["onSelect"];
} & Omit<
  RadixCheckboxItemProps,
  "children" | "className" | "disabled" | "onSelect"
>;

export type DropdownMenuInputProps = {
  className?: string;
  onKeyDown?: InputHTMLAttributes<HTMLInputElement>["onKeyDown"];
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "onKeyDown">;

export type DropdownMenuSearchInputProps = {
  className?: string;
  inputClassName?: string;
  onKeyDown?: InputHTMLAttributes<HTMLInputElement>["onKeyDown"];
  trailingContent?: ReactNode;
  variant?: DropdownMenuSearchVariant;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "onKeyDown"
>;

export type DropdownMenuSeparatorProps = {
  className?: string;
  paddingClassName?: string;
};

export type DropdownMenuSectionLabelProps = {
  children?: ReactNode;
  className?: string;
};

export type DropdownMenuMessageProps = {
  centered?: boolean;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
  role?: HTMLAttributes<HTMLDivElement>["role"];
  tone?: DropdownMenuMessageTone;
};

export type DropdownMenuTitleProps = {
  children?: ReactNode;
  className?: string;
};

export type DropdownMenuSectionProps = {
  children?: ReactNode;
  className?: string;
};

export type DropdownMenuSubmenuItemProps = {
  children?: ReactNode;
  isDefaultOpen?: boolean;
  trigger: ReactElement;
};

export type DropdownMenuFlyoutSubmenuItemProps = {
  LeftIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  alignToParentBottom?: boolean;
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  contentSurface?: DropdownMenuSurface;
  contentWidth?: DropdownMenuContentWidth;
  disabled?: boolean;
  label?: ReactNode;
  leftIconClassName?: string;
  onOpenChange?: (open: boolean) => void;
  onSelect?: () => void;
  tooltipAlign?: string;
  tooltipDisabled?: boolean;
  tooltipOpenWhen?: string;
  tooltipSide?: string;
  tooltipText?: ReactNode;
  tooltipTextClassName?: string;
  triggerContent?: ReactNode;
};

export type DropdownMenuPopoverProps = {
  align?: RadixContentProps["align"];
  alignOffset?: number;
  children?: ReactNode;
  contentClassName?: string;
  contentMaxHeight?: DropdownMenuContentMaxHeight;
  contentRef?: Ref<HTMLDivElement>;
  contentStyle?: CSSProperties;
  contentWidth?: DropdownMenuContentWidth;
  dir?: "ltr" | "rtl";
  disabled?: boolean;
  onCloseAutoFocus?: RadixContentProps["onCloseAutoFocus"];
  onContentFocus?: RadixContentProps["onFocus"];
  onEscapeKeyDown?: RadixContentProps["onEscapeKeyDown"];
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  portalContainer?: HTMLElement | null;
  side?: RadixContentProps["side"];
  sideOffset?: number;
  surface?: DropdownMenuSurface;
  triggerButton: ReactNode;
};

export type DropdownMenuCompound = {
  Trigger: (props: DropdownMenuTriggerProps) => ReactElement;
  Content: (props: DropdownMenuContentProps) => ReactElement;
  Item: (props: DropdownMenuItemProps) => ReactElement;
  CheckboxItem: (props: DropdownMenuCheckboxItemProps) => ReactElement;
  ItemIcon: (props: DropdownMenuItemIconProps) => ReactElement;
  Input: (props: DropdownMenuInputProps) => ReactElement;
  SearchInput: (props: DropdownMenuSearchInputProps) => ReactElement;
  Separator: (props?: DropdownMenuSeparatorProps) => ReactElement;
  SectionLabel: (props: DropdownMenuSectionLabelProps) => ReactElement;
  Message: (props: DropdownMenuMessageProps) => ReactElement;
  Title: (props: DropdownMenuTitleProps) => ReactElement;
  SubmenuItem: (props: DropdownMenuSubmenuItemProps) => ReactElement;
  FlyoutSubmenuItem: (props: DropdownMenuFlyoutSubmenuItemProps) => ReactElement;
  Section: (props: DropdownMenuSectionProps) => ReactElement;
};

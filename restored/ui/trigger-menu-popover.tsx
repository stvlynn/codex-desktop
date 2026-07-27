// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `YYo`) / export `LE`.

import type { ReactElement, ReactNode } from "react";

export type TriggerMenuPopoverPeers = {
  useIsMobile: () => boolean;
  useControllableOpen: (
    open: boolean | undefined,
    onOpenChange: ((open: boolean) => void) | undefined,
  ) => { handleOpenChange: (open: boolean) => void; open: boolean };
  Trigger: unknown;
  Root: unknown;
  Portal: unknown;
  Content: unknown;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
  cx: (...parts: Array<string | false | null | undefined>) => string;
};

let peers: TriggerMenuPopoverPeers | null = null;

/** Wire TriggerMenuPopover peers once companions land. */
export function setTriggerMenuPopoverPeers(
  next: TriggerMenuPopoverPeers,
): void {
  peers = next;
}

/**
 * Bundle export `LE` / internal `YYo`.
 * Popover menu driven by a trigger button and controlled open state.
 */
export type TriggerMenuPopoverProps = {
  triggerButton: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: unknown;
  align?: unknown;
  sideOffset?: number;
  alignOffset?: number;
  contentRef?: unknown;
  onCloseAutoFocus?: (event: unknown) => void;
  onEscapeKeyDown?: (event: unknown) => void;
  contentClassName?: string;
  contentStyle?: Record<string, unknown>;
  surface?: string;
  contentWidth?: unknown;
  contentMaxHeight?: unknown;
  portalContainer?: unknown;
};

export function TriggerMenuPopover(
  props: TriggerMenuPopoverProps,
): ReactElement {
  if (peers == null) {
    throw new Error("TriggerMenuPopover peers are not configured");
  }
  const {
    triggerButton,
    disabled,
    children,
    open,
    onOpenChange,
    side,
    align,
    sideOffset,
    alignOffset,
    contentRef,
    onCloseAutoFocus,
    onEscapeKeyDown,
    contentClassName,
    contentStyle,
    surface = "menu",
    contentWidth,
    contentMaxHeight,
    portalContainer,
  } = props;
  void peers.useIsMobile();
  const { handleOpenChange, open: resolvedOpen } = peers.useControllableOpen(
    open,
    onOpenChange,
  );
  const trigger = peers.renderNode(peers.Trigger, {
    asChild: true,
    disabled,
    children: triggerButton,
  });
  const content = peers.renderNode(peers.Content, {
    ref: contentRef,
    side,
    align,
    sideOffset,
    alignOffset,
    onCloseAutoFocus,
    onEscapeKeyDown,
    className: peers.cx(contentClassName),
    style: {
      ...contentStyle,
      width: contentWidth,
      maxHeight: contentMaxHeight,
    },
    "data-surface": surface,
    children,
  });
  return peers.renderNodes(peers.Root, {
    open: resolvedOpen,
    onOpenChange: handleOpenChange,
    children: [
      trigger,
      peers.renderNode(peers.Portal, {
        container: portalContainer,
        children: content,
      }),
    ],
  }) as ReactElement;
}

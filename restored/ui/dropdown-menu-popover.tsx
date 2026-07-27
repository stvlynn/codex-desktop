// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `VR`) / export `KB`.

import type { ReactElement, ReactNode } from "react";

export type DropdownMenuPopoverPeers = {
  useControllableOpen: (
    open: boolean | undefined,
    onOpenChange: ((open: boolean) => void) | undefined,
  ) => { handleOpenChange: (open: boolean) => void; open: boolean };
  ensureInit: () => void;
  Root: unknown;
  Trigger: unknown;
  Portal: unknown;
  Content: unknown;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
  cx: (...parts: Array<string | false | null | undefined>) => string;
};

let peers: DropdownMenuPopoverPeers | null = null;

/** Wire DropdownMenuPopover peers once companions land. */
export function setDropdownMenuPopoverPeers(
  next: DropdownMenuPopoverPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KB` / internal `VR`.
 * Dropdown menu popover with trigger and portal content.
 */
export type DropdownMenuPopoverProps = {
  triggerButton: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  dir?: unknown;
  side?: unknown;
  align?: unknown;
  sideOffset?: number;
  alignOffset?: number;
  contentRef?: unknown;
  contentClassName?: string;
  contentStyle?: Record<string, unknown>;
  portalContainer?: unknown;
};

export function DropdownMenuPopover(
  props: DropdownMenuPopoverProps,
): ReactElement {
  if (peers == null) {
    throw new Error("DropdownMenuPopover peers are not configured");
  }
  peers.ensureInit();
  const {
    triggerButton,
    disabled,
    children,
    open,
    onOpenChange,
    dir,
    side,
    align,
    sideOffset,
    alignOffset,
    contentRef,
    contentClassName,
    contentStyle,
    portalContainer,
  } = props;
  const { handleOpenChange, open: resolvedOpen } = peers.useControllableOpen(
    open,
    onOpenChange,
  );
  return peers.renderNodes(peers.Root, {
    open: resolvedOpen,
    onOpenChange: handleOpenChange,
    dir,
    children: [
      peers.renderNode(peers.Trigger, {
        asChild: true,
        disabled,
        children: triggerButton,
      }),
      peers.renderNode(peers.Portal, {
        container: portalContainer,
        children: peers.renderNode(peers.Content, {
          ref: contentRef,
          side,
          align,
          sideOffset,
          alignOffset,
          className: peers.cx(contentClassName),
          style: contentStyle,
          children,
        }),
      }),
    ],
  }) as ReactElement;
}

// --- qg-full-green: missing-relative-exports stubs (open-runtime wiring) ---
export const ensureDropdownMenuPopoverInit: any = undefined;

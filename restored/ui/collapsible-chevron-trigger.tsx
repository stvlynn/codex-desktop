// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `fXi`) / export `qB`.

import type { ReactElement, ReactNode } from "react";

export type CollapsibleChevronTriggerPeers = {
  useControllableOpen: (
    open: boolean | undefined,
    onOpenChange?: (open: boolean) => void,
    defaultOpen?: boolean,
  ) => { open: boolean; setOpen: (open: boolean) => void };
  Root: unknown;
  Trigger: unknown;
  Content: unknown;
  Chevron: unknown;
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: CollapsibleChevronTriggerPeers | null = null;

/** Wire CollapsibleChevronTrigger peers once companions land. */
export function setCollapsibleChevronTriggerPeers(
  next: CollapsibleChevronTriggerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qB` / internal `fXi`.
 * Collapsible trigger with chevron and optional default open state.
 */
export type CollapsibleChevronTriggerProps = {
  trigger: ReactNode;
  children?: ReactNode;
  isDefaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function CollapsibleChevronTrigger(
  props: CollapsibleChevronTriggerProps,
): ReactElement {
  if (peers == null)
    throw new Error("CollapsibleChevronTrigger peers are not configured");
  const { trigger, children, isDefaultOpen, open, onOpenChange, className } =
    props;
  const state = peers.useControllableOpen(open, onOpenChange, isDefaultOpen);
  return peers.renderNodes(peers.Root, {
    open: state.open,
    onOpenChange: state.setOpen,
    className: peers.cx(className),
    children: [
      peers.renderNodes(peers.Trigger, {
        className: "flex w-full items-center gap-2",
        children: [
          trigger,
          peers.renderNode(peers.Chevron, { open: state.open }),
        ],
      }),
      peers.renderNode(peers.Content, { children }),
    ],
  }) as ReactElement;
}

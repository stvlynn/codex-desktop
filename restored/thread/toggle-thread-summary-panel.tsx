// Restored from ref/webview/assets/toggle-thread-summary-panel-jC7ifugU.js
// Popover shell + pin toggle for the thread summary panel.
// Stage 3: app-initial aliases → semantic modules; N$ ESM init dropped.

import type { ReactNode } from "react";
import {
  createShellPanelPinState,
  shellPanelPinnedDerivedAtom,
  shouldKeepPanelPinned,
  type ShellPanelPinKey,
} from "../app-shell/shell-panel-pin";
import {
  conversationSourceO,
  conversationSourceS,
} from "../boundaries/conversation-source";
import { PopoverContent } from "../ui/popover-content";
import { PopoverRoot } from "../ui/popover-root";
import { PopoverTrigger } from "../ui/popover-trigger";
export type ToggleThreadSummaryPanelProps = {
  children?: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  shouldPreventAutoFocus?: boolean;
  trigger: ReactNode;
};
type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};
type SummaryDisplayState = {
  displayMode?: string;
  isPopoverOpen?: boolean;
  [key: string]: unknown;
};

/**
 * Bundle export `r` — summary-panel popover (trigger + transparent content).
 */
export function ToggleThreadSummaryPanel({
  children,
  isOpen,
  onOpenChange,
  shouldPreventAutoFocus = false,
  trigger,
}: ToggleThreadSummaryPanelProps): ReactNode {
  const triggerNode = <PopoverTrigger asChild>{trigger}</PopoverTrigger>;
  const preventAutoFocus = (event: Event): void => {
    if (shouldPreventAutoFocus) event.preventDefault();
  };
  const contentStyle = {
    maxHeight: "none",
    maxWidth: "none",
  };
  const content = (
    <PopoverContent
      align="end"
      side="bottom"
      sideOffset={8}
      className="!w-auto !overflow-visible !rounded-3xl !bg-transparent !p-0 !shadow-none !ring-0 !backdrop-blur-none"
      onOpenAutoFocus={preventAutoFocus}
      onCloseAutoFocus={preventAutoFocus}
      onFocusOutside={preventFocusOutsideRightTabPanel}
      onPointerDownOutside={preventPointerDownOnRightTabStrip}
      style={contentStyle}
    >
      {isOpen ? children : null}
    </PopoverContent>
  );
  return (
    <PopoverRoot open={isOpen} onOpenChange={onOpenChange}>
      {triggerNode}
      {content}
    </PopoverRoot>
  );
}
function preventPointerDownOnRightTabStrip(event: {
  target: EventTarget | null;
  preventDefault: () => void;
}): void {
  if (
    event.target instanceof Element &&
    event.target.closest('[data-app-shell-tab-strip-controller="right"]') !=
      null
  ) {
    event.preventDefault();
  }
}
function preventFocusOutsideRightTabPanel(event: {
  target: EventTarget | null;
  preventDefault: () => void;
}): void {
  if (
    event.target instanceof Element &&
    event.target.matches(
      '[role="tabpanel"][data-app-shell-tab-panel-controller="right"]',
    )
  ) {
    event.preventDefault();
  }
}

/**
 * Bundle export `n` — toggle summary pin / overlay popover open state.
 */
export function toggleThreadSummaryPanel(scope: ScopeLike, next: ShellPanelPinKey | boolean = true): void {
  const display = scope.get(conversationSourceS) as SummaryDisplayState;
  const pinKey = next as ShellPanelPinKey;
  const pinned = shouldKeepPanelPinned(
    scope.get(shellPanelPinnedDerivedAtom, pinKey) as {
      isPinned: boolean;
      resetKey: string | null;
    },
    pinKey,
  );
  if (display.displayMode !== "overlay") {
    scope.set(
      shellPanelPinnedDerivedAtom,
      pinKey,
      createShellPanelPinState(pinKey, !pinned),
    );
    return;
  }
  const popoverOpen =
    display.isPopoverOpen || (typeof next !== "boolean" && pinned);
  if (typeof next !== "boolean") {
    scope.set(
      shellPanelPinnedDerivedAtom,
      pinKey,
      createShellPanelPinState(pinKey, !popoverOpen),
    );
  }
  scope.set(conversationSourceS, {
    ...display,
    isPopoverOpen: !popoverOpen,
  });
}

/** Bundle export `i` — Rolldown ESM init retained as no-op for graph parity. */
export function initToggleThreadSummaryPanel(): void {}

/** Bundle export `t` — atoms / conversation-source init retained as no-op. */
export function initToggleThreadSummaryPanelAtoms(): void {
  void conversationSourceO;
}

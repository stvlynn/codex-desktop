// Restored from ref/webview/assets/thread-panel-toggle-button-CKdJKdPZ.js
// Toolbar toggle button for thread side panels (tooltip + pressed styling).
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.

import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { OptionalTooltip } from "../ui/optional-tooltip";
export type ThreadPanelToggleButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  label: ReactNode;
  onClick?: () => void;
  color?: "outline" | string;
  pressed?: boolean;
  shortcut?: ReactNode;
};

/**
 * Bundle export `t` — panel toggle control with optional tooltip/shortcut.
 */
export function ThreadPanelToggleButton({
  children,
  disabled = false,
  label,
  onClick,
  color,
  pressed,
  shortcut,
}: ThreadPanelToggleButtonProps): ReactNode {
  const buttonColor =
    color === "outline"
      ? pressed
        ? "outlineActive"
        : "outline"
      : pressed
        ? "secondary"
        : "ghost";
  const button = (
    <Button
      size="toolbar"
      color={buttonColor}
      aria-label={typeof label === "string" ? label : undefined}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      uniform
    >
      {children}
    </Button>
  );
  return (
    <OptionalTooltip tooltipContent={label} shortcut={shortcut} delayOpen>
      {button}
    </OptionalTooltip>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op for graph parity. */
export function initThreadPanelToggleButton(): void {}

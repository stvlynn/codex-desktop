// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Segmented option control used in settings rows (bundle `Y9c` / export `pl`).

import type { ReactNode } from "react";

import { Button, type ButtonColor } from "./button";
import { cx } from "./cx";

export type SegmentedControlOption = {
  id: string;
  label: ReactNode;
  ariaLabel?: string;
};

export type SegmentedControlSize = "default" | "sm" | "icon";

export type SegmentedControlProps = {
  options: SegmentedControlOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  size?: SegmentedControlSize;
  className?: string;
  buttonClassName?: string;
  fullWidth?: boolean;
  uniform?: boolean;
  selectedColor?: ButtonColor;
  unselectedColor?: ButtonColor;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

/** No-op Rolldown ESM init for the segmented-control cluster (export `ml` / `eel`). */
export function ensureSegmentedControlInit(): void {}

/**
 * Horizontal segmented button group (bundle `Y9c` / export `pl`).
 */
export function SegmentedControl({
  options,
  selectedId,
  onSelect,
  size = "default",
  className,
  buttonClassName,
  fullWidth = false,
  uniform,
  selectedColor = "secondary",
  unselectedColor = "ghost",
  ariaLabel,
  ariaLabelledBy,
}: SegmentedControlProps) {
  const forceUniform = uniform ?? (size === "icon" && options.length > 2);
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cx(
        "inline-flex items-center gap-1 rounded-lg bg-token-sidebar-surface-secondary p-0.5",
        fullWidth && "w-full",
        className,
      )}
    >
      {options.map((option) => {
        const selected = option.id === selectedId;
        return (
          <Button
            key={option.id}
            type="button"
            aria-pressed={selected}
            aria-label={option.ariaLabel}
            color={selected ? selectedColor : unselectedColor}
            size={size === "icon" ? "toolbar" : "default"}
            uniform={forceUniform}
            className={cx(fullWidth && "flex-1", buttonClassName)}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}

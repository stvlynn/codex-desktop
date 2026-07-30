// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Controlled/uncontrolled open state for DropdownMenuPopover (`GYi`).
// Soft: browser-sidebar pointer-down / Jm dismiss subscriptions stay local.

import { useCallback, useEffect, useState } from "react";

export type DropdownMenuOpenState = {
  handleOpenChange: (open: boolean) => void;
  open: boolean;
};

/**
 * Bundle `GYi` — open state with blur-to-close. Host sidebar pointer-down
 * subscription (`Jf` / `Jm`) soft-degrades to window blur only.
 */
export function useDropdownMenuOpenState(
  controlledOpen: boolean | undefined,
  onOpenChange: ((open: boolean) => void) | undefined,
): DropdownMenuOpenState {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen ?? uncontrolledOpen;

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  useEffect(() => {
    if (!open) return;
    const onBlur = () => handleOpenChange(false);
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, [open, handleOpenChange]);

  return { handleOpenChange, open };
}

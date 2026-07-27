// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Toggle the conversation terminal panel (bundle `Yzi` / export `pU`).
// Thin AppScope-adjacent facade: open/close ops are host-bound.

import type { AppActionScope } from "./app-action-scope";
import {
  bottomTerminalOpenAtom,
  rightTerminalOpenAtom,
  type PanelSide,
} from "./app-shell-atoms";

export type TerminalPanelToggleOps = {
  /** Preferred panel side (`mBi` / setting-backed). */
  preferredSide?: (scope: AppActionScope) => PanelSide;
  openOn?: (scope: AppActionScope, side: PanelSide) => void;
  closeOn?: (scope: AppActionScope, side: PanelSide) => void;
};

let ops: TerminalPanelToggleOps = {};

export function bindTerminalPanelToggleOps(next: TerminalPanelToggleOps): void {
  ops = { ...ops, ...next };
}

function preferredSide(scope: AppActionScope): PanelSide {
  return ops.preferredSide?.(scope) ?? "bottom";
}

function isOpen(scope: AppActionScope, side: PanelSide): boolean {
  return Boolean(
    scope.get(
      side === "bottom" ? bottomTerminalOpenAtom : rightTerminalOpenAtom,
    ),
  );
}

/**
 * Bundle `Yzi` / export `pU` — toggle terminal on preferred (or given) side.
 */
export function toggleTerminalPanel(scope: AppActionScope, side: PanelSide = preferredSide(scope),
): void {
  if (isOpen(scope, side)) {
    ops.closeOn?.(scope, side);
    return;
  }
  ops.openOn?.(scope, side);
}

/** oU / hBi — related terminal ESM init; ops are bindable. */
export function ensureTerminalPanelToggleInit(): void {}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bindable AppScope-adjacent atom tokens for app-action panel / shell state
// (bundle aliases g0/m0/h0/f0/k0/D0/v0/DW/UU/uU/fU/a0/r0 and related inits).
// Host replaces placeholders via `bindAppShellAtoms` before dispatching actions.

export type PanelSide = "bottom" | "right";

export type PanelTabLike = {
  tabId?: string;
  kind?: string;
  title?: string;
};

export type PanelControllerAtoms = {
  activeTab$: unknown;
  tabs$: unknown;
  panelId: PanelSide;
};

export type AppShellAtomBindings = {
  /** g0 / qD — sidebar open */
  sidebarOpenAtom?: unknown;
  /** m0 / XD — right panel shell open */
  rightPanelShellOpenAtom?: unknown;
  /** h0 / ZD — right panel tabs open */
  rightPanelTabsOpenAtom?: unknown;
  /** f0 / YD — bottom panel open */
  bottomPanelOpenAtom?: unknown;
  /** k0 / VD — right panel fullscreen */
  rightPanelFullscreenAtom?: unknown;
  /** D0 / HD — app-shell focus area */
  focusAreaAtom?: unknown;
  /** v0 / QD — review file-tree open */
  reviewFileTreeOpenAtom?: unknown;
  /** DW / LP — review diff filter view */
  reviewDiffFilterAtom?: unknown;
  /** UU / qI — review file entries */
  reviewFilesAtom?: unknown;
  /** uU / dBi — terminal open on bottom */
  bottomTerminalOpenAtom?: unknown;
  /** fU / fBi — terminal open on right */
  rightTerminalOpenAtom?: unknown;
  /** a0 / eO — right panel controller */
  rightPanelController?: PanelControllerAtoms;
  /** r0 / tO — bottom panel controller */
  bottomPanelController?: PanelControllerAtoms;
};

const unbound = (label: string): unknown =>
  Symbol.for(`codex.app-shell.unbound.${label}`);

/** g0 / qD */
export let sidebarOpenAtom: unknown = unbound("sidebarOpen");
/** m0 / XD */
export let rightPanelShellOpenAtom: unknown = unbound("rightPanelShellOpen");
/** h0 / ZD */
export let rightPanelTabsOpenAtom: unknown = unbound("rightPanelTabsOpen");
/** f0 / YD */
export let bottomPanelOpenAtom: unknown = unbound("bottomPanelOpen");
/** k0 / VD */
export let rightPanelFullscreenAtom: unknown = unbound("rightPanelFullscreen");
/** D0 / HD */
export let focusAreaAtom: unknown = unbound("focusArea");
/** v0 / QD */
export let reviewFileTreeOpenAtom: unknown = unbound("reviewFileTreeOpen");
/** DW / LP */
export let reviewDiffFilterAtom: unknown = unbound("reviewDiffFilter");
/** UU / qI */
export let reviewFilesAtom: unknown = unbound("reviewFiles");
/** uU / dBi */
export let bottomTerminalOpenAtom: unknown = unbound("bottomTerminalOpen");
/** fU / fBi */
export let rightTerminalOpenAtom: unknown = unbound("rightTerminalOpen");
/** a0 / eO */
export let rightPanelController: PanelControllerAtoms = {
  activeTab$: unbound("right.activeTab"),
  tabs$: unbound("right.tabs"),
  panelId: "right",
};
/** r0 / tO */
export let bottomPanelController: PanelControllerAtoms = {
  activeTab$: unbound("bottom.activeTab"),
  tabs$: unbound("bottom.tabs"),
  panelId: "bottom",
};

/**
 * Inject host jotai atoms / panel controllers for app-action dispatch.
 */
export function bindAppShellAtoms(bindings: AppShellAtomBindings): void {
  if (bindings.sidebarOpenAtom != null)
    sidebarOpenAtom = bindings.sidebarOpenAtom;
  if (bindings.rightPanelShellOpenAtom != null) {
    rightPanelShellOpenAtom = bindings.rightPanelShellOpenAtom;
  }
  if (bindings.rightPanelTabsOpenAtom != null) {
    rightPanelTabsOpenAtom = bindings.rightPanelTabsOpenAtom;
  }
  if (bindings.bottomPanelOpenAtom != null) {
    bottomPanelOpenAtom = bindings.bottomPanelOpenAtom;
  }
  if (bindings.rightPanelFullscreenAtom != null) {
    rightPanelFullscreenAtom = bindings.rightPanelFullscreenAtom;
  }
  if (bindings.focusAreaAtom != null) focusAreaAtom = bindings.focusAreaAtom;
  if (bindings.reviewFileTreeOpenAtom != null) {
    reviewFileTreeOpenAtom = bindings.reviewFileTreeOpenAtom;
  }
  if (bindings.reviewDiffFilterAtom != null) {
    reviewDiffFilterAtom = bindings.reviewDiffFilterAtom;
  }
  if (bindings.reviewFilesAtom != null)
    reviewFilesAtom = bindings.reviewFilesAtom;
  if (bindings.bottomTerminalOpenAtom != null) {
    bottomTerminalOpenAtom = bindings.bottomTerminalOpenAtom;
  }
  if (bindings.rightTerminalOpenAtom != null) {
    rightTerminalOpenAtom = bindings.rightTerminalOpenAtom;
  }
  if (bindings.rightPanelController != null) {
    rightPanelController = bindings.rightPanelController;
  }
  if (bindings.bottomPanelController != null) {
    bottomPanelController = bindings.bottomPanelController;
  }
}

/**
 * Shell / producer `__esm` inits that originally constructed jotai atoms and
 * panel controllers. Tokens above are bindable; host calls `bindAppShellAtoms`.
 *
 * Mapped aliases (register-app-actions import surface):
 * - O0 / UD, b0 / $D — panel shell atom constructors
 * - i0 / nO — right/bottom panel controllers (`eO` / `tO`)
 * - l0 / ior — focus-area tab helpers (consumes panel controllers)
 * - HU / YI — review file entries atom (`qI` / UU)
 * - NU / oL — thin terminal/browser panel dep graph
 * - Cot / K_ — local-host descriptor seed used by shell chrome
 * - v2 / DD — giant app-shell producer graph (bindable tokens only honest path)
 * - opt / Au — giant zod/UI/producer graph (same; do not fake-promote bodies)
 */
export function ensureAppShellAtomsInit(): void {}

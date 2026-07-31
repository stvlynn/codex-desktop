// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: boundary ensures still owned by workbook-runtime
// (workbookEt EMU terminal, Binding412/gae cluster, Binding739, Binding736).

export type ComposeLayoutBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureBinding412: () => void;
  ensureBinding739: () => void;
  getShapeElementClass: () => any;
  getWorkbookTt: () => (value: number) => number;
};

let hooks: ComposeLayoutBoundaryHooks | null = null;

export function wireComposeLayoutBoundaryHooks(
  next: ComposeLayoutBoundaryHooks,
): void {
  hooks = next;
}

function requireHooks(): ComposeLayoutBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "compose-layout boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureWorkbookEt(): void {
  requireHooks().ensureWorkbookEt();
}
export function ensureBinding412(): void {
  requireHooks().ensureBinding412();
}
export function ensureBinding739(): void {
  requireHooks().ensureBinding739();
}
export function getShapeElementClass(): any {
  return requireHooks().getShapeElementClass();
}
export function getWorkbookTt(): (value: number) => number {
  ensureWorkbookEt();
  return requireHooks().getWorkbookTt();
}

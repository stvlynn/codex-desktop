// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: boundary deps for entity-query.

export type EntityQueryBoundaryHooks = {
  ensureWorkbookEt: () => void;
  ensureWr: () => void;
  ensureXgt: () => void;
  ensureYgt: () => void;
  bgt: (...args: any[]) => any;
  vgt: (...args: any[]) => any;
  getEmuScale: () => number;
};

let hooks: EntityQueryBoundaryHooks | null = null;

export function wireEntityQueryBoundaryHooks(
  next: EntityQueryBoundaryHooks,
): void {
  hooks = next;
}

function requireHooks(): EntityQueryBoundaryHooks {
  if (!hooks) {
    throw new Error(
      "entity-query boundary hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureWorkbookEt(): void {
  requireHooks().ensureWorkbookEt();
}
export function ensureWr(): void {
  requireHooks().ensureWr();
}
export function ensureXgt(): void {
  requireHooks().ensureXgt();
}
export function ensureYgt(): void {
  requireHooks().ensureYgt();
}
export function bgt(...args: any[]): any {
  return requireHooks().bgt(...args);
}
export function vgt(...args: any[]): any {
  return requireHooks().vgt(...args);
}
export function getEmuScale(): number {
  return requireHooks().getEmuScale();
}

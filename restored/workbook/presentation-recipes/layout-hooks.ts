// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: compose-layout hooks for presentation recipes.

export type ComposeFn = (...args: any[]) => any;

export type PresentationRecipeLayoutHooks = {
  ensureComposeLayoutInit: () => void;
  composeText: ComposeFn;
  composeRule: ComposeFn;
  composeShape: ComposeFn;
  composeImage: ComposeFn;
  composeTable: ComposeFn;
  composeChart: ComposeFn;
  composeRow: ComposeFn;
  composeColumn: ComposeFn;
  composeGrid: ComposeFn;
  composeWrap: ComposeFn;
  composeFixed: ComposeFn;
  composeFr: ComposeFn;
  composeRepeat: ComposeFn;
};

let hooks: PresentationRecipeLayoutHooks | null = null;

export function wirePresentationRecipeLayoutHooks(
  next: PresentationRecipeLayoutHooks,
): void {
  hooks = next;
}

function requireHooks(): PresentationRecipeLayoutHooks {
  if (!hooks) {
    throw new Error(
      "presentation recipe layout hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function ensureComposeLayoutInit(): void {
  requireHooks().ensureComposeLayoutInit();
}
export function composeText(...args: any[]): any {
  return requireHooks().composeText(...args);
}
export function composeRule(...args: any[]): any {
  return requireHooks().composeRule(...args);
}
export function composeShape(...args: any[]): any {
  return requireHooks().composeShape(...args);
}
export function composeImage(...args: any[]): any {
  return requireHooks().composeImage(...args);
}
export function composeTable(...args: any[]): any {
  return requireHooks().composeTable(...args);
}
export function composeChart(...args: any[]): any {
  return requireHooks().composeChart(...args);
}
export function composeRow(...args: any[]): any {
  return requireHooks().composeRow(...args);
}
export function composeColumn(...args: any[]): any {
  return requireHooks().composeColumn(...args);
}
export function composeGrid(...args: any[]): any {
  return requireHooks().composeGrid(...args);
}
export function composeWrap(...args: any[]): any {
  return requireHooks().composeWrap(...args);
}
export function composeFixed(...args: any[]): any {
  return requireHooks().composeFixed(...args);
}
export function composeFr(...args: any[]): any {
  return requireHooks().composeFr(...args);
}
export function composeRepeat(...args: any[]): any {
  return requireHooks().composeRepeat(...args);
}

export const COMPOSE_AUTO_TRACK = "auto";

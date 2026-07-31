// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// GPU tearing debug compositor isolation toggles (bundle `pSu`/`mSu`/`dSu`,
// exports `D`/`O`/`k`). Open AppScope boundary — host binds real atoms at runtime.

import {
  appScopeAtom,
  createScopedSignal,
  ensureAppScopeInit,
  type AppScopeBrand,
} from "../runtime/app-scope-runtime";

export type GpuTearingDebugSettings = {
  disableBackdropBlur: boolean;
  disableCssMotion: boolean;
  disableScrollFadeMask: boolean;
  disableScrollFadeMaskAnimation: boolean;
  disableSquircles: boolean;
  forceOpaqueRendererBackground: boolean;
};

export type GpuTearingDebugSettingKey = keyof GpuTearingDebugSettings;

export const DEFAULT_GPU_TEARING_DEBUG_SETTINGS: GpuTearingDebugSettings = {
  disableBackdropBlur: false,
  disableCssMotion: false,
  disableScrollFadeMask: false,
  disableScrollFadeMaskAnimation: false,
  disableSquircles: false,
  forceOpaqueRendererBackground: false,
};

/** Minimal store surface used by `setGpuTearingDebugSetting` (bundle `dSu`). */
export type GpuTearingDebugStore = {
  set: (
    atom: unknown,
    updater: (prev: GpuTearingDebugSettings) => GpuTearingDebugSettings,
  ) => void;
};

/**
 * Scoped signal holding GPU tearing debug flags (bundle `pSu` / export `D`).
 * Created via `Ta(Q, defaults)` in the bundle.
 */
export let gpuTearingDebugSettingsAtom: {
  get: () => GpuTearingDebugSettings;
  set: (value: GpuTearingDebugSettings) => void;
  subscribe: (listener: () => void) => () => void;
} = createScopedSignal(appScopeAtom, {
  ...DEFAULT_GPU_TEARING_DEBUG_SETTINGS,
});

/** Bundle `mSu` / export `O` — ensure AppScope + atom defaults exist. */
export function ensureGpuTearingDebugSettingsInit(_scope: AppScopeBrand = appScopeAtom): void {
  ensureAppScopeInit();
  if (gpuTearingDebugSettingsAtom?.get == null) {
    gpuTearingDebugSettingsAtom = createScopedSignal(appScopeAtom, {
      ...DEFAULT_GPU_TEARING_DEBUG_SETTINGS,
    });
  }
}

/**
 * Patch one GPU tearing debug flag through the AppScope store
 * (bundle `dSu` / export `k`).
 */
export function setGpuTearingDebugSetting(store: GpuTearingDebugStore, key: GpuTearingDebugSettingKey, value: boolean): void {
  store.set(gpuTearingDebugSettingsAtom, (prev) => ({
    ...prev,
    [key]: value,
  }));
}

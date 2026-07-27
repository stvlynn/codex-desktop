// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Desktop native services bridge (bundle `gp` / export `Hut`).
// Wired from app-initial when Electron services finish loading.
// Wave AU: restore Hut→appServices (Wave AB intent); composer ESM stub was wrong.

export type HotkeyWindowHotkeysApi = {
  dismiss?: () => void;
  collapseToHome?: () => void | Promise<void>;
  open?: (args: { path?: string } & Record<string, unknown>) => void;
  setEnabled?: (enabled: boolean) => void;
  setHotkey?: (hotkey: string) => void | Promise<void>;
  homePointerInteractionChanged?: (args: unknown) => void;
  homeLayoutChanged?: (...args: unknown[]) => void;
  homeDragStart?: (args: unknown) => void;
  homeDragMove?: () => void;
  homeDragEnd?: () => void;
  transitionDone?: (args: unknown) => void;
};

export type CustomAvatarsApi = {
  load?: () => Promise<unknown>;
  loadAvatar?: (avatarId: string) => Promise<unknown>;
};

export type OwlFeaturesApi = {
  setFeatureNames?: (args: {
    disabledFeatureNames: string[];
    enabledFeatureNames: string[];
  }) => Promise<unknown>;
};

export type ComputerUseSettingsApi = {
  removeAppApproval?: (id: string) => PromiseLike<unknown> & object;
  setSoundMode?: (mode: string) => PromiseLike<unknown> & object;
  setLockedUseEnabled?: (enabled: boolean) => PromiseLike<unknown> & object;
  getAppApprovals?: () => PromiseLike<unknown> & object;
};

export type PrimaryRuntimeApi = {
  cancelInstall?: (args: { hostId: string }) => unknown;
  install?: (args: { hostId: string; release?: string }) => unknown;
};

export type DesktopServices = {
  hotkeyWindowHotkeys?: HotkeyWindowHotkeysApi;
  clientCoordination?: unknown;
  terminal?: unknown;
  devboxService?: unknown;
  customAvatars?: CustomAvatarsApi;
  workspaceFiles?: unknown;
  owlFeatures?: OwlFeaturesApi;
  computerUseSettings?: ComputerUseSettingsApi;
  primaryRuntime?: PrimaryRuntimeApi;
  realtimeVoiceRuntime?: unknown;
  realtimeVoicePresentation?: unknown;
  appActions?: unknown;
};

let services: DesktopServices | null = null;

/** Bundle `gp` — set after native services resolve. */
export function setDesktopServices(next: DesktopServices | null): void {
  services = next;
}

/** Read the current desktop services handle (may be null before boot). */
export function getDesktopServices(): DesktopServices | null {
  return services;
}

/**
 * Bundle `gp` / export `Hut` — live proxy matching the mutable services binding.
 * Property access always reads the current `getDesktopServices()` snapshot.
 */
export const appServices: DesktopServices = new Proxy({} as DesktopServices, {
  get(_target, prop) {
    const current = getDesktopServices();
    if (current == null) return undefined;
    const value = Reflect.get(current, prop, current);
    return typeof value === "function"
      ? (value as (...args: unknown[]) => unknown).bind(current)
      : value;
  },
});

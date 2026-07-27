// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `xsu`) / export `xn`.

import type { ComponentType, ReactElement, ReactNode } from "react";

export type OnboardingFullscreenFrameProps = {
  children?: ReactNode;
  fullBleed?: boolean;
  hideHeader?: boolean;
  showBrandIcon?: boolean;
};

export type OnboardingFullscreenFramePeers = {
  usePlatform: () => { platform: string };
  cx: (...args: unknown[]) => string;
  BrandIcon: ComponentType<Record<string, unknown>>;
  PlatformGate: ComponentType<Record<string, unknown>>;
};

let peers: OnboardingFullscreenFramePeers | null = null;

/** Wire OnboardingFullscreenFrame peers once companions land. */
export function setOnboardingFullscreenFramePeers(
  next: OnboardingFullscreenFramePeers,
): void {
  peers = next;
}

/**
 * Bundle export `xn` / internal `xsu`.
 * Fullscreen onboarding chrome with optional brand / drag header.
 */
export function OnboardingFullscreenFrame(
  props: OnboardingFullscreenFrameProps,
): ReactElement {
  if (peers == null) {
    throw new Error("OnboardingFullscreenFrame peers are not configured");
  }
  const fullBleed = props.fullBleed ?? false;
  const hideHeader = props.hideHeader ?? false;
  const showBrandIcon = props.showBrandIcon ?? false;
  const { platform } = peers.usePlatform();
  const showDragChrome = !hideHeader && (platform !== "windows" || fullBleed);
  const { BrandIcon, PlatformGate, cx } = peers;
  const contentClass = fullBleed
    ? "fixed inset-0"
    : cx(
        "fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8",
        showDragChrome ? "top-toolbar-sm pt-2" : "top-0 pt-8",
      );
  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-token-bg-primary electron:bg-transparent" />
      <PlatformGate browser={true} electron={true}>
        {showDragChrome && !showBrandIcon ? (
          <div className="draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none" />
        ) : null}
        {showBrandIcon ? (
          <div className="draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none">
            <BrandIcon
              aria-hidden="true"
              className="pointer-events-none size-6 text-token-foreground"
            />
          </div>
        ) : null}
        <div className={contentClass}>{props.children}</div>
      </PlatformGate>
    </div>
  );
}

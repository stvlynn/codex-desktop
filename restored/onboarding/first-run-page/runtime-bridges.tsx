// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// Local bridges for first-run deps whose IMPORT_MAP targets are init-only,
// mis-mapped, or still peer-gated stubs.

import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react";

import { PlusIcon } from "../../icons/plus-icon";
import { Button, type ButtonProps } from "../../ui/button";

export type OnboardingCodePreviewProps = {
  language?: string;
  content?: string;
  showActionBar?: boolean;
  showStickyRightContent?: boolean;
  wrapperClassName?: string;
  codeContainerClassName?: string;
  shouldWrapCode?: boolean;
};

/**
 * Bundle export `OR` — code preview used on the TODO slide.
 * exportSources wrongly maps OR → isIndeterminate; call sites pass language/content.
 */
export function OnboardingCodePreview({
  content = "",
  wrapperClassName,
  codeContainerClassName,
  shouldWrapCode,
}: OnboardingCodePreviewProps): ReactElement {
  return (
    <pre
      className={wrapperClassName}
      data-onboarding-code-preview=""
      data-wrap={shouldWrapCode ? "true" : undefined}
    >
      <code className={codeContainerClassName}>{content}</code>
    </pre>
  );
}

/** Bundle `but` — esmInit-only side effect (not the Button component / `yut`). */
export function ensureFirstRunButtonInit(): void {}

/** Bundle `Fd` — init-only; real bindDeferredUiFd throws without peers. */
export function ensureDeferredUiFdInit(): void {}

/** Bundle `kR` — init-only. */
export function ensureDeferredUiKRInit(): void {}

/** Bundle `qG` — init-only. */
export function ensureDeferredUiqGInit(): void {}

/** Bundle `WD` — init-only. */
export function ensureDeferredUiWDInit(): void {}

/** Bundle `Flt` — init-only; bindApplySvg throws without peers. */
export function ensureApplySvgInit(): void {}

export type ComposerPlusButtonProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Bundle `wlt` call sites pass Button props around PlusIcon SVG.
 * exportSources maps wlt → PlusIcon (SVG only); compose Button + icon here.
 */
export function ComposerPlusButton({
  children,
  ...props
}: ComposerPlusButtonProps): ReactElement {
  return (
    <Button {...props}>{children ?? <PlusIcon className="size-4" />}</Button>
  );
}

export type AsciiEngineControls = {
  columns: number;
  rows: number;
  lines: string[];
};

/** Soft ascii engine until hooks/use-ascii-engine peers land. */
export function useAsciiEngine(_args: {
  initialColumns?: number;
  initialRows?: number;
  initialMode?: string;
  preferredVideoKeyword?: string;
}): AsciiEngineControls {
  return { columns: 0, rows: 0, lines: [] };
}

export type AsciiEngineViewProps = {
  lines?: string[];
  columns?: number;
  rows?: number;
  scale?: number;
  autoCover?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Soft ascii backdrop view. */
export function AsciiEngineView(_props: AsciiEngineViewProps): ReactElement {
  return (
    <div aria-hidden data-ascii-engine-view="" className="h-full w-full" />
  );
}

export function ensureAsciiEngineViewInit(): void {}
export function ensureAsciiEngineInit(): void {}

/**
 * Soft auth method until AuthProvider peers land on hooks/use-auth.
 * Real `useAuth()` throws without peers — do not call it from this page.
 */
export function useFirstRunAuthMethod(): string | undefined {
  return undefined;
}

/**
 * Soft wrapper for set-global-state (`Yut` / readLoginRouteQuerySnapshot).
 * Peers may be unwired; first-run accept must not hard-crash the NUX shell.
 */
export async function setDesktopGlobalState(
  scope: unknown,
  key: unknown,
  value: unknown,
): Promise<void> {
  try {
    const { readLoginRouteQuerySnapshot } =
      await import("../read-login-route-query-snapshot");
    await readLoginRouteQuerySnapshot(
      scope as {
        query: {
          snapshot: (
            cp: unknown,
            key: unknown,
          ) => {
            cancel: () => Promise<void>;
            getData: () => unknown;
            setData: (next: unknown) => void;
            invalidate: () => Promise<void>;
            queryKey: unknown;
          };
        };
      },
      key,
      value,
    );
  } catch {
    // Peers / host bridge not configured yet.
  }
}

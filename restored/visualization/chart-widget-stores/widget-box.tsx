// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Widget Box (bundle chartWidgetStoresD + binding1249/1250).

import {
  createElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";

import { useWidgetContext } from "./widget-context";
import { useResolveWidgetAction } from "./use-resolve-widget-action";
import { classNames } from "./widget-class-names";
import {
  BOX_CLASS_NAMES,
  BOX_VISIBILITY_THRESHOLD,
  resolveBackgroundCss,
  toAspectRatioCss,
  toBorderStyle,
  toMarginStyle,
  toPaddingStyle,
  toCssVars,
  toRadiusStyle,
  toSpacingCss,
  type AspectRatioInput,
  type BorderInput,
  type RadiusInput,
  type SpacingInput,
} from "./widget-style-helpers";
import type { ThemeColorInput } from "./chart-theme-colors";

function useEventCallback<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
): (...args: TArgs) => void {
  const ref = useRef(fn);
  ref.current = fn;
  return useCallback((...args: TArgs) => {
    ref.current(...args);
  }, []);
}

function assignRef<T>(ref: Ref<T> | undefined, value: T | null): void {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  if (ref && typeof ref === "object") {
    (ref as { current: T | null }).current = value;
  }
}

/** Fire `onAction` once when `node` intersects the viewport. */
function useOnceVisible(
  node: Element | null,
  onVisible: (() => void) | undefined,
): void {
  const fire = useEventCallback(onVisible ?? (() => {}));
  const firedRef = useRef(false);
  useEffect(() => {
    if (
      !node ||
      !onVisible ||
      firedRef.current ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          firedRef.current ||
          !entries.some(
            (entry) =>
              entry.isIntersecting &&
              entry.intersectionRatio >= BOX_VISIBILITY_THRESHOLD,
          )
        ) {
          return;
        }
        firedRef.current = true;
        observer.disconnect();
        fire();
      },
      { threshold: BOX_VISIBILITY_THRESHOLD },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [fire, node, onVisible]);
}

function useVisibleActionRef(
  onVisibleAction: unknown,
): (node: Element | null) => void {
  const [node, setNode] = useState<Element | null>(null);
  const { onAction } = useWidgetContext();
  const resolveAction = useResolveWidgetAction();
  const fire = useEventCallback(() => {
    const action = resolveAction(onVisibleAction);
    if (action) {
      onAction({
        ...(action as object),
        cause: "system",
      });
    }
  });
  useOnceVisible(node, onVisibleAction ? fire : undefined);
  return setNode;
}

export type WidgetBoxProps = {
  direction?: "row" | "col" | string;
  align?: string;
  size?: string | number;
  minSize?: string | number;
  maxSize?: string | number;
  height?: string | number;
  width?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  flex?: string | number;
  justify?: string;
  wrap?: string | boolean;
  padding?: SpacingInput;
  margin?: SpacingInput;
  radius?: RadiusInput;
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  children?: ReactNode;
  border?: BorderInput;
  background?: ThemeColorInput;
  hoverBackground?: ThemeColorInput;
  aspectRatio?: AspectRatioInput;
  as?: string;
  className?: string;
  style?: CSSProperties;
  flush?: boolean;
  clip?: boolean;
  scrollable?: boolean;
  theme?: string;
  boxRef?: Ref<Element>;
  ref?: Ref<Element>;
  onVisibleAction?: unknown;
  [key: string]: unknown;
};

/**
 * Layout Box used by Chart chrome (`data-w-*` attrs + tokenized styles).
 * Bundle binding1249.
 */
export function WidgetBox({
  direction = "col",
  align,
  size,
  minSize,
  maxSize,
  height = size,
  width = size,
  minHeight = minSize,
  minWidth = minSize,
  maxHeight = maxSize,
  maxWidth = maxSize,
  flex,
  justify,
  wrap,
  padding,
  margin,
  radius,
  gap,
  rowGap,
  columnGap,
  children,
  border,
  background,
  hoverBackground,
  aspectRatio,
  as: asTag,
  className,
  style,
  flush,
  clip,
  scrollable,
  theme,
  boxRef,
  ref,
  onVisibleAction: _onVisibleAction,
  ...rest
}: WidgetBoxProps): ReactNode {
  const { theme: contextTheme } = useWidgetContext();
  const locksFlexShrink =
    (direction === "row" && !!width) || (direction === "col" && !!height);
  const resolvedTheme = String(theme ?? contextTheme ?? "light");
  const backgroundCss = resolveBackgroundCss(resolvedTheme, background);
  const hoverBackgroundCss = resolveBackgroundCss(
    resolvedTheme,
    hoverBackground,
  );

  return createElement(
    (asTag ?? "div") as string,
    {
      ref: ref ?? boxRef,
      className: classNames(BOX_CLASS_NAMES.Box, className),
      "data-w-direction": direction,
      "data-w-auto-spacing":
        gap == null && rowGap == null && columnGap == null ? "" : undefined,
      "data-w-flush": flush ? "" : undefined,
      "data-w-clip": clip ? "" : undefined,
      "data-w-scrollable": scrollable ? "" : undefined,
      "data-w-hover-background": hoverBackgroundCss ? "" : undefined,
      "data-w-align": align,
      "data-w-justify": justify,
      "data-w-wrap": wrap,
      "data-w-has-height": height || minHeight ? "" : undefined,
      "data-w-has-width": width || minWidth ? "" : undefined,
      style: {
        ...toCssVars({
          "smoothing-background-color": backgroundCss,
          "box-hover-background-color": hoverBackgroundCss,
        }),
        ...toMarginStyle(margin),
        ...toPaddingStyle(padding),
        ...toRadiusStyle(radius),
        ...toBorderStyle(resolvedTheme, border),
        height,
        width,
        minHeight,
        minWidth,
        maxHeight,
        maxWidth,
        gap: toSpacingCss(gap),
        ...(rowGap == null ? {} : { rowGap: toSpacingCss(rowGap) }),
        ...(columnGap == null ? {} : { columnGap: toSpacingCss(columnGap) }),
        flex,
        flexShrink: locksFlexShrink ? "0" : undefined,
        background: backgroundCss,
        aspectRatio: toAspectRatioCss(aspectRatio),
        ...style,
      },
      ...rest,
    },
    children,
  );
}

/**
 * Box that merges `boxRef`/`ref` and fires `onVisibleAction` once in view.
 * Bundle binding1250.
 */
export function WidgetBoxWithVisibleAction(props: WidgetBoxProps): ReactNode {
  const setVisibleNode = useVisibleActionRef(props.onVisibleAction);
  const combinedRef = useCallback(
    (node: Element | null) => {
      assignRef(props.boxRef, node);
      assignRef(props.ref, node);
      setVisibleNode(node);
    },
    [props.boxRef, props.ref, setVisibleNode],
  );
  return createElement(WidgetBox, {
    ...props,
    boxRef: undefined,
    ref: combinedRef,
  });
}

/**
 * Public Box entry — routes to the visibility wrapper when needed.
 * Bundle export `chartWidgetStoresD`.
 */
export function WidgetBoxRoot(props: WidgetBoxProps): ReactNode {
  return props.onVisibleAction
    ? createElement(WidgetBoxWithVisibleAction, {
        ...props,
        onVisibleAction: props.onVisibleAction,
      })
    : createElement(WidgetBox, props);
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { WidgetBoxRoot as chartWidgetStoresD };

export function ensureWidgetBoxInit(): void {}

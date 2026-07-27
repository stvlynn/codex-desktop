// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Spinning icon indicator that respects prefers-reduced-motion (bundle `jp`).

import {
  useState,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import { cx } from "./cx";
import { DefaultSpinnerIcon } from "./default-spinner-icon";

export type SpinnerProps<T extends ElementType = "div"> = {
  as?: T;
  Icon?: ComponentType<{ className?: string }>;
  className?: string;
  containerClassName?: string;
  animationDurationMs?: number;
} & Omit<
  ComponentPropsWithoutRef<T>,
  | "as"
  | "Icon"
  | "className"
  | "containerClassName"
  | "animationDurationMs"
  | "children"
>;

function randomAnimationDelayMs(): string {
  return `-${Date.now() % 1000}ms`;
}

/**
 * Inline spinner. Skips `animate-spin` when reduced motion is active
 * (bundle `jp` / export `xut`).
 */
export function Spinner<T extends ElementType = "div">({
  as,
  Icon = DefaultSpinnerIcon,
  className,
  containerClassName,
  animationDurationMs,
  ...rest
}: SpinnerProps<T>): ReactNode {
  const Component = (as ?? "div") as ElementType;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animationDelay] = useState(randomAnimationDelayMs);
  const animationDuration =
    animationDurationMs == null ? undefined : `${animationDurationMs}ms`;

  const containerClass = cx(
    !prefersReducedMotion && "animate-spin",
    "inline-flex h-fit w-fit items-center justify-center leading-none contain-layout contain-paint contain-style",
    containerClassName,
  );

  const style: CSSProperties = {
    animationDelay,
    animationDuration,
  };

  return (
    <Component className={containerClass} style={style} {...rest}>
      <Icon className={className} />
    </Component>
  );
}

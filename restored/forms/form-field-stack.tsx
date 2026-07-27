// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `SDr`) / export `W$`.

import type { ReactElement, ReactNode } from "react";

export type FormFieldStackProps = {
  children?: ReactNode;
  className?: string;
};

export type FormFieldStackPeers = {
  isDebug: () => boolean;
  cn: (...parts: unknown[]) => string;
  debugClass: unknown;
  DebugMarker: (props: { name: string }) => ReactNode;
};

let peers: FormFieldStackPeers | null = null;

/** Wire FormFieldStack peers once companions land. */
export function setFormFieldStackPeers(next: FormFieldStackPeers): void {
  peers = next;
}

/**
 * Bundle export `W$` / internal `SDr`.
 * Stack form fields with optional debug field-stack marker.
 */
export function FormFieldStack(props: FormFieldStackProps): ReactElement {
  if (peers == null) {
    throw new Error("FormFieldStack peers are not configured");
  }
  const { children, className } = props;
  const debug = peers.isDebug();
  const stackedClass = peers.cn(
    "flex flex-col gap-2",
    debug && peers.debugClass,
    className,
  );
  const marker = debug ? peers.DebugMarker({ name: "FieldStack" }) : null;
  return (
    <div className={stackedClass}>
      {marker}
      {children}
    </div>
  );
}

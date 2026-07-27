// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Lda` / export `mL` — render-prop children with a scoped store setter.

import type { ReactNode } from "react";

type Setter = (value: unknown) => void;

let useScope: (() => unknown) | null = null;
let bindSetter: ((scope: unknown, atom: unknown) => Setter) | null = null;
let targetAtom: unknown = null;

export function setStoreSetterChildrenDeps(args: {
  useScope: () => unknown;
  bindSetter: (scope: unknown, atom: unknown) => Setter;
  targetAtom: unknown;
}): void {
  useScope = args.useScope;
  bindSetter = args.bindSetter;
  targetAtom = args.targetAtom;
}

export type StoreSetterChildrenProps = {
  children: (setValue: Setter) => ReactNode;
};

export function StoreSetterChildren({
  children,
}: StoreSetterChildrenProps): ReactNode {
  if (useScope == null || bindSetter == null) {
    throw new Error("StoreSetterChildren deps have not been configured");
  }
  const scope = useScope();
  const setValue = bindSetter(scope, targetAtom);
  return <>{children(setValue)}</>;
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OFs` / export `z_`. Row / string splitter left injectable.

import type { ComponentType, ReactNode } from "react";
import { Fragment } from "react";

type RowProps = { className?: string; label: ReactNode; children?: ReactNode };
type StringChildrenProps = { children: string };

let DetailRow: ComponentType<RowProps> | null = null;
let splitStringChildren: ((value: string) => ReactNode) | null = null;

/** Wire detail row (`wFs` in the bundle). */
export function setDetailDefinitionRow(impl: ComponentType<RowProps>): void {
  DetailRow = impl;
}

/** Wire string→nodes splitter (`kFs`/`jFs`/`AFs` in the bundle). */
export function setDetailStringChildrenRenderer(
  fn: (value: string) => ReactNode,
): void {
  splitStringChildren = fn;
}

export type DetailDefinitionListProps = {
  label: ReactNode;
  children?: ReactNode;
};

export function DetailDefinitionList({
  label,
  children,
}: DetailDefinitionListProps): ReactNode {
  if (DetailRow == null) {
    throw new Error("DetailDefinitionList row has not been configured");
  }
  const body =
    typeof children === "string"
      ? (splitStringChildren?.(children) ?? children)
      : children;
  return (
    <dl className="@container">
      <DetailRow
        className="[--detail-row-font-size:var(--codex-chat-font-size)]"
        label={label}
      >
        {typeof body === "string" ? <Fragment>{body}</Fragment> : body}
      </DetailRow>
    </dl>
  );
}

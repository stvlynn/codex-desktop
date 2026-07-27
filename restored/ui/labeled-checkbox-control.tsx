// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `ysu`) / export `yn`.

import type { ReactElement, ReactNode } from "react";

export type LabeledCheckboxControlProps = Record<string, unknown>;

export type LabeledCheckboxControlPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  Checkbox: unknown;
  Label: unknown;
};

let peers: LabeledCheckboxControlPeers | null = null;

/** Wire LabeledCheckboxControl peers once companions land. */
export function setLabeledCheckboxControlPeers(
  next: LabeledCheckboxControlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yn` / internal `ysu`.
 * Checkbox control with label, description, and optional trailing control.
 */
export function LabeledCheckboxControl(props: {
  checkboxId?: string;
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  control?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
}): ReactElement {
  if (peers == null) {
    throw new Error("LabeledCheckboxControl peers are not configured");
  }
  const id = props.checkboxId ?? "labeled-checkbox";
  return peers.createElement("div", {
    children: [
      peers.createElement(peers.Checkbox, {
        key: "checkbox",
        id,
        checked: props.checked,
        disabled: props.disabled,
        onCheckedChange: props.onCheckedChange,
      }),
      peers.createElement(peers.Label, {
        key: "label",
        htmlFor: id,
        children: props.label,
      }),
      props.description,
      props.control,
    ],
  }) as ReactElement;
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave CF — string children or FormattedMessage spread. Bundle `Eos` / export `VS`.
// extractFn(internal) verified; Stage-3 real for string-or-message children.

import type { ReactElement, ReactNode } from "react";

export type IntlMessageDescriptor = {
  id: string;
  defaultMessage?: string;
  description?: string;
  values?: Record<string, unknown>;
};

export type StringOrIntlMessage = string | IntlMessageDescriptor;

/**
 * Render plain string children, otherwise treat the value as an intl message descriptor.
 * Full FormattedMessage wiring stays deferred; consumers may bind a richer impl later.
 */
let impl: ((value: StringOrIntlMessage) => ReactNode) | null = null;

export function bindRenderStringOrIntlMessage(
  next: (value: StringOrIntlMessage) => ReactNode,
): void {
  impl = next;
}

export function renderStringOrIntlMessage(
  value: StringOrIntlMessage,
): ReactElement {
  if (impl != null) return impl(value) as ReactElement;
  if (typeof value === "string") {
    return value as unknown as ReactElement;
  }
  // Fallback: expose descriptor id until FormattedMessage bind lands.
  return String(value.id) as unknown as ReactElement;
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `P8o` / export `sT`.

import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { selectedTextAttachmentsMessages as msgs } from "./selected-text-attachments-messages";

export type SelectedTextAttachmentsProps = {
  selections: Array<{ id?: string; text?: string; [key: string]: unknown }>;
  onRemove: (selection: unknown) => void;
};

export function SelectedTextAttachments({
  selections,
  onRemove,
}: SelectedTextAttachmentsProps): ReactNode {
  if (selections.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <FormattedMessage
        {...msgs.numSelections}
        values={{ count: selections.length }}
      />
      {selections.map((selection, index) => (
        <button
          key={selection.id ?? index}
          type="button"
          aria-label="Remove selection"
          onClick={() => onRemove(selection)}
        >
          <FormattedMessage {...msgs.removeAriaLabel} />
        </button>
      ))}
    </div>
  );
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `SWl`) / export `Ga`.
// Connector-scope / CRUD peers bind via setChatGptProjectDetailsDialogParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type ChatGptProjectDetailsDialogProps = {
  onOpenChange?: (open: boolean) => void;
  project?: {
    title?: ReactNode;
    name?: string;
    id?: string;
    [key: string]: unknown;
  } | null;
  projectCrudStatus?: unknown;
  children?: ReactNode;
  [key: string]: unknown;
};

export type ChatGptProjectDetailsDialogParts = {
  render: (props: ChatGptProjectDetailsDialogProps) => ReactNode;
};

let parts: ChatGptProjectDetailsDialogParts | null = null;

/** Wire full project details / connector scopes once companions land. */
export function setChatGptProjectDetailsDialogParts(
  next: ChatGptProjectDetailsDialogParts,
): void {
  parts = next;
}

/** @deprecated Prefer setChatGptProjectDetailsDialogParts */
export function bindChatGptProjectDetailsDialog(
  next: (props: ChatGptProjectDetailsDialogProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `Ga` / internal `SWl`.
 * ChatGPT project details / connector scopes dialog scaffold.
 */
export function ChatGptProjectDetailsDialog(
  props: ChatGptProjectDetailsDialogProps,
): ReactElement {
  if (parts != null) return parts.render(props) as ReactElement;
  const { project, onOpenChange, children } = props;
  const title = project?.title ?? project?.name ?? "Project";
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={() => onOpenChange?.(false)}
    >
      <div
        className="max-h-[calc(100vh-6rem)] min-h-0 w-[min(520px,92vw)] gap-4 overflow-hidden rounded-2xl bg-token-dropdown-background p-4 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sr-only">
          <FormattedMessage
            id="chatgptConversations.project.detailsTitle"
            defaultMessage="Project details"
            description="Screen-reader title for ChatGPT project details dialog"
          />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {children}
      </div>
    </div>
  );
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `t1a` / export `Aj` — action / edit overlay for a text selection.

import {
  useState,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { selectedTextOverlayMessages } from "./selected-text-overlay-messages";

export type SelectedTextOverlayMode =
  | "actions"
  | "actions-focused"
  | "edit"
  | "pending";

export type SelectedTextOverlayResume = {
  mode?: SelectedTextOverlayMode;
  instruction?: string;
};

export type SelectedTextOverlayProps = {
  conversationTerminology?: "task" | "chat" | string;
  onAddSelectedText?: (selectedText: string) => void;
  onCommentSelectedText?: () => void;
  onEditModeChange?: (editing: boolean) => void;
  onEditSelectedText?: (
    instruction: string,
  ) => Promise<"retry" | "done" | string | void>;
  onOpenQuickChat?: (selectedText: string) => void;
  onOpenSideChat?: (selectedText: string) => void;
  resume?: SelectedTextOverlayResume | null;
  selectedText: string;
};

export type SelectedTextOverlayDeps = {
  /** Bundle `r1a` — compact overlay action button. */
  ActionButton: (props: {
    autoFocus?: boolean;
    onClick: () => void;
    children: ReactNode;
  }) => ReactNode;
  /** Bundle `Np` — primary submit control. */
  SubmitButton: (props: {
    "aria-label": string;
    color?: string;
    size?: string;
    type?: "submit" | "button";
    uniform?: boolean;
    children: ReactNode;
  }) => ReactNode;
  /** Bundle `ah` — submit glyph. */
  SubmitIcon: (props: {
    "aria-hidden"?: string | boolean;
    className?: string;
  }) => ReactNode;
};

let deps: SelectedTextOverlayDeps | null = null;

export function setSelectedTextOverlayDeps(
  next: SelectedTextOverlayDeps,
): void {
  deps = next;
}

function requireDeps(): SelectedTextOverlayDeps {
  if (deps == null) {
    throw new Error("SelectedTextOverlay deps have not been configured");
  }
  return deps;
}

function clearSelectionRanges(): void {
  window.getSelection()?.removeAllRanges();
}

function stopOverlayMouseDown(event: MouseEvent): void {
  event.preventDefault();
}

/** Bundle `t1a` / export `Aj`. */
export function SelectedTextOverlay({
  conversationTerminology = "task",
  onAddSelectedText,
  onCommentSelectedText,
  onEditModeChange,
  onEditSelectedText,
  onOpenQuickChat,
  onOpenSideChat,
  resume,
  selectedText,
}: SelectedTextOverlayProps): ReactNode {
  const { ActionButton, SubmitButton, SubmitIcon } = requireDeps();
  const intl = useIntl();
  const [instruction, setInstruction] = useState(
    resume?.mode === "edit" ? (resume.instruction ?? "") : "",
  );
  const [mode, setMode] = useState<SelectedTextOverlayMode>(
    resume?.mode ?? "actions",
  );

  if (mode === "pending") return null;

  if (mode === "edit" && onEditSelectedText != null) {
    const onKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
      event.stopPropagation();
      if (event.key === "Escape") {
        event.preventDefault();
        onEditModeChange?.(false);
        setMode("actions-focused");
      }
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (instruction.trim().length === 0) return;
      setMode("pending");
      void onEditSelectedText(instruction).then((result) => {
        if (result === "retry") {
          onEditModeChange?.(false);
          setMode("actions-focused");
        }
      });
    };
    return (
      <form
        className="pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-token-border bg-token-main-surface-primary p-1 pl-3.5 font-sans shadow-lg"
        onKeyDown={onKeyDown}
        onSubmit={onSubmit}
      >
        <input
          aria-label={intl.formatMessage(selectedTextOverlayMessages.editInput)}
          autoComplete="off"
          autoFocus
          className="min-w-0 flex-1 bg-transparent text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
          placeholder={intl.formatMessage(
            selectedTextOverlayMessages.editPlaceholder,
          )}
          required
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
        />
        <SubmitButton
          aria-label={intl.formatMessage(
            selectedTextOverlayMessages.editSubmit,
          )}
          color="primary"
          size="composerSm"
          type="submit"
          uniform
        >
          <SubmitIcon aria-hidden="true" className="icon-2xs" />
        </SubmitButton>
      </form>
    );
  }

  const addLabel =
    conversationTerminology === "chat" ? (
      <FormattedMessage {...selectedTextOverlayMessages.addToChat} />
    ) : (
      <FormattedMessage {...selectedTextOverlayMessages.addToCodex} />
    );

  return (
    <div
      className="pointer-events-auto flex w-fit max-w-full overflow-hidden rounded-lg border border-token-border/70 bg-token-dropdown-background/90 shadow-lg backdrop-blur-sm"
      onMouseDown={stopOverlayMouseDown}
    >
      {onAddSelectedText == null ? null : (
        <ActionButton
          onClick={() => {
            clearSelectionRanges();
            onAddSelectedText(selectedText);
          }}
        >
          {addLabel}
        </ActionButton>
      )}
      {onOpenQuickChat == null ? null : (
        <ActionButton
          onClick={() => {
            clearSelectionRanges();
            onOpenQuickChat(selectedText);
          }}
        >
          <FormattedMessage {...selectedTextOverlayMessages.openQuickChat} />
        </ActionButton>
      )}
      {onOpenSideChat == null ? null : (
        <ActionButton
          onClick={() => {
            clearSelectionRanges();
            onOpenSideChat(selectedText);
          }}
        >
          <FormattedMessage {...selectedTextOverlayMessages.openSideChat} />
        </ActionButton>
      )}
      {onCommentSelectedText == null ? null : (
        <ActionButton
          onClick={() => {
            clearSelectionRanges();
            onCommentSelectedText();
          }}
        >
          <FormattedMessage {...selectedTextOverlayMessages.comment} />
        </ActionButton>
      )}
      {onEditSelectedText == null ? null : (
        <ActionButton
          autoFocus={mode === "actions-focused"}
          onClick={() => {
            onEditModeChange?.(true);
            setMode("edit");
          }}
        >
          <FormattedMessage
            id="selectedTextOverlay.edit"
            defaultMessage="Edit"
            description="Button label for editing currently selected text with a model"
          />
        </ActionButton>
      )}
    </div>
  );
}

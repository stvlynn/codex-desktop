// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `r7l`) / export `Cr`.
// Toolbar button / spinner / safe-area peers bind via setBrowserWebviewPanelParts.

import {
  createElement,
  type ComponentType,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";
import { useNavigate } from "../boundaries/react-router-navigation";
import { cx } from "../ui/cx";

export type BrowserWebviewPanelProps = {
  isLoading?: boolean;
  partition?: string;
  src?: string;
  webviewRef?: Ref<unknown>;
};

export type BrowserWebviewPanelParts = {
  BackIcon: ComponentType<{ className?: string }>;
  LoadingIcon: ComponentType<Record<string, unknown>>;
  Spinner: ComponentType<{ Icon: ComponentType<Record<string, unknown>> }>;
  ToolbarButton: ComponentType<{
    "aria-label"?: string;
    children?: ReactNode;
    className?: string;
    color?: string;
    onClick?: () => void;
    size?: string;
  }>;
  formatMessage: (descriptor: {
    defaultMessage: string;
    description?: string;
    id: string;
  }) => string;
  useSafeAreaInsets: () => { left: number };
};

let parts: BrowserWebviewPanelParts | null = null;

/** Wire toolbar/spinner/safe-area/i18n peers once companions land. */
export function setBrowserWebviewPanelParts(
  next: BrowserWebviewPanelParts,
): void {
  parts = next;
}

/**
 * Bundle export `Cr` / internal `r7l`.
 * Authenticated ChatGPT webview panel with back-to-ChatGPT toolbar.
 */
export function BrowserWebviewPanel(
  props: BrowserWebviewPanelProps,
): ReactElement {
  const { isLoading, partition, src, webviewRef } = props;
  if (parts == null) {
    throw new Error("BrowserWebviewPanel parts are not configured");
  }
  const navigate = useNavigate();
  const insets = parts.useSafeAreaInsets();
  const backLabel = parts.formatMessage({
    id: "checkout.webview.backToChatGpt",
    defaultMessage: "Back to ChatGPT",
    description:
      "Button label in an authenticated ChatGPT webview toolbar that returns the user to ChatGPT in the Codex app",
  });
  const headerStyle: CSSProperties = {
    paddingInlineStart: Math.max(insets.left, 8),
  };
  const onBack = (): void => {
    navigate("/", { replace: true });
  };
  const BackIcon = parts.BackIcon;
  const webviewClassName = cx(
    "block h-full w-full bg-token-main-surface-primary",
    isLoading && "invisible",
  );
  return (
    <main className="no-drag flex h-full min-h-0 flex-col overflow-hidden bg-token-main-surface-primary">
      <header
        className="draggable flex h-toolbar w-full shrink-0 items-center border-b border-token-border pe-2"
        style={headerStyle}
      >
        <parts.ToolbarButton
          aria-label={backLabel}
          className="ms-3"
          color="ghost"
          size="toolbar"
          onClick={onBack}
        >
          <BackIcon className="icon-xs" />
          {backLabel}
        </parts.ToolbarButton>
      </header>
      <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-token-main-surface-primary">
            <parts.Spinner Icon={parts.LoadingIcon} />
          </div>
        ) : null}
        {createElement("webview", {
          className: webviewClassName,
          partition,
          ref: webviewRef,
          src,
        })}
      </div>
    </main>
  );
}

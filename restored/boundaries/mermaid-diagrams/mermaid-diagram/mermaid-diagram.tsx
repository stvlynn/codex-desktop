// Restored from ref/webview/assets/mermaid-diagram-BzeSLuAD.js
// Codex markdown Mermaid diagram React host — thin wrapper over mermaid-core.

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { useIntl } from "../../../i18n/use-intl";
import { MemoizedFormattedMessage } from "../../../i18n/memoized-formatted-message";
import { writeClipboardContents } from "../../../clipboard/write-clipboard-contents";
import { PanelWidthIcon } from "../../../icons/panel-width-icon";
import { CopyButton } from "../../../ui/copy-button";
import { OptionalTooltip } from "../../../ui/optional-tooltip";
import { Button } from "../../../ui/button";
import { cx } from "../../../ui/cx";
import { ImagePreviewDialog } from "../../../ui/image-preview-dialog";
import { MarkdownContentCssClass } from "../../../markdown/markdown-content-css-classes";
import { svgToDataUri } from "../../../utils/svg-to-data-uri";
import { initializeMermaidHost, renderMermaidSvg } from "./render-mermaid";
import type { MermaidDiagramProps, MermaidPreviewState } from "./types";

const DIAGRAM_FRAME_CLASS =
  "relative overflow-x-auto px-4 py-3 [&>svg]:h-auto [&>svg]:text-left";

export type { MermaidDiagramProps } from "./types";

export function MermaidDiagram({
  blockRef,
  code,
  isCodeFenceOpen = true,
  isDark = false,
  isVisible = true,
  onError,
  onRendered,
  renderKey,
}: MermaidDiagramProps) {
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement | null>(null);
  const renderGenerationRef = useRef(0);
  const [preview, setPreview] = useState<MermaidPreviewState | null>(null);
  const reactId = useId();
  const diagramDomId = useMemo(
    () => `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`,
    [reactId],
  );
  const copyText = useMemo(
    () => ["```mermaid", code, "```"].join("\n"),
    [code],
  );

  useEffect(() => {
    setPreview((current) =>
      current != null && current.renderKey !== renderKey ? null : current,
    );
  }, [renderKey]);

  const ariaLabel = intl.formatMessage({
    id: "mermaidDiagram.ariaLabel",
    defaultMessage: "Mermaid diagram",
    description: "ARIA label for rendered mermaid diagrams",
  });
  const expandLabel = intl.formatMessage({
    id: "mermaidDiagram.expand",
    defaultMessage: "Expand Mermaid diagram",
    description:
      "Accessible label for opening a Mermaid diagram in a zoomable preview",
  });

  const handleCopy = useCallback(
    (event: MouseEvent) => {
      void writeClipboardContents(copyText, event);
    },
    [copyText],
  );

  const handleExpand = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const svg = containerRef.current?.querySelector("svg");
      if (svg == null) return;
      expandButtonRef.current = event.currentTarget;
      const clone = svg.cloneNode(true) as SVGElement;
      setPreview({
        renderKey,
        src: svgToDataUri(new XMLSerializer().serializeToString(clone)),
      });
    },
    [renderKey],
  );

  useEffect(() => {
    if (!isCodeFenceOpen) return;
    const host = blockRef.current;
    const frame = containerRef.current;
    if (host == null || frame == null) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    const generation = ++renderGenerationRef.current;

    void (async () => {
      try {
        initializeMermaidHost({ host, isDark });
        const svg = await renderMermaidSvg(
          `${diagramDomId}-${generation}`,
          code,
        );
        if (cancelled || generation !== renderGenerationRef.current) return;
        if (svg.length === 0) {
          frame.replaceChildren();
          onError?.(renderKey);
          return;
        }
        frame.innerHTML = svg;
        frame.setAttribute("data-mermaid-diagram", "true");
        frame.setAttribute("data-mermaid-theme", isDark ? "dark" : "light");
        const height = frame.getBoundingClientRect().height;
        onRendered?.(renderKey, height);
        resizeObserver = new ResizeObserver(() => {
          onRendered?.(renderKey, frame.getBoundingClientRect().height);
        });
        resizeObserver.observe(frame);
      } catch {
        if (cancelled || generation !== renderGenerationRef.current) return;
        frame.replaceChildren();
        frame.removeAttribute("data-mermaid-diagram");
        frame.removeAttribute("data-mermaid-theme");
        onError?.(renderKey);
      }
    })();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
    };
  }, [
    blockRef,
    code,
    diagramDomId,
    isCodeFenceOpen,
    isDark,
    onError,
    onRendered,
    renderKey,
  ]);

  return (
    <div
      className="relative"
      data-markdown-copy="code-block"
      data-markdown-copy-text={copyText}
    >
      {isVisible ? (
        <div
          className="absolute top-2 right-2 z-10 flex gap-1"
          data-markdown-copy="exclude"
        >
          <OptionalTooltip tooltipContent={expandLabel}>
            <Button
              className={MarkdownContentCssClass.mermaidExpandButton}
              aria-label={expandLabel}
              aria-haspopup="dialog"
              color="ghost"
              size="icon"
              onClick={handleExpand}
            >
              <PanelWidthIcon className="icon-2xs" />
            </Button>
          </OptionalTooltip>
          <CopyButton
            iconClassName="icon-2xs"
            iconOnly={true}
            buttonText={intl.formatMessage({
              id: "mermaidDiagram.copySource",
              defaultMessage: "Copy mermaid",
              description:
                "Tooltip label for the copy button on rendered mermaid diagrams",
            })}
            onCopy={handleCopy}
          />
        </div>
      ) : null}
      <div
        ref={containerRef}
        className={cx(DIAGRAM_FRAME_CLASS, !isVisible && "invisible")}
        aria-hidden={!isVisible || undefined}
        aria-label={isVisible ? ariaLabel : undefined}
        role={isVisible ? "img" : undefined}
        tabIndex={-1}
      />
      {preview?.renderKey === renderKey ? (
        <ImagePreviewDialog
          src={preview.src}
          alt={ariaLabel}
          open={true}
          closeAriaLabel={intl.formatMessage({
            id: "mermaidDiagram.closePreview",
            defaultMessage: "Close Mermaid diagram preview",
            description:
              "Accessible label for closing the Mermaid diagram preview",
          })}
          dialogAriaLabel={intl.formatMessage({
            id: "mermaidDiagram.preview",
            defaultMessage: "Mermaid diagram preview",
            description:
              "Accessible label for the Mermaid diagram preview dialog",
          })}
          downloadAriaLabel={intl.formatMessage({
            id: "mermaidDiagram.download",
            defaultMessage: "Download Mermaid diagram",
            description: "Accessible label for downloading the Mermaid diagram",
          })}
          downloadFileName="mermaid-diagram.svg"
          imageDraggable={false}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            const button = expandButtonRef.current;
            if (
              button != null &&
              button.isConnected &&
              button.ownerDocument.defaultView?.getComputedStyle(button)
                .display !== "none"
            ) {
              button.focus();
              return;
            }
            containerRef.current?.focus();
          }}
          onOpenChange={(open) => {
            if (!open) setPreview(null);
          }}
        />
      ) : null}
      {isVisible ? (
        <>
          <span className="sr-only">
            <MemoizedFormattedMessage
              id="mermaidDiagram.originalCode"
              defaultMessage="Mermaid source code"
              description="Screen reader label for the hidden mermaid source code."
            />
          </span>
          <pre className="sr-only whitespace-pre-wrap">{code}</pre>
        </>
      ) : null}
    </div>
  );
}

export const MermaidDiagramRenderer = MermaidDiagram;

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Zoomable image preview dialog used by Mermaid expand (bundle `qpa` / export `nL`).
// Full bundled body (~21KB) stays in app-initial; this is the semantic surface
// mermaid-diagram needs (controlled open + download + focus restore).

import {
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

export type ImagePreviewDialogProps = {
  src: string;
  alt?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeAriaLabel?: string;
  dialogAriaLabel?: string;
  downloadAriaLabel?: string;
  downloadFileName?: string;
  downloadSrc?: string;
  imageDraggable?: boolean;
  onCloseAutoFocus?: (event: Event) => void;
  onDownload?: () => void;
  children?: ReactNode;
  [key: string]: unknown;
};

function triggerDownload(href: string, fileName: string): void {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = fileName;
  anchor.rel = "noopener";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
}

/**
 * Lightweight controlled image preview dialog.
 * Bundle `qpa` / export `nL`.
 */
export function ImagePreviewDialog({
  src,
  alt,
  open = false,
  onOpenChange,
  closeAriaLabel = "Close",
  dialogAriaLabel = "Image preview",
  downloadAriaLabel = "Download",
  downloadFileName = "image.svg",
  downloadSrc,
  imageDraggable = true,
  onCloseAutoFocus,
  onDownload,
}: ImagePreviewDialogProps): ReactElement | null {
  const dialogRef: RefObject<HTMLDialogElement | null> = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      return;
    }
    if (dialog.open) dialog.close();
  }, [open]);

  if (!open) return null;

  const handleClose = (event?: Event): void => {
    onOpenChange?.(false);
    if (event != null) onCloseAutoFocus?.(event);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={dialogAriaLabel}
      className="fixed inset-0 z-50 m-auto max-h-[90vh] max-w-[90vw] rounded-lg border border-token-border bg-token-main-surface-primary p-4 shadow-lg backdrop:bg-black/50"
      onClose={(event) => handleClose(event.nativeEvent)}
      onCancel={(event) => {
        event.preventDefault();
        handleClose(event.nativeEvent);
      }}
    >
      <div className="mb-3 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label={downloadAriaLabel}
          className="rounded px-2 py-1 text-sm text-token-description-foreground hover:bg-token-main-surface-secondary"
          onClick={() => {
            onDownload?.();
            triggerDownload(downloadSrc ?? src, downloadFileName);
          }}
        >
          {downloadAriaLabel}
        </button>
        <button
          type="button"
          aria-label={closeAriaLabel}
          className="rounded px-2 py-1 text-sm text-token-description-foreground hover:bg-token-main-surface-secondary"
          onClick={() => handleClose()}
        >
          {closeAriaLabel}
        </button>
      </div>
      <img
        src={src}
        alt={alt ?? ""}
        draggable={imageDraggable}
        className="max-h-[80vh] max-w-full object-contain"
      />
    </dialog>
  );
}

/** No-op Rolldown ESM init for related preview helpers (export `rL` / bundle `dma`). */
export function ensureImagePreviewDialogInit(): void {}

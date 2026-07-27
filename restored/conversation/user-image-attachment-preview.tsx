// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dnl` / export `rl`.

import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { codexLocalconversationUserImageAttachmentMessages as msgs } from "./codex-localconversation-user-image-attachment-messages";

export type UserImageAttachmentPreviewProps = {
  src?: string | null;
  conversationId?: string;
  alt?: string;
  imageAssetResolver?: (src: string) => string;
  initialPreviewSrc?: string | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onPreviousImage?: () => void;
  onNextImage?: () => void;
};

export function UserImageAttachmentPreview({
  src,
  alt,
  imageAssetResolver,
  initialPreviewSrc,
  open = false,
  onOpenChange,
}: UserImageAttachmentPreviewProps): ReactNode {
  if (!open) return null;
  const resolved =
    src == null
      ? (initialPreviewSrc ?? null)
      : (imageAssetResolver?.(src) ?? src);
  return (
    <div role="dialog" aria-modal="true">
      <button type="button" onClick={() => onOpenChange?.(false)}>
        <FormattedMessage {...msgs.closePreview} />
      </button>
      {resolved == null ? (
        <FormattedMessage {...msgs.failed} />
      ) : (
        <img alt={alt ?? ""} src={resolved} aria-label="Image attachment" />
      )}
    </div>
  );
}

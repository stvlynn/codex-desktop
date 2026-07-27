// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_9c` / export `hl`. Spinner impl / intl left injectable.

import type { ComponentType, ReactNode } from "react";
import { imageGenerationLoadingMessages } from "./image-generation-loading-messages";

type IntlLike = {
  formatMessage: (descriptor: {
    id: string;
    defaultMessage: string;
    description?: string;
  }) => string;
};

type SpinnerProps = { presentation?: string };

let useIntl: (() => IntlLike) | null = null;
let Spinner: ComponentType<SpinnerProps> | null = null;

export function setImageGenerationLoadingIntl(hook: () => IntlLike): void {
  useIntl = hook;
}
export function setImageGenerationLoadingSpinner(
  impl: ComponentType<SpinnerProps>,
): void {
  Spinner = impl;
}

export type ImageGenerationLoadingPlaceholderProps = {
  presentation?: "default" | string;
};

export function ImageGenerationLoadingPlaceholder({
  presentation = "default",
}: ImageGenerationLoadingPlaceholderProps): ReactNode {
  const intl = useIntl?.();
  const label =
    intl?.formatMessage(imageGenerationLoadingMessages.loadingLabel) ??
    "Generating image...";
  if (Spinner == null) {
    return <div role="status" aria-label={label} />;
  }
  return (
    <div role="status" aria-label={label}>
      <Spinner presentation={presentation} />
    </div>
  );
}

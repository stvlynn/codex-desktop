// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `Uis`) / export `aC`.
// Full carousel/preview peers bind via setVoicePickerPanelParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type VoicePickerVoice = {
  id?: string;
  name?: string;
  description?: string;
  [key: string]: unknown;
};

export type VoicePickerPanelProps = {
  initialVoice?: VoicePickerVoice | string | null;
  onVoiceChange?: (voice: VoicePickerVoice | string | null) => void;
  previewEnabled?: boolean;
  voices?: VoicePickerVoice[];
  children?: ReactNode;
  [key: string]: unknown;
};

export type VoicePickerPanelParts = {
  render: (props: VoicePickerPanelProps) => ReactNode;
};

let parts: VoicePickerPanelParts | null = null;

/** Wire full voice carousel / preview once companions land. */
export function setVoicePickerPanelParts(next: VoicePickerPanelParts): void {
  parts = next;
}

/** @deprecated Prefer setVoicePickerPanelParts */
export function bindVoicePickerPanel(
  next: (props: VoicePickerPanelProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `aC` / internal `Uis`.
 * Voice picker panel scaffold (initialVoice/onVoiceChange/voices/previewEnabled).
 */
export function VoicePickerPanel(props: VoicePickerPanelProps): ReactElement {
  if (parts != null) return parts.render(props) as ReactElement;
  const { voices = [], initialVoice, previewEnabled = false } = props;
  const selected =
    typeof initialVoice === "string"
      ? (voices.find((v) => v.id === initialVoice) ?? initialVoice)
      : initialVoice;
  const label =
    typeof selected === "object" && selected != null
      ? (selected.name ?? selected.id ?? "Voice")
      : (selected ?? "Voice");
  return (
    <div className="flex flex-col items-center gap-3 p-4 text-center">
      <div className="sr-only">
        <FormattedMessage
          id="settings.voice.picker.choose"
          defaultMessage="Choose a voice"
          description="Screen-reader title for the voice picker panel"
        />
      </div>
      <div className="text-xl font-semibold">{String(label)}</div>
      <div className="text-sm text-token-text-secondary">
        {voices.length === 0 ? (
          <FormattedMessage
            id="settings.voice.picker.empty"
            defaultMessage="No compatible voices are available"
            description="Message shown when no compatible realtime voices are available"
          />
        ) : previewEnabled ? (
          <FormattedMessage
            id="settings.voice.picker.previewReady"
            defaultMessage="{count} voices · preview enabled"
            description="Voice picker summary when preview is enabled"
            values={{ count: voices.length }}
          />
        ) : (
          <FormattedMessage
            id="settings.voice.picker.count"
            defaultMessage="{count} voices"
            description="Voice picker summary count"
            values={{ count: voices.length }}
          />
        )}
      </div>
    </div>
  );
}

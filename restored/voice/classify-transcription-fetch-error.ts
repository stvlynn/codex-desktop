// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Vit`) / export `Tct`.

export type ClassifyTranscriptionFetchErrorPeers = {
  HttpError: new (...args: unknown[]) => { status: number; message: string };
  rateLimitMessage: (error: {
    status: number;
    message: string;
  }) => { message: string } | null;
  messages: {
    connectionError: unknown;
    transcribeError: unknown;
    microphonePermissionDenied: unknown;
    microphoneMissing: unknown;
    microphoneUnavailable: unknown;
    unsupported: unknown;
    startError: unknown;
  };
};

let peers: ClassifyTranscriptionFetchErrorPeers | null = null;

/** Wire classifyTranscriptionFetchError peers once companions land. */
export function setClassifyTranscriptionFetchErrorPeers(
  next: ClassifyTranscriptionFetchErrorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Tct` / internal `Vit`.
 * Map transcription / microphone errors to user-facing retry copy.
 */
export type IntlLike = {
  formatMessage: (desc: unknown) => string;
};

export function classifyTranscriptionFetchError(
  intl: IntlLike,
  kind: string,
  error: unknown,
): { message: string; canRetry: boolean } {
  if (peers == null) {
    throw new Error("ClassifyTranscriptionFetchError peers are not configured");
  }
  if (kind === "transcription") {
    if (error instanceof peers.HttpError) {
      if (error.status === 429) {
        const limited = peers.rateLimitMessage(error);
        if (limited != null)
          return { message: limited.message, canRetry: false };
      }
      const lower = error.message.toLowerCase();
      if (
        error.status === 0 ||
        lower.includes("fetch failed") ||
        lower.includes("failed to fetch") ||
        lower.includes("network")
      ) {
        return {
          message: intl.formatMessage(peers.messages.connectionError),
          canRetry: true,
        };
      }
    }
    return {
      message: intl.formatMessage(peers.messages.transcribeError),
      canRetry: true,
    };
  }
  let name: string | null = null;
  if (error instanceof Error) name = error.name;
  if (typeof DOMException !== "undefined" && error instanceof DOMException) {
    name = error.name;
  }
  if (name === "NotAllowedError" || name === "SecurityError") {
    return {
      message: intl.formatMessage(peers.messages.microphonePermissionDenied),
      canRetry: false,
    };
  }
  if (
    name === "NotFoundError" ||
    name === "DevicesNotFoundError" ||
    name === "OverconstrainedError" ||
    name === "ConstraintNotSatisfiedError"
  ) {
    return {
      message: intl.formatMessage(peers.messages.microphoneMissing),
      canRetry: false,
    };
  }
  if (name === "NotReadableError" || name === "TrackStartError") {
    return {
      message: intl.formatMessage(peers.messages.microphoneUnavailable),
      canRetry: false,
    };
  }
  if (name === "NotSupportedError" || name === "TypeError") {
    return {
      message: intl.formatMessage(peers.messages.unsupported),
      canRetry: false,
    };
  }
  return {
    message: intl.formatMessage(peers.messages.startError),
    canRetry: false,
  };
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Artifact preview load telemetry (bundle `sWi` / singleton `QL`; wrappers
// `ZUi`/`QUi`/`$Ui`/`eWi`/`tWi`/`nWi`/`rWi`/`iWi`/`aWi`/`oWi`).

export type ArtifactPreviewReadyBoundary = "data_ready" | "renderer_ready";

export type ArtifactPreviewSpanAttributes = {
  telemetryOwner: "desktop_client";
  definitionVersion: 1;
  artifactKind: string;
  importKind: string;
  readyBoundary: ArtifactPreviewReadyBoundary;
};

export type ArtifactPreviewSpanHandle = {
  isRecording(): boolean;
  mark(name: string): void;
  end(): void;
  fail(reason: unknown): void;
  abort(reason: string): void;
};

export type ArtifactPreviewSpanOptions = {
  key: string;
  onTerminal: () => void;
};

export type StartArtifactPreviewSpan = (
  name: "artifact_preview",
  attributes: ArtifactPreviewSpanAttributes,
  options: ArtifactPreviewSpanOptions,
) => ArtifactPreviewSpanHandle;

type ActiveArtifactPreviewSpan = {
  mountCount: number;
  readyBoundary: ArtifactPreviewReadyBoundary;
  span: ArtifactPreviewSpanHandle;
};

export type ArtifactPreviewStartInput = {
  artifactType: string;
  importKind: string;
  requestKey: string;
};

/**
 * Tracks in-flight artifact preview spans (`sWi`).
 * Production wires `startSpan` through the desktop telemetry client (`Vx.start`).
 */
export class ArtifactPreviewSpanTracker {
  private readonly startSpan: StartArtifactPreviewSpan;
  private readonly active = new Map<string, ActiveArtifactPreviewSpan>();

  constructor(startSpan: StartArtifactPreviewSpan) {
    this.startSpan = startSpan;
  }

  start({
    artifactType,
    importKind,
    requestKey,
  }: ArtifactPreviewStartInput): void {
    let entry: ActiveArtifactPreviewSpan | undefined;
    const priorMountCount = this.active.get(requestKey)?.mountCount ?? 0;
    const readyBoundary: ArtifactPreviewReadyBoundary =
      artifactType === "pdf" ? "renderer_ready" : "data_ready";
    const span = this.startSpan(
      "artifact_preview",
      {
        telemetryOwner: "desktop_client",
        definitionVersion: 1,
        artifactKind: artifactType === "slides" ? "presentation" : artifactType,
        importKind,
        readyBoundary,
      },
      {
        key: requestKey,
        onTerminal: () => {
          if (this.active.get(requestKey) === entry) {
            this.active.delete(requestKey);
          }
        },
      },
    );
    if (span.isRecording()) {
      entry = {
        mountCount: priorMountCount,
        readyBoundary,
        span,
      };
      this.active.set(requestKey, entry);
    }
  }

  /** Increment mount count; returned disposer aborts when the last mount leaves. */
  mount(requestKey: string): () => void {
    const entry = this.active.get(requestKey);
    if (entry == null) return () => {};
    entry.mountCount += 1;
    return () => {
      const current = this.active.get(requestKey);
      if (current == null) return;
      current.mountCount = Math.max(0, current.mountCount - 1);
      queueMicrotask(() => {
        if (
          this.active.get(requestKey) === current &&
          current.mountCount === 0
        ) {
          current.span.abort("navigation_away");
        }
      });
    };
  }

  markMetadataLoaded(requestKey: string): void {
    this.active.get(requestKey)?.span.mark("metadata_loaded");
  }

  markBinaryLoaded(requestKey: string): void {
    this.active.get(requestKey)?.span.mark("binary_loaded");
  }

  markArtifactParsed(requestKey: string): void {
    this.active.get(requestKey)?.span.mark("artifact_parsed");
  }

  completeDataReady(requestKey: string): void {
    const entry = this.active.get(requestKey);
    if (entry?.readyBoundary === "data_ready") {
      entry.span.end();
    }
  }

  completeRendererReady(requestKey: string, pageCount: number): void {
    const entry = this.active.get(requestKey);
    if (entry?.readyBoundary !== "renderer_ready") return;
    if (!Number.isSafeInteger(pageCount) || pageCount <= 0) return;
    entry.span.mark("renderer_ready");
    entry.span.end();
  }

  fail(requestKey: string, reason: unknown): void {
    this.active.get(requestKey)?.span.fail(reason);
  }

  abort(requestKey: string, reason: string): void {
    this.active.get(requestKey)?.span.abort(reason);
  }

  dispose(): void {
    for (const entry of this.active.values()) {
      entry.span.abort("app_disposed");
    }
  }
}

/**
 * Process-wide tracker used by the thin export wrappers (`QL`).
 * Call {@link setArtifactPreviewSpanTracker} once telemetry is available.
 */
let artifactPreviewSpanTracker: ArtifactPreviewSpanTracker | null = null;

export function setArtifactPreviewSpanTracker(
  tracker: ArtifactPreviewSpanTracker,
): void {
  artifactPreviewSpanTracker = tracker;
}

export function getArtifactPreviewSpanTracker(): ArtifactPreviewSpanTracker {
  if (artifactPreviewSpanTracker == null) {
    throw new Error(
      "ArtifactPreviewSpanTracker is not initialized (bundle QL)",
    );
  }
  return artifactPreviewSpanTracker;
}

/** `ZUi` / export `yH` */
export function startArtifactPreviewSpan(
  input: ArtifactPreviewStartInput,
): void {
  getArtifactPreviewSpanTracker().start(input);
}

/** `QUi` / export `gH` */
export function markArtifactPreviewMetadataLoaded(requestKey: string): void {
  getArtifactPreviewSpanTracker().markMetadataLoaded(requestKey);
}

/** `$Ui` / export `vH` */
export function mountArtifactPreviewSpan(requestKey: string): () => void {
  return getArtifactPreviewSpanTracker().mount(requestKey);
}

/** `eWi` / export `hH` */
export function markArtifactPreviewBinaryLoaded(requestKey: string): void {
  getArtifactPreviewSpanTracker().markBinaryLoaded(requestKey);
}

/** `tWi` / export `_H` */
export function markArtifactPreviewParsed(requestKey: string): void {
  getArtifactPreviewSpanTracker().markArtifactParsed(requestKey);
}

/** `nWi` / export `uH` */
export function completeArtifactPreviewDataReady(requestKey: string): void {
  getArtifactPreviewSpanTracker().completeDataReady(requestKey);
}

/** `rWi` / export `dH` */
export function completeArtifactPreviewRendererReady(
  requestKey: string,
  pageCount: number,
): void {
  getArtifactPreviewSpanTracker().completeRendererReady(requestKey, pageCount);
}

/** `iWi` / export `pH` */
export function failArtifactPreviewSpan(
  requestKey: string,
  reason: unknown,
): void {
  getArtifactPreviewSpanTracker().fail(requestKey, reason);
}

/** `aWi` (unexported sibling of `iWi`) */
export function abortArtifactPreviewSpan(
  requestKey: string,
  reason: string,
): void {
  getArtifactPreviewSpanTracker().abort(requestKey, reason);
}

/** `oWi` / export `fH` */
export function disposeArtifactPreviewSpans(): void {
  getArtifactPreviewSpanTracker().dispose();
}

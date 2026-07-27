// Restored from ref/webview/assets/artifact-analytics-CVxOjap4.js
// Artifact annotation product-analytics helpers.
// Stage 3: aet/eet/iet/net/oet/ret/set/tet → artifact-analytics-enums; J9→logProductEvent.

import { logProductEvent } from "../analytics/log-product-event";
import {
  CodexArtifactAnnotationModeEnabledEvent,
  CodexArtifactAnnotationStartSource,
  CodexArtifactAnnotationStartedEvent,
  CodexArtifactAnnotationSubmitMode,
  CodexArtifactAnnotationSubmitSource,
  CodexArtifactAnnotationSubmittedEvent,
  CodexArtifactKind,
  CodexArtifactRefreshClickedEvent,
} from "../analytics/artifact-analytics-enums";

type StoreLike = {
  get: (token: unknown) => {
    logProductEvent: (t: unknown, p: unknown) => void;
  };
};

type ArtifactAnalyticsContext = {
  artifactTabId?: string | null;
  artifactType?: string;
  importKind?: unknown;
  threadId?: string | null;
};

function basePayload(ctx: ArtifactAnalyticsContext) {
  return {
    artifactKind: mapArtifactKind(ctx.artifactType),
    artifactImportKind: ctx.importKind,
    artifactTabId: ctx.artifactTabId ?? undefined,
    threadId: ctx.threadId ?? undefined,
  };
}

function mapArtifactKind(type: string | undefined) {
  switch (type) {
    case "document":
      return CodexArtifactKind.CODEX_ARTIFACT_KIND_DOCUMENT;
    case "notebook":
      return CodexArtifactKind.CODEX_ARTIFACT_KIND_NOTEBOOK;
    case "pdf":
      return CodexArtifactKind.CODEX_ARTIFACT_KIND_PDF;
    case "slides":
      return CodexArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION;
    case "spreadsheet":
      return CodexArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET;
    default:
      return undefined;
  }
}

function mapStartSource(source: string | undefined) {
  switch (source) {
    case "annotation_mode_pointer":
      return CodexArtifactAnnotationStartSource.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER;
    case "ask_codex_button":
      return CodexArtifactAnnotationStartSource.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON;
    case "ask_codex_shortcut":
      return CodexArtifactAnnotationStartSource.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT;
    default:
      return undefined;
  }
}

function mapSubmitMode(mode: string | undefined) {
  switch (mode) {
    case "direct":
      return CodexArtifactAnnotationSubmitMode.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT;
    case "saved":
      return CodexArtifactAnnotationSubmitMode.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED;
    default:
      return undefined;
  }
}

function mapSubmitSource(source: string | undefined) {
  switch (source) {
    case "button":
      return CodexArtifactAnnotationSubmitSource.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON;
    case "dictation":
      return CodexArtifactAnnotationSubmitSource.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION;
    case "keyboard":
      return CodexArtifactAnnotationSubmitSource.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD;
    default:
      return undefined;
  }
}

/** Bundle export `r` — log CodexArtifactAnnotationStarted. */
export function logArtifactAnnotationStarted(
  store: StoreLike,
  ctx: ArtifactAnalyticsContext,
  opts: { annotationModeEnabled?: boolean; startSource?: string },
): void {
  logProductEvent(store, CodexArtifactAnnotationStartedEvent, {
    ...basePayload(ctx),
    annotationModeEnabled: opts.annotationModeEnabled,
    startSource: mapStartSource(opts.startSource),
  });
}

/** Bundle export `a` — log CodexArtifactRefreshClicked. */
export function logArtifactRefreshClicked(store: StoreLike, ctx: ArtifactAnalyticsContext): void {
  logProductEvent(store, CodexArtifactRefreshClickedEvent, basePayload(ctx));
}

/** Bundle export `n` — log CodexArtifactAnnotationModeEnabled. */
export function logArtifactAnnotationModeEnabled(store: StoreLike, ctx: ArtifactAnalyticsContext): void {
  logProductEvent(
    store,
    CodexArtifactAnnotationModeEnabledEvent,
    basePayload(ctx),
  );
}

/** Bundle export `i` — log CodexArtifactAnnotationSubmitted. */
export function logArtifactAnnotationSubmitted(
  store: StoreLike,
  ctx: ArtifactAnalyticsContext,
  opts: {
    annotationModeEnabled?: boolean;
    annotationTargetKind?: unknown;
    submitMode?: string;
    submitSource?: string;
  },
): void {
  logProductEvent(store, CodexArtifactAnnotationSubmittedEvent, {
    ...basePayload(ctx),
    annotationModeEnabled: opts.annotationModeEnabled,
    annotationTargetKind: opts.annotationTargetKind,
    submitMode: mapSubmitMode(opts.submitMode),
    submitSource: mapSubmitSource(opts.submitSource),
  });
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureArtifactAnalyticsInit(): void {}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Protobuf analytics enums + event-type tokens for artifact annotation flows.
// Exact-case aliases: oet/tet/ret/iet (enums) + net/set/eet/aet (event $type tokens).

export const CodexArtifactKind = {
  CODEX_ARTIFACT_KIND_UNSPECIFIED: "CODEX_ARTIFACT_KIND_UNSPECIFIED",
  CODEX_ARTIFACT_KIND_DOCUMENT: "CODEX_ARTIFACT_KIND_DOCUMENT",
  CODEX_ARTIFACT_KIND_PRESENTATION: "CODEX_ARTIFACT_KIND_PRESENTATION",
  CODEX_ARTIFACT_KIND_SPREADSHEET: "CODEX_ARTIFACT_KIND_SPREADSHEET",
  CODEX_ARTIFACT_KIND_PDF: "CODEX_ARTIFACT_KIND_PDF",
  CODEX_ARTIFACT_KIND_NOTEBOOK: "CODEX_ARTIFACT_KIND_NOTEBOOK",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const CodexArtifactAnnotationStartSource = {
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_UNSPECIFIED:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_UNSPECIFIED",
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON",
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT",
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const CodexArtifactAnnotationSubmitMode = {
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_UNSPECIFIED:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_UNSPECIFIED",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const CodexArtifactAnnotationSubmitSource = {
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_UNSPECIFIED:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_UNSPECIFIED",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

/** Bundle export `net` — CodexArtifactAnnotationStarted event type token. */
export const CodexArtifactAnnotationStartedEvent = {
  $type: "protobuf_analytics_events.v1.CodexArtifactAnnotationStarted",
} as const;

/** Bundle export `set` — CodexArtifactRefreshClicked event type token. */
export const CodexArtifactRefreshClickedEvent = {
  $type: "protobuf_analytics_events.v1.CodexArtifactRefreshClicked",
} as const;

/** Bundle export `eet` — CodexArtifactAnnotationModeEnabled event type token. */
export const CodexArtifactAnnotationModeEnabledEvent = {
  $type: "protobuf_analytics_events.v1.CodexArtifactAnnotationModeEnabled",
} as const;

/** Bundle export `aet` — CodexArtifactAnnotationSubmitted event type token. */
export const CodexArtifactAnnotationSubmittedEvent = {
  $type: "protobuf_analytics_events.v1.CodexArtifactAnnotationSubmitted",
} as const;

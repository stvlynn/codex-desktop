// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cQn`) / export `q6`.

export type BindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIEDPeers = {
  $Zn: (...args: unknown[]) => unknown;
  JZn: (...args: unknown[]) => unknown;
  QZn: (...args: unknown[]) => unknown;
  XZn: (...args: unknown[]) => unknown;
  YZn: (...args: unknown[]) => unknown;
  ZZn: (...args: unknown[]) => unknown;
  aQn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eQn: (...args: unknown[]) => unknown;
  iQn: (...args: unknown[]) => unknown;
  nQn: (...args: unknown[]) => unknown;
  oQn: (...args: unknown[]) => unknown;
  rQn: (...args: unknown[]) => unknown;
  sQn: (...args: unknown[]) => unknown;
  tQn: (...args: unknown[]) => unknown;
};

let peers: BindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIEDPeers | null = null;

/** Wire bindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIED peers once companions land. */
export function setBindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIEDPeers(
  next: BindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIEDPeers,
): void {
  peers = next;
}

/**
 * Bundle export `q6` / internal `cQn`.
 */
export function bindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIED() {
  if (peers == null) {
    throw new Error(
      "bindCODEXARTIFACTTEMPLATECAROUSELKINDUNSPECIFIED peers are not configured",
    );
  }

  return peers.e(() => {
    ((JZn = (function (e) {
      return (
        (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_UNSPECIFIED = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_UNSPECIFIED`),
        (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_DOCUMENT = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_DOCUMENT`),
        (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_PRESENTATION = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_PRESENTATION`),
        (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_SPREADSHEET = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_SPREADSHEET`),
        (peers.e.UNRECOGNIZED = `UNRECOGNIZED`),
        peers.e
      );
    })({})),
      (YZn = (function (e) {
        return (
          (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_UNSPECIFIED = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_UNSPECIFIED`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_CLOSE_BUTTON = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_CLOSE_BUTTON`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_ESCAPE = `CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_ESCAPE`),
          (peers.e.UNRECOGNIZED = `UNRECOGNIZED`),
          peers.e
        );
      })({})),
      (XZn = (function (e) {
        return (
          (peers.e.CODEX_ARTIFACT_TEMPLATE_ORIGIN_UNSPECIFIED = `CODEX_ARTIFACT_TEMPLATE_ORIGIN_UNSPECIFIED`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_ORIGIN_BUILT_IN_ASSET = `CODEX_ARTIFACT_TEMPLATE_ORIGIN_BUILT_IN_ASSET`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_ORIGIN_SYSTEM_SKILL = `CODEX_ARTIFACT_TEMPLATE_ORIGIN_SYSTEM_SKILL`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_ORIGIN_USER_SKILL = `CODEX_ARTIFACT_TEMPLATE_ORIGIN_USER_SKILL`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_ORIGIN_REPO_SKILL = `CODEX_ARTIFACT_TEMPLATE_ORIGIN_REPO_SKILL`),
          (peers.e.CODEX_ARTIFACT_TEMPLATE_ORIGIN_ADMIN_SKILL = `CODEX_ARTIFACT_TEMPLATE_ORIGIN_ADMIN_SKILL`),
          (peers.e.UNRECOGNIZED = `UNRECOGNIZED`),
          peers.e
        );
      })({})),
      (ZZn = (function (e) {
        return (
          (peers.e.CODEX_AGENT_ELICITATION_PICKER_KIND_UNSPECIFIED = `CODEX_AGENT_ELICITATION_PICKER_KIND_UNSPECIFIED`),
          (peers.e.CODEX_AGENT_ELICITATION_PICKER_KIND_OTHER = `CODEX_AGENT_ELICITATION_PICKER_KIND_OTHER`),
          (peers.e.UNRECOGNIZED = `UNRECOGNIZED`),
          peers.e
        );
      })({})),
      (QZn = {
        $type: `protobuf_analytics_events.v1.CodexArtifactTemplateCarouselShown`,
      }),
      ($Zn = {
        $type: `protobuf_analytics_events.v1.CodexArtifactTemplateCarouselDismissed`,
      }),
      (eQn = {
        $type: `protobuf_analytics_events.v1.CodexArtifactTemplateSelected`,
      }),
      (tQn = {
        $type: `protobuf_analytics_events.v1.CodexArtifactTemplateCreateNewTemplateSelected`,
      }),
      (nQn = {
        $type: `protobuf_analytics_events.v1.CodexArtifactTemplatePromptSubmitted`,
      }),
      (rQn = {
        $type: `protobuf_analytics_events.v1.CodexArtifactTemplateCreateNewTemplatePromptSubmitted`,
      }),
      (iQn = {
        $type: `protobuf_analytics_events.v1.CodexAgentElicitationPickerShown`,
      }),
      (aQn = {
        $type: `protobuf_analytics_events.v1.CodexAgentElicitationPickerDismissClicked`,
      }),
      (oQn = {
        $type: `protobuf_analytics_events.v1.CodexAgentElicitationPickerDismissedByTimeout`,
      }),
      (sQn = {
        $type: `protobuf_analytics_events.v1.CodexAgentElicitationTemplateSelectedAndContinued`,
      }));
  });
}

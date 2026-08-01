// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: embedded artifact element (legacy Binding1302).
// Stage-3 wave-143.

import { SlideElement as _workbookZ } from "../slide-element";
import { j } from "../presentation-protobuf";

export class workbookBinding1302 extends _workbookZ {
  type = "embeddedArtifact";
  constructor(slIn11049, slIn11050) {
    super(slIn11049, slIn11050);
    this.data.type = j.ELEMENT_TYPE_EMBEDDED_ARTIFACT;
  }
  get id() {
    return this.data.id;
  }
  get artifactId() {
    let slBind17311 = this.data.embeddedArtifact?.embeddedView?.artifact?.id;
    if (!slBind17311)
      throw Error("Embedded workbook artifact is missing an artifact id.");
    return slBind17311;
  }
  get workbook() {
    let slBind17740 = this.context.getPresentation?.();
    if (!slBind17740)
      throw Error("Embedded workbook artifact requires a presentation.");
    return slBind17740.artifacts.getWorkbook(this.artifactId);
  }
  get view() {
    return {
      ...this.#e().embeddedView.workbook,
    };
  }
  set view(slIn9976) {
    let { embeddedView } = this.#e();
    embeddedView.workbook = {
      ...slIn9976,
    };
    this.recordPositionSet(this.frame);
  }
  get title() {
    return this.data.embeddedArtifact?.embeddedView?.artifact?.title;
  }
  set title(slIn11865) {
    let { artifact } = this.#e();
    artifact.title = slIn11865;
  }
  get preview() {
    let slBind20741 = this.data.embeddedArtifact?.embeddedView?.preview;
    return slBind20741
      ? {
          ...slBind20741,
        }
      : undefined;
  }
  set preview(slIn11737) {
    this.#e().embeddedView.preview = slIn11737
      ? {
          ...slIn11737,
        }
      : undefined;
  }
  get previewImageReference() {
    let slBind20344 = this.data.embeddedArtifact?.previewImageReference;
    return slBind20344
      ? {
          ...slBind20344,
        }
      : undefined;
  }
  set previewImageReference(slIn5916) {
    if (!this.data.embeddedArtifact)
      throw Error(
        "Embedded workbook artifact is missing element payload data.",
      );
    this.data.embeddedArtifact.previewImageReference = slIn5916
      ? {
          ...slIn5916,
        }
      : undefined;
  }
  toSnapshot() {
    let slBind10558 = this.slideId,
      slBind10559 = this.id,
      slBind10560 = this.view;
    return {
      aid: workbookHelper302("ea", slBind10558, slBind10559),
      kind: "embeddedArtifact",
      artifactKind: "workbook",
      artifactId: this.artifactId,
      id: slBind10559,
      slideId: slBind10558,
      title: this.title,
      view: {
        sheetId: slBind10560.sheetId,
        rangeA1: slBind10560.rangeA1,
        showGridlines: slBind10560.showGridlines,
        showHeaders: slBind10560.showHeaders,
        zoom: slBind10560.zoom,
        backgroundFill: slBind10560.backgroundFill,
      },
      frame: this.frame,
    };
  }
  toProto() {
    let slBind18086 = super.toProto();
    return (
      (slBind18086.type = j.ELEMENT_TYPE_EMBEDDED_ARTIFACT),
      (slBind18086.embeddedArtifact = this.data.embeddedArtifact),
      slBind18086
    );
  }
  #e() {
    let slBind14240 = this.data.embeddedArtifact?.embeddedView;
    if (!slBind14240?.artifact)
      throw Error("Embedded workbook artifact is missing view data.");
    let slBind14241 = slBind14240.artifact;
    if (slBind14241.kind !== _presentationDn.ARTIFACT_KIND_WORKBOOK)
      throw Error("Embedded artifact does not reference a workbook.");
    return {
      embeddedView: slBind14240,
      artifact: slBind14241,
    };
  }
}

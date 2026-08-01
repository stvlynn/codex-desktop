// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide images collection (legacy _workbookB / Binding1300–1301).
// Stage-3 wave-143.

import { ImageElement as workbookBinding660 } from "../image-element";
import {
  normalizeImagePayload as workbookHelper312,
  normalizeImageReplaceProps as workbookHelper313,
} from "../image-source";
import { j } from "../presentation-protobuf";

export const workbookBinding1300 = (slIn14718: any) =>
  "prompt" in slIn14718 && typeof slIn14718.prompt == "string";
export const workbookBinding1301 = (slIn13412: any) =>
  "path" in slIn13412 ||
  "blob" in slIn13412 ||
  "dataUrl" in slIn13412 ||
  "uri" in slIn13412;
export class _workbookB {
  #e;
  #t;
  constructor(slIn9128: any, slIn9129: any) {
    this.#e = slIn9128;
    this.#t = [];
    slIn9129.forEach((item) => {
      this.add({
        proto: item,
      });
    });
  }
  get items() {
    return [...this.#t];
  }
  add(slIn714) {
    if ("proto" in slIn714) {
      let slBind21135 = new workbookBinding660(this.#e, slIn714.proto);
      return (
        this.#t.push(slBind21135),
        this.#e._register(slBind21135),
        slBind21135
      );
    }
    let slBind5049 = {
        id: "",
        name: "",
        imageReference: undefined,
        paragraphs: [],
        type: j.ELEMENT_TYPE_UNSPECIFIED,
        effects: [],
        children: [],
        levelsStyles: [],
        citations: [],
      },
      slBind5050 = workbookHelper312(slIn714),
      slBind5051 = this.#e.createImageAsset(slBind5050),
      slBind5052 = new workbookBinding660(this.#e, slBind5049);
    slBind5052.setImageReference(slBind5051.id);
    slBind5052.applyAssetPayload(slBind5050);
    this.#t.push(slBind5052);
    this.#e._register(slBind5052);
    let slBind5053 = this.#e.getPresentation?.()?.getRecorder?.(),
      slBind5054 = this.#e.getSlide?.();
    if (slBind5053 && slBind5054) {
      let slBind16491 = `im/${slBind5054.id}.${slBind5052.id}`,
        slBind16492 = slBind5053.assignAlias(slBind5052, slBind16491, "image");
      slBind5053.record({
        op: "image.add",
        slide: slBind5053.targetRefForElement(
          slBind5054,
          `sl/${slBind5054.id}`,
        ),
        as: slBind16492,
        props: workbookHelper313(slIn714),
      });
    }
    slIn714.alt !== undefined && (slBind5052.alt = slIn714.alt ?? "");
    slIn714.fit !== undefined &&
      ((slBind5052.fit = slIn714.fit), (slBind5052.lockAspectRatio = true));
    let slBind5055 = slIn714.position ?? slIn714.frame;
    return (
      slBind5055 &&
        (slBind5052.position = {
          left: slBind5055.left,
          top: slBind5055.top,
          width: slBind5055.width,
          height: slBind5055.height,
        }),
      slIn714.crop && (slBind5052.crop = slIn714.crop),
      slIn714.geometry !== undefined &&
        (slBind5052.geometry = slIn714.geometry),
      slIn714.borderRadius !== undefined &&
        (slBind5052.borderRadius = slIn714.borderRadius),
      workbookBinding1300(slIn714) &&
        ((slBind5052.prompt = slIn714.prompt),
        (slBind5052.isPlaceholder = !workbookBinding1301(slIn714)),
        slBind5052.isPlaceholder && (slBind5052.lockAspectRatio = true)),
      slBind5052
    );
  }
  deleteById(slIn7950) {
    let slBind18431 = this.#t.find((item) => item.id === slIn7950);
    if (!slBind18431) return;
    let slBind18432 = this.#t.indexOf(slBind18431);
    slBind18432 !== -1 && this.#t.splice(slBind18432, 1);
    this.#e._unregister(slIn7950);
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
}

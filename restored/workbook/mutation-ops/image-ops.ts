// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-42: image.add/set mutation builders (legacy Vfe/Hfe/Ufe/Wfe).

import { normalizeImageReplaceProps } from "../image-source";
import type { LooseBag } from "./types";

export function buildImageAddOp(props: LooseBag) {
  let { sheet, source, anchor, as: _as } = props,
    opBind18859 = buildImageAddProps(source, anchor);
  if (!opBind18859) return null;
  let opBind18860 = {
    op: "image.add",
    sheet,
    props: opBind18859,
  };
  return (_as && (opBind18860.as = _as), opBind18860);
}
export function buildImageSetOp(props: LooseBag) {
  let { sheet, image, previous, source, targetImageId } = props;
  return {
    op: "image.set",
    target: {
      ...previous,
      sheet,
      imageId: targetImageId ?? previous.imageId,
    },
    props: {
      imageId: image.imageId,
      anchor: image.anchor.toConfig(),
      ...serializeImageSetSource(source),
    },
  };
}
export function buildImageAddProps(opIn2403: unknown, opIn2404?: unknown) {
  let opBind9621 = normalizeImageReplaceProps(opIn2403);
  if ("path" in opBind9621) {
    let opBind19976 = {
      path: opBind9621.path,
    };
    return (
      "prompt" in opBind9621 &&
        opBind9621.prompt !== undefined &&
        (opBind19976.prompt = opBind9621.prompt),
      opIn2404 && (opBind19976.anchor = opIn2404),
      opBind19976
    );
  }
  if ("dataUrl" in opBind9621) {
    let opBind17824 = {
      dataUrl: opBind9621.dataUrl,
    };
    return (
      opBind9621.contentType !== undefined &&
        (opBind17824.contentType = opBind9621.contentType),
      "prompt" in opBind9621 &&
        opBind9621.prompt !== undefined &&
        (opBind17824.prompt = opBind9621.prompt),
      opIn2404 && (opBind17824.anchor = opIn2404),
      opBind17824
    );
  }
  if ("uri" in opBind9621) {
    let opBind20041 = {
      uri: opBind9621.uri,
    };
    return (
      "prompt" in opBind9621 &&
        opBind9621.prompt !== undefined &&
        (opBind20041.prompt = opBind9621.prompt),
      opIn2404 && (opBind20041.anchor = opIn2404),
      opBind20041
    );
  }
  return "prompt" in opBind9621
    ? opIn2404
      ? {
          prompt: opBind9621.prompt,
          anchor: opIn2404,
        }
      : {
          prompt: opBind9621.prompt,
        }
    : null;
}
export function serializeImageSetSource(opIn3070: unknown) {
  if (!opIn3070) return {};
  let opBind11149 = normalizeImageReplaceProps(opIn3070);
  if ("path" in opBind11149) {
    let opBind21380 = {
      path: opBind11149.path,
    };
    return (
      "prompt" in opBind11149 &&
        opBind11149.prompt !== undefined &&
        (opBind21380.prompt = opBind11149.prompt),
      opBind21380
    );
  }
  if ("dataUrl" in opBind11149) {
    let opBind18596 = {
      dataUrl: opBind11149.dataUrl,
    };
    return (
      opBind11149.contentType !== undefined &&
        (opBind18596.contentType = opBind11149.contentType),
      "prompt" in opBind11149 &&
        opBind11149.prompt !== undefined &&
        (opBind18596.prompt = opBind11149.prompt),
      opBind18596
    );
  }
  if ("uri" in opBind11149) {
    let opBind21431 = {
      uri: opBind11149.uri,
    };
    return (
      "prompt" in opBind11149 &&
        opBind11149.prompt !== undefined &&
        (opBind21431.prompt = opBind11149.prompt),
      opBind21431
    );
  }
  return "prompt" in opBind11149
    ? {
        prompt: opBind11149.prompt,
      }
    : {};
}

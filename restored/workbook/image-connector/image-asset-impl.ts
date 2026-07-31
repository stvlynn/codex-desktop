// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: EMF/WMF mime + SVG/bitmap image-asset VO (legacy Ige/zge/Jge/Binding723–728).
// Stage-3 wave-74 cohesive image-asset impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureStableIdConstantsInit as workbookH,
  randomUuid,
} from "../stable-id";
import {
  Rge,
  workbookBinding723,
  workbookBinding724,
  Bge,
  workbookBinding725,
  workbookBinding726,
  Vge,
  Hge,
  Uge,
  Wge,
  workbookBinding727,
  Gge,
  Kge,
  qge,
  workbookBinding728,
} from "./ic-slots";

export function Ige(props: any) {
  return props ? Rge.has(props.toLowerCase()) : false;
}
export async function Lge(icIn16051: any, icIn16052: any) {}
export const zge = esmInit(() => {
  Rge = new Set([
    "image/emf",
    "image/x-emf",
    "application/emf",
    "application/x-emf",
    "image/wmf",
    "image/x-wmf",
    "application/wmf",
    "application/x-wmf",
  ]);
});
export const Jge = esmInit(() => {
  zge();
  workbookH();
  workbookBinding723 = "image/svg+xml";
  workbookBinding724 = (icIn9816) => {
    if (icIn9816.buffer instanceof ArrayBuffer) return icIn9816;
    let workbookBinding20360 = new Uint8Array(icIn9816.byteLength);
    return (workbookBinding20360.set(icIn9816), workbookBinding20360);
  };
  Bge = (icIn6506, icIn6507, icIn6508) => {
    if (/\bwidth\s*=|\bheight\s*=/.test(icIn6506))
      return new Blob([icIn6506], {
        type: workbookBinding723,
      });
    let workbookBinding16719 = icIn6506.replace(
      /<svg\b([^>]*)>/,
      `<svg$1 width="${icIn6507}" height="${icIn6508}">`,
    );
    return new Blob([workbookBinding16719], {
      type: workbookBinding723,
    });
  };
  workbookBinding725 = () => {
    let workbookBinding20678 = globalThis.devicePixelRatio;
    return typeof workbookBinding20678 == "number" &&
      Number.isFinite(workbookBinding20678) &&
      workbookBinding20678 > 0
      ? workbookBinding20678
      : 1;
  };
  workbookBinding726 = (icIn12289) => {
    let workbookBinding22379 = Math.round(icIn12289 ?? 1);
    return workbookBinding22379 > 0 ? workbookBinding22379 : 1;
  };
  Vge = () => {
    let workbookBinding22506 = globalThis.Image;
    if (workbookBinding22506) return workbookBinding22506;
  };
  Hge = async (icIn2522, icIn2523) => {
    let workbookBinding9893 = Vge();
    if (
      !workbookBinding9893 ||
      typeof URL > "u" ||
      typeof URL.createObjectURL != "function"
    )
      return;
    let workbookBinding9894 = URL.createObjectURL(icIn2522);
    try {
      let workbookBinding13442 = new workbookBinding9893();
      if (typeof workbookBinding13442.decode == "function") {
        workbookBinding13442.src = workbookBinding9894;
        await workbookBinding13442.decode();
      } else {
        let workbookBinding17292 = new Promise((icIn9172, icIn9173) => {
          workbookBinding13442.onload = () => icIn9172();
          workbookBinding13442.onerror = () =>
            icIn9173(Error("Failed to decode SVG image payload."));
        });
        workbookBinding13442.src = workbookBinding9894;
        await workbookBinding17292;
      }
      return await createImageBitmap(workbookBinding13442, icIn2523);
    } finally {
      typeof URL.revokeObjectURL == "function" &&
        URL.revokeObjectURL(workbookBinding9894);
    }
  };
  Uge = async (icIn9425, icIn9426) => {
    try {
      let workbookBinding22518 = await Hge(icIn9425, icIn9426);
      if (workbookBinding22518) return workbookBinding22518;
    } catch {}
    return createImageBitmap(icIn9425, icIn9426);
  };
  Wge = (icIn16174) => (icIn16174 ? Ige(icIn16174) : false);
  workbookBinding727 = async (icIn1288, icIn1289, icIn1290) => {
    let workbookBinding6977 = icIn1288.contentType || "";
    if (Wge(workbookBinding6977)) {
      let workbookBinding20361 = await Lge(workbookBinding6977, icIn1288.data);
      if (workbookBinding20361) return workbookBinding20361;
      console.warn(`Unsupported image: ${workbookBinding6977}`);
      return;
    }
    if (icIn1288.contentType === workbookBinding723) {
      let workbookBinding11856 = workbookBinding726(icIn1289),
        workbookBinding11857 = workbookBinding726(icIn1290),
        workbookBinding11858 = workbookBinding725(),
        workbookBinding11859 = new TextDecoder().decode(icIn1288.data),
        workbookBinding11860 = Bge(
          workbookBinding11859,
          workbookBinding11856,
          workbookBinding11857,
        );
      try {
        return await Uge(workbookBinding11860, {
          resizeWidth: Math.max(
            1,
            Math.round(workbookBinding11856 * workbookBinding11858),
          ),
          resizeHeight: Math.max(
            1,
            Math.round(workbookBinding11857 * workbookBinding11858),
          ),
        });
      } catch (workbookBinding19454) {
        console.warn(
          `Unsupported SVG payload (${icIn1288.data?.byteLength ?? 0} bytes)`,
          workbookBinding19454,
        );
        return;
      }
    }
    let workbookBinding6978 = new Blob([workbookBinding724(icIn1288.data)], {
      type: workbookBinding6977 || "application/octet-stream",
    });
    try {
      return await createImageBitmap(workbookBinding6978);
    } catch (workbookBinding19025) {
      console.warn(
        `Unsupported image payload: ${workbookBinding6977 || "unknown mime"} (${icIn1288.data?.byteLength ?? 0} bytes)`,
        workbookBinding19025,
      );
      return;
    }
  };
  Gge = (icIn5078) => {
    let workbookBinding14532 = globalThis.Buffer;
    if (workbookBinding14532 && typeof workbookBinding14532.from == "function")
      return workbookBinding724(workbookBinding14532.from(icIn5078, "base64"));
    if (typeof atob == "function") {
      let workbookBinding19586 = atob(icIn5078),
        workbookBinding19587 = new Uint8Array(workbookBinding19586.length);
      for (
        let workbookBinding22723 = 0;
        workbookBinding22723 < workbookBinding19586.length;
        workbookBinding22723 += 1
      )
        workbookBinding19587[workbookBinding22723] =
          workbookBinding19586.charCodeAt(workbookBinding22723);
      return workbookBinding19587;
    }
    return new Uint8Array();
  };
  Kge = (icIn7509) => {
    let workbookBinding17989 = /^data:([^;,]+);base64,(.+)$/i.exec(icIn7509);
    if (!workbookBinding17989) return;
    let workbookBinding17990 = workbookBinding17989[1]?.trim().toLowerCase(),
      workbookBinding17991 = workbookBinding17989[2];
    if (!(!workbookBinding17990 || !workbookBinding17991))
      return {
        contentType: workbookBinding17990,
        data: Gge(workbookBinding17991),
      };
  };
  qge = async (icIn9557, icIn9558, icIn9559) => {
    if (!icIn9557.uri) return;
    let workbookBinding20087 = icIn9557.uri.startsWith("data:")
      ? Kge(icIn9557.uri)
      : undefined;
    if (workbookBinding20087)
      return workbookBinding727(workbookBinding20087, icIn9558, icIn9559);
  };
  workbookBinding728 = class {
    #e;
    #t;
    constructor(icIn5079, icIn5080) {
      let workbookBinding14533 =
        icIn5080?.id && icIn5080.id.length > 0 ? icIn5080.id : randomUuid();
      this.#e = {
        id: workbookBinding14533,
        contentType: icIn5080?.contentType ?? "",
        data: icIn5080?.data ? new Uint8Array(icIn5080.data) : new Uint8Array(),
        prompt: icIn5080?.prompt ?? undefined,
        uri: icIn5080?.uri ?? undefined,
      };
      this.#t = new Map();
    }
    get id() {
      return this.#e.id;
    }
    get contentType() {
      return this.#e.contentType;
    }
    set contentType(icIn12409) {
      this.#e.contentType = icIn12409;
      this.#r();
    }
    get data() {
      return new Uint8Array(this.#e.data);
    }
    set data(icIn12290) {
      this.#e.data = new Uint8Array(icIn12290);
      this.#r();
    }
    get prompt() {
      return this.#e.prompt;
    }
    set prompt(icIn13397) {
      this.#e.prompt = icIn13397 ?? undefined;
    }
    get uri() {
      return this.#e.uri;
    }
    set uri(icIn12811) {
      this.#e.uri = icIn12811 ?? undefined;
      this.#r();
    }
    toProto() {
      return {
        id: this.#e.id,
        contentType: this.#e.contentType,
        data: new Uint8Array(this.#e.data),
        prompt: this.#e.prompt,
        uri: this.#e.uri,
      };
    }
    async getBitmap(icIn6136, icIn6137) {
      let workbookBinding16220 = this.#n(icIn6136, icIn6137),
        workbookBinding16221 = this.#t.get(workbookBinding16220);
      if (workbookBinding16221) return workbookBinding16221;
      let workbookBinding16222 = this.#i(icIn6136, icIn6137).catch(async () => {
        console.warn("Failed to create bitmap for image");
      });
      return (
        this.#t.set(workbookBinding16220, workbookBinding16222),
        workbookBinding16222
      );
    }
    #n(icIn5650, icIn5651) {
      let workbookBinding15526 = `${this.#e.id}:${this.#e.data.byteLength}:${this.#e.contentType}:${this.#e.uri ?? ""}`;
      if (this.#a()) {
        let workbookBinding20120 = workbookBinding726(icIn5650),
          workbookBinding20121 = workbookBinding726(icIn5651),
          workbookBinding20122 = workbookBinding725();
        return `${workbookBinding15526}:${workbookBinding20120}x${workbookBinding20121}@${Math.round(workbookBinding20122 * 100) / 100}`;
      }
      return workbookBinding15526;
    }
    #r() {
      this.#t.clear();
    }
    async #i(icIn5562, icIn5563) {
      if (this.#e.data.byteLength === 0 && this.#e.uri)
        return qge(
          {
            contentType: this.#e.contentType,
            uri: this.#e.uri,
          },
          icIn5562,
          icIn5563,
        );
      let workbookBinding15372 = {
        contentType: this.#e.contentType,
        data: this.#e.data,
      };
      return workbookBinding727(workbookBinding15372, icIn5562, icIn5563);
    }
    #a() {
      return this.#e.contentType === workbookBinding723;
    }
  };
});

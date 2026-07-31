// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Charts collection VO (legacy workbookS/workbookC).
// Stage-3 wave-77 cohesive charts-collection impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { j, Qt } from "../presentation-protobuf";
import {
  workbookBinding1297,
  workbookBinding1298,
  workbookS,
} from "./cc-slots";
import { workbookBinding1299 } from "./chart-ref-impl";

export const workbookC = esmInit(() => {
  Qt();
  workbookBinding1299();
  workbookS = class {
    #e;
    #t;
    constructor(ccIn9126, ccIn9127) {
      this.#e = ccIn9126;
      this.#t = [];
      ccIn9127.forEach((item) => {
        this.add({
          proto: item,
        });
      });
    }
    get items() {
      return [...this.#t];
    }
    getById(ccIn12939) {
      return this.#t.find((item) => item.id === ccIn12939);
    }
    add(ccIn5847, ccIn5848) {
      if (typeof ccIn5847 == "object") {
        let ccBind21134 = new workbookBinding1298(this.#e, ccIn5847.proto);
        return (
          this.#t.push(ccBind21134),
          this.#e._register(ccBind21134),
          ccBind21134
        );
      }
      let ccBind15808 = this.#e.createChartAsset(ccIn5847);
      ccBind15808.type = ccIn5847;
      let ccBind15809 = this.#n(ccBind15808);
      return (ccBind15809.apply(ccIn5848), ccBind15809);
    }
    attach(ccIn11531) {
      let ccBind21938 = this.#e.attachChartAsset(ccIn11531);
      return this.#n(ccBind21938);
    }
    toProto() {
      return this.#t.map((item) => item.toProto());
    }
    deleteById(ccIn8420) {
      let ccBind18922 = this.getById(ccIn8420);
      if (!ccBind18922) return;
      let ccBind18923 = this.#t.indexOf(ccBind18922);
      ccBind18923 !== -1 && this.#t.splice(ccBind18923, 1);
      this.#e._unregister(ccIn8420);
    }
    #n(ccIn3805) {
      let ccBind12572 = {
          id: "",
          name: "",
          type: j.ELEMENT_TYPE_CHART_REFERENCE,
          chartReference: {
            id: ccIn3805.id,
          },
        },
        ccBind12573 = new workbookBinding1298(this.#e, ccBind12572);
      return (
        ccBind12573.setChartReference(ccIn3805.id),
        ccBind12573.frame === undefined &&
          (ccBind12573.position = {
            left: 60,
            top: 80,
            width: 640,
            height: 360,
          }),
        this.#t.push(ccBind12573),
        this.#e._register(ccBind12573),
        ccBind12573
      );
    }
  };
});

// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide tables collection (legacy _workbookF).
// Stage-3 wave-143.

import { _workbookM } from "../table-element";

export class _workbookF {
  #e;
  #t;
  constructor(slIn9133, slIn9134) {
    this.#e = slIn9133;
    this.#t = [];
    slIn9134.forEach((item) => {
      this.add({
        proto: item,
      });
    });
  }
  get items() {
    return [...this.#t];
  }
  getById(slIn12940) {
    return this.#t.find((item) => item.id === slIn12940);
  }
  add(slIn1598) {
    if (slIn1598 && typeof slIn1598 == "object" && "proto" in slIn1598) {
      let slBind17834 = new _workbookM(this.#i(), slIn1598.proto);
      return (
        slIn1598.proto.table || slBind17834.setValues([[""]]),
        this.#t.push(slBind17834),
        this.#e._register(slBind17834),
        slBind17834
      );
    }
    let slBind7757 = this.#n(slIn1598),
      slBind7758 = new _workbookM(this.#i(), undefined);
    this.#t.push(slBind7758);
    this.#e._register(slBind7758);
    slBind7757.position && (slBind7758.frame = slBind7757.position);
    let slBind7759 = this.#r(slBind7757.rows, slBind7757.columns);
    return (
      slBind7757.values &&
        slBind7757.values.length > 0 &&
        slBind7757.values.forEach((item, index) => {
          let slBind19070 = slBind7759[index];
          slBind19070 &&
            item.forEach((_item, _index) => {
              _index >= slBind19070.length || (slBind19070[_index] = _item);
            });
        }),
      slBind7758.setValues(slBind7759),
      slBind7757.columnWidths &&
        slBind7758.setColumnWidths(slBind7757.columnWidths),
      slBind7757.columnTracks &&
        slBind7758.setColumnTracks(slBind7757.columnTracks),
      slBind7758
    );
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
  deleteById(slIn8423) {
    let slBind18925 = this.getById(slIn8423);
    if (!slBind18925) return;
    let slBind18926 = this.#t.indexOf(slBind18925);
    slBind18926 !== -1 && this.#t.splice(slBind18926, 1);
    this.#e._unregister(slIn8423);
  }
  #n(slIn951) {
    if (!slIn951)
      return {
        rows: 1,
        columns: 1,
      };
    if (Array.isArray(slIn951)) {
      let slBind19107 = slIn951.length,
        slBind19108 = slIn951.reduce(
          (accumulator, current) => Math.max(accumulator, current.length),
          0,
        );
      return {
        rows: Math.max(slBind19107, 1),
        columns: Math.max(slBind19108, 1),
        values: slIn951,
      };
    }
    let slBind5993 = Math.floor(slIn951.rows),
      slBind5994 = Math.floor(slIn951.columns);
    if (!Number.isFinite(slBind5993) || slBind5993 <= 0)
      throw Error("Table rows must be a positive integer.");
    if (!Number.isFinite(slBind5994) || slBind5994 <= 0)
      throw Error("Table columns must be a positive integer.");
    if (
      slIn951.columnWidths !== undefined &&
      slIn951.columnTracks !== undefined
    )
      throw Error("Pass either table columnWidths or columnTracks, not both.");
    if (slIn951.values) {
      let slBind19394 = slIn951.values.length,
        slBind19395 = slIn951.values.reduce(
          (accumulator, current) => Math.max(accumulator, current.length),
          0,
        );
      slBind5993 = Math.max(slBind5993, slBind19394);
      slBind5994 = Math.max(slBind5994, slBind19395);
    }
    let slBind5995 =
      slIn951.left !== undefined ||
      slIn951.top !== undefined ||
      slIn951.width !== undefined ||
      slIn951.height !== undefined;
    return {
      rows: slBind5993,
      columns: slBind5994,
      values: slIn951.values,
      columnWidths: slIn951.columnWidths,
      columnTracks: slIn951.columnTracks,
      position: slBind5995
        ? {
            left: slIn951.left,
            top: slIn951.top,
            width: slIn951.width,
            height: slIn951.height,
          }
        : undefined,
    };
  }
  #r(slIn6889, slIn6890) {
    let slBind17213 = Math.max(0, slIn6889),
      slBind17214 = Math.max(0, slIn6890);
    return slBind17213 === 0 || slBind17214 === 0
      ? []
      : Array.from(
          {
            length: slBind17213,
          },
          () =>
            Array.from(
              {
                length: slBind17214,
              },
              () => "",
            ),
        );
  }
  #i() {
    return this.#e;
  }
}

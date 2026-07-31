// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: presentation recipe snapshot diff/inspect helpers.

let diffShapeRecords: (...args: any[]) => void;
let diffTableRecords: (...args: any[]) => void;
let diffChartRecords: (...args: any[]) => void;
let diffImageRecords: (...args: any[]) => void;
let diffElementUpdated: (...args: any[]) => any;
let previewText: (text: string, max?: number) => string;
let diffCollection: (...args: any[]) => void;
let elementAid: (el: any) => string;

export let inspectPresentationDiff: (before: any, after: any) => any;

export function initRecipeInspectHelpers(): void {
  inspectPresentationDiff = (ri826, ri827) => {
    let rb5481 = [],
      rb5482 = new Map(ri826.slides.map((item) => [item.id, item]));
    for (let rb6282 of ri827.slides) {
      let rb6358 = rb5482.get(rb6282.id),
        rb6359 = rb6282.index + 1;
      rb6358
        ? (rb6358.title !== rb6282.title ||
            (rb6358.layoutId ?? "") !== (rb6282.layoutId ?? "")) &&
          rb5481.push({
            kind: "slide",
            change: "updated",
            id: rb6282.aid,
            slide: rb6359,
            title: rb6282.title,
          })
        : rb5481.push({
            kind: "slide",
            change: "added",
            id: rb6282.aid,
            slide: rb6359,
            title: rb6282.title,
          });
      diffShapeRecords(rb5481, rb6358?.shapes ?? [], rb6282.shapes, rb6359);
      diffTableRecords(rb5481, rb6358?.tables ?? [], rb6282.tables, rb6359);
      diffChartRecords(rb5481, rb6358?.charts ?? [], rb6282.charts, rb6359);
      diffImageRecords(rb5481, rb6358?.images ?? [], rb6282.images, rb6359);
      !rb6358 && rb6282.notes.text.trim().length > 0
        ? rb5481.push({
            kind: "notes",
            change: "added",
            id: rb6282.notes.aid,
            slide: rb6359,
            textPreview: previewText(rb6282.notes.text),
          })
        : rb6358 &&
          rb6358.notes.text !== rb6282.notes.text &&
          rb5481.push({
            kind: "notes",
            change: "updated",
            id: rb6282.notes.aid,
            slide: rb6359,
            textPreview: previewText(rb6282.notes.text),
          });
    }
    return {
      targetIds: Array.from(new Set(rb5481.map((item) => item.id))),
      records: rb5481,
      ndjson: rb5481.map((item) => JSON.stringify(item)).join("\n"),
    };
  };
  diffShapeRecords = (ri3653, ri3654, ri3655, ri3656) => {
    let rb12227 = new Map(ri3654.map((item) => [item.id, item]));
    for (let rb13504 of ri3655) {
      let rb13853 = rb12227.get(rb13504.id),
        rb13854 = diffElementUpdated(rb13853, rb13504);
      if (!rb13854) continue;
      let rb13855 = rb13504.text.trim();
      ri3653.push({
        kind: rb13855.length > 0 ? "textbox" : "shape",
        change: rb13854,
        id: rb13504.aid,
        slide: ri3656,
        name: rb13504.name || undefined,
        textPreview: rb13855.length > 0 ? previewText(rb13504.text) : undefined,
        bbox: diffCollection(rb13504.frame),
      });
    }
  };
  diffTableRecords = (ri4038, ri4039, ri4040, ri4041) => {
    let rb12992 = new Map(ri4039.map((item) => [item.id, item]));
    for (let rb14541 of ri4040) {
      let rb14914 = rb12992.get(rb14541.id),
        rb14915 = diffElementUpdated(rb14914, rb14541);
      rb14915 &&
        ri4038.push({
          kind: "table",
          change: rb14915,
          id: rb14541.aid,
          slide: ri4041,
          name: rb14541.name || undefined,
          textPreview: rb14541.preview
            ? previewText(rb14541.preview)
            : undefined,
          bbox: diffCollection(rb14541.frame),
        });
    }
  };
  diffChartRecords = (ri4303, ri4304, ri4305, ri4306) => {
    let rb13384 = new Map(ri4304.map((item) => [item.id, item]));
    for (let rb15048 of ri4305) {
      let rb15398 = rb13384.get(rb15048.id),
        rb15399 = diffElementUpdated(rb15398, rb15048);
      rb15399 &&
        ri4303.push({
          kind: "chart",
          change: rb15399,
          id: rb15048.aid,
          slide: ri4306,
          name: rb15048.name || undefined,
          title: rb15048.title || undefined,
          bbox: diffCollection(rb15048.frame),
        });
    }
  };
  diffImageRecords = (ri4125, ri4126, ri4127, ri4128) => {
    let rb13114 = new Map(ri4126.map((item) => [item.id, item]));
    for (let rb14711 of ri4127) {
      let rb15097 = rb13114.get(rb14711.id),
        rb15098 = diffElementUpdated(rb15097, rb14711);
      rb15098 &&
        ri4125.push({
          kind: "image",
          change: rb15098,
          id: rb14711.aid,
          slide: ri4128,
          name: rb14711.name || undefined,
          textPreview: rb14711.alt ? previewText(rb14711.alt) : undefined,
          bbox: diffCollection(rb14711.frame),
        });
    }
  };
  diffElementUpdated = (ri10651, ri10652) => {
    if (!ri10651) return "added";
    if (JSON.stringify(ri10651) !== JSON.stringify(ri10652)) return "updated";
  };
  previewText = (ri9711, ri9712 = 120) => {
    let rb20235 = ri9711.replace(/\r?\n/g, " | ").trim();
    return rb20235.length <= ri9712
      ? rb20235
      : `${rb20235.slice(0, Math.max(1, ri9712 - 3))}...`;
  };
  diffCollection = (ri6872) => {
    if (!ri6872) return;
    let rb17189 = elementAid(ri6872.left),
      rb17190 = elementAid(ri6872.top),
      rb17191 = elementAid(ri6872.width),
      rb17192 = elementAid(ri6872.height);
    if (
      !(
        rb17189 === undefined ||
        rb17190 === undefined ||
        rb17191 === undefined ||
        rb17192 === undefined
      )
    )
      return [rb17189, rb17190, rb17191, rb17192];
  };
  elementAid = (ri10932) => {
    if (!(ri10932 === undefined || !Number.isFinite(ri10932)))
      return Math.round(ri10932 * 100) / 100;
  };
}

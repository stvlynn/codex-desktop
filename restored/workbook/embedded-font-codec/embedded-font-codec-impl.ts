// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: embedded-font base64 encode/decode (legacy VJe/HJe/WJe/GJe/UJe).
// Stage-3 wave-136.

export function VJe(props: any) {
  return props.map((item) => ({
    ...item,
    embeddedFonts: (item.embeddedFonts ?? []).map((_item) => ({
      ..._item,
      data: WJe(new Uint8Array(_item.data ?? [])),
    })),
  }));
}
export function HJe(props: any) {
  return props.map((item) => ({
    ...item,
    embeddedFonts: (item.embeddedFonts ?? []).map((_item) => ({
      ..._item,
      data: GJe(_item.data),
    })),
  }));
}
export function UJe() {
  let efcBind21713 = globalThis.Buffer;
  return efcBind21713 && typeof efcBind21713.from == "function"
    ? efcBind21713
    : undefined;
}
export function WJe(props: any) {
  let efcBind18059 = UJe();
  if (efcBind18059) return efcBind18059.from(props).toString("base64");
  let efcBind18060 = "";
  for (let efcBind22090 = 0; efcBind22090 < props.length; efcBind22090 += 32768)
    efcBind18060 += String.fromCharCode(
      ...props.subarray(efcBind22090, efcBind22090 + 32768),
    );
  return btoa(efcBind18060);
}
export function GJe(efcIn8196: any) {
  let efcBind18697 = UJe();
  if (efcBind18697) return efcBind18697.from(efcIn8196, "base64");
  let efcBind18698 = atob(efcIn8196),
    efcBind18699 = new Uint8Array(efcBind18698.length);
  for (
    let efcBind22728 = 0;
    efcBind22728 < efcBind18698.length;
    efcBind22728 += 1
  )
    efcBind18699[efcBind22728] = efcBind18698.charCodeAt(efcBind22728);
  return efcBind18699;
}

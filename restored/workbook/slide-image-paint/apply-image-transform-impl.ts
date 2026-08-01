// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: apply slide image rotation/flip (legacy hEe).
// Stage-3 wave-134.

export function hEe(sipIn5441: any, sipIn5442: any) {
  let sipBind15210 = ((sipIn5442.rotation ?? 0) * Math.PI) / 180,
    sipBind15211 = sipIn5442.verticalFlip ? -1 : 1;
  if (sipBind15210 === 0 && sipBind15211 === 1) return false;
  let sipBind15212 = sipIn5442.left + sipIn5442.width / 2,
    sipBind15213 = sipIn5442.top + sipIn5442.height / 2;
  return (
    sipIn5441.save(),
    sipIn5441.translate(sipBind15212, sipBind15213),
    sipBind15210 !== 0 && sipIn5441.rotate(sipBind15210),
    sipBind15211 !== 1 && sipIn5441.scale(1, sipBind15211),
    sipIn5441.translate(-sipBind15212, -sipBind15213),
    true
  );
}

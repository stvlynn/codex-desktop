// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: picture pixel ops + effect pipeline (legacy clamp/luma/duotone/Binding542).

function clampByteChannel(picIn13037) {
  return Math.max(0, Math.min(255, Math.round(picIn13037)));
}
function clampUnit01(picIn14145) {
  return Math.max(0, Math.min(1, picIn14145));
}
export function fixedPointToUnit01(picIn14690: unknown, picIn14691: unknown) {
  return clampUnit01((picIn14690 ?? picIn14691) / 1e5);
}
function lumaByte202(picIn12712, picIn12713, picIn12714) {
  return ((picIn12714 * 29 + picIn12713 * 151 + picIn12712 * 76) >> 8) & 255;
}
function lumaByte77(picIn12658, picIn12659, picIn12660) {
  return ((picIn12660 * 28 + picIn12659 * 151 + picIn12658 * 77) >> 8) & 255;
}
function contrastMultiplierFromFixed(picIn9965) {
  let fillBind20480 = Math.max(-100, Math.min(100, (picIn9965 ?? 0) / 1e3));
  return fillBind20480 >= 0
    ? 128 / (128 - 1.27 * fillBind20480)
    : (128 + 1.27 * fillBind20480) / 128;
}
export function mimeTypeToColorTolerance(picIn5542: unknown) {
  switch (picIn5542?.split(";")[0]?.trim().toLowerCase()) {
    case "image/jpeg":
    case "image/jpg":
      return 15;
    case "image/png":
    case "image/tiff":
    case "image/tif":
      return 1;
    case "image/bmp":
    case "image/x-bmp":
    case "image/x-ms-bmp":
      return 0;
    default:
      return 9;
  }
}
export function imageDataHasTransparency(props: unknown) {
  for (let fillBind22493 = 3; fillBind22493 < props.length; fillBind22493 += 4)
    if ((props[fillBind22493] ?? 255) !== 255) return true;
  return false;
}
export function applyGrayscaleToImageData(props: unknown) {
  for (
    let fillBind20223 = 0;
    fillBind20223 < props.length;
    fillBind20223 += 4
  ) {
    let fillBind21399 = lumaByte77(
      props[fillBind20223] ?? 0,
      props[fillBind20223 + 1] ?? 0,
      props[fillBind20223 + 2] ?? 0,
    );
    props[fillBind20223] = fillBind21399;
    props[fillBind20223 + 1] = fillBind21399;
    props[fillBind20223 + 2] = fillBind21399;
  }
}
export function applyLuminanceToImageData(
  picIn5731: unknown,
  picIn5732: unknown,
  picIn5733: unknown,
) {
  let fillBind15650 = ((picIn5732 ?? 0) / 1e5) * 255,
    fillBind15651 = contrastMultiplierFromFixed(picIn5733),
    fillBind15652 = fillBind15650 / 2;
  for (
    let fillBind17951 = 0;
    fillBind17951 < picIn5731.length;
    fillBind17951 += 4
  ) {
    picIn5731[fillBind17951] = clampByteChannel(
      ((picIn5731[fillBind17951] ?? 0) + fillBind15652 - 128) * fillBind15651 +
        128 +
        fillBind15652,
    );
    picIn5731[fillBind17951 + 1] = clampByteChannel(
      ((picIn5731[fillBind17951 + 1] ?? 0) + fillBind15652 - 128) *
        fillBind15651 +
        128 +
        fillBind15652,
    );
    picIn5731[fillBind17951 + 2] = clampByteChannel(
      ((picIn5731[fillBind17951 + 2] ?? 0) + fillBind15652 - 128) *
        fillBind15651 +
        128 +
        fillBind15652,
    );
  }
}
export function applyBiLevelToImageData(
  picIn7475: unknown,
  picIn7476: unknown,
) {
  let fillBind17952 = Math.floor(fixedPointToUnit01(picIn7476, 0) * 255);
  for (
    let fillBind19838 = 0;
    fillBind19838 < picIn7475.length;
    fillBind19838 += 4
  ) {
    let fillBind20979 =
      lumaByte202(
        picIn7475[fillBind19838] ?? 0,
        picIn7475[fillBind19838 + 1] ?? 0,
        picIn7475[fillBind19838 + 2] ?? 0,
      ) < fillBind17952
        ? 0
        : 255;
    picIn7475[fillBind19838] = fillBind20979;
    picIn7475[fillBind19838 + 1] = fillBind20979;
    picIn7475[fillBind19838 + 2] = fillBind20979;
  }
}
export function applyDuotoneToImageData(
  picIn4208: unknown,
  picIn4209: unknown,
  picIn4210: unknown,
) {
  if (!(!picIn4209 || !picIn4210))
    for (
      let fillBind14210 = 0;
      fillBind14210 < picIn4208.length;
      fillBind14210 += 4
    ) {
      let fillBind14959 = lumaByte202(
        picIn4208[fillBind14210] ?? 0,
        picIn4208[fillBind14210 + 1] ?? 0,
        picIn4208[fillBind14210 + 2] ?? 0,
      );
      picIn4208[fillBind14210] =
        Math.floor((picIn4209.r * (255 - fillBind14959)) / 255) +
        Math.floor((picIn4210.r * fillBind14959) / 255);
      picIn4208[fillBind14210 + 1] =
        Math.floor((picIn4209.g * (255 - fillBind14959)) / 255) +
        Math.floor((picIn4210.g * fillBind14959) / 255);
      picIn4208[fillBind14210 + 2] =
        Math.floor((picIn4209.b * (255 - fillBind14959)) / 255) +
        Math.floor((picIn4210.b * fillBind14959) / 255);
    }
}
export function applyColorChangeToImageData(
  picIn5210: unknown,
  picIn5211: unknown,
  picIn5212: unknown,
  picIn5213: unknown,
  picIn5214: unknown,
) {
  if (!picIn5211 || !picIn5212) return;
  let fillBind14756 = clampByteChannel(picIn5212.a * 255),
    fillBind14757 = picIn5214 || fillBind14756 === 0 || fillBind14756 === 255;
  for (
    let fillBind17441 = 0;
    fillBind17441 < picIn5210.length;
    fillBind17441 += 4
  )
    Math.abs((picIn5210[fillBind17441] ?? 0) - picIn5211.r) > picIn5213 ||
      Math.abs((picIn5210[fillBind17441 + 1] ?? 0) - picIn5211.g) > picIn5213 ||
      Math.abs((picIn5210[fillBind17441 + 2] ?? 0) - picIn5211.b) > picIn5213 ||
      ((picIn5210[fillBind17441] = picIn5212.r),
      (picIn5210[fillBind17441 + 1] = picIn5212.g),
      (picIn5210[fillBind17441 + 2] = picIn5212.b),
      fillBind14757 && (picIn5210[fillBind17441 + 3] = fillBind14756));
}

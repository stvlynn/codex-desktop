// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: quote-aware formula segment map (legacy _me/alnum-char).

export function mapOutsideQuotedSegments(
  addrIn3736: unknown,
  addrIn3737: unknown,
) {
  if (!addrIn3736.includes('"')) return addrIn3737(addrIn3736);
  let addrBind12434 = "",
    addrBind12435 = 0;
  for (; addrBind12435 < addrIn3736.length; ) {
    let addrBind14500 = addrIn3736.indexOf('"', addrBind12435);
    if (addrBind14500 < 0) {
      addrBind12434 += addrIn3737(addrIn3736.slice(addrBind12435));
      break;
    }
    addrBind12434 += addrIn3737(addrIn3736.slice(addrBind12435, addrBind14500));
    let addrBind14501 = addrBind14500 + 1;
    for (; addrBind14501 < addrIn3736.length; ) {
      if (addrIn3736[addrBind14501] === '"') {
        if (addrIn3736[addrBind14501 + 1] === '"') {
          addrBind14501 += 2;
          continue;
        }
        addrBind14501 += 1;
        break;
      }
      addrBind14501 += 1;
    }
    addrBind12434 += addrIn3736.slice(addrBind14500, addrBind14501);
    addrBind12435 = addrBind14501;
  }
  return addrBind12434;
}
export function isAlphanumericChar(addrIn13770: unknown) {
  return addrIn13770 ? /[A-Za-z0-9_]/.test(addrIn13770) : false;
}

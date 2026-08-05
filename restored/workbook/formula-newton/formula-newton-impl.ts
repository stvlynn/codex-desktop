// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Newton–Raphson solver (legacy vrt).
// Stage-3 wave-127.

const NEWTON_REL_TOL = 1e-13;
const NEWTON_YP_EPS = 1e-14;
const NEWTON_MAX_ITERS = 100;

export function newtonRaphson(
  fnwIn5039: any,
  fnwIn5040: any,
  fnwIn5041: any,
  fnwIn5042: any = NEWTON_REL_TOL,
  fnwIn5043: any = NEWTON_YP_EPS,
  fnwIn5044: any = NEWTON_MAX_ITERS,
) {
  let fnwBind14492 = fnwIn5041;
  for (let fnwBind16193 = 0; fnwBind16193 <= fnwIn5044; fnwBind16193 += 1) {
    let fnwBind16976 = fnwIn5039(fnwBind14492),
      fnwBind16977 = fnwIn5040(fnwBind14492);
    if (Math.abs(fnwBind16977) < fnwIn5043)
      throw Error(
        `Newton's method failed to converge because yp is smaller than eps (${fnwIn5043})`,
      );
    let fnwBind16978 = fnwBind14492 - fnwBind16976 / fnwBind16977;
    if (
      Math.abs(fnwBind14492 - fnwBind16978) <=
      fnwIn5042 * Math.abs(fnwBind16978)
    )
      return fnwBind16978;
    fnwBind14492 = fnwBind16978;
  }
  return fnwBind14492;
}

export const vrt = newtonRaphson;

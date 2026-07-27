// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Ev` — d3 helper.

type ContinuousScale = {
  domain: () => unknown;
  interpolator: () => unknown;
  clamp: () => unknown;
  unknown: () => unknown;
} & {
  domain: (d: unknown) => ContinuousScale;
  interpolator: (i: unknown) => ContinuousScale;
  clamp: (c: unknown) => ContinuousScale;
  unknown: (u: unknown) => ContinuousScale;
};

/** Copy domain/interpolator/clamp/unknown from one continuous scale onto another. */
export function copyContinuousScale(source: ContinuousScale, target: ContinuousScale): ContinuousScale {
  return target
    .domain(source.domain())
    .interpolator(source.interpolator())
    .clamp(source.clamp())
    .unknown(source.unknown());
}

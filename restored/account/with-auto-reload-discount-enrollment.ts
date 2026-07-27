// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Tag checkout payloads when enrolling in auto-reload discounts (`sTs` / `_y`).

export type AutoReloadDiscountOffer = {
  auto_reload?: unknown;
} | null;

export type WithAutoReloadDiscountEnrollmentProps<T extends object> = {
  discountOffer: AutoReloadDiscountOffer;
  isEnablingAutoReload: boolean;
  payload: T;
};

/**
 * Bundle `sTs` / export `_y`.
 * When enabling auto-reload and an auto-reload discount offer exists, set
 * `enroll_in_auto_reload_discount` on the checkout payload.
 */
export function withAutoReloadDiscountEnrollment<T extends object>({
  discountOffer,
  isEnablingAutoReload,
  payload,
}: WithAutoReloadDiscountEnrollmentProps<T>): T & {
  enroll_in_auto_reload_discount?: true;
} {
  return isEnablingAutoReload && discountOffer?.auto_reload != null
    ? { ...payload, enroll_in_auto_reload_discount: true }
    : payload;
}

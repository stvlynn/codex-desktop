// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_Da` / export `sF`.

export function trustedContactShareHref(
  contact:
    | {
        trusted_contact_email?: string | null;
        trusted_contact_phone_number?: string | null;
      }
    | null
    | undefined,
): string | undefined {
  const email = contact?.trusted_contact_email?.trim();
  if (email != null && email.length > 0) return `mailto:${email}`;
  const phone = contact?.trusted_contact_phone_number?.trim();
  if (phone != null && phone.length > 0) {
    return `sms:${phone.replace(/\s+/g, "")}`;
  }
  return undefined;
}

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `em` — pure helper.

/** First BCP-47 / CSS axis subtag before `-`. */
export function primaryLanguageSubtag(tag: string): string {
  return tag.split("-")[0] ?? tag;
}

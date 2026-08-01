// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paragraph alignment lookup (legacy kTe).
// Stage-3 wave-142.

export function kTe(whIn9849: any, whIn9850: any) {
  return whIn9850
    ? whIn9849.paragraphs?.find((whIn16437) => whIn16437.id === whIn9850)
        ?.textStyle?.alignment
    : whIn9849.paragraphs?.[0]?.textStyle?.alignment;
}

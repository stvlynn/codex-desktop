// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: collapse whitespace in raw text (legacy GOe).
// Stage-3 wave-139.

export function GOe(props: any) {
  if (props.length === 0) return props;
  let citBind18375 = props.replace(/\r?\n[\t ]*/g, " ");
  return (
    /^\s*\r?\n/.test(props) && (citBind18375 = citBind18375.trimStart()),
    /\r?\n[\t ]*$/.test(props) && (citBind18375 = citBind18375.trimEnd()),
    citBind18375
  );
}

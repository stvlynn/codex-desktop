// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: <code> children normalize (legacy YIe/XIe).
// Stage-3 wave-127.

export function normalizeCodeChildren(props: any) {
  if (!(props == null || props === false)) {
    if (typeof props == "string")
      return isWhitespaceOnlyCodeChild(props) ? undefined : props;
    if (typeof props == "number") return String(props);
    if (Array.isArray(props)) {
      let cccBind11881 = [],
        cccBind11882 = (cccIn4004) => {
          if (
            !(
              cccIn4004 == null ||
              cccIn4004 === false ||
              isWhitespaceOnlyCodeChild(cccIn4004)
            )
          ) {
            if (typeof cccIn4004 == "string") {
              cccBind11881.push(cccIn4004);
              return;
            }
            if (typeof cccIn4004 == "number") {
              cccBind11881.push(String(cccIn4004));
              return;
            }
            if (Array.isArray(cccIn4004)) {
              cccIn4004.forEach(cccBind11882);
              return;
            }
            throw Error("<code> children must be strings or numbers.");
          }
        };
      return (props.forEach(cccBind11882), cccBind11881);
    }
    throw Error("<code> children must be strings or numbers.");
  }
}
export function isWhitespaceOnlyCodeChild(props: any) {
  return (
    typeof props == "string" &&
    props.trim().length === 0 &&
    /[\n\r\t]/.test(props)
  );
}

export const YIe = normalizeCodeChildren;
export const XIe = isWhitespaceOnlyCodeChild;

// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: base64→bytes + resolve image asset (legacy Pwe/604).
// Stage-3 wave-134.

export function Pwe(piIn9889: any) {
  let piBind20440 = atob(piIn9889),
    piBind20441 = new Uint8Array(piBind20440.length);
  for (let piBind22778 = 0; piBind22778 < piBind20440.length; piBind22778++)
    piBind20441[piBind22778] = piBind20440.charCodeAt(piBind22778);
  return piBind20441;
}
export function workbookHelper604(piIn6324: any, piIn6325: any) {
  if (!piIn6325) return null;
  let piBind16448 = piIn6324.images;
  if (!piBind16448 || piBind16448.length === 0) return null;
  let piBind16449 = piBind16448.find((item) => item.id === piIn6325);
  if (!piBind16449) return null;
  let piBind16450 =
    typeof piBind16449.data == "string"
      ? Pwe(piBind16449.data)
      : piBind16449.data;
  return {
    id: piBind16449.id,
    contentType: piBind16449.contentType,
    data: piBind16450,
  };
}

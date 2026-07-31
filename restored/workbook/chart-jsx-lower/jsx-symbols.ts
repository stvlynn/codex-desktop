// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-93: presentation JSX symbols (legacy Binding1529/1530/presentation-jsx-element).

export const PRESENTATION_JSX_ELEMENT = Symbol.for(
  "@oai/granola/presentation-jsx.element",
);
export const PRESENTATION_JSX_FRAGMENT = Symbol.for(
  "@oai/granola/presentation-jsx.fragment",
);
export const workbookBinding1529 = PRESENTATION_JSX_ELEMENT;
export const workbookBinding1530 = PRESENTATION_JSX_FRAGMENT;

export function isPresentationJsxElement(value: any): boolean {
  return (
    typeof value == "object" &&
    !!value &&
    "$$type" in value &&
    value.$$type === PRESENTATION_JSX_ELEMENT
  );
}

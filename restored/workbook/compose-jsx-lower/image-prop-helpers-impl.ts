// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helpers: compose image prop accessors + empty paragraph (legacy LDe/RDe/gOe/681/KOe).
// Stage-3 wave-144.

import { ImageElement as workbookBinding660 } from "../image-element";
import {
  imageAssetRef as workbookHelper692,
  trimNonEmpty as workbookHelper695,
} from "../compose-element-snapshot";

export function LDe(props: any): any {
  if (props instanceof workbookBinding660) return props.crop;
}

export function RDe(props: any): any {
  if (props instanceof workbookBinding660) return workbookHelper695(props.fit);
}

export function workbookHelper681(value: any): any {
  return value.toSnapshot();
}

export function gOe(props: any): any {
  if (props instanceof workbookBinding660)
    return workbookHelper692(props.image);
}

export function KOe(props: any): boolean {
  return !props || props.runs.length === 0;
}

export const imageCrop = LDe;
export const imageFit = RDe;
export const snapshotValue = workbookHelper681;
export const assetRef = gOe;
export const isEmptyParagraph = KOe;

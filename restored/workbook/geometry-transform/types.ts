// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: FrameBbox / element-frame geometry types.

export type FrameRectPx = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FrameBboxFields = {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  rotation?: number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
};

export type FrameBboxProto = {
  xEmu?: number;
  yEmu?: number;
  widthEmu?: number;
  heightEmu?: number;
  rotation?: number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
};

export type FrameCanvasFrame = {
  left: number;
  top: number;
  width: number;
  height: number;
  rotation?: number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
};

/** Minimal canvas 2d surface used by transform helpers. */
export type CanvasTransformTarget = {
  save(): void;
  translate(x: number, y: number): void;
  rotate(radians: number): void;
  scale(x: number, y: number): void;
};

export type ElementWithOptionalBbox = {
  bbox?: FrameBboxProto | null;
  placeholderIndex?: number;
  placeholderType?: string;
};

export type SlideRenderHost = {
  resolveRenderContext(): {
    layout?: {
      elements: Array<{
        placeholderIndex?: number;
        placeholderTypeCandidates: string[];
        frame?: {
          left?: number;
          top?: number;
          width?: number;
          height?: number;
        };
      }>;
    } | null;
    masterLayout?: {
      elements: Array<{
        placeholderIndex?: number;
        placeholderTypeCandidates: string[];
        frame?: {
          left?: number;
          top?: number;
          width?: number;
          height?: number;
        };
      }>;
    } | null;
  };
};

// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Open runtime boundary: lodash cloneDeep CJS guts (not public npm exports).
// Thin MIT-compatible helpers matching the bundle's `alias()` thunk pattern.
// Consumers call `alias()` to obtain the real function/constructor.
/* eslint-disable @typescript-eslint/no-explicit-any */

type AnyFn = (...args: any[]) => any;

/** Bundle `nPc` / export `Df` — lodash `_initCloneObject`. */
export function initCloneObject(): (value: object) => object {
  return (value) => {
    const Ctor = value.constructor;
    return typeof Ctor === "function"
      ? Object.create(Object.getPrototypeOf(value))
      : {};
  };
}

/** Bundle `$Nc` / export `Of` — lodash `_cloneTypedArray`. */
export function cloneTypedArray(): (
  typedArray: ArrayBufferView,
  isDeep?: boolean,
) => ArrayBufferView {
  return (typedArray, isDeep) => {
    const buffer = isDeep
      ? (typedArray.buffer.slice(0) as ArrayBuffer)
      : typedArray.buffer;
    const Ctor = typedArray.constructor as new (
      buffer: ArrayBufferLike,
      byteOffset?: number,
      length?: number,
    ) => ArrayBufferView;
    return new Ctor(buffer, typedArray.byteOffset, (typedArray as any).length);
  };
}

/** Bundle `dcc` / export `Zf` — lodash `_copyArray`. */
export function copyArray(): <T>(array: T[], result?: T[]) => T[] {
  return (array, result) => {
    let index = -1;
    const length = array.length;
    const out = result ?? Array(length);
    while (++index < length) out[index] = array[index]!;
    return out;
  };
}

/** Bundle `qme` / export `Mgt` — lodash `_assignValue`. */
export function assignValue(): (
  object: object,
  key: PropertyKey,
  value: unknown,
) => void {
  return (object, key, value) => {
    if (key === "__proto__") {
      Object.defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true,
      });
    } else {
      (object as any)[key] = value;
    }
  };
}

/** Bundle `LNc` / export `jf` — lodash `_copyObject` / baseAssign loop. */
export function copyObject(): (
  source: object,
  props: PropertyKey[],
  object?: object,
  customizer?: AnyFn,
) => object {
  return (source, props, object, customizer) => {
    const target = object ?? {};
    const assign = assignValue();
    for (let index = -1, length = props.length; ++index < length; ) {
      const key = props[index]!;
      const newValue = customizer
        ? customizer(
            (target as any)[key],
            (source as any)[key],
            key,
            target,
            source,
          )
        : undefined;
      assign(
        target,
        key,
        newValue === undefined ? (source as any)[key] : newValue,
      );
    }
    return target;
  };
}

/** Bundle `UNc` / export `kf` — lodash `_cloneBuffer`. */
export function cloneBuffer(): (
  buffer: Buffer | Uint8Array,
  isDeep?: boolean,
) => Uint8Array {
  return (buffer, isDeep) => {
    if (isDeep) return buffer.slice() as Uint8Array;
    const result = new Uint8Array(buffer.length);
    result.set(buffer);
    return result;
  };
}

/** Bundle `_o` / export `K_t` — lodash `ListCache` constructor factory. */
export function ListCache(): new (entries?: Array<[unknown, unknown]>) => {
  size: number;
  clear: () => void;
  delete: (key: unknown) => boolean;
  get: (key: unknown) => unknown;
  has: (key: unknown) => boolean;
  set: (key: unknown, value: unknown) => unknown;
} {
  return class ListCacheImpl {
    __data__: Array<[unknown, unknown]>;
    size: number;
    constructor(entries?: Array<[unknown, unknown]>) {
      this.__data__ = entries ? entries.slice() : [];
      this.size = this.__data__.length;
    }
    clear(): void {
      this.__data__ = [];
      this.size = 0;
    }
    delete(key: unknown): boolean {
      const index = this.__data__.findIndex(
        ([k]) => k === key || (k !== k && key !== key),
      );
      if (index < 0) return false;
      this.__data__.splice(index, 1);
      this.size--;
      return true;
    }
    get(key: unknown): unknown {
      const entry = this.__data__.find(
        ([k]) => k === key || (k !== k && key !== key),
      );
      return entry ? entry[1] : undefined;
    }
    has(key: unknown): boolean {
      return this.__data__.some(([k]) => k === key || (k !== k && key !== key));
    }
    set(key: unknown, value: unknown): this {
      const index = this.__data__.findIndex(
        ([k]) => k === key || (k !== k && key !== key),
      );
      if (index < 0) {
        this.__data__.push([key, value]);
        this.size++;
      } else {
        this.__data__[index]![1] = value;
      }
      return this;
    }
  };
}

/** Bundle `qZr` / export `vY` — lodash `_baseFor` (forward). */
export function baseFor(): (
  object: object,
  iteratee: (value: unknown, key: string, object: object) => unknown,
  keysFunc: (object: object) => string[],
) => object {
  return (object, iteratee, keysFunc) => {
    const keys = keysFunc(object);
    let index = -1;
    const length = keys.length;
    const obj = Object(object);
    while (++index < length) {
      const key = keys[index]!;
      if (iteratee(obj[key], key, obj) === false) break;
    }
    return object;
  };
}

/** Bundle `AXi` / export `GB` — lodash `_baseRest`. */
export function baseRest(): (func: AnyFn, start?: number) => AnyFn {
  return (func, start) => {
    const startIndex = Math.max(
      start === undefined ? func.length - 1 : start,
      0,
    );
    return function (this: unknown, ...args: unknown[]) {
      const fixed = args.slice(0, startIndex);
      const rest = args.slice(startIndex);
      return func.apply(this, fixed.concat([rest]));
    };
  };
}

/** Bundle `jXi` / export `WB` — lodash `_isIterateeCall`. */
export function isIterateeCall(): (
  value: unknown,
  index: PropertyKey,
  object: unknown,
) => boolean {
  return (value, index, object) => {
    if (object == null || typeof object !== "object") return false;
    const type = typeof index;
    const obj = object as Record<PropertyKey, unknown>;
    if (
      type === "number"
        ? Array.isArray(object) ||
          (typeof (object as any).length === "number" &&
            Number(index) === index &&
            Number(index) > -1 &&
            Number(index) % 1 === 0 &&
            Number(index) < (object as any).length)
        : type === "string" && index in obj
    ) {
      return Object.is(obj[index], value);
    }
    return false;
  };
}

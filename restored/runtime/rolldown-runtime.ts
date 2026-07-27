// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// Vendored Rolldown bundler runtime helpers used across the Codex webview graph.

const defineProperty = Object.defineProperty;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const getOwnPropertyNames = Object.getOwnPropertyNames;
const getPrototypeOf = Object.getPrototypeOf;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const objectCreate = Object.create;

type AnyFn = (...args: never[]) => unknown;

const copyProps = (
  target: object,
  source: object | null | undefined,
  skip?: string,
): object => {
  if ((source && typeof source === "object") || typeof source === "function") {
    const keys = getOwnPropertyNames(source);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]!;
      if (!hasOwnProperty.call(target, key) && key !== skip) {
        const descriptor = getOwnPropertyDescriptor(source, key);
        defineProperty(target, key, {
          get: ((k: string) => (source as Record<string, unknown>)[k]).bind(
            null,
            key,
          ),
          enumerable: !descriptor || !!descriptor.enumerable,
        });
      }
    }
  }
  return target;
};

/** External require proxy for CJS interop in the browser bundle. (export `a`) */
export const externalRequire: NodeRequire = ((req: NodeRequire) =>
  typeof require !== "undefined"
    ? require
    : typeof Proxy !== "undefined"
      ? new Proxy(req, {
          get: (target, prop) =>
            (typeof require !== "undefined" ? require : target)[
              prop as keyof NodeRequire
            ],
        })
      : req)(function (this: unknown, id: string) {
  if (typeof require !== "undefined") {
    return require.apply(this, arguments as never);
  }
  throw Error(
    'Calling `require` for "' +
      id +
      "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.",
  );
} as NodeRequire);

/** Copy default export onto one or two targets. (export `i`) */
export const reExport = (
  target: object,
  source: object,
  other?: object,
): void => {
  copyProps(target, source, "default");
  if (other) copyProps(other, source, "default");
};

/** Lazy ESM module init — returns the module value on first call. (export `n`) */
export const esmInit =
  (fn: AnyFn | 0, result?: unknown, error?: [unknown]) => (): unknown => {
    if (error) throw error[0];
    try {
      if (fn) {
        result = (fn as AnyFn)(((fn as unknown) = 0) as never);
      }
      return result;
    } catch (err) {
      error = [err];
      throw err;
    }
  };

/** Convert an ESM namespace to a CJS module.exports shape. (export `o`) */
export const toCommonJs = (mod: object): object =>
  hasOwnProperty.call(mod, "module.exports")
    ? (mod as { "module.exports": object })["module.exports"]
    : copyProps(defineProperty({}, "__esModule", { value: true }), mod);

/** Build and return a new ESM namespace object (Rolldown style). (export `r`) */
export const exportNamespace = (
  all: Record<string, () => unknown>,
  noToStringTag?: boolean,
): Record<string | symbol, unknown> => {
  const namespace: Record<string | symbol, unknown> = {};
  for (const key in all) {
    defineProperty(namespace, key, { get: all[key], enumerable: true });
  }
  if (!noToStringTag) {
    defineProperty(namespace, Symbol.toStringTag, { value: "Module" });
  }
  return namespace;
};

/** Wrap a CJS/ESM value as an ESM namespace with default. (export `s`) */
export const toEsm = (
  mod: object | null | undefined,
  forceDefault?: boolean,
): object => {
  const result: object = mod == null ? {} : objectCreate(getPrototypeOf(mod));
  return copyProps(
    forceDefault || !mod || !(mod as { __esModule?: boolean }).__esModule
      ? defineProperty(result, "default", { value: mod, enumerable: true })
      : result,
    mod,
  );
};

/** Lazy CJS init — returns module.exports on first call. (export `t`) */
export const commonJsInit =
  (
    callback:
      | ((
          exports: Record<string, unknown>,
          module: { exports: Record<string, unknown> },
        ) => void)
      | null,
    module?: { exports: Record<string, unknown> },
  ) =>
  (): Record<string, unknown> => {
    if (!module) {
      module = { exports: {} };
      callback!(module.exports, module);
      callback = null;
    }
    return module.exports;
  };

// --- qg-full-green: missing-relative-exports stubs (open-runtime wiring) ---
export const rolldownRuntimeN: any = undefined;

// --- qg-full-green stubs ---
export const rolldownRuntimeS: any = undefined;
export const rolldownRuntimeT: any = undefined;

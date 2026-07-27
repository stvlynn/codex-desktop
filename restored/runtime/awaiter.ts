// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gOe` / export `Qft` — tslib-style __awaiter via extractFn(gOe).

type AwaiterPromiseCtor = PromiseConstructorLike & {
  new <T>(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: unknown) => void,
    ) => void,
  ): PromiseLike<T>;
};

type GeneratorLike = {
  next(value?: unknown): IteratorResult<unknown, unknown>;
  throw(value?: unknown): IteratorResult<unknown, unknown>;
};

/** tslib/babel `__awaiter` — drive an async generator against a Promise ctor. */
export function awaiter(
  thisArg: unknown,
  args: unknown[] | undefined,
  PromiseCtor: AwaiterPromiseCtor | undefined,
  generatorFactory: (...args: unknown[]) => GeneratorLike,
): PromiseLike<unknown> {
  const P = (PromiseCtor ||= Promise) as AwaiterPromiseCtor;
  function adopt<T>(value: T | PromiseLike<T>): PromiseLike<T> {
    return value instanceof (P as unknown as Function)
      ? (value as PromiseLike<T>)
      : new P<T>((resolve) => {
          resolve(value);
        });
  }
  return new P((resolve, reject) => {
    const generator = generatorFactory.apply(thisArg, args || []);
    function fulfilled(value: unknown) {
      try {
        step(generator.next(value));
      } catch (err) {
        reject(err);
      }
    }
    function rejected(value: unknown) {
      try {
        step(generator.throw(value));
      } catch (err) {
        reject(err);
      }
    }
    function step(result: IteratorResult<unknown, unknown>) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step(generator.next());
  });
}

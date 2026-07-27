// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nle`) / export `O_t`.

export type Draft202012Peers = {
  Ds: (...args: unknown[]) => unknown;
  Dse: (...args: unknown[]) => unknown;
  Mle: (...args: unknown[]) => unknown;
  Xo: (...args: unknown[]) => unknown;
  Yc: (...args: unknown[]) => unknown;
  _zod: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  cycles: (...args: unknown[]) => unknown;
  def: (...args: unknown[]) => unknown;
  defs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  el: (...args: unknown[]) => unknown;
  emit: (...args: unknown[]) => unknown;
  external: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  io: (...args: unknown[]) => unknown;
  join: (...args: unknown[]) => unknown;
  metadata: (...args: unknown[]) => unknown;
  override: (...args: unknown[]) => unknown;
  reused: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  target: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  unrepresentable: (...args: unknown[]) => unknown;
  uri: (...args: unknown[]) => unknown;
};
let peers: Draft202012Peers | null = null;

/** Wire draft202012 peers once companions land. */
export function setDraft202012Peers(next: Draft202012Peers): void {
  peers = next;
}

/**
 * Bundle export `O_t` / internal `Nle`.
 */
export function draft202012() {
  if (peers == null) {
    throw new Error("draft202012 peers are not configured");
  }
  return peers.e(() => {
    peers.Dse();
    peers.Ds();
    Mle = class {
      constructor(e) {
        this.counter = 0;
        this.metadataRegistry = peers.e?.metadata ?? peers.Yc;
        this.target = peers.e?.target ?? "draft-2020-12";
        this.unrepresentable = peers.e?.unrepresentable ?? "throw";
        this.override = peers.e?.override ?? (() => {});
        this.io = peers.e?.io ?? "output";
        this.seen = new Map();
      }
      process(
        e,
        t = {
          path: [],
          schemaPath: [],
        },
      ) {
        var n;
        let r = peers.e._zod.def,
          i = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: "",
          },
          a = this.seen.get(peers.e);
        if (a)
          return (
            a.count++,
            peers.t.schemaPath.includes(peers.e) && (a.cycle = peers.t.path),
            a.schema
          );
        let o = {
          schema: {},
          count: 1,
          cycle: undefined,
          path: peers.t.path,
        };
        this.seen.set(peers.e, o);
        let s = peers.e._zod.toJSONSchema?.();
        if (s) o.schema = s;
        else {
          let n = {
              ...peers.t,
              schemaPath: [...peers.t.schemaPath, peers.e],
              path: peers.t.path,
            },
            a = peers.e._zod.parent;
          if (a) {
            o.ref = a;
            this.process(a, n);
            this.seen.get(a).isParent = true;
          } else {
            let t = o.schema;
            switch (r.type) {
              case "string": {
                let n = peers.t;
                n.type = "string";
                let { minimum, maximum, format, patterns, contentEncoding } =
                  peers.e._zod.bag;
                if (
                  (typeof minimum == "number" && (n.minLength = minimum),
                  typeof maximum == "number" && (n.maxLength = maximum),
                  format &&
                    ((n.format = i[format] ?? format),
                    n.format === "" && delete n.format),
                  contentEncoding && (n.contentEncoding = contentEncoding),
                  patterns && patterns.size > 0)
                ) {
                  let e = [...patterns];
                  peers.e.length === 1
                    ? (n.pattern = peers.e[0].source)
                    : peers.e.length > 1 &&
                      (o.schema.allOf = [
                        ...peers.e.map((item) => {
                          return {
                            ...(this.target === "draft-7" ||
                            this.target === "draft-4" ||
                            this.target === "openapi-3.0"
                              ? {
                                  type: "string",
                                }
                              : {}),
                            pattern: peers.e.source,
                          };
                        }),
                      ]);
                }
                break;
              }
              case "number": {
                let n = peers.t,
                  {
                    minimum,
                    maximum,
                    format,
                    multipleOf,
                    exclusiveMaximum,
                    exclusiveMinimum,
                  } = peers.e._zod.bag;
                typeof format == "string" && format.includes("int")
                  ? (n.type = "integer")
                  : (n.type = "number");
                typeof exclusiveMinimum == "number" &&
                  (this.target === "draft-4" || this.target === "openapi-3.0"
                    ? ((n.minimum = exclusiveMinimum),
                      (n.exclusiveMinimum = true))
                    : (n.exclusiveMinimum = exclusiveMinimum));
                typeof minimum == "number" &&
                  ((n.minimum = minimum),
                  typeof exclusiveMinimum == "number" &&
                    this.target !== "draft-4" &&
                    (exclusiveMinimum >= minimum
                      ? delete n.minimum
                      : delete n.exclusiveMinimum));
                typeof exclusiveMaximum == "number" &&
                  (this.target === "draft-4" || this.target === "openapi-3.0"
                    ? ((n.maximum = exclusiveMaximum),
                      (n.exclusiveMaximum = true))
                    : (n.exclusiveMaximum = exclusiveMaximum));
                typeof maximum == "number" &&
                  ((n.maximum = maximum),
                  typeof exclusiveMaximum == "number" &&
                    this.target !== "draft-4" &&
                    (exclusiveMaximum <= maximum
                      ? delete n.maximum
                      : delete n.exclusiveMaximum));
                typeof multipleOf == "number" && (n.multipleOf = multipleOf);
                break;
              }
              case "boolean": {
                let e = peers.t;
                peers.e.type = "boolean";
                break;
              }
              case "bigint":
                if (this.unrepresentable === "throw")
                  throw Error("BigInt cannot be represented in JSON Schema");
                break;
              case "symbol":
                if (this.unrepresentable === "throw")
                  throw Error("Symbols cannot be represented in JSON Schema");
                break;
              case "null":
                this.target === "openapi-3.0"
                  ? ((peers.t.type = "string"),
                    (peers.t.nullable = true),
                    (peers.t.enum = [null]))
                  : (peers.t.type = "null");
                break;
              case "any":
                break;
              case "unknown":
                break;
              case "undefined":
                if (this.unrepresentable === "throw")
                  throw Error("Undefined cannot be represented in JSON Schema");
                break;
              case "void":
                if (this.unrepresentable === "throw")
                  throw Error("Void cannot be represented in JSON Schema");
                break;
              case "never":
                peers.t.not = {};
                break;
              case "date":
                if (this.unrepresentable === "throw")
                  throw Error("Date cannot be represented in JSON Schema");
                break;
              case "array": {
                let i = peers.t,
                  { minimum, maximum } = peers.e._zod.bag;
                typeof minimum == "number" && (i.minItems = minimum);
                typeof maximum == "number" && (i.maxItems = maximum);
                i.type = "array";
                i.items = this.process(r.element, {
                  ...n,
                  path: [...n.path, "items"],
                });
                break;
              }
              case "object": {
                let e = peers.t;
                peers.e.type = "object";
                peers.e.properties = {};
                let i = r.shape;
                for (let t in i)
                  peers.e.properties[peers.t] = this.process(i[peers.t], {
                    ...n,
                    path: [...n.path, "properties", peers.t],
                  });
                let a = new Set(Object.keys(i)),
                  o = new Set(
                    [...a].filter((item) => {
                      let t = r.shape[peers.e]._zod;
                      return this.io === "input"
                        ? peers.t.optin === undefined
                        : peers.t.optout === undefined;
                    }),
                  );
                o.size > 0 && (peers.e.required = Array.from(o));
                r.catchall?._zod.def.type === "never"
                  ? (peers.e.additionalProperties = false)
                  : r.catchall
                    ? r.catchall &&
                      (peers.e.additionalProperties = this.process(r.catchall, {
                        ...n,
                        path: [...n.path, "additionalProperties"],
                      }))
                    : this.io === "output" &&
                      (peers.e.additionalProperties = false);
                break;
              }
              case "union": {
                let e = peers.t,
                  i = r.discriminator !== undefined,
                  a = r.options.map((item, index) => {
                    return this.process(peers.e, {
                      ...n,
                      path: [...n.path, i ? "oneOf" : "anyOf", peers.t],
                    });
                  });
                i ? (peers.e.oneOf = a) : (peers.e.anyOf = a);
                break;
              }
              case "intersection": {
                let e = peers.t,
                  i = this.process(r.left, {
                    ...n,
                    path: [...n.path, "allOf", 0],
                  }),
                  a = this.process(r.right, {
                    ...n,
                    path: [...n.path, "allOf", 1],
                  }),
                  o = (e) => {
                    return (
                      "allOf" in peers.e && Object.keys(peers.e).length === 1
                    );
                  };
                peers.e.allOf = [
                  ...(o(i) ? i.allOf : [i]),
                  ...(o(a) ? a.allOf : [a]),
                ];
                break;
              }
              case "tuple": {
                let i = peers.t;
                i.type = "array";
                let a =
                    this.target === "draft-2020-12" ? "prefixItems" : "items",
                  o =
                    this.target === "draft-2020-12" ||
                    this.target === "openapi-3.0"
                      ? "items"
                      : "additionalItems",
                  s = r.items.map((item, index) => {
                    return this.process(peers.e, {
                      ...n,
                      path: [...n.path, a, peers.t],
                    });
                  }),
                  c = r.rest
                    ? this.process(r.rest, {
                        ...n,
                        path: [
                          ...n.path,
                          o,
                          ...(this.target === "openapi-3.0"
                            ? [r.items.length]
                            : []),
                        ],
                      })
                    : null;
                this.target === "draft-2020-12"
                  ? ((i.prefixItems = s), c && (i.items = c))
                  : this.target === "openapi-3.0"
                    ? ((i.items = {
                        anyOf: s,
                      }),
                      c && i.items.anyOf.push(c),
                      (i.minItems = s.length),
                      c || (i.maxItems = s.length))
                    : ((i.items = s), c && (i.additionalItems = c));
                let { minimum, maximum } = peers.e._zod.bag;
                typeof minimum == "number" && (i.minItems = minimum);
                typeof maximum == "number" && (i.maxItems = maximum);
                break;
              }
              case "record": {
                let e = peers.t;
                peers.e.type = "object";
                (this.target === "draft-7" ||
                  this.target === "draft-2020-12") &&
                  (peers.e.propertyNames = this.process(r.keyType, {
                    ...n,
                    path: [...n.path, "propertyNames"],
                  }));
                peers.e.additionalProperties = this.process(r.valueType, {
                  ...n,
                  path: [...n.path, "additionalProperties"],
                });
                break;
              }
              case "map":
                if (this.unrepresentable === "throw")
                  throw Error("Map cannot be represented in JSON Schema");
                break;
              case "set":
                if (this.unrepresentable === "throw")
                  throw Error("Set cannot be represented in JSON Schema");
                break;
              case "enum": {
                let e = peers.t,
                  n = peers.Xo(r.entries);
                n.every((item) => {
                  return typeof peers.e == "number";
                }) && (peers.e.type = "number");
                n.every((item) => {
                  return typeof peers.e == "string";
                }) && (peers.e.type = "string");
                peers.e.enum = n;
                break;
              }
              case "literal": {
                let e = peers.t,
                  n = [];
                for (let e of r.values)
                  if (peers.e === undefined) {
                    if (this.unrepresentable === "throw")
                      throw Error(
                        "Literal `undefined` cannot be represented in JSON Schema",
                      );
                  } else if (typeof peers.e == "bigint") {
                    if (this.unrepresentable === "throw")
                      throw Error(
                        "BigInt literals cannot be represented in JSON Schema",
                      );
                    n.push(Number(peers.e));
                  } else n.push(peers.e);
                if (n.length !== 0)
                  if (n.length === 1) {
                    let t = n[0];
                    peers.e.type = peers.t === null ? "null" : typeof peers.t;
                    this.target === "draft-4" || this.target === "openapi-3.0"
                      ? (peers.e.enum = [peers.t])
                      : (peers.e.const = peers.t);
                  } else {
                    n.every((item) => {
                      return typeof peers.e == "number";
                    }) && (peers.e.type = "number");
                    n.every((item) => {
                      return typeof peers.e == "string";
                    }) && (peers.e.type = "string");
                    n.every((item) => {
                      return typeof peers.e == "boolean";
                    }) && (peers.e.type = "string");
                    n.every((item) => {
                      return peers.e === null;
                    }) && (peers.e.type = "null");
                    peers.e.enum = n;
                  }
                break;
              }
              case "file": {
                let n = peers.t,
                  r = {
                    type: "string",
                    format: "binary",
                    contentEncoding: "binary",
                  },
                  { minimum, maximum, mime } = peers.e._zod.bag;
                minimum !== undefined && (r.minLength = minimum);
                maximum !== undefined && (r.maxLength = maximum);
                mime
                  ? mime.length === 1
                    ? ((r.contentMediaType = mime[0]), Object.assign(n, r))
                    : (n.anyOf = mime.map((item) => {
                        return {
                          ...r,
                          contentMediaType: peers.e,
                        };
                      }))
                  : Object.assign(n, r);
                break;
              }
              case "transform":
                if (this.unrepresentable === "throw")
                  throw Error(
                    "Transforms cannot be represented in JSON Schema",
                  );
                break;
              case "nullable": {
                let e = this.process(r.innerType, n);
                this.target === "openapi-3.0"
                  ? ((o.ref = r.innerType), (peers.t.nullable = true))
                  : (peers.t.anyOf = [
                      peers.e,
                      {
                        type: "null",
                      },
                    ]);
                break;
              }
              case "nonoptional":
                this.process(r.innerType, n);
                o.ref = r.innerType;
                break;
              case "success": {
                let e = peers.t;
                peers.e.type = "boolean";
                break;
              }
              case "default":
                this.process(r.innerType, n);
                o.ref = r.innerType;
                peers.t.default = JSON.parse(JSON.stringify(r.defaultValue));
                break;
              case "prefault":
                this.process(r.innerType, n);
                o.ref = r.innerType;
                this.io === "input" &&
                  (peers.t._prefault = JSON.parse(
                    JSON.stringify(r.defaultValue),
                  ));
                break;
              case "catch": {
                this.process(r.innerType, n);
                o.ref = r.innerType;
                let e;
                try {
                  e = r.catchValue(undefined);
                } catch {
                  throw Error(
                    "Dynamic catch values are not supported in JSON Schema",
                  );
                }
                peers.t.default = peers.e;
                break;
              }
              case "nan":
                if (this.unrepresentable === "throw")
                  throw Error("NaN cannot be represented in JSON Schema");
                break;
              case "template_literal": {
                let n = peers.t,
                  r = peers.e._zod.pattern;
                if (!r) throw Error("Pattern not found in template literal");
                n.type = "string";
                n.pattern = r.source;
                break;
              }
              case "pipe": {
                let e =
                  this.io === "input"
                    ? r.in._zod.def.type === "transform"
                      ? r.out
                      : r.in
                    : r.out;
                this.process(peers.e, n);
                o.ref = peers.e;
                break;
              }
              case "readonly":
                this.process(r.innerType, n);
                o.ref = r.innerType;
                peers.t.readOnly = true;
                break;
              case "promise":
                this.process(r.innerType, n);
                o.ref = r.innerType;
                break;
              case "optional":
                this.process(r.innerType, n);
                o.ref = r.innerType;
                break;
              case "lazy": {
                let t = peers.e._zod.innerType;
                this.process(peers.t, n);
                o.ref = peers.t;
                break;
              }
              case "custom":
                if (this.unrepresentable === "throw")
                  throw Error(
                    "Custom types cannot be represented in JSON Schema",
                  );
                break;
              case "function":
                if (this.unrepresentable === "throw")
                  throw Error(
                    "Function types cannot be represented in JSON Schema",
                  );
                break;
              default:
            }
          }
        }
        let c = this.metadataRegistry.get(peers.e);
        return (
          c && Object.assign(o.schema, c),
          this.io === "input" &&
            peers.el(peers.e) &&
            (delete o.schema.examples, delete o.schema.default),
          this.io === "input" &&
            o.schema._prefault &&
            ((n = o.schema).default ?? (n.default = o.schema._prefault)),
          delete o.schema._prefault,
          this.seen.get(peers.e).schema
        );
      }
      emit(e, t) {
        let n = {
            cycles: peers.t?.cycles ?? "ref",
            reused: peers.t?.reused ?? "inline",
            external: peers.t?.external ?? undefined,
          },
          r = this.seen.get(peers.e);
        if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
        let i = (e) => {
            let t = this.target === "draft-2020-12" ? "$defs" : "definitions";
            if (n.external) {
              let r = n.external.registry.get(peers.e[0])?.id,
                i =
                  n.external.uri ??
                  ((e) => {
                    return peers.e;
                  });
              if (r)
                return {
                  ref: i(r),
                };
              let a =
                peers.e[1].defId ??
                peers.e[1].schema.id ??
                `schema${this.counter++}`;
              return (
                (peers.e[1].defId = a),
                {
                  defId: a,
                  ref: `${i("__shared")}#/${peers.t}/${a}`,
                }
              );
            }
            if (peers.e[1] === r)
              return {
                ref: "#",
              };
            let i = `#/${peers.t}/`,
              a = peers.e[1].schema.id ?? `__schema${this.counter++}`;
            return {
              defId: a,
              ref: i + a,
            };
          },
          a = (e) => {
            if (peers.e[1].schema.$ref) return;
            let t = peers.e[1],
              { ref, defId } = i(peers.e);
            peers.t.def = {
              ...peers.t.schema,
            };
            defId && (peers.t.defId = defId);
            let a = peers.t.schema;
            for (let e in a) delete a[peers.e];
            a.$ref = ref;
          };
        if (n.cycles === "throw")
          for (let e of this.seen.entries()) {
            let t = peers.e[1];
            if (peers.t.cycle)
              throw Error(`Cycle detected: #/${peers.t.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let t of this.seen.entries()) {
          let r = peers.t[1];
          if (peers.e === peers.t[0]) {
            a(peers.t);
            continue;
          }
          if (n.external) {
            let r = n.external.registry.get(peers.t[0])?.id;
            if (peers.e !== peers.t[0] && r) {
              a(peers.t);
              continue;
            }
          }
          if (this.metadataRegistry.get(peers.t[0])?.id) {
            a(peers.t);
            continue;
          }
          if (r.cycle) {
            a(peers.t);
            continue;
          }
          if (r.count > 1 && n.reused === "ref") {
            a(peers.t);
            continue;
          }
        }
        let o = (e, t) => {
          let n = this.seen.get(peers.e),
            r = n.def ?? n.schema,
            i = {
              ...r,
            };
          if (n.ref === null) return;
          let a = n.ref;
          if (((n.ref = null), a)) {
            o(a, peers.t);
            let e = this.seen.get(a).schema;
            peers.e.$ref &&
            (peers.t.target === "draft-7" ||
              peers.t.target === "draft-4" ||
              peers.t.target === "openapi-3.0")
              ? ((r.allOf = r.allOf ?? []), r.allOf.push(peers.e))
              : (Object.assign(r, peers.e), Object.assign(r, i));
          }
          n.isParent ||
            this.override({
              zodSchema: peers.e,
              jsonSchema: r,
              path: n.path ?? [],
            });
        };
        for (let e of [...this.seen.entries()].reverse())
          o(peers.e[0], {
            target: this.target,
          });
        let s = {};
        if (
          (this.target === "draft-2020-12"
            ? (s.$schema = "https://json-schema.org/draft/2020-12/schema")
            : this.target === "draft-7"
              ? (s.$schema = "http://json-schema.org/draft-07/schema#")
              : this.target === "draft-4"
                ? (s.$schema = "http://json-schema.org/draft-04/schema#")
                : this.target === "openapi-3.0" ||
                  console.warn(`Invalid target: ${this.target}`),
          n.external?.uri)
        ) {
          let t = n.external.registry.get(peers.e)?.id;
          if (!peers.t) throw Error("Schema is missing an `id` property");
          s.$id = n.external.uri(peers.t);
        }
        Object.assign(s, r.def);
        let c = n.external?.defs ?? {};
        for (let e of this.seen.entries()) {
          let t = peers.e[1];
          peers.t.def && peers.t.defId && (c[peers.t.defId] = peers.t.def);
        }
        n.external ||
          (Object.keys(c).length > 0 &&
            (this.target === "draft-2020-12"
              ? (s.$defs = c)
              : (s.definitions = c)));
        try {
          return JSON.parse(JSON.stringify(s));
        } catch {
          throw Error("Error converting schema to JSON.");
        }
      }
    };
  });
}

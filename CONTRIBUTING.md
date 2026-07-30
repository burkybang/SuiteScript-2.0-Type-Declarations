# Contributing

Thanks for helping improve these SuiteScript 2.x type declarations. This guide covers how the declarations are structured and the conventions to follow so the surface stays consistent and accurate.

## Table of contents

- [Purpose and scope](#purpose-and-scope)
- [Runtime is the source of truth](#runtime-is-the-source-of-truth)
- [Member declaration conventions](#member-declaration-conventions)
- [JSDoc conventions](#jsdoc-conventions)
- [Module registry](#module-registry)
- [Verifying your change](#verifying-your-change)
- [Using the types (for consumers)](#using-the-types-for-consumers)

## Purpose and scope

This repository is a set of ambient TypeScript declaration files (`.d.ts`) that describe the SuiteScript 2.x API surface. It is **declarations only**:

- There is **no build step** and no compiled output. The `.d.ts` files are the product.
- There are **no runtime dependencies**, and consumers never install anything (see [Using the types](#using-the-types-for-consumers)).
- Each module lives in a file mirroring its module ID: `N/record` is `N/record.d.ts`, `N/crypto/certificate` is `N/crypto/certificate.d.ts`, and script-context types live under `contexts/`.

## Runtime is the source of truth

The single most important principle: **verify against the running platform, not just the Help Center.** NetSuite's documentation is frequently incomplete or wrong (missing overloads, wrong return shapes, wrong error codes, wrong governance, wrong `@since`). When the docs and the runtime disagree, the runtime wins, and the declaration should record the discrepancy in JSDoc so the next person does not "correct" it back.

- Prefer a real runtime probe (e.g. via SuiteScript executed against a live account) over a docs reading.
- When a declaration intentionally departs from the Help Center, say so in a short note (for example: "The Help Center lists `string`; the runtime returns `number`.").

## Member declaration conventions

### Overloads: nested braces are the tell

A member's shape signals its arity. Use bare method syntax only for a single-signature member; wrap overloads in an object type so the braces mark it as overloaded.

```ts
// 1 signature, no `.promise`  ->  bare method
method(x): T;

// 2+ signatures, no `.promise`  ->  object form
method: {
  (a): T;
  (b): T;
};
```

A member that carries a `.promise` variant is always in object form (a bare method cannot also have a property). The `.promise` member follows the same tell as its parent:

```ts
// single sync signature + promise
method: {
  (a): T;
  promise(a): Promise<T>;          // 1 promise signature -> bare method
};

// overloaded sync + overloaded promise
method: {
  (a): T;
  (b): T;
  promise: {                        // 2+ promise signatures -> nested braces
    (a): Promise<T>;
    (b): Promise<T>;
  };
};
```

Why the object form for overloads: TypeScript does **not** require an interface's overload signatures to be adjacent, and this repo has no linter to enforce it, so the braces make grouping a structural guarantee; they also make a second signature impossible to miss when large JSDoc blocks separate the signatures.

Generic parameters stay on the signature they belong to, which becomes a call signature inside the object form:

```ts
getValue: {
  <T extends FieldValue>(fieldId: string): T | undefined;
  <T extends FieldValue>(options: { fieldId: string }): T | undefined;
};
```

### Terminators

- Call signatures, method signatures, and interface/object-type members end with a semicolon `;`.
- Fields inside an inline **parameter options object** are separated with a comma `,`, matching the way the call is written in practice:

```ts
create(options: {
  type: record.Type | string,
  isDynamic?: boolean,
}): record.Record;
```

### Return types

- A method that returns nothing is typed `void` (the repo standardizes on `void` even where the runtime returns `null`).
- Chaining methods return their concrete owning type so calls can be chained.

## JSDoc conventions

Every documented member carries a JSDoc block. Keep the tag order and phrasing consistent with the surrounding file.

### `@see` Help Center links

Link **both** the private and public Help Center URLs, private first, for the same `fid`/section:

```
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642573343}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642573343.html}
```

### `@governance`

- `@governance none` when the call bills no units (lowercase `none`, not `None`).
- `@governance N units` otherwise (for example `@governance 10 units`). Verify the number against the runtime; the Help Center is often wrong.

### `@restriction`

Use one of the canonical phrasings. The common ones:

- `Server-side scripts only`
- `Client-side scripts only`
- `Client-side and server-side scripts`
- `Only available in dynamic mode`

Script-type-specific forms, when the runtime restricts a member to particular script types:

- `Supported only by RESTlet scripts`
- `Supported only by Suitelet scripts`
- `Supported only by Workflow Action scripts`
- `Supported only by Portlet, User Event, and Suitelet scripts`
- `Scheduled, RESTlet, and Bundle Installation scripts only`
- `Supported only by Suitelets, beforeLoad User Event scripts, and afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout`

If a member needs a phrasing not listed here, follow the same style (script type(s) + "only", or "Supported only by ..."), and add the new canonical form to this list in the same PR.

### `@since`

- **Omit `@since` on the module header.** Module-level declarations do not carry `@since` by convention.
- **Omit `@since` on fully-undocumented members** (see the marker below).
- For an undocumented `toString`/`toJSON`, inherit the **enclosing interface's** `@since`; if the enclosing interface has none, omit it (do not invent a value).

### Undocumented members

When a member exists at runtime but is not in the Help Center, drop the `@see` links and mark it:

```
 * Undocumented in the Help Center; present at runtime.
```

If it is present in docs under a different module, point there instead of using the marker.

### Formatting

- One space between the leading `*` column and `@tag`/text; keep separator (` *`) and tag lines aligned to the block's content asterisks.
- Do not embed process or attribution narration in JSDoc (no "verified in session N", probe IDs, etc.). Declarations read as clean public documentation.

## Module registry

A new module must be registered in two places, and both lists are kept **alphabetical by module ID**:

- `define.d.ts` — add the module to the `SuiteScriptModuleMap` interface (`'N/foo': foo;`).
- `index.d.ts` — add a `/// <reference path="./N/foo.d.ts" />` directive.

Only reference the sibling declaration files a module actually uses (for example `/// <reference path="./error.d.ts" />` when it throws `error.SuiteScriptError`). Avoid circular references between modules.

## Verifying your change

There is no build, but every change must type-check cleanly under strict mode over the whole declaration set:

```sh
tsc --noEmit --strict --skipLibCheck $(git ls-files '*.d.ts')
```

This must exit `0` with no new errors before you open a pull request.

## Using the types (for consumers)

Consumers do **not** need Node, npm, or any install step. Clone the repository and point your editor at the directory:

- **WebStorm / IntelliJ:** File → Settings → Languages & Frameworks → JavaScript → Libraries → add the cloned directory.

That is all that is required to get SuiteScript 2.x completions and type checking. Any maintainer tooling is optional and never a prerequisite for using the declarations.

/**
 * SuiteScript commerce/recordView module
 *
 * Use the N/commerce/recordView module to provide fast, cached, and public access to the item fields and
 * website settings.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1532341950}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1532341950.html}
 *
 * @module N/commerce/recordView
 * @NApiVersion 2.x
 */
interface recordView {

  /**
   * Retrieves one or more items with requested item fields from an Item Record.
   *
   * Returns a flat JSON structure with `field: value` pairs, one entry per requested item.
   *
   * **Return shape:** the returned values are NOT wrapped
   * in `{ value: ... }`. Each field maps directly to its raw value — `{ internalid: 1, isinactive: false, displayname: '...' }`.
   * The Help Center "Returns" section sample showing `{ internalid: { value: 523 } }` is a docs
   * bug (the same wrong sample is duplicated on the viewWebsite page). Scalar fields return their
   * native type (`string`, `number`, `boolean`); collection fields return arrays; dropdown/list
   * fields typically return `{ id, label }` objects per the docs prose.
   *
   * **Item eligibility:** at runtime, items that are not
   * web-displayable (e.g. `isonline=F`, or not associated with a web store) are rejected with
   * `INVALID_VALUE_1_FOR_PARAMETER_2`. This module is designed for SuiteCommerce web store use.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544630258}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544630258.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.ids IDs of the items you want to view. Must be `number[]`; string-coerced IDs are rejected with `SSS_INVALID_TYPE_ARG`.
   * @param options.fields Item fields to retrieve. **Must be `string[]` despite the docs claiming `string | string[]`** — a single `string` is rejected with `SSS_INVALID_TYPE_ARG` (the official docs syntax samples also use array form only). See the Supported Fields section of the help page for valid names; arbitrary record field names are rejected.
   * @param [options.fieldOptions] Field-options object. **Must be a plain object despite the docs claiming "Array of name, value pairs"** — the array form is rejected with `SSS_INVALID_TYPE_ARG`. Supported keys: `includeVat` (affects `onlinecustomerprice_detail`; default `false`).
   * @return An array of objects keyed by requested field name. Each value is the raw field value (NO `{ value }` wrapper); see method description for shape details.
   *
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If a parameter has the wrong type (e.g. `fields` not an array, `ids` containing strings, `fieldOptions` is an array instead of an object).
   * @throws {error.SuiteScriptError} FIELD_1_CANNOT_BE_EMPTY If a required property is missing from `options` entirely (e.g. `options.ids` undefined).
   * @throws {error.SuiteScriptError} FLD_CANNOT_BE_EMPTY If `ids` or `fields` is provided but empty. (Distinct code from `FIELD_1_CANNOT_BE_EMPTY`.)
   * @throws {error.SuiteScriptError} INVALID_VALUE_1_FOR_PARAMETER_2 If any supplied ID does not correspond to a web-displayable item. Not documented in the Help Center.
   */
  viewItems(options: {
    ids: number[],
    fields: string[],
    fieldOptions?: { includeVat?: boolean | string, [key: string]: unknown },
  }): { [fieldName: string]: string | number | boolean | null | object }[];

  /**
   * Retrieves the website details with requested website fields.
   *
   * Returns a flat JSON structure with `field: value` pairs (a single object, not an array).
   *
   * **Return shape:** the returned values are NOT wrapped
   * in `{ value: ... }`. Each field maps directly to its raw value — `{ internalid: 1, isinactive: false, displayname: '...' }`.
   * The Help Center "Returns" section sample is a copy-paste of the viewItems sample (showing both
   * the wrong wrapper AND a wrong array wrapper `[{...}, ...]`); the actual viewWebsite return is
   * a single object. The Help Center Syntax sample on the same page also has a variable-name bug
   * (assigns to `result.viewItems` instead of `result.viewWebsite`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544630269}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544630269.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.id ID of the website. Must be `number`; string-coerced IDs are rejected with `SSS_INVALID_TYPE_ARG`.
   * @param options.fields Website fields to retrieve. **Must be `string[]` despite the docs claiming `string | string[]`** — a single `string` is rejected with `SSS_INVALID_TYPE_ARG`. See the Supported Fields section of the help page for valid names; arbitrary record field names are rejected.
   * @param [options.fieldOptions] Field-options object. Docs prose says "Supported field options: None" so this parameter is rarely useful. By analogy with viewItems' runtime behavior, the array form ("Array of name, value pairs" per docs) is expected to be rejected — use a plain object if any keys are needed.
   * @return An object keyed by requested field name. Each value is the raw field value (NO `{ value }` wrapper); see method description.
   *
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If a parameter has the wrong type (e.g. `fields` not an array, `id` a string).
   * @throws {error.SuiteScriptError} FIELD_1_CANNOT_BE_EMPTY If a required property is missing from `options` entirely (e.g. `options.id` undefined).
   * @throws {error.SuiteScriptError} FLD_CANNOT_BE_EMPTY If `fields` is provided but empty. (Distinct code from `FIELD_1_CANNOT_BE_EMPTY`.)
   * @throws {error.SuiteScriptError} INVALID_VALUE_1_FOR_PARAMETER_2 If the supplied website ID does not exist. Not documented in the Help Center.
   */
  viewWebsite(options: {
    id: number,
    fields: string[],
    fieldOptions?: { [key: string]: unknown },
  }): { [fieldName: string]: string | number | boolean | null | object };
}

/// <reference path="./error.d.ts" />

/**
 * SuiteScript machineTranslation module
 *
 * Use the `N/machineTranslation` module to translate text into supported languages using
 * generative AI. This module uses the Oracle Cloud Infrastructure (OCI) Language service to
 * translate text in documents you provide. Unlike the `N/llm` module, this module supports
 * unlimited translation requests and does not require OCI credentials.
 *
 * Use `machineTranslation.createDocument(options)` to construct a `machineTranslation.Document`
 * (or pass an ad-hoc `{id, text, language?}` object), then pass an array of documents to
 * `machineTranslation.translate(options)` along with a target language. The returned
 * `machineTranslation.Response` exposes translated documents on `results` and per-document
 * errors on `errors`.
 *
 * Constraints: each document is limited to 5,000 characters; the combined length of all
 * documents in a single `translate` call is limited to 20,000 characters; document IDs must
 * be unique within a call; documents cannot be empty.
 *
 * **No feature flag required.** `runtime.isFeatureInEffect` returns `false` for
 * `MACHINE_TRANSLATION`, `MACHINETRANSLATION`, `AI_TRANSLATION`, and `OCI_LANGUAGE`, yet all
 * module calls succeed — the module is unconditionally available on accounts where the API
 * version supports it (2025.1+).
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_3151132758}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_3151132758.html}
 *
 * @module N/machineTranslation
 * @NApiVersion 2.x
 */
interface machineTranslation {

  /**
   * Creates a document with the specified ID, source language, and text content. A document
   * represents text to translate using `machineTranslation.translate(options)`.
   *
   * If `options.language` is not specified, the translation service detects the source language
   * automatically when the document is passed to `translate(options)`.
   *
   * For best translation results, each document should contain text in a single language only.
   *
   * **The 5,000-character limit is NOT enforced by this method** —
   * `createDocument({text: 'x'.repeat(5001)})` succeeds. The limit fires at `translate()` time
   * as `DOCUMENT_TOO_LARGE`. The check is strict `>` (exactly 5,000 is accepted; 5,001+ rejected).
   *
   * **`Language` values are case-sensitive** — `'english'` is rejected with `INVALID_LANGUAGE`;
   * only the exact enum values from `machineTranslation.Language` (all-uppercase) are accepted.
   *
   * **Empty string is treated as missing** — `createDocument({id: '', text: 'hi'})` throws
   * `SSS_MISSING_REQD_ARGUMENT`, not `SSS_INVALID_TYPE_ARG`. Same for `text: ''`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606031651}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606031651.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2025.1
   *
   * @param options
   * @param options.id The ID of the document. Must be unique within a single `translate` call. Empty string is treated as missing.
   * @param options.text The text of the document. Empty string is treated as missing. The 5,000-character limit applies at `translate()` time, not here.
   * @param [options.language] The source language of the document. If omitted, `null`, or `undefined`, the source language is detected automatically when the document is passed to `translate(options)`. Use values from the `machineTranslation.Language` enum (case-sensitive).
   * @return The newly-created document.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Fires for missing `options`, missing/empty `options.id`, or missing/empty `options.text`. Distinct from `SSS_INVALID_TYPE_ARG` — `null`/`undefined`/missing/empty-string for required fields all go here.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Fires for wrong-typed `options.id` (non-string), `options.text` (non-string), or `options.language` (non-string number, etc.). Distinct from `SSS_MISSING_REQD_ARGUMENT`.
   * @throws {error.SuiteScriptError} INVALID_LANGUAGE The `options.language` parameter uses a string value that isn't a member of the `machineTranslation.Language` enum. Case-sensitive — `'english'` is rejected.
   */
  createDocument(options: {
    id: string,
    text: string,
    language?: machineTranslation.Language | `${machineTranslation.Language}` | null,
  }): machineTranslation.Document;

  /**
   * Translates the provided documents into the specified language.
   *
   * Each document must be a `machineTranslation.Document` (created via
   * `machineTranslation.createDocument(options)`) or an ad-hoc object literal with `id`, `text`,
   * and optional `language` properties. Document IDs must be unique within the call. The
   * maximum length for a single document is 5,000 characters (strict `>` — 5,000 is accepted,
   * 5,001+ rejected); the maximum total length across all documents is 20,000 characters.
   * Documents cannot be empty. If a document does not specify a source language, the
   * translation service detects it automatically.
   *
   * Unlike methods in `N/llm`, this method supports unlimited translation requests and does
   * not consume the LLM shared free usage pool.
   *
   * **Validation order** (fastest-failing first):
   * 1. Options shape — `SSS_MISSING_REQD_ARGUMENT` for missing/no-args; `SSS_INVALID_TYPE_ARG` for `null`/`undefined`/wrong-type `options` itself.
   * 2. Required fields — `SSS_MISSING_REQD_ARGUMENT` for missing `documents` or `targetLanguage`.
   * 3. Argument types — `SSS_INVALID_TYPE_ARG` for non-array `documents`, non-string `targetLanguage`, non-number `timeout`.
   * 4. `targetLanguage` membership — `INVALID_LANGUAGE` for empty-string/unknown/wrong-case values. Case-sensitive — `'french'` is rejected; only the exact uppercase enum values are accepted.
   * 5. Documents-array length — `NOTHING_TO_TRANSLATE` for `documents: []` (new code not in original docs).
   * 6. Per-document shape — whole array rejected with `WRONG_PARAMETER_TYPE: Wrong parameter type: documents is expected as machineTranslation.Document[]` when any element is missing `id`/`text`, has wrong-type `id`/`text`/`language`, is `null`/string/number/empty-object/`{}`, or has an invalid `language` enum value.
   * 7. Document IDs unique — `DOCUMENT_IDS_MUST_BE_UNIQUE`.
   * 8. Per-document size — `DOCUMENT_TOO_LARGE` (>5,000 chars on any doc).
   * 9. Empty content — `DOCUMENT_CANNOT_BE_EMPTY` for any `text: ''`.
   * 10. Combined size — `INPUT_TOO_LARGE` (sum >20,000 chars). Fires after the per-document checks.
   * 11. OCI service call — actual translation; per-document non-fatal errors land in `Response.errors` instead of throwing.
   *
   * Extra unknown properties on the `options` bag (e.g. `{...options, foo: 'bar'}`) are
   * silently accepted; same for documents.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606031958}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606031958.html}
   *
   * @governance 100 units
   * @restriction Server-side scripts only
   * @since 2025.1
   */
  translate: {

    /**
     * Translates the provided documents synchronously.
     *
     * @param options
     * @param options.documents The documents to translate.
     * @param options.targetLanguage The language to translate the specified documents into. Use values from the `machineTranslation.Language` enum (case-sensitive).
     * @param [options.timeout = 30000] The timeout period to wait for a response from the translation service, in milliseconds. Defaults to `30000` (30 seconds). The JS-side type check only verifies number-type — negative and zero values pass at this layer.
     * @return The translation response, including translated documents in `results` (one per input, in the same order) and any per-document errors in `errors` (empty `[]` if none).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Missing `options`, `options.documents`, or `options.targetLanguage`. Fires before type checks.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Wrong-type `options` (null/undefined), `options.documents` (non-array), `options.targetLanguage` (non-string/null), or `options.timeout` (non-number).
     * @throws {error.SuiteScriptError} INVALID_LANGUAGE The `options.targetLanguage` value (or a `language` on one of the documents in `options.documents`) isn't a member of the `machineTranslation.Language` enum. Case-sensitive.
     * @throws {error.SuiteScriptError} NOTHING_TO_TRANSLATE The `options.documents` array is empty. **Undocumented in the official docs.**
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE `Wrong parameter type: documents is expected as machineTranslation.Document[]`. Fires when any element of `options.documents` is null/string/number/empty-object, is missing `id` or `text`, has wrong-type `id`/`text`/`language`, or has an invalid `language` enum value. The whole array is rejected — there are no per-document error codes for shape problems.
     * @throws {error.SuiteScriptError} DOCUMENT_CANNOT_BE_EMPTY One of the documents specified in the `options.documents` parameter has empty `text`. Fires after `WRONG_PARAMETER_TYPE` / `DOCUMENT_IDS_MUST_BE_UNIQUE` / `DOCUMENT_TOO_LARGE`.
     * @throws {error.SuiteScriptError} DOCUMENT_IDS_MUST_BE_UNIQUE Two or more documents specified in the `options.documents` parameter have duplicate IDs.
     * @throws {error.SuiteScriptError} DOCUMENT_TOO_LARGE One of the documents specified in the `options.documents` parameter is longer than 5,000 characters (strict `>` — exactly 5,000 is accepted).
     * @throws {error.SuiteScriptError} INPUT_TOO_LARGE The total length of all documents specified in the `options.documents` parameter is longer than 20,000 characters. Validation-order item — fires after the per-document checks.
     */
    (options: {
      documents: (machineTranslation.Document | {
        id: string,
        text: string,
        language?: machineTranslation.Language | `${machineTranslation.Language}` | null,
      })[],
      targetLanguage: machineTranslation.Language | `${machineTranslation.Language}`,
      timeout?: number,
    }): machineTranslation.Response;

    /**
     * Translates the provided documents asynchronously.
     *
     * Same validation order and error codes as the synchronous form — see the `translate`
     * parent JSDoc for the full client-side validation pipeline.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606035713}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606035713.html}
     *
     * @param options
     * @param options.documents The documents to translate.
     * @param options.targetLanguage The language to translate the specified documents into. Use values from the `machineTranslation.Language` enum (case-sensitive).
     * @param [options.timeout = 30000] The timeout period to wait for a response from the translation service, in milliseconds. Defaults to `30000` (30 seconds).
     * @return A promise that resolves to the translation response.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Missing `options`, `options.documents`, or `options.targetLanguage`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Wrong-type `options`, `options.documents`, `options.targetLanguage`, or `options.timeout`.
     * @throws {error.SuiteScriptError} INVALID_LANGUAGE The `options.targetLanguage` value (or a `language` on one of the documents) isn't a member of the `machineTranslation.Language` enum. Case-sensitive.
     * @throws {error.SuiteScriptError} NOTHING_TO_TRANSLATE The `options.documents` array is empty. **Undocumented in the official docs.**
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE `Wrong parameter type: documents is expected as machineTranslation.Document[]`. Fires when any element fails shape validation.
     * @throws {error.SuiteScriptError} DOCUMENT_CANNOT_BE_EMPTY One of the documents specified in the `options.documents` parameter is empty.
     * @throws {error.SuiteScriptError} DOCUMENT_IDS_MUST_BE_UNIQUE Two or more documents specified in the `options.documents` parameter have duplicate IDs.
     * @throws {error.SuiteScriptError} DOCUMENT_TOO_LARGE One of the documents specified in the `options.documents` parameter is longer than 5,000 characters (strict `>`).
     * @throws {error.SuiteScriptError} INPUT_TOO_LARGE The total length of all documents specified in the `options.documents` parameter is longer than 20,000 characters.
     */
    promise(options: {
      documents: (machineTranslation.Document | {
        id: string,
        text: string,
        language?: machineTranslation.Language | `${machineTranslation.Language}` | null,
      })[],
      targetLanguage: machineTranslation.Language | `${machineTranslation.Language}`,
      timeout?: number,
    }): Promise<machineTranslation.Response>;
  };
}

declare namespace machineTranslation {

  /**
   * The language to translate documents to or from. Used to set
   * `options.targetLanguage` in `machineTranslation.translate(options)` and `options.language`
   * in `machineTranslation.createDocument(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606032409}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606032409.html}
   *
   * @since 2025.1
   */
  export enum Language {
    ARABIC = 'ARABIC',
    BRAZILIAN_PORTUGUESE = 'BRAZILIAN_PORTUGUESE',
    CANADIAN_FRENCH = 'CANADIAN_FRENCH',
    CROATIAN = 'CROATIAN',
    CZECH = 'CZECH',
    DANISH = 'DANISH',
    DUTCH = 'DUTCH',
    ENGLISH = 'ENGLISH',
    FINNISH = 'FINNISH',
    FRENCH = 'FRENCH',
    GERMAN = 'GERMAN',
    GREEK = 'GREEK',
    HEBREW = 'HEBREW',
    HUNGARIAN = 'HUNGARIAN',
    ITALIAN = 'ITALIAN',
    JAPANESE = 'JAPANESE',
    KOREAN = 'KOREAN',
    NORWEGIAN = 'NORWEGIAN',
    POLISH = 'POLISH',
    PORTUGUESE = 'PORTUGUESE',
    ROMANIAN = 'ROMANIAN',
    RUSSIAN = 'RUSSIAN',
    SIMPLIFIED_CHINESE = 'SIMPLIFIED_CHINESE',
    SLOVAK = 'SLOVAK',
    SLOVENIAN = 'SLOVENIAN',
    SPANISH = 'SPANISH',
    SWEDISH = 'SWEDISH',
    THAI = 'THAI',
    TRADITIONAL_CHINESE = 'TRADITIONAL_CHINESE',
    TURKISH = 'TURKISH',
    VIETNAMESE = 'VIETNAMESE',
  }

  /**
   * A document returned from `machineTranslation.createDocument(options)` or
   * `machineTranslation.translate(options)`. Represents text to send to or receive from the
   * translation service.
   *
   * When passed to `translate(options)`, `text` is the source text and `language` is the
   * (optional) source language; if `language` is `null` or undefined, the translation service
   * detects the source language automatically. When received in a `Response.results` entry,
   * `text` is the translated text and `language` is the language the document was translated
   * into.
   *
   * **Ad-hoc input parity**: passing a plain `{id, text, language?}` object to `translate` behaves
   * identically to a `createDocument`-built `Document`: the same target translation, the same
   * automatic source-language detection when `language` is omitted, and the `Response.results`
   * entries are `machineTranslation.Document` instances either way. The ad-hoc form is a pure
   * convenience shorthand with no behavioral difference.
   *
   * **Object characteristics**: `constructor.name === 'NetSuiteObject'`,
   * NOT frozen (`Object.isFrozen === false`), NOT sealed (arbitrary property assignments stick
   * silently — `doc.unknownProp = 'foo'` succeeds and persists). However, the three documented
   * properties (`id`, `text`, `language`) ARE truly readonly via property descriptor —
   * assignment throws `READ_ONLY_PROPERTY: Read only property: <name>.`
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604033710}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604033710.html}
   *
   * @since 2025.1
   */
  interface Document {

    /**
     * The ID of the document. When passing documents to `machineTranslation.translate(options)`,
     * all document IDs must be unique within the call.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604034037}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604034037.html}
     *
     * @since 2025.1
     */
    readonly id: string;

    /**
     * The language of the document. On a document being passed to `translate(options)`, this is
     * the source language; if `null` or undefined, the translation service detects the source
     * language automatically. On a document received in `Response.results`, this is the language
     * the document was translated into.
     *
     * **When `language` is omitted from `createDocument(options)`, the runtime value is
     * `undefined`**. The
     * `toJSON()` output omits the key entirely in that case rather than emitting
     * `language: undefined` or `language: null`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604034449}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604034449.html}
     *
     * @since 2025.1
     */
    readonly language?: machineTranslation.Language | `${machineTranslation.Language}` | null;

    /**
     * The text of the document. On a document being passed to `translate(options)`, this is the
     * text to be translated (max 5,000 characters; cannot be empty). On a document received in
     * `Response.results`, this is the translated text.
     *
     * For best translation results, each document should contain text in a single language only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604034823}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604034823.html}
     *
     * @since 2025.1
     */
    readonly text: string;

    /**
     * Returns a stable runtime class identifier — the literal string `'machineTranslation.Document'`.
     *
     * Stable and useful for runtime type-narrowing.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2025.1
     * @return The literal string `'machineTranslation.Document'`.
     */
    toString(): 'machineTranslation.Document';

    /**
     * Returns the Document's own data properties (not its methods) as a plain object.
     *
     * The shape is `{id, text, language}` when language was set; `{id, text}` when language was
     * omitted at creation (the key is dropped, not emitted as `null` or `undefined`).
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2025.1
     * @return A snapshot of this Document's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * An error returned from the translation service when calling
   * `machineTranslation.translate(options)`. The translation service returns an error if a
   * provided document couldn't be translated (for example, if it contains unrecognized
   * characters).
   *
   * Error objects are returned only in `Response.errors` (the `Response` exposes no other
   * error-bearing property). If no errors occurred during translation, `Response.errors` is empty.
   * All properties are read-only; attempting to set any property throws a `READ_ONLY` error.
   *
   * In practice the service is highly tolerant, so a per-document error is hard to induce: emoji,
   * symbols, digit-only text, single very long tokens, mixed scripts, and even a mismatched declared
   * source `language` all pass through (translated, garbled, or unchanged) with an empty
   * `Response.errors`. This `{documentId, message}` shape is carried from the docs but was not
   * reproduced at runtime; a real error likely requires a service-side failure.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604035004}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604035004.html}
   *
   * @since 2025.1
   */
  interface Error {

    /**
     * The ID of the document that the error relates to.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604035154}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604035154.html}
     *
     * @since 2025.1
     */
    readonly documentId: string;

    /**
     * The text of the error message.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0604035337}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0604035337.html}
     *
     * @since 2025.1
     */
    readonly message: string;

    /**
     * Returns the Error's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2025.1
     * @return A snapshot of this Error's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * A response returned from `machineTranslation.translate(options)`. Represents the
   * translation results from the translation service.
   *
   * `results` contains the translated documents (one per input document, in the same order).
   * `errors` contains any per-document errors that occurred during translation; if no errors
   * occurred, `errors` is empty.
   *
   * **Object characteristics**: `Response.toString()` returns the literal
   * `'machineTranslation.Response'`. The shape is `{results, errors, toJSON, toString}`.
   *
   * All properties are read-only; attempting to set any property throws a `READ_ONLY` error.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606030944}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606030944.html}
   *
   * @since 2025.1
   */
  interface Response {

    /**
     * Per-document errors returned from the translation service. Each entry corresponds to a
     * document that could not be translated (for example, due to unrecognized characters). If
     * no errors occurred during translation, this array is empty (`[]`, not `null`/`undefined`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606031259}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606031259.html}
     *
     * @since 2025.1
     */
    readonly errors: machineTranslation.Error[];

    /**
     * The translated documents. Each entry corresponds to one input document, in the same order;
     * `Document.text` holds the translated text and `Document.language` holds the target language.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0606031415}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0606031415.html}
     *
     * @since 2025.1
     */
    readonly results: machineTranslation.Document[];

    /**
     * Returns a stable runtime class identifier — the literal string `'machineTranslation.Response'`.
     * Stable and useful for runtime type-narrowing.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2025.1
     * @return The literal string `'machineTranslation.Response'`.
     */
    toString(): 'machineTranslation.Response';

    /**
     * Returns the Response's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2025.1
     * @return A snapshot of this Response's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }
}

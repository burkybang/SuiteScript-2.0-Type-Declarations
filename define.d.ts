/**
 * SuiteScript module registry — maps module names to their exported types.
 */
interface SuiteScriptModuleMap {
  'N/action': action;
  'N/auth': auth;
  'N/cache': cache;
  'N/certificateControl': certificateControl;
  'N/compress': compress;
  'N/config': config;
  'N/crypto': crypto_;
  'N/currency': currency;
  'N/currentRecord': currentRecord;
  'N/documentCapture': documentCapture;
  'N/email': email;
  'N/encode': encode;
  'N/error': error;
  'N/file': file;
  'N/format': format;
  'N/format/i18n': i18n;
  'N/http': http;
  'N/https': https;
  'N/https/clientCertificate': clientCertificate;
  'N/keyControl': keyControl;
  'N/kpi': kpi;
  'N/llm': llm;
  'N/log': log;
  'N/machineTranslation': machineTranslation;
  'N/manufacturing/productionCharges': productionCharges;
  'N/pgp': pgp;
  'N/piremoval': piremoval;
  'N/plugin': plugin;
  'N/portlet': portlet;
  'N/query': query;
  'N/record': record;
  'N/recordContext': recordContext;
  'N/redirect': redirect;
  'N/render': render;
  'N/runtime': runtime;
  'N/scriptTypes/restlet': restlet;
  'N/search': search;
  'N/sessionRecordHandler': sessionRecordHandler;
  'N/sftp': sftp;
  'N/sso': sso;
  'N/suiteAppInfo': suiteAppInfo;
  'N/task': task;
  'N/task/accounting/recognition': recognition;
  'N/transaction': transaction;
  'N/translation': translation;
  'N/ui': ui;
  'N/ui/dialog': dialog;
  'N/ui/message': message;
  'N/ui/serverWidget': serverWidget;
  'N/url': url;
  'N/util': util;
  'N/workflow': workflow;
  'N/xml': xml;

  [key: string]: unknown; // Fallback: unknown for unregistered modules
}

/**
 * Resolves a tuple of module names to a tuple of their corresponding types.
 *
 * @example
 * ResolveModules<['N/error']> // => [error]
 */
type ResolveModules<T extends ReadonlyArray<keyof SuiteScriptModuleMap | string>> = {
  [K in keyof T]: T[K] extends keyof SuiteScriptModuleMap
    ? SuiteScriptModuleMap[T[K]]
    : unknown;
};

/**
 * AMD-style `define()` used in SuiteScript 2.x modules.
 *
 * The types of the callback parameters will be infered automatically
 * based on the module names passed in the dependency array.
 *
 * @example
 * define(['N/error'], error => {
 *   error.create({ name: 'MY_ERROR', message: 'Something went wrong' });
 * });
 */
declare function define<
  const T extends ReadonlyArray<keyof SuiteScriptModuleMap | string>,
  TReturn = void,
>(
  deps: T,
  callback: (...modules: ResolveModules<T>) => TReturn,
): TReturn;

/**
 * AMD-style `require()` used in SuiteScript 2.x client-side snippets.
 *
 * The types of the callback parameters will be infered automatically
 * based on the module names passed in the dependency array.
 *
 * @example
 * require(['N/error'], error => {
 *   error.create({ name: 'MY_ERROR', message: 'Something went wrong' });
 * });
 */
declare function require<
  const T extends ReadonlyArray<keyof SuiteScriptModuleMap | string>,
  TReturn = void,
>(
  deps: T,
  callback: (...modules: ResolveModules<T>) => TReturn,
): TReturn;

/**
 * SuiteScript `require()` function, available as a callback parameter in `define()`.
 * Resolves a module name to its corresponding type.
 */
interface SuiteScriptRequire {
  <T extends keyof SuiteScriptModuleMap>(moduleId: T): SuiteScriptModuleMap[T];

  (moduleId: string): unknown;
}

/**
 * Overload for `define()` using synchronous `require()` instead of a dependency array.
 *
 * Important: The parameter must be called "require" to be recognized by NetSuite.
 *
 * @example
 * define(require => {
 *   const error = require('N/error');
 *   error.create({ name: 'MY_ERROR', message: 'Something went wrong' });
 * });
 */
declare function define<TReturn = void>(
  callback: (require: SuiteScriptRequire) => TReturn,
): TReturn;
/// <reference path="./N/ui/dialog.d.ts" />
/// <reference path="./N/ui/message.d.ts" />
/// <reference path="./N/ui/serverWidget.d.ts" />
/// <reference path="./N/action.d.ts" />
/// <reference path="./N/auth.d.ts" />
/// <reference path="./N/cache.d.ts" />
/// <reference path="./N/config.d.ts" />
/// <reference path="./N/compress.d.ts" />
/// <reference path="./N/crypto.d.ts" />
/// <reference path="./N/currency.d.ts" />
/// <reference path="./N/currentRecord.d.ts" />
/// <reference path="./N/email.d.ts" />
/// <reference path="./N/encode.d.ts" />
/// <reference path="./N/error.d.ts" />
/// <reference path="./N/file.d.ts" />
/// <reference path="./N/format.d.ts" />
/// <reference path="./N/format/i18n.d.ts" />
/// <reference path="./N/http.d.ts" />
/// <reference path="./N/https.d.ts" />
/// <reference path="./N/llm.d.ts" />
/// <reference path="./N/log.d.ts" />
/// <reference path="./N/plugin.d.ts" />
/// <reference path="./N/portlet.d.ts" />
/// <reference path="./N/query.d.ts" />
/// <reference path="./N/record.d.ts" />
/// <reference path="./N/recordContext.d.ts" />
/// <reference path="./N/redirect.d.ts" />
/// <reference path="./N/render.d.ts" />
/// <reference path="./N/runtime.d.ts" />
/// <reference path="./N/search.d.ts" />
/// <reference path="./N/sessionRecordHandler.d.ts" />
/// <reference path="./N/sftp.d.ts" />
/// <reference path="./N/sso.d.ts" />
/// <reference path="./N/suiteAppInfo.d.ts" />
/// <reference path="./N/task.d.ts" />
/// <reference path="./N/transaction.d.ts" />
/// <reference path="./N/ui.d.ts" />
/// <reference path="./N/url.d.ts" />
/// <reference path="./N/util.d.ts" />
/// <reference path="./N/workflow.d.ts" />
/// <reference path="./N/xml.d.ts" />

interface DefineRequire {
  (module: 'N/ui/dialog'): dialog;

  (module: 'N/ui/message'): message;

  (module: 'N/ui/serverWidget'): serverWidget;

  (module: 'N/action'): action;

  (module: 'N/auth'): auth;

  (module: 'N/cache'): cache;

  (module: 'N/config'): config;

  (module: 'N/compress'): compress;

  (module: 'N/crypto'): crypto_;

  (module: 'N/currency'): currency;

  (module: 'N/currentRecord'): currentRecord;

  (module: 'N/email'): email;

  (module: 'N/encode'): encode;

  (module: 'N/error'): error;

  (module: 'N/file'): file;

  (module: 'N/format'): format;

  (module: 'N/format/i18n'): i18n;

  (module: 'N/http'): http;

  (module: 'N/https'): https;

  (module: 'N/llm'): llm;

  (module: 'N/log'): log;

  (module: 'N/plugin'): plugin;

  (module: 'N/portlet'): portlet;

  (module: 'N/query'): query;

  (module: 'N/record'): record;

  (module: 'N/recordContext'): recordContext;

  (module: 'N/redirect'): redirect;

  (module: 'N/render'): render;

  (module: 'N/runtime'): runtime;

  (module: 'N/search'): search;

  (module: 'N/sessionRecordHandler'): sessionRecordHandler;

  (module: 'N/sftp'): sftp;

  (module: 'N/sso'): sso;

  (module: 'N/suiteAppInfo'): suiteAppInfo;

  (module: 'N/task'): task;

  (module: 'N/transaction'): transaction;

  (module: 'N/ui'): ui;

  (module: 'N/url'): url;

  (module: 'N/util'): util;

  (module: 'N/workflow'): workflow;

  (module: 'N/xml'): xml;

  (module: string): any;
}

interface RequireDefine {
  (deps: string[], ready: (...modules: any[]) => any): void;

  (callback: (module: DefineRequire) => any): void;
}

declare var define: RequireDefine;

interface Window {
  define: RequireDefine;
}
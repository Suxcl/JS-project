globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, createError, readBody, getQuery as getQuery$1, getResponseStatusText } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/@prisma/client/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/devalue/index.js';
import { renderToString } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/radix3/dist/index.mjs';
import { version, unref } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///home/sak/Documents/GitHub/JS-project/project-JS/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const P=E(!0);return P[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const I=B(),d=I.name;function n(e){return e?e!=="false":!1}const l=globalThis.process?.platform||"",T=n(s.CI)||I.ci!==!1,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const c=t==="test"||n(s.TEST);n(s.MINIMAL)||T||c||!a;const C=/^win/i.test(l);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(a||C)&&s.TERM!=="dumb"||T);const R=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(R?.split(".")[0])||null;const w=globalThis.process||Object.create(null),_={versions:{}};new Proxy(w,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in _)return _[o]}});const L=!!globalThis.Netlify,A=!!globalThis.EdgeRuntime,D=globalThis.navigator?.userAgent==="Cloudflare-Workers",O=!!globalThis.Deno,S=!!globalThis.__lagon__,N=globalThis.process?.release?.name==="node",u=!!globalThis.Bun||!!globalThis.process?.versions?.bun,b=!!globalThis.fastly,G=[[L,"netlify"],[A,"edge-light"],[D,"workerd"],[O,"deno"],[S,"lagon"],[N,"node"],[u,"bun"],[b,"fastly"]];function K(){const e=G.find(o=>o[0]);if(e)return {name:e[1]}}const g=K();g?.name||"";

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  nuxtIcon: {
    size: "24px",
    class: "icon",
    aliases: {
      "nuxt": "logos:nuxt-icon"
    }
  }
});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/home/sak/Documents/GitHub/JS-project/project-JS/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/sak/Documents/GitHub/JS-project/project-JS","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/sak/Documents/GitHub/JS-project/project-JS/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/sak/Documents/GitHub/JS-project/project-JS/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/sak/Documents/GitHub/JS-project/project-JS/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/home/sak/Documents/GitHub/JS-project/project-JS/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _Pg53X5x2mm = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _Pg53X5x2mm
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_yOUBcf = () => Promise.resolve().then(function () { return _id__delete$7; });
const _lazy_uSrIl5 = () => Promise.resolve().then(function () { return _id__get$h; });
const _lazy_mWA5KT = () => Promise.resolve().then(function () { return _id__patch$9; });
const _lazy_jsBv35 = () => Promise.resolve().then(function () { return chat_post$1; });
const _lazy_vClmVP = () => Promise.resolve().then(function () { return _id__get$f; });
const _lazy_vuURZD = () => Promise.resolve().then(function () { return _id__patch$7; });
const _lazy_02lSvE = () => Promise.resolve().then(function () { return hideMessage_post$1; });
const _lazy_BZamXY = () => Promise.resolve().then(function () { return message_post$1; });
const _lazy_NL2gdT = () => Promise.resolve().then(function () { return chats_get$1; });
const _lazy_PKRetO = () => Promise.resolve().then(function () { return _chatId__get$1; });
const _lazy_eS2FZq = () => Promise.resolve().then(function () { return addUser_post$1; });
const _lazy_G9hAou = () => Promise.resolve().then(function () { return chatsUsers_get$1; });
const _lazy_930ShW = () => Promise.resolve().then(function () { return removeUser_post$1; });
const _lazy_rFvIYv = () => Promise.resolve().then(function () { return _id__delete$5; });
const _lazy_LPtkpn = () => Promise.resolve().then(function () { return _id__patch$5; });
const _lazy_kP60yn = () => Promise.resolve().then(function () { return comment_post$1; });
const _lazy_2iXgsv = () => Promise.resolve().then(function () { return fromUser_post$1; });
const _lazy_FhVwhe = () => Promise.resolve().then(function () { return invite_post$1; });
const _lazy_iquoIP = () => Promise.resolve().then(function () { return invites_get$1; });
const _lazy_EbNVoN = () => Promise.resolve().then(function () { return response_post$1; });
const _lazy_geQz4d = () => Promise.resolve().then(function () { return _id__get$d; });
const _lazy_vp5cE1 = () => Promise.resolve().then(function () { return _id__delete$3; });
const _lazy_tftP8g = () => Promise.resolve().then(function () { return _id__get$b; });
const _lazy_jX8cWW = () => Promise.resolve().then(function () { return _id__patch$3; });
const _lazy_m6xkxs = () => Promise.resolve().then(function () { return dislikeClicked_post$1; });
const _lazy_NjALtv = () => Promise.resolve().then(function () { return likeClicked_post$1; });
const _lazy_flHlTx = () => Promise.resolve().then(function () { return _id__get$9; });
const _lazy_xF1gX3 = () => Promise.resolve().then(function () { return posts_get$1; });
const _lazy_BwQ6jW = () => Promise.resolve().then(function () { return posts_post$1; });
const _lazy_eVfXHI = () => Promise.resolve().then(function () { return _id__get$7; });
const _lazy_mW4BQb = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_E5aNWi = () => Promise.resolve().then(function () { return _id__get$5; });
const _lazy_W7VjZz = () => Promise.resolve().then(function () { return _id__patch$1; });
const _lazy_1b0XIz = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_A25gCu = () => Promise.resolve().then(function () { return _userId__get$1; });
const _lazy_VwMLam = () => Promise.resolve().then(function () { return addFriend_post$1; });
const _lazy_2Qvw0F = () => Promise.resolve().then(function () { return checkIfFriends_post$1; });
const _lazy_XsqtXj = () => Promise.resolve().then(function () { return removeFriend_post$1; });
const _lazy_MRUfGe = () => Promise.resolve().then(function () { return getUserByEmail_post$1; });
const _lazy_6uWTJD = () => Promise.resolve().then(function () { return getUserByEmail$1; });
const _lazy_zjaXfi = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_9eNthU = () => Promise.resolve().then(function () { return users_get$1; });
const _lazy_l4Toz1 = () => Promise.resolve().then(function () { return users_post$1; });
const _lazy_YOIb3P = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/chats/:id', handler: _lazy_yOUBcf, lazy: true, middleware: false, method: "delete" },
  { route: '/api/chats/:id', handler: _lazy_uSrIl5, lazy: true, middleware: false, method: "get" },
  { route: '/api/chats/:id', handler: _lazy_mWA5KT, lazy: true, middleware: false, method: "patch" },
  { route: '/api/chats/chat', handler: _lazy_jsBv35, lazy: true, middleware: false, method: "post" },
  { route: '/api/chats/chatMessages/:id', handler: _lazy_vClmVP, lazy: true, middleware: false, method: "get" },
  { route: '/api/chats/chatMessages/:id', handler: _lazy_vuURZD, lazy: true, middleware: false, method: "patch" },
  { route: '/api/chats/chatMessages/hideMessage', handler: _lazy_02lSvE, lazy: true, middleware: false, method: "post" },
  { route: '/api/chats/chatMessages/message', handler: _lazy_BZamXY, lazy: true, middleware: false, method: "post" },
  { route: '/api/chats/chats', handler: _lazy_NL2gdT, lazy: true, middleware: false, method: "get" },
  { route: '/api/chats/chatUsers/:chatId', handler: _lazy_PKRetO, lazy: true, middleware: false, method: "get" },
  { route: '/api/chats/chatUsers/addUser', handler: _lazy_eS2FZq, lazy: true, middleware: false, method: "post" },
  { route: '/api/chats/chatUsers/chatsUsers', handler: _lazy_G9hAou, lazy: true, middleware: false, method: "get" },
  { route: '/api/chats/chatUsers/removeUser', handler: _lazy_930ShW, lazy: true, middleware: false, method: "post" },
  { route: '/api/comments/:id', handler: _lazy_rFvIYv, lazy: true, middleware: false, method: "delete" },
  { route: '/api/comments/:id', handler: _lazy_LPtkpn, lazy: true, middleware: false, method: "patch" },
  { route: '/api/comments/comment', handler: _lazy_kP60yn, lazy: true, middleware: false, method: "post" },
  { route: '/api/invites/fromUser', handler: _lazy_2iXgsv, lazy: true, middleware: false, method: "post" },
  { route: '/api/invites/invite', handler: _lazy_FhVwhe, lazy: true, middleware: false, method: "post" },
  { route: '/api/invites/invites', handler: _lazy_iquoIP, lazy: true, middleware: false, method: "get" },
  { route: '/api/invites/response', handler: _lazy_EbNVoN, lazy: true, middleware: false, method: "post" },
  { route: '/api/invites/toUser/:id', handler: _lazy_geQz4d, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/:id', handler: _lazy_vp5cE1, lazy: true, middleware: false, method: "delete" },
  { route: '/api/posts/:id', handler: _lazy_tftP8g, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/:id', handler: _lazy_jX8cWW, lazy: true, middleware: false, method: "patch" },
  { route: '/api/posts/dislikeClicked', handler: _lazy_m6xkxs, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/likeClicked', handler: _lazy_NjALtv, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/postComments/:id', handler: _lazy_flHlTx, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/posts', handler: _lazy_xF1gX3, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/posts', handler: _lazy_BwQ6jW, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/postUrls/:id', handler: _lazy_eVfXHI, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/:id', handler: _lazy_mW4BQb, lazy: true, middleware: false, method: "delete" },
  { route: '/api/users/:id', handler: _lazy_E5aNWi, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/:id', handler: _lazy_W7VjZz, lazy: true, middleware: false, method: "patch" },
  { route: '/api/users/chats/:id', handler: _lazy_1b0XIz, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/friends/:userId', handler: _lazy_A25gCu, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/friends/addFriend', handler: _lazy_VwMLam, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/friends/checkIfFriends', handler: _lazy_2Qvw0F, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/friends/removeFriend', handler: _lazy_XsqtXj, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/getUserByEmail', handler: _lazy_MRUfGe, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/getUserByEmail', handler: _lazy_6uWTJD, lazy: true, middleware: false, method: undefined },
  { route: '/api/users/posts/:id', handler: _lazy_zjaXfi, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/users', handler: _lazy_9eNthU, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/users', handler: _lazy_l4Toz1, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_YOIb3P, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_YOIb3P, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (C) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
    __proto__: null,
    template: template$1
});

const idShouldBeInteger = () => {
  throw createError({
    statusCode: 400,
    statusMessage: "ID should be an integer"
  });
};

const prisma$G = new PrismaClient();
const _id__delete$6 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    idShouldBeInteger();
  } else {
    await prisma$G.chat.delete({
      where: {
        id
      }
    });
    await prisma$G.chatUser.deleteMany({
      where: {
        chatId: id
      }
    });
    await prisma$G.chatMessage.deleteMany({
      where: {
        chatId: id
      }
    });
  }
  return `Post with id ${id} deleted successfully with urls`;
});

const _id__delete$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__delete$6
});

const prisma$F = new PrismaClient();
const _id__get$g = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const data = await prisma$F.chat.findUnique({
    where: {
      id
    }
  });
  return {
    chat: data
  };
});

const _id__get$h = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$g
});

const prisma$E = new PrismaClient();
const _id__patch$8 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const body = await readBody(event);
  let post = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Chat Patch ID should be an integer"
    });
  } else {
    post = await prisma$E.chat.update({
      where: {
        id
      },
      data: {
        name: body.name
      }
    });
  }
  return {
    edited_chat: post
  };
});

const _id__patch$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__patch$8
});

const prisma$D = new PrismaClient();
const chat_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newChat = await prisma$D.chat.create({
    data: {
      name: body.name
    }
  });
  let chatUsers = [];
  let tmp = JSON.parse(body.users);
  console.log(...oo_oo$1(`347887442_20_4_20_51_4`, "inside creating a new post ", tmp));
  tmp.forEach(async (elem) => {
    await prisma$D.chatUser.create({
      data: {
        chatId: newChat.id,
        chatUser: elem
      }
    });
    chatUsers.push(elem);
  });
  return {
    chat: newChat,
    chatUsers
  };
});
function oo_cm$1() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x24af6e=_0x3cfb;(function(_0x48a207,_0x299be7){var _0xbd55b=_0x3cfb,_0x418ba7=_0x48a207();while(!![]){try{var _0x367e83=parseInt(_0xbd55b(0x115))/0x1*(-parseInt(_0xbd55b(0x191))/0x2)+parseInt(_0xbd55b(0x17a))/0x3*(-parseInt(_0xbd55b(0x14a))/0x4)+parseInt(_0xbd55b(0x182))/0x5*(-parseInt(_0xbd55b(0x1da))/0x6)+-parseInt(_0xbd55b(0x1ef))/0x7*(-parseInt(_0xbd55b(0x1ad))/0x8)+parseInt(_0xbd55b(0x10c))/0x9+parseInt(_0xbd55b(0x196))/0xa+-parseInt(_0xbd55b(0x197))/0xb*(-parseInt(_0xbd55b(0x166))/0xc);if(_0x367e83===_0x299be7)break;else _0x418ba7['push'](_0x418ba7['shift']());}catch(_0x16ac5d){_0x418ba7['push'](_0x418ba7['shift']());}}}(_0x1ba4,0xa53e1));var j=Object[_0x24af6e(0x124)],H=Object['defineProperty'],G=Object[_0x24af6e(0x1c0)],ee=Object[_0x24af6e(0x177)],te=Object[_0x24af6e(0x17f)],ne=Object['prototype']['hasOwnProperty'],re=(_0x18a055,_0x546106,_0x3f8e24,_0x3ec89e)=>{var _0x5aa469=_0x24af6e;if(_0x546106&&typeof _0x546106=='object'||typeof _0x546106==_0x5aa469(0x13e)){for(let _0x35b455 of ee(_0x546106))!ne['call'](_0x18a055,_0x35b455)&&_0x35b455!==_0x3f8e24&&H(_0x18a055,_0x35b455,{'get':()=>_0x546106[_0x35b455],'enumerable':!(_0x3ec89e=G(_0x546106,_0x35b455))||_0x3ec89e[_0x5aa469(0x190)]});}return _0x18a055;},x=(_0x23ba1d,_0x25fbc6,_0x273ecc)=>(_0x273ecc=_0x23ba1d!=null?j(te(_0x23ba1d)):{},re(_0x25fbc6||!_0x23ba1d||!_0x23ba1d[_0x24af6e(0x116)]?H(_0x273ecc,'default',{'value':_0x23ba1d,'enumerable':!0x0}):_0x273ecc,_0x23ba1d)),X=class{constructor(_0x1e702c,_0x2ebb52,_0x358ab5,_0x5d17ac,_0x569748){var _0x20224a=_0x24af6e;this[_0x20224a(0x195)]=_0x1e702c,this[_0x20224a(0x1b6)]=_0x2ebb52,this[_0x20224a(0x19b)]=_0x358ab5,this[_0x20224a(0x167)]=_0x5d17ac,this[_0x20224a(0x1dd)]=_0x569748,this['_allowedToSend']=!0x0,this[_0x20224a(0x138)]=!0x0,this[_0x20224a(0x1b3)]=!0x1,this[_0x20224a(0x13f)]=!0x1,this[_0x20224a(0x10e)]=_0x1e702c['process']?.[_0x20224a(0x1c7)]?.[_0x20224a(0x17c)]===_0x20224a(0x181),this[_0x20224a(0x1e5)]=!this[_0x20224a(0x195)][_0x20224a(0x11b)]?.[_0x20224a(0x1b2)]?.[_0x20224a(0x171)]&&!this[_0x20224a(0x10e)],this[_0x20224a(0x1e3)]=null,this[_0x20224a(0x184)]=0x0,this[_0x20224a(0x1c1)]=0x14,this['_webSocketErrorDocsLink']=_0x20224a(0x1d0),this['_sendErrorMessage']=(this['_inBrowser']?_0x20224a(0x10d):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x20224a(0x165)];}async['getWebSocketClass'](){var _0x269b3f=_0x24af6e;if(this[_0x269b3f(0x1e3)])return this[_0x269b3f(0x1e3)];let _0x28543d;if(this[_0x269b3f(0x1e5)]||this['_inNextEdge'])_0x28543d=this[_0x269b3f(0x195)]['WebSocket'];else{if(this[_0x269b3f(0x195)][_0x269b3f(0x11b)]?.[_0x269b3f(0x142)])_0x28543d=this[_0x269b3f(0x195)][_0x269b3f(0x11b)]?.['_WebSocket'];else try{let _0x1f9aba=await import(_0x269b3f(0x151));_0x28543d=(await import((await import(_0x269b3f(0x172)))['pathToFileURL'](_0x1f9aba[_0x269b3f(0x19e)](this[_0x269b3f(0x167)],_0x269b3f(0x1de)))[_0x269b3f(0x12a)]()))[_0x269b3f(0x12e)];}catch{try{_0x28543d=require(require(_0x269b3f(0x151))[_0x269b3f(0x19e)](this[_0x269b3f(0x167)],'ws'));}catch{throw new Error(_0x269b3f(0x16f));}}}return this[_0x269b3f(0x1e3)]=_0x28543d,_0x28543d;}['_connectToHostNow'](){var _0x3c8a9b=_0x24af6e;this[_0x3c8a9b(0x13f)]||this[_0x3c8a9b(0x1b3)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x3c8a9b(0x138)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x3c8a9b(0x12d)]=new Promise((_0x482c81,_0x1a0e29)=>{var _0x2cf45c=_0x3c8a9b;this['getWebSocketClass']()['then'](_0x29630c=>{var _0x57aacb=_0x3cfb;let _0x422d73=new _0x29630c('ws://'+(!this[_0x57aacb(0x1e5)]&&this['dockerizedApp']?_0x57aacb(0x174):this[_0x57aacb(0x1b6)])+':'+this[_0x57aacb(0x19b)]);_0x422d73['onerror']=()=>{var _0x3b9de9=_0x57aacb;this[_0x3b9de9(0x1d9)]=!0x1,this[_0x3b9de9(0x1ce)](_0x422d73),this[_0x3b9de9(0x1e2)](),_0x1a0e29(new Error(_0x3b9de9(0x140)));},_0x422d73[_0x57aacb(0x14d)]=()=>{var _0x1fc2cd=_0x57aacb;this[_0x1fc2cd(0x1e5)]||_0x422d73[_0x1fc2cd(0x155)]&&_0x422d73[_0x1fc2cd(0x155)][_0x1fc2cd(0x16a)]&&_0x422d73['_socket'][_0x1fc2cd(0x16a)](),_0x482c81(_0x422d73);},_0x422d73[_0x57aacb(0x144)]=()=>{var _0x144348=_0x57aacb;this[_0x144348(0x138)]=!0x0,this[_0x144348(0x1ce)](_0x422d73),this['_attemptToReconnectShortly']();},_0x422d73[_0x57aacb(0x150)]=_0x485a2e=>{var _0x47de9f=_0x57aacb;try{_0x485a2e&&_0x485a2e[_0x47de9f(0x1b9)]&&this[_0x47de9f(0x1e5)]&&JSON['parse'](_0x485a2e[_0x47de9f(0x1b9)])[_0x47de9f(0x1e6)]==='reload'&&this[_0x47de9f(0x195)][_0x47de9f(0x10f)][_0x47de9f(0x1c2)]();}catch{}};})[_0x2cf45c(0x109)](_0x46bccf=>(this[_0x2cf45c(0x1b3)]=!0x0,this[_0x2cf45c(0x13f)]=!0x1,this[_0x2cf45c(0x138)]=!0x1,this[_0x2cf45c(0x1d9)]=!0x0,this[_0x2cf45c(0x184)]=0x0,_0x46bccf))['catch'](_0x3b751f=>(this[_0x2cf45c(0x1b3)]=!0x1,this[_0x2cf45c(0x13f)]=!0x1,console['warn'](_0x2cf45c(0x11f)+this[_0x2cf45c(0x165)]),_0x1a0e29(new Error(_0x2cf45c(0x16c)+(_0x3b751f&&_0x3b751f[_0x2cf45c(0x1a0)])))));}));}[_0x24af6e(0x1ce)](_0x46b2b7){var _0x14224e=_0x24af6e;this['_connected']=!0x1,this['_connecting']=!0x1;try{_0x46b2b7[_0x14224e(0x144)]=null,_0x46b2b7['onerror']=null,_0x46b2b7[_0x14224e(0x14d)]=null;}catch{}try{_0x46b2b7[_0x14224e(0x169)]<0x2&&_0x46b2b7[_0x14224e(0x15b)]();}catch{}}[_0x24af6e(0x1e2)](){var _0x47ffd4=_0x24af6e;clearTimeout(this[_0x47ffd4(0x143)]),!(this[_0x47ffd4(0x184)]>=this[_0x47ffd4(0x1c1)])&&(this[_0x47ffd4(0x143)]=setTimeout(()=>{var _0x5670b2=_0x47ffd4;this[_0x5670b2(0x1b3)]||this[_0x5670b2(0x13f)]||(this[_0x5670b2(0x113)](),this[_0x5670b2(0x12d)]?.[_0x5670b2(0x132)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x47ffd4(0x143)][_0x47ffd4(0x16a)]&&this[_0x47ffd4(0x143)][_0x47ffd4(0x16a)]());}async[_0x24af6e(0x161)](_0x137ffd){var _0x3175ba=_0x24af6e;try{if(!this['_allowedToSend'])return;this[_0x3175ba(0x138)]&&this[_0x3175ba(0x113)](),(await this[_0x3175ba(0x12d)])[_0x3175ba(0x161)](JSON[_0x3175ba(0x175)](_0x137ffd));}catch(_0x220b5c){console[_0x3175ba(0x1d2)](this['_sendErrorMessage']+':\\x20'+(_0x220b5c&&_0x220b5c[_0x3175ba(0x1a0)])),this['_allowedToSend']=!0x1,this[_0x3175ba(0x1e2)]();}}};function b(_0x36fa48,_0x113692,_0x7168f3,_0x3750c1,_0x5ea13c,_0x5cd4c7){var _0x193a33=_0x24af6e;let _0x447851=_0x7168f3[_0x193a33(0x1c5)](',')[_0x193a33(0x1a7)](_0x18f4f2=>{var _0x11f92d=_0x193a33;try{_0x36fa48[_0x11f92d(0x1e4)]||((_0x5ea13c===_0x11f92d(0x1d5)||_0x5ea13c===_0x11f92d(0x1d6)||_0x5ea13c==='astro'||_0x5ea13c===_0x11f92d(0x1ca))&&(_0x5ea13c+=!_0x36fa48[_0x11f92d(0x11b)]?.[_0x11f92d(0x1b2)]?.['node']&&_0x36fa48[_0x11f92d(0x11b)]?.[_0x11f92d(0x1c7)]?.[_0x11f92d(0x17c)]!=='edge'?_0x11f92d(0x117):_0x11f92d(0x14e)),_0x36fa48[_0x11f92d(0x1e4)]={'id':+new Date(),'tool':_0x5ea13c});let _0x16bd43=new X(_0x36fa48,_0x113692,_0x18f4f2,_0x3750c1,_0x5cd4c7);return _0x16bd43[_0x11f92d(0x161)][_0x11f92d(0x1b5)](_0x16bd43);}catch(_0x31bae7){return console[_0x11f92d(0x1d2)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x31bae7&&_0x31bae7[_0x11f92d(0x1a0)]),()=>{};}});return _0x1db34a=>_0x447851['forEach'](_0x14c34e=>_0x14c34e(_0x1db34a));}function _0x3cfb(_0x3a1172,_0x12c230){var _0x1ba4f5=_0x1ba4();return _0x3cfb=function(_0x3cfbde,_0x23f6e7){_0x3cfbde=_0x3cfbde-0x104;var _0x489f1a=_0x1ba4f5[_0x3cfbde];return _0x489f1a;},_0x3cfb(_0x3a1172,_0x12c230);}function W(_0x524e57){var _0x10a8a3=_0x24af6e;let _0x514f1c=function(_0x41bde4,_0x16808a){return _0x16808a-_0x41bde4;},_0x12f5ea;if(_0x524e57[_0x10a8a3(0x1e7)])_0x12f5ea=function(){var _0x204dbe=_0x10a8a3;return _0x524e57[_0x204dbe(0x1e7)][_0x204dbe(0x11c)]();};else{if(_0x524e57[_0x10a8a3(0x11b)]&&_0x524e57[_0x10a8a3(0x11b)][_0x10a8a3(0x1e8)]&&_0x524e57['process']?.[_0x10a8a3(0x1c7)]?.['NEXT_RUNTIME']!==_0x10a8a3(0x181))_0x12f5ea=function(){var _0x34f373=_0x10a8a3;return _0x524e57[_0x34f373(0x11b)]['hrtime']();},_0x514f1c=function(_0x59ede2,_0x33d407){return 0x3e8*(_0x33d407[0x0]-_0x59ede2[0x0])+(_0x33d407[0x1]-_0x59ede2[0x1])/0xf4240;};else try{let {performance:_0x17e606}=require('perf_hooks');_0x12f5ea=function(){return _0x17e606['now']();};}catch{_0x12f5ea=function(){return+new Date();};}}return{'elapsed':_0x514f1c,'timeStamp':_0x12f5ea,'now':()=>Date[_0x10a8a3(0x11c)]()};}function J(_0x1dc362,_0x1d3d5d,_0x263844){var _0x4f2d89=_0x24af6e;if(_0x1dc362[_0x4f2d89(0x170)]!==void 0x0)return _0x1dc362[_0x4f2d89(0x170)];let _0x3a70e9=_0x1dc362[_0x4f2d89(0x11b)]?.[_0x4f2d89(0x1b2)]?.[_0x4f2d89(0x171)]||_0x1dc362[_0x4f2d89(0x11b)]?.[_0x4f2d89(0x1c7)]?.[_0x4f2d89(0x17c)]==='edge';return _0x3a70e9&&_0x263844==='nuxt'?_0x1dc362['_consoleNinjaAllowedToStart']=!0x1:_0x1dc362[_0x4f2d89(0x170)]=_0x3a70e9||!_0x1d3d5d||_0x1dc362[_0x4f2d89(0x10f)]?.[_0x4f2d89(0x1c9)]&&_0x1d3d5d['includes'](_0x1dc362[_0x4f2d89(0x10f)][_0x4f2d89(0x1c9)]),_0x1dc362[_0x4f2d89(0x170)];}function Y(_0x260822,_0xa33144,_0x6fb393,_0x131282){var _0x174578=_0x24af6e;_0x260822=_0x260822,_0xa33144=_0xa33144,_0x6fb393=_0x6fb393,_0x131282=_0x131282;let _0x17a492=W(_0x260822),_0x298950=_0x17a492[_0x174578(0x17b)],_0x3c02bb=_0x17a492['timeStamp'];class _0xf6d11a{constructor(){var _0x302267=_0x174578;this[_0x302267(0x145)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x302267(0x1f0)]=/'([^\\\\']|\\\\')*'/,this[_0x302267(0x1cf)]=_0x260822['undefined'],this[_0x302267(0x129)]=_0x260822[_0x302267(0x194)],this[_0x302267(0x164)]=Object[_0x302267(0x1c0)],this['_getOwnPropertyNames']=Object[_0x302267(0x177)],this['_Symbol']=_0x260822[_0x302267(0x1d4)],this[_0x302267(0x13c)]=RegExp[_0x302267(0x13d)][_0x302267(0x12a)],this[_0x302267(0x1a3)]=Date['prototype'][_0x302267(0x12a)];}['serialize'](_0x10d75d,_0x537954,_0x53a4a3,_0x34d948){var _0x2b9dab=_0x174578,_0x8c21d4=this,_0x58f0f5=_0x53a4a3[_0x2b9dab(0x152)];function _0x45a725(_0x4872ec,_0x3ff946,_0x3bc435){var _0x4d55ec=_0x2b9dab;_0x3ff946[_0x4d55ec(0x110)]=_0x4d55ec(0x1aa),_0x3ff946[_0x4d55ec(0x14b)]=_0x4872ec[_0x4d55ec(0x1a0)],_0x10bbfa=_0x3bc435[_0x4d55ec(0x171)]['current'],_0x3bc435[_0x4d55ec(0x171)]['current']=_0x3ff946,_0x8c21d4[_0x4d55ec(0x1df)](_0x3ff946,_0x3bc435);}try{_0x53a4a3[_0x2b9dab(0x10a)]++,_0x53a4a3['autoExpand']&&_0x53a4a3[_0x2b9dab(0x1a5)][_0x2b9dab(0x1b7)](_0x537954);var _0x4d21f0,_0x1b8ccd,_0x2edc93,_0x1b9535,_0x1b37ba=[],_0x53b10b=[],_0x36cf72,_0x12e4ac=this[_0x2b9dab(0x1a8)](_0x537954),_0x23864b=_0x12e4ac==='array',_0x148180=!0x1,_0x24ad9f=_0x12e4ac===_0x2b9dab(0x13e),_0x546ec4=this['_isPrimitiveType'](_0x12e4ac),_0x2c463d=this[_0x2b9dab(0x173)](_0x12e4ac),_0x101a1d=_0x546ec4||_0x2c463d,_0x4a254f={},_0xf5a5b6=0x0,_0x2829ff=!0x1,_0x10bbfa,_0x34ac66=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x53a4a3[_0x2b9dab(0x1bf)]){if(_0x23864b){if(_0x1b8ccd=_0x537954[_0x2b9dab(0x180)],_0x1b8ccd>_0x53a4a3[_0x2b9dab(0x125)]){for(_0x2edc93=0x0,_0x1b9535=_0x53a4a3[_0x2b9dab(0x125)],_0x4d21f0=_0x2edc93;_0x4d21f0<_0x1b9535;_0x4d21f0++)_0x53b10b['push'](_0x8c21d4[_0x2b9dab(0x120)](_0x1b37ba,_0x537954,_0x12e4ac,_0x4d21f0,_0x53a4a3));_0x10d75d[_0x2b9dab(0x19c)]=!0x0;}else{for(_0x2edc93=0x0,_0x1b9535=_0x1b8ccd,_0x4d21f0=_0x2edc93;_0x4d21f0<_0x1b9535;_0x4d21f0++)_0x53b10b[_0x2b9dab(0x1b7)](_0x8c21d4['_addProperty'](_0x1b37ba,_0x537954,_0x12e4ac,_0x4d21f0,_0x53a4a3));}_0x53a4a3[_0x2b9dab(0x1cd)]+=_0x53b10b[_0x2b9dab(0x180)];}if(!(_0x12e4ac===_0x2b9dab(0x126)||_0x12e4ac===_0x2b9dab(0x121))&&!_0x546ec4&&_0x12e4ac!==_0x2b9dab(0x146)&&_0x12e4ac!=='Buffer'&&_0x12e4ac!==_0x2b9dab(0x1c6)){var _0x523740=_0x34d948[_0x2b9dab(0x1ba)]||_0x53a4a3[_0x2b9dab(0x1ba)];if(this['_isSet'](_0x537954)?(_0x4d21f0=0x0,_0x537954[_0x2b9dab(0x193)](function(_0x1f040b){var _0x3c57c9=_0x2b9dab;if(_0xf5a5b6++,_0x53a4a3[_0x3c57c9(0x1cd)]++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;return;}if(!_0x53a4a3[_0x3c57c9(0x16d)]&&_0x53a4a3[_0x3c57c9(0x152)]&&_0x53a4a3[_0x3c57c9(0x1cd)]>_0x53a4a3[_0x3c57c9(0x19a)]){_0x2829ff=!0x0;return;}_0x53b10b[_0x3c57c9(0x1b7)](_0x8c21d4[_0x3c57c9(0x120)](_0x1b37ba,_0x537954,_0x3c57c9(0x114),_0x4d21f0++,_0x53a4a3,function(_0x7fbeee){return function(){return _0x7fbeee;};}(_0x1f040b)));})):this[_0x2b9dab(0x128)](_0x537954)&&_0x537954['forEach'](function(_0xea7a37,_0x4f1472){var _0x3b0da6=_0x2b9dab;if(_0xf5a5b6++,_0x53a4a3[_0x3b0da6(0x1cd)]++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;return;}if(!_0x53a4a3[_0x3b0da6(0x16d)]&&_0x53a4a3['autoExpand']&&_0x53a4a3[_0x3b0da6(0x1cd)]>_0x53a4a3[_0x3b0da6(0x19a)]){_0x2829ff=!0x0;return;}var _0x4a18a5=_0x4f1472[_0x3b0da6(0x12a)]();_0x4a18a5[_0x3b0da6(0x180)]>0x64&&(_0x4a18a5=_0x4a18a5['slice'](0x0,0x64)+_0x3b0da6(0x1a6)),_0x53b10b['push'](_0x8c21d4['_addProperty'](_0x1b37ba,_0x537954,_0x3b0da6(0x104),_0x4a18a5,_0x53a4a3,function(_0x23265e){return function(){return _0x23265e;};}(_0xea7a37)));}),!_0x148180){try{for(_0x36cf72 in _0x537954)if(!(_0x23864b&&_0x34ac66[_0x2b9dab(0x1ea)](_0x36cf72))&&!this[_0x2b9dab(0x18f)](_0x537954,_0x36cf72,_0x53a4a3)){if(_0xf5a5b6++,_0x53a4a3[_0x2b9dab(0x1cd)]++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;break;}if(!_0x53a4a3[_0x2b9dab(0x16d)]&&_0x53a4a3[_0x2b9dab(0x152)]&&_0x53a4a3['autoExpandPropertyCount']>_0x53a4a3[_0x2b9dab(0x19a)]){_0x2829ff=!0x0;break;}_0x53b10b[_0x2b9dab(0x1b7)](_0x8c21d4[_0x2b9dab(0x185)](_0x1b37ba,_0x4a254f,_0x537954,_0x12e4ac,_0x36cf72,_0x53a4a3));}}catch{}if(_0x4a254f[_0x2b9dab(0x1eb)]=!0x0,_0x24ad9f&&(_0x4a254f[_0x2b9dab(0x183)]=!0x0),!_0x2829ff){var _0x4f1092=[][_0x2b9dab(0x1d7)](this[_0x2b9dab(0x1ab)](_0x537954))[_0x2b9dab(0x1d7)](this[_0x2b9dab(0x1a2)](_0x537954));for(_0x4d21f0=0x0,_0x1b8ccd=_0x4f1092['length'];_0x4d21f0<_0x1b8ccd;_0x4d21f0++)if(_0x36cf72=_0x4f1092[_0x4d21f0],!(_0x23864b&&_0x34ac66[_0x2b9dab(0x1ea)](_0x36cf72[_0x2b9dab(0x12a)]()))&&!this[_0x2b9dab(0x18f)](_0x537954,_0x36cf72,_0x53a4a3)&&!_0x4a254f['_p_'+_0x36cf72[_0x2b9dab(0x12a)]()]){if(_0xf5a5b6++,_0x53a4a3['autoExpandPropertyCount']++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;break;}if(!_0x53a4a3['isExpressionToEvaluate']&&_0x53a4a3[_0x2b9dab(0x152)]&&_0x53a4a3[_0x2b9dab(0x1cd)]>_0x53a4a3[_0x2b9dab(0x19a)]){_0x2829ff=!0x0;break;}_0x53b10b[_0x2b9dab(0x1b7)](_0x8c21d4['_addObjectProperty'](_0x1b37ba,_0x4a254f,_0x537954,_0x12e4ac,_0x36cf72,_0x53a4a3));}}}}}if(_0x10d75d[_0x2b9dab(0x110)]=_0x12e4ac,_0x101a1d?(_0x10d75d['value']=_0x537954[_0x2b9dab(0x1b4)](),this[_0x2b9dab(0x189)](_0x12e4ac,_0x10d75d,_0x53a4a3,_0x34d948)):_0x12e4ac===_0x2b9dab(0x11d)?_0x10d75d[_0x2b9dab(0x107)]=this[_0x2b9dab(0x1a3)][_0x2b9dab(0x17e)](_0x537954):_0x12e4ac===_0x2b9dab(0x1c6)?_0x10d75d['value']=_0x537954[_0x2b9dab(0x12a)]():_0x12e4ac===_0x2b9dab(0x1b0)?_0x10d75d['value']=this[_0x2b9dab(0x13c)][_0x2b9dab(0x17e)](_0x537954):_0x12e4ac===_0x2b9dab(0x122)&&this['_Symbol']?_0x10d75d[_0x2b9dab(0x107)]=this[_0x2b9dab(0x1e9)][_0x2b9dab(0x13d)][_0x2b9dab(0x12a)]['call'](_0x537954):!_0x53a4a3['depth']&&!(_0x12e4ac===_0x2b9dab(0x126)||_0x12e4ac===_0x2b9dab(0x121))&&(delete _0x10d75d['value'],_0x10d75d[_0x2b9dab(0x154)]=!0x0),_0x2829ff&&(_0x10d75d[_0x2b9dab(0x1bd)]=!0x0),_0x10bbfa=_0x53a4a3['node'][_0x2b9dab(0x118)],_0x53a4a3['node']['current']=_0x10d75d,this['_treeNodePropertiesBeforeFullValue'](_0x10d75d,_0x53a4a3),_0x53b10b[_0x2b9dab(0x180)]){for(_0x4d21f0=0x0,_0x1b8ccd=_0x53b10b['length'];_0x4d21f0<_0x1b8ccd;_0x4d21f0++)_0x53b10b[_0x4d21f0](_0x4d21f0);}_0x1b37ba['length']&&(_0x10d75d[_0x2b9dab(0x1ba)]=_0x1b37ba);}catch(_0x3a3d4c){_0x45a725(_0x3a3d4c,_0x10d75d,_0x53a4a3);}return this[_0x2b9dab(0x135)](_0x537954,_0x10d75d),this['_treeNodePropertiesAfterFullValue'](_0x10d75d,_0x53a4a3),_0x53a4a3[_0x2b9dab(0x171)][_0x2b9dab(0x118)]=_0x10bbfa,_0x53a4a3[_0x2b9dab(0x10a)]--,_0x53a4a3[_0x2b9dab(0x152)]=_0x58f0f5,_0x53a4a3['autoExpand']&&_0x53a4a3[_0x2b9dab(0x1a5)]['pop'](),_0x10d75d;}[_0x174578(0x1a2)](_0x566668){var _0x538282=_0x174578;return Object['getOwnPropertySymbols']?Object[_0x538282(0x18e)](_0x566668):[];}[_0x174578(0x1c8)](_0x149548){var _0x3eeb81=_0x174578;return!!(_0x149548&&_0x260822[_0x3eeb81(0x114)]&&this['_objectToString'](_0x149548)===_0x3eeb81(0x108)&&_0x149548[_0x3eeb81(0x193)]);}[_0x174578(0x18f)](_0x51a0ca,_0x3c87c9,_0x370dbc){var _0x554ad=_0x174578;return _0x370dbc['noFunctions']?typeof _0x51a0ca[_0x3c87c9]==_0x554ad(0x13e):!0x1;}[_0x174578(0x1a8)](_0x40e046){var _0xa27de4=_0x174578,_0x1dc087='';return _0x1dc087=typeof _0x40e046,_0x1dc087===_0xa27de4(0x17d)?this['_objectToString'](_0x40e046)===_0xa27de4(0x178)?_0x1dc087=_0xa27de4(0x199):this[_0xa27de4(0x112)](_0x40e046)===_0xa27de4(0x18d)?_0x1dc087=_0xa27de4(0x11d):this[_0xa27de4(0x112)](_0x40e046)===_0xa27de4(0x1ec)?_0x1dc087=_0xa27de4(0x1c6):_0x40e046===null?_0x1dc087=_0xa27de4(0x126):_0x40e046[_0xa27de4(0x137)]&&(_0x1dc087=_0x40e046[_0xa27de4(0x137)][_0xa27de4(0x162)]||_0x1dc087):_0x1dc087===_0xa27de4(0x121)&&this[_0xa27de4(0x129)]&&_0x40e046 instanceof this['_HTMLAllCollection']&&(_0x1dc087='HTMLAllCollection'),_0x1dc087;}[_0x174578(0x112)](_0x176202){var _0x302982=_0x174578;return Object[_0x302982(0x13d)]['toString'][_0x302982(0x17e)](_0x176202);}[_0x174578(0x111)](_0x5ea248){var _0xdbf1b7=_0x174578;return _0x5ea248===_0xdbf1b7(0x15a)||_0x5ea248===_0xdbf1b7(0x149)||_0x5ea248===_0xdbf1b7(0x1b1);}[_0x174578(0x173)](_0x62fdf9){var _0x40a0bb=_0x174578;return _0x62fdf9===_0x40a0bb(0x1d3)||_0x62fdf9===_0x40a0bb(0x146)||_0x62fdf9===_0x40a0bb(0x1b8);}[_0x174578(0x120)](_0x308682,_0x2d811c,_0x5061f1,_0x11124c,_0x245505,_0x18b888){var _0x3ebe98=this;return function(_0x25ea1d){var _0x2e8dfe=_0x3cfb,_0x4a9a45=_0x245505['node']['current'],_0x338487=_0x245505[_0x2e8dfe(0x171)][_0x2e8dfe(0x1cb)],_0x517034=_0x245505[_0x2e8dfe(0x171)]['parent'];_0x245505[_0x2e8dfe(0x171)][_0x2e8dfe(0x1c3)]=_0x4a9a45,_0x245505['node'][_0x2e8dfe(0x1cb)]=typeof _0x11124c=='number'?_0x11124c:_0x25ea1d,_0x308682[_0x2e8dfe(0x1b7)](_0x3ebe98[_0x2e8dfe(0x18b)](_0x2d811c,_0x5061f1,_0x11124c,_0x245505,_0x18b888)),_0x245505[_0x2e8dfe(0x171)]['parent']=_0x517034,_0x245505['node'][_0x2e8dfe(0x1cb)]=_0x338487;};}[_0x174578(0x185)](_0x583829,_0x1a94b9,_0x25b743,_0x13285a,_0x41a249,_0x46821a,_0x44f9b6){var _0x255893=this;return _0x1a94b9['_p_'+_0x41a249['toString']()]=!0x0,function(_0x3cf47){var _0x5ce8d7=_0x3cfb,_0x2405f2=_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x118)],_0x3f151d=_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x1cb)],_0x38358f=_0x46821a['node'][_0x5ce8d7(0x1c3)];_0x46821a['node'][_0x5ce8d7(0x1c3)]=_0x2405f2,_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x1cb)]=_0x3cf47,_0x583829[_0x5ce8d7(0x1b7)](_0x255893[_0x5ce8d7(0x18b)](_0x25b743,_0x13285a,_0x41a249,_0x46821a,_0x44f9b6)),_0x46821a[_0x5ce8d7(0x171)]['parent']=_0x38358f,_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x1cb)]=_0x3f151d;};}[_0x174578(0x18b)](_0x48bda0,_0x2e9a0b,_0x239439,_0x4d4922,_0x35898e){var _0x23c239=_0x174578,_0x32145d=this;_0x35898e||(_0x35898e=function(_0x3822ee,_0x3b24ed){return _0x3822ee[_0x3b24ed];});var _0x495af4=_0x239439[_0x23c239(0x12a)](),_0x55586f=_0x4d4922['expressionsToEvaluate']||{},_0x102336=_0x4d4922[_0x23c239(0x1bf)],_0x24b55b=_0x4d4922[_0x23c239(0x16d)];try{var _0x171801=this['_isMap'](_0x48bda0),_0x18a838=_0x495af4;_0x171801&&_0x18a838[0x0]==='\\x27'&&(_0x18a838=_0x18a838[_0x23c239(0x127)](0x1,_0x18a838[_0x23c239(0x180)]-0x2));var _0x5eea2c=_0x4d4922[_0x23c239(0x133)]=_0x55586f[_0x23c239(0x156)+_0x18a838];_0x5eea2c&&(_0x4d4922[_0x23c239(0x1bf)]=_0x4d4922['depth']+0x1),_0x4d4922[_0x23c239(0x16d)]=!!_0x5eea2c;var _0x4ed08c=typeof _0x239439==_0x23c239(0x122),_0x57df77={'name':_0x4ed08c||_0x171801?_0x495af4:this[_0x23c239(0x13b)](_0x495af4)};if(_0x4ed08c&&(_0x57df77['symbol']=!0x0),!(_0x2e9a0b===_0x23c239(0x199)||_0x2e9a0b===_0x23c239(0x187))){var _0x394a14=this[_0x23c239(0x164)](_0x48bda0,_0x239439);if(_0x394a14&&(_0x394a14[_0x23c239(0x1a9)]&&(_0x57df77['setter']=!0x0),_0x394a14[_0x23c239(0x1d1)]&&!_0x5eea2c&&!_0x4d4922[_0x23c239(0x12f)]))return _0x57df77['getter']=!0x0,this[_0x23c239(0x1af)](_0x57df77,_0x4d4922),_0x57df77;}var _0x21b969;try{_0x21b969=_0x35898e(_0x48bda0,_0x239439);}catch(_0x5985fc){return _0x57df77={'name':_0x495af4,'type':_0x23c239(0x1aa),'error':_0x5985fc['message']},this[_0x23c239(0x1af)](_0x57df77,_0x4d4922),_0x57df77;}var _0x3d30d3=this[_0x23c239(0x1a8)](_0x21b969),_0x499bf2=this['_isPrimitiveType'](_0x3d30d3);if(_0x57df77[_0x23c239(0x110)]=_0x3d30d3,_0x499bf2)this[_0x23c239(0x1af)](_0x57df77,_0x4d4922,_0x21b969,function(){var _0x5e72cc=_0x23c239;_0x57df77[_0x5e72cc(0x107)]=_0x21b969[_0x5e72cc(0x1b4)](),!_0x5eea2c&&_0x32145d['_capIfString'](_0x3d30d3,_0x57df77,_0x4d4922,{});});else{var _0xfe447c=_0x4d4922[_0x23c239(0x152)]&&_0x4d4922[_0x23c239(0x10a)]<_0x4d4922['autoExpandMaxDepth']&&_0x4d4922[_0x23c239(0x1a5)][_0x23c239(0x148)](_0x21b969)<0x0&&_0x3d30d3!==_0x23c239(0x13e)&&_0x4d4922[_0x23c239(0x1cd)]<_0x4d4922[_0x23c239(0x19a)];_0xfe447c||_0x4d4922[_0x23c239(0x10a)]<_0x102336||_0x5eea2c?(this['serialize'](_0x57df77,_0x21b969,_0x4d4922,_0x5eea2c||{}),this[_0x23c239(0x135)](_0x21b969,_0x57df77)):this['_processTreeNodeResult'](_0x57df77,_0x4d4922,_0x21b969,function(){var _0x2a6241=_0x23c239;_0x3d30d3==='null'||_0x3d30d3==='undefined'||(delete _0x57df77[_0x2a6241(0x107)],_0x57df77[_0x2a6241(0x154)]=!0x0);});}return _0x57df77;}finally{_0x4d4922[_0x23c239(0x133)]=_0x55586f,_0x4d4922['depth']=_0x102336,_0x4d4922[_0x23c239(0x16d)]=_0x24b55b;}}[_0x174578(0x189)](_0x401e08,_0x22ae66,_0x3810e6,_0x1588f0){var _0x33ccd0=_0x174578,_0x3855ed=_0x1588f0[_0x33ccd0(0x176)]||_0x3810e6[_0x33ccd0(0x176)];if((_0x401e08===_0x33ccd0(0x149)||_0x401e08===_0x33ccd0(0x146))&&_0x22ae66[_0x33ccd0(0x107)]){let _0xd02c93=_0x22ae66[_0x33ccd0(0x107)][_0x33ccd0(0x180)];_0x3810e6['allStrLength']+=_0xd02c93,_0x3810e6[_0x33ccd0(0x1cc)]>_0x3810e6['totalStrLength']?(_0x22ae66[_0x33ccd0(0x154)]='',delete _0x22ae66['value']):_0xd02c93>_0x3855ed&&(_0x22ae66[_0x33ccd0(0x154)]=_0x22ae66[_0x33ccd0(0x107)][_0x33ccd0(0x127)](0x0,_0x3855ed),delete _0x22ae66[_0x33ccd0(0x107)]);}}[_0x174578(0x128)](_0x538f56){var _0x1f312b=_0x174578;return!!(_0x538f56&&_0x260822[_0x1f312b(0x104)]&&this[_0x1f312b(0x112)](_0x538f56)===_0x1f312b(0x130)&&_0x538f56[_0x1f312b(0x193)]);}[_0x174578(0x13b)](_0x18296b){var _0x4b0b06=_0x174578;if(_0x18296b[_0x4b0b06(0x1dc)](/^\\d+$/))return _0x18296b;var _0x557d89;try{_0x557d89=JSON[_0x4b0b06(0x175)](''+_0x18296b);}catch{_0x557d89='\\x22'+this[_0x4b0b06(0x112)](_0x18296b)+'\\x22';}return _0x557d89[_0x4b0b06(0x1dc)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x557d89=_0x557d89[_0x4b0b06(0x127)](0x1,_0x557d89['length']-0x2):_0x557d89=_0x557d89['replace'](/'/g,'\\x5c\\x27')[_0x4b0b06(0x16b)](/\\\\"/g,'\\x22')[_0x4b0b06(0x16b)](/(^"|"$)/g,'\\x27'),_0x557d89;}['_processTreeNodeResult'](_0x5e0219,_0x216cb0,_0x10c23a,_0x4ea35d){var _0x223dff=_0x174578;this['_treeNodePropertiesBeforeFullValue'](_0x5e0219,_0x216cb0),_0x4ea35d&&_0x4ea35d(),this[_0x223dff(0x135)](_0x10c23a,_0x5e0219),this[_0x223dff(0x12b)](_0x5e0219,_0x216cb0);}[_0x174578(0x1df)](_0x4c69a0,_0x39f44e){var _0x550405=_0x174578;this[_0x550405(0x159)](_0x4c69a0,_0x39f44e),this[_0x550405(0x1ee)](_0x4c69a0,_0x39f44e),this[_0x550405(0x14f)](_0x4c69a0,_0x39f44e),this[_0x550405(0x158)](_0x4c69a0,_0x39f44e);}[_0x174578(0x159)](_0x42219a,_0x21e9b0){}['_setNodeQueryPath'](_0x1133bc,_0x130a77){}['_setNodeLabel'](_0x5723ca,_0x47e2b3){}[_0x174578(0x1e1)](_0x57dea1){return _0x57dea1===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x2e181a,_0x39a3e9){var _0x3921bf=_0x174578;this[_0x3921bf(0x1bb)](_0x2e181a,_0x39a3e9),this[_0x3921bf(0x11a)](_0x2e181a),_0x39a3e9[_0x3921bf(0x19f)]&&this['_sortProps'](_0x2e181a),this['_addFunctionsNode'](_0x2e181a,_0x39a3e9),this[_0x3921bf(0x163)](_0x2e181a,_0x39a3e9),this[_0x3921bf(0x1ae)](_0x2e181a);}[_0x174578(0x135)](_0x5e6dd7,_0x15696f){var _0x4ba12e=_0x174578;let _0x1c9167;try{_0x260822['console']&&(_0x1c9167=_0x260822[_0x4ba12e(0x1e0)][_0x4ba12e(0x14b)],_0x260822['console'][_0x4ba12e(0x14b)]=function(){}),_0x5e6dd7&&typeof _0x5e6dd7['length']==_0x4ba12e(0x1b1)&&(_0x15696f[_0x4ba12e(0x180)]=_0x5e6dd7[_0x4ba12e(0x180)]);}catch{}finally{_0x1c9167&&(_0x260822['console'][_0x4ba12e(0x14b)]=_0x1c9167);}if(_0x15696f[_0x4ba12e(0x110)]===_0x4ba12e(0x1b1)||_0x15696f[_0x4ba12e(0x110)]===_0x4ba12e(0x1b8)){if(isNaN(_0x15696f[_0x4ba12e(0x107)]))_0x15696f[_0x4ba12e(0x1a4)]=!0x0,delete _0x15696f['value'];else switch(_0x15696f[_0x4ba12e(0x107)]){case Number[_0x4ba12e(0x179)]:_0x15696f[_0x4ba12e(0x157)]=!0x0,delete _0x15696f[_0x4ba12e(0x107)];break;case Number[_0x4ba12e(0x141)]:_0x15696f[_0x4ba12e(0x106)]=!0x0,delete _0x15696f[_0x4ba12e(0x107)];break;case 0x0:this['_isNegativeZero'](_0x15696f[_0x4ba12e(0x107)])&&(_0x15696f['negativeZero']=!0x0);break;}}else _0x15696f[_0x4ba12e(0x110)]===_0x4ba12e(0x13e)&&typeof _0x5e6dd7[_0x4ba12e(0x162)]=='string'&&_0x5e6dd7[_0x4ba12e(0x162)]&&_0x15696f[_0x4ba12e(0x162)]&&_0x5e6dd7[_0x4ba12e(0x162)]!==_0x15696f[_0x4ba12e(0x162)]&&(_0x15696f[_0x4ba12e(0x1be)]=_0x5e6dd7[_0x4ba12e(0x162)]);}['_isNegativeZero'](_0x3eb735){var _0x5e08d5=_0x174578;return 0x1/_0x3eb735===Number[_0x5e08d5(0x141)];}[_0x174578(0x136)](_0x1d896a){var _0x1dc2fe=_0x174578;!_0x1d896a['props']||!_0x1d896a[_0x1dc2fe(0x1ba)]['length']||_0x1d896a[_0x1dc2fe(0x110)]===_0x1dc2fe(0x199)||_0x1d896a[_0x1dc2fe(0x110)]===_0x1dc2fe(0x104)||_0x1d896a[_0x1dc2fe(0x110)]===_0x1dc2fe(0x114)||_0x1d896a[_0x1dc2fe(0x1ba)]['sort'](function(_0x4d079a,_0x1aaf45){var _0x4bf240=_0x1dc2fe,_0x38311b=_0x4d079a[_0x4bf240(0x162)][_0x4bf240(0x198)](),_0x4d08f9=_0x1aaf45[_0x4bf240(0x162)][_0x4bf240(0x198)]();return _0x38311b<_0x4d08f9?-0x1:_0x38311b>_0x4d08f9?0x1:0x0;});}[_0x174578(0x1d8)](_0x1580e8,_0x444c8a){var _0x19ea0e=_0x174578;if(!(_0x444c8a[_0x19ea0e(0x153)]||!_0x1580e8[_0x19ea0e(0x1ba)]||!_0x1580e8['props'][_0x19ea0e(0x180)])){for(var _0x450078=[],_0x57f8a9=[],_0x4f637f=0x0,_0x20a83d=_0x1580e8[_0x19ea0e(0x1ba)][_0x19ea0e(0x180)];_0x4f637f<_0x20a83d;_0x4f637f++){var _0x720862=_0x1580e8[_0x19ea0e(0x1ba)][_0x4f637f];_0x720862[_0x19ea0e(0x110)]==='function'?_0x450078[_0x19ea0e(0x1b7)](_0x720862):_0x57f8a9[_0x19ea0e(0x1b7)](_0x720862);}if(!(!_0x57f8a9[_0x19ea0e(0x180)]||_0x450078[_0x19ea0e(0x180)]<=0x1)){_0x1580e8[_0x19ea0e(0x1ba)]=_0x57f8a9;var _0x34c242={'functionsNode':!0x0,'props':_0x450078};this['_setNodeId'](_0x34c242,_0x444c8a),this[_0x19ea0e(0x1bb)](_0x34c242,_0x444c8a),this[_0x19ea0e(0x11a)](_0x34c242),this['_setNodePermissions'](_0x34c242,_0x444c8a),_0x34c242['id']+='\\x20f',_0x1580e8[_0x19ea0e(0x1ba)][_0x19ea0e(0x15f)](_0x34c242);}}}['_addLoadNode'](_0x42d9d4,_0x516f68){}[_0x174578(0x11a)](_0x240cbc){}[_0x174578(0x14c)](_0x5dc223){var _0x370f97=_0x174578;return Array[_0x370f97(0x147)](_0x5dc223)||typeof _0x5dc223==_0x370f97(0x17d)&&this['_objectToString'](_0x5dc223)===_0x370f97(0x178);}[_0x174578(0x158)](_0x587285,_0x351c83){}[_0x174578(0x1ae)](_0x11bfa0){var _0x3768f3=_0x174578;delete _0x11bfa0[_0x3768f3(0x131)],delete _0x11bfa0[_0x3768f3(0x1ed)],delete _0x11bfa0[_0x3768f3(0x18c)];}['_setNodeExpressionPath'](_0x18dd6d,_0x47a9fd){}}let _0x10c2da=new _0xf6d11a(),_0x114b30={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4b2d63={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x1e9ae2(_0x59f49a,_0x1f48d0,_0x595800,_0x5afa5e,_0x5d3d1b,_0x2c52b5){var _0x59131e=_0x174578;let _0x10f1d2,_0x1961e9;try{_0x1961e9=_0x3c02bb(),_0x10f1d2=_0x6fb393[_0x1f48d0],!_0x10f1d2||_0x1961e9-_0x10f1d2['ts']>0x1f4&&_0x10f1d2[_0x59131e(0x15e)]&&_0x10f1d2[_0x59131e(0x15c)]/_0x10f1d2['count']<0x64?(_0x6fb393[_0x1f48d0]=_0x10f1d2={'count':0x0,'time':0x0,'ts':_0x1961e9},_0x6fb393[_0x59131e(0x139)]={}):_0x1961e9-_0x6fb393[_0x59131e(0x139)]['ts']>0x32&&_0x6fb393[_0x59131e(0x139)]['count']&&_0x6fb393[_0x59131e(0x139)][_0x59131e(0x15c)]/_0x6fb393[_0x59131e(0x139)][_0x59131e(0x15e)]<0x64&&(_0x6fb393[_0x59131e(0x139)]={});let _0x1cccd9=[],_0x5ddea0=_0x10f1d2[_0x59131e(0x105)]||_0x6fb393[_0x59131e(0x139)][_0x59131e(0x105)]?_0x4b2d63:_0x114b30,_0x56e406=_0x532abf=>{var _0x594ad8=_0x59131e;let _0x1f5c14={};return _0x1f5c14[_0x594ad8(0x1ba)]=_0x532abf[_0x594ad8(0x1ba)],_0x1f5c14[_0x594ad8(0x125)]=_0x532abf[_0x594ad8(0x125)],_0x1f5c14['strLength']=_0x532abf[_0x594ad8(0x176)],_0x1f5c14[_0x594ad8(0x192)]=_0x532abf[_0x594ad8(0x192)],_0x1f5c14[_0x594ad8(0x19a)]=_0x532abf['autoExpandLimit'],_0x1f5c14['autoExpandMaxDepth']=_0x532abf[_0x594ad8(0x1ac)],_0x1f5c14['sortProps']=!0x1,_0x1f5c14[_0x594ad8(0x153)]=!_0xa33144,_0x1f5c14[_0x594ad8(0x1bf)]=0x1,_0x1f5c14['level']=0x0,_0x1f5c14[_0x594ad8(0x1c4)]=_0x594ad8(0x160),_0x1f5c14[_0x594ad8(0x119)]=_0x594ad8(0x15d),_0x1f5c14[_0x594ad8(0x152)]=!0x0,_0x1f5c14[_0x594ad8(0x1a5)]=[],_0x1f5c14[_0x594ad8(0x1cd)]=0x0,_0x1f5c14[_0x594ad8(0x12f)]=!0x0,_0x1f5c14[_0x594ad8(0x1cc)]=0x0,_0x1f5c14[_0x594ad8(0x171)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1f5c14;};for(var _0x3559ed=0x0;_0x3559ed<_0x5d3d1b['length'];_0x3559ed++)_0x1cccd9[_0x59131e(0x1b7)](_0x10c2da['serialize']({'timeNode':_0x59f49a===_0x59131e(0x15c)||void 0x0},_0x5d3d1b[_0x3559ed],_0x56e406(_0x5ddea0),{}));if(_0x59f49a===_0x59131e(0x123)){let _0x4a8ff1=Error[_0x59131e(0x186)];try{Error['stackTraceLimit']=0x1/0x0,_0x1cccd9[_0x59131e(0x1b7)](_0x10c2da['serialize']({'stackNode':!0x0},new Error()[_0x59131e(0x1db)],_0x56e406(_0x5ddea0),{'strLength':0x1/0x0}));}finally{Error[_0x59131e(0x186)]=_0x4a8ff1;}}return{'method':'log','version':_0x131282,'args':[{'ts':_0x595800,'session':_0x5afa5e,'args':_0x1cccd9,'id':_0x1f48d0,'context':_0x2c52b5}]};}catch(_0x1c2c3c){return{'method':_0x59131e(0x188),'version':_0x131282,'args':[{'ts':_0x595800,'session':_0x5afa5e,'args':[{'type':_0x59131e(0x1aa),'error':_0x1c2c3c&&_0x1c2c3c[_0x59131e(0x1a0)]}],'id':_0x1f48d0,'context':_0x2c52b5}]};}finally{try{if(_0x10f1d2&&_0x1961e9){let _0xc2f24f=_0x3c02bb();_0x10f1d2['count']++,_0x10f1d2[_0x59131e(0x15c)]+=_0x298950(_0x1961e9,_0xc2f24f),_0x10f1d2['ts']=_0xc2f24f,_0x6fb393[_0x59131e(0x139)]['count']++,_0x6fb393['hits']['time']+=_0x298950(_0x1961e9,_0xc2f24f),_0x6fb393[_0x59131e(0x139)]['ts']=_0xc2f24f,(_0x10f1d2[_0x59131e(0x15e)]>0x32||_0x10f1d2['time']>0x64)&&(_0x10f1d2[_0x59131e(0x105)]=!0x0),(_0x6fb393['hits'][_0x59131e(0x15e)]>0x3e8||_0x6fb393[_0x59131e(0x139)][_0x59131e(0x15c)]>0x12c)&&(_0x6fb393[_0x59131e(0x139)]['reduceLimits']=!0x0);}}catch{}}}return _0x1e9ae2;}((_0x1e5937,_0x47277a,_0xdaced7,_0x4a8ce9,_0x1e5ad9,_0x2c6274,_0x310708,_0x50c6c6,_0x4d6e0c,_0x4772bf)=>{var _0x395452=_0x24af6e;if(_0x1e5937['_console_ninja'])return _0x1e5937[_0x395452(0x18a)];if(!J(_0x1e5937,_0x50c6c6,_0x1e5ad9))return _0x1e5937['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1e5937['_console_ninja'];let _0x1ecc09=W(_0x1e5937),_0x811d42=_0x1ecc09[_0x395452(0x17b)],_0x3156e7=_0x1ecc09[_0x395452(0x13a)],_0xe2b65=_0x1ecc09[_0x395452(0x11c)],_0x2dc4d2={'hits':{},'ts':{}},_0xc341eb=Y(_0x1e5937,_0x4d6e0c,_0x2dc4d2,_0x2c6274),_0x27404b=_0x2bc4f7=>{_0x2dc4d2['ts'][_0x2bc4f7]=_0x3156e7();},_0x57cc5d=(_0x1ed200,_0x249fcd)=>{var _0x2ff026=_0x395452;let _0xd1ee06=_0x2dc4d2['ts'][_0x249fcd];if(delete _0x2dc4d2['ts'][_0x249fcd],_0xd1ee06){let _0x2213ad=_0x811d42(_0xd1ee06,_0x3156e7());_0xe88d3d(_0xc341eb(_0x2ff026(0x15c),_0x1ed200,_0xe2b65(),_0x5e4896,[_0x2213ad],_0x249fcd));}},_0x4aa442=_0x26728f=>_0x56cd92=>{var _0x4739d5=_0x395452;try{_0x27404b(_0x56cd92),_0x26728f(_0x56cd92);}finally{_0x1e5937[_0x4739d5(0x1e0)]['time']=_0x26728f;}},_0x264f3d=_0x3a7359=>_0x1e2f90=>{var _0x57a785=_0x395452;try{let [_0x316fd,_0x2055cc]=_0x1e2f90[_0x57a785(0x1c5)](_0x57a785(0x19d));_0x57cc5d(_0x2055cc,_0x316fd),_0x3a7359(_0x316fd);}finally{_0x1e5937[_0x57a785(0x1e0)][_0x57a785(0x10b)]=_0x3a7359;}};_0x1e5937['_console_ninja']={'consoleLog':(_0x52a688,_0x56c608)=>{var _0x4aaead=_0x395452;_0x1e5937[_0x4aaead(0x1e0)][_0x4aaead(0x188)][_0x4aaead(0x162)]!=='disabledLog'&&_0xe88d3d(_0xc341eb(_0x4aaead(0x188),_0x52a688,_0xe2b65(),_0x5e4896,_0x56c608));},'consoleTrace':(_0x311615,_0x447691)=>{var _0x10ce6d=_0x395452;_0x1e5937[_0x10ce6d(0x1e0)][_0x10ce6d(0x188)]['name']!==_0x10ce6d(0x12c)&&_0xe88d3d(_0xc341eb('trace',_0x311615,_0xe2b65(),_0x5e4896,_0x447691));},'consoleTime':()=>{var _0xb51252=_0x395452;_0x1e5937[_0xb51252(0x1e0)][_0xb51252(0x15c)]=_0x4aa442(_0x1e5937[_0xb51252(0x1e0)][_0xb51252(0x15c)]);},'consoleTimeEnd':()=>{var _0x2b0ce3=_0x395452;_0x1e5937[_0x2b0ce3(0x1e0)]['timeEnd']=_0x264f3d(_0x1e5937[_0x2b0ce3(0x1e0)]['timeEnd']);},'autoLog':(_0x367104,_0x272724)=>{var _0x5a204b=_0x395452;_0xe88d3d(_0xc341eb(_0x5a204b(0x188),_0x272724,_0xe2b65(),_0x5e4896,[_0x367104]));},'autoLogMany':(_0x2cd175,_0x47a6a1)=>{var _0x1d60ea=_0x395452;_0xe88d3d(_0xc341eb(_0x1d60ea(0x188),_0x2cd175,_0xe2b65(),_0x5e4896,_0x47a6a1));},'autoTrace':(_0x528810,_0x13db61)=>{var _0x3467d2=_0x395452;_0xe88d3d(_0xc341eb(_0x3467d2(0x123),_0x13db61,_0xe2b65(),_0x5e4896,[_0x528810]));},'autoTraceMany':(_0x301b23,_0x1223a4)=>{var _0x215527=_0x395452;_0xe88d3d(_0xc341eb(_0x215527(0x123),_0x301b23,_0xe2b65(),_0x5e4896,_0x1223a4));},'autoTime':(_0x14184e,_0x3c3748,_0xf4212e)=>{_0x27404b(_0xf4212e);},'autoTimeEnd':(_0x3d6388,_0x329c3,_0x32ce37)=>{_0x57cc5d(_0x329c3,_0x32ce37);},'coverage':_0x2d0cef=>{_0xe88d3d({'method':'coverage','version':_0x2c6274,'args':[{'id':_0x2d0cef}]});}};let _0xe88d3d=b(_0x1e5937,_0x47277a,_0xdaced7,_0x4a8ce9,_0x1e5ad9,_0x4772bf),_0x5e4896=_0x1e5937[_0x395452(0x1e4)];return _0x1e5937[_0x395452(0x18a)];})(globalThis,_0x24af6e(0x1bc),_0x24af6e(0x168),_0x24af6e(0x16e),_0x24af6e(0x1a1),_0x24af6e(0x134),'1706800265547',["localhost","127.0.0.1","example.cypress.io","sak-ubuntu","192.168.1.2"],'',_0x24af6e(0x11e));function _0x1ba4(){var _0x4ff519=['_treeNodePropertiesBeforeFullValue','console','_isUndefined','_attemptToReconnectShortly','_WebSocketClass','_console_ninja_session','_inBrowser','method','performance','hrtime','_Symbol','test','_p_length','[object\\x20BigInt]','_hasSetOnItsPath','_setNodeQueryPath','1603igJFGW','_quotedRegExp','Map','reduceLimits','negativeInfinity','value','[object\\x20Set]','then','level','timeEnd','1721142jiQfQC','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_inNextEdge','location','type','_isPrimitiveType','_objectToString','_connectToHostNow','Set','22818TOWUzk','__es'+'Module','\\x20browser','current','rootExpression','_setNodeExpandableState','process','now','date','','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_addProperty','undefined','symbol','trace','create','elements','null','substr','_isMap','_HTMLAllCollection','toString','_treeNodePropertiesAfterFullValue','disabledTrace','_ws','default','resolveGetters','[object\\x20Map]','_hasSymbolPropertyOnItsPath','catch','expressionsToEvaluate','1.0.0','_additionalMetadata','_sortProps','constructor','_allowedToConnectOnSend','hits','timeStamp','_propertyName','_regExpToString','prototype','function','_connecting','logger\\x20websocket\\x20error','NEGATIVE_INFINITY','_WebSocket','_reconnectTimeout','onclose','_keyStrRegExp','String','isArray','indexOf','string','396944qCFduC','error','_isArray','onopen','\\x20server','_setNodeExpressionPath','onmessage','path','autoExpand','noFunctions','capped','_socket','_p_','positiveInfinity','_setNodePermissions','_setNodeId','boolean','close','time','root_exp','count','unshift','root_exp_id','send','name','_addLoadNode','_getOwnPropertyDescriptor','_webSocketErrorDocsLink','2316BzdsIq','nodeModules','32863','readyState','unref','replace','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','isExpressionToEvaluate',"/home/sak/.vscode/extensions/wallabyjs.console-ninja-1.0.283/node_modules",'failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_consoleNinjaAllowedToStart','node','url','_isPrimitiveWrapperType','gateway.docker.internal','stringify','strLength','getOwnPropertyNames','[object\\x20Array]','POSITIVE_INFINITY','39EdYaGg','elapsed','NEXT_RUNTIME','object','call','getPrototypeOf','length','edge','1980130CJzpqN','_p_name','_connectAttemptCount','_addObjectProperty','stackTraceLimit','Error','log','_capIfString','_console_ninja','_property','_hasMapOnItsPath','[object\\x20Date]','getOwnPropertySymbols','_blacklistedProperty','enumerable','86kjYsQt','totalStrLength','forEach','HTMLAllCollection','global','3973240OhoCdn','129778uZlYxB','toLowerCase','array','autoExpandLimit','port','cappedElements',':logPointId:','join','sortProps','message','nuxt','_getOwnPropertySymbols','_dateToString','nan','autoExpandPreviousObjects','...','map','_type','set','unknown','_getOwnPropertyNames','autoExpandMaxDepth','30552HbfQqi','_cleanNode','_processTreeNodeResult','RegExp','number','versions','_connected','valueOf','bind','host','push','Number','data','props','_setNodeLabel','127.0.0.1','cappedProps','funcName','depth','getOwnPropertyDescriptor','_maxConnectAttemptCount','reload','parent','expId','split','bigint','env','_isSet','hostname','angular','index','allStrLength','autoExpandPropertyCount','_disposeWebsocket','_undefined','https://tinyurl.com/37x8b79t','get','warn','Boolean','Symbol','next.js','remix','concat','_addFunctionsNode','_allowedToSend','12WsTNQr','stack','match','dockerizedApp','ws/index.js'];_0x1ba4=function(){return _0x4ff519;};return _0x1ba4();}`);
  } catch (e) {
  }
}
function oo_oo$1(i, ...v) {
  try {
    oo_cm$1().consoleLog(i, v);
  } catch (e) {
  }
  return v;
}

const chat_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: chat_post
});

const prisma$C = new PrismaClient();
const _id__get$e = defineEventHandler(async (event) => {
  const chatId = parseInt(event.context.params.id);
  let chatMessages = [];
  if (!Number.isInteger(chatId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    chatMessages = await prisma$C.chatMessage.findMany({
      where: {
        chatId
      }
    });
  }
  return {
    chatMessages
  };
});

const _id__get$f = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$e
});

const prisma$B = new PrismaClient();
const _id__patch$6 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const body = await readBody(event);
  const chatMessage = await prisma$B.chatMessage.update({
    where: {
      id
    },
    data: {
      content: body.content
    }
  });
  return {
    chatMessage
  };
});

const _id__patch$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__patch$6
});

const prisma$A = new PrismaClient();
const hideMessage_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const chatMessage = await prisma$A.chatMessage.update({
    where: {
      id: body.chatMessageId
    },
    data: {
      content: body.content
    }
  });
  return {
    chatMessage
  };
});

const hideMessage_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: hideMessage_post
});

const prisma$z = new PrismaClient();
const message_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const chatMessage = await prisma$z.chatMessage.create({
    data: {
      content: body.content,
      authorId: body.authorId,
      chatId: body.chatId
    }
  });
  return {
    chatMessage
  };
});

const message_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: message_post
});

const prisma$y = new PrismaClient();
const chats_get = defineEventHandler(async (event) => {
  const Chats = await prisma$y.chat.findMany();
  return {
    chats: Chats
  };
});

const chats_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: chats_get
});

const prisma$x = new PrismaClient();
const _chatId__get = defineEventHandler(async (event) => {
  const chatId = parseInt(event.context.params.chatId);
  let users = [];
  if (!Number.isInteger(chatId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "HUH ID should be an integer"
    });
  } else {
    users = await prisma$x.chatUser.findMany({
      where: {
        chatId
      }
    });
  }
  return {
    users: users.map((data) => data.chatUser)
  };
});

const _chatId__get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _chatId__get
});

const prisma$w = new PrismaClient();
const addUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const ChatUser = await prisma$w.chatUser.create({
    data: {
      chatId: body.chatId,
      chatUser: body.chatUser
    }
  });
  return {
    newMember: ChatUser
  };
});

const addUser_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: addUser_post
});

const prisma$v = new PrismaClient();
const chatsUsers_get = defineEventHandler(async (event) => {
  const Chats = await prisma$v.chatUser.findMany();
  return {
    chats: Chats
  };
});

const chatsUsers_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: chatsUsers_get
});

const prisma$u = new PrismaClient();
const removeUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const ChatUser = await prisma$u.chatUser.delete({
    where: {
      chatId_chatUser: {
        chatId: body.chatId,
        chatUser: body.chatUser
      }
    }
  });
  return {
    message: "User removed from chat",
    chatuser: ChatUser
  };
});

const removeUser_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: removeUser_post
});

const prisma$t = new PrismaClient();
const _id__delete$4 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  console.log(...oo_oo(`4035363573_8_4_8_25_4`, "nigger"));
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    await prisma$t.comment.delete({
      where: {
        id
      }
    });
    await prisma$t.commentUrl.deleteMany({
      where: {
        commentId: id
      }
    });
  }
  return `Comment and urls with id ${id} deleted successfully`;
});
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x24af6e=_0x3cfb;(function(_0x48a207,_0x299be7){var _0xbd55b=_0x3cfb,_0x418ba7=_0x48a207();while(!![]){try{var _0x367e83=parseInt(_0xbd55b(0x115))/0x1*(-parseInt(_0xbd55b(0x191))/0x2)+parseInt(_0xbd55b(0x17a))/0x3*(-parseInt(_0xbd55b(0x14a))/0x4)+parseInt(_0xbd55b(0x182))/0x5*(-parseInt(_0xbd55b(0x1da))/0x6)+-parseInt(_0xbd55b(0x1ef))/0x7*(-parseInt(_0xbd55b(0x1ad))/0x8)+parseInt(_0xbd55b(0x10c))/0x9+parseInt(_0xbd55b(0x196))/0xa+-parseInt(_0xbd55b(0x197))/0xb*(-parseInt(_0xbd55b(0x166))/0xc);if(_0x367e83===_0x299be7)break;else _0x418ba7['push'](_0x418ba7['shift']());}catch(_0x16ac5d){_0x418ba7['push'](_0x418ba7['shift']());}}}(_0x1ba4,0xa53e1));var j=Object[_0x24af6e(0x124)],H=Object['defineProperty'],G=Object[_0x24af6e(0x1c0)],ee=Object[_0x24af6e(0x177)],te=Object[_0x24af6e(0x17f)],ne=Object['prototype']['hasOwnProperty'],re=(_0x18a055,_0x546106,_0x3f8e24,_0x3ec89e)=>{var _0x5aa469=_0x24af6e;if(_0x546106&&typeof _0x546106=='object'||typeof _0x546106==_0x5aa469(0x13e)){for(let _0x35b455 of ee(_0x546106))!ne['call'](_0x18a055,_0x35b455)&&_0x35b455!==_0x3f8e24&&H(_0x18a055,_0x35b455,{'get':()=>_0x546106[_0x35b455],'enumerable':!(_0x3ec89e=G(_0x546106,_0x35b455))||_0x3ec89e[_0x5aa469(0x190)]});}return _0x18a055;},x=(_0x23ba1d,_0x25fbc6,_0x273ecc)=>(_0x273ecc=_0x23ba1d!=null?j(te(_0x23ba1d)):{},re(_0x25fbc6||!_0x23ba1d||!_0x23ba1d[_0x24af6e(0x116)]?H(_0x273ecc,'default',{'value':_0x23ba1d,'enumerable':!0x0}):_0x273ecc,_0x23ba1d)),X=class{constructor(_0x1e702c,_0x2ebb52,_0x358ab5,_0x5d17ac,_0x569748){var _0x20224a=_0x24af6e;this[_0x20224a(0x195)]=_0x1e702c,this[_0x20224a(0x1b6)]=_0x2ebb52,this[_0x20224a(0x19b)]=_0x358ab5,this[_0x20224a(0x167)]=_0x5d17ac,this[_0x20224a(0x1dd)]=_0x569748,this['_allowedToSend']=!0x0,this[_0x20224a(0x138)]=!0x0,this[_0x20224a(0x1b3)]=!0x1,this[_0x20224a(0x13f)]=!0x1,this[_0x20224a(0x10e)]=_0x1e702c['process']?.[_0x20224a(0x1c7)]?.[_0x20224a(0x17c)]===_0x20224a(0x181),this[_0x20224a(0x1e5)]=!this[_0x20224a(0x195)][_0x20224a(0x11b)]?.[_0x20224a(0x1b2)]?.[_0x20224a(0x171)]&&!this[_0x20224a(0x10e)],this[_0x20224a(0x1e3)]=null,this[_0x20224a(0x184)]=0x0,this[_0x20224a(0x1c1)]=0x14,this['_webSocketErrorDocsLink']=_0x20224a(0x1d0),this['_sendErrorMessage']=(this['_inBrowser']?_0x20224a(0x10d):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x20224a(0x165)];}async['getWebSocketClass'](){var _0x269b3f=_0x24af6e;if(this[_0x269b3f(0x1e3)])return this[_0x269b3f(0x1e3)];let _0x28543d;if(this[_0x269b3f(0x1e5)]||this['_inNextEdge'])_0x28543d=this[_0x269b3f(0x195)]['WebSocket'];else{if(this[_0x269b3f(0x195)][_0x269b3f(0x11b)]?.[_0x269b3f(0x142)])_0x28543d=this[_0x269b3f(0x195)][_0x269b3f(0x11b)]?.['_WebSocket'];else try{let _0x1f9aba=await import(_0x269b3f(0x151));_0x28543d=(await import((await import(_0x269b3f(0x172)))['pathToFileURL'](_0x1f9aba[_0x269b3f(0x19e)](this[_0x269b3f(0x167)],_0x269b3f(0x1de)))[_0x269b3f(0x12a)]()))[_0x269b3f(0x12e)];}catch{try{_0x28543d=require(require(_0x269b3f(0x151))[_0x269b3f(0x19e)](this[_0x269b3f(0x167)],'ws'));}catch{throw new Error(_0x269b3f(0x16f));}}}return this[_0x269b3f(0x1e3)]=_0x28543d,_0x28543d;}['_connectToHostNow'](){var _0x3c8a9b=_0x24af6e;this[_0x3c8a9b(0x13f)]||this[_0x3c8a9b(0x1b3)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x3c8a9b(0x138)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x3c8a9b(0x12d)]=new Promise((_0x482c81,_0x1a0e29)=>{var _0x2cf45c=_0x3c8a9b;this['getWebSocketClass']()['then'](_0x29630c=>{var _0x57aacb=_0x3cfb;let _0x422d73=new _0x29630c('ws://'+(!this[_0x57aacb(0x1e5)]&&this['dockerizedApp']?_0x57aacb(0x174):this[_0x57aacb(0x1b6)])+':'+this[_0x57aacb(0x19b)]);_0x422d73['onerror']=()=>{var _0x3b9de9=_0x57aacb;this[_0x3b9de9(0x1d9)]=!0x1,this[_0x3b9de9(0x1ce)](_0x422d73),this[_0x3b9de9(0x1e2)](),_0x1a0e29(new Error(_0x3b9de9(0x140)));},_0x422d73[_0x57aacb(0x14d)]=()=>{var _0x1fc2cd=_0x57aacb;this[_0x1fc2cd(0x1e5)]||_0x422d73[_0x1fc2cd(0x155)]&&_0x422d73[_0x1fc2cd(0x155)][_0x1fc2cd(0x16a)]&&_0x422d73['_socket'][_0x1fc2cd(0x16a)](),_0x482c81(_0x422d73);},_0x422d73[_0x57aacb(0x144)]=()=>{var _0x144348=_0x57aacb;this[_0x144348(0x138)]=!0x0,this[_0x144348(0x1ce)](_0x422d73),this['_attemptToReconnectShortly']();},_0x422d73[_0x57aacb(0x150)]=_0x485a2e=>{var _0x47de9f=_0x57aacb;try{_0x485a2e&&_0x485a2e[_0x47de9f(0x1b9)]&&this[_0x47de9f(0x1e5)]&&JSON['parse'](_0x485a2e[_0x47de9f(0x1b9)])[_0x47de9f(0x1e6)]==='reload'&&this[_0x47de9f(0x195)][_0x47de9f(0x10f)][_0x47de9f(0x1c2)]();}catch{}};})[_0x2cf45c(0x109)](_0x46bccf=>(this[_0x2cf45c(0x1b3)]=!0x0,this[_0x2cf45c(0x13f)]=!0x1,this[_0x2cf45c(0x138)]=!0x1,this[_0x2cf45c(0x1d9)]=!0x0,this[_0x2cf45c(0x184)]=0x0,_0x46bccf))['catch'](_0x3b751f=>(this[_0x2cf45c(0x1b3)]=!0x1,this[_0x2cf45c(0x13f)]=!0x1,console['warn'](_0x2cf45c(0x11f)+this[_0x2cf45c(0x165)]),_0x1a0e29(new Error(_0x2cf45c(0x16c)+(_0x3b751f&&_0x3b751f[_0x2cf45c(0x1a0)])))));}));}[_0x24af6e(0x1ce)](_0x46b2b7){var _0x14224e=_0x24af6e;this['_connected']=!0x1,this['_connecting']=!0x1;try{_0x46b2b7[_0x14224e(0x144)]=null,_0x46b2b7['onerror']=null,_0x46b2b7[_0x14224e(0x14d)]=null;}catch{}try{_0x46b2b7[_0x14224e(0x169)]<0x2&&_0x46b2b7[_0x14224e(0x15b)]();}catch{}}[_0x24af6e(0x1e2)](){var _0x47ffd4=_0x24af6e;clearTimeout(this[_0x47ffd4(0x143)]),!(this[_0x47ffd4(0x184)]>=this[_0x47ffd4(0x1c1)])&&(this[_0x47ffd4(0x143)]=setTimeout(()=>{var _0x5670b2=_0x47ffd4;this[_0x5670b2(0x1b3)]||this[_0x5670b2(0x13f)]||(this[_0x5670b2(0x113)](),this[_0x5670b2(0x12d)]?.[_0x5670b2(0x132)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x47ffd4(0x143)][_0x47ffd4(0x16a)]&&this[_0x47ffd4(0x143)][_0x47ffd4(0x16a)]());}async[_0x24af6e(0x161)](_0x137ffd){var _0x3175ba=_0x24af6e;try{if(!this['_allowedToSend'])return;this[_0x3175ba(0x138)]&&this[_0x3175ba(0x113)](),(await this[_0x3175ba(0x12d)])[_0x3175ba(0x161)](JSON[_0x3175ba(0x175)](_0x137ffd));}catch(_0x220b5c){console[_0x3175ba(0x1d2)](this['_sendErrorMessage']+':\\x20'+(_0x220b5c&&_0x220b5c[_0x3175ba(0x1a0)])),this['_allowedToSend']=!0x1,this[_0x3175ba(0x1e2)]();}}};function b(_0x36fa48,_0x113692,_0x7168f3,_0x3750c1,_0x5ea13c,_0x5cd4c7){var _0x193a33=_0x24af6e;let _0x447851=_0x7168f3[_0x193a33(0x1c5)](',')[_0x193a33(0x1a7)](_0x18f4f2=>{var _0x11f92d=_0x193a33;try{_0x36fa48[_0x11f92d(0x1e4)]||((_0x5ea13c===_0x11f92d(0x1d5)||_0x5ea13c===_0x11f92d(0x1d6)||_0x5ea13c==='astro'||_0x5ea13c===_0x11f92d(0x1ca))&&(_0x5ea13c+=!_0x36fa48[_0x11f92d(0x11b)]?.[_0x11f92d(0x1b2)]?.['node']&&_0x36fa48[_0x11f92d(0x11b)]?.[_0x11f92d(0x1c7)]?.[_0x11f92d(0x17c)]!=='edge'?_0x11f92d(0x117):_0x11f92d(0x14e)),_0x36fa48[_0x11f92d(0x1e4)]={'id':+new Date(),'tool':_0x5ea13c});let _0x16bd43=new X(_0x36fa48,_0x113692,_0x18f4f2,_0x3750c1,_0x5cd4c7);return _0x16bd43[_0x11f92d(0x161)][_0x11f92d(0x1b5)](_0x16bd43);}catch(_0x31bae7){return console[_0x11f92d(0x1d2)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x31bae7&&_0x31bae7[_0x11f92d(0x1a0)]),()=>{};}});return _0x1db34a=>_0x447851['forEach'](_0x14c34e=>_0x14c34e(_0x1db34a));}function _0x3cfb(_0x3a1172,_0x12c230){var _0x1ba4f5=_0x1ba4();return _0x3cfb=function(_0x3cfbde,_0x23f6e7){_0x3cfbde=_0x3cfbde-0x104;var _0x489f1a=_0x1ba4f5[_0x3cfbde];return _0x489f1a;},_0x3cfb(_0x3a1172,_0x12c230);}function W(_0x524e57){var _0x10a8a3=_0x24af6e;let _0x514f1c=function(_0x41bde4,_0x16808a){return _0x16808a-_0x41bde4;},_0x12f5ea;if(_0x524e57[_0x10a8a3(0x1e7)])_0x12f5ea=function(){var _0x204dbe=_0x10a8a3;return _0x524e57[_0x204dbe(0x1e7)][_0x204dbe(0x11c)]();};else{if(_0x524e57[_0x10a8a3(0x11b)]&&_0x524e57[_0x10a8a3(0x11b)][_0x10a8a3(0x1e8)]&&_0x524e57['process']?.[_0x10a8a3(0x1c7)]?.['NEXT_RUNTIME']!==_0x10a8a3(0x181))_0x12f5ea=function(){var _0x34f373=_0x10a8a3;return _0x524e57[_0x34f373(0x11b)]['hrtime']();},_0x514f1c=function(_0x59ede2,_0x33d407){return 0x3e8*(_0x33d407[0x0]-_0x59ede2[0x0])+(_0x33d407[0x1]-_0x59ede2[0x1])/0xf4240;};else try{let {performance:_0x17e606}=require('perf_hooks');_0x12f5ea=function(){return _0x17e606['now']();};}catch{_0x12f5ea=function(){return+new Date();};}}return{'elapsed':_0x514f1c,'timeStamp':_0x12f5ea,'now':()=>Date[_0x10a8a3(0x11c)]()};}function J(_0x1dc362,_0x1d3d5d,_0x263844){var _0x4f2d89=_0x24af6e;if(_0x1dc362[_0x4f2d89(0x170)]!==void 0x0)return _0x1dc362[_0x4f2d89(0x170)];let _0x3a70e9=_0x1dc362[_0x4f2d89(0x11b)]?.[_0x4f2d89(0x1b2)]?.[_0x4f2d89(0x171)]||_0x1dc362[_0x4f2d89(0x11b)]?.[_0x4f2d89(0x1c7)]?.[_0x4f2d89(0x17c)]==='edge';return _0x3a70e9&&_0x263844==='nuxt'?_0x1dc362['_consoleNinjaAllowedToStart']=!0x1:_0x1dc362[_0x4f2d89(0x170)]=_0x3a70e9||!_0x1d3d5d||_0x1dc362[_0x4f2d89(0x10f)]?.[_0x4f2d89(0x1c9)]&&_0x1d3d5d['includes'](_0x1dc362[_0x4f2d89(0x10f)][_0x4f2d89(0x1c9)]),_0x1dc362[_0x4f2d89(0x170)];}function Y(_0x260822,_0xa33144,_0x6fb393,_0x131282){var _0x174578=_0x24af6e;_0x260822=_0x260822,_0xa33144=_0xa33144,_0x6fb393=_0x6fb393,_0x131282=_0x131282;let _0x17a492=W(_0x260822),_0x298950=_0x17a492[_0x174578(0x17b)],_0x3c02bb=_0x17a492['timeStamp'];class _0xf6d11a{constructor(){var _0x302267=_0x174578;this[_0x302267(0x145)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x302267(0x1f0)]=/'([^\\\\']|\\\\')*'/,this[_0x302267(0x1cf)]=_0x260822['undefined'],this[_0x302267(0x129)]=_0x260822[_0x302267(0x194)],this[_0x302267(0x164)]=Object[_0x302267(0x1c0)],this['_getOwnPropertyNames']=Object[_0x302267(0x177)],this['_Symbol']=_0x260822[_0x302267(0x1d4)],this[_0x302267(0x13c)]=RegExp[_0x302267(0x13d)][_0x302267(0x12a)],this[_0x302267(0x1a3)]=Date['prototype'][_0x302267(0x12a)];}['serialize'](_0x10d75d,_0x537954,_0x53a4a3,_0x34d948){var _0x2b9dab=_0x174578,_0x8c21d4=this,_0x58f0f5=_0x53a4a3[_0x2b9dab(0x152)];function _0x45a725(_0x4872ec,_0x3ff946,_0x3bc435){var _0x4d55ec=_0x2b9dab;_0x3ff946[_0x4d55ec(0x110)]=_0x4d55ec(0x1aa),_0x3ff946[_0x4d55ec(0x14b)]=_0x4872ec[_0x4d55ec(0x1a0)],_0x10bbfa=_0x3bc435[_0x4d55ec(0x171)]['current'],_0x3bc435[_0x4d55ec(0x171)]['current']=_0x3ff946,_0x8c21d4[_0x4d55ec(0x1df)](_0x3ff946,_0x3bc435);}try{_0x53a4a3[_0x2b9dab(0x10a)]++,_0x53a4a3['autoExpand']&&_0x53a4a3[_0x2b9dab(0x1a5)][_0x2b9dab(0x1b7)](_0x537954);var _0x4d21f0,_0x1b8ccd,_0x2edc93,_0x1b9535,_0x1b37ba=[],_0x53b10b=[],_0x36cf72,_0x12e4ac=this[_0x2b9dab(0x1a8)](_0x537954),_0x23864b=_0x12e4ac==='array',_0x148180=!0x1,_0x24ad9f=_0x12e4ac===_0x2b9dab(0x13e),_0x546ec4=this['_isPrimitiveType'](_0x12e4ac),_0x2c463d=this[_0x2b9dab(0x173)](_0x12e4ac),_0x101a1d=_0x546ec4||_0x2c463d,_0x4a254f={},_0xf5a5b6=0x0,_0x2829ff=!0x1,_0x10bbfa,_0x34ac66=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x53a4a3[_0x2b9dab(0x1bf)]){if(_0x23864b){if(_0x1b8ccd=_0x537954[_0x2b9dab(0x180)],_0x1b8ccd>_0x53a4a3[_0x2b9dab(0x125)]){for(_0x2edc93=0x0,_0x1b9535=_0x53a4a3[_0x2b9dab(0x125)],_0x4d21f0=_0x2edc93;_0x4d21f0<_0x1b9535;_0x4d21f0++)_0x53b10b['push'](_0x8c21d4[_0x2b9dab(0x120)](_0x1b37ba,_0x537954,_0x12e4ac,_0x4d21f0,_0x53a4a3));_0x10d75d[_0x2b9dab(0x19c)]=!0x0;}else{for(_0x2edc93=0x0,_0x1b9535=_0x1b8ccd,_0x4d21f0=_0x2edc93;_0x4d21f0<_0x1b9535;_0x4d21f0++)_0x53b10b[_0x2b9dab(0x1b7)](_0x8c21d4['_addProperty'](_0x1b37ba,_0x537954,_0x12e4ac,_0x4d21f0,_0x53a4a3));}_0x53a4a3[_0x2b9dab(0x1cd)]+=_0x53b10b[_0x2b9dab(0x180)];}if(!(_0x12e4ac===_0x2b9dab(0x126)||_0x12e4ac===_0x2b9dab(0x121))&&!_0x546ec4&&_0x12e4ac!==_0x2b9dab(0x146)&&_0x12e4ac!=='Buffer'&&_0x12e4ac!==_0x2b9dab(0x1c6)){var _0x523740=_0x34d948[_0x2b9dab(0x1ba)]||_0x53a4a3[_0x2b9dab(0x1ba)];if(this['_isSet'](_0x537954)?(_0x4d21f0=0x0,_0x537954[_0x2b9dab(0x193)](function(_0x1f040b){var _0x3c57c9=_0x2b9dab;if(_0xf5a5b6++,_0x53a4a3[_0x3c57c9(0x1cd)]++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;return;}if(!_0x53a4a3[_0x3c57c9(0x16d)]&&_0x53a4a3[_0x3c57c9(0x152)]&&_0x53a4a3[_0x3c57c9(0x1cd)]>_0x53a4a3[_0x3c57c9(0x19a)]){_0x2829ff=!0x0;return;}_0x53b10b[_0x3c57c9(0x1b7)](_0x8c21d4[_0x3c57c9(0x120)](_0x1b37ba,_0x537954,_0x3c57c9(0x114),_0x4d21f0++,_0x53a4a3,function(_0x7fbeee){return function(){return _0x7fbeee;};}(_0x1f040b)));})):this[_0x2b9dab(0x128)](_0x537954)&&_0x537954['forEach'](function(_0xea7a37,_0x4f1472){var _0x3b0da6=_0x2b9dab;if(_0xf5a5b6++,_0x53a4a3[_0x3b0da6(0x1cd)]++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;return;}if(!_0x53a4a3[_0x3b0da6(0x16d)]&&_0x53a4a3['autoExpand']&&_0x53a4a3[_0x3b0da6(0x1cd)]>_0x53a4a3[_0x3b0da6(0x19a)]){_0x2829ff=!0x0;return;}var _0x4a18a5=_0x4f1472[_0x3b0da6(0x12a)]();_0x4a18a5[_0x3b0da6(0x180)]>0x64&&(_0x4a18a5=_0x4a18a5['slice'](0x0,0x64)+_0x3b0da6(0x1a6)),_0x53b10b['push'](_0x8c21d4['_addProperty'](_0x1b37ba,_0x537954,_0x3b0da6(0x104),_0x4a18a5,_0x53a4a3,function(_0x23265e){return function(){return _0x23265e;};}(_0xea7a37)));}),!_0x148180){try{for(_0x36cf72 in _0x537954)if(!(_0x23864b&&_0x34ac66[_0x2b9dab(0x1ea)](_0x36cf72))&&!this[_0x2b9dab(0x18f)](_0x537954,_0x36cf72,_0x53a4a3)){if(_0xf5a5b6++,_0x53a4a3[_0x2b9dab(0x1cd)]++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;break;}if(!_0x53a4a3[_0x2b9dab(0x16d)]&&_0x53a4a3[_0x2b9dab(0x152)]&&_0x53a4a3['autoExpandPropertyCount']>_0x53a4a3[_0x2b9dab(0x19a)]){_0x2829ff=!0x0;break;}_0x53b10b[_0x2b9dab(0x1b7)](_0x8c21d4[_0x2b9dab(0x185)](_0x1b37ba,_0x4a254f,_0x537954,_0x12e4ac,_0x36cf72,_0x53a4a3));}}catch{}if(_0x4a254f[_0x2b9dab(0x1eb)]=!0x0,_0x24ad9f&&(_0x4a254f[_0x2b9dab(0x183)]=!0x0),!_0x2829ff){var _0x4f1092=[][_0x2b9dab(0x1d7)](this[_0x2b9dab(0x1ab)](_0x537954))[_0x2b9dab(0x1d7)](this[_0x2b9dab(0x1a2)](_0x537954));for(_0x4d21f0=0x0,_0x1b8ccd=_0x4f1092['length'];_0x4d21f0<_0x1b8ccd;_0x4d21f0++)if(_0x36cf72=_0x4f1092[_0x4d21f0],!(_0x23864b&&_0x34ac66[_0x2b9dab(0x1ea)](_0x36cf72[_0x2b9dab(0x12a)]()))&&!this[_0x2b9dab(0x18f)](_0x537954,_0x36cf72,_0x53a4a3)&&!_0x4a254f['_p_'+_0x36cf72[_0x2b9dab(0x12a)]()]){if(_0xf5a5b6++,_0x53a4a3['autoExpandPropertyCount']++,_0xf5a5b6>_0x523740){_0x2829ff=!0x0;break;}if(!_0x53a4a3['isExpressionToEvaluate']&&_0x53a4a3[_0x2b9dab(0x152)]&&_0x53a4a3[_0x2b9dab(0x1cd)]>_0x53a4a3[_0x2b9dab(0x19a)]){_0x2829ff=!0x0;break;}_0x53b10b[_0x2b9dab(0x1b7)](_0x8c21d4['_addObjectProperty'](_0x1b37ba,_0x4a254f,_0x537954,_0x12e4ac,_0x36cf72,_0x53a4a3));}}}}}if(_0x10d75d[_0x2b9dab(0x110)]=_0x12e4ac,_0x101a1d?(_0x10d75d['value']=_0x537954[_0x2b9dab(0x1b4)](),this[_0x2b9dab(0x189)](_0x12e4ac,_0x10d75d,_0x53a4a3,_0x34d948)):_0x12e4ac===_0x2b9dab(0x11d)?_0x10d75d[_0x2b9dab(0x107)]=this[_0x2b9dab(0x1a3)][_0x2b9dab(0x17e)](_0x537954):_0x12e4ac===_0x2b9dab(0x1c6)?_0x10d75d['value']=_0x537954[_0x2b9dab(0x12a)]():_0x12e4ac===_0x2b9dab(0x1b0)?_0x10d75d['value']=this[_0x2b9dab(0x13c)][_0x2b9dab(0x17e)](_0x537954):_0x12e4ac===_0x2b9dab(0x122)&&this['_Symbol']?_0x10d75d[_0x2b9dab(0x107)]=this[_0x2b9dab(0x1e9)][_0x2b9dab(0x13d)][_0x2b9dab(0x12a)]['call'](_0x537954):!_0x53a4a3['depth']&&!(_0x12e4ac===_0x2b9dab(0x126)||_0x12e4ac===_0x2b9dab(0x121))&&(delete _0x10d75d['value'],_0x10d75d[_0x2b9dab(0x154)]=!0x0),_0x2829ff&&(_0x10d75d[_0x2b9dab(0x1bd)]=!0x0),_0x10bbfa=_0x53a4a3['node'][_0x2b9dab(0x118)],_0x53a4a3['node']['current']=_0x10d75d,this['_treeNodePropertiesBeforeFullValue'](_0x10d75d,_0x53a4a3),_0x53b10b[_0x2b9dab(0x180)]){for(_0x4d21f0=0x0,_0x1b8ccd=_0x53b10b['length'];_0x4d21f0<_0x1b8ccd;_0x4d21f0++)_0x53b10b[_0x4d21f0](_0x4d21f0);}_0x1b37ba['length']&&(_0x10d75d[_0x2b9dab(0x1ba)]=_0x1b37ba);}catch(_0x3a3d4c){_0x45a725(_0x3a3d4c,_0x10d75d,_0x53a4a3);}return this[_0x2b9dab(0x135)](_0x537954,_0x10d75d),this['_treeNodePropertiesAfterFullValue'](_0x10d75d,_0x53a4a3),_0x53a4a3[_0x2b9dab(0x171)][_0x2b9dab(0x118)]=_0x10bbfa,_0x53a4a3[_0x2b9dab(0x10a)]--,_0x53a4a3[_0x2b9dab(0x152)]=_0x58f0f5,_0x53a4a3['autoExpand']&&_0x53a4a3[_0x2b9dab(0x1a5)]['pop'](),_0x10d75d;}[_0x174578(0x1a2)](_0x566668){var _0x538282=_0x174578;return Object['getOwnPropertySymbols']?Object[_0x538282(0x18e)](_0x566668):[];}[_0x174578(0x1c8)](_0x149548){var _0x3eeb81=_0x174578;return!!(_0x149548&&_0x260822[_0x3eeb81(0x114)]&&this['_objectToString'](_0x149548)===_0x3eeb81(0x108)&&_0x149548[_0x3eeb81(0x193)]);}[_0x174578(0x18f)](_0x51a0ca,_0x3c87c9,_0x370dbc){var _0x554ad=_0x174578;return _0x370dbc['noFunctions']?typeof _0x51a0ca[_0x3c87c9]==_0x554ad(0x13e):!0x1;}[_0x174578(0x1a8)](_0x40e046){var _0xa27de4=_0x174578,_0x1dc087='';return _0x1dc087=typeof _0x40e046,_0x1dc087===_0xa27de4(0x17d)?this['_objectToString'](_0x40e046)===_0xa27de4(0x178)?_0x1dc087=_0xa27de4(0x199):this[_0xa27de4(0x112)](_0x40e046)===_0xa27de4(0x18d)?_0x1dc087=_0xa27de4(0x11d):this[_0xa27de4(0x112)](_0x40e046)===_0xa27de4(0x1ec)?_0x1dc087=_0xa27de4(0x1c6):_0x40e046===null?_0x1dc087=_0xa27de4(0x126):_0x40e046[_0xa27de4(0x137)]&&(_0x1dc087=_0x40e046[_0xa27de4(0x137)][_0xa27de4(0x162)]||_0x1dc087):_0x1dc087===_0xa27de4(0x121)&&this[_0xa27de4(0x129)]&&_0x40e046 instanceof this['_HTMLAllCollection']&&(_0x1dc087='HTMLAllCollection'),_0x1dc087;}[_0x174578(0x112)](_0x176202){var _0x302982=_0x174578;return Object[_0x302982(0x13d)]['toString'][_0x302982(0x17e)](_0x176202);}[_0x174578(0x111)](_0x5ea248){var _0xdbf1b7=_0x174578;return _0x5ea248===_0xdbf1b7(0x15a)||_0x5ea248===_0xdbf1b7(0x149)||_0x5ea248===_0xdbf1b7(0x1b1);}[_0x174578(0x173)](_0x62fdf9){var _0x40a0bb=_0x174578;return _0x62fdf9===_0x40a0bb(0x1d3)||_0x62fdf9===_0x40a0bb(0x146)||_0x62fdf9===_0x40a0bb(0x1b8);}[_0x174578(0x120)](_0x308682,_0x2d811c,_0x5061f1,_0x11124c,_0x245505,_0x18b888){var _0x3ebe98=this;return function(_0x25ea1d){var _0x2e8dfe=_0x3cfb,_0x4a9a45=_0x245505['node']['current'],_0x338487=_0x245505[_0x2e8dfe(0x171)][_0x2e8dfe(0x1cb)],_0x517034=_0x245505[_0x2e8dfe(0x171)]['parent'];_0x245505[_0x2e8dfe(0x171)][_0x2e8dfe(0x1c3)]=_0x4a9a45,_0x245505['node'][_0x2e8dfe(0x1cb)]=typeof _0x11124c=='number'?_0x11124c:_0x25ea1d,_0x308682[_0x2e8dfe(0x1b7)](_0x3ebe98[_0x2e8dfe(0x18b)](_0x2d811c,_0x5061f1,_0x11124c,_0x245505,_0x18b888)),_0x245505[_0x2e8dfe(0x171)]['parent']=_0x517034,_0x245505['node'][_0x2e8dfe(0x1cb)]=_0x338487;};}[_0x174578(0x185)](_0x583829,_0x1a94b9,_0x25b743,_0x13285a,_0x41a249,_0x46821a,_0x44f9b6){var _0x255893=this;return _0x1a94b9['_p_'+_0x41a249['toString']()]=!0x0,function(_0x3cf47){var _0x5ce8d7=_0x3cfb,_0x2405f2=_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x118)],_0x3f151d=_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x1cb)],_0x38358f=_0x46821a['node'][_0x5ce8d7(0x1c3)];_0x46821a['node'][_0x5ce8d7(0x1c3)]=_0x2405f2,_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x1cb)]=_0x3cf47,_0x583829[_0x5ce8d7(0x1b7)](_0x255893[_0x5ce8d7(0x18b)](_0x25b743,_0x13285a,_0x41a249,_0x46821a,_0x44f9b6)),_0x46821a[_0x5ce8d7(0x171)]['parent']=_0x38358f,_0x46821a[_0x5ce8d7(0x171)][_0x5ce8d7(0x1cb)]=_0x3f151d;};}[_0x174578(0x18b)](_0x48bda0,_0x2e9a0b,_0x239439,_0x4d4922,_0x35898e){var _0x23c239=_0x174578,_0x32145d=this;_0x35898e||(_0x35898e=function(_0x3822ee,_0x3b24ed){return _0x3822ee[_0x3b24ed];});var _0x495af4=_0x239439[_0x23c239(0x12a)](),_0x55586f=_0x4d4922['expressionsToEvaluate']||{},_0x102336=_0x4d4922[_0x23c239(0x1bf)],_0x24b55b=_0x4d4922[_0x23c239(0x16d)];try{var _0x171801=this['_isMap'](_0x48bda0),_0x18a838=_0x495af4;_0x171801&&_0x18a838[0x0]==='\\x27'&&(_0x18a838=_0x18a838[_0x23c239(0x127)](0x1,_0x18a838[_0x23c239(0x180)]-0x2));var _0x5eea2c=_0x4d4922[_0x23c239(0x133)]=_0x55586f[_0x23c239(0x156)+_0x18a838];_0x5eea2c&&(_0x4d4922[_0x23c239(0x1bf)]=_0x4d4922['depth']+0x1),_0x4d4922[_0x23c239(0x16d)]=!!_0x5eea2c;var _0x4ed08c=typeof _0x239439==_0x23c239(0x122),_0x57df77={'name':_0x4ed08c||_0x171801?_0x495af4:this[_0x23c239(0x13b)](_0x495af4)};if(_0x4ed08c&&(_0x57df77['symbol']=!0x0),!(_0x2e9a0b===_0x23c239(0x199)||_0x2e9a0b===_0x23c239(0x187))){var _0x394a14=this[_0x23c239(0x164)](_0x48bda0,_0x239439);if(_0x394a14&&(_0x394a14[_0x23c239(0x1a9)]&&(_0x57df77['setter']=!0x0),_0x394a14[_0x23c239(0x1d1)]&&!_0x5eea2c&&!_0x4d4922[_0x23c239(0x12f)]))return _0x57df77['getter']=!0x0,this[_0x23c239(0x1af)](_0x57df77,_0x4d4922),_0x57df77;}var _0x21b969;try{_0x21b969=_0x35898e(_0x48bda0,_0x239439);}catch(_0x5985fc){return _0x57df77={'name':_0x495af4,'type':_0x23c239(0x1aa),'error':_0x5985fc['message']},this[_0x23c239(0x1af)](_0x57df77,_0x4d4922),_0x57df77;}var _0x3d30d3=this[_0x23c239(0x1a8)](_0x21b969),_0x499bf2=this['_isPrimitiveType'](_0x3d30d3);if(_0x57df77[_0x23c239(0x110)]=_0x3d30d3,_0x499bf2)this[_0x23c239(0x1af)](_0x57df77,_0x4d4922,_0x21b969,function(){var _0x5e72cc=_0x23c239;_0x57df77[_0x5e72cc(0x107)]=_0x21b969[_0x5e72cc(0x1b4)](),!_0x5eea2c&&_0x32145d['_capIfString'](_0x3d30d3,_0x57df77,_0x4d4922,{});});else{var _0xfe447c=_0x4d4922[_0x23c239(0x152)]&&_0x4d4922[_0x23c239(0x10a)]<_0x4d4922['autoExpandMaxDepth']&&_0x4d4922[_0x23c239(0x1a5)][_0x23c239(0x148)](_0x21b969)<0x0&&_0x3d30d3!==_0x23c239(0x13e)&&_0x4d4922[_0x23c239(0x1cd)]<_0x4d4922[_0x23c239(0x19a)];_0xfe447c||_0x4d4922[_0x23c239(0x10a)]<_0x102336||_0x5eea2c?(this['serialize'](_0x57df77,_0x21b969,_0x4d4922,_0x5eea2c||{}),this[_0x23c239(0x135)](_0x21b969,_0x57df77)):this['_processTreeNodeResult'](_0x57df77,_0x4d4922,_0x21b969,function(){var _0x2a6241=_0x23c239;_0x3d30d3==='null'||_0x3d30d3==='undefined'||(delete _0x57df77[_0x2a6241(0x107)],_0x57df77[_0x2a6241(0x154)]=!0x0);});}return _0x57df77;}finally{_0x4d4922[_0x23c239(0x133)]=_0x55586f,_0x4d4922['depth']=_0x102336,_0x4d4922[_0x23c239(0x16d)]=_0x24b55b;}}[_0x174578(0x189)](_0x401e08,_0x22ae66,_0x3810e6,_0x1588f0){var _0x33ccd0=_0x174578,_0x3855ed=_0x1588f0[_0x33ccd0(0x176)]||_0x3810e6[_0x33ccd0(0x176)];if((_0x401e08===_0x33ccd0(0x149)||_0x401e08===_0x33ccd0(0x146))&&_0x22ae66[_0x33ccd0(0x107)]){let _0xd02c93=_0x22ae66[_0x33ccd0(0x107)][_0x33ccd0(0x180)];_0x3810e6['allStrLength']+=_0xd02c93,_0x3810e6[_0x33ccd0(0x1cc)]>_0x3810e6['totalStrLength']?(_0x22ae66[_0x33ccd0(0x154)]='',delete _0x22ae66['value']):_0xd02c93>_0x3855ed&&(_0x22ae66[_0x33ccd0(0x154)]=_0x22ae66[_0x33ccd0(0x107)][_0x33ccd0(0x127)](0x0,_0x3855ed),delete _0x22ae66[_0x33ccd0(0x107)]);}}[_0x174578(0x128)](_0x538f56){var _0x1f312b=_0x174578;return!!(_0x538f56&&_0x260822[_0x1f312b(0x104)]&&this[_0x1f312b(0x112)](_0x538f56)===_0x1f312b(0x130)&&_0x538f56[_0x1f312b(0x193)]);}[_0x174578(0x13b)](_0x18296b){var _0x4b0b06=_0x174578;if(_0x18296b[_0x4b0b06(0x1dc)](/^\\d+$/))return _0x18296b;var _0x557d89;try{_0x557d89=JSON[_0x4b0b06(0x175)](''+_0x18296b);}catch{_0x557d89='\\x22'+this[_0x4b0b06(0x112)](_0x18296b)+'\\x22';}return _0x557d89[_0x4b0b06(0x1dc)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x557d89=_0x557d89[_0x4b0b06(0x127)](0x1,_0x557d89['length']-0x2):_0x557d89=_0x557d89['replace'](/'/g,'\\x5c\\x27')[_0x4b0b06(0x16b)](/\\\\"/g,'\\x22')[_0x4b0b06(0x16b)](/(^"|"$)/g,'\\x27'),_0x557d89;}['_processTreeNodeResult'](_0x5e0219,_0x216cb0,_0x10c23a,_0x4ea35d){var _0x223dff=_0x174578;this['_treeNodePropertiesBeforeFullValue'](_0x5e0219,_0x216cb0),_0x4ea35d&&_0x4ea35d(),this[_0x223dff(0x135)](_0x10c23a,_0x5e0219),this[_0x223dff(0x12b)](_0x5e0219,_0x216cb0);}[_0x174578(0x1df)](_0x4c69a0,_0x39f44e){var _0x550405=_0x174578;this[_0x550405(0x159)](_0x4c69a0,_0x39f44e),this[_0x550405(0x1ee)](_0x4c69a0,_0x39f44e),this[_0x550405(0x14f)](_0x4c69a0,_0x39f44e),this[_0x550405(0x158)](_0x4c69a0,_0x39f44e);}[_0x174578(0x159)](_0x42219a,_0x21e9b0){}['_setNodeQueryPath'](_0x1133bc,_0x130a77){}['_setNodeLabel'](_0x5723ca,_0x47e2b3){}[_0x174578(0x1e1)](_0x57dea1){return _0x57dea1===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x2e181a,_0x39a3e9){var _0x3921bf=_0x174578;this[_0x3921bf(0x1bb)](_0x2e181a,_0x39a3e9),this[_0x3921bf(0x11a)](_0x2e181a),_0x39a3e9[_0x3921bf(0x19f)]&&this['_sortProps'](_0x2e181a),this['_addFunctionsNode'](_0x2e181a,_0x39a3e9),this[_0x3921bf(0x163)](_0x2e181a,_0x39a3e9),this[_0x3921bf(0x1ae)](_0x2e181a);}[_0x174578(0x135)](_0x5e6dd7,_0x15696f){var _0x4ba12e=_0x174578;let _0x1c9167;try{_0x260822['console']&&(_0x1c9167=_0x260822[_0x4ba12e(0x1e0)][_0x4ba12e(0x14b)],_0x260822['console'][_0x4ba12e(0x14b)]=function(){}),_0x5e6dd7&&typeof _0x5e6dd7['length']==_0x4ba12e(0x1b1)&&(_0x15696f[_0x4ba12e(0x180)]=_0x5e6dd7[_0x4ba12e(0x180)]);}catch{}finally{_0x1c9167&&(_0x260822['console'][_0x4ba12e(0x14b)]=_0x1c9167);}if(_0x15696f[_0x4ba12e(0x110)]===_0x4ba12e(0x1b1)||_0x15696f[_0x4ba12e(0x110)]===_0x4ba12e(0x1b8)){if(isNaN(_0x15696f[_0x4ba12e(0x107)]))_0x15696f[_0x4ba12e(0x1a4)]=!0x0,delete _0x15696f['value'];else switch(_0x15696f[_0x4ba12e(0x107)]){case Number[_0x4ba12e(0x179)]:_0x15696f[_0x4ba12e(0x157)]=!0x0,delete _0x15696f[_0x4ba12e(0x107)];break;case Number[_0x4ba12e(0x141)]:_0x15696f[_0x4ba12e(0x106)]=!0x0,delete _0x15696f[_0x4ba12e(0x107)];break;case 0x0:this['_isNegativeZero'](_0x15696f[_0x4ba12e(0x107)])&&(_0x15696f['negativeZero']=!0x0);break;}}else _0x15696f[_0x4ba12e(0x110)]===_0x4ba12e(0x13e)&&typeof _0x5e6dd7[_0x4ba12e(0x162)]=='string'&&_0x5e6dd7[_0x4ba12e(0x162)]&&_0x15696f[_0x4ba12e(0x162)]&&_0x5e6dd7[_0x4ba12e(0x162)]!==_0x15696f[_0x4ba12e(0x162)]&&(_0x15696f[_0x4ba12e(0x1be)]=_0x5e6dd7[_0x4ba12e(0x162)]);}['_isNegativeZero'](_0x3eb735){var _0x5e08d5=_0x174578;return 0x1/_0x3eb735===Number[_0x5e08d5(0x141)];}[_0x174578(0x136)](_0x1d896a){var _0x1dc2fe=_0x174578;!_0x1d896a['props']||!_0x1d896a[_0x1dc2fe(0x1ba)]['length']||_0x1d896a[_0x1dc2fe(0x110)]===_0x1dc2fe(0x199)||_0x1d896a[_0x1dc2fe(0x110)]===_0x1dc2fe(0x104)||_0x1d896a[_0x1dc2fe(0x110)]===_0x1dc2fe(0x114)||_0x1d896a[_0x1dc2fe(0x1ba)]['sort'](function(_0x4d079a,_0x1aaf45){var _0x4bf240=_0x1dc2fe,_0x38311b=_0x4d079a[_0x4bf240(0x162)][_0x4bf240(0x198)](),_0x4d08f9=_0x1aaf45[_0x4bf240(0x162)][_0x4bf240(0x198)]();return _0x38311b<_0x4d08f9?-0x1:_0x38311b>_0x4d08f9?0x1:0x0;});}[_0x174578(0x1d8)](_0x1580e8,_0x444c8a){var _0x19ea0e=_0x174578;if(!(_0x444c8a[_0x19ea0e(0x153)]||!_0x1580e8[_0x19ea0e(0x1ba)]||!_0x1580e8['props'][_0x19ea0e(0x180)])){for(var _0x450078=[],_0x57f8a9=[],_0x4f637f=0x0,_0x20a83d=_0x1580e8[_0x19ea0e(0x1ba)][_0x19ea0e(0x180)];_0x4f637f<_0x20a83d;_0x4f637f++){var _0x720862=_0x1580e8[_0x19ea0e(0x1ba)][_0x4f637f];_0x720862[_0x19ea0e(0x110)]==='function'?_0x450078[_0x19ea0e(0x1b7)](_0x720862):_0x57f8a9[_0x19ea0e(0x1b7)](_0x720862);}if(!(!_0x57f8a9[_0x19ea0e(0x180)]||_0x450078[_0x19ea0e(0x180)]<=0x1)){_0x1580e8[_0x19ea0e(0x1ba)]=_0x57f8a9;var _0x34c242={'functionsNode':!0x0,'props':_0x450078};this['_setNodeId'](_0x34c242,_0x444c8a),this[_0x19ea0e(0x1bb)](_0x34c242,_0x444c8a),this[_0x19ea0e(0x11a)](_0x34c242),this['_setNodePermissions'](_0x34c242,_0x444c8a),_0x34c242['id']+='\\x20f',_0x1580e8[_0x19ea0e(0x1ba)][_0x19ea0e(0x15f)](_0x34c242);}}}['_addLoadNode'](_0x42d9d4,_0x516f68){}[_0x174578(0x11a)](_0x240cbc){}[_0x174578(0x14c)](_0x5dc223){var _0x370f97=_0x174578;return Array[_0x370f97(0x147)](_0x5dc223)||typeof _0x5dc223==_0x370f97(0x17d)&&this['_objectToString'](_0x5dc223)===_0x370f97(0x178);}[_0x174578(0x158)](_0x587285,_0x351c83){}[_0x174578(0x1ae)](_0x11bfa0){var _0x3768f3=_0x174578;delete _0x11bfa0[_0x3768f3(0x131)],delete _0x11bfa0[_0x3768f3(0x1ed)],delete _0x11bfa0[_0x3768f3(0x18c)];}['_setNodeExpressionPath'](_0x18dd6d,_0x47a9fd){}}let _0x10c2da=new _0xf6d11a(),_0x114b30={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4b2d63={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x1e9ae2(_0x59f49a,_0x1f48d0,_0x595800,_0x5afa5e,_0x5d3d1b,_0x2c52b5){var _0x59131e=_0x174578;let _0x10f1d2,_0x1961e9;try{_0x1961e9=_0x3c02bb(),_0x10f1d2=_0x6fb393[_0x1f48d0],!_0x10f1d2||_0x1961e9-_0x10f1d2['ts']>0x1f4&&_0x10f1d2[_0x59131e(0x15e)]&&_0x10f1d2[_0x59131e(0x15c)]/_0x10f1d2['count']<0x64?(_0x6fb393[_0x1f48d0]=_0x10f1d2={'count':0x0,'time':0x0,'ts':_0x1961e9},_0x6fb393[_0x59131e(0x139)]={}):_0x1961e9-_0x6fb393[_0x59131e(0x139)]['ts']>0x32&&_0x6fb393[_0x59131e(0x139)]['count']&&_0x6fb393[_0x59131e(0x139)][_0x59131e(0x15c)]/_0x6fb393[_0x59131e(0x139)][_0x59131e(0x15e)]<0x64&&(_0x6fb393[_0x59131e(0x139)]={});let _0x1cccd9=[],_0x5ddea0=_0x10f1d2[_0x59131e(0x105)]||_0x6fb393[_0x59131e(0x139)][_0x59131e(0x105)]?_0x4b2d63:_0x114b30,_0x56e406=_0x532abf=>{var _0x594ad8=_0x59131e;let _0x1f5c14={};return _0x1f5c14[_0x594ad8(0x1ba)]=_0x532abf[_0x594ad8(0x1ba)],_0x1f5c14[_0x594ad8(0x125)]=_0x532abf[_0x594ad8(0x125)],_0x1f5c14['strLength']=_0x532abf[_0x594ad8(0x176)],_0x1f5c14[_0x594ad8(0x192)]=_0x532abf[_0x594ad8(0x192)],_0x1f5c14[_0x594ad8(0x19a)]=_0x532abf['autoExpandLimit'],_0x1f5c14['autoExpandMaxDepth']=_0x532abf[_0x594ad8(0x1ac)],_0x1f5c14['sortProps']=!0x1,_0x1f5c14[_0x594ad8(0x153)]=!_0xa33144,_0x1f5c14[_0x594ad8(0x1bf)]=0x1,_0x1f5c14['level']=0x0,_0x1f5c14[_0x594ad8(0x1c4)]=_0x594ad8(0x160),_0x1f5c14[_0x594ad8(0x119)]=_0x594ad8(0x15d),_0x1f5c14[_0x594ad8(0x152)]=!0x0,_0x1f5c14[_0x594ad8(0x1a5)]=[],_0x1f5c14[_0x594ad8(0x1cd)]=0x0,_0x1f5c14[_0x594ad8(0x12f)]=!0x0,_0x1f5c14[_0x594ad8(0x1cc)]=0x0,_0x1f5c14[_0x594ad8(0x171)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1f5c14;};for(var _0x3559ed=0x0;_0x3559ed<_0x5d3d1b['length'];_0x3559ed++)_0x1cccd9[_0x59131e(0x1b7)](_0x10c2da['serialize']({'timeNode':_0x59f49a===_0x59131e(0x15c)||void 0x0},_0x5d3d1b[_0x3559ed],_0x56e406(_0x5ddea0),{}));if(_0x59f49a===_0x59131e(0x123)){let _0x4a8ff1=Error[_0x59131e(0x186)];try{Error['stackTraceLimit']=0x1/0x0,_0x1cccd9[_0x59131e(0x1b7)](_0x10c2da['serialize']({'stackNode':!0x0},new Error()[_0x59131e(0x1db)],_0x56e406(_0x5ddea0),{'strLength':0x1/0x0}));}finally{Error[_0x59131e(0x186)]=_0x4a8ff1;}}return{'method':'log','version':_0x131282,'args':[{'ts':_0x595800,'session':_0x5afa5e,'args':_0x1cccd9,'id':_0x1f48d0,'context':_0x2c52b5}]};}catch(_0x1c2c3c){return{'method':_0x59131e(0x188),'version':_0x131282,'args':[{'ts':_0x595800,'session':_0x5afa5e,'args':[{'type':_0x59131e(0x1aa),'error':_0x1c2c3c&&_0x1c2c3c[_0x59131e(0x1a0)]}],'id':_0x1f48d0,'context':_0x2c52b5}]};}finally{try{if(_0x10f1d2&&_0x1961e9){let _0xc2f24f=_0x3c02bb();_0x10f1d2['count']++,_0x10f1d2[_0x59131e(0x15c)]+=_0x298950(_0x1961e9,_0xc2f24f),_0x10f1d2['ts']=_0xc2f24f,_0x6fb393[_0x59131e(0x139)]['count']++,_0x6fb393['hits']['time']+=_0x298950(_0x1961e9,_0xc2f24f),_0x6fb393[_0x59131e(0x139)]['ts']=_0xc2f24f,(_0x10f1d2[_0x59131e(0x15e)]>0x32||_0x10f1d2['time']>0x64)&&(_0x10f1d2[_0x59131e(0x105)]=!0x0),(_0x6fb393['hits'][_0x59131e(0x15e)]>0x3e8||_0x6fb393[_0x59131e(0x139)][_0x59131e(0x15c)]>0x12c)&&(_0x6fb393[_0x59131e(0x139)]['reduceLimits']=!0x0);}}catch{}}}return _0x1e9ae2;}((_0x1e5937,_0x47277a,_0xdaced7,_0x4a8ce9,_0x1e5ad9,_0x2c6274,_0x310708,_0x50c6c6,_0x4d6e0c,_0x4772bf)=>{var _0x395452=_0x24af6e;if(_0x1e5937['_console_ninja'])return _0x1e5937[_0x395452(0x18a)];if(!J(_0x1e5937,_0x50c6c6,_0x1e5ad9))return _0x1e5937['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1e5937['_console_ninja'];let _0x1ecc09=W(_0x1e5937),_0x811d42=_0x1ecc09[_0x395452(0x17b)],_0x3156e7=_0x1ecc09[_0x395452(0x13a)],_0xe2b65=_0x1ecc09[_0x395452(0x11c)],_0x2dc4d2={'hits':{},'ts':{}},_0xc341eb=Y(_0x1e5937,_0x4d6e0c,_0x2dc4d2,_0x2c6274),_0x27404b=_0x2bc4f7=>{_0x2dc4d2['ts'][_0x2bc4f7]=_0x3156e7();},_0x57cc5d=(_0x1ed200,_0x249fcd)=>{var _0x2ff026=_0x395452;let _0xd1ee06=_0x2dc4d2['ts'][_0x249fcd];if(delete _0x2dc4d2['ts'][_0x249fcd],_0xd1ee06){let _0x2213ad=_0x811d42(_0xd1ee06,_0x3156e7());_0xe88d3d(_0xc341eb(_0x2ff026(0x15c),_0x1ed200,_0xe2b65(),_0x5e4896,[_0x2213ad],_0x249fcd));}},_0x4aa442=_0x26728f=>_0x56cd92=>{var _0x4739d5=_0x395452;try{_0x27404b(_0x56cd92),_0x26728f(_0x56cd92);}finally{_0x1e5937[_0x4739d5(0x1e0)]['time']=_0x26728f;}},_0x264f3d=_0x3a7359=>_0x1e2f90=>{var _0x57a785=_0x395452;try{let [_0x316fd,_0x2055cc]=_0x1e2f90[_0x57a785(0x1c5)](_0x57a785(0x19d));_0x57cc5d(_0x2055cc,_0x316fd),_0x3a7359(_0x316fd);}finally{_0x1e5937[_0x57a785(0x1e0)][_0x57a785(0x10b)]=_0x3a7359;}};_0x1e5937['_console_ninja']={'consoleLog':(_0x52a688,_0x56c608)=>{var _0x4aaead=_0x395452;_0x1e5937[_0x4aaead(0x1e0)][_0x4aaead(0x188)][_0x4aaead(0x162)]!=='disabledLog'&&_0xe88d3d(_0xc341eb(_0x4aaead(0x188),_0x52a688,_0xe2b65(),_0x5e4896,_0x56c608));},'consoleTrace':(_0x311615,_0x447691)=>{var _0x10ce6d=_0x395452;_0x1e5937[_0x10ce6d(0x1e0)][_0x10ce6d(0x188)]['name']!==_0x10ce6d(0x12c)&&_0xe88d3d(_0xc341eb('trace',_0x311615,_0xe2b65(),_0x5e4896,_0x447691));},'consoleTime':()=>{var _0xb51252=_0x395452;_0x1e5937[_0xb51252(0x1e0)][_0xb51252(0x15c)]=_0x4aa442(_0x1e5937[_0xb51252(0x1e0)][_0xb51252(0x15c)]);},'consoleTimeEnd':()=>{var _0x2b0ce3=_0x395452;_0x1e5937[_0x2b0ce3(0x1e0)]['timeEnd']=_0x264f3d(_0x1e5937[_0x2b0ce3(0x1e0)]['timeEnd']);},'autoLog':(_0x367104,_0x272724)=>{var _0x5a204b=_0x395452;_0xe88d3d(_0xc341eb(_0x5a204b(0x188),_0x272724,_0xe2b65(),_0x5e4896,[_0x367104]));},'autoLogMany':(_0x2cd175,_0x47a6a1)=>{var _0x1d60ea=_0x395452;_0xe88d3d(_0xc341eb(_0x1d60ea(0x188),_0x2cd175,_0xe2b65(),_0x5e4896,_0x47a6a1));},'autoTrace':(_0x528810,_0x13db61)=>{var _0x3467d2=_0x395452;_0xe88d3d(_0xc341eb(_0x3467d2(0x123),_0x13db61,_0xe2b65(),_0x5e4896,[_0x528810]));},'autoTraceMany':(_0x301b23,_0x1223a4)=>{var _0x215527=_0x395452;_0xe88d3d(_0xc341eb(_0x215527(0x123),_0x301b23,_0xe2b65(),_0x5e4896,_0x1223a4));},'autoTime':(_0x14184e,_0x3c3748,_0xf4212e)=>{_0x27404b(_0xf4212e);},'autoTimeEnd':(_0x3d6388,_0x329c3,_0x32ce37)=>{_0x57cc5d(_0x329c3,_0x32ce37);},'coverage':_0x2d0cef=>{_0xe88d3d({'method':'coverage','version':_0x2c6274,'args':[{'id':_0x2d0cef}]});}};let _0xe88d3d=b(_0x1e5937,_0x47277a,_0xdaced7,_0x4a8ce9,_0x1e5ad9,_0x4772bf),_0x5e4896=_0x1e5937[_0x395452(0x1e4)];return _0x1e5937[_0x395452(0x18a)];})(globalThis,_0x24af6e(0x1bc),_0x24af6e(0x168),_0x24af6e(0x16e),_0x24af6e(0x1a1),_0x24af6e(0x134),'1706800265547',["localhost","127.0.0.1","example.cypress.io","sak-ubuntu","192.168.1.2"],'',_0x24af6e(0x11e));function _0x1ba4(){var _0x4ff519=['_treeNodePropertiesBeforeFullValue','console','_isUndefined','_attemptToReconnectShortly','_WebSocketClass','_console_ninja_session','_inBrowser','method','performance','hrtime','_Symbol','test','_p_length','[object\\x20BigInt]','_hasSetOnItsPath','_setNodeQueryPath','1603igJFGW','_quotedRegExp','Map','reduceLimits','negativeInfinity','value','[object\\x20Set]','then','level','timeEnd','1721142jiQfQC','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_inNextEdge','location','type','_isPrimitiveType','_objectToString','_connectToHostNow','Set','22818TOWUzk','__es'+'Module','\\x20browser','current','rootExpression','_setNodeExpandableState','process','now','date','','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_addProperty','undefined','symbol','trace','create','elements','null','substr','_isMap','_HTMLAllCollection','toString','_treeNodePropertiesAfterFullValue','disabledTrace','_ws','default','resolveGetters','[object\\x20Map]','_hasSymbolPropertyOnItsPath','catch','expressionsToEvaluate','1.0.0','_additionalMetadata','_sortProps','constructor','_allowedToConnectOnSend','hits','timeStamp','_propertyName','_regExpToString','prototype','function','_connecting','logger\\x20websocket\\x20error','NEGATIVE_INFINITY','_WebSocket','_reconnectTimeout','onclose','_keyStrRegExp','String','isArray','indexOf','string','396944qCFduC','error','_isArray','onopen','\\x20server','_setNodeExpressionPath','onmessage','path','autoExpand','noFunctions','capped','_socket','_p_','positiveInfinity','_setNodePermissions','_setNodeId','boolean','close','time','root_exp','count','unshift','root_exp_id','send','name','_addLoadNode','_getOwnPropertyDescriptor','_webSocketErrorDocsLink','2316BzdsIq','nodeModules','32863','readyState','unref','replace','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','isExpressionToEvaluate',"/home/sak/.vscode/extensions/wallabyjs.console-ninja-1.0.283/node_modules",'failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_consoleNinjaAllowedToStart','node','url','_isPrimitiveWrapperType','gateway.docker.internal','stringify','strLength','getOwnPropertyNames','[object\\x20Array]','POSITIVE_INFINITY','39EdYaGg','elapsed','NEXT_RUNTIME','object','call','getPrototypeOf','length','edge','1980130CJzpqN','_p_name','_connectAttemptCount','_addObjectProperty','stackTraceLimit','Error','log','_capIfString','_console_ninja','_property','_hasMapOnItsPath','[object\\x20Date]','getOwnPropertySymbols','_blacklistedProperty','enumerable','86kjYsQt','totalStrLength','forEach','HTMLAllCollection','global','3973240OhoCdn','129778uZlYxB','toLowerCase','array','autoExpandLimit','port','cappedElements',':logPointId:','join','sortProps','message','nuxt','_getOwnPropertySymbols','_dateToString','nan','autoExpandPreviousObjects','...','map','_type','set','unknown','_getOwnPropertyNames','autoExpandMaxDepth','30552HbfQqi','_cleanNode','_processTreeNodeResult','RegExp','number','versions','_connected','valueOf','bind','host','push','Number','data','props','_setNodeLabel','127.0.0.1','cappedProps','funcName','depth','getOwnPropertyDescriptor','_maxConnectAttemptCount','reload','parent','expId','split','bigint','env','_isSet','hostname','angular','index','allStrLength','autoExpandPropertyCount','_disposeWebsocket','_undefined','https://tinyurl.com/37x8b79t','get','warn','Boolean','Symbol','next.js','remix','concat','_addFunctionsNode','_allowedToSend','12WsTNQr','stack','match','dockerizedApp','ws/index.js'];_0x1ba4=function(){return _0x4ff519;};return _0x1ba4();}`);
  } catch (e) {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {
  }
  return v;
}

const _id__delete$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__delete$4
});

const prisma$s = new PrismaClient();
const _id__patch$4 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const body = await readBody(event);
  let comment = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Comment Patch ID should be an integer"
    });
  } else {
    comment = await prisma$s.comment.update({
      where: {
        id
      },
      data: {
        content: body.content
      }
    });
  }
  return {
    edited_comment: comment
  };
});

const _id__patch$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__patch$4
});

const prisma$r = new PrismaClient();
const comment_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const createComment = await prisma$r.comment.create({
    data: {
      "content": body.content,
      "authorId": body.authorId,
      "postId": body.postId
    }
  });
  if (body.url) {
    let tmp = JSON.parse(body.url);
    tmp.forEach(async (elem) => {
      await prisma$r.commentUrl.create({
        data: {
          url: elem,
          commentId: createComment.id
        }
      });
    });
  }
  return {
    comment: createComment
  };
});

const comment_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: comment_post
});

const prisma$q = new PrismaClient();
const fromUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const InvitesFromUser = await prisma$q.invite.findMany({
    where: {
      user_from_id: body.user_from_id,
      status: 0
    }
  });
  return {
    invites: InvitesFromUser
  };
});

const fromUser_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fromUser_post
});

const prisma$p = new PrismaClient();
const invite_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const createInvite = await prisma$p.invite.create({
    data: {
      user_from_id: body.user_from_id,
      user_to_id: body.user_to_id,
      status: 0
    }
  });
  return {
    invite: createInvite
  };
});

const invite_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: invite_post
});

const prisma$o = new PrismaClient();
const invites_get = defineEventHandler(async (event) => {
  parseInt(event.context.params.id);
  let invites = await prisma$o.invite.findMany();
  return {
    invites
  };
});

const invites_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: invites_get
});

const prisma$n = new PrismaClient();
const response_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const responseInvite = await prisma$n.invite.update({
    where: {
      id: body.id
    },
    data: {
      status: body.status
    }
  });
  return {
    invite: responseInvite
  };
});

const response_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: response_post
});

const prisma$m = new PrismaClient();
const _id__get$c = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const InvitesToUser = await prisma$m.invite.findMany({
    where: {
      user_to_id: id,
      status: 0
    }
  });
  return {
    invites: InvitesToUser
  };
});

const _id__get$d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$c
});

const prisma$l = new PrismaClient();
const _id__delete$2 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    idShouldBeInteger();
  } else {
    await prisma$l.post.delete({
      where: {
        id
      }
    });
    await prisma$l.postUrl.deleteMany({
      where: {
        postId: id
      }
    });
  }
  return `Post with id ${id} deleted successfully with urls`;
});

const _id__delete$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__delete$2
});

const prisma$k = new PrismaClient();
const _id__get$a = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let post = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "UserGet ID should be an integer"
    });
  } else {
    post = await prisma$k.post.findUnique({
      where: {
        id
      }
    });
  }
  return {
    post
  };
});

const _id__get$b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$a
});

const prisma$j = new PrismaClient();
const _id__patch$2 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const body = await readBody(event);
  let post = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Post Patch ID should be an integer"
    });
  } else {
    post = await prisma$j.post.update({
      where: {
        id
      },
      data: {
        title: body.title,
        content: body.content,
        private: body.private
      }
    });
  }
  return {
    edited_post: post
  };
});

const _id__patch$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__patch$2
});

const prisma$i = new PrismaClient();
const dislikeClicked_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const authorId = body.authorId;
  const postId = body.postId;
  var message = "like added";
  var ret_val = 0;
  const like = await prisma$i.userLikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  const dislike = await prisma$i.userDislikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  if (like === void 0 || like === null) {
    if (dislike === void 0 || dislike === null) {
      await prisma$i.userDislikePost.create({
        data: {
          postId,
          userId: authorId
        }
      });
      await prisma$i.post.update({
        where: {
          id: postId
        },
        data: {
          dislikes: {
            increment: 1
          }
        }
      });
      message = "dislike added";
      ret_val = 1;
    } else {
      await prisma$i.userDislikePost.delete({
        where: {
          postId_userId: {
            postId,
            userId: authorId
          }
        }
      });
      await prisma$i.post.update({
        where: {
          id: postId
        },
        data: {
          dislikes: {
            decrement: 1
          }
        }
      });
      message = "dislike removed";
      ret_val = -1;
    }
  } else {
    message = "cant like or dislike at the same time";
  }
  return {
    message,
    ret_val
  };
});

const dislikeClicked_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: dislikeClicked_post
});

const prisma$h = new PrismaClient();
const likeClicked_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const authorId = body.authorId;
  const postId = body.postId;
  var message = "like added";
  var ret_val = 0;
  const like = await prisma$h.userLikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  const dislike = await prisma$h.userDislikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  if (dislike === void 0 || dislike === null) {
    if (like === void 0 || like === null) {
      await prisma$h.userLikePost.create({
        data: {
          postId,
          userId: authorId
        }
      });
      await prisma$h.post.update({
        where: {
          id: postId
        },
        data: {
          likes: {
            increment: 1
          }
        }
      });
      message = "like added";
      ret_val = 1;
    } else {
      await prisma$h.userLikePost.delete({
        where: {
          postId_userId: {
            postId,
            userId: authorId
          }
        }
      });
      await prisma$h.post.update({
        where: {
          id: postId
        },
        data: {
          likes: {
            decrement: 1
          }
        }
      });
      message = "like removed";
      ret_val = -1;
    }
  } else {
    message = "cant like or dislike at the same time";
  }
  return {
    message,
    ret_val
  };
});

const likeClicked_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: likeClicked_post
});

const prisma$g = new PrismaClient();
const _id__get$8 = defineEventHandler(async (event) => {
  const postId = parseInt(event.context.params.id);
  let comments = [];
  let commentsUrls = [];
  async function findCommentsUrls(commentId) {
    return await prisma$g.commentUrl.findMany({
      where: {
        commentId
      }
    });
  }
  if (!Number.isInteger(postId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "UserGet ID should be an integer"
    });
  } else {
    comments = await prisma$g.comment.findMany({
      where: {
        postId
      }
    });
    comments.forEach((data) => {
      commentsUrls.push(findCommentsUrls(data.id));
    });
  }
  return {
    comments,
    commentsUrls
  };
});

const _id__get$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$8
});

const prisma$f = new PrismaClient();
const posts_get = defineEventHandler(async (event) => {
  const posts = await prisma$f.post.findMany();
  return {
    posts
  };
});

const posts_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: posts_get
});

const prisma$e = new PrismaClient();
const posts_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let post;
  let postUrl;
  post = {
    title: body.title,
    content: body.content,
    authorId: body.authorId
  };
  const createPost = await prisma$e.post.create({ data: post });
  if (body.url) {
    let tmp = JSON.parse(body.url);
    tmp.forEach(async (elem) => {
      postUrl = {
        url: elem,
        postId: createPost.id
      };
      await prisma$e.postUrl.create({
        data: postUrl
      });
    });
  }
  return {
    createPost
  };
});

const posts_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: posts_post
});

const prisma$d = new PrismaClient();
const _id__get$6 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let post_urls = null;
  let urls = [];
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: " ID should be an integer"
    });
  } else {
    post_urls = await prisma$d.postUrl.findMany({
      where: {
        postId: id
      }
    });
    post_urls.forEach((data) => {
      urls.push(data.url);
    });
  }
  return {
    post_urls: urls
  };
});

const _id__get$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$6
});

const prisma$c = new PrismaClient();
const _id__delete = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    await prisma$c.user.delete({
      where: {
        id
      }
    });
  }
  return `User with id ${id} deleted successfully`;
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__delete
});

const prisma$b = new PrismaClient();
const _id__get$4 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let user = await prisma$b.user.findUnique({
    where: {
      id
    }
  });
  return {
    user
  };
});

const _id__get$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$4
});

const prisma$a = new PrismaClient();
const _id__patch = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const body = await readBody(event);
  let user = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    user = await prisma$a.user.update({
      where: {
        id
      },
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        surname: body.surname
      }
    });
  }
  return {
    user
  };
});

const _id__patch$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__patch
});

const prisma$9 = new PrismaClient();
const _id__get$2 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let chats = [];
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    chats = await prisma$9.chatUser.findMany({
      where: {
        chatUser: id
      },
      select: {
        chatId: true
      }
    });
  }
  return {
    chats
  };
});

const _id__get$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$2
});

const prisma$8 = new PrismaClient();
const _userId__get = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.userId);
  const friends = await prisma$8.friend.findMany({
    where: {
      user1Id: id
    },
    select: {
      user2Id: true
    }
  });
  var friendsReturn = [];
  friends.forEach(async (friend) => {
    friendsReturn.push(await $fetch(`api/users/${friend.user2Id}`));
  });
  return {
    friends: friends.map((data) => data.user2Id)
  };
});

const _userId__get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _userId__get
});

const prisma$7 = new PrismaClient();
const addFriend_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const friend_uno = await prisma$7.friend.create({
    data: {
      user1Id: body.user1Id,
      user2Id: body.user2Id
    }
  });
  const friend_dos = await prisma$7.friend.create({
    data: {
      user1Id: body.user2Id,
      user2Id: body.user1Id
    }
  });
  return {
    friends: { friend_uno, friend_dos }
  };
});

const addFriend_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: addFriend_post
});

const getLoggedUserId = () => {
  const auth_cookie = useCookie("auth");
  if (auth_cookie.value === null || auth_cookie.value === void 0 || auth_cookie.value === "") {
    return null;
  } else {
    return parseInt(auth_cookie.value.id);
  }
};

const prisma$6 = new PrismaClient();
const checkIfFriends_post = defineEventHandler(async (event) => {
  const id_for_check = (await readBody(event)).userId;
  const loggedId = getLoggedUserId();
  if (loggedId === null)
    return false;
  const friends = await prisma$6.friend.findUnique({
    where: {
      user1Id_user2Id: {
        user1Id: id_for_check,
        user2Id: loggedId
      }
    }
  });
  if (friends === null)
    return false;
  return true;
});

const checkIfFriends_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: checkIfFriends_post
});

const prisma$5 = new PrismaClient();
const removeFriend_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  await prisma$5.friend.delete({
    where: {
      user1Id_user2Id: {
        user1Id: body.user1Id,
        user2Id: body.user2Id
      }
    }
  });
  await prisma$5.friend.delete({
    where: {
      user1Id_user2Id: {
        user2Id: body.user1Id,
        user1Id: body.user2Id
      }
    }
  });
  return {
    message: "Succesfull removal of friendship between " + body.user1Id + " and " + body.user2Id
  };
});

const removeFriend_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: removeFriend_post
});

const prisma$4 = new PrismaClient();
const getUserByEmail_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  let user = null;
  if (!regex_email.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email did not meet the requirements",
      statusText: body.email
    });
  } else {
    user = await prisma$4.user.findUnique({
      where: {
        email: body.email
      }
    });
  }
  return {
    user
  };
});

const getUserByEmail_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: getUserByEmail_post
});

const prisma$3 = new PrismaClient();
const getUserByEmail = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await prisma$3.user.findUnique({
    where: {
      email: body.email
    }
  });
  return {
    user
  };
});

const getUserByEmail$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: getUserByEmail
});

const prisma$2 = new PrismaClient();
const _id__get = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const posts = await prisma$2.post.findMany(
    {
      where: {
        authorId: id
      }
    }
  );
  return {
    posts
  };
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get
});

const prisma$1 = new PrismaClient();
const users_get = defineEventHandler(async (event) => {
  const users = await prisma$1.user.findMany();
  return {
    users
  };
});

const users_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: users_get
});

const prisma = new PrismaClient();
const users_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let user;
  user = {
    email: body.email,
    password: body.password,
    name: body.name,
    surname: body.surname
  };
  const createUser = await prisma.user.create({ data: user });
  return {
    createUser
  };
});

const users_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: users_post
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///home/sak/Documents/GitHub/JS-project/project-JS/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///home/sak/Documents/GitHub/JS-project/project-JS/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  head.push(appHead, headEntryOptions);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !islandContext || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  head.push({
    link: Object.values(styles).map(
      (resource) => ({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) })
    )
  }, headEntryOptions);
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: [htmlAttrs],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: [bodyAttrs],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    template: template
});
//# sourceMappingURL=index.mjs.map

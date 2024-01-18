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
const _lazy_mWA5KT = () => Promise.resolve().then(function () { return _id__patch$9; });
const _lazy_jsBv35 = () => Promise.resolve().then(function () { return chat_post$1; });
const _lazy_vClmVP = () => Promise.resolve().then(function () { return _id__get$9; });
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
const _lazy_EbNVoN = () => Promise.resolve().then(function () { return response_post$1; });
const _lazy_xdaJNX = () => Promise.resolve().then(function () { return toUser_post$1; });
const _lazy_vp5cE1 = () => Promise.resolve().then(function () { return _id__delete$3; });
const _lazy_tftP8g = () => Promise.resolve().then(function () { return _id__get$7; });
const _lazy_jX8cWW = () => Promise.resolve().then(function () { return _id__patch$3; });
const _lazy_m6xkxs = () => Promise.resolve().then(function () { return dislikeClicked_post$1; });
const _lazy_QBK7yj = () => Promise.resolve().then(function () { return getUserByEmail$1; });
const _lazy_NjALtv = () => Promise.resolve().then(function () { return likeClicked_post$1; });
const _lazy_flHlTx = () => Promise.resolve().then(function () { return _id__get$5; });
const _lazy_xF1gX3 = () => Promise.resolve().then(function () { return posts_get$1; });
const _lazy_BwQ6jW = () => Promise.resolve().then(function () { return posts_post$1; });
const _lazy_eVfXHI = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_mW4BQb = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_E5aNWi = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_W7VjZz = () => Promise.resolve().then(function () { return _id__patch$1; });
const _lazy_A25gCu = () => Promise.resolve().then(function () { return _userId__get$1; });
const _lazy_VwMLam = () => Promise.resolve().then(function () { return addFriend_post$1; });
const _lazy_2Qvw0F = () => Promise.resolve().then(function () { return checkIfFriends_post$1; });
const _lazy_XsqtXj = () => Promise.resolve().then(function () { return removeFriend_post$1; });
const _lazy_MRUfGe = () => Promise.resolve().then(function () { return getUserByEmail_post$1; });
const _lazy_9eNthU = () => Promise.resolve().then(function () { return users_get$1; });
const _lazy_l4Toz1 = () => Promise.resolve().then(function () { return users_post$1; });
const _lazy_YOIb3P = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/chats/:id', handler: _lazy_yOUBcf, lazy: true, middleware: false, method: "delete" },
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
  { route: '/api/invites/response', handler: _lazy_EbNVoN, lazy: true, middleware: false, method: "post" },
  { route: '/api/invites/toUser', handler: _lazy_xdaJNX, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/:id', handler: _lazy_vp5cE1, lazy: true, middleware: false, method: "delete" },
  { route: '/api/posts/:id', handler: _lazy_tftP8g, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/:id', handler: _lazy_jX8cWW, lazy: true, middleware: false, method: "patch" },
  { route: '/api/posts/dislikeClicked', handler: _lazy_m6xkxs, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/getUserByEmail', handler: _lazy_QBK7yj, lazy: true, middleware: false, method: undefined },
  { route: '/api/posts/likeClicked', handler: _lazy_NjALtv, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/postComments/:id', handler: _lazy_flHlTx, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/posts', handler: _lazy_xF1gX3, lazy: true, middleware: false, method: "get" },
  { route: '/api/posts/posts', handler: _lazy_BwQ6jW, lazy: true, middleware: false, method: "post" },
  { route: '/api/posts/postUrls/:id', handler: _lazy_eVfXHI, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/:id', handler: _lazy_mW4BQb, lazy: true, middleware: false, method: "delete" },
  { route: '/api/users/:id', handler: _lazy_E5aNWi, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/:id', handler: _lazy_W7VjZz, lazy: true, middleware: false, method: "patch" },
  { route: '/api/users/friends/:userId', handler: _lazy_A25gCu, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/friends/addFriend', handler: _lazy_VwMLam, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/friends/checkIfFriends', handler: _lazy_2Qvw0F, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/friends/removeFriend', handler: _lazy_XsqtXj, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/getUserByEmail', handler: _lazy_MRUfGe, lazy: true, middleware: false, method: "post" },
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

const prisma$C = new PrismaClient();
const _id__delete$6 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    idShouldBeInteger();
  } else {
    await prisma$C.chat.delete({
      where: {
        id
      }
    });
    await prisma$C.chatUser.deleteMany({
      where: {
        chatId: id
      }
    });
    await prisma$C.chatMessage.deleteMany({
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

const prisma$B = new PrismaClient();
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
    post = await prisma$B.chat.update({
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

const prisma$A = new PrismaClient();
const chat_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newChat = await prisma$A.chat.create({
    data: {
      name: body.name
    }
  });
  let chatUsers = [];
  let tmp = JSON.parse(body.users);
  tmp.forEach(async (elem) => {
    await prisma$A.chatUser.create({
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

const chat_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: chat_post
});

const prisma$z = new PrismaClient();
const _id__get$8 = defineEventHandler(async (event) => {
  const chatId = parseInt(event.context.params.id);
  let chatMessages = [];
  if (!Number.isInteger(chatId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    chatMessages = await prisma$z.chatMessage.findMany({
      where: {
        chatId
      }
    });
  }
  return {
    chatMessages
  };
});

const _id__get$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$8
});

const prisma$y = new PrismaClient();
const _id__patch$6 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const body = await readBody(event);
  const chatMessage = await prisma$y.chatMessage.update({
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

const prisma$x = new PrismaClient();
const hideMessage_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const chatMessage = await prisma$x.chatMessage.update({
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

const prisma$w = new PrismaClient();
const message_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const chatMessage = await prisma$w.chatMessage.create({
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

const prisma$v = new PrismaClient();
const chats_get = defineEventHandler(async (event) => {
  const Chats = await prisma$v.chat.findMany();
  return {
    chats: Chats
  };
});

const chats_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: chats_get
});

const prisma$u = new PrismaClient();
const _chatId__get = defineEventHandler(async (event) => {
  const chatId = parseInt(event.context.params.chatId);
  let users = [];
  if (!Number.isInteger(chatId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "HUH ID should be an integer"
    });
  } else {
    users = await prisma$u.chatUser.findMany({
      where: {
        chatId
      }
    });
  }
  return {
    users
  };
});

const _chatId__get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _chatId__get
});

const prisma$t = new PrismaClient();
const addUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const ChatUser = await prisma$t.chatUser.create({
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

const prisma$s = new PrismaClient();
const chatsUsers_get = defineEventHandler(async (event) => {
  const Chats = await prisma$s.chatUser.findMany();
  return {
    chats: Chats
  };
});

const chatsUsers_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: chatsUsers_get
});

const prisma$r = new PrismaClient();
const removeUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const ChatUser = await prisma$r.chatUser.delete({
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

const prisma$q = new PrismaClient();
const _id__delete$4 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  console.log(...oo_oo(`4035363573_8_4_8_25_4`, "nigger"));
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    await prisma$q.comment.delete({
      where: {
        id
      }
    });
    await prisma$q.commentUrl.deleteMany({
      where: {
        commentId: id
      }
    });
  }
  return `Comment and urls with id ${id} deleted successfully`;
});
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xdddce8=_0x425b;function _0x425b(_0x47eb99,_0x1e7fbd){var _0x1fb2b9=_0x1fb2();return _0x425b=function(_0x425b57,_0x531dd2){_0x425b57=_0x425b57-0x113;var _0x5bb86c=_0x1fb2b9[_0x425b57];return _0x5bb86c;},_0x425b(_0x47eb99,_0x1e7fbd);}(function(_0x42b421,_0x2725b4){var _0x3d8639=_0x425b,_0x3b16ba=_0x42b421();while(!![]){try{var _0x30fb7a=-parseInt(_0x3d8639(0x132))/0x1*(parseInt(_0x3d8639(0x16d))/0x2)+parseInt(_0x3d8639(0x119))/0x3+-parseInt(_0x3d8639(0x1b1))/0x4+parseInt(_0x3d8639(0x141))/0x5+-parseInt(_0x3d8639(0x1e9))/0x6+parseInt(_0x3d8639(0x1a8))/0x7*(parseInt(_0x3d8639(0x1c8))/0x8)+-parseInt(_0x3d8639(0x147))/0x9*(-parseInt(_0x3d8639(0x14c))/0xa);if(_0x30fb7a===_0x2725b4)break;else _0x3b16ba['push'](_0x3b16ba['shift']());}catch(_0x1483d4){_0x3b16ba['push'](_0x3b16ba['shift']());}}}(_0x1fb2,0x89305));var j=Object[_0xdddce8(0x166)],H=Object[_0xdddce8(0x192)],G=Object[_0xdddce8(0x134)],ee=Object[_0xdddce8(0x1ee)],te=Object[_0xdddce8(0x13a)],ne=Object[_0xdddce8(0x140)]['hasOwnProperty'],re=(_0x795443,_0x17750a,_0x26015f,_0xaa2d77)=>{var _0x5ef645=_0xdddce8;if(_0x17750a&&typeof _0x17750a==_0x5ef645(0x151)||typeof _0x17750a==_0x5ef645(0x1a3)){for(let _0x56e957 of ee(_0x17750a))!ne[_0x5ef645(0x1ea)](_0x795443,_0x56e957)&&_0x56e957!==_0x26015f&&H(_0x795443,_0x56e957,{'get':()=>_0x17750a[_0x56e957],'enumerable':!(_0xaa2d77=G(_0x17750a,_0x56e957))||_0xaa2d77[_0x5ef645(0x133)]});}return _0x795443;},x=(_0x1ab15a,_0xdab687,_0x3009ca)=>(_0x3009ca=_0x1ab15a!=null?j(te(_0x1ab15a)):{},re(_0xdab687||!_0x1ab15a||!_0x1ab15a[_0xdddce8(0x1bf)]?H(_0x3009ca,_0xdddce8(0x1e0),{'value':_0x1ab15a,'enumerable':!0x0}):_0x3009ca,_0x1ab15a)),X=class{constructor(_0x3c89b1,_0x2d3baa,_0x30fb6a,_0x26f69a,_0x5c040a){var _0x10ed74=_0xdddce8;this[_0x10ed74(0x17b)]=_0x3c89b1,this[_0x10ed74(0x1c1)]=_0x2d3baa,this[_0x10ed74(0x1e2)]=_0x30fb6a,this['nodeModules']=_0x26f69a,this[_0x10ed74(0x1c9)]=_0x5c040a,this['_allowedToSend']=!0x0,this[_0x10ed74(0x1c3)]=!0x0,this[_0x10ed74(0x14e)]=!0x1,this['_connecting']=!0x1,this[_0x10ed74(0x15d)]=_0x3c89b1['process']?.[_0x10ed74(0x1dc)]?.[_0x10ed74(0x171)]===_0x10ed74(0x15f),this['_inBrowser']=!this[_0x10ed74(0x17b)][_0x10ed74(0x12a)]?.['versions']?.[_0x10ed74(0x1bc)]&&!this[_0x10ed74(0x15d)],this['_WebSocketClass']=null,this[_0x10ed74(0x130)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x10ed74(0x1c6)]=_0x10ed74(0x1ba),this[_0x10ed74(0x19a)]=(this[_0x10ed74(0x185)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x10ed74(0x15c))+this[_0x10ed74(0x1c6)];}async[_0xdddce8(0x1a7)](){var _0x577004=_0xdddce8;if(this[_0x577004(0x19b)])return this[_0x577004(0x19b)];let _0x1a267d;if(this['_inBrowser']||this[_0x577004(0x15d)])_0x1a267d=this[_0x577004(0x17b)][_0x577004(0x1b5)];else{if(this['global']['process']?.[_0x577004(0x1a4)])_0x1a267d=this[_0x577004(0x17b)][_0x577004(0x12a)]?.[_0x577004(0x1a4)];else try{let _0x38ff85=await import(_0x577004(0x1f1));_0x1a267d=(await import((await import(_0x577004(0x1cf)))['pathToFileURL'](_0x38ff85['join'](this[_0x577004(0x1af)],'ws/index.js'))[_0x577004(0x1f7)]()))['default'];}catch{try{_0x1a267d=require(require('path')[_0x577004(0x1de)](this['nodeModules'],'ws'));}catch{throw new Error(_0x577004(0x15a));}}}return this[_0x577004(0x19b)]=_0x1a267d,_0x1a267d;}['_connectToHostNow'](){var _0x2d66ab=_0xdddce8;this['_connecting']||this['_connected']||this['_connectAttemptCount']>=this[_0x2d66ab(0x1f4)]||(this[_0x2d66ab(0x1c3)]=!0x1,this[_0x2d66ab(0x1d7)]=!0x0,this[_0x2d66ab(0x130)]++,this[_0x2d66ab(0x124)]=new Promise((_0x1dc9b9,_0x57f0f1)=>{var _0x342fca=_0x2d66ab;this['getWebSocketClass']()[_0x342fca(0x1c4)](_0xe413fe=>{var _0x43c999=_0x342fca;let _0x2f4c78=new _0xe413fe('ws://'+(!this[_0x43c999(0x185)]&&this['dockerizedApp']?'gateway.docker.internal':this[_0x43c999(0x1c1)])+':'+this['port']);_0x2f4c78[_0x43c999(0x123)]=()=>{var _0x33495e=_0x43c999;this[_0x33495e(0x1b2)]=!0x1,this[_0x33495e(0x157)](_0x2f4c78),this[_0x33495e(0x1d3)](),_0x57f0f1(new Error(_0x33495e(0x1a9)));},_0x2f4c78['onopen']=()=>{var _0x5275bd=_0x43c999;this['_inBrowser']||_0x2f4c78[_0x5275bd(0x127)]&&_0x2f4c78['_socket']['unref']&&_0x2f4c78[_0x5275bd(0x127)][_0x5275bd(0x1e6)](),_0x1dc9b9(_0x2f4c78);},_0x2f4c78[_0x43c999(0x193)]=()=>{var _0x5d7f60=_0x43c999;this['_allowedToConnectOnSend']=!0x0,this[_0x5d7f60(0x157)](_0x2f4c78),this['_attemptToReconnectShortly']();},_0x2f4c78['onmessage']=_0x508350=>{var _0xffdc7d=_0x43c999;try{_0x508350&&_0x508350[_0xffdc7d(0x19e)]&&this[_0xffdc7d(0x185)]&&JSON['parse'](_0x508350[_0xffdc7d(0x19e)])['method']===_0xffdc7d(0x118)&&this['global'][_0xffdc7d(0x1a1)][_0xffdc7d(0x118)]();}catch{}};})[_0x342fca(0x1c4)](_0x5a05bd=>(this[_0x342fca(0x14e)]=!0x0,this[_0x342fca(0x1d7)]=!0x1,this[_0x342fca(0x1c3)]=!0x1,this[_0x342fca(0x1b2)]=!0x0,this[_0x342fca(0x130)]=0x0,_0x5a05bd))[_0x342fca(0x120)](_0x228825=>(this['_connected']=!0x1,this[_0x342fca(0x1d7)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x342fca(0x1c6)]),_0x57f0f1(new Error(_0x342fca(0x1e3)+(_0x228825&&_0x228825[_0x342fca(0x1d0)])))));}));}[_0xdddce8(0x157)](_0x195f4b){var _0x40896e=_0xdddce8;this[_0x40896e(0x14e)]=!0x1,this[_0x40896e(0x1d7)]=!0x1;try{_0x195f4b[_0x40896e(0x193)]=null,_0x195f4b[_0x40896e(0x123)]=null,_0x195f4b[_0x40896e(0x148)]=null;}catch{}try{_0x195f4b[_0x40896e(0x177)]<0x2&&_0x195f4b['close']();}catch{}}[_0xdddce8(0x1d3)](){var _0x2f53a0=_0xdddce8;clearTimeout(this['_reconnectTimeout']),!(this[_0x2f53a0(0x130)]>=this['_maxConnectAttemptCount'])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x321abb=_0x2f53a0;this[_0x321abb(0x14e)]||this[_0x321abb(0x1d7)]||(this[_0x321abb(0x14d)](),this[_0x321abb(0x124)]?.[_0x321abb(0x120)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x2f53a0(0x1ae)][_0x2f53a0(0x1e6)]&&this['_reconnectTimeout'][_0x2f53a0(0x1e6)]());}async['send'](_0x3832a9){var _0x50a047=_0xdddce8;try{if(!this[_0x50a047(0x1b2)])return;this[_0x50a047(0x1c3)]&&this[_0x50a047(0x14d)](),(await this[_0x50a047(0x124)])['send'](JSON[_0x50a047(0x19c)](_0x3832a9));}catch(_0x2be261){console[_0x50a047(0x1b8)](this['_sendErrorMessage']+':\\x20'+(_0x2be261&&_0x2be261[_0x50a047(0x1d0)])),this[_0x50a047(0x1b2)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x14a4ee,_0x53dabd,_0x2f4a0b,_0x5dc0c0,_0x51d1e7,_0x2cc86d){var _0x54a442=_0xdddce8;let _0x3844a0=_0x2f4a0b[_0x54a442(0x1da)](',')[_0x54a442(0x1a2)](_0x25f41d=>{var _0x51099b=_0x54a442;try{_0x14a4ee[_0x51099b(0x1ec)]||((_0x51d1e7===_0x51099b(0x1d6)||_0x51d1e7===_0x51099b(0x1b3)||_0x51d1e7===_0x51099b(0x179)||_0x51d1e7===_0x51099b(0x1f2))&&(_0x51d1e7+=!_0x14a4ee[_0x51099b(0x12a)]?.[_0x51099b(0x1e5)]?.[_0x51099b(0x1bc)]&&_0x14a4ee['process']?.['env']?.['NEXT_RUNTIME']!==_0x51099b(0x15f)?_0x51099b(0x17f):_0x51099b(0x1be)),_0x14a4ee[_0x51099b(0x1ec)]={'id':+new Date(),'tool':_0x51d1e7});let _0x161c47=new X(_0x14a4ee,_0x53dabd,_0x25f41d,_0x5dc0c0,_0x2cc86d);return _0x161c47[_0x51099b(0x138)]['bind'](_0x161c47);}catch(_0x20ae4f){return console['warn'](_0x51099b(0x1cc),_0x20ae4f&&_0x20ae4f[_0x51099b(0x1d0)]),()=>{};}});return _0xc6d492=>_0x3844a0[_0x54a442(0x11c)](_0x59715c=>_0x59715c(_0xc6d492));}function _0x1fb2(){var _0x13b58d=['_capIfString','resolveGetters','next.js','_connecting','Error','127.0.0.1','split','positiveInfinity','env','length','join','reduceLimits','default','hits','port','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_setNodeId','versions','unref','constructor','coverage','663654EDksrf','call','Number','_console_ninja_session','_p_name','getOwnPropertyNames','autoExpandPreviousObjects','_processTreeNodeResult','path','angular','capped','_maxConnectAttemptCount','elements','concat','toString','NEGATIVE_INFINITY','array','match','Map','expressionsToEvaluate','[object\\x20Map]','reload','606453pRVwUB','_setNodeExpressionPath','substr','forEach','bigint','hostname','includes','catch','_addFunctionsNode','disabledTrace','onerror','_ws','_hasMapOnItsPath','_isUndefined','_socket','Symbol','allStrLength','process','String','_quotedRegExp','valueOf','index',"/home/sak/.vscode/extensions/wallabyjs.console-ninja-1.0.272/node_modules",'_connectAttemptCount','_isNegativeZero','24503VZFJae','enumerable','getOwnPropertyDescriptor','timeStamp','_Symbol','time','send','_objectToString','getPrototypeOf','_treeNodePropertiesAfterFullValue','props','error','_setNodePermissions','totalStrLength','prototype','1167560vAIIYY','_regExpToString','_setNodeQueryPath','hrtime','_console_ninja','_getOwnPropertySymbols','18cBwJBd','onopen','_isPrimitiveType','funcName','toLowerCase','5690030EYYvyW','_connectToHostNow','_connected','stackTraceLimit','_consoleNinjaAllowedToStart','object','[object\\x20Set]','elapsed','_hasSetOnItsPath','_isSet',':logPointId:','_disposeWebsocket','string','HTMLAllCollection','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','cappedElements','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_inNextEdge','name','edge','replace','_p_length','rootExpression','now','_getOwnPropertyDescriptor','isExpressionToEvaluate','create','serialize','autoExpandLimit','unknown','current','autoExpandMaxDepth','sortProps','66STHrbV','_sortProps','set','RegExp','NEXT_RUNTIME','getter','trace','_blacklistedProperty','Buffer','parent','readyState','log','astro','console','global','','[object\\x20Date]','_keyStrRegExp','\\x20browser','_propertyName','level','_undefined','date','test','_inBrowser','_p_','disabledLog','_property','_setNodeLabel','push','_getOwnPropertyNames','32863','number','_numberRegExp','type','_setNodeExpandableState','sort','defineProperty','onclose','autoExpand','_treeNodePropertiesBeforeFullValue','_addLoadNode','1.0.0','root_exp_id','stack','_sendErrorMessage','_WebSocketClass','stringify','getOwnPropertySymbols','data','_additionalMetadata','slice','location','map','function','_WebSocket','','nan','getWebSocketClass','1055292PHqkiB','logger\\x20websocket\\x20error','count','value','strLength','depth','_reconnectTimeout','nodeModules','_isMap','973168NyGVDw','_allowedToSend','remix','performance','WebSocket','Set','_HTMLAllCollection','warn','[object\\x20BigInt]','https://tinyurl.com/37x8b79t','_type','node','undefined','\\x20server','__es'+'Module','_addProperty','host','expId','_allowedToConnectOnSend','then','POSITIVE_INFINITY','_webSocketErrorDocsLink','autoExpandPropertyCount','8qlDniY','dockerizedApp','[object\\x20Array]','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_cleanNode','null','url','message','noFunctions','symbol','_attemptToReconnectShortly'];_0x1fb2=function(){return _0x13b58d;};return _0x1fb2();}function W(_0x477142){var _0xbfbc28=_0xdddce8;let _0x2c8971=function(_0x5f4fbb,_0xb54d11){return _0xb54d11-_0x5f4fbb;},_0x418443;if(_0x477142[_0xbfbc28(0x1b4)])_0x418443=function(){var _0x4a2928=_0xbfbc28;return _0x477142[_0x4a2928(0x1b4)][_0x4a2928(0x163)]();};else{if(_0x477142[_0xbfbc28(0x12a)]&&_0x477142[_0xbfbc28(0x12a)]['hrtime']&&_0x477142[_0xbfbc28(0x12a)]?.['env']?.['NEXT_RUNTIME']!==_0xbfbc28(0x15f))_0x418443=function(){var _0x362273=_0xbfbc28;return _0x477142['process'][_0x362273(0x144)]();},_0x2c8971=function(_0x53413a,_0x51516d){return 0x3e8*(_0x51516d[0x0]-_0x53413a[0x0])+(_0x51516d[0x1]-_0x53413a[0x1])/0xf4240;};else try{let {performance:_0x1c0fac}=require('perf_hooks');_0x418443=function(){return _0x1c0fac['now']();};}catch{_0x418443=function(){return+new Date();};}}return{'elapsed':_0x2c8971,'timeStamp':_0x418443,'now':()=>Date['now']()};}function J(_0xe36ba0,_0x37c0e1,_0x2b62d3){var _0x3488e9=_0xdddce8;if(_0xe36ba0[_0x3488e9(0x150)]!==void 0x0)return _0xe36ba0[_0x3488e9(0x150)];let _0x3f665b=_0xe36ba0[_0x3488e9(0x12a)]?.[_0x3488e9(0x1e5)]?.['node']||_0xe36ba0['process']?.[_0x3488e9(0x1dc)]?.[_0x3488e9(0x171)]===_0x3488e9(0x15f);return _0x3f665b&&_0x2b62d3==='nuxt'?_0xe36ba0[_0x3488e9(0x150)]=!0x1:_0xe36ba0[_0x3488e9(0x150)]=_0x3f665b||!_0x37c0e1||_0xe36ba0['location']?.[_0x3488e9(0x11e)]&&_0x37c0e1[_0x3488e9(0x11f)](_0xe36ba0[_0x3488e9(0x1a1)][_0x3488e9(0x11e)]),_0xe36ba0[_0x3488e9(0x150)];}function Y(_0xfc65,_0x43e68c,_0x570b44,_0x22731a){var _0x42ea47=_0xdddce8;_0xfc65=_0xfc65,_0x43e68c=_0x43e68c,_0x570b44=_0x570b44,_0x22731a=_0x22731a;let _0x44f5e9=W(_0xfc65),_0xbb521b=_0x44f5e9[_0x42ea47(0x153)],_0x404d67=_0x44f5e9['timeStamp'];class _0x5d80d5{constructor(){var _0x209ce5=_0x42ea47;this[_0x209ce5(0x17e)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x209ce5(0x18e)]=/^(0|[1-9][0-9]*)$/,this[_0x209ce5(0x12c)]=/'([^\\\\']|\\\\')*'/,this[_0x209ce5(0x182)]=_0xfc65[_0x209ce5(0x1bd)],this[_0x209ce5(0x1b7)]=_0xfc65['HTMLAllCollection'],this[_0x209ce5(0x164)]=Object[_0x209ce5(0x134)],this[_0x209ce5(0x18b)]=Object[_0x209ce5(0x1ee)],this[_0x209ce5(0x136)]=_0xfc65[_0x209ce5(0x128)],this[_0x209ce5(0x142)]=RegExp['prototype']['toString'],this['_dateToString']=Date[_0x209ce5(0x140)][_0x209ce5(0x1f7)];}[_0x42ea47(0x167)](_0x3f1618,_0x39b3b5,_0x4e06ff,_0x39ac94){var _0x256745=_0x42ea47,_0x57e992=this,_0x29788c=_0x4e06ff[_0x256745(0x194)];function _0x3ab074(_0x45c61c,_0x194da2,_0xbc7f34){var _0x2d565c=_0x256745;_0x194da2[_0x2d565c(0x18f)]=_0x2d565c(0x169),_0x194da2[_0x2d565c(0x13d)]=_0x45c61c[_0x2d565c(0x1d0)],_0x334e7f=_0xbc7f34['node'][_0x2d565c(0x16a)],_0xbc7f34['node'][_0x2d565c(0x16a)]=_0x194da2,_0x57e992['_treeNodePropertiesBeforeFullValue'](_0x194da2,_0xbc7f34);}try{_0x4e06ff['level']++,_0x4e06ff[_0x256745(0x194)]&&_0x4e06ff[_0x256745(0x1ef)][_0x256745(0x18a)](_0x39b3b5);var _0x30f3b5,_0x47dcf3,_0x18db92,_0x45d7e6,_0x267db3=[],_0x402444=[],_0x469fd5,_0x1c06e1=this[_0x256745(0x1bb)](_0x39b3b5),_0x45bec6=_0x1c06e1===_0x256745(0x113),_0x2ae1e3=!0x1,_0x27967f=_0x1c06e1===_0x256745(0x1a3),_0x390a49=this[_0x256745(0x149)](_0x1c06e1),_0x56967a=this['_isPrimitiveWrapperType'](_0x1c06e1),_0x476e41=_0x390a49||_0x56967a,_0x3c30f2={},_0x4bc137=0x0,_0x222eee=!0x1,_0x334e7f,_0x1fa3f0=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e06ff[_0x256745(0x1ad)]){if(_0x45bec6){if(_0x47dcf3=_0x39b3b5[_0x256745(0x1dd)],_0x47dcf3>_0x4e06ff[_0x256745(0x1f5)]){for(_0x18db92=0x0,_0x45d7e6=_0x4e06ff[_0x256745(0x1f5)],_0x30f3b5=_0x18db92;_0x30f3b5<_0x45d7e6;_0x30f3b5++)_0x402444[_0x256745(0x18a)](_0x57e992[_0x256745(0x1c0)](_0x267db3,_0x39b3b5,_0x1c06e1,_0x30f3b5,_0x4e06ff));_0x3f1618[_0x256745(0x15b)]=!0x0;}else{for(_0x18db92=0x0,_0x45d7e6=_0x47dcf3,_0x30f3b5=_0x18db92;_0x30f3b5<_0x45d7e6;_0x30f3b5++)_0x402444['push'](_0x57e992[_0x256745(0x1c0)](_0x267db3,_0x39b3b5,_0x1c06e1,_0x30f3b5,_0x4e06ff));}_0x4e06ff['autoExpandPropertyCount']+=_0x402444[_0x256745(0x1dd)];}if(!(_0x1c06e1===_0x256745(0x1ce)||_0x1c06e1===_0x256745(0x1bd))&&!_0x390a49&&_0x1c06e1!==_0x256745(0x12b)&&_0x1c06e1!==_0x256745(0x175)&&_0x1c06e1!==_0x256745(0x11d)){var _0xb7f100=_0x39ac94[_0x256745(0x13c)]||_0x4e06ff[_0x256745(0x13c)];if(this['_isSet'](_0x39b3b5)?(_0x30f3b5=0x0,_0x39b3b5[_0x256745(0x11c)](function(_0x12c5de){var _0x2e669d=_0x256745;if(_0x4bc137++,_0x4e06ff[_0x2e669d(0x1c7)]++,_0x4bc137>_0xb7f100){_0x222eee=!0x0;return;}if(!_0x4e06ff[_0x2e669d(0x165)]&&_0x4e06ff[_0x2e669d(0x194)]&&_0x4e06ff[_0x2e669d(0x1c7)]>_0x4e06ff['autoExpandLimit']){_0x222eee=!0x0;return;}_0x402444[_0x2e669d(0x18a)](_0x57e992[_0x2e669d(0x1c0)](_0x267db3,_0x39b3b5,'Set',_0x30f3b5++,_0x4e06ff,function(_0x58a45c){return function(){return _0x58a45c;};}(_0x12c5de)));})):this[_0x256745(0x1b0)](_0x39b3b5)&&_0x39b3b5[_0x256745(0x11c)](function(_0x4dd335,_0x1720bf){var _0x14ec84=_0x256745;if(_0x4bc137++,_0x4e06ff[_0x14ec84(0x1c7)]++,_0x4bc137>_0xb7f100){_0x222eee=!0x0;return;}if(!_0x4e06ff[_0x14ec84(0x165)]&&_0x4e06ff['autoExpand']&&_0x4e06ff[_0x14ec84(0x1c7)]>_0x4e06ff[_0x14ec84(0x168)]){_0x222eee=!0x0;return;}var _0x35f685=_0x1720bf[_0x14ec84(0x1f7)]();_0x35f685[_0x14ec84(0x1dd)]>0x64&&(_0x35f685=_0x35f685[_0x14ec84(0x1a0)](0x0,0x64)+'...'),_0x402444[_0x14ec84(0x18a)](_0x57e992[_0x14ec84(0x1c0)](_0x267db3,_0x39b3b5,'Map',_0x35f685,_0x4e06ff,function(_0x137e95){return function(){return _0x137e95;};}(_0x4dd335)));}),!_0x2ae1e3){try{for(_0x469fd5 in _0x39b3b5)if(!(_0x45bec6&&_0x1fa3f0[_0x256745(0x184)](_0x469fd5))&&!this[_0x256745(0x174)](_0x39b3b5,_0x469fd5,_0x4e06ff)){if(_0x4bc137++,_0x4e06ff[_0x256745(0x1c7)]++,_0x4bc137>_0xb7f100){_0x222eee=!0x0;break;}if(!_0x4e06ff[_0x256745(0x165)]&&_0x4e06ff[_0x256745(0x194)]&&_0x4e06ff[_0x256745(0x1c7)]>_0x4e06ff[_0x256745(0x168)]){_0x222eee=!0x0;break;}_0x402444[_0x256745(0x18a)](_0x57e992['_addObjectProperty'](_0x267db3,_0x3c30f2,_0x39b3b5,_0x1c06e1,_0x469fd5,_0x4e06ff));}}catch{}if(_0x3c30f2[_0x256745(0x161)]=!0x0,_0x27967f&&(_0x3c30f2[_0x256745(0x1ed)]=!0x0),!_0x222eee){var _0x796656=[][_0x256745(0x1f6)](this['_getOwnPropertyNames'](_0x39b3b5))[_0x256745(0x1f6)](this['_getOwnPropertySymbols'](_0x39b3b5));for(_0x30f3b5=0x0,_0x47dcf3=_0x796656[_0x256745(0x1dd)];_0x30f3b5<_0x47dcf3;_0x30f3b5++)if(_0x469fd5=_0x796656[_0x30f3b5],!(_0x45bec6&&_0x1fa3f0[_0x256745(0x184)](_0x469fd5[_0x256745(0x1f7)]()))&&!this['_blacklistedProperty'](_0x39b3b5,_0x469fd5,_0x4e06ff)&&!_0x3c30f2[_0x256745(0x186)+_0x469fd5[_0x256745(0x1f7)]()]){if(_0x4bc137++,_0x4e06ff['autoExpandPropertyCount']++,_0x4bc137>_0xb7f100){_0x222eee=!0x0;break;}if(!_0x4e06ff[_0x256745(0x165)]&&_0x4e06ff['autoExpand']&&_0x4e06ff['autoExpandPropertyCount']>_0x4e06ff[_0x256745(0x168)]){_0x222eee=!0x0;break;}_0x402444[_0x256745(0x18a)](_0x57e992['_addObjectProperty'](_0x267db3,_0x3c30f2,_0x39b3b5,_0x1c06e1,_0x469fd5,_0x4e06ff));}}}}}if(_0x3f1618[_0x256745(0x18f)]=_0x1c06e1,_0x476e41?(_0x3f1618[_0x256745(0x1ab)]=_0x39b3b5[_0x256745(0x12d)](),this[_0x256745(0x1d4)](_0x1c06e1,_0x3f1618,_0x4e06ff,_0x39ac94)):_0x1c06e1===_0x256745(0x183)?_0x3f1618[_0x256745(0x1ab)]=this['_dateToString'][_0x256745(0x1ea)](_0x39b3b5):_0x1c06e1===_0x256745(0x11d)?_0x3f1618[_0x256745(0x1ab)]=_0x39b3b5[_0x256745(0x1f7)]():_0x1c06e1===_0x256745(0x170)?_0x3f1618[_0x256745(0x1ab)]=this[_0x256745(0x142)][_0x256745(0x1ea)](_0x39b3b5):_0x1c06e1===_0x256745(0x1d2)&&this[_0x256745(0x136)]?_0x3f1618[_0x256745(0x1ab)]=this['_Symbol'][_0x256745(0x140)]['toString']['call'](_0x39b3b5):!_0x4e06ff[_0x256745(0x1ad)]&&!(_0x1c06e1===_0x256745(0x1ce)||_0x1c06e1===_0x256745(0x1bd))&&(delete _0x3f1618[_0x256745(0x1ab)],_0x3f1618['capped']=!0x0),_0x222eee&&(_0x3f1618['cappedProps']=!0x0),_0x334e7f=_0x4e06ff[_0x256745(0x1bc)][_0x256745(0x16a)],_0x4e06ff[_0x256745(0x1bc)][_0x256745(0x16a)]=_0x3f1618,this[_0x256745(0x195)](_0x3f1618,_0x4e06ff),_0x402444[_0x256745(0x1dd)]){for(_0x30f3b5=0x0,_0x47dcf3=_0x402444[_0x256745(0x1dd)];_0x30f3b5<_0x47dcf3;_0x30f3b5++)_0x402444[_0x30f3b5](_0x30f3b5);}_0x267db3[_0x256745(0x1dd)]&&(_0x3f1618[_0x256745(0x13c)]=_0x267db3);}catch(_0x5f2063){_0x3ab074(_0x5f2063,_0x3f1618,_0x4e06ff);}return this['_additionalMetadata'](_0x39b3b5,_0x3f1618),this[_0x256745(0x13b)](_0x3f1618,_0x4e06ff),_0x4e06ff['node'][_0x256745(0x16a)]=_0x334e7f,_0x4e06ff[_0x256745(0x181)]--,_0x4e06ff[_0x256745(0x194)]=_0x29788c,_0x4e06ff[_0x256745(0x194)]&&_0x4e06ff['autoExpandPreviousObjects']['pop'](),_0x3f1618;}[_0x42ea47(0x146)](_0x9adaa9){var _0x40e556=_0x42ea47;return Object[_0x40e556(0x19d)]?Object[_0x40e556(0x19d)](_0x9adaa9):[];}[_0x42ea47(0x155)](_0x1c6ca1){var _0x167aa9=_0x42ea47;return!!(_0x1c6ca1&&_0xfc65[_0x167aa9(0x1b6)]&&this['_objectToString'](_0x1c6ca1)===_0x167aa9(0x152)&&_0x1c6ca1[_0x167aa9(0x11c)]);}[_0x42ea47(0x174)](_0x2edb60,_0x50a5a7,_0x1d09d7){var _0x5e448b=_0x42ea47;return _0x1d09d7['noFunctions']?typeof _0x2edb60[_0x50a5a7]==_0x5e448b(0x1a3):!0x1;}[_0x42ea47(0x1bb)](_0x2f537c){var _0x2dee1a=_0x42ea47,_0x383e41='';return _0x383e41=typeof _0x2f537c,_0x383e41==='object'?this['_objectToString'](_0x2f537c)==='[object\\x20Array]'?_0x383e41='array':this[_0x2dee1a(0x139)](_0x2f537c)===_0x2dee1a(0x17d)?_0x383e41='date':this[_0x2dee1a(0x139)](_0x2f537c)===_0x2dee1a(0x1b9)?_0x383e41=_0x2dee1a(0x11d):_0x2f537c===null?_0x383e41=_0x2dee1a(0x1ce):_0x2f537c[_0x2dee1a(0x1e7)]&&(_0x383e41=_0x2f537c[_0x2dee1a(0x1e7)][_0x2dee1a(0x15e)]||_0x383e41):_0x383e41===_0x2dee1a(0x1bd)&&this[_0x2dee1a(0x1b7)]&&_0x2f537c instanceof this['_HTMLAllCollection']&&(_0x383e41=_0x2dee1a(0x159)),_0x383e41;}['_objectToString'](_0x36f83d){var _0x3ed610=_0x42ea47;return Object[_0x3ed610(0x140)][_0x3ed610(0x1f7)][_0x3ed610(0x1ea)](_0x36f83d);}[_0x42ea47(0x149)](_0x2c1420){var _0x411468=_0x42ea47;return _0x2c1420==='boolean'||_0x2c1420==='string'||_0x2c1420===_0x411468(0x18d);}['_isPrimitiveWrapperType'](_0x37e642){var _0x37f210=_0x42ea47;return _0x37e642==='Boolean'||_0x37e642===_0x37f210(0x12b)||_0x37e642===_0x37f210(0x1eb);}['_addProperty'](_0x39e718,_0x1084cf,_0x1c2598,_0x1b8a3a,_0x2a262d,_0x317a08){var _0x86c29c=this;return function(_0x1a0075){var _0x390e7f=_0x425b,_0x37955c=_0x2a262d['node'][_0x390e7f(0x16a)],_0x4d638e=_0x2a262d[_0x390e7f(0x1bc)][_0x390e7f(0x12e)],_0x17edfd=_0x2a262d[_0x390e7f(0x1bc)][_0x390e7f(0x176)];_0x2a262d[_0x390e7f(0x1bc)][_0x390e7f(0x176)]=_0x37955c,_0x2a262d[_0x390e7f(0x1bc)]['index']=typeof _0x1b8a3a=='number'?_0x1b8a3a:_0x1a0075,_0x39e718[_0x390e7f(0x18a)](_0x86c29c[_0x390e7f(0x188)](_0x1084cf,_0x1c2598,_0x1b8a3a,_0x2a262d,_0x317a08)),_0x2a262d['node'][_0x390e7f(0x176)]=_0x17edfd,_0x2a262d[_0x390e7f(0x1bc)][_0x390e7f(0x12e)]=_0x4d638e;};}['_addObjectProperty'](_0x4a39c1,_0x184e1b,_0x415956,_0x139584,_0x13b8ef,_0x47eb59,_0x31d241){var _0x431648=_0x42ea47,_0x4cb23a=this;return _0x184e1b[_0x431648(0x186)+_0x13b8ef['toString']()]=!0x0,function(_0x2a759f){var _0x20fa13=_0x431648,_0x16b917=_0x47eb59[_0x20fa13(0x1bc)][_0x20fa13(0x16a)],_0x39f8b1=_0x47eb59[_0x20fa13(0x1bc)][_0x20fa13(0x12e)],_0x25b64b=_0x47eb59[_0x20fa13(0x1bc)][_0x20fa13(0x176)];_0x47eb59[_0x20fa13(0x1bc)][_0x20fa13(0x176)]=_0x16b917,_0x47eb59[_0x20fa13(0x1bc)]['index']=_0x2a759f,_0x4a39c1['push'](_0x4cb23a[_0x20fa13(0x188)](_0x415956,_0x139584,_0x13b8ef,_0x47eb59,_0x31d241)),_0x47eb59[_0x20fa13(0x1bc)][_0x20fa13(0x176)]=_0x25b64b,_0x47eb59[_0x20fa13(0x1bc)][_0x20fa13(0x12e)]=_0x39f8b1;};}['_property'](_0x59d641,_0x5ee3d4,_0x139f76,_0xbd122b,_0x8815c2){var _0x15d98e=_0x42ea47,_0x2441fd=this;_0x8815c2||(_0x8815c2=function(_0x2b5946,_0x6f722a){return _0x2b5946[_0x6f722a];});var _0x3280d4=_0x139f76['toString'](),_0x1ab871=_0xbd122b['expressionsToEvaluate']||{},_0x1d352b=_0xbd122b[_0x15d98e(0x1ad)],_0x4da857=_0xbd122b[_0x15d98e(0x165)];try{var _0x37faab=this['_isMap'](_0x59d641),_0x61c261=_0x3280d4;_0x37faab&&_0x61c261[0x0]==='\\x27'&&(_0x61c261=_0x61c261[_0x15d98e(0x11b)](0x1,_0x61c261[_0x15d98e(0x1dd)]-0x2));var _0x5d98b2=_0xbd122b[_0x15d98e(0x116)]=_0x1ab871[_0x15d98e(0x186)+_0x61c261];_0x5d98b2&&(_0xbd122b[_0x15d98e(0x1ad)]=_0xbd122b[_0x15d98e(0x1ad)]+0x1),_0xbd122b[_0x15d98e(0x165)]=!!_0x5d98b2;var _0x45328f=typeof _0x139f76==_0x15d98e(0x1d2),_0x24808d={'name':_0x45328f||_0x37faab?_0x3280d4:this[_0x15d98e(0x180)](_0x3280d4)};if(_0x45328f&&(_0x24808d['symbol']=!0x0),!(_0x5ee3d4==='array'||_0x5ee3d4===_0x15d98e(0x1d8))){var _0x435712=this[_0x15d98e(0x164)](_0x59d641,_0x139f76);if(_0x435712&&(_0x435712[_0x15d98e(0x16f)]&&(_0x24808d['setter']=!0x0),_0x435712['get']&&!_0x5d98b2&&!_0xbd122b[_0x15d98e(0x1d5)]))return _0x24808d[_0x15d98e(0x172)]=!0x0,this[_0x15d98e(0x1f0)](_0x24808d,_0xbd122b),_0x24808d;}var _0x1e58ee;try{_0x1e58ee=_0x8815c2(_0x59d641,_0x139f76);}catch(_0x554bbc){return _0x24808d={'name':_0x3280d4,'type':'unknown','error':_0x554bbc[_0x15d98e(0x1d0)]},this[_0x15d98e(0x1f0)](_0x24808d,_0xbd122b),_0x24808d;}var _0x491469=this[_0x15d98e(0x1bb)](_0x1e58ee),_0x4fb7ad=this[_0x15d98e(0x149)](_0x491469);if(_0x24808d[_0x15d98e(0x18f)]=_0x491469,_0x4fb7ad)this[_0x15d98e(0x1f0)](_0x24808d,_0xbd122b,_0x1e58ee,function(){var _0xc16f19=_0x15d98e;_0x24808d[_0xc16f19(0x1ab)]=_0x1e58ee['valueOf'](),!_0x5d98b2&&_0x2441fd[_0xc16f19(0x1d4)](_0x491469,_0x24808d,_0xbd122b,{});});else{var _0x4aaf2e=_0xbd122b['autoExpand']&&_0xbd122b[_0x15d98e(0x181)]<_0xbd122b[_0x15d98e(0x16b)]&&_0xbd122b[_0x15d98e(0x1ef)]['indexOf'](_0x1e58ee)<0x0&&_0x491469!=='function'&&_0xbd122b[_0x15d98e(0x1c7)]<_0xbd122b['autoExpandLimit'];_0x4aaf2e||_0xbd122b[_0x15d98e(0x181)]<_0x1d352b||_0x5d98b2?(this[_0x15d98e(0x167)](_0x24808d,_0x1e58ee,_0xbd122b,_0x5d98b2||{}),this['_additionalMetadata'](_0x1e58ee,_0x24808d)):this['_processTreeNodeResult'](_0x24808d,_0xbd122b,_0x1e58ee,function(){var _0x4fbbb1=_0x15d98e;_0x491469==='null'||_0x491469===_0x4fbbb1(0x1bd)||(delete _0x24808d[_0x4fbbb1(0x1ab)],_0x24808d[_0x4fbbb1(0x1f3)]=!0x0);});}return _0x24808d;}finally{_0xbd122b[_0x15d98e(0x116)]=_0x1ab871,_0xbd122b[_0x15d98e(0x1ad)]=_0x1d352b,_0xbd122b['isExpressionToEvaluate']=_0x4da857;}}[_0x42ea47(0x1d4)](_0x4dc8aa,_0x1b4228,_0x18e125,_0x5c6314){var _0x15b442=_0x42ea47,_0x1f5b83=_0x5c6314[_0x15b442(0x1ac)]||_0x18e125[_0x15b442(0x1ac)];if((_0x4dc8aa===_0x15b442(0x158)||_0x4dc8aa===_0x15b442(0x12b))&&_0x1b4228[_0x15b442(0x1ab)]){let _0x2cc3f7=_0x1b4228[_0x15b442(0x1ab)]['length'];_0x18e125[_0x15b442(0x129)]+=_0x2cc3f7,_0x18e125[_0x15b442(0x129)]>_0x18e125[_0x15b442(0x13f)]?(_0x1b4228[_0x15b442(0x1f3)]='',delete _0x1b4228[_0x15b442(0x1ab)]):_0x2cc3f7>_0x1f5b83&&(_0x1b4228['capped']=_0x1b4228[_0x15b442(0x1ab)][_0x15b442(0x11b)](0x0,_0x1f5b83),delete _0x1b4228[_0x15b442(0x1ab)]);}}[_0x42ea47(0x1b0)](_0x4fbf47){var _0x4fa93f=_0x42ea47;return!!(_0x4fbf47&&_0xfc65['Map']&&this[_0x4fa93f(0x139)](_0x4fbf47)===_0x4fa93f(0x117)&&_0x4fbf47[_0x4fa93f(0x11c)]);}[_0x42ea47(0x180)](_0x95a7f3){var _0x368a9b=_0x42ea47;if(_0x95a7f3[_0x368a9b(0x114)](/^\\d+$/))return _0x95a7f3;var _0x1418da;try{_0x1418da=JSON[_0x368a9b(0x19c)](''+_0x95a7f3);}catch{_0x1418da='\\x22'+this[_0x368a9b(0x139)](_0x95a7f3)+'\\x22';}return _0x1418da[_0x368a9b(0x114)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1418da=_0x1418da['substr'](0x1,_0x1418da[_0x368a9b(0x1dd)]-0x2):_0x1418da=_0x1418da[_0x368a9b(0x160)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x368a9b(0x160)](/(^"|"$)/g,'\\x27'),_0x1418da;}[_0x42ea47(0x1f0)](_0x5ba194,_0x576ecd,_0x9e2212,_0x30c0cd){var _0x238d26=_0x42ea47;this[_0x238d26(0x195)](_0x5ba194,_0x576ecd),_0x30c0cd&&_0x30c0cd(),this[_0x238d26(0x19f)](_0x9e2212,_0x5ba194),this[_0x238d26(0x13b)](_0x5ba194,_0x576ecd);}[_0x42ea47(0x195)](_0x459b5b,_0x2f21fd){var _0x31e032=_0x42ea47;this[_0x31e032(0x1e4)](_0x459b5b,_0x2f21fd),this[_0x31e032(0x143)](_0x459b5b,_0x2f21fd),this[_0x31e032(0x11a)](_0x459b5b,_0x2f21fd),this[_0x31e032(0x13e)](_0x459b5b,_0x2f21fd);}[_0x42ea47(0x1e4)](_0x5c5ce8,_0x4600c6){}[_0x42ea47(0x143)](_0x3a627f,_0x39c271){}[_0x42ea47(0x189)](_0x4cdbb3,_0x4cfadb){}[_0x42ea47(0x126)](_0x437c62){return _0x437c62===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x1cbaec,_0x185b49){var _0x256d27=_0x42ea47;this[_0x256d27(0x189)](_0x1cbaec,_0x185b49),this[_0x256d27(0x190)](_0x1cbaec),_0x185b49[_0x256d27(0x16c)]&&this[_0x256d27(0x16e)](_0x1cbaec),this['_addFunctionsNode'](_0x1cbaec,_0x185b49),this['_addLoadNode'](_0x1cbaec,_0x185b49),this['_cleanNode'](_0x1cbaec);}[_0x42ea47(0x19f)](_0x4d583c,_0x250eaa){var _0x3166bd=_0x42ea47;let _0x403a05;try{_0xfc65['console']&&(_0x403a05=_0xfc65[_0x3166bd(0x17a)][_0x3166bd(0x13d)],_0xfc65[_0x3166bd(0x17a)][_0x3166bd(0x13d)]=function(){}),_0x4d583c&&typeof _0x4d583c[_0x3166bd(0x1dd)]==_0x3166bd(0x18d)&&(_0x250eaa['length']=_0x4d583c[_0x3166bd(0x1dd)]);}catch{}finally{_0x403a05&&(_0xfc65['console'][_0x3166bd(0x13d)]=_0x403a05);}if(_0x250eaa[_0x3166bd(0x18f)]===_0x3166bd(0x18d)||_0x250eaa[_0x3166bd(0x18f)]===_0x3166bd(0x1eb)){if(isNaN(_0x250eaa[_0x3166bd(0x1ab)]))_0x250eaa[_0x3166bd(0x1a6)]=!0x0,delete _0x250eaa['value'];else switch(_0x250eaa[_0x3166bd(0x1ab)]){case Number[_0x3166bd(0x1c5)]:_0x250eaa[_0x3166bd(0x1db)]=!0x0,delete _0x250eaa[_0x3166bd(0x1ab)];break;case Number[_0x3166bd(0x1f8)]:_0x250eaa['negativeInfinity']=!0x0,delete _0x250eaa['value'];break;case 0x0:this[_0x3166bd(0x131)](_0x250eaa['value'])&&(_0x250eaa['negativeZero']=!0x0);break;}}else _0x250eaa['type']===_0x3166bd(0x1a3)&&typeof _0x4d583c[_0x3166bd(0x15e)]==_0x3166bd(0x158)&&_0x4d583c[_0x3166bd(0x15e)]&&_0x250eaa[_0x3166bd(0x15e)]&&_0x4d583c[_0x3166bd(0x15e)]!==_0x250eaa[_0x3166bd(0x15e)]&&(_0x250eaa[_0x3166bd(0x14a)]=_0x4d583c['name']);}[_0x42ea47(0x131)](_0x3fe5eb){var _0x32cae1=_0x42ea47;return 0x1/_0x3fe5eb===Number[_0x32cae1(0x1f8)];}['_sortProps'](_0x36bddf){var _0x350639=_0x42ea47;!_0x36bddf[_0x350639(0x13c)]||!_0x36bddf[_0x350639(0x13c)][_0x350639(0x1dd)]||_0x36bddf[_0x350639(0x18f)]===_0x350639(0x113)||_0x36bddf[_0x350639(0x18f)]===_0x350639(0x115)||_0x36bddf[_0x350639(0x18f)]===_0x350639(0x1b6)||_0x36bddf[_0x350639(0x13c)][_0x350639(0x191)](function(_0x30c0ed,_0x116f15){var _0x375316=_0x350639,_0x1a73a3=_0x30c0ed[_0x375316(0x15e)][_0x375316(0x14b)](),_0x4205c2=_0x116f15[_0x375316(0x15e)][_0x375316(0x14b)]();return _0x1a73a3<_0x4205c2?-0x1:_0x1a73a3>_0x4205c2?0x1:0x0;});}[_0x42ea47(0x121)](_0xcb15c6,_0x2abfad){var _0x177711=_0x42ea47;if(!(_0x2abfad[_0x177711(0x1d1)]||!_0xcb15c6['props']||!_0xcb15c6[_0x177711(0x13c)][_0x177711(0x1dd)])){for(var _0x1bd74f=[],_0x4ad8ff=[],_0x1399ca=0x0,_0x3a68e0=_0xcb15c6['props']['length'];_0x1399ca<_0x3a68e0;_0x1399ca++){var _0x4c8c92=_0xcb15c6[_0x177711(0x13c)][_0x1399ca];_0x4c8c92[_0x177711(0x18f)]===_0x177711(0x1a3)?_0x1bd74f[_0x177711(0x18a)](_0x4c8c92):_0x4ad8ff[_0x177711(0x18a)](_0x4c8c92);}if(!(!_0x4ad8ff[_0x177711(0x1dd)]||_0x1bd74f[_0x177711(0x1dd)]<=0x1)){_0xcb15c6[_0x177711(0x13c)]=_0x4ad8ff;var _0x1d51ad={'functionsNode':!0x0,'props':_0x1bd74f};this[_0x177711(0x1e4)](_0x1d51ad,_0x2abfad),this['_setNodeLabel'](_0x1d51ad,_0x2abfad),this[_0x177711(0x190)](_0x1d51ad),this[_0x177711(0x13e)](_0x1d51ad,_0x2abfad),_0x1d51ad['id']+='\\x20f',_0xcb15c6[_0x177711(0x13c)]['unshift'](_0x1d51ad);}}}[_0x42ea47(0x196)](_0x5941a6,_0x54e925){}[_0x42ea47(0x190)](_0x5077a2){}['_isArray'](_0x172a3f){var _0xe411e3=_0x42ea47;return Array['isArray'](_0x172a3f)||typeof _0x172a3f==_0xe411e3(0x151)&&this[_0xe411e3(0x139)](_0x172a3f)===_0xe411e3(0x1ca);}[_0x42ea47(0x13e)](_0x48f841,_0x132840){}[_0x42ea47(0x1cd)](_0x247796){var _0x241321=_0x42ea47;delete _0x247796['_hasSymbolPropertyOnItsPath'],delete _0x247796[_0x241321(0x154)],delete _0x247796[_0x241321(0x125)];}[_0x42ea47(0x11a)](_0x55d525,_0xf6bf73){}}let _0x2dc2bb=new _0x5d80d5(),_0x30059a={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x2fef46={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5806d7(_0x523f06,_0x3c9ccf,_0x428773,_0x5b3858,_0x31b55f,_0x4ebaa4){var _0x5b686d=_0x42ea47;let _0x210594,_0x2fe101;try{_0x2fe101=_0x404d67(),_0x210594=_0x570b44[_0x3c9ccf],!_0x210594||_0x2fe101-_0x210594['ts']>0x1f4&&_0x210594[_0x5b686d(0x1aa)]&&_0x210594[_0x5b686d(0x137)]/_0x210594[_0x5b686d(0x1aa)]<0x64?(_0x570b44[_0x3c9ccf]=_0x210594={'count':0x0,'time':0x0,'ts':_0x2fe101},_0x570b44[_0x5b686d(0x1e1)]={}):_0x2fe101-_0x570b44['hits']['ts']>0x32&&_0x570b44[_0x5b686d(0x1e1)][_0x5b686d(0x1aa)]&&_0x570b44[_0x5b686d(0x1e1)]['time']/_0x570b44['hits'][_0x5b686d(0x1aa)]<0x64&&(_0x570b44[_0x5b686d(0x1e1)]={});let _0x216804=[],_0x5e3a22=_0x210594['reduceLimits']||_0x570b44[_0x5b686d(0x1e1)][_0x5b686d(0x1df)]?_0x2fef46:_0x30059a,_0x15f96d=_0x1838fd=>{var _0x25792d=_0x5b686d;let _0x222dda={};return _0x222dda[_0x25792d(0x13c)]=_0x1838fd[_0x25792d(0x13c)],_0x222dda['elements']=_0x1838fd['elements'],_0x222dda[_0x25792d(0x1ac)]=_0x1838fd[_0x25792d(0x1ac)],_0x222dda[_0x25792d(0x13f)]=_0x1838fd[_0x25792d(0x13f)],_0x222dda['autoExpandLimit']=_0x1838fd[_0x25792d(0x168)],_0x222dda['autoExpandMaxDepth']=_0x1838fd[_0x25792d(0x16b)],_0x222dda[_0x25792d(0x16c)]=!0x1,_0x222dda[_0x25792d(0x1d1)]=!_0x43e68c,_0x222dda[_0x25792d(0x1ad)]=0x1,_0x222dda[_0x25792d(0x181)]=0x0,_0x222dda[_0x25792d(0x1c2)]=_0x25792d(0x198),_0x222dda[_0x25792d(0x162)]='root_exp',_0x222dda[_0x25792d(0x194)]=!0x0,_0x222dda[_0x25792d(0x1ef)]=[],_0x222dda[_0x25792d(0x1c7)]=0x0,_0x222dda[_0x25792d(0x1d5)]=!0x0,_0x222dda[_0x25792d(0x129)]=0x0,_0x222dda[_0x25792d(0x1bc)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x222dda;};for(var _0x4a1a63=0x0;_0x4a1a63<_0x31b55f[_0x5b686d(0x1dd)];_0x4a1a63++)_0x216804[_0x5b686d(0x18a)](_0x2dc2bb[_0x5b686d(0x167)]({'timeNode':_0x523f06===_0x5b686d(0x137)||void 0x0},_0x31b55f[_0x4a1a63],_0x15f96d(_0x5e3a22),{}));if(_0x523f06==='trace'){let _0xb965ed=Error[_0x5b686d(0x14f)];try{Error[_0x5b686d(0x14f)]=0x1/0x0,_0x216804[_0x5b686d(0x18a)](_0x2dc2bb[_0x5b686d(0x167)]({'stackNode':!0x0},new Error()[_0x5b686d(0x199)],_0x15f96d(_0x5e3a22),{'strLength':0x1/0x0}));}finally{Error[_0x5b686d(0x14f)]=_0xb965ed;}}return{'method':_0x5b686d(0x178),'version':_0x22731a,'args':[{'ts':_0x428773,'session':_0x5b3858,'args':_0x216804,'id':_0x3c9ccf,'context':_0x4ebaa4}]};}catch(_0x2bfe1f){return{'method':'log','version':_0x22731a,'args':[{'ts':_0x428773,'session':_0x5b3858,'args':[{'type':_0x5b686d(0x169),'error':_0x2bfe1f&&_0x2bfe1f['message']}],'id':_0x3c9ccf,'context':_0x4ebaa4}]};}finally{try{if(_0x210594&&_0x2fe101){let _0x1c4777=_0x404d67();_0x210594[_0x5b686d(0x1aa)]++,_0x210594[_0x5b686d(0x137)]+=_0xbb521b(_0x2fe101,_0x1c4777),_0x210594['ts']=_0x1c4777,_0x570b44[_0x5b686d(0x1e1)][_0x5b686d(0x1aa)]++,_0x570b44[_0x5b686d(0x1e1)][_0x5b686d(0x137)]+=_0xbb521b(_0x2fe101,_0x1c4777),_0x570b44[_0x5b686d(0x1e1)]['ts']=_0x1c4777,(_0x210594['count']>0x32||_0x210594[_0x5b686d(0x137)]>0x64)&&(_0x210594[_0x5b686d(0x1df)]=!0x0),(_0x570b44[_0x5b686d(0x1e1)][_0x5b686d(0x1aa)]>0x3e8||_0x570b44['hits'][_0x5b686d(0x137)]>0x12c)&&(_0x570b44[_0x5b686d(0x1e1)][_0x5b686d(0x1df)]=!0x0);}}catch{}}}return _0x5806d7;}((_0x5f9efc,_0x7652cf,_0x39e71e,_0x58ddf1,_0x18bc59,_0x2d83c4,_0x299ca1,_0x3c96df,_0xb2cc03,_0x520ff3)=>{var _0x6703d3=_0xdddce8;if(_0x5f9efc[_0x6703d3(0x145)])return _0x5f9efc[_0x6703d3(0x145)];if(!J(_0x5f9efc,_0x3c96df,_0x18bc59))return _0x5f9efc[_0x6703d3(0x145)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x5f9efc[_0x6703d3(0x145)];let _0x16285f=W(_0x5f9efc),_0x3fdea2=_0x16285f[_0x6703d3(0x153)],_0x5a61f0=_0x16285f[_0x6703d3(0x135)],_0x97d33c=_0x16285f[_0x6703d3(0x163)],_0x4155b9={'hits':{},'ts':{}},_0x105525=Y(_0x5f9efc,_0xb2cc03,_0x4155b9,_0x2d83c4),_0x2a7076=_0x3ee46c=>{_0x4155b9['ts'][_0x3ee46c]=_0x5a61f0();},_0x356dac=(_0x4f9717,_0x12a307)=>{var _0x25235a=_0x6703d3;let _0x4a769b=_0x4155b9['ts'][_0x12a307];if(delete _0x4155b9['ts'][_0x12a307],_0x4a769b){let _0x1311e7=_0x3fdea2(_0x4a769b,_0x5a61f0());_0x1f49d3(_0x105525(_0x25235a(0x137),_0x4f9717,_0x97d33c(),_0x57d85e,[_0x1311e7],_0x12a307));}},_0x591743=_0xb04557=>_0x2c0485=>{var _0x116b05=_0x6703d3;try{_0x2a7076(_0x2c0485),_0xb04557(_0x2c0485);}finally{_0x5f9efc[_0x116b05(0x17a)][_0x116b05(0x137)]=_0xb04557;}},_0x1ac10e=_0x51ce21=>_0x27f884=>{var _0x48c526=_0x6703d3;try{let [_0x22556e,_0x2b36f4]=_0x27f884[_0x48c526(0x1da)](_0x48c526(0x156));_0x356dac(_0x2b36f4,_0x22556e),_0x51ce21(_0x22556e);}finally{_0x5f9efc['console'][_0x48c526(0x1cb)]=_0x51ce21;}};_0x5f9efc[_0x6703d3(0x145)]={'consoleLog':(_0x159a0e,_0x22f265)=>{var _0x47ae08=_0x6703d3;_0x5f9efc[_0x47ae08(0x17a)][_0x47ae08(0x178)][_0x47ae08(0x15e)]!==_0x47ae08(0x187)&&_0x1f49d3(_0x105525(_0x47ae08(0x178),_0x159a0e,_0x97d33c(),_0x57d85e,_0x22f265));},'consoleTrace':(_0x4ca258,_0x4ce825)=>{var _0x1323cd=_0x6703d3;_0x5f9efc[_0x1323cd(0x17a)]['log']['name']!==_0x1323cd(0x122)&&_0x1f49d3(_0x105525(_0x1323cd(0x173),_0x4ca258,_0x97d33c(),_0x57d85e,_0x4ce825));},'consoleTime':()=>{var _0x2f380b=_0x6703d3;_0x5f9efc[_0x2f380b(0x17a)][_0x2f380b(0x137)]=_0x591743(_0x5f9efc[_0x2f380b(0x17a)][_0x2f380b(0x137)]);},'consoleTimeEnd':()=>{var _0x3a20ae=_0x6703d3;_0x5f9efc[_0x3a20ae(0x17a)][_0x3a20ae(0x1cb)]=_0x1ac10e(_0x5f9efc[_0x3a20ae(0x17a)][_0x3a20ae(0x1cb)]);},'autoLog':(_0xe00c44,_0x5b6e32)=>{var _0x3028e7=_0x6703d3;_0x1f49d3(_0x105525(_0x3028e7(0x178),_0x5b6e32,_0x97d33c(),_0x57d85e,[_0xe00c44]));},'autoLogMany':(_0x18be92,_0x482dd8)=>{var _0x44f293=_0x6703d3;_0x1f49d3(_0x105525(_0x44f293(0x178),_0x18be92,_0x97d33c(),_0x57d85e,_0x482dd8));},'autoTrace':(_0x56ba8a,_0x338584)=>{var _0x2d5909=_0x6703d3;_0x1f49d3(_0x105525(_0x2d5909(0x173),_0x338584,_0x97d33c(),_0x57d85e,[_0x56ba8a]));},'autoTraceMany':(_0x2ed924,_0x1fba39)=>{var _0x6ee440=_0x6703d3;_0x1f49d3(_0x105525(_0x6ee440(0x173),_0x2ed924,_0x97d33c(),_0x57d85e,_0x1fba39));},'autoTime':(_0x3406b7,_0x5c465c,_0x46bf1b)=>{_0x2a7076(_0x46bf1b);},'autoTimeEnd':(_0x12c3fe,_0x380fd6,_0x1cf111)=>{_0x356dac(_0x380fd6,_0x1cf111);},'coverage':_0x1e55ad=>{var _0x3674ed=_0x6703d3;_0x1f49d3({'method':_0x3674ed(0x1e8),'version':_0x2d83c4,'args':[{'id':_0x1e55ad}]});}};let _0x1f49d3=b(_0x5f9efc,_0x7652cf,_0x39e71e,_0x58ddf1,_0x18bc59,_0x520ff3),_0x57d85e=_0x5f9efc['_console_ninja_session'];return _0x5f9efc['_console_ninja'];})(globalThis,_0xdddce8(0x1d9),_0xdddce8(0x18c),_0xdddce8(0x12f),'nuxt',_0xdddce8(0x197),'1705579109405',["localhost","127.0.0.1","example.cypress.io","sak-ubuntu","192.168.1.2"],_0xdddce8(0x1a5),_0xdddce8(0x17c));`);
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

const prisma$p = new PrismaClient();
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
    comment = await prisma$p.comment.update({
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

const prisma$o = new PrismaClient();
const comment_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const createComment = await prisma$o.comment.create({
    data: {
      "content": body.content,
      "authorId": body.authorId,
      "postId": body.postId
    }
  });
  if (body.url) {
    let tmp = JSON.parse(body.url);
    tmp.forEach(async (elem) => {
      await prisma$o.commentUrl.create({
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

const prisma$n = new PrismaClient();
const fromUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const InvitesFromUser = await prisma$n.invite.findMany({
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

const prisma$m = new PrismaClient();
const invite_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const createInvite = await prisma$m.invite.create({
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

const prisma$l = new PrismaClient();
const response_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const responseInvite = await prisma$l.invite.update({
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

const prisma$k = new PrismaClient();
const toUser_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const InvitesToUser = await prisma$k.invite.findMany({
    where: {
      user_to_id: body.user_to_id,
      status: 0
    }
  });
  return {
    invites: InvitesToUser
  };
});

const toUser_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: toUser_post
});

const prisma$j = new PrismaClient();
const _id__delete$2 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    idShouldBeInteger();
  } else {
    await prisma$j.post.delete({
      where: {
        id
      }
    });
    await prisma$j.postUrl.deleteMany({
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

const prisma$i = new PrismaClient();
const _id__get$6 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let post = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "UserGet ID should be an integer"
    });
  } else {
    post = await prisma$i.post.findUnique({
      where: {
        id
      }
    });
  }
  return {
    post
  };
});

const _id__get$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$6
});

const prisma$h = new PrismaClient();
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
    post = await prisma$h.post.update({
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

const prisma$g = new PrismaClient();
const dislikeClicked_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const authorId = body.authorId;
  const postId = body.postId;
  var message = "like added";
  var ret_val = 0;
  const like = await prisma$g.userLikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  const dislike = await prisma$g.userDislikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  if (like === void 0 || like === null) {
    if (dislike === void 0 || dislike === null) {
      await prisma$g.userDislikePost.create({
        data: {
          postId,
          userId: authorId
        }
      });
      await prisma$g.post.update({
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
      await prisma$g.userDislikePost.delete({
        where: {
          postId_userId: {
            postId,
            userId: authorId
          }
        }
      });
      await prisma$g.post.update({
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

const prisma$f = new PrismaClient();
const getUserByEmail = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await prisma$f.user.findUnique({
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

const prisma$e = new PrismaClient();
const likeClicked_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const authorId = body.authorId;
  const postId = body.postId;
  var message = "like added";
  var ret_val = 0;
  const like = await prisma$e.userLikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  const dislike = await prisma$e.userDislikePost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId: authorId
      }
    }
  });
  if (dislike === void 0 || dislike === null) {
    if (like === void 0 || like === null) {
      await prisma$e.userLikePost.create({
        data: {
          postId,
          userId: authorId
        }
      });
      await prisma$e.post.update({
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
      await prisma$e.userLikePost.delete({
        where: {
          postId_userId: {
            postId,
            userId: authorId
          }
        }
      });
      await prisma$e.post.update({
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

const prisma$d = new PrismaClient();
const _id__get$4 = defineEventHandler(async (event) => {
  const postId = parseInt(event.context.params.id);
  let comments = [];
  let commentsUrls = [];
  async function findCommentsUrls(commentId) {
    return await prisma$d.commentUrl.findMany({
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
    comments = await prisma$d.comment.findMany({
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
    commentsUrl: commentsUrls
  };
});

const _id__get$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$4
});

const prisma$c = new PrismaClient();
const posts_get = defineEventHandler(async (event) => {
  const posts = await prisma$c.post.findMany();
  return {
    posts
  };
});

const posts_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: posts_get
});

const prisma$b = new PrismaClient();
const posts_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let post;
  let postUrl;
  post = {
    title: body.title,
    content: body.content,
    authorId: body.authorId
  };
  const createPost = await prisma$b.post.create({ data: post });
  if (body.url) {
    let tmp = JSON.parse(body.url);
    tmp.forEach(async (elem) => {
      postUrl = {
        url: elem,
        postId: createPost.id
      };
      await prisma$b.postUrl.create({
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

const prisma$a = new PrismaClient();
const _id__get$2 = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let post_urls = null;
  let urls = [];
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: " ID should be an integer"
    });
  } else {
    post_urls = await prisma$a.postUrl.findMany({
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

const _id__get$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get$2
});

const prisma$9 = new PrismaClient();
const _id__delete = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer"
    });
  } else {
    await prisma$9.user.delete({
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

const prisma$8 = new PrismaClient();
const _id__get = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  let user = null;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "UserGet ID should be an integer"
    });
  } else {
    user = await prisma$8.user.findUnique({
      where: {
        id
      }
    });
  }
  return {
    user
  };
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _id__get
});

const prisma$7 = new PrismaClient();
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
    user = await prisma$7.user.update({
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

const prisma$6 = new PrismaClient();
const _userId__get = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.userId);
  const friends = await prisma$6.friend.findMany({
    where: {
      user1Id: id
    }
  });
  return {
    friends
  };
});

const _userId__get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _userId__get
});

const prisma$5 = new PrismaClient();
const addFriend_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const friend_uno = await prisma$5.friend.create({
    data: {
      user1Id: body.user1Id,
      user2Id: body.user2Id
    }
  });
  const friend_dos = await prisma$5.friend.create({
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

const prisma$4 = new PrismaClient();
const checkIfFriends_post = defineEventHandler(async (event) => {
  const id_for_check = (await readBody(event)).userId;
  const loggedId = getLoggedUserId();
  if (loggedId === null)
    return false;
  const friends = await prisma$4.friend.findUnique({
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

const prisma$3 = new PrismaClient();
const removeFriend_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  await prisma$3.friend.delete({
    where: {
      user1Id_user2Id: {
        user1Id: body.user1Id,
        user2Id: body.user2Id
      }
    }
  });
  await prisma$3.friend.delete({
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

const prisma$2 = new PrismaClient();
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
    user = await prisma$2.user.findUnique({
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

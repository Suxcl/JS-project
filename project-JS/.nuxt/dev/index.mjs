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
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x466d(){var _0x11aee3=['','[object\\x20Map]','_WebSocketClass','indexOf','stackTraceLimit','timeEnd','nodeModules','_type','_isUndefined','join','hrtime','getOwnPropertySymbols','depth','astro','reduceLimits','111408sfzkxN','[object\\x20Array]','String','hostname','level','expId','_allowedToConnectOnSend','getPrototypeOf','allStrLength','getOwnPropertyNames','defineProperty','root_exp','host','autoExpandPreviousObjects','null','https://tinyurl.com/37x8b79t','global','method','127.0.0.1','_getOwnPropertyNames','positiveInfinity','performance','88190AnCzxP','nan','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','location','32863','__es'+'Module','onclose','strLength','_setNodeQueryPath','_ws','_console_ninja','_inBrowser',':logPointId:','replace','_setNodeId','1.0.0','message','getter','autoExpandLimit','symbol','...','WebSocket','value','default','sort','_cleanNode','toString','funcName','elapsed','readyState',["localhost","127.0.0.1","example.cypress.io","sak-ubuntu","192.168.1.2"],'count','unshift','_HTMLAllCollection','NEXT_RUNTIME','_p_','resolveGetters','push','onerror','noFunctions','_processTreeNodeResult','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','autoExpandMaxDepth','_isPrimitiveType','_allowedToSend','_isSet','gateway.docker.internal','data','unknown','split','_keyStrRegExp','Number','1706781806592','getWebSocketClass','_regExpToString','_isNegativeZero','edge','_property','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_objectToString','array','getOwnPropertyDescriptor','_consoleNinjaAllowedToStart','_hasSetOnItsPath','string','prototype','function','catch','props','close','now','_console_ninja_session','name','url','autoExpand','reload','capped','_setNodePermissions','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','stack','\\x20browser','error','pathToFileURL','totalStrLength','Symbol','rootExpression','_attemptToReconnectShortly','length','_getOwnPropertyDescriptor','warn','_connectToHostNow','sortProps','port','onopen','env','constructor','unref','_Symbol','Boolean','_blacklistedProperty','30bnrOto','object','stringify','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','125TrInin','timeStamp','_getOwnPropertySymbols','_numberRegExp','current','_disposeWebsocket','_setNodeExpandableState','3239187UKFbPc','_hasMapOnItsPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','Map','versions','negativeZero','_connectAttemptCount','concat','NEGATIVE_INFINITY','setter','_socket','create','ws://','_addFunctionsNode','68096GJQmHS','index','_inNextEdge','_quotedRegExp','_setNodeLabel','_setNodeExpressionPath','132XkqITG','POSITIVE_INFINITY','_undefined','_reconnectTimeout','Buffer','RegExp','disabledLog','trace','boolean','then','hits','elements','_capIfString','forEach','_treeNodePropertiesAfterFullValue','_WebSocket','parent','substr','4166424WXfJvc','_dateToString','call','process','_maxConnectAttemptCount','cappedProps','map','_addObjectProperty','[object\\x20Date]','date','console','Error','\\x20server','Set','test','_propertyName','_sortProps','343150OHdrjk','includes','_connected','negativeInfinity','time','slice','pop','bind','isArray','_addLoadNode','_isMap','path','type','[object\\x20BigInt]','_isPrimitiveWrapperType','bigint','_connecting','_additionalMetadata','node','valueOf','number','_sendErrorMessage',"/home/sak/.vscode/extensions/wallabyjs.console-ninja-1.0.274/node_modules",'isExpressionToEvaluate','autoExpandPropertyCount','enumerable','send','_hasSymbolPropertyOnItsPath','_webSocketErrorDocsLink','_addProperty','perf_hooks','log','expressionsToEvaluate','ws/index.js','_p_length','undefined','serialize','_treeNodePropertiesBeforeFullValue'];_0x466d=function(){return _0x11aee3;};return _0x466d();}var _0x1097a9=_0xb830;(function(_0x41ce87,_0x3f724c){var _0x480637=_0xb830,_0x430d17=_0x41ce87();while(!![]){try{var _0x179903=-parseInt(_0x480637(0xda))/0x1+parseInt(_0x480637(0x8f))/0x2+-parseInt(_0x480637(0x13e))/0x3*(-parseInt(_0x480637(0x157))/0x4)+-parseInt(_0x480637(0x142))/0x5*(-parseInt(_0x480637(0x15d))/0x6)+-parseInt(_0x480637(0x149))/0x7+parseInt(_0x480637(0xc4))/0x8+parseInt(_0x480637(0x16f))/0x9;if(_0x179903===_0x3f724c)break;else _0x430d17['push'](_0x430d17['shift']());}catch(_0x156003){_0x430d17['push'](_0x430d17['shift']());}}}(_0x466d,0x41808));var j=Object[_0x1097a9(0x154)],H=Object[_0x1097a9(0xce)],G=Object[_0x1097a9(0x117)],ee=Object[_0x1097a9(0xcd)],te=Object[_0x1097a9(0xcb)],ne=Object[_0x1097a9(0x11b)]['hasOwnProperty'],re=(_0x50999f,_0x156e6e,_0x506dcc,_0x3f0921)=>{var _0x55f619=_0x1097a9;if(_0x156e6e&&typeof _0x156e6e=='object'||typeof _0x156e6e=='function'){for(let _0x352071 of ee(_0x156e6e))!ne['call'](_0x50999f,_0x352071)&&_0x352071!==_0x506dcc&&H(_0x50999f,_0x352071,{'get':()=>_0x156e6e[_0x352071],'enumerable':!(_0x3f0921=G(_0x156e6e,_0x352071))||_0x3f0921[_0x55f619(0xa8)]});}return _0x50999f;},x=(_0x57d8e5,_0x33682a,_0x3818fd)=>(_0x3818fd=_0x57d8e5!=null?j(te(_0x57d8e5)):{},re(_0x33682a||!_0x57d8e5||!_0x57d8e5[_0x1097a9(0xdf)]?H(_0x3818fd,_0x1097a9(0xf1),{'value':_0x57d8e5,'enumerable':!0x0}):_0x3818fd,_0x57d8e5)),X=class{constructor(_0xc5b3e8,_0x3dcc6d,_0x489c49,_0x4726ff,_0x33ee99){var _0x43f9f0=_0x1097a9;this[_0x43f9f0(0xd4)]=_0xc5b3e8,this[_0x43f9f0(0xd0)]=_0x3dcc6d,this['port']=_0x489c49,this['nodeModules']=_0x4726ff,this['dockerizedApp']=_0x33ee99,this[_0x43f9f0(0x106)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x43f9f0(0x91)]=!0x1,this[_0x43f9f0(0x9f)]=!0x1,this['_inNextEdge']=_0xc5b3e8['process']?.['env']?.[_0x43f9f0(0xfc)]===_0x43f9f0(0x112),this[_0x43f9f0(0xe5)]=!this['global'][_0x43f9f0(0x172)]?.['versions']?.['node']&&!this['_inNextEdge'],this[_0x43f9f0(0xb7)]=null,this[_0x43f9f0(0x14f)]=0x0,this[_0x43f9f0(0x173)]=0x14,this['_webSocketErrorDocsLink']=_0x43f9f0(0xd3),this[_0x43f9f0(0xa4)]=(this[_0x43f9f0(0xe5)]?_0x43f9f0(0xdc):_0x43f9f0(0x14b))+this[_0x43f9f0(0xab)];}async[_0x1097a9(0x10f)](){var _0x3f172e=_0x1097a9;if(this[_0x3f172e(0xb7)])return this[_0x3f172e(0xb7)];let _0x2f2708;if(this[_0x3f172e(0xe5)]||this[_0x3f172e(0x159)])_0x2f2708=this[_0x3f172e(0xd4)][_0x3f172e(0xef)];else{if(this[_0x3f172e(0xd4)][_0x3f172e(0x172)]?.[_0x3f172e(0x16c)])_0x2f2708=this[_0x3f172e(0xd4)]['process']?.[_0x3f172e(0x16c)];else try{let _0xbbe394=await import(_0x3f172e(0x9a));_0x2f2708=(await import((await import(_0x3f172e(0x123)))[_0x3f172e(0x12c)](_0xbbe394[_0x3f172e(0xbe)](this[_0x3f172e(0xbb)],_0x3f172e(0xb0)))[_0x3f172e(0xf4)]()))[_0x3f172e(0xf1)];}catch{try{_0x2f2708=require(require(_0x3f172e(0x9a))[_0x3f172e(0xbe)](this['nodeModules'],'ws'));}catch{throw new Error(_0x3f172e(0x141));}}}return this['_WebSocketClass']=_0x2f2708,_0x2f2708;}['_connectToHostNow'](){var _0x4912c3=_0x1097a9;this[_0x4912c3(0x9f)]||this[_0x4912c3(0x91)]||this['_connectAttemptCount']>=this[_0x4912c3(0x173)]||(this[_0x4912c3(0xca)]=!0x1,this[_0x4912c3(0x9f)]=!0x0,this[_0x4912c3(0x14f)]++,this[_0x4912c3(0xe3)]=new Promise((_0x5b2f9b,_0x152695)=>{var _0x2c9355=_0x4912c3;this[_0x2c9355(0x10f)]()[_0x2c9355(0x166)](_0x44b663=>{var _0x284ca2=_0x2c9355;let _0x2f04a8=new _0x44b663(_0x284ca2(0x155)+(!this['_inBrowser']&&this['dockerizedApp']?_0x284ca2(0x108):this[_0x284ca2(0xd0)])+':'+this[_0x284ca2(0x136)]);_0x2f04a8[_0x284ca2(0x100)]=()=>{var _0x295ee6=_0x284ca2;this[_0x295ee6(0x106)]=!0x1,this['_disposeWebsocket'](_0x2f04a8),this[_0x295ee6(0x130)](),_0x152695(new Error('logger\\x20websocket\\x20error'));},_0x2f04a8[_0x284ca2(0x137)]=()=>{var _0x1e9f77=_0x284ca2;this['_inBrowser']||_0x2f04a8[_0x1e9f77(0x153)]&&_0x2f04a8['_socket'][_0x1e9f77(0x13a)]&&_0x2f04a8[_0x1e9f77(0x153)]['unref'](),_0x5b2f9b(_0x2f04a8);},_0x2f04a8['onclose']=()=>{var _0x3ab87f=_0x284ca2;this['_allowedToConnectOnSend']=!0x0,this[_0x3ab87f(0x147)](_0x2f04a8),this[_0x3ab87f(0x130)]();},_0x2f04a8['onmessage']=_0x4d8496=>{var _0x53f340=_0x284ca2;try{_0x4d8496&&_0x4d8496[_0x53f340(0x109)]&&this['_inBrowser']&&JSON['parse'](_0x4d8496[_0x53f340(0x109)])[_0x53f340(0xd5)]===_0x53f340(0x125)&&this['global'][_0x53f340(0xdd)]['reload']();}catch{}};})[_0x2c9355(0x166)](_0x2ccf15=>(this[_0x2c9355(0x91)]=!0x0,this[_0x2c9355(0x9f)]=!0x1,this[_0x2c9355(0xca)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2c9355(0x14f)]=0x0,_0x2ccf15))['catch'](_0x451ae5=>(this['_connected']=!0x1,this['_connecting']=!0x1,console['warn'](_0x2c9355(0x128)+this['_webSocketErrorDocsLink']),_0x152695(new Error(_0x2c9355(0x103)+(_0x451ae5&&_0x451ae5[_0x2c9355(0xea)])))));}));}[_0x1097a9(0x147)](_0x2ea76f){var _0x1e62ce=_0x1097a9;this[_0x1e62ce(0x91)]=!0x1,this['_connecting']=!0x1;try{_0x2ea76f[_0x1e62ce(0xe0)]=null,_0x2ea76f[_0x1e62ce(0x100)]=null,_0x2ea76f[_0x1e62ce(0x137)]=null;}catch{}try{_0x2ea76f[_0x1e62ce(0xf7)]<0x2&&_0x2ea76f[_0x1e62ce(0x11f)]();}catch{}}[_0x1097a9(0x130)](){var _0x3769b2=_0x1097a9;clearTimeout(this[_0x3769b2(0x160)]),!(this[_0x3769b2(0x14f)]>=this[_0x3769b2(0x173)])&&(this[_0x3769b2(0x160)]=setTimeout(()=>{var _0x358df6=_0x3769b2;this[_0x358df6(0x91)]||this[_0x358df6(0x9f)]||(this[_0x358df6(0x134)](),this[_0x358df6(0xe3)]?.[_0x358df6(0x11d)](()=>this[_0x358df6(0x130)]()));},0x1f4),this[_0x3769b2(0x160)]['unref']&&this['_reconnectTimeout']['unref']());}async['send'](_0x4e24e3){var _0x142bfb=_0x1097a9;try{if(!this['_allowedToSend'])return;this[_0x142bfb(0xca)]&&this['_connectToHostNow'](),(await this[_0x142bfb(0xe3)])[_0x142bfb(0xa9)](JSON[_0x142bfb(0x140)](_0x4e24e3));}catch(_0x4183fe){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x4183fe&&_0x4183fe[_0x142bfb(0xea)])),this[_0x142bfb(0x106)]=!0x1,this[_0x142bfb(0x130)]();}}};function b(_0x4b3895,_0x2647c2,_0xea9eb5,_0x3a60db,_0x5151da,_0xb94277){var _0x59cd6f=_0x1097a9;let _0x1e57f0=_0xea9eb5[_0x59cd6f(0x10b)](',')[_0x59cd6f(0x84)](_0x11533f=>{var _0x4324c0=_0x59cd6f;try{_0x4b3895[_0x4324c0(0x121)]||((_0x5151da==='next.js'||_0x5151da==='remix'||_0x5151da===_0x4324c0(0xc2)||_0x5151da==='angular')&&(_0x5151da+=!_0x4b3895[_0x4324c0(0x172)]?.[_0x4324c0(0x14d)]?.['node']&&_0x4b3895['process']?.[_0x4324c0(0x138)]?.[_0x4324c0(0xfc)]!==_0x4324c0(0x112)?_0x4324c0(0x12a):_0x4324c0(0x8a)),_0x4b3895['_console_ninja_session']={'id':+new Date(),'tool':_0x5151da});let _0xb380e8=new X(_0x4b3895,_0x2647c2,_0x11533f,_0x3a60db,_0xb94277);return _0xb380e8[_0x4324c0(0xa9)][_0x4324c0(0x96)](_0xb380e8);}catch(_0x42b7f1){return console[_0x4324c0(0x133)](_0x4324c0(0x114),_0x42b7f1&&_0x42b7f1[_0x4324c0(0xea)]),()=>{};}});return _0x14f40f=>_0x1e57f0[_0x59cd6f(0x16a)](_0x27110f=>_0x27110f(_0x14f40f));}function W(_0x2d1833){var _0x43f749=_0x1097a9;let _0xc9a0a=function(_0x2a6d8e,_0x16cb71){return _0x16cb71-_0x2a6d8e;},_0x467056;if(_0x2d1833['performance'])_0x467056=function(){var _0x3e0a7a=_0xb830;return _0x2d1833[_0x3e0a7a(0xd9)]['now']();};else{if(_0x2d1833[_0x43f749(0x172)]&&_0x2d1833[_0x43f749(0x172)][_0x43f749(0xbf)]&&_0x2d1833[_0x43f749(0x172)]?.[_0x43f749(0x138)]?.[_0x43f749(0xfc)]!==_0x43f749(0x112))_0x467056=function(){var _0x4d4a01=_0x43f749;return _0x2d1833[_0x4d4a01(0x172)][_0x4d4a01(0xbf)]();},_0xc9a0a=function(_0x16bac1,_0x27035e){return 0x3e8*(_0x27035e[0x0]-_0x16bac1[0x0])+(_0x27035e[0x1]-_0x16bac1[0x1])/0xf4240;};else try{let {performance:_0x58e45c}=require(_0x43f749(0xad));_0x467056=function(){var _0x203e2e=_0x43f749;return _0x58e45c[_0x203e2e(0x120)]();};}catch{_0x467056=function(){return+new Date();};}}return{'elapsed':_0xc9a0a,'timeStamp':_0x467056,'now':()=>Date[_0x43f749(0x120)]()};}function J(_0x198f68,_0xd80310,_0x2e2ef1){var _0x192dab=_0x1097a9;if(_0x198f68[_0x192dab(0x118)]!==void 0x0)return _0x198f68[_0x192dab(0x118)];let _0xebe88b=_0x198f68[_0x192dab(0x172)]?.[_0x192dab(0x14d)]?.[_0x192dab(0xa1)]||_0x198f68[_0x192dab(0x172)]?.[_0x192dab(0x138)]?.['NEXT_RUNTIME']===_0x192dab(0x112);return _0xebe88b&&_0x2e2ef1==='nuxt'?_0x198f68[_0x192dab(0x118)]=!0x1:_0x198f68[_0x192dab(0x118)]=_0xebe88b||!_0xd80310||_0x198f68[_0x192dab(0xdd)]?.[_0x192dab(0xc7)]&&_0xd80310[_0x192dab(0x90)](_0x198f68['location'][_0x192dab(0xc7)]),_0x198f68[_0x192dab(0x118)];}function _0xb830(_0x1e5ae3,_0xc385c6){var _0x466d1e=_0x466d();return _0xb830=function(_0xb8301,_0x4c99da){_0xb8301=_0xb8301-0x83;var _0x5b1ed3=_0x466d1e[_0xb8301];return _0x5b1ed3;},_0xb830(_0x1e5ae3,_0xc385c6);}function Y(_0x1cc08b,_0x13ad5e,_0x3730c0,_0x5d91f4){var _0xeba5ae=_0x1097a9;_0x1cc08b=_0x1cc08b,_0x13ad5e=_0x13ad5e,_0x3730c0=_0x3730c0,_0x5d91f4=_0x5d91f4;let _0x4468d4=W(_0x1cc08b),_0x435479=_0x4468d4['elapsed'],_0x38efec=_0x4468d4[_0xeba5ae(0x143)];class _0x1d60d8{constructor(){var _0x406559=_0xeba5ae;this[_0x406559(0x10c)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x406559(0x145)]=/^(0|[1-9][0-9]*)$/,this[_0x406559(0x15a)]=/'([^\\\\']|\\\\')*'/,this[_0x406559(0x15f)]=_0x1cc08b[_0x406559(0xb2)],this[_0x406559(0xfb)]=_0x1cc08b['HTMLAllCollection'],this[_0x406559(0x132)]=Object['getOwnPropertyDescriptor'],this[_0x406559(0xd7)]=Object[_0x406559(0xcd)],this['_Symbol']=_0x1cc08b[_0x406559(0x12e)],this[_0x406559(0x110)]=RegExp[_0x406559(0x11b)][_0x406559(0xf4)],this[_0x406559(0x170)]=Date[_0x406559(0x11b)]['toString'];}[_0xeba5ae(0xb3)](_0x52e9c4,_0x2db60d,_0x163809,_0x1d3865){var _0x11b046=_0xeba5ae,_0x11758f=this,_0x533f43=_0x163809[_0x11b046(0x124)];function _0x553782(_0xa5ea99,_0x45f574,_0x474fe8){var _0x2d0d70=_0x11b046;_0x45f574[_0x2d0d70(0x9b)]=_0x2d0d70(0x10a),_0x45f574[_0x2d0d70(0x12b)]=_0xa5ea99[_0x2d0d70(0xea)],_0x1bfe65=_0x474fe8['node'][_0x2d0d70(0x146)],_0x474fe8[_0x2d0d70(0xa1)][_0x2d0d70(0x146)]=_0x45f574,_0x11758f['_treeNodePropertiesBeforeFullValue'](_0x45f574,_0x474fe8);}try{_0x163809[_0x11b046(0xc8)]++,_0x163809[_0x11b046(0x124)]&&_0x163809['autoExpandPreviousObjects']['push'](_0x2db60d);var _0x46e79c,_0x5b6af3,_0x4f4476,_0x4696b6,_0x268691=[],_0x5a0af2=[],_0x34f775,_0x58a139=this[_0x11b046(0xbc)](_0x2db60d),_0x4246d6=_0x58a139==='array',_0x36079c=!0x1,_0x183648=_0x58a139==='function',_0x520036=this[_0x11b046(0x105)](_0x58a139),_0x2a2a26=this[_0x11b046(0x9d)](_0x58a139),_0x6a2864=_0x520036||_0x2a2a26,_0x42f259={},_0x1d3bd8=0x0,_0x515978=!0x1,_0x1bfe65,_0x487006=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x163809[_0x11b046(0xc1)]){if(_0x4246d6){if(_0x5b6af3=_0x2db60d['length'],_0x5b6af3>_0x163809['elements']){for(_0x4f4476=0x0,_0x4696b6=_0x163809[_0x11b046(0x168)],_0x46e79c=_0x4f4476;_0x46e79c<_0x4696b6;_0x46e79c++)_0x5a0af2[_0x11b046(0xff)](_0x11758f[_0x11b046(0xac)](_0x268691,_0x2db60d,_0x58a139,_0x46e79c,_0x163809));_0x52e9c4['cappedElements']=!0x0;}else{for(_0x4f4476=0x0,_0x4696b6=_0x5b6af3,_0x46e79c=_0x4f4476;_0x46e79c<_0x4696b6;_0x46e79c++)_0x5a0af2[_0x11b046(0xff)](_0x11758f[_0x11b046(0xac)](_0x268691,_0x2db60d,_0x58a139,_0x46e79c,_0x163809));}_0x163809[_0x11b046(0xa7)]+=_0x5a0af2[_0x11b046(0x131)];}if(!(_0x58a139===_0x11b046(0xd2)||_0x58a139===_0x11b046(0xb2))&&!_0x520036&&_0x58a139!==_0x11b046(0xc6)&&_0x58a139!==_0x11b046(0x161)&&_0x58a139!==_0x11b046(0x9e)){var _0x3ff810=_0x1d3865['props']||_0x163809[_0x11b046(0x11e)];if(this[_0x11b046(0x107)](_0x2db60d)?(_0x46e79c=0x0,_0x2db60d[_0x11b046(0x16a)](function(_0x22909b){var _0x52a991=_0x11b046;if(_0x1d3bd8++,_0x163809[_0x52a991(0xa7)]++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;return;}if(!_0x163809[_0x52a991(0xa6)]&&_0x163809[_0x52a991(0x124)]&&_0x163809[_0x52a991(0xa7)]>_0x163809['autoExpandLimit']){_0x515978=!0x0;return;}_0x5a0af2[_0x52a991(0xff)](_0x11758f[_0x52a991(0xac)](_0x268691,_0x2db60d,_0x52a991(0x8b),_0x46e79c++,_0x163809,function(_0x8583d9){return function(){return _0x8583d9;};}(_0x22909b)));})):this[_0x11b046(0x99)](_0x2db60d)&&_0x2db60d[_0x11b046(0x16a)](function(_0x204d86,_0xf4a962){var _0x14424f=_0x11b046;if(_0x1d3bd8++,_0x163809[_0x14424f(0xa7)]++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;return;}if(!_0x163809[_0x14424f(0xa6)]&&_0x163809[_0x14424f(0x124)]&&_0x163809['autoExpandPropertyCount']>_0x163809[_0x14424f(0xec)]){_0x515978=!0x0;return;}var _0xa64fd8=_0xf4a962['toString']();_0xa64fd8[_0x14424f(0x131)]>0x64&&(_0xa64fd8=_0xa64fd8[_0x14424f(0x94)](0x0,0x64)+_0x14424f(0xee)),_0x5a0af2[_0x14424f(0xff)](_0x11758f[_0x14424f(0xac)](_0x268691,_0x2db60d,_0x14424f(0x14c),_0xa64fd8,_0x163809,function(_0xbe6483){return function(){return _0xbe6483;};}(_0x204d86)));}),!_0x36079c){try{for(_0x34f775 in _0x2db60d)if(!(_0x4246d6&&_0x487006['test'](_0x34f775))&&!this[_0x11b046(0x13d)](_0x2db60d,_0x34f775,_0x163809)){if(_0x1d3bd8++,_0x163809['autoExpandPropertyCount']++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;break;}if(!_0x163809[_0x11b046(0xa6)]&&_0x163809[_0x11b046(0x124)]&&_0x163809[_0x11b046(0xa7)]>_0x163809[_0x11b046(0xec)]){_0x515978=!0x0;break;}_0x5a0af2['push'](_0x11758f['_addObjectProperty'](_0x268691,_0x42f259,_0x2db60d,_0x58a139,_0x34f775,_0x163809));}}catch{}if(_0x42f259[_0x11b046(0xb1)]=!0x0,_0x183648&&(_0x42f259['_p_name']=!0x0),!_0x515978){var _0x4be1af=[][_0x11b046(0x150)](this['_getOwnPropertyNames'](_0x2db60d))['concat'](this[_0x11b046(0x144)](_0x2db60d));for(_0x46e79c=0x0,_0x5b6af3=_0x4be1af[_0x11b046(0x131)];_0x46e79c<_0x5b6af3;_0x46e79c++)if(_0x34f775=_0x4be1af[_0x46e79c],!(_0x4246d6&&_0x487006[_0x11b046(0x8c)](_0x34f775[_0x11b046(0xf4)]()))&&!this[_0x11b046(0x13d)](_0x2db60d,_0x34f775,_0x163809)&&!_0x42f259['_p_'+_0x34f775[_0x11b046(0xf4)]()]){if(_0x1d3bd8++,_0x163809[_0x11b046(0xa7)]++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;break;}if(!_0x163809[_0x11b046(0xa6)]&&_0x163809[_0x11b046(0x124)]&&_0x163809[_0x11b046(0xa7)]>_0x163809[_0x11b046(0xec)]){_0x515978=!0x0;break;}_0x5a0af2[_0x11b046(0xff)](_0x11758f[_0x11b046(0x85)](_0x268691,_0x42f259,_0x2db60d,_0x58a139,_0x34f775,_0x163809));}}}}}if(_0x52e9c4[_0x11b046(0x9b)]=_0x58a139,_0x6a2864?(_0x52e9c4[_0x11b046(0xf0)]=_0x2db60d[_0x11b046(0xa2)](),this['_capIfString'](_0x58a139,_0x52e9c4,_0x163809,_0x1d3865)):_0x58a139===_0x11b046(0x87)?_0x52e9c4[_0x11b046(0xf0)]=this['_dateToString']['call'](_0x2db60d):_0x58a139===_0x11b046(0x9e)?_0x52e9c4[_0x11b046(0xf0)]=_0x2db60d[_0x11b046(0xf4)]():_0x58a139===_0x11b046(0x162)?_0x52e9c4[_0x11b046(0xf0)]=this[_0x11b046(0x110)]['call'](_0x2db60d):_0x58a139==='symbol'&&this[_0x11b046(0x13b)]?_0x52e9c4[_0x11b046(0xf0)]=this[_0x11b046(0x13b)][_0x11b046(0x11b)][_0x11b046(0xf4)][_0x11b046(0x171)](_0x2db60d):!_0x163809[_0x11b046(0xc1)]&&!(_0x58a139==='null'||_0x58a139===_0x11b046(0xb2))&&(delete _0x52e9c4[_0x11b046(0xf0)],_0x52e9c4[_0x11b046(0x126)]=!0x0),_0x515978&&(_0x52e9c4[_0x11b046(0x83)]=!0x0),_0x1bfe65=_0x163809[_0x11b046(0xa1)][_0x11b046(0x146)],_0x163809['node'][_0x11b046(0x146)]=_0x52e9c4,this[_0x11b046(0xb4)](_0x52e9c4,_0x163809),_0x5a0af2[_0x11b046(0x131)]){for(_0x46e79c=0x0,_0x5b6af3=_0x5a0af2[_0x11b046(0x131)];_0x46e79c<_0x5b6af3;_0x46e79c++)_0x5a0af2[_0x46e79c](_0x46e79c);}_0x268691[_0x11b046(0x131)]&&(_0x52e9c4[_0x11b046(0x11e)]=_0x268691);}catch(_0xdc9086){_0x553782(_0xdc9086,_0x52e9c4,_0x163809);}return this['_additionalMetadata'](_0x2db60d,_0x52e9c4),this[_0x11b046(0x16b)](_0x52e9c4,_0x163809),_0x163809[_0x11b046(0xa1)][_0x11b046(0x146)]=_0x1bfe65,_0x163809['level']--,_0x163809[_0x11b046(0x124)]=_0x533f43,_0x163809[_0x11b046(0x124)]&&_0x163809['autoExpandPreviousObjects'][_0x11b046(0x95)](),_0x52e9c4;}[_0xeba5ae(0x144)](_0x2a4a55){var _0x874c11=_0xeba5ae;return Object[_0x874c11(0xc0)]?Object[_0x874c11(0xc0)](_0x2a4a55):[];}[_0xeba5ae(0x107)](_0x24433b){var _0x23b49d=_0xeba5ae;return!!(_0x24433b&&_0x1cc08b[_0x23b49d(0x8b)]&&this[_0x23b49d(0x115)](_0x24433b)==='[object\\x20Set]'&&_0x24433b[_0x23b49d(0x16a)]);}[_0xeba5ae(0x13d)](_0x137e25,_0x87508b,_0x521459){return _0x521459['noFunctions']?typeof _0x137e25[_0x87508b]=='function':!0x1;}[_0xeba5ae(0xbc)](_0x26fed2){var _0x40a499=_0xeba5ae,_0xafe7f9='';return _0xafe7f9=typeof _0x26fed2,_0xafe7f9===_0x40a499(0x13f)?this[_0x40a499(0x115)](_0x26fed2)===_0x40a499(0xc5)?_0xafe7f9=_0x40a499(0x116):this['_objectToString'](_0x26fed2)===_0x40a499(0x86)?_0xafe7f9=_0x40a499(0x87):this[_0x40a499(0x115)](_0x26fed2)===_0x40a499(0x9c)?_0xafe7f9=_0x40a499(0x9e):_0x26fed2===null?_0xafe7f9='null':_0x26fed2[_0x40a499(0x139)]&&(_0xafe7f9=_0x26fed2[_0x40a499(0x139)][_0x40a499(0x122)]||_0xafe7f9):_0xafe7f9===_0x40a499(0xb2)&&this['_HTMLAllCollection']&&_0x26fed2 instanceof this[_0x40a499(0xfb)]&&(_0xafe7f9='HTMLAllCollection'),_0xafe7f9;}[_0xeba5ae(0x115)](_0x569915){var _0x9ae7ea=_0xeba5ae;return Object[_0x9ae7ea(0x11b)][_0x9ae7ea(0xf4)][_0x9ae7ea(0x171)](_0x569915);}['_isPrimitiveType'](_0x5332f0){var _0x4fd674=_0xeba5ae;return _0x5332f0===_0x4fd674(0x165)||_0x5332f0===_0x4fd674(0x11a)||_0x5332f0===_0x4fd674(0xa3);}[_0xeba5ae(0x9d)](_0x5d583c){var _0x2ed699=_0xeba5ae;return _0x5d583c===_0x2ed699(0x13c)||_0x5d583c==='String'||_0x5d583c===_0x2ed699(0x10d);}[_0xeba5ae(0xac)](_0x23869e,_0x5e0b24,_0x18ce69,_0x14d228,_0x1e1416,_0x437436){var _0x2b1fd3=this;return function(_0x1d221a){var _0x57e586=_0xb830,_0x5292b4=_0x1e1416[_0x57e586(0xa1)]['current'],_0x1ff91d=_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x158)],_0x2800d7=_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x16d)];_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x16d)]=_0x5292b4,_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x158)]=typeof _0x14d228==_0x57e586(0xa3)?_0x14d228:_0x1d221a,_0x23869e['push'](_0x2b1fd3[_0x57e586(0x113)](_0x5e0b24,_0x18ce69,_0x14d228,_0x1e1416,_0x437436)),_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x16d)]=_0x2800d7,_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x158)]=_0x1ff91d;};}['_addObjectProperty'](_0xb040af,_0xefd771,_0x2da156,_0x124727,_0x42618e,_0x9fa9d6,_0x4ce1cb){var _0x14cd22=_0xeba5ae,_0xd4ffc8=this;return _0xefd771[_0x14cd22(0xfd)+_0x42618e['toString']()]=!0x0,function(_0x355c24){var _0x18bd77=_0x14cd22,_0x2d45bc=_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x146)],_0x4817ef=_0x9fa9d6['node'][_0x18bd77(0x158)],_0x176974=_0x9fa9d6['node'][_0x18bd77(0x16d)];_0x9fa9d6[_0x18bd77(0xa1)]['parent']=_0x2d45bc,_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x158)]=_0x355c24,_0xb040af[_0x18bd77(0xff)](_0xd4ffc8[_0x18bd77(0x113)](_0x2da156,_0x124727,_0x42618e,_0x9fa9d6,_0x4ce1cb)),_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x16d)]=_0x176974,_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x158)]=_0x4817ef;};}[_0xeba5ae(0x113)](_0x988cca,_0x5decdb,_0x1747c2,_0x305e2e,_0x559d0a){var _0x315945=_0xeba5ae,_0x267001=this;_0x559d0a||(_0x559d0a=function(_0x50817c,_0x78f975){return _0x50817c[_0x78f975];});var _0x6b784e=_0x1747c2[_0x315945(0xf4)](),_0x56413a=_0x305e2e['expressionsToEvaluate']||{},_0x21c4e5=_0x305e2e['depth'],_0x447698=_0x305e2e['isExpressionToEvaluate'];try{var _0x50f1c8=this[_0x315945(0x99)](_0x988cca),_0x5b03d3=_0x6b784e;_0x50f1c8&&_0x5b03d3[0x0]==='\\x27'&&(_0x5b03d3=_0x5b03d3[_0x315945(0x16e)](0x1,_0x5b03d3[_0x315945(0x131)]-0x2));var _0x24b859=_0x305e2e[_0x315945(0xaf)]=_0x56413a[_0x315945(0xfd)+_0x5b03d3];_0x24b859&&(_0x305e2e['depth']=_0x305e2e[_0x315945(0xc1)]+0x1),_0x305e2e[_0x315945(0xa6)]=!!_0x24b859;var _0x57685f=typeof _0x1747c2==_0x315945(0xed),_0x4ec724={'name':_0x57685f||_0x50f1c8?_0x6b784e:this[_0x315945(0x8d)](_0x6b784e)};if(_0x57685f&&(_0x4ec724[_0x315945(0xed)]=!0x0),!(_0x5decdb===_0x315945(0x116)||_0x5decdb===_0x315945(0x89))){var _0xc6f266=this[_0x315945(0x132)](_0x988cca,_0x1747c2);if(_0xc6f266&&(_0xc6f266['set']&&(_0x4ec724[_0x315945(0x152)]=!0x0),_0xc6f266['get']&&!_0x24b859&&!_0x305e2e[_0x315945(0xfe)]))return _0x4ec724[_0x315945(0xeb)]=!0x0,this['_processTreeNodeResult'](_0x4ec724,_0x305e2e),_0x4ec724;}var _0x3a93d0;try{_0x3a93d0=_0x559d0a(_0x988cca,_0x1747c2);}catch(_0x3aa278){return _0x4ec724={'name':_0x6b784e,'type':_0x315945(0x10a),'error':_0x3aa278[_0x315945(0xea)]},this[_0x315945(0x102)](_0x4ec724,_0x305e2e),_0x4ec724;}var _0x5f450f=this[_0x315945(0xbc)](_0x3a93d0),_0x3cf548=this['_isPrimitiveType'](_0x5f450f);if(_0x4ec724[_0x315945(0x9b)]=_0x5f450f,_0x3cf548)this[_0x315945(0x102)](_0x4ec724,_0x305e2e,_0x3a93d0,function(){var _0x450f09=_0x315945;_0x4ec724[_0x450f09(0xf0)]=_0x3a93d0[_0x450f09(0xa2)](),!_0x24b859&&_0x267001[_0x450f09(0x169)](_0x5f450f,_0x4ec724,_0x305e2e,{});});else{var _0x413e76=_0x305e2e[_0x315945(0x124)]&&_0x305e2e[_0x315945(0xc8)]<_0x305e2e[_0x315945(0x104)]&&_0x305e2e[_0x315945(0xd1)][_0x315945(0xb8)](_0x3a93d0)<0x0&&_0x5f450f!==_0x315945(0x11c)&&_0x305e2e[_0x315945(0xa7)]<_0x305e2e[_0x315945(0xec)];_0x413e76||_0x305e2e[_0x315945(0xc8)]<_0x21c4e5||_0x24b859?(this[_0x315945(0xb3)](_0x4ec724,_0x3a93d0,_0x305e2e,_0x24b859||{}),this[_0x315945(0xa0)](_0x3a93d0,_0x4ec724)):this[_0x315945(0x102)](_0x4ec724,_0x305e2e,_0x3a93d0,function(){var _0x5bc30f=_0x315945;_0x5f450f===_0x5bc30f(0xd2)||_0x5f450f===_0x5bc30f(0xb2)||(delete _0x4ec724[_0x5bc30f(0xf0)],_0x4ec724[_0x5bc30f(0x126)]=!0x0);});}return _0x4ec724;}finally{_0x305e2e['expressionsToEvaluate']=_0x56413a,_0x305e2e[_0x315945(0xc1)]=_0x21c4e5,_0x305e2e['isExpressionToEvaluate']=_0x447698;}}[_0xeba5ae(0x169)](_0x158312,_0x52fa59,_0x12c82b,_0x289c16){var _0x12aa02=_0xeba5ae,_0x36a98f=_0x289c16[_0x12aa02(0xe1)]||_0x12c82b['strLength'];if((_0x158312===_0x12aa02(0x11a)||_0x158312===_0x12aa02(0xc6))&&_0x52fa59['value']){let _0x4a6342=_0x52fa59[_0x12aa02(0xf0)]['length'];_0x12c82b[_0x12aa02(0xcc)]+=_0x4a6342,_0x12c82b[_0x12aa02(0xcc)]>_0x12c82b[_0x12aa02(0x12d)]?(_0x52fa59['capped']='',delete _0x52fa59['value']):_0x4a6342>_0x36a98f&&(_0x52fa59[_0x12aa02(0x126)]=_0x52fa59['value']['substr'](0x0,_0x36a98f),delete _0x52fa59[_0x12aa02(0xf0)]);}}['_isMap'](_0x5be373){var _0x3ba1c6=_0xeba5ae;return!!(_0x5be373&&_0x1cc08b[_0x3ba1c6(0x14c)]&&this[_0x3ba1c6(0x115)](_0x5be373)===_0x3ba1c6(0xb6)&&_0x5be373[_0x3ba1c6(0x16a)]);}[_0xeba5ae(0x8d)](_0xc4ce1c){var _0x2962e7=_0xeba5ae;if(_0xc4ce1c['match'](/^\\d+$/))return _0xc4ce1c;var _0x4392b5;try{_0x4392b5=JSON[_0x2962e7(0x140)](''+_0xc4ce1c);}catch{_0x4392b5='\\x22'+this[_0x2962e7(0x115)](_0xc4ce1c)+'\\x22';}return _0x4392b5['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x4392b5=_0x4392b5[_0x2962e7(0x16e)](0x1,_0x4392b5[_0x2962e7(0x131)]-0x2):_0x4392b5=_0x4392b5[_0x2962e7(0xe7)](/'/g,'\\x5c\\x27')[_0x2962e7(0xe7)](/\\\\"/g,'\\x22')[_0x2962e7(0xe7)](/(^"|"$)/g,'\\x27'),_0x4392b5;}[_0xeba5ae(0x102)](_0x26ebd8,_0x2b13b8,_0xe06eaa,_0x3c24ec){var _0x3742a8=_0xeba5ae;this[_0x3742a8(0xb4)](_0x26ebd8,_0x2b13b8),_0x3c24ec&&_0x3c24ec(),this[_0x3742a8(0xa0)](_0xe06eaa,_0x26ebd8),this[_0x3742a8(0x16b)](_0x26ebd8,_0x2b13b8);}['_treeNodePropertiesBeforeFullValue'](_0x5ae563,_0x571899){var _0x2cdb1b=_0xeba5ae;this[_0x2cdb1b(0xe8)](_0x5ae563,_0x571899),this['_setNodeQueryPath'](_0x5ae563,_0x571899),this[_0x2cdb1b(0x15c)](_0x5ae563,_0x571899),this[_0x2cdb1b(0x127)](_0x5ae563,_0x571899);}['_setNodeId'](_0x51436c,_0x5fcb4d){}[_0xeba5ae(0xe2)](_0x1972c1,_0x4ca0bc){}['_setNodeLabel'](_0x8aa837,_0x189dbb){}[_0xeba5ae(0xbd)](_0x516a56){return _0x516a56===this['_undefined'];}[_0xeba5ae(0x16b)](_0x591e56,_0x1f455e){var _0x1b05c6=_0xeba5ae;this[_0x1b05c6(0x15b)](_0x591e56,_0x1f455e),this[_0x1b05c6(0x148)](_0x591e56),_0x1f455e[_0x1b05c6(0x135)]&&this[_0x1b05c6(0x8e)](_0x591e56),this[_0x1b05c6(0x156)](_0x591e56,_0x1f455e),this['_addLoadNode'](_0x591e56,_0x1f455e),this[_0x1b05c6(0xf3)](_0x591e56);}['_additionalMetadata'](_0x5c2370,_0x1cbfde){var _0x461d28=_0xeba5ae;let _0x3b8641;try{_0x1cc08b[_0x461d28(0x88)]&&(_0x3b8641=_0x1cc08b[_0x461d28(0x88)][_0x461d28(0x12b)],_0x1cc08b['console'][_0x461d28(0x12b)]=function(){}),_0x5c2370&&typeof _0x5c2370[_0x461d28(0x131)]==_0x461d28(0xa3)&&(_0x1cbfde[_0x461d28(0x131)]=_0x5c2370['length']);}catch{}finally{_0x3b8641&&(_0x1cc08b['console'][_0x461d28(0x12b)]=_0x3b8641);}if(_0x1cbfde['type']===_0x461d28(0xa3)||_0x1cbfde[_0x461d28(0x9b)]===_0x461d28(0x10d)){if(isNaN(_0x1cbfde[_0x461d28(0xf0)]))_0x1cbfde[_0x461d28(0xdb)]=!0x0,delete _0x1cbfde[_0x461d28(0xf0)];else switch(_0x1cbfde[_0x461d28(0xf0)]){case Number[_0x461d28(0x15e)]:_0x1cbfde[_0x461d28(0xd8)]=!0x0,delete _0x1cbfde[_0x461d28(0xf0)];break;case Number[_0x461d28(0x151)]:_0x1cbfde[_0x461d28(0x92)]=!0x0,delete _0x1cbfde[_0x461d28(0xf0)];break;case 0x0:this[_0x461d28(0x111)](_0x1cbfde[_0x461d28(0xf0)])&&(_0x1cbfde[_0x461d28(0x14e)]=!0x0);break;}}else _0x1cbfde[_0x461d28(0x9b)]==='function'&&typeof _0x5c2370[_0x461d28(0x122)]==_0x461d28(0x11a)&&_0x5c2370['name']&&_0x1cbfde[_0x461d28(0x122)]&&_0x5c2370['name']!==_0x1cbfde['name']&&(_0x1cbfde[_0x461d28(0xf5)]=_0x5c2370[_0x461d28(0x122)]);}[_0xeba5ae(0x111)](_0x112127){var _0x57acac=_0xeba5ae;return 0x1/_0x112127===Number[_0x57acac(0x151)];}['_sortProps'](_0x3dc922){var _0x15369a=_0xeba5ae;!_0x3dc922['props']||!_0x3dc922[_0x15369a(0x11e)][_0x15369a(0x131)]||_0x3dc922['type']===_0x15369a(0x116)||_0x3dc922[_0x15369a(0x9b)]===_0x15369a(0x14c)||_0x3dc922[_0x15369a(0x9b)]===_0x15369a(0x8b)||_0x3dc922[_0x15369a(0x11e)][_0x15369a(0xf2)](function(_0x5b9559,_0x11da09){var _0x5af4d8=_0x5b9559['name']['toLowerCase'](),_0x9acbc1=_0x11da09['name']['toLowerCase']();return _0x5af4d8<_0x9acbc1?-0x1:_0x5af4d8>_0x9acbc1?0x1:0x0;});}[_0xeba5ae(0x156)](_0x21b8f6,_0x53f602){var _0x15ce53=_0xeba5ae;if(!(_0x53f602['noFunctions']||!_0x21b8f6[_0x15ce53(0x11e)]||!_0x21b8f6[_0x15ce53(0x11e)][_0x15ce53(0x131)])){for(var _0x3a5023=[],_0x2e6d60=[],_0x18f154=0x0,_0x39d54e=_0x21b8f6[_0x15ce53(0x11e)][_0x15ce53(0x131)];_0x18f154<_0x39d54e;_0x18f154++){var _0x276061=_0x21b8f6[_0x15ce53(0x11e)][_0x18f154];_0x276061['type']===_0x15ce53(0x11c)?_0x3a5023[_0x15ce53(0xff)](_0x276061):_0x2e6d60[_0x15ce53(0xff)](_0x276061);}if(!(!_0x2e6d60[_0x15ce53(0x131)]||_0x3a5023[_0x15ce53(0x131)]<=0x1)){_0x21b8f6[_0x15ce53(0x11e)]=_0x2e6d60;var _0x4ee7a9={'functionsNode':!0x0,'props':_0x3a5023};this[_0x15ce53(0xe8)](_0x4ee7a9,_0x53f602),this[_0x15ce53(0x15b)](_0x4ee7a9,_0x53f602),this[_0x15ce53(0x148)](_0x4ee7a9),this['_setNodePermissions'](_0x4ee7a9,_0x53f602),_0x4ee7a9['id']+='\\x20f',_0x21b8f6[_0x15ce53(0x11e)][_0x15ce53(0xfa)](_0x4ee7a9);}}}[_0xeba5ae(0x98)](_0x49615f,_0x3b5c15){}[_0xeba5ae(0x148)](_0x256a3b){}['_isArray'](_0x41a15a){var _0x264703=_0xeba5ae;return Array[_0x264703(0x97)](_0x41a15a)||typeof _0x41a15a==_0x264703(0x13f)&&this[_0x264703(0x115)](_0x41a15a)===_0x264703(0xc5);}['_setNodePermissions'](_0x294134,_0x4d88f1){}[_0xeba5ae(0xf3)](_0x20a039){var _0xcf5353=_0xeba5ae;delete _0x20a039[_0xcf5353(0xaa)],delete _0x20a039[_0xcf5353(0x119)],delete _0x20a039[_0xcf5353(0x14a)];}[_0xeba5ae(0x15c)](_0x22e503,_0xb96da4){}}let _0xba5153=new _0x1d60d8(),_0x49b01f={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x2febb7={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2fa7e8(_0x2fce41,_0xaac901,_0x3c7ef5,_0x365d83,_0x2b4f70,_0x2e0abc){var _0x5eb761=_0xeba5ae;let _0x3371d2,_0x3176de;try{_0x3176de=_0x38efec(),_0x3371d2=_0x3730c0[_0xaac901],!_0x3371d2||_0x3176de-_0x3371d2['ts']>0x1f4&&_0x3371d2[_0x5eb761(0xf9)]&&_0x3371d2[_0x5eb761(0x93)]/_0x3371d2[_0x5eb761(0xf9)]<0x64?(_0x3730c0[_0xaac901]=_0x3371d2={'count':0x0,'time':0x0,'ts':_0x3176de},_0x3730c0[_0x5eb761(0x167)]={}):_0x3176de-_0x3730c0[_0x5eb761(0x167)]['ts']>0x32&&_0x3730c0['hits']['count']&&_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0x93)]/_0x3730c0['hits'][_0x5eb761(0xf9)]<0x64&&(_0x3730c0['hits']={});let _0xd1cda2=[],_0x416cc7=_0x3371d2[_0x5eb761(0xc3)]||_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0xc3)]?_0x2febb7:_0x49b01f,_0x581d20=_0x1ee84d=>{var _0x4b98bd=_0x5eb761;let _0x50800f={};return _0x50800f[_0x4b98bd(0x11e)]=_0x1ee84d['props'],_0x50800f['elements']=_0x1ee84d[_0x4b98bd(0x168)],_0x50800f[_0x4b98bd(0xe1)]=_0x1ee84d[_0x4b98bd(0xe1)],_0x50800f[_0x4b98bd(0x12d)]=_0x1ee84d[_0x4b98bd(0x12d)],_0x50800f['autoExpandLimit']=_0x1ee84d['autoExpandLimit'],_0x50800f[_0x4b98bd(0x104)]=_0x1ee84d['autoExpandMaxDepth'],_0x50800f[_0x4b98bd(0x135)]=!0x1,_0x50800f[_0x4b98bd(0x101)]=!_0x13ad5e,_0x50800f[_0x4b98bd(0xc1)]=0x1,_0x50800f[_0x4b98bd(0xc8)]=0x0,_0x50800f[_0x4b98bd(0xc9)]='root_exp_id',_0x50800f[_0x4b98bd(0x12f)]=_0x4b98bd(0xcf),_0x50800f[_0x4b98bd(0x124)]=!0x0,_0x50800f['autoExpandPreviousObjects']=[],_0x50800f[_0x4b98bd(0xa7)]=0x0,_0x50800f[_0x4b98bd(0xfe)]=!0x0,_0x50800f[_0x4b98bd(0xcc)]=0x0,_0x50800f[_0x4b98bd(0xa1)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x50800f;};for(var _0x5276bc=0x0;_0x5276bc<_0x2b4f70[_0x5eb761(0x131)];_0x5276bc++)_0xd1cda2[_0x5eb761(0xff)](_0xba5153[_0x5eb761(0xb3)]({'timeNode':_0x2fce41==='time'||void 0x0},_0x2b4f70[_0x5276bc],_0x581d20(_0x416cc7),{}));if(_0x2fce41===_0x5eb761(0x164)){let _0x54225b=Error[_0x5eb761(0xb9)];try{Error[_0x5eb761(0xb9)]=0x1/0x0,_0xd1cda2[_0x5eb761(0xff)](_0xba5153[_0x5eb761(0xb3)]({'stackNode':!0x0},new Error()[_0x5eb761(0x129)],_0x581d20(_0x416cc7),{'strLength':0x1/0x0}));}finally{Error[_0x5eb761(0xb9)]=_0x54225b;}}return{'method':'log','version':_0x5d91f4,'args':[{'ts':_0x3c7ef5,'session':_0x365d83,'args':_0xd1cda2,'id':_0xaac901,'context':_0x2e0abc}]};}catch(_0xc1d67d){return{'method':'log','version':_0x5d91f4,'args':[{'ts':_0x3c7ef5,'session':_0x365d83,'args':[{'type':_0x5eb761(0x10a),'error':_0xc1d67d&&_0xc1d67d[_0x5eb761(0xea)]}],'id':_0xaac901,'context':_0x2e0abc}]};}finally{try{if(_0x3371d2&&_0x3176de){let _0x39ee54=_0x38efec();_0x3371d2['count']++,_0x3371d2[_0x5eb761(0x93)]+=_0x435479(_0x3176de,_0x39ee54),_0x3371d2['ts']=_0x39ee54,_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0xf9)]++,_0x3730c0['hits'][_0x5eb761(0x93)]+=_0x435479(_0x3176de,_0x39ee54),_0x3730c0[_0x5eb761(0x167)]['ts']=_0x39ee54,(_0x3371d2['count']>0x32||_0x3371d2[_0x5eb761(0x93)]>0x64)&&(_0x3371d2[_0x5eb761(0xc3)]=!0x0),(_0x3730c0[_0x5eb761(0x167)]['count']>0x3e8||_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0x93)]>0x12c)&&(_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0xc3)]=!0x0);}}catch{}}}return _0x2fa7e8;}((_0x27a3b3,_0xccbd46,_0x42f2ff,_0x39ddc6,_0x374a56,_0x3ab083,_0x3ea20e,_0x17295e,_0x1b42b2,_0x1513ca)=>{var _0x6d0d70=_0x1097a9;if(_0x27a3b3['_console_ninja'])return _0x27a3b3[_0x6d0d70(0xe4)];if(!J(_0x27a3b3,_0x17295e,_0x374a56))return _0x27a3b3[_0x6d0d70(0xe4)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x27a3b3[_0x6d0d70(0xe4)];let _0x453fe2=W(_0x27a3b3),_0x361a3a=_0x453fe2[_0x6d0d70(0xf6)],_0x6dc794=_0x453fe2['timeStamp'],_0x14408b=_0x453fe2['now'],_0x50d901={'hits':{},'ts':{}},_0x410bf7=Y(_0x27a3b3,_0x1b42b2,_0x50d901,_0x3ab083),_0x3e06df=_0x225a26=>{_0x50d901['ts'][_0x225a26]=_0x6dc794();},_0x3469f7=(_0x5cf307,_0xf31b99)=>{var _0x5e8fc5=_0x6d0d70;let _0x4503fc=_0x50d901['ts'][_0xf31b99];if(delete _0x50d901['ts'][_0xf31b99],_0x4503fc){let _0x1c4b4e=_0x361a3a(_0x4503fc,_0x6dc794());_0x48bd74(_0x410bf7(_0x5e8fc5(0x93),_0x5cf307,_0x14408b(),_0x553e4d,[_0x1c4b4e],_0xf31b99));}},_0x23a3ed=_0x5ec5c7=>_0x2625b7=>{var _0x91e8f4=_0x6d0d70;try{_0x3e06df(_0x2625b7),_0x5ec5c7(_0x2625b7);}finally{_0x27a3b3[_0x91e8f4(0x88)][_0x91e8f4(0x93)]=_0x5ec5c7;}},_0x28e17a=_0x390625=>_0x325330=>{var _0x543e26=_0x6d0d70;try{let [_0x34e18b,_0x2cf90b]=_0x325330[_0x543e26(0x10b)](_0x543e26(0xe6));_0x3469f7(_0x2cf90b,_0x34e18b),_0x390625(_0x34e18b);}finally{_0x27a3b3[_0x543e26(0x88)][_0x543e26(0xba)]=_0x390625;}};_0x27a3b3[_0x6d0d70(0xe4)]={'consoleLog':(_0x8c65fe,_0x25f248)=>{var _0x445365=_0x6d0d70;_0x27a3b3[_0x445365(0x88)][_0x445365(0xae)][_0x445365(0x122)]!==_0x445365(0x163)&&_0x48bd74(_0x410bf7(_0x445365(0xae),_0x8c65fe,_0x14408b(),_0x553e4d,_0x25f248));},'consoleTrace':(_0x4081b6,_0x198032)=>{var _0x3c28a1=_0x6d0d70;_0x27a3b3[_0x3c28a1(0x88)][_0x3c28a1(0xae)][_0x3c28a1(0x122)]!=='disabledTrace'&&_0x48bd74(_0x410bf7(_0x3c28a1(0x164),_0x4081b6,_0x14408b(),_0x553e4d,_0x198032));},'consoleTime':()=>{var _0x4837f8=_0x6d0d70;_0x27a3b3[_0x4837f8(0x88)]['time']=_0x23a3ed(_0x27a3b3['console'][_0x4837f8(0x93)]);},'consoleTimeEnd':()=>{var _0x8ef218=_0x6d0d70;_0x27a3b3[_0x8ef218(0x88)][_0x8ef218(0xba)]=_0x28e17a(_0x27a3b3[_0x8ef218(0x88)][_0x8ef218(0xba)]);},'autoLog':(_0x276a3d,_0x1fe4e9)=>{var _0x1b731c=_0x6d0d70;_0x48bd74(_0x410bf7(_0x1b731c(0xae),_0x1fe4e9,_0x14408b(),_0x553e4d,[_0x276a3d]));},'autoLogMany':(_0x3c7420,_0x20b118)=>{var _0x10c340=_0x6d0d70;_0x48bd74(_0x410bf7(_0x10c340(0xae),_0x3c7420,_0x14408b(),_0x553e4d,_0x20b118));},'autoTrace':(_0x27b835,_0x23af1a)=>{var _0x3ef9f4=_0x6d0d70;_0x48bd74(_0x410bf7(_0x3ef9f4(0x164),_0x23af1a,_0x14408b(),_0x553e4d,[_0x27b835]));},'autoTraceMany':(_0x407c10,_0x3cdd43)=>{var _0x38a5a0=_0x6d0d70;_0x48bd74(_0x410bf7(_0x38a5a0(0x164),_0x407c10,_0x14408b(),_0x553e4d,_0x3cdd43));},'autoTime':(_0x276ada,_0x18fb0a,_0x4a4f03)=>{_0x3e06df(_0x4a4f03);},'autoTimeEnd':(_0x523298,_0x5fd6d4,_0x1bf5d8)=>{_0x3469f7(_0x5fd6d4,_0x1bf5d8);},'coverage':_0x1a263f=>{_0x48bd74({'method':'coverage','version':_0x3ab083,'args':[{'id':_0x1a263f}]});}};let _0x48bd74=b(_0x27a3b3,_0xccbd46,_0x42f2ff,_0x39ddc6,_0x374a56,_0x1513ca),_0x553e4d=_0x27a3b3['_console_ninja_session'];return _0x27a3b3[_0x6d0d70(0xe4)];})(globalThis,_0x1097a9(0xd6),_0x1097a9(0xde),_0x1097a9(0xa5),'nuxt',_0x1097a9(0xe9),_0x1097a9(0x10e),_0x1097a9(0xf8),'',_0x1097a9(0xb5));`);
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
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x466d(){var _0x11aee3=['','[object\\x20Map]','_WebSocketClass','indexOf','stackTraceLimit','timeEnd','nodeModules','_type','_isUndefined','join','hrtime','getOwnPropertySymbols','depth','astro','reduceLimits','111408sfzkxN','[object\\x20Array]','String','hostname','level','expId','_allowedToConnectOnSend','getPrototypeOf','allStrLength','getOwnPropertyNames','defineProperty','root_exp','host','autoExpandPreviousObjects','null','https://tinyurl.com/37x8b79t','global','method','127.0.0.1','_getOwnPropertyNames','positiveInfinity','performance','88190AnCzxP','nan','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','location','32863','__es'+'Module','onclose','strLength','_setNodeQueryPath','_ws','_console_ninja','_inBrowser',':logPointId:','replace','_setNodeId','1.0.0','message','getter','autoExpandLimit','symbol','...','WebSocket','value','default','sort','_cleanNode','toString','funcName','elapsed','readyState',["localhost","127.0.0.1","example.cypress.io","sak-ubuntu","192.168.1.2"],'count','unshift','_HTMLAllCollection','NEXT_RUNTIME','_p_','resolveGetters','push','onerror','noFunctions','_processTreeNodeResult','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','autoExpandMaxDepth','_isPrimitiveType','_allowedToSend','_isSet','gateway.docker.internal','data','unknown','split','_keyStrRegExp','Number','1706781806592','getWebSocketClass','_regExpToString','_isNegativeZero','edge','_property','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_objectToString','array','getOwnPropertyDescriptor','_consoleNinjaAllowedToStart','_hasSetOnItsPath','string','prototype','function','catch','props','close','now','_console_ninja_session','name','url','autoExpand','reload','capped','_setNodePermissions','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','stack','\\x20browser','error','pathToFileURL','totalStrLength','Symbol','rootExpression','_attemptToReconnectShortly','length','_getOwnPropertyDescriptor','warn','_connectToHostNow','sortProps','port','onopen','env','constructor','unref','_Symbol','Boolean','_blacklistedProperty','30bnrOto','object','stringify','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','125TrInin','timeStamp','_getOwnPropertySymbols','_numberRegExp','current','_disposeWebsocket','_setNodeExpandableState','3239187UKFbPc','_hasMapOnItsPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','Map','versions','negativeZero','_connectAttemptCount','concat','NEGATIVE_INFINITY','setter','_socket','create','ws://','_addFunctionsNode','68096GJQmHS','index','_inNextEdge','_quotedRegExp','_setNodeLabel','_setNodeExpressionPath','132XkqITG','POSITIVE_INFINITY','_undefined','_reconnectTimeout','Buffer','RegExp','disabledLog','trace','boolean','then','hits','elements','_capIfString','forEach','_treeNodePropertiesAfterFullValue','_WebSocket','parent','substr','4166424WXfJvc','_dateToString','call','process','_maxConnectAttemptCount','cappedProps','map','_addObjectProperty','[object\\x20Date]','date','console','Error','\\x20server','Set','test','_propertyName','_sortProps','343150OHdrjk','includes','_connected','negativeInfinity','time','slice','pop','bind','isArray','_addLoadNode','_isMap','path','type','[object\\x20BigInt]','_isPrimitiveWrapperType','bigint','_connecting','_additionalMetadata','node','valueOf','number','_sendErrorMessage',"/home/sak/.vscode/extensions/wallabyjs.console-ninja-1.0.274/node_modules",'isExpressionToEvaluate','autoExpandPropertyCount','enumerable','send','_hasSymbolPropertyOnItsPath','_webSocketErrorDocsLink','_addProperty','perf_hooks','log','expressionsToEvaluate','ws/index.js','_p_length','undefined','serialize','_treeNodePropertiesBeforeFullValue'];_0x466d=function(){return _0x11aee3;};return _0x466d();}var _0x1097a9=_0xb830;(function(_0x41ce87,_0x3f724c){var _0x480637=_0xb830,_0x430d17=_0x41ce87();while(!![]){try{var _0x179903=-parseInt(_0x480637(0xda))/0x1+parseInt(_0x480637(0x8f))/0x2+-parseInt(_0x480637(0x13e))/0x3*(-parseInt(_0x480637(0x157))/0x4)+-parseInt(_0x480637(0x142))/0x5*(-parseInt(_0x480637(0x15d))/0x6)+-parseInt(_0x480637(0x149))/0x7+parseInt(_0x480637(0xc4))/0x8+parseInt(_0x480637(0x16f))/0x9;if(_0x179903===_0x3f724c)break;else _0x430d17['push'](_0x430d17['shift']());}catch(_0x156003){_0x430d17['push'](_0x430d17['shift']());}}}(_0x466d,0x41808));var j=Object[_0x1097a9(0x154)],H=Object[_0x1097a9(0xce)],G=Object[_0x1097a9(0x117)],ee=Object[_0x1097a9(0xcd)],te=Object[_0x1097a9(0xcb)],ne=Object[_0x1097a9(0x11b)]['hasOwnProperty'],re=(_0x50999f,_0x156e6e,_0x506dcc,_0x3f0921)=>{var _0x55f619=_0x1097a9;if(_0x156e6e&&typeof _0x156e6e=='object'||typeof _0x156e6e=='function'){for(let _0x352071 of ee(_0x156e6e))!ne['call'](_0x50999f,_0x352071)&&_0x352071!==_0x506dcc&&H(_0x50999f,_0x352071,{'get':()=>_0x156e6e[_0x352071],'enumerable':!(_0x3f0921=G(_0x156e6e,_0x352071))||_0x3f0921[_0x55f619(0xa8)]});}return _0x50999f;},x=(_0x57d8e5,_0x33682a,_0x3818fd)=>(_0x3818fd=_0x57d8e5!=null?j(te(_0x57d8e5)):{},re(_0x33682a||!_0x57d8e5||!_0x57d8e5[_0x1097a9(0xdf)]?H(_0x3818fd,_0x1097a9(0xf1),{'value':_0x57d8e5,'enumerable':!0x0}):_0x3818fd,_0x57d8e5)),X=class{constructor(_0xc5b3e8,_0x3dcc6d,_0x489c49,_0x4726ff,_0x33ee99){var _0x43f9f0=_0x1097a9;this[_0x43f9f0(0xd4)]=_0xc5b3e8,this[_0x43f9f0(0xd0)]=_0x3dcc6d,this['port']=_0x489c49,this['nodeModules']=_0x4726ff,this['dockerizedApp']=_0x33ee99,this[_0x43f9f0(0x106)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x43f9f0(0x91)]=!0x1,this[_0x43f9f0(0x9f)]=!0x1,this['_inNextEdge']=_0xc5b3e8['process']?.['env']?.[_0x43f9f0(0xfc)]===_0x43f9f0(0x112),this[_0x43f9f0(0xe5)]=!this['global'][_0x43f9f0(0x172)]?.['versions']?.['node']&&!this['_inNextEdge'],this[_0x43f9f0(0xb7)]=null,this[_0x43f9f0(0x14f)]=0x0,this[_0x43f9f0(0x173)]=0x14,this['_webSocketErrorDocsLink']=_0x43f9f0(0xd3),this[_0x43f9f0(0xa4)]=(this[_0x43f9f0(0xe5)]?_0x43f9f0(0xdc):_0x43f9f0(0x14b))+this[_0x43f9f0(0xab)];}async[_0x1097a9(0x10f)](){var _0x3f172e=_0x1097a9;if(this[_0x3f172e(0xb7)])return this[_0x3f172e(0xb7)];let _0x2f2708;if(this[_0x3f172e(0xe5)]||this[_0x3f172e(0x159)])_0x2f2708=this[_0x3f172e(0xd4)][_0x3f172e(0xef)];else{if(this[_0x3f172e(0xd4)][_0x3f172e(0x172)]?.[_0x3f172e(0x16c)])_0x2f2708=this[_0x3f172e(0xd4)]['process']?.[_0x3f172e(0x16c)];else try{let _0xbbe394=await import(_0x3f172e(0x9a));_0x2f2708=(await import((await import(_0x3f172e(0x123)))[_0x3f172e(0x12c)](_0xbbe394[_0x3f172e(0xbe)](this[_0x3f172e(0xbb)],_0x3f172e(0xb0)))[_0x3f172e(0xf4)]()))[_0x3f172e(0xf1)];}catch{try{_0x2f2708=require(require(_0x3f172e(0x9a))[_0x3f172e(0xbe)](this['nodeModules'],'ws'));}catch{throw new Error(_0x3f172e(0x141));}}}return this['_WebSocketClass']=_0x2f2708,_0x2f2708;}['_connectToHostNow'](){var _0x4912c3=_0x1097a9;this[_0x4912c3(0x9f)]||this[_0x4912c3(0x91)]||this['_connectAttemptCount']>=this[_0x4912c3(0x173)]||(this[_0x4912c3(0xca)]=!0x1,this[_0x4912c3(0x9f)]=!0x0,this[_0x4912c3(0x14f)]++,this[_0x4912c3(0xe3)]=new Promise((_0x5b2f9b,_0x152695)=>{var _0x2c9355=_0x4912c3;this[_0x2c9355(0x10f)]()[_0x2c9355(0x166)](_0x44b663=>{var _0x284ca2=_0x2c9355;let _0x2f04a8=new _0x44b663(_0x284ca2(0x155)+(!this['_inBrowser']&&this['dockerizedApp']?_0x284ca2(0x108):this[_0x284ca2(0xd0)])+':'+this[_0x284ca2(0x136)]);_0x2f04a8[_0x284ca2(0x100)]=()=>{var _0x295ee6=_0x284ca2;this[_0x295ee6(0x106)]=!0x1,this['_disposeWebsocket'](_0x2f04a8),this[_0x295ee6(0x130)](),_0x152695(new Error('logger\\x20websocket\\x20error'));},_0x2f04a8[_0x284ca2(0x137)]=()=>{var _0x1e9f77=_0x284ca2;this['_inBrowser']||_0x2f04a8[_0x1e9f77(0x153)]&&_0x2f04a8['_socket'][_0x1e9f77(0x13a)]&&_0x2f04a8[_0x1e9f77(0x153)]['unref'](),_0x5b2f9b(_0x2f04a8);},_0x2f04a8['onclose']=()=>{var _0x3ab87f=_0x284ca2;this['_allowedToConnectOnSend']=!0x0,this[_0x3ab87f(0x147)](_0x2f04a8),this[_0x3ab87f(0x130)]();},_0x2f04a8['onmessage']=_0x4d8496=>{var _0x53f340=_0x284ca2;try{_0x4d8496&&_0x4d8496[_0x53f340(0x109)]&&this['_inBrowser']&&JSON['parse'](_0x4d8496[_0x53f340(0x109)])[_0x53f340(0xd5)]===_0x53f340(0x125)&&this['global'][_0x53f340(0xdd)]['reload']();}catch{}};})[_0x2c9355(0x166)](_0x2ccf15=>(this[_0x2c9355(0x91)]=!0x0,this[_0x2c9355(0x9f)]=!0x1,this[_0x2c9355(0xca)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2c9355(0x14f)]=0x0,_0x2ccf15))['catch'](_0x451ae5=>(this['_connected']=!0x1,this['_connecting']=!0x1,console['warn'](_0x2c9355(0x128)+this['_webSocketErrorDocsLink']),_0x152695(new Error(_0x2c9355(0x103)+(_0x451ae5&&_0x451ae5[_0x2c9355(0xea)])))));}));}[_0x1097a9(0x147)](_0x2ea76f){var _0x1e62ce=_0x1097a9;this[_0x1e62ce(0x91)]=!0x1,this['_connecting']=!0x1;try{_0x2ea76f[_0x1e62ce(0xe0)]=null,_0x2ea76f[_0x1e62ce(0x100)]=null,_0x2ea76f[_0x1e62ce(0x137)]=null;}catch{}try{_0x2ea76f[_0x1e62ce(0xf7)]<0x2&&_0x2ea76f[_0x1e62ce(0x11f)]();}catch{}}[_0x1097a9(0x130)](){var _0x3769b2=_0x1097a9;clearTimeout(this[_0x3769b2(0x160)]),!(this[_0x3769b2(0x14f)]>=this[_0x3769b2(0x173)])&&(this[_0x3769b2(0x160)]=setTimeout(()=>{var _0x358df6=_0x3769b2;this[_0x358df6(0x91)]||this[_0x358df6(0x9f)]||(this[_0x358df6(0x134)](),this[_0x358df6(0xe3)]?.[_0x358df6(0x11d)](()=>this[_0x358df6(0x130)]()));},0x1f4),this[_0x3769b2(0x160)]['unref']&&this['_reconnectTimeout']['unref']());}async['send'](_0x4e24e3){var _0x142bfb=_0x1097a9;try{if(!this['_allowedToSend'])return;this[_0x142bfb(0xca)]&&this['_connectToHostNow'](),(await this[_0x142bfb(0xe3)])[_0x142bfb(0xa9)](JSON[_0x142bfb(0x140)](_0x4e24e3));}catch(_0x4183fe){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x4183fe&&_0x4183fe[_0x142bfb(0xea)])),this[_0x142bfb(0x106)]=!0x1,this[_0x142bfb(0x130)]();}}};function b(_0x4b3895,_0x2647c2,_0xea9eb5,_0x3a60db,_0x5151da,_0xb94277){var _0x59cd6f=_0x1097a9;let _0x1e57f0=_0xea9eb5[_0x59cd6f(0x10b)](',')[_0x59cd6f(0x84)](_0x11533f=>{var _0x4324c0=_0x59cd6f;try{_0x4b3895[_0x4324c0(0x121)]||((_0x5151da==='next.js'||_0x5151da==='remix'||_0x5151da===_0x4324c0(0xc2)||_0x5151da==='angular')&&(_0x5151da+=!_0x4b3895[_0x4324c0(0x172)]?.[_0x4324c0(0x14d)]?.['node']&&_0x4b3895['process']?.[_0x4324c0(0x138)]?.[_0x4324c0(0xfc)]!==_0x4324c0(0x112)?_0x4324c0(0x12a):_0x4324c0(0x8a)),_0x4b3895['_console_ninja_session']={'id':+new Date(),'tool':_0x5151da});let _0xb380e8=new X(_0x4b3895,_0x2647c2,_0x11533f,_0x3a60db,_0xb94277);return _0xb380e8[_0x4324c0(0xa9)][_0x4324c0(0x96)](_0xb380e8);}catch(_0x42b7f1){return console[_0x4324c0(0x133)](_0x4324c0(0x114),_0x42b7f1&&_0x42b7f1[_0x4324c0(0xea)]),()=>{};}});return _0x14f40f=>_0x1e57f0[_0x59cd6f(0x16a)](_0x27110f=>_0x27110f(_0x14f40f));}function W(_0x2d1833){var _0x43f749=_0x1097a9;let _0xc9a0a=function(_0x2a6d8e,_0x16cb71){return _0x16cb71-_0x2a6d8e;},_0x467056;if(_0x2d1833['performance'])_0x467056=function(){var _0x3e0a7a=_0xb830;return _0x2d1833[_0x3e0a7a(0xd9)]['now']();};else{if(_0x2d1833[_0x43f749(0x172)]&&_0x2d1833[_0x43f749(0x172)][_0x43f749(0xbf)]&&_0x2d1833[_0x43f749(0x172)]?.[_0x43f749(0x138)]?.[_0x43f749(0xfc)]!==_0x43f749(0x112))_0x467056=function(){var _0x4d4a01=_0x43f749;return _0x2d1833[_0x4d4a01(0x172)][_0x4d4a01(0xbf)]();},_0xc9a0a=function(_0x16bac1,_0x27035e){return 0x3e8*(_0x27035e[0x0]-_0x16bac1[0x0])+(_0x27035e[0x1]-_0x16bac1[0x1])/0xf4240;};else try{let {performance:_0x58e45c}=require(_0x43f749(0xad));_0x467056=function(){var _0x203e2e=_0x43f749;return _0x58e45c[_0x203e2e(0x120)]();};}catch{_0x467056=function(){return+new Date();};}}return{'elapsed':_0xc9a0a,'timeStamp':_0x467056,'now':()=>Date[_0x43f749(0x120)]()};}function J(_0x198f68,_0xd80310,_0x2e2ef1){var _0x192dab=_0x1097a9;if(_0x198f68[_0x192dab(0x118)]!==void 0x0)return _0x198f68[_0x192dab(0x118)];let _0xebe88b=_0x198f68[_0x192dab(0x172)]?.[_0x192dab(0x14d)]?.[_0x192dab(0xa1)]||_0x198f68[_0x192dab(0x172)]?.[_0x192dab(0x138)]?.['NEXT_RUNTIME']===_0x192dab(0x112);return _0xebe88b&&_0x2e2ef1==='nuxt'?_0x198f68[_0x192dab(0x118)]=!0x1:_0x198f68[_0x192dab(0x118)]=_0xebe88b||!_0xd80310||_0x198f68[_0x192dab(0xdd)]?.[_0x192dab(0xc7)]&&_0xd80310[_0x192dab(0x90)](_0x198f68['location'][_0x192dab(0xc7)]),_0x198f68[_0x192dab(0x118)];}function _0xb830(_0x1e5ae3,_0xc385c6){var _0x466d1e=_0x466d();return _0xb830=function(_0xb8301,_0x4c99da){_0xb8301=_0xb8301-0x83;var _0x5b1ed3=_0x466d1e[_0xb8301];return _0x5b1ed3;},_0xb830(_0x1e5ae3,_0xc385c6);}function Y(_0x1cc08b,_0x13ad5e,_0x3730c0,_0x5d91f4){var _0xeba5ae=_0x1097a9;_0x1cc08b=_0x1cc08b,_0x13ad5e=_0x13ad5e,_0x3730c0=_0x3730c0,_0x5d91f4=_0x5d91f4;let _0x4468d4=W(_0x1cc08b),_0x435479=_0x4468d4['elapsed'],_0x38efec=_0x4468d4[_0xeba5ae(0x143)];class _0x1d60d8{constructor(){var _0x406559=_0xeba5ae;this[_0x406559(0x10c)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x406559(0x145)]=/^(0|[1-9][0-9]*)$/,this[_0x406559(0x15a)]=/'([^\\\\']|\\\\')*'/,this[_0x406559(0x15f)]=_0x1cc08b[_0x406559(0xb2)],this[_0x406559(0xfb)]=_0x1cc08b['HTMLAllCollection'],this[_0x406559(0x132)]=Object['getOwnPropertyDescriptor'],this[_0x406559(0xd7)]=Object[_0x406559(0xcd)],this['_Symbol']=_0x1cc08b[_0x406559(0x12e)],this[_0x406559(0x110)]=RegExp[_0x406559(0x11b)][_0x406559(0xf4)],this[_0x406559(0x170)]=Date[_0x406559(0x11b)]['toString'];}[_0xeba5ae(0xb3)](_0x52e9c4,_0x2db60d,_0x163809,_0x1d3865){var _0x11b046=_0xeba5ae,_0x11758f=this,_0x533f43=_0x163809[_0x11b046(0x124)];function _0x553782(_0xa5ea99,_0x45f574,_0x474fe8){var _0x2d0d70=_0x11b046;_0x45f574[_0x2d0d70(0x9b)]=_0x2d0d70(0x10a),_0x45f574[_0x2d0d70(0x12b)]=_0xa5ea99[_0x2d0d70(0xea)],_0x1bfe65=_0x474fe8['node'][_0x2d0d70(0x146)],_0x474fe8[_0x2d0d70(0xa1)][_0x2d0d70(0x146)]=_0x45f574,_0x11758f['_treeNodePropertiesBeforeFullValue'](_0x45f574,_0x474fe8);}try{_0x163809[_0x11b046(0xc8)]++,_0x163809[_0x11b046(0x124)]&&_0x163809['autoExpandPreviousObjects']['push'](_0x2db60d);var _0x46e79c,_0x5b6af3,_0x4f4476,_0x4696b6,_0x268691=[],_0x5a0af2=[],_0x34f775,_0x58a139=this[_0x11b046(0xbc)](_0x2db60d),_0x4246d6=_0x58a139==='array',_0x36079c=!0x1,_0x183648=_0x58a139==='function',_0x520036=this[_0x11b046(0x105)](_0x58a139),_0x2a2a26=this[_0x11b046(0x9d)](_0x58a139),_0x6a2864=_0x520036||_0x2a2a26,_0x42f259={},_0x1d3bd8=0x0,_0x515978=!0x1,_0x1bfe65,_0x487006=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x163809[_0x11b046(0xc1)]){if(_0x4246d6){if(_0x5b6af3=_0x2db60d['length'],_0x5b6af3>_0x163809['elements']){for(_0x4f4476=0x0,_0x4696b6=_0x163809[_0x11b046(0x168)],_0x46e79c=_0x4f4476;_0x46e79c<_0x4696b6;_0x46e79c++)_0x5a0af2[_0x11b046(0xff)](_0x11758f[_0x11b046(0xac)](_0x268691,_0x2db60d,_0x58a139,_0x46e79c,_0x163809));_0x52e9c4['cappedElements']=!0x0;}else{for(_0x4f4476=0x0,_0x4696b6=_0x5b6af3,_0x46e79c=_0x4f4476;_0x46e79c<_0x4696b6;_0x46e79c++)_0x5a0af2[_0x11b046(0xff)](_0x11758f[_0x11b046(0xac)](_0x268691,_0x2db60d,_0x58a139,_0x46e79c,_0x163809));}_0x163809[_0x11b046(0xa7)]+=_0x5a0af2[_0x11b046(0x131)];}if(!(_0x58a139===_0x11b046(0xd2)||_0x58a139===_0x11b046(0xb2))&&!_0x520036&&_0x58a139!==_0x11b046(0xc6)&&_0x58a139!==_0x11b046(0x161)&&_0x58a139!==_0x11b046(0x9e)){var _0x3ff810=_0x1d3865['props']||_0x163809[_0x11b046(0x11e)];if(this[_0x11b046(0x107)](_0x2db60d)?(_0x46e79c=0x0,_0x2db60d[_0x11b046(0x16a)](function(_0x22909b){var _0x52a991=_0x11b046;if(_0x1d3bd8++,_0x163809[_0x52a991(0xa7)]++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;return;}if(!_0x163809[_0x52a991(0xa6)]&&_0x163809[_0x52a991(0x124)]&&_0x163809[_0x52a991(0xa7)]>_0x163809['autoExpandLimit']){_0x515978=!0x0;return;}_0x5a0af2[_0x52a991(0xff)](_0x11758f[_0x52a991(0xac)](_0x268691,_0x2db60d,_0x52a991(0x8b),_0x46e79c++,_0x163809,function(_0x8583d9){return function(){return _0x8583d9;};}(_0x22909b)));})):this[_0x11b046(0x99)](_0x2db60d)&&_0x2db60d[_0x11b046(0x16a)](function(_0x204d86,_0xf4a962){var _0x14424f=_0x11b046;if(_0x1d3bd8++,_0x163809[_0x14424f(0xa7)]++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;return;}if(!_0x163809[_0x14424f(0xa6)]&&_0x163809[_0x14424f(0x124)]&&_0x163809['autoExpandPropertyCount']>_0x163809[_0x14424f(0xec)]){_0x515978=!0x0;return;}var _0xa64fd8=_0xf4a962['toString']();_0xa64fd8[_0x14424f(0x131)]>0x64&&(_0xa64fd8=_0xa64fd8[_0x14424f(0x94)](0x0,0x64)+_0x14424f(0xee)),_0x5a0af2[_0x14424f(0xff)](_0x11758f[_0x14424f(0xac)](_0x268691,_0x2db60d,_0x14424f(0x14c),_0xa64fd8,_0x163809,function(_0xbe6483){return function(){return _0xbe6483;};}(_0x204d86)));}),!_0x36079c){try{for(_0x34f775 in _0x2db60d)if(!(_0x4246d6&&_0x487006['test'](_0x34f775))&&!this[_0x11b046(0x13d)](_0x2db60d,_0x34f775,_0x163809)){if(_0x1d3bd8++,_0x163809['autoExpandPropertyCount']++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;break;}if(!_0x163809[_0x11b046(0xa6)]&&_0x163809[_0x11b046(0x124)]&&_0x163809[_0x11b046(0xa7)]>_0x163809[_0x11b046(0xec)]){_0x515978=!0x0;break;}_0x5a0af2['push'](_0x11758f['_addObjectProperty'](_0x268691,_0x42f259,_0x2db60d,_0x58a139,_0x34f775,_0x163809));}}catch{}if(_0x42f259[_0x11b046(0xb1)]=!0x0,_0x183648&&(_0x42f259['_p_name']=!0x0),!_0x515978){var _0x4be1af=[][_0x11b046(0x150)](this['_getOwnPropertyNames'](_0x2db60d))['concat'](this[_0x11b046(0x144)](_0x2db60d));for(_0x46e79c=0x0,_0x5b6af3=_0x4be1af[_0x11b046(0x131)];_0x46e79c<_0x5b6af3;_0x46e79c++)if(_0x34f775=_0x4be1af[_0x46e79c],!(_0x4246d6&&_0x487006[_0x11b046(0x8c)](_0x34f775[_0x11b046(0xf4)]()))&&!this[_0x11b046(0x13d)](_0x2db60d,_0x34f775,_0x163809)&&!_0x42f259['_p_'+_0x34f775[_0x11b046(0xf4)]()]){if(_0x1d3bd8++,_0x163809[_0x11b046(0xa7)]++,_0x1d3bd8>_0x3ff810){_0x515978=!0x0;break;}if(!_0x163809[_0x11b046(0xa6)]&&_0x163809[_0x11b046(0x124)]&&_0x163809[_0x11b046(0xa7)]>_0x163809[_0x11b046(0xec)]){_0x515978=!0x0;break;}_0x5a0af2[_0x11b046(0xff)](_0x11758f[_0x11b046(0x85)](_0x268691,_0x42f259,_0x2db60d,_0x58a139,_0x34f775,_0x163809));}}}}}if(_0x52e9c4[_0x11b046(0x9b)]=_0x58a139,_0x6a2864?(_0x52e9c4[_0x11b046(0xf0)]=_0x2db60d[_0x11b046(0xa2)](),this['_capIfString'](_0x58a139,_0x52e9c4,_0x163809,_0x1d3865)):_0x58a139===_0x11b046(0x87)?_0x52e9c4[_0x11b046(0xf0)]=this['_dateToString']['call'](_0x2db60d):_0x58a139===_0x11b046(0x9e)?_0x52e9c4[_0x11b046(0xf0)]=_0x2db60d[_0x11b046(0xf4)]():_0x58a139===_0x11b046(0x162)?_0x52e9c4[_0x11b046(0xf0)]=this[_0x11b046(0x110)]['call'](_0x2db60d):_0x58a139==='symbol'&&this[_0x11b046(0x13b)]?_0x52e9c4[_0x11b046(0xf0)]=this[_0x11b046(0x13b)][_0x11b046(0x11b)][_0x11b046(0xf4)][_0x11b046(0x171)](_0x2db60d):!_0x163809[_0x11b046(0xc1)]&&!(_0x58a139==='null'||_0x58a139===_0x11b046(0xb2))&&(delete _0x52e9c4[_0x11b046(0xf0)],_0x52e9c4[_0x11b046(0x126)]=!0x0),_0x515978&&(_0x52e9c4[_0x11b046(0x83)]=!0x0),_0x1bfe65=_0x163809[_0x11b046(0xa1)][_0x11b046(0x146)],_0x163809['node'][_0x11b046(0x146)]=_0x52e9c4,this[_0x11b046(0xb4)](_0x52e9c4,_0x163809),_0x5a0af2[_0x11b046(0x131)]){for(_0x46e79c=0x0,_0x5b6af3=_0x5a0af2[_0x11b046(0x131)];_0x46e79c<_0x5b6af3;_0x46e79c++)_0x5a0af2[_0x46e79c](_0x46e79c);}_0x268691[_0x11b046(0x131)]&&(_0x52e9c4[_0x11b046(0x11e)]=_0x268691);}catch(_0xdc9086){_0x553782(_0xdc9086,_0x52e9c4,_0x163809);}return this['_additionalMetadata'](_0x2db60d,_0x52e9c4),this[_0x11b046(0x16b)](_0x52e9c4,_0x163809),_0x163809[_0x11b046(0xa1)][_0x11b046(0x146)]=_0x1bfe65,_0x163809['level']--,_0x163809[_0x11b046(0x124)]=_0x533f43,_0x163809[_0x11b046(0x124)]&&_0x163809['autoExpandPreviousObjects'][_0x11b046(0x95)](),_0x52e9c4;}[_0xeba5ae(0x144)](_0x2a4a55){var _0x874c11=_0xeba5ae;return Object[_0x874c11(0xc0)]?Object[_0x874c11(0xc0)](_0x2a4a55):[];}[_0xeba5ae(0x107)](_0x24433b){var _0x23b49d=_0xeba5ae;return!!(_0x24433b&&_0x1cc08b[_0x23b49d(0x8b)]&&this[_0x23b49d(0x115)](_0x24433b)==='[object\\x20Set]'&&_0x24433b[_0x23b49d(0x16a)]);}[_0xeba5ae(0x13d)](_0x137e25,_0x87508b,_0x521459){return _0x521459['noFunctions']?typeof _0x137e25[_0x87508b]=='function':!0x1;}[_0xeba5ae(0xbc)](_0x26fed2){var _0x40a499=_0xeba5ae,_0xafe7f9='';return _0xafe7f9=typeof _0x26fed2,_0xafe7f9===_0x40a499(0x13f)?this[_0x40a499(0x115)](_0x26fed2)===_0x40a499(0xc5)?_0xafe7f9=_0x40a499(0x116):this['_objectToString'](_0x26fed2)===_0x40a499(0x86)?_0xafe7f9=_0x40a499(0x87):this[_0x40a499(0x115)](_0x26fed2)===_0x40a499(0x9c)?_0xafe7f9=_0x40a499(0x9e):_0x26fed2===null?_0xafe7f9='null':_0x26fed2[_0x40a499(0x139)]&&(_0xafe7f9=_0x26fed2[_0x40a499(0x139)][_0x40a499(0x122)]||_0xafe7f9):_0xafe7f9===_0x40a499(0xb2)&&this['_HTMLAllCollection']&&_0x26fed2 instanceof this[_0x40a499(0xfb)]&&(_0xafe7f9='HTMLAllCollection'),_0xafe7f9;}[_0xeba5ae(0x115)](_0x569915){var _0x9ae7ea=_0xeba5ae;return Object[_0x9ae7ea(0x11b)][_0x9ae7ea(0xf4)][_0x9ae7ea(0x171)](_0x569915);}['_isPrimitiveType'](_0x5332f0){var _0x4fd674=_0xeba5ae;return _0x5332f0===_0x4fd674(0x165)||_0x5332f0===_0x4fd674(0x11a)||_0x5332f0===_0x4fd674(0xa3);}[_0xeba5ae(0x9d)](_0x5d583c){var _0x2ed699=_0xeba5ae;return _0x5d583c===_0x2ed699(0x13c)||_0x5d583c==='String'||_0x5d583c===_0x2ed699(0x10d);}[_0xeba5ae(0xac)](_0x23869e,_0x5e0b24,_0x18ce69,_0x14d228,_0x1e1416,_0x437436){var _0x2b1fd3=this;return function(_0x1d221a){var _0x57e586=_0xb830,_0x5292b4=_0x1e1416[_0x57e586(0xa1)]['current'],_0x1ff91d=_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x158)],_0x2800d7=_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x16d)];_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x16d)]=_0x5292b4,_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x158)]=typeof _0x14d228==_0x57e586(0xa3)?_0x14d228:_0x1d221a,_0x23869e['push'](_0x2b1fd3[_0x57e586(0x113)](_0x5e0b24,_0x18ce69,_0x14d228,_0x1e1416,_0x437436)),_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x16d)]=_0x2800d7,_0x1e1416[_0x57e586(0xa1)][_0x57e586(0x158)]=_0x1ff91d;};}['_addObjectProperty'](_0xb040af,_0xefd771,_0x2da156,_0x124727,_0x42618e,_0x9fa9d6,_0x4ce1cb){var _0x14cd22=_0xeba5ae,_0xd4ffc8=this;return _0xefd771[_0x14cd22(0xfd)+_0x42618e['toString']()]=!0x0,function(_0x355c24){var _0x18bd77=_0x14cd22,_0x2d45bc=_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x146)],_0x4817ef=_0x9fa9d6['node'][_0x18bd77(0x158)],_0x176974=_0x9fa9d6['node'][_0x18bd77(0x16d)];_0x9fa9d6[_0x18bd77(0xa1)]['parent']=_0x2d45bc,_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x158)]=_0x355c24,_0xb040af[_0x18bd77(0xff)](_0xd4ffc8[_0x18bd77(0x113)](_0x2da156,_0x124727,_0x42618e,_0x9fa9d6,_0x4ce1cb)),_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x16d)]=_0x176974,_0x9fa9d6[_0x18bd77(0xa1)][_0x18bd77(0x158)]=_0x4817ef;};}[_0xeba5ae(0x113)](_0x988cca,_0x5decdb,_0x1747c2,_0x305e2e,_0x559d0a){var _0x315945=_0xeba5ae,_0x267001=this;_0x559d0a||(_0x559d0a=function(_0x50817c,_0x78f975){return _0x50817c[_0x78f975];});var _0x6b784e=_0x1747c2[_0x315945(0xf4)](),_0x56413a=_0x305e2e['expressionsToEvaluate']||{},_0x21c4e5=_0x305e2e['depth'],_0x447698=_0x305e2e['isExpressionToEvaluate'];try{var _0x50f1c8=this[_0x315945(0x99)](_0x988cca),_0x5b03d3=_0x6b784e;_0x50f1c8&&_0x5b03d3[0x0]==='\\x27'&&(_0x5b03d3=_0x5b03d3[_0x315945(0x16e)](0x1,_0x5b03d3[_0x315945(0x131)]-0x2));var _0x24b859=_0x305e2e[_0x315945(0xaf)]=_0x56413a[_0x315945(0xfd)+_0x5b03d3];_0x24b859&&(_0x305e2e['depth']=_0x305e2e[_0x315945(0xc1)]+0x1),_0x305e2e[_0x315945(0xa6)]=!!_0x24b859;var _0x57685f=typeof _0x1747c2==_0x315945(0xed),_0x4ec724={'name':_0x57685f||_0x50f1c8?_0x6b784e:this[_0x315945(0x8d)](_0x6b784e)};if(_0x57685f&&(_0x4ec724[_0x315945(0xed)]=!0x0),!(_0x5decdb===_0x315945(0x116)||_0x5decdb===_0x315945(0x89))){var _0xc6f266=this[_0x315945(0x132)](_0x988cca,_0x1747c2);if(_0xc6f266&&(_0xc6f266['set']&&(_0x4ec724[_0x315945(0x152)]=!0x0),_0xc6f266['get']&&!_0x24b859&&!_0x305e2e[_0x315945(0xfe)]))return _0x4ec724[_0x315945(0xeb)]=!0x0,this['_processTreeNodeResult'](_0x4ec724,_0x305e2e),_0x4ec724;}var _0x3a93d0;try{_0x3a93d0=_0x559d0a(_0x988cca,_0x1747c2);}catch(_0x3aa278){return _0x4ec724={'name':_0x6b784e,'type':_0x315945(0x10a),'error':_0x3aa278[_0x315945(0xea)]},this[_0x315945(0x102)](_0x4ec724,_0x305e2e),_0x4ec724;}var _0x5f450f=this[_0x315945(0xbc)](_0x3a93d0),_0x3cf548=this['_isPrimitiveType'](_0x5f450f);if(_0x4ec724[_0x315945(0x9b)]=_0x5f450f,_0x3cf548)this[_0x315945(0x102)](_0x4ec724,_0x305e2e,_0x3a93d0,function(){var _0x450f09=_0x315945;_0x4ec724[_0x450f09(0xf0)]=_0x3a93d0[_0x450f09(0xa2)](),!_0x24b859&&_0x267001[_0x450f09(0x169)](_0x5f450f,_0x4ec724,_0x305e2e,{});});else{var _0x413e76=_0x305e2e[_0x315945(0x124)]&&_0x305e2e[_0x315945(0xc8)]<_0x305e2e[_0x315945(0x104)]&&_0x305e2e[_0x315945(0xd1)][_0x315945(0xb8)](_0x3a93d0)<0x0&&_0x5f450f!==_0x315945(0x11c)&&_0x305e2e[_0x315945(0xa7)]<_0x305e2e[_0x315945(0xec)];_0x413e76||_0x305e2e[_0x315945(0xc8)]<_0x21c4e5||_0x24b859?(this[_0x315945(0xb3)](_0x4ec724,_0x3a93d0,_0x305e2e,_0x24b859||{}),this[_0x315945(0xa0)](_0x3a93d0,_0x4ec724)):this[_0x315945(0x102)](_0x4ec724,_0x305e2e,_0x3a93d0,function(){var _0x5bc30f=_0x315945;_0x5f450f===_0x5bc30f(0xd2)||_0x5f450f===_0x5bc30f(0xb2)||(delete _0x4ec724[_0x5bc30f(0xf0)],_0x4ec724[_0x5bc30f(0x126)]=!0x0);});}return _0x4ec724;}finally{_0x305e2e['expressionsToEvaluate']=_0x56413a,_0x305e2e[_0x315945(0xc1)]=_0x21c4e5,_0x305e2e['isExpressionToEvaluate']=_0x447698;}}[_0xeba5ae(0x169)](_0x158312,_0x52fa59,_0x12c82b,_0x289c16){var _0x12aa02=_0xeba5ae,_0x36a98f=_0x289c16[_0x12aa02(0xe1)]||_0x12c82b['strLength'];if((_0x158312===_0x12aa02(0x11a)||_0x158312===_0x12aa02(0xc6))&&_0x52fa59['value']){let _0x4a6342=_0x52fa59[_0x12aa02(0xf0)]['length'];_0x12c82b[_0x12aa02(0xcc)]+=_0x4a6342,_0x12c82b[_0x12aa02(0xcc)]>_0x12c82b[_0x12aa02(0x12d)]?(_0x52fa59['capped']='',delete _0x52fa59['value']):_0x4a6342>_0x36a98f&&(_0x52fa59[_0x12aa02(0x126)]=_0x52fa59['value']['substr'](0x0,_0x36a98f),delete _0x52fa59[_0x12aa02(0xf0)]);}}['_isMap'](_0x5be373){var _0x3ba1c6=_0xeba5ae;return!!(_0x5be373&&_0x1cc08b[_0x3ba1c6(0x14c)]&&this[_0x3ba1c6(0x115)](_0x5be373)===_0x3ba1c6(0xb6)&&_0x5be373[_0x3ba1c6(0x16a)]);}[_0xeba5ae(0x8d)](_0xc4ce1c){var _0x2962e7=_0xeba5ae;if(_0xc4ce1c['match'](/^\\d+$/))return _0xc4ce1c;var _0x4392b5;try{_0x4392b5=JSON[_0x2962e7(0x140)](''+_0xc4ce1c);}catch{_0x4392b5='\\x22'+this[_0x2962e7(0x115)](_0xc4ce1c)+'\\x22';}return _0x4392b5['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x4392b5=_0x4392b5[_0x2962e7(0x16e)](0x1,_0x4392b5[_0x2962e7(0x131)]-0x2):_0x4392b5=_0x4392b5[_0x2962e7(0xe7)](/'/g,'\\x5c\\x27')[_0x2962e7(0xe7)](/\\\\"/g,'\\x22')[_0x2962e7(0xe7)](/(^"|"$)/g,'\\x27'),_0x4392b5;}[_0xeba5ae(0x102)](_0x26ebd8,_0x2b13b8,_0xe06eaa,_0x3c24ec){var _0x3742a8=_0xeba5ae;this[_0x3742a8(0xb4)](_0x26ebd8,_0x2b13b8),_0x3c24ec&&_0x3c24ec(),this[_0x3742a8(0xa0)](_0xe06eaa,_0x26ebd8),this[_0x3742a8(0x16b)](_0x26ebd8,_0x2b13b8);}['_treeNodePropertiesBeforeFullValue'](_0x5ae563,_0x571899){var _0x2cdb1b=_0xeba5ae;this[_0x2cdb1b(0xe8)](_0x5ae563,_0x571899),this['_setNodeQueryPath'](_0x5ae563,_0x571899),this[_0x2cdb1b(0x15c)](_0x5ae563,_0x571899),this[_0x2cdb1b(0x127)](_0x5ae563,_0x571899);}['_setNodeId'](_0x51436c,_0x5fcb4d){}[_0xeba5ae(0xe2)](_0x1972c1,_0x4ca0bc){}['_setNodeLabel'](_0x8aa837,_0x189dbb){}[_0xeba5ae(0xbd)](_0x516a56){return _0x516a56===this['_undefined'];}[_0xeba5ae(0x16b)](_0x591e56,_0x1f455e){var _0x1b05c6=_0xeba5ae;this[_0x1b05c6(0x15b)](_0x591e56,_0x1f455e),this[_0x1b05c6(0x148)](_0x591e56),_0x1f455e[_0x1b05c6(0x135)]&&this[_0x1b05c6(0x8e)](_0x591e56),this[_0x1b05c6(0x156)](_0x591e56,_0x1f455e),this['_addLoadNode'](_0x591e56,_0x1f455e),this[_0x1b05c6(0xf3)](_0x591e56);}['_additionalMetadata'](_0x5c2370,_0x1cbfde){var _0x461d28=_0xeba5ae;let _0x3b8641;try{_0x1cc08b[_0x461d28(0x88)]&&(_0x3b8641=_0x1cc08b[_0x461d28(0x88)][_0x461d28(0x12b)],_0x1cc08b['console'][_0x461d28(0x12b)]=function(){}),_0x5c2370&&typeof _0x5c2370[_0x461d28(0x131)]==_0x461d28(0xa3)&&(_0x1cbfde[_0x461d28(0x131)]=_0x5c2370['length']);}catch{}finally{_0x3b8641&&(_0x1cc08b['console'][_0x461d28(0x12b)]=_0x3b8641);}if(_0x1cbfde['type']===_0x461d28(0xa3)||_0x1cbfde[_0x461d28(0x9b)]===_0x461d28(0x10d)){if(isNaN(_0x1cbfde[_0x461d28(0xf0)]))_0x1cbfde[_0x461d28(0xdb)]=!0x0,delete _0x1cbfde[_0x461d28(0xf0)];else switch(_0x1cbfde[_0x461d28(0xf0)]){case Number[_0x461d28(0x15e)]:_0x1cbfde[_0x461d28(0xd8)]=!0x0,delete _0x1cbfde[_0x461d28(0xf0)];break;case Number[_0x461d28(0x151)]:_0x1cbfde[_0x461d28(0x92)]=!0x0,delete _0x1cbfde[_0x461d28(0xf0)];break;case 0x0:this[_0x461d28(0x111)](_0x1cbfde[_0x461d28(0xf0)])&&(_0x1cbfde[_0x461d28(0x14e)]=!0x0);break;}}else _0x1cbfde[_0x461d28(0x9b)]==='function'&&typeof _0x5c2370[_0x461d28(0x122)]==_0x461d28(0x11a)&&_0x5c2370['name']&&_0x1cbfde[_0x461d28(0x122)]&&_0x5c2370['name']!==_0x1cbfde['name']&&(_0x1cbfde[_0x461d28(0xf5)]=_0x5c2370[_0x461d28(0x122)]);}[_0xeba5ae(0x111)](_0x112127){var _0x57acac=_0xeba5ae;return 0x1/_0x112127===Number[_0x57acac(0x151)];}['_sortProps'](_0x3dc922){var _0x15369a=_0xeba5ae;!_0x3dc922['props']||!_0x3dc922[_0x15369a(0x11e)][_0x15369a(0x131)]||_0x3dc922['type']===_0x15369a(0x116)||_0x3dc922[_0x15369a(0x9b)]===_0x15369a(0x14c)||_0x3dc922[_0x15369a(0x9b)]===_0x15369a(0x8b)||_0x3dc922[_0x15369a(0x11e)][_0x15369a(0xf2)](function(_0x5b9559,_0x11da09){var _0x5af4d8=_0x5b9559['name']['toLowerCase'](),_0x9acbc1=_0x11da09['name']['toLowerCase']();return _0x5af4d8<_0x9acbc1?-0x1:_0x5af4d8>_0x9acbc1?0x1:0x0;});}[_0xeba5ae(0x156)](_0x21b8f6,_0x53f602){var _0x15ce53=_0xeba5ae;if(!(_0x53f602['noFunctions']||!_0x21b8f6[_0x15ce53(0x11e)]||!_0x21b8f6[_0x15ce53(0x11e)][_0x15ce53(0x131)])){for(var _0x3a5023=[],_0x2e6d60=[],_0x18f154=0x0,_0x39d54e=_0x21b8f6[_0x15ce53(0x11e)][_0x15ce53(0x131)];_0x18f154<_0x39d54e;_0x18f154++){var _0x276061=_0x21b8f6[_0x15ce53(0x11e)][_0x18f154];_0x276061['type']===_0x15ce53(0x11c)?_0x3a5023[_0x15ce53(0xff)](_0x276061):_0x2e6d60[_0x15ce53(0xff)](_0x276061);}if(!(!_0x2e6d60[_0x15ce53(0x131)]||_0x3a5023[_0x15ce53(0x131)]<=0x1)){_0x21b8f6[_0x15ce53(0x11e)]=_0x2e6d60;var _0x4ee7a9={'functionsNode':!0x0,'props':_0x3a5023};this[_0x15ce53(0xe8)](_0x4ee7a9,_0x53f602),this[_0x15ce53(0x15b)](_0x4ee7a9,_0x53f602),this[_0x15ce53(0x148)](_0x4ee7a9),this['_setNodePermissions'](_0x4ee7a9,_0x53f602),_0x4ee7a9['id']+='\\x20f',_0x21b8f6[_0x15ce53(0x11e)][_0x15ce53(0xfa)](_0x4ee7a9);}}}[_0xeba5ae(0x98)](_0x49615f,_0x3b5c15){}[_0xeba5ae(0x148)](_0x256a3b){}['_isArray'](_0x41a15a){var _0x264703=_0xeba5ae;return Array[_0x264703(0x97)](_0x41a15a)||typeof _0x41a15a==_0x264703(0x13f)&&this[_0x264703(0x115)](_0x41a15a)===_0x264703(0xc5);}['_setNodePermissions'](_0x294134,_0x4d88f1){}[_0xeba5ae(0xf3)](_0x20a039){var _0xcf5353=_0xeba5ae;delete _0x20a039[_0xcf5353(0xaa)],delete _0x20a039[_0xcf5353(0x119)],delete _0x20a039[_0xcf5353(0x14a)];}[_0xeba5ae(0x15c)](_0x22e503,_0xb96da4){}}let _0xba5153=new _0x1d60d8(),_0x49b01f={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x2febb7={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2fa7e8(_0x2fce41,_0xaac901,_0x3c7ef5,_0x365d83,_0x2b4f70,_0x2e0abc){var _0x5eb761=_0xeba5ae;let _0x3371d2,_0x3176de;try{_0x3176de=_0x38efec(),_0x3371d2=_0x3730c0[_0xaac901],!_0x3371d2||_0x3176de-_0x3371d2['ts']>0x1f4&&_0x3371d2[_0x5eb761(0xf9)]&&_0x3371d2[_0x5eb761(0x93)]/_0x3371d2[_0x5eb761(0xf9)]<0x64?(_0x3730c0[_0xaac901]=_0x3371d2={'count':0x0,'time':0x0,'ts':_0x3176de},_0x3730c0[_0x5eb761(0x167)]={}):_0x3176de-_0x3730c0[_0x5eb761(0x167)]['ts']>0x32&&_0x3730c0['hits']['count']&&_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0x93)]/_0x3730c0['hits'][_0x5eb761(0xf9)]<0x64&&(_0x3730c0['hits']={});let _0xd1cda2=[],_0x416cc7=_0x3371d2[_0x5eb761(0xc3)]||_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0xc3)]?_0x2febb7:_0x49b01f,_0x581d20=_0x1ee84d=>{var _0x4b98bd=_0x5eb761;let _0x50800f={};return _0x50800f[_0x4b98bd(0x11e)]=_0x1ee84d['props'],_0x50800f['elements']=_0x1ee84d[_0x4b98bd(0x168)],_0x50800f[_0x4b98bd(0xe1)]=_0x1ee84d[_0x4b98bd(0xe1)],_0x50800f[_0x4b98bd(0x12d)]=_0x1ee84d[_0x4b98bd(0x12d)],_0x50800f['autoExpandLimit']=_0x1ee84d['autoExpandLimit'],_0x50800f[_0x4b98bd(0x104)]=_0x1ee84d['autoExpandMaxDepth'],_0x50800f[_0x4b98bd(0x135)]=!0x1,_0x50800f[_0x4b98bd(0x101)]=!_0x13ad5e,_0x50800f[_0x4b98bd(0xc1)]=0x1,_0x50800f[_0x4b98bd(0xc8)]=0x0,_0x50800f[_0x4b98bd(0xc9)]='root_exp_id',_0x50800f[_0x4b98bd(0x12f)]=_0x4b98bd(0xcf),_0x50800f[_0x4b98bd(0x124)]=!0x0,_0x50800f['autoExpandPreviousObjects']=[],_0x50800f[_0x4b98bd(0xa7)]=0x0,_0x50800f[_0x4b98bd(0xfe)]=!0x0,_0x50800f[_0x4b98bd(0xcc)]=0x0,_0x50800f[_0x4b98bd(0xa1)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x50800f;};for(var _0x5276bc=0x0;_0x5276bc<_0x2b4f70[_0x5eb761(0x131)];_0x5276bc++)_0xd1cda2[_0x5eb761(0xff)](_0xba5153[_0x5eb761(0xb3)]({'timeNode':_0x2fce41==='time'||void 0x0},_0x2b4f70[_0x5276bc],_0x581d20(_0x416cc7),{}));if(_0x2fce41===_0x5eb761(0x164)){let _0x54225b=Error[_0x5eb761(0xb9)];try{Error[_0x5eb761(0xb9)]=0x1/0x0,_0xd1cda2[_0x5eb761(0xff)](_0xba5153[_0x5eb761(0xb3)]({'stackNode':!0x0},new Error()[_0x5eb761(0x129)],_0x581d20(_0x416cc7),{'strLength':0x1/0x0}));}finally{Error[_0x5eb761(0xb9)]=_0x54225b;}}return{'method':'log','version':_0x5d91f4,'args':[{'ts':_0x3c7ef5,'session':_0x365d83,'args':_0xd1cda2,'id':_0xaac901,'context':_0x2e0abc}]};}catch(_0xc1d67d){return{'method':'log','version':_0x5d91f4,'args':[{'ts':_0x3c7ef5,'session':_0x365d83,'args':[{'type':_0x5eb761(0x10a),'error':_0xc1d67d&&_0xc1d67d[_0x5eb761(0xea)]}],'id':_0xaac901,'context':_0x2e0abc}]};}finally{try{if(_0x3371d2&&_0x3176de){let _0x39ee54=_0x38efec();_0x3371d2['count']++,_0x3371d2[_0x5eb761(0x93)]+=_0x435479(_0x3176de,_0x39ee54),_0x3371d2['ts']=_0x39ee54,_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0xf9)]++,_0x3730c0['hits'][_0x5eb761(0x93)]+=_0x435479(_0x3176de,_0x39ee54),_0x3730c0[_0x5eb761(0x167)]['ts']=_0x39ee54,(_0x3371d2['count']>0x32||_0x3371d2[_0x5eb761(0x93)]>0x64)&&(_0x3371d2[_0x5eb761(0xc3)]=!0x0),(_0x3730c0[_0x5eb761(0x167)]['count']>0x3e8||_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0x93)]>0x12c)&&(_0x3730c0[_0x5eb761(0x167)][_0x5eb761(0xc3)]=!0x0);}}catch{}}}return _0x2fa7e8;}((_0x27a3b3,_0xccbd46,_0x42f2ff,_0x39ddc6,_0x374a56,_0x3ab083,_0x3ea20e,_0x17295e,_0x1b42b2,_0x1513ca)=>{var _0x6d0d70=_0x1097a9;if(_0x27a3b3['_console_ninja'])return _0x27a3b3[_0x6d0d70(0xe4)];if(!J(_0x27a3b3,_0x17295e,_0x374a56))return _0x27a3b3[_0x6d0d70(0xe4)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x27a3b3[_0x6d0d70(0xe4)];let _0x453fe2=W(_0x27a3b3),_0x361a3a=_0x453fe2[_0x6d0d70(0xf6)],_0x6dc794=_0x453fe2['timeStamp'],_0x14408b=_0x453fe2['now'],_0x50d901={'hits':{},'ts':{}},_0x410bf7=Y(_0x27a3b3,_0x1b42b2,_0x50d901,_0x3ab083),_0x3e06df=_0x225a26=>{_0x50d901['ts'][_0x225a26]=_0x6dc794();},_0x3469f7=(_0x5cf307,_0xf31b99)=>{var _0x5e8fc5=_0x6d0d70;let _0x4503fc=_0x50d901['ts'][_0xf31b99];if(delete _0x50d901['ts'][_0xf31b99],_0x4503fc){let _0x1c4b4e=_0x361a3a(_0x4503fc,_0x6dc794());_0x48bd74(_0x410bf7(_0x5e8fc5(0x93),_0x5cf307,_0x14408b(),_0x553e4d,[_0x1c4b4e],_0xf31b99));}},_0x23a3ed=_0x5ec5c7=>_0x2625b7=>{var _0x91e8f4=_0x6d0d70;try{_0x3e06df(_0x2625b7),_0x5ec5c7(_0x2625b7);}finally{_0x27a3b3[_0x91e8f4(0x88)][_0x91e8f4(0x93)]=_0x5ec5c7;}},_0x28e17a=_0x390625=>_0x325330=>{var _0x543e26=_0x6d0d70;try{let [_0x34e18b,_0x2cf90b]=_0x325330[_0x543e26(0x10b)](_0x543e26(0xe6));_0x3469f7(_0x2cf90b,_0x34e18b),_0x390625(_0x34e18b);}finally{_0x27a3b3[_0x543e26(0x88)][_0x543e26(0xba)]=_0x390625;}};_0x27a3b3[_0x6d0d70(0xe4)]={'consoleLog':(_0x8c65fe,_0x25f248)=>{var _0x445365=_0x6d0d70;_0x27a3b3[_0x445365(0x88)][_0x445365(0xae)][_0x445365(0x122)]!==_0x445365(0x163)&&_0x48bd74(_0x410bf7(_0x445365(0xae),_0x8c65fe,_0x14408b(),_0x553e4d,_0x25f248));},'consoleTrace':(_0x4081b6,_0x198032)=>{var _0x3c28a1=_0x6d0d70;_0x27a3b3[_0x3c28a1(0x88)][_0x3c28a1(0xae)][_0x3c28a1(0x122)]!=='disabledTrace'&&_0x48bd74(_0x410bf7(_0x3c28a1(0x164),_0x4081b6,_0x14408b(),_0x553e4d,_0x198032));},'consoleTime':()=>{var _0x4837f8=_0x6d0d70;_0x27a3b3[_0x4837f8(0x88)]['time']=_0x23a3ed(_0x27a3b3['console'][_0x4837f8(0x93)]);},'consoleTimeEnd':()=>{var _0x8ef218=_0x6d0d70;_0x27a3b3[_0x8ef218(0x88)][_0x8ef218(0xba)]=_0x28e17a(_0x27a3b3[_0x8ef218(0x88)][_0x8ef218(0xba)]);},'autoLog':(_0x276a3d,_0x1fe4e9)=>{var _0x1b731c=_0x6d0d70;_0x48bd74(_0x410bf7(_0x1b731c(0xae),_0x1fe4e9,_0x14408b(),_0x553e4d,[_0x276a3d]));},'autoLogMany':(_0x3c7420,_0x20b118)=>{var _0x10c340=_0x6d0d70;_0x48bd74(_0x410bf7(_0x10c340(0xae),_0x3c7420,_0x14408b(),_0x553e4d,_0x20b118));},'autoTrace':(_0x27b835,_0x23af1a)=>{var _0x3ef9f4=_0x6d0d70;_0x48bd74(_0x410bf7(_0x3ef9f4(0x164),_0x23af1a,_0x14408b(),_0x553e4d,[_0x27b835]));},'autoTraceMany':(_0x407c10,_0x3cdd43)=>{var _0x38a5a0=_0x6d0d70;_0x48bd74(_0x410bf7(_0x38a5a0(0x164),_0x407c10,_0x14408b(),_0x553e4d,_0x3cdd43));},'autoTime':(_0x276ada,_0x18fb0a,_0x4a4f03)=>{_0x3e06df(_0x4a4f03);},'autoTimeEnd':(_0x523298,_0x5fd6d4,_0x1bf5d8)=>{_0x3469f7(_0x5fd6d4,_0x1bf5d8);},'coverage':_0x1a263f=>{_0x48bd74({'method':'coverage','version':_0x3ab083,'args':[{'id':_0x1a263f}]});}};let _0x48bd74=b(_0x27a3b3,_0xccbd46,_0x42f2ff,_0x39ddc6,_0x374a56,_0x1513ca),_0x553e4d=_0x27a3b3['_console_ninja_session'];return _0x27a3b3[_0x6d0d70(0xe4)];})(globalThis,_0x1097a9(0xd6),_0x1097a9(0xde),_0x1097a9(0xa5),'nuxt',_0x1097a9(0xe9),_0x1097a9(0x10e),_0x1097a9(0xf8),'',_0x1097a9(0xb5));`);
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

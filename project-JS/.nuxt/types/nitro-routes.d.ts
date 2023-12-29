// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/users/:id': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/[id].delete').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/[id].put').default>>>>
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/[id]').default>>>>
    }
    '/api/users/users': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/users.post').default>>>>
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/users').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}
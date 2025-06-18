
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model live
 * 
 */
export type live = $Result.DefaultSelection<Prisma.$livePayload>
/**
 * Model report
 * 
 */
export type report = $Result.DefaultSelection<Prisma.$reportPayload>
/**
 * Model reportItems
 * 
 */
export type reportItems = $Result.DefaultSelection<Prisma.$reportItemsPayload>
/**
 * Model stream
 * 
 */
export type stream = $Result.DefaultSelection<Prisma.$streamPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model authentication
 * 
 */
export type authentication = $Result.DefaultSelection<Prisma.$authenticationPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model audit
 * 
 */
export type audit = $Result.DefaultSelection<Prisma.$auditPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lives
 * const lives = await prisma.live.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Lives
   * const lives = await prisma.live.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.live`: Exposes CRUD operations for the **live** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lives
    * const lives = await prisma.live.findMany()
    * ```
    */
  get live(): Prisma.liveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportItems`: Exposes CRUD operations for the **reportItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportItems
    * const reportItems = await prisma.reportItems.findMany()
    * ```
    */
  get reportItems(): Prisma.reportItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.streamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authentication`: Exposes CRUD operations for the **authentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentications
    * const authentications = await prisma.authentication.findMany()
    * ```
    */
  get authentication(): Prisma.authenticationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit`: Exposes CRUD operations for the **audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.auditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    live: 'live',
    report: 'report',
    reportItems: 'reportItems',
    stream: 'stream',
    user: 'user',
    authentication: 'authentication',
    logs: 'logs',
    audit: 'audit',
    notification: 'notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "live" | "report" | "reportItems" | "stream" | "user" | "authentication" | "logs" | "audit" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      live: {
        payload: Prisma.$livePayload<ExtArgs>
        fields: Prisma.liveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.liveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.liveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>
          }
          findFirst: {
            args: Prisma.liveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.liveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>
          }
          findMany: {
            args: Prisma.liveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>[]
          }
          create: {
            args: Prisma.liveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>
          }
          createMany: {
            args: Prisma.liveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.liveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>[]
          }
          delete: {
            args: Prisma.liveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>
          }
          update: {
            args: Prisma.liveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>
          }
          deleteMany: {
            args: Prisma.liveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.liveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.liveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>[]
          }
          upsert: {
            args: Prisma.liveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livePayload>
          }
          aggregate: {
            args: Prisma.LiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLive>
          }
          groupBy: {
            args: Prisma.liveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.liveCountArgs<ExtArgs>
            result: $Utils.Optional<LiveCountAggregateOutputType> | number
          }
        }
      }
      report: {
        payload: Prisma.$reportPayload<ExtArgs>
        fields: Prisma.reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findFirst: {
            args: Prisma.reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findMany: {
            args: Prisma.reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          create: {
            args: Prisma.reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          createMany: {
            args: Prisma.reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          delete: {
            args: Prisma.reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          update: {
            args: Prisma.reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          deleteMany: {
            args: Prisma.reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          upsert: {
            args: Prisma.reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      reportItems: {
        payload: Prisma.$reportItemsPayload<ExtArgs>
        fields: Prisma.reportItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>
          }
          findFirst: {
            args: Prisma.reportItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>
          }
          findMany: {
            args: Prisma.reportItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>[]
          }
          create: {
            args: Prisma.reportItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>
          }
          createMany: {
            args: Prisma.reportItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>[]
          }
          delete: {
            args: Prisma.reportItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>
          }
          update: {
            args: Prisma.reportItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>
          }
          deleteMany: {
            args: Prisma.reportItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>[]
          }
          upsert: {
            args: Prisma.reportItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportItemsPayload>
          }
          aggregate: {
            args: Prisma.ReportItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportItems>
          }
          groupBy: {
            args: Prisma.reportItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportItemsCountAggregateOutputType> | number
          }
        }
      }
      stream: {
        payload: Prisma.$streamPayload<ExtArgs>
        fields: Prisma.streamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.streamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.streamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          findFirst: {
            args: Prisma.streamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.streamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          findMany: {
            args: Prisma.streamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>[]
          }
          create: {
            args: Prisma.streamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          createMany: {
            args: Prisma.streamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.streamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>[]
          }
          delete: {
            args: Prisma.streamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          update: {
            args: Prisma.streamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          deleteMany: {
            args: Prisma.streamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.streamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.streamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>[]
          }
          upsert: {
            args: Prisma.streamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          aggregate: {
            args: Prisma.StreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStream>
          }
          groupBy: {
            args: Prisma.streamGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.streamCountArgs<ExtArgs>
            result: $Utils.Optional<StreamCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      authentication: {
        payload: Prisma.$authenticationPayload<ExtArgs>
        fields: Prisma.authenticationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authenticationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authenticationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>
          }
          findFirst: {
            args: Prisma.authenticationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authenticationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>
          }
          findMany: {
            args: Prisma.authenticationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>[]
          }
          create: {
            args: Prisma.authenticationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>
          }
          createMany: {
            args: Prisma.authenticationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authenticationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>[]
          }
          delete: {
            args: Prisma.authenticationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>
          }
          update: {
            args: Prisma.authenticationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>
          }
          deleteMany: {
            args: Prisma.authenticationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authenticationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authenticationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>[]
          }
          upsert: {
            args: Prisma.authenticationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authenticationPayload>
          }
          aggregate: {
            args: Prisma.AuthenticationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthentication>
          }
          groupBy: {
            args: Prisma.authenticationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticationGroupByOutputType>[]
          }
          count: {
            args: Prisma.authenticationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticationCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      audit: {
        payload: Prisma.$auditPayload<ExtArgs>
        fields: Prisma.auditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          findFirst: {
            args: Prisma.auditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          findMany: {
            args: Prisma.auditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>[]
          }
          create: {
            args: Prisma.auditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          createMany: {
            args: Prisma.auditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>[]
          }
          delete: {
            args: Prisma.auditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          update: {
            args: Prisma.auditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          deleteMany: {
            args: Prisma.auditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>[]
          }
          upsert: {
            args: Prisma.auditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit>
          }
          groupBy: {
            args: Prisma.auditGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.auditCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    live?: liveOmit
    report?: reportOmit
    reportItems?: reportItemsOmit
    stream?: streamOmit
    user?: userOmit
    authentication?: authenticationOmit
    logs?: logsOmit
    audit?: auditOmit
    notification?: notificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LiveCountOutputType
   */

  export type LiveCountOutputType = {
    report: number
  }

  export type LiveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | LiveCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * LiveCountOutputType without action
   */
  export type LiveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveCountOutputType
     */
    select?: LiveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LiveCountOutputType without action
   */
  export type LiveCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    reportItems: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportItems?: boolean | ReportCountOutputTypeCountReportItemsArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountReportItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportItemsWhereInput
  }


  /**
   * Count Type StreamCountOutputType
   */

  export type StreamCountOutputType = {
    live: number
  }

  export type StreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | StreamCountOutputTypeCountLiveArgs
  }

  // Custom InputTypes
  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamCountOutputType
     */
    select?: StreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeCountLiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: liveWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stream: number
    live: number
    report: number
    audit: number
    notification: number
    authentication: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | UserCountOutputTypeCountStreamArgs
    live?: boolean | UserCountOutputTypeCountLiveArgs
    report?: boolean | UserCountOutputTypeCountReportArgs
    audit?: boolean | UserCountOutputTypeCountAuditArgs
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
    authentication?: boolean | UserCountOutputTypeCountAuthenticationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: streamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: liveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authenticationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model live
   */

  export type AggregateLive = {
    _count: LiveCountAggregateOutputType | null
    _avg: LiveAvgAggregateOutputType | null
    _sum: LiveSumAggregateOutputType | null
    _min: LiveMinAggregateOutputType | null
    _max: LiveMaxAggregateOutputType | null
  }

  export type LiveAvgAggregateOutputType = {
    expiryTimeInMinutes: number | null
  }

  export type LiveSumAggregateOutputType = {
    expiryTimeInMinutes: number | null
  }

  export type LiveMinAggregateOutputType = {
    id: string | null
    path: string | null
    streamId: string | null
    userId: string | null
    expiryDate: Date | null
    expiryTimeInMinutes: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type LiveMaxAggregateOutputType = {
    id: string | null
    path: string | null
    streamId: string | null
    userId: string | null
    expiryDate: Date | null
    expiryTimeInMinutes: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type LiveCountAggregateOutputType = {
    id: number
    path: number
    streamId: number
    userId: number
    expiryDate: number
    expiryTimeInMinutes: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type LiveAvgAggregateInputType = {
    expiryTimeInMinutes?: true
  }

  export type LiveSumAggregateInputType = {
    expiryTimeInMinutes?: true
  }

  export type LiveMinAggregateInputType = {
    id?: true
    path?: true
    streamId?: true
    userId?: true
    expiryDate?: true
    expiryTimeInMinutes?: true
    createdDate?: true
    updatedDate?: true
  }

  export type LiveMaxAggregateInputType = {
    id?: true
    path?: true
    streamId?: true
    userId?: true
    expiryDate?: true
    expiryTimeInMinutes?: true
    createdDate?: true
    updatedDate?: true
  }

  export type LiveCountAggregateInputType = {
    id?: true
    path?: true
    streamId?: true
    userId?: true
    expiryDate?: true
    expiryTimeInMinutes?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type LiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which live to aggregate.
     */
    where?: liveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lives to fetch.
     */
    orderBy?: liveOrderByWithRelationInput | liveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: liveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lives
    **/
    _count?: true | LiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveMaxAggregateInputType
  }

  export type GetLiveAggregateType<T extends LiveAggregateArgs> = {
        [P in keyof T & keyof AggregateLive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLive[P]>
      : GetScalarType<T[P], AggregateLive[P]>
  }




  export type liveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: liveWhereInput
    orderBy?: liveOrderByWithAggregationInput | liveOrderByWithAggregationInput[]
    by: LiveScalarFieldEnum[] | LiveScalarFieldEnum
    having?: liveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveCountAggregateInputType | true
    _avg?: LiveAvgAggregateInputType
    _sum?: LiveSumAggregateInputType
    _min?: LiveMinAggregateInputType
    _max?: LiveMaxAggregateInputType
  }

  export type LiveGroupByOutputType = {
    id: string
    path: string
    streamId: string
    userId: string
    expiryDate: Date | null
    expiryTimeInMinutes: number | null
    createdDate: Date
    updatedDate: Date | null
    _count: LiveCountAggregateOutputType | null
    _avg: LiveAvgAggregateOutputType | null
    _sum: LiveSumAggregateOutputType | null
    _min: LiveMinAggregateOutputType | null
    _max: LiveMaxAggregateOutputType | null
  }

  type GetLiveGroupByPayload<T extends liveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveGroupByOutputType[P]>
            : GetScalarType<T[P], LiveGroupByOutputType[P]>
        }
      >
    >


  export type liveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    streamId?: boolean
    userId?: boolean
    expiryDate?: boolean
    expiryTimeInMinutes?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    stream?: boolean | streamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    report?: boolean | live$reportArgs<ExtArgs>
    _count?: boolean | LiveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["live"]>

  export type liveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    streamId?: boolean
    userId?: boolean
    expiryDate?: boolean
    expiryTimeInMinutes?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    stream?: boolean | streamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["live"]>

  export type liveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    streamId?: boolean
    userId?: boolean
    expiryDate?: boolean
    expiryTimeInMinutes?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    stream?: boolean | streamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["live"]>

  export type liveSelectScalar = {
    id?: boolean
    path?: boolean
    streamId?: boolean
    userId?: boolean
    expiryDate?: boolean
    expiryTimeInMinutes?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type liveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "streamId" | "userId" | "expiryDate" | "expiryTimeInMinutes" | "createdDate" | "updatedDate", ExtArgs["result"]["live"]>
  export type liveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | streamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    report?: boolean | live$reportArgs<ExtArgs>
    _count?: boolean | LiveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type liveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | streamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type liveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | streamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $livePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "live"
    objects: {
      stream: Prisma.$streamPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      streamId: string
      userId: string
      expiryDate: Date | null
      expiryTimeInMinutes: number | null
      createdDate: Date
      updatedDate: Date | null
    }, ExtArgs["result"]["live"]>
    composites: {}
  }

  type liveGetPayload<S extends boolean | null | undefined | liveDefaultArgs> = $Result.GetResult<Prisma.$livePayload, S>

  type liveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<liveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveCountAggregateInputType | true
    }

  export interface liveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['live'], meta: { name: 'live' } }
    /**
     * Find zero or one Live that matches the filter.
     * @param {liveFindUniqueArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends liveFindUniqueArgs>(args: SelectSubset<T, liveFindUniqueArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Live that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {liveFindUniqueOrThrowArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends liveFindUniqueOrThrowArgs>(args: SelectSubset<T, liveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Live that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liveFindFirstArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends liveFindFirstArgs>(args?: SelectSubset<T, liveFindFirstArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Live that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liveFindFirstOrThrowArgs} args - Arguments to find a Live
     * @example
     * // Get one Live
     * const live = await prisma.live.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends liveFindFirstOrThrowArgs>(args?: SelectSubset<T, liveFindFirstOrThrowArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lives
     * const lives = await prisma.live.findMany()
     * 
     * // Get first 10 Lives
     * const lives = await prisma.live.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveWithIdOnly = await prisma.live.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends liveFindManyArgs>(args?: SelectSubset<T, liveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Live.
     * @param {liveCreateArgs} args - Arguments to create a Live.
     * @example
     * // Create one Live
     * const Live = await prisma.live.create({
     *   data: {
     *     // ... data to create a Live
     *   }
     * })
     * 
     */
    create<T extends liveCreateArgs>(args: SelectSubset<T, liveCreateArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lives.
     * @param {liveCreateManyArgs} args - Arguments to create many Lives.
     * @example
     * // Create many Lives
     * const live = await prisma.live.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends liveCreateManyArgs>(args?: SelectSubset<T, liveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lives and returns the data saved in the database.
     * @param {liveCreateManyAndReturnArgs} args - Arguments to create many Lives.
     * @example
     * // Create many Lives
     * const live = await prisma.live.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lives and only return the `id`
     * const liveWithIdOnly = await prisma.live.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends liveCreateManyAndReturnArgs>(args?: SelectSubset<T, liveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Live.
     * @param {liveDeleteArgs} args - Arguments to delete one Live.
     * @example
     * // Delete one Live
     * const Live = await prisma.live.delete({
     *   where: {
     *     // ... filter to delete one Live
     *   }
     * })
     * 
     */
    delete<T extends liveDeleteArgs>(args: SelectSubset<T, liveDeleteArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Live.
     * @param {liveUpdateArgs} args - Arguments to update one Live.
     * @example
     * // Update one Live
     * const live = await prisma.live.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends liveUpdateArgs>(args: SelectSubset<T, liveUpdateArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lives.
     * @param {liveDeleteManyArgs} args - Arguments to filter Lives to delete.
     * @example
     * // Delete a few Lives
     * const { count } = await prisma.live.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends liveDeleteManyArgs>(args?: SelectSubset<T, liveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lives
     * const live = await prisma.live.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends liveUpdateManyArgs>(args: SelectSubset<T, liveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lives and returns the data updated in the database.
     * @param {liveUpdateManyAndReturnArgs} args - Arguments to update many Lives.
     * @example
     * // Update many Lives
     * const live = await prisma.live.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lives and only return the `id`
     * const liveWithIdOnly = await prisma.live.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends liveUpdateManyAndReturnArgs>(args: SelectSubset<T, liveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Live.
     * @param {liveUpsertArgs} args - Arguments to update or create a Live.
     * @example
     * // Update or create a Live
     * const live = await prisma.live.upsert({
     *   create: {
     *     // ... data to create a Live
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Live we want to update
     *   }
     * })
     */
    upsert<T extends liveUpsertArgs>(args: SelectSubset<T, liveUpsertArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liveCountArgs} args - Arguments to filter Lives to count.
     * @example
     * // Count the number of Lives
     * const count = await prisma.live.count({
     *   where: {
     *     // ... the filter for the Lives we want to count
     *   }
     * })
    **/
    count<T extends liveCountArgs>(
      args?: Subset<T, liveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Live.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveAggregateArgs>(args: Subset<T, LiveAggregateArgs>): Prisma.PrismaPromise<GetLiveAggregateType<T>>

    /**
     * Group by Live.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends liveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: liveGroupByArgs['orderBy'] }
        : { orderBy?: liveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, liveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the live model
   */
  readonly fields: liveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for live.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__liveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stream<T extends streamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, streamDefaultArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    report<T extends live$reportArgs<ExtArgs> = {}>(args?: Subset<T, live$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the live model
   */
  interface liveFieldRefs {
    readonly id: FieldRef<"live", 'String'>
    readonly path: FieldRef<"live", 'String'>
    readonly streamId: FieldRef<"live", 'String'>
    readonly userId: FieldRef<"live", 'String'>
    readonly expiryDate: FieldRef<"live", 'DateTime'>
    readonly expiryTimeInMinutes: FieldRef<"live", 'Int'>
    readonly createdDate: FieldRef<"live", 'DateTime'>
    readonly updatedDate: FieldRef<"live", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * live findUnique
   */
  export type liveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * Filter, which live to fetch.
     */
    where: liveWhereUniqueInput
  }

  /**
   * live findUniqueOrThrow
   */
  export type liveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * Filter, which live to fetch.
     */
    where: liveWhereUniqueInput
  }

  /**
   * live findFirst
   */
  export type liveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * Filter, which live to fetch.
     */
    where?: liveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lives to fetch.
     */
    orderBy?: liveOrderByWithRelationInput | liveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lives.
     */
    cursor?: liveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lives.
     */
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * live findFirstOrThrow
   */
  export type liveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * Filter, which live to fetch.
     */
    where?: liveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lives to fetch.
     */
    orderBy?: liveOrderByWithRelationInput | liveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lives.
     */
    cursor?: liveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lives.
     */
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * live findMany
   */
  export type liveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * Filter, which lives to fetch.
     */
    where?: liveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lives to fetch.
     */
    orderBy?: liveOrderByWithRelationInput | liveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lives.
     */
    cursor?: liveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lives.
     */
    skip?: number
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * live create
   */
  export type liveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * The data needed to create a live.
     */
    data: XOR<liveCreateInput, liveUncheckedCreateInput>
  }

  /**
   * live createMany
   */
  export type liveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lives.
     */
    data: liveCreateManyInput | liveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * live createManyAndReturn
   */
  export type liveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * The data used to create many lives.
     */
    data: liveCreateManyInput | liveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * live update
   */
  export type liveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * The data needed to update a live.
     */
    data: XOR<liveUpdateInput, liveUncheckedUpdateInput>
    /**
     * Choose, which live to update.
     */
    where: liveWhereUniqueInput
  }

  /**
   * live updateMany
   */
  export type liveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lives.
     */
    data: XOR<liveUpdateManyMutationInput, liveUncheckedUpdateManyInput>
    /**
     * Filter which lives to update
     */
    where?: liveWhereInput
    /**
     * Limit how many lives to update.
     */
    limit?: number
  }

  /**
   * live updateManyAndReturn
   */
  export type liveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * The data used to update lives.
     */
    data: XOR<liveUpdateManyMutationInput, liveUncheckedUpdateManyInput>
    /**
     * Filter which lives to update
     */
    where?: liveWhereInput
    /**
     * Limit how many lives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * live upsert
   */
  export type liveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * The filter to search for the live to update in case it exists.
     */
    where: liveWhereUniqueInput
    /**
     * In case the live found by the `where` argument doesn't exist, create a new live with this data.
     */
    create: XOR<liveCreateInput, liveUncheckedCreateInput>
    /**
     * In case the live was found with the provided `where` argument, update it with this data.
     */
    update: XOR<liveUpdateInput, liveUncheckedUpdateInput>
  }

  /**
   * live delete
   */
  export type liveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    /**
     * Filter which live to delete.
     */
    where: liveWhereUniqueInput
  }

  /**
   * live deleteMany
   */
  export type liveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lives to delete
     */
    where?: liveWhereInput
    /**
     * Limit how many lives to delete.
     */
    limit?: number
  }

  /**
   * live.report
   */
  export type live$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * live without action
   */
  export type liveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
  }


  /**
   * Model report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    expiryTimeInMinutes: number | null
  }

  export type ReportSumAggregateOutputType = {
    expiryTimeInMinutes: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    liveId: string | null
    userId: string | null
    thumbnailUrl: string | null
    recordUrl: string | null
    expiryTimeInMinutes: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    liveId: string | null
    userId: string | null
    thumbnailUrl: string | null
    recordUrl: string | null
    expiryTimeInMinutes: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    title: number
    description: number
    liveId: number
    userId: number
    thumbnailUrl: number
    recordUrl: number
    expiryTimeInMinutes: number
    calculatedClass: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    expiryTimeInMinutes?: true
  }

  export type ReportSumAggregateInputType = {
    expiryTimeInMinutes?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    liveId?: true
    userId?: true
    thumbnailUrl?: true
    recordUrl?: true
    expiryTimeInMinutes?: true
    createdDate?: true
    updatedDate?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    liveId?: true
    userId?: true
    thumbnailUrl?: true
    recordUrl?: true
    expiryTimeInMinutes?: true
    createdDate?: true
    updatedDate?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    liveId?: true
    userId?: true
    thumbnailUrl?: true
    recordUrl?: true
    expiryTimeInMinutes?: true
    calculatedClass?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report to aggregate.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
    orderBy?: reportOrderByWithAggregationInput | reportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    liveId: string
    userId: string
    thumbnailUrl: string | null
    recordUrl: string | null
    expiryTimeInMinutes: number | null
    calculatedClass: JsonValue | null
    createdDate: Date
    updatedDate: Date | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    liveId?: boolean
    userId?: boolean
    thumbnailUrl?: boolean
    recordUrl?: boolean
    expiryTimeInMinutes?: boolean
    calculatedClass?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    live?: boolean | liveDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    reportItems?: boolean | report$reportItemsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    liveId?: boolean
    userId?: boolean
    thumbnailUrl?: boolean
    recordUrl?: boolean
    expiryTimeInMinutes?: boolean
    calculatedClass?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    live?: boolean | liveDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    liveId?: boolean
    userId?: boolean
    thumbnailUrl?: boolean
    recordUrl?: boolean
    expiryTimeInMinutes?: boolean
    calculatedClass?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    live?: boolean | liveDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    liveId?: boolean
    userId?: boolean
    thumbnailUrl?: boolean
    recordUrl?: boolean
    expiryTimeInMinutes?: boolean
    calculatedClass?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "liveId" | "userId" | "thumbnailUrl" | "recordUrl" | "expiryTimeInMinutes" | "calculatedClass" | "createdDate" | "updatedDate", ExtArgs["result"]["report"]>
  export type reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | liveDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    reportItems?: boolean | report$reportItemsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | liveDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type reportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    live?: boolean | liveDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report"
    objects: {
      live: Prisma.$livePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      reportItems: Prisma.$reportItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      liveId: string
      userId: string
      thumbnailUrl: string | null
      recordUrl: string | null
      expiryTimeInMinutes: number | null
      calculatedClass: Prisma.JsonValue | null
      createdDate: Date
      updatedDate: Date | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type reportGetPayload<S extends boolean | null | undefined | reportDefaultArgs> = $Result.GetResult<Prisma.$reportPayload, S>

  type reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report'], meta: { name: 'report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {reportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportFindUniqueArgs>(args: SelectSubset<T, reportFindUniqueArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportFindUniqueOrThrowArgs>(args: SelectSubset<T, reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportFindFirstArgs>(args?: SelectSubset<T, reportFindFirstArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportFindFirstOrThrowArgs>(args?: SelectSubset<T, reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportFindManyArgs>(args?: SelectSubset<T, reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {reportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends reportCreateArgs>(args: SelectSubset<T, reportCreateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportCreateManyArgs>(args?: SelectSubset<T, reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {reportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportCreateManyAndReturnArgs>(args?: SelectSubset<T, reportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {reportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends reportDeleteArgs>(args: SelectSubset<T, reportDeleteArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {reportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportUpdateArgs>(args: SelectSubset<T, reportUpdateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportDeleteManyArgs>(args?: SelectSubset<T, reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportUpdateManyArgs>(args: SelectSubset<T, reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {reportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reportUpdateManyAndReturnArgs>(args: SelectSubset<T, reportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {reportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends reportUpsertArgs>(args: SelectSubset<T, reportUpsertArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportCountArgs>(
      args?: Subset<T, reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportGroupByArgs['orderBy'] }
        : { orderBy?: reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report model
   */
  readonly fields: reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    live<T extends liveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, liveDefaultArgs<ExtArgs>>): Prisma__liveClient<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reportItems<T extends report$reportItemsArgs<ExtArgs> = {}>(args?: Subset<T, report$reportItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the report model
   */
  interface reportFieldRefs {
    readonly id: FieldRef<"report", 'String'>
    readonly title: FieldRef<"report", 'String'>
    readonly description: FieldRef<"report", 'String'>
    readonly liveId: FieldRef<"report", 'String'>
    readonly userId: FieldRef<"report", 'String'>
    readonly thumbnailUrl: FieldRef<"report", 'String'>
    readonly recordUrl: FieldRef<"report", 'String'>
    readonly expiryTimeInMinutes: FieldRef<"report", 'Int'>
    readonly calculatedClass: FieldRef<"report", 'Json'>
    readonly createdDate: FieldRef<"report", 'DateTime'>
    readonly updatedDate: FieldRef<"report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * report findUnique
   */
  export type reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findUniqueOrThrow
   */
  export type reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findFirst
   */
  export type reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findFirstOrThrow
   */
  export type reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findMany
   */
  export type reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report create
   */
  export type reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to create a report.
     */
    data: XOR<reportCreateInput, reportUncheckedCreateInput>
  }

  /**
   * report createMany
   */
  export type reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report createManyAndReturn
   */
  export type reportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * report update
   */
  export type reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to update a report.
     */
    data: XOR<reportUpdateInput, reportUncheckedUpdateInput>
    /**
     * Choose, which report to update.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report updateMany
   */
  export type reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * report updateManyAndReturn
   */
  export type reportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * report upsert
   */
  export type reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The filter to search for the report to update in case it exists.
     */
    where: reportWhereUniqueInput
    /**
     * In case the report found by the `where` argument doesn't exist, create a new report with this data.
     */
    create: XOR<reportCreateInput, reportUncheckedCreateInput>
    /**
     * In case the report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportUpdateInput, reportUncheckedUpdateInput>
  }

  /**
   * report delete
   */
  export type reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter which report to delete.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report deleteMany
   */
  export type reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * report.reportItems
   */
  export type report$reportItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    where?: reportItemsWhereInput
    orderBy?: reportItemsOrderByWithRelationInput | reportItemsOrderByWithRelationInput[]
    cursor?: reportItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportItemsScalarFieldEnum | ReportItemsScalarFieldEnum[]
  }

  /**
   * report without action
   */
  export type reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
  }


  /**
   * Model reportItems
   */

  export type AggregateReportItems = {
    _count: ReportItemsCountAggregateOutputType | null
    _min: ReportItemsMinAggregateOutputType | null
    _max: ReportItemsMaxAggregateOutputType | null
  }

  export type ReportItemsMinAggregateOutputType = {
    id: string | null
    data: string | null
    reportId: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type ReportItemsMaxAggregateOutputType = {
    id: string | null
    data: string | null
    reportId: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type ReportItemsCountAggregateOutputType = {
    id: number
    data: number
    reportId: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type ReportItemsMinAggregateInputType = {
    id?: true
    data?: true
    reportId?: true
    createdDate?: true
    updatedDate?: true
  }

  export type ReportItemsMaxAggregateInputType = {
    id?: true
    data?: true
    reportId?: true
    createdDate?: true
    updatedDate?: true
  }

  export type ReportItemsCountAggregateInputType = {
    id?: true
    data?: true
    reportId?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type ReportItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reportItems to aggregate.
     */
    where?: reportItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportItems to fetch.
     */
    orderBy?: reportItemsOrderByWithRelationInput | reportItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reportItems
    **/
    _count?: true | ReportItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportItemsMaxAggregateInputType
  }

  export type GetReportItemsAggregateType<T extends ReportItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateReportItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportItems[P]>
      : GetScalarType<T[P], AggregateReportItems[P]>
  }




  export type reportItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportItemsWhereInput
    orderBy?: reportItemsOrderByWithAggregationInput | reportItemsOrderByWithAggregationInput[]
    by: ReportItemsScalarFieldEnum[] | ReportItemsScalarFieldEnum
    having?: reportItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportItemsCountAggregateInputType | true
    _min?: ReportItemsMinAggregateInputType
    _max?: ReportItemsMaxAggregateInputType
  }

  export type ReportItemsGroupByOutputType = {
    id: string
    data: string | null
    reportId: string
    createdDate: Date
    updatedDate: Date | null
    _count: ReportItemsCountAggregateOutputType | null
    _min: ReportItemsMinAggregateOutputType | null
    _max: ReportItemsMaxAggregateOutputType | null
  }

  type GetReportItemsGroupByPayload<T extends reportItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportItemsGroupByOutputType[P]>
        }
      >
    >


  export type reportItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    reportId?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    report?: boolean | reportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportItems"]>

  export type reportItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    reportId?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    report?: boolean | reportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportItems"]>

  export type reportItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    reportId?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    report?: boolean | reportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportItems"]>

  export type reportItemsSelectScalar = {
    id?: boolean
    data?: boolean
    reportId?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type reportItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "reportId" | "createdDate" | "updatedDate", ExtArgs["result"]["reportItems"]>
  export type reportItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | reportDefaultArgs<ExtArgs>
  }
  export type reportItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | reportDefaultArgs<ExtArgs>
  }
  export type reportItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | reportDefaultArgs<ExtArgs>
  }

  export type $reportItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reportItems"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: string | null
      reportId: string
      createdDate: Date
      updatedDate: Date | null
    }, ExtArgs["result"]["reportItems"]>
    composites: {}
  }

  type reportItemsGetPayload<S extends boolean | null | undefined | reportItemsDefaultArgs> = $Result.GetResult<Prisma.$reportItemsPayload, S>

  type reportItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportItemsCountAggregateInputType | true
    }

  export interface reportItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reportItems'], meta: { name: 'reportItems' } }
    /**
     * Find zero or one ReportItems that matches the filter.
     * @param {reportItemsFindUniqueArgs} args - Arguments to find a ReportItems
     * @example
     * // Get one ReportItems
     * const reportItems = await prisma.reportItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportItemsFindUniqueArgs>(args: SelectSubset<T, reportItemsFindUniqueArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportItemsFindUniqueOrThrowArgs} args - Arguments to find a ReportItems
     * @example
     * // Get one ReportItems
     * const reportItems = await prisma.reportItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, reportItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportItemsFindFirstArgs} args - Arguments to find a ReportItems
     * @example
     * // Get one ReportItems
     * const reportItems = await prisma.reportItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportItemsFindFirstArgs>(args?: SelectSubset<T, reportItemsFindFirstArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportItemsFindFirstOrThrowArgs} args - Arguments to find a ReportItems
     * @example
     * // Get one ReportItems
     * const reportItems = await prisma.reportItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, reportItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportItems
     * const reportItems = await prisma.reportItems.findMany()
     * 
     * // Get first 10 ReportItems
     * const reportItems = await prisma.reportItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportItemsWithIdOnly = await prisma.reportItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportItemsFindManyArgs>(args?: SelectSubset<T, reportItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportItems.
     * @param {reportItemsCreateArgs} args - Arguments to create a ReportItems.
     * @example
     * // Create one ReportItems
     * const ReportItems = await prisma.reportItems.create({
     *   data: {
     *     // ... data to create a ReportItems
     *   }
     * })
     * 
     */
    create<T extends reportItemsCreateArgs>(args: SelectSubset<T, reportItemsCreateArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportItems.
     * @param {reportItemsCreateManyArgs} args - Arguments to create many ReportItems.
     * @example
     * // Create many ReportItems
     * const reportItems = await prisma.reportItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportItemsCreateManyArgs>(args?: SelectSubset<T, reportItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportItems and returns the data saved in the database.
     * @param {reportItemsCreateManyAndReturnArgs} args - Arguments to create many ReportItems.
     * @example
     * // Create many ReportItems
     * const reportItems = await prisma.reportItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportItems and only return the `id`
     * const reportItemsWithIdOnly = await prisma.reportItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, reportItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportItems.
     * @param {reportItemsDeleteArgs} args - Arguments to delete one ReportItems.
     * @example
     * // Delete one ReportItems
     * const ReportItems = await prisma.reportItems.delete({
     *   where: {
     *     // ... filter to delete one ReportItems
     *   }
     * })
     * 
     */
    delete<T extends reportItemsDeleteArgs>(args: SelectSubset<T, reportItemsDeleteArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportItems.
     * @param {reportItemsUpdateArgs} args - Arguments to update one ReportItems.
     * @example
     * // Update one ReportItems
     * const reportItems = await prisma.reportItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportItemsUpdateArgs>(args: SelectSubset<T, reportItemsUpdateArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportItems.
     * @param {reportItemsDeleteManyArgs} args - Arguments to filter ReportItems to delete.
     * @example
     * // Delete a few ReportItems
     * const { count } = await prisma.reportItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportItemsDeleteManyArgs>(args?: SelectSubset<T, reportItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportItems
     * const reportItems = await prisma.reportItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportItemsUpdateManyArgs>(args: SelectSubset<T, reportItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportItems and returns the data updated in the database.
     * @param {reportItemsUpdateManyAndReturnArgs} args - Arguments to update many ReportItems.
     * @example
     * // Update many ReportItems
     * const reportItems = await prisma.reportItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportItems and only return the `id`
     * const reportItemsWithIdOnly = await prisma.reportItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reportItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, reportItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportItems.
     * @param {reportItemsUpsertArgs} args - Arguments to update or create a ReportItems.
     * @example
     * // Update or create a ReportItems
     * const reportItems = await prisma.reportItems.upsert({
     *   create: {
     *     // ... data to create a ReportItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportItems we want to update
     *   }
     * })
     */
    upsert<T extends reportItemsUpsertArgs>(args: SelectSubset<T, reportItemsUpsertArgs<ExtArgs>>): Prisma__reportItemsClient<$Result.GetResult<Prisma.$reportItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportItemsCountArgs} args - Arguments to filter ReportItems to count.
     * @example
     * // Count the number of ReportItems
     * const count = await prisma.reportItems.count({
     *   where: {
     *     // ... the filter for the ReportItems we want to count
     *   }
     * })
    **/
    count<T extends reportItemsCountArgs>(
      args?: Subset<T, reportItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportItemsAggregateArgs>(args: Subset<T, ReportItemsAggregateArgs>): Prisma.PrismaPromise<GetReportItemsAggregateType<T>>

    /**
     * Group by ReportItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportItemsGroupByArgs['orderBy'] }
        : { orderBy?: reportItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reportItems model
   */
  readonly fields: reportItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reportItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends reportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reportDefaultArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reportItems model
   */
  interface reportItemsFieldRefs {
    readonly id: FieldRef<"reportItems", 'String'>
    readonly data: FieldRef<"reportItems", 'String'>
    readonly reportId: FieldRef<"reportItems", 'String'>
    readonly createdDate: FieldRef<"reportItems", 'DateTime'>
    readonly updatedDate: FieldRef<"reportItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reportItems findUnique
   */
  export type reportItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * Filter, which reportItems to fetch.
     */
    where: reportItemsWhereUniqueInput
  }

  /**
   * reportItems findUniqueOrThrow
   */
  export type reportItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * Filter, which reportItems to fetch.
     */
    where: reportItemsWhereUniqueInput
  }

  /**
   * reportItems findFirst
   */
  export type reportItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * Filter, which reportItems to fetch.
     */
    where?: reportItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportItems to fetch.
     */
    orderBy?: reportItemsOrderByWithRelationInput | reportItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reportItems.
     */
    cursor?: reportItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reportItems.
     */
    distinct?: ReportItemsScalarFieldEnum | ReportItemsScalarFieldEnum[]
  }

  /**
   * reportItems findFirstOrThrow
   */
  export type reportItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * Filter, which reportItems to fetch.
     */
    where?: reportItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportItems to fetch.
     */
    orderBy?: reportItemsOrderByWithRelationInput | reportItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reportItems.
     */
    cursor?: reportItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reportItems.
     */
    distinct?: ReportItemsScalarFieldEnum | ReportItemsScalarFieldEnum[]
  }

  /**
   * reportItems findMany
   */
  export type reportItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * Filter, which reportItems to fetch.
     */
    where?: reportItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reportItems to fetch.
     */
    orderBy?: reportItemsOrderByWithRelationInput | reportItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reportItems.
     */
    cursor?: reportItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reportItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reportItems.
     */
    skip?: number
    distinct?: ReportItemsScalarFieldEnum | ReportItemsScalarFieldEnum[]
  }

  /**
   * reportItems create
   */
  export type reportItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a reportItems.
     */
    data: XOR<reportItemsCreateInput, reportItemsUncheckedCreateInput>
  }

  /**
   * reportItems createMany
   */
  export type reportItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reportItems.
     */
    data: reportItemsCreateManyInput | reportItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reportItems createManyAndReturn
   */
  export type reportItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * The data used to create many reportItems.
     */
    data: reportItemsCreateManyInput | reportItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reportItems update
   */
  export type reportItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a reportItems.
     */
    data: XOR<reportItemsUpdateInput, reportItemsUncheckedUpdateInput>
    /**
     * Choose, which reportItems to update.
     */
    where: reportItemsWhereUniqueInput
  }

  /**
   * reportItems updateMany
   */
  export type reportItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reportItems.
     */
    data: XOR<reportItemsUpdateManyMutationInput, reportItemsUncheckedUpdateManyInput>
    /**
     * Filter which reportItems to update
     */
    where?: reportItemsWhereInput
    /**
     * Limit how many reportItems to update.
     */
    limit?: number
  }

  /**
   * reportItems updateManyAndReturn
   */
  export type reportItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * The data used to update reportItems.
     */
    data: XOR<reportItemsUpdateManyMutationInput, reportItemsUncheckedUpdateManyInput>
    /**
     * Filter which reportItems to update
     */
    where?: reportItemsWhereInput
    /**
     * Limit how many reportItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reportItems upsert
   */
  export type reportItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the reportItems to update in case it exists.
     */
    where: reportItemsWhereUniqueInput
    /**
     * In case the reportItems found by the `where` argument doesn't exist, create a new reportItems with this data.
     */
    create: XOR<reportItemsCreateInput, reportItemsUncheckedCreateInput>
    /**
     * In case the reportItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportItemsUpdateInput, reportItemsUncheckedUpdateInput>
  }

  /**
   * reportItems delete
   */
  export type reportItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
    /**
     * Filter which reportItems to delete.
     */
    where: reportItemsWhereUniqueInput
  }

  /**
   * reportItems deleteMany
   */
  export type reportItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reportItems to delete
     */
    where?: reportItemsWhereInput
    /**
     * Limit how many reportItems to delete.
     */
    limit?: number
  }

  /**
   * reportItems without action
   */
  export type reportItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportItems
     */
    select?: reportItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reportItems
     */
    omit?: reportItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportItemsInclude<ExtArgs> | null
  }


  /**
   * Model stream
   */

  export type AggregateStream = {
    _count: StreamCountAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  export type StreamMinAggregateOutputType = {
    id: string | null
    url: string | null
    userId: string | null
    inactive: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type StreamMaxAggregateOutputType = {
    id: string | null
    url: string | null
    userId: string | null
    inactive: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type StreamCountAggregateOutputType = {
    id: number
    url: number
    userId: number
    inactive: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type StreamMinAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    inactive?: true
    createdDate?: true
    updatedDate?: true
  }

  export type StreamMaxAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    inactive?: true
    createdDate?: true
    updatedDate?: true
  }

  export type StreamCountAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    inactive?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stream to aggregate.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned streams
    **/
    _count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }




  export type streamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: streamWhereInput
    orderBy?: streamOrderByWithAggregationInput | streamOrderByWithAggregationInput[]
    by: StreamScalarFieldEnum[] | StreamScalarFieldEnum
    having?: streamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamCountAggregateInputType | true
    _min?: StreamMinAggregateInputType
    _max?: StreamMaxAggregateInputType
  }

  export type StreamGroupByOutputType = {
    id: string
    url: string
    userId: string
    inactive: boolean
    createdDate: Date
    updatedDate: Date | null
    _count: StreamCountAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends streamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamGroupByOutputType[P]>
            : GetScalarType<T[P], StreamGroupByOutputType[P]>
        }
      >
    >


  export type streamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    inactive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    live?: boolean | stream$liveArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type streamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    inactive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type streamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    inactive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type streamSelectScalar = {
    id?: boolean
    url?: boolean
    userId?: boolean
    inactive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type streamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "userId" | "inactive" | "createdDate" | "updatedDate", ExtArgs["result"]["stream"]>
  export type streamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    live?: boolean | stream$liveArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type streamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type streamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $streamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stream"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      live: Prisma.$livePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      userId: string
      inactive: boolean
      createdDate: Date
      updatedDate: Date | null
    }, ExtArgs["result"]["stream"]>
    composites: {}
  }

  type streamGetPayload<S extends boolean | null | undefined | streamDefaultArgs> = $Result.GetResult<Prisma.$streamPayload, S>

  type streamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<streamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamCountAggregateInputType | true
    }

  export interface streamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stream'], meta: { name: 'stream' } }
    /**
     * Find zero or one Stream that matches the filter.
     * @param {streamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends streamFindUniqueArgs>(args: SelectSubset<T, streamFindUniqueArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stream that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {streamFindUniqueOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends streamFindUniqueOrThrowArgs>(args: SelectSubset<T, streamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends streamFindFirstArgs>(args?: SelectSubset<T, streamFindFirstArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamFindFirstOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends streamFindFirstOrThrowArgs>(args?: SelectSubset<T, streamFindFirstOrThrowArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamWithIdOnly = await prisma.stream.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends streamFindManyArgs>(args?: SelectSubset<T, streamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stream.
     * @param {streamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
     */
    create<T extends streamCreateArgs>(args: SelectSubset<T, streamCreateArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streams.
     * @param {streamCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends streamCreateManyArgs>(args?: SelectSubset<T, streamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {streamCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends streamCreateManyAndReturnArgs>(args?: SelectSubset<T, streamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stream.
     * @param {streamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
     */
    delete<T extends streamDeleteArgs>(args: SelectSubset<T, streamDeleteArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stream.
     * @param {streamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends streamUpdateArgs>(args: SelectSubset<T, streamUpdateArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streams.
     * @param {streamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends streamDeleteManyArgs>(args?: SelectSubset<T, streamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends streamUpdateManyArgs>(args: SelectSubset<T, streamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams and returns the data updated in the database.
     * @param {streamUpdateManyAndReturnArgs} args - Arguments to update many Streams.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends streamUpdateManyAndReturnArgs>(args: SelectSubset<T, streamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stream.
     * @param {streamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
     */
    upsert<T extends streamUpsertArgs>(args: SelectSubset<T, streamUpsertArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends streamCountArgs>(
      args?: Subset<T, streamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): Prisma.PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends streamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: streamGroupByArgs['orderBy'] }
        : { orderBy?: streamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, streamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stream model
   */
  readonly fields: streamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__streamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    live<T extends stream$liveArgs<ExtArgs> = {}>(args?: Subset<T, stream$liveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stream model
   */
  interface streamFieldRefs {
    readonly id: FieldRef<"stream", 'String'>
    readonly url: FieldRef<"stream", 'String'>
    readonly userId: FieldRef<"stream", 'String'>
    readonly inactive: FieldRef<"stream", 'Boolean'>
    readonly createdDate: FieldRef<"stream", 'DateTime'>
    readonly updatedDate: FieldRef<"stream", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stream findUnique
   */
  export type streamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream findUniqueOrThrow
   */
  export type streamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream findFirst
   */
  export type streamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for streams.
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * stream findFirstOrThrow
   */
  export type streamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for streams.
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * stream findMany
   */
  export type streamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which streams to fetch.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing streams.
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * stream create
   */
  export type streamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * The data needed to create a stream.
     */
    data: XOR<streamCreateInput, streamUncheckedCreateInput>
  }

  /**
   * stream createMany
   */
  export type streamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many streams.
     */
    data: streamCreateManyInput | streamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stream createManyAndReturn
   */
  export type streamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * The data used to create many streams.
     */
    data: streamCreateManyInput | streamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stream update
   */
  export type streamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * The data needed to update a stream.
     */
    data: XOR<streamUpdateInput, streamUncheckedUpdateInput>
    /**
     * Choose, which stream to update.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream updateMany
   */
  export type streamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update streams.
     */
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyInput>
    /**
     * Filter which streams to update
     */
    where?: streamWhereInput
    /**
     * Limit how many streams to update.
     */
    limit?: number
  }

  /**
   * stream updateManyAndReturn
   */
  export type streamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * The data used to update streams.
     */
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyInput>
    /**
     * Filter which streams to update
     */
    where?: streamWhereInput
    /**
     * Limit how many streams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stream upsert
   */
  export type streamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * The filter to search for the stream to update in case it exists.
     */
    where: streamWhereUniqueInput
    /**
     * In case the stream found by the `where` argument doesn't exist, create a new stream with this data.
     */
    create: XOR<streamCreateInput, streamUncheckedCreateInput>
    /**
     * In case the stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<streamUpdateInput, streamUncheckedUpdateInput>
  }

  /**
   * stream delete
   */
  export type streamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter which stream to delete.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream deleteMany
   */
  export type streamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which streams to delete
     */
    where?: streamWhereInput
    /**
     * Limit how many streams to delete.
     */
    limit?: number
  }

  /**
   * stream.live
   */
  export type stream$liveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    where?: liveWhereInput
    orderBy?: liveOrderByWithRelationInput | liveOrderByWithRelationInput[]
    cursor?: liveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * stream without action
   */
  export type streamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    isVerified: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
    photo: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    isVerified: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
    photo: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    roles: number
    isVerified: number
    createdDate: number
    updatedDate: number
    photo: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isVerified?: true
    createdDate?: true
    updatedDate?: true
    photo?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    isVerified?: true
    createdDate?: true
    updatedDate?: true
    photo?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    roles?: true
    isVerified?: true
    createdDate?: true
    updatedDate?: true
    photo?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    roles: string[]
    isVerified: boolean
    createdDate: Date
    updatedDate: Date | null
    photo: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    isVerified?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    photo?: boolean
    stream?: boolean | user$streamArgs<ExtArgs>
    live?: boolean | user$liveArgs<ExtArgs>
    report?: boolean | user$reportArgs<ExtArgs>
    audit?: boolean | user$auditArgs<ExtArgs>
    notification?: boolean | user$notificationArgs<ExtArgs>
    authentication?: boolean | user$authenticationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    isVerified?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    photo?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    isVerified?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    photo?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    roles?: boolean
    isVerified?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    photo?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "roles" | "isVerified" | "createdDate" | "updatedDate" | "photo", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | user$streamArgs<ExtArgs>
    live?: boolean | user$liveArgs<ExtArgs>
    report?: boolean | user$reportArgs<ExtArgs>
    audit?: boolean | user$auditArgs<ExtArgs>
    notification?: boolean | user$notificationArgs<ExtArgs>
    authentication?: boolean | user$authenticationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      stream: Prisma.$streamPayload<ExtArgs>[]
      live: Prisma.$livePayload<ExtArgs>[]
      report: Prisma.$reportPayload<ExtArgs>[]
      audit: Prisma.$auditPayload<ExtArgs>[]
      notification: Prisma.$notificationPayload<ExtArgs>[]
      authentication: Prisma.$authenticationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      roles: string[]
      isVerified: boolean
      createdDate: Date
      updatedDate: Date | null
      photo: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stream<T extends user$streamArgs<ExtArgs> = {}>(args?: Subset<T, user$streamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    live<T extends user$liveArgs<ExtArgs> = {}>(args?: Subset<T, user$liveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends user$reportArgs<ExtArgs> = {}>(args?: Subset<T, user$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit<T extends user$auditArgs<ExtArgs> = {}>(args?: Subset<T, user$auditArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends user$notificationArgs<ExtArgs> = {}>(args?: Subset<T, user$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authentication<T extends user$authenticationArgs<ExtArgs> = {}>(args?: Subset<T, user$authenticationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly roles: FieldRef<"user", 'String[]'>
    readonly isVerified: FieldRef<"user", 'Boolean'>
    readonly createdDate: FieldRef<"user", 'DateTime'>
    readonly updatedDate: FieldRef<"user", 'DateTime'>
    readonly photo: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.stream
   */
  export type user$streamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    where?: streamWhereInput
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    cursor?: streamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * user.live
   */
  export type user$liveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the live
     */
    select?: liveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the live
     */
    omit?: liveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: liveInclude<ExtArgs> | null
    where?: liveWhereInput
    orderBy?: liveOrderByWithRelationInput | liveOrderByWithRelationInput[]
    cursor?: liveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveScalarFieldEnum | LiveScalarFieldEnum[]
  }

  /**
   * user.report
   */
  export type user$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * user.audit
   */
  export type user$auditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    where?: auditWhereInput
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    cursor?: auditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * user.notification
   */
  export type user$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user.authentication
   */
  export type user$authenticationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    where?: authenticationWhereInput
    orderBy?: authenticationOrderByWithRelationInput | authenticationOrderByWithRelationInput[]
    cursor?: authenticationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model authentication
   */

  export type AggregateAuthentication = {
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  export type AuthenticationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    description: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type AuthenticationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    description: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type AuthenticationCountAggregateOutputType = {
    id: number
    userId: number
    ipAddress: number
    description: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type AuthenticationMinAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    description?: true
    createdDate?: true
    updatedDate?: true
  }

  export type AuthenticationMaxAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    description?: true
    createdDate?: true
    updatedDate?: true
  }

  export type AuthenticationCountAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    description?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type AuthenticationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentication to aggregate.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationOrderByWithRelationInput | authenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authentications
    **/
    _count?: true | AuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticationMaxAggregateInputType
  }

  export type GetAuthenticationAggregateType<T extends AuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentication[P]>
      : GetScalarType<T[P], AggregateAuthentication[P]>
  }




  export type authenticationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authenticationWhereInput
    orderBy?: authenticationOrderByWithAggregationInput | authenticationOrderByWithAggregationInput[]
    by: AuthenticationScalarFieldEnum[] | AuthenticationScalarFieldEnum
    having?: authenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticationCountAggregateInputType | true
    _min?: AuthenticationMinAggregateInputType
    _max?: AuthenticationMaxAggregateInputType
  }

  export type AuthenticationGroupByOutputType = {
    id: string
    userId: string
    ipAddress: string | null
    description: string | null
    createdDate: Date
    updatedDate: Date | null
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  type GetAuthenticationGroupByPayload<T extends authenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type authenticationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    description?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authentication"]>

  export type authenticationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    description?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authentication"]>

  export type authenticationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    description?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authentication"]>

  export type authenticationSelectScalar = {
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    description?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type authenticationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ipAddress" | "description" | "createdDate" | "updatedDate", ExtArgs["result"]["authentication"]>
  export type authenticationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type authenticationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type authenticationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $authenticationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authentication"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ipAddress: string | null
      description: string | null
      createdDate: Date
      updatedDate: Date | null
    }, ExtArgs["result"]["authentication"]>
    composites: {}
  }

  type authenticationGetPayload<S extends boolean | null | undefined | authenticationDefaultArgs> = $Result.GetResult<Prisma.$authenticationPayload, S>

  type authenticationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authenticationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticationCountAggregateInputType | true
    }

  export interface authenticationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authentication'], meta: { name: 'authentication' } }
    /**
     * Find zero or one Authentication that matches the filter.
     * @param {authenticationFindUniqueArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authenticationFindUniqueArgs>(args: SelectSubset<T, authenticationFindUniqueArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authentication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authenticationFindUniqueOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authenticationFindUniqueOrThrowArgs>(args: SelectSubset<T, authenticationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationFindFirstArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authenticationFindFirstArgs>(args?: SelectSubset<T, authenticationFindFirstArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationFindFirstOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authenticationFindFirstOrThrowArgs>(args?: SelectSubset<T, authenticationFindFirstOrThrowArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentications
     * const authentications = await prisma.authentication.findMany()
     * 
     * // Get first 10 Authentications
     * const authentications = await prisma.authentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticationWithIdOnly = await prisma.authentication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authenticationFindManyArgs>(args?: SelectSubset<T, authenticationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authentication.
     * @param {authenticationCreateArgs} args - Arguments to create a Authentication.
     * @example
     * // Create one Authentication
     * const Authentication = await prisma.authentication.create({
     *   data: {
     *     // ... data to create a Authentication
     *   }
     * })
     * 
     */
    create<T extends authenticationCreateArgs>(args: SelectSubset<T, authenticationCreateArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authentications.
     * @param {authenticationCreateManyArgs} args - Arguments to create many Authentications.
     * @example
     * // Create many Authentications
     * const authentication = await prisma.authentication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authenticationCreateManyArgs>(args?: SelectSubset<T, authenticationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authentications and returns the data saved in the database.
     * @param {authenticationCreateManyAndReturnArgs} args - Arguments to create many Authentications.
     * @example
     * // Create many Authentications
     * const authentication = await prisma.authentication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authentications and only return the `id`
     * const authenticationWithIdOnly = await prisma.authentication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authenticationCreateManyAndReturnArgs>(args?: SelectSubset<T, authenticationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authentication.
     * @param {authenticationDeleteArgs} args - Arguments to delete one Authentication.
     * @example
     * // Delete one Authentication
     * const Authentication = await prisma.authentication.delete({
     *   where: {
     *     // ... filter to delete one Authentication
     *   }
     * })
     * 
     */
    delete<T extends authenticationDeleteArgs>(args: SelectSubset<T, authenticationDeleteArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authentication.
     * @param {authenticationUpdateArgs} args - Arguments to update one Authentication.
     * @example
     * // Update one Authentication
     * const authentication = await prisma.authentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authenticationUpdateArgs>(args: SelectSubset<T, authenticationUpdateArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authentications.
     * @param {authenticationDeleteManyArgs} args - Arguments to filter Authentications to delete.
     * @example
     * // Delete a few Authentications
     * const { count } = await prisma.authentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authenticationDeleteManyArgs>(args?: SelectSubset<T, authenticationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentications
     * const authentication = await prisma.authentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authenticationUpdateManyArgs>(args: SelectSubset<T, authenticationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications and returns the data updated in the database.
     * @param {authenticationUpdateManyAndReturnArgs} args - Arguments to update many Authentications.
     * @example
     * // Update many Authentications
     * const authentication = await prisma.authentication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authentications and only return the `id`
     * const authenticationWithIdOnly = await prisma.authentication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authenticationUpdateManyAndReturnArgs>(args: SelectSubset<T, authenticationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authentication.
     * @param {authenticationUpsertArgs} args - Arguments to update or create a Authentication.
     * @example
     * // Update or create a Authentication
     * const authentication = await prisma.authentication.upsert({
     *   create: {
     *     // ... data to create a Authentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentication we want to update
     *   }
     * })
     */
    upsert<T extends authenticationUpsertArgs>(args: SelectSubset<T, authenticationUpsertArgs<ExtArgs>>): Prisma__authenticationClient<$Result.GetResult<Prisma.$authenticationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationCountArgs} args - Arguments to filter Authentications to count.
     * @example
     * // Count the number of Authentications
     * const count = await prisma.authentication.count({
     *   where: {
     *     // ... the filter for the Authentications we want to count
     *   }
     * })
    **/
    count<T extends authenticationCountArgs>(
      args?: Subset<T, authenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthenticationAggregateArgs>(args: Subset<T, AuthenticationAggregateArgs>): Prisma.PrismaPromise<GetAuthenticationAggregateType<T>>

    /**
     * Group by Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authenticationGroupByArgs['orderBy'] }
        : { orderBy?: authenticationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authentication model
   */
  readonly fields: authenticationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authenticationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authentication model
   */
  interface authenticationFieldRefs {
    readonly id: FieldRef<"authentication", 'String'>
    readonly userId: FieldRef<"authentication", 'String'>
    readonly ipAddress: FieldRef<"authentication", 'String'>
    readonly description: FieldRef<"authentication", 'String'>
    readonly createdDate: FieldRef<"authentication", 'DateTime'>
    readonly updatedDate: FieldRef<"authentication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authentication findUnique
   */
  export type authenticationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * Filter, which authentication to fetch.
     */
    where: authenticationWhereUniqueInput
  }

  /**
   * authentication findUniqueOrThrow
   */
  export type authenticationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * Filter, which authentication to fetch.
     */
    where: authenticationWhereUniqueInput
  }

  /**
   * authentication findFirst
   */
  export type authenticationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * Filter, which authentication to fetch.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationOrderByWithRelationInput | authenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentications.
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }

  /**
   * authentication findFirstOrThrow
   */
  export type authenticationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * Filter, which authentication to fetch.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationOrderByWithRelationInput | authenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentications.
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }

  /**
   * authentication findMany
   */
  export type authenticationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * Filter, which authentications to fetch.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: authenticationOrderByWithRelationInput | authenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authentications.
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }

  /**
   * authentication create
   */
  export type authenticationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * The data needed to create a authentication.
     */
    data: XOR<authenticationCreateInput, authenticationUncheckedCreateInput>
  }

  /**
   * authentication createMany
   */
  export type authenticationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authentications.
     */
    data: authenticationCreateManyInput | authenticationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authentication createManyAndReturn
   */
  export type authenticationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * The data used to create many authentications.
     */
    data: authenticationCreateManyInput | authenticationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authentication update
   */
  export type authenticationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * The data needed to update a authentication.
     */
    data: XOR<authenticationUpdateInput, authenticationUncheckedUpdateInput>
    /**
     * Choose, which authentication to update.
     */
    where: authenticationWhereUniqueInput
  }

  /**
   * authentication updateMany
   */
  export type authenticationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authentications.
     */
    data: XOR<authenticationUpdateManyMutationInput, authenticationUncheckedUpdateManyInput>
    /**
     * Filter which authentications to update
     */
    where?: authenticationWhereInput
    /**
     * Limit how many authentications to update.
     */
    limit?: number
  }

  /**
   * authentication updateManyAndReturn
   */
  export type authenticationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * The data used to update authentications.
     */
    data: XOR<authenticationUpdateManyMutationInput, authenticationUncheckedUpdateManyInput>
    /**
     * Filter which authentications to update
     */
    where?: authenticationWhereInput
    /**
     * Limit how many authentications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authentication upsert
   */
  export type authenticationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * The filter to search for the authentication to update in case it exists.
     */
    where: authenticationWhereUniqueInput
    /**
     * In case the authentication found by the `where` argument doesn't exist, create a new authentication with this data.
     */
    create: XOR<authenticationCreateInput, authenticationUncheckedCreateInput>
    /**
     * In case the authentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authenticationUpdateInput, authenticationUncheckedUpdateInput>
  }

  /**
   * authentication delete
   */
  export type authenticationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
    /**
     * Filter which authentication to delete.
     */
    where: authenticationWhereUniqueInput
  }

  /**
   * authentication deleteMany
   */
  export type authenticationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentications to delete
     */
    where?: authenticationWhereInput
    /**
     * Limit how many authentications to delete.
     */
    limit?: number
  }

  /**
   * authentication without action
   */
  export type authenticationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentication
     */
    omit?: authenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authenticationInclude<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    code: number | null
  }

  export type LogsSumAggregateOutputType = {
    code: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: string | null
    type: string | null
    code: number | null
    ip: string | null
    message: string | null
    createdDate: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    code: number | null
    ip: string | null
    message: string | null
    createdDate: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    type: number
    code: number
    ip: number
    message: number
    createdDate: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    code?: true
  }

  export type LogsSumAggregateInputType = {
    code?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    type?: true
    code?: true
    ip?: true
    message?: true
    createdDate?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    type?: true
    code?: true
    ip?: true
    message?: true
    createdDate?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    type?: true
    code?: true
    ip?: true
    message?: true
    createdDate?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: string
    type: string
    code: number | null
    ip: string | null
    message: string
    createdDate: Date | null
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    ip?: boolean
    message?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["logs"]>

  export type logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    ip?: boolean
    message?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["logs"]>

  export type logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    ip?: boolean
    message?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["logs"]>

  export type logsSelectScalar = {
    id?: boolean
    type?: boolean
    code?: boolean
    ip?: boolean
    message?: boolean
    createdDate?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "code" | "ip" | "message" | "createdDate", ExtArgs["result"]["logs"]>

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      code: number | null
      ip: string | null
      message: string
      createdDate: Date | null
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {logsCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logsCreateManyAndReturnArgs>(args?: SelectSubset<T, logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {logsUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logsUpdateManyAndReturnArgs>(args: SelectSubset<T, logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id: FieldRef<"logs", 'String'>
    readonly type: FieldRef<"logs", 'String'>
    readonly code: FieldRef<"logs", 'Int'>
    readonly ip: FieldRef<"logs", 'String'>
    readonly message: FieldRef<"logs", 'String'>
    readonly createdDate: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs createManyAndReturn
   */
  export type logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs updateManyAndReturn
   */
  export type logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
  }


  /**
   * Model audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditMinAggregateOutputType = {
    id: string | null
    entityName: string | null
    entityId: string | null
    fieldName: string | null
    fieldValue: string | null
    userId: string | null
    createdDate: Date | null
  }

  export type AuditMaxAggregateOutputType = {
    id: string | null
    entityName: string | null
    entityId: string | null
    fieldName: string | null
    fieldValue: string | null
    userId: string | null
    createdDate: Date | null
  }

  export type AuditCountAggregateOutputType = {
    id: number
    entityName: number
    entityId: number
    fieldName: number
    fieldValue: number
    userId: number
    createdDate: number
    _all: number
  }


  export type AuditMinAggregateInputType = {
    id?: true
    entityName?: true
    entityId?: true
    fieldName?: true
    fieldValue?: true
    userId?: true
    createdDate?: true
  }

  export type AuditMaxAggregateInputType = {
    id?: true
    entityName?: true
    entityId?: true
    fieldName?: true
    fieldValue?: true
    userId?: true
    createdDate?: true
  }

  export type AuditCountAggregateInputType = {
    id?: true
    entityName?: true
    entityId?: true
    fieldName?: true
    fieldValue?: true
    userId?: true
    createdDate?: true
    _all?: true
  }

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit to aggregate.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type auditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput
    orderBy?: auditOrderByWithAggregationInput | auditOrderByWithAggregationInput[]
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum
    having?: auditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }

  export type AuditGroupByOutputType = {
    id: string
    entityName: string
    entityId: string
    fieldName: string | null
    fieldValue: string | null
    userId: string | null
    createdDate: Date | null
    _count: AuditCountAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends auditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type auditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityName?: boolean
    entityId?: boolean
    fieldName?: boolean
    fieldValue?: boolean
    userId?: boolean
    createdDate?: boolean
    user?: boolean | audit$userArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type auditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityName?: boolean
    entityId?: boolean
    fieldName?: boolean
    fieldValue?: boolean
    userId?: boolean
    createdDate?: boolean
    user?: boolean | audit$userArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type auditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityName?: boolean
    entityId?: boolean
    fieldName?: boolean
    fieldValue?: boolean
    userId?: boolean
    createdDate?: boolean
    user?: boolean | audit$userArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type auditSelectScalar = {
    id?: boolean
    entityName?: boolean
    entityId?: boolean
    fieldName?: boolean
    fieldValue?: boolean
    userId?: boolean
    createdDate?: boolean
  }

  export type auditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entityName" | "entityId" | "fieldName" | "fieldValue" | "userId" | "createdDate", ExtArgs["result"]["audit"]>
  export type auditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | audit$userArgs<ExtArgs>
  }
  export type auditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | audit$userArgs<ExtArgs>
  }
  export type auditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | audit$userArgs<ExtArgs>
  }

  export type $auditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entityName: string
      entityId: string
      fieldName: string | null
      fieldValue: string | null
      userId: string | null
      createdDate: Date | null
    }, ExtArgs["result"]["audit"]>
    composites: {}
  }

  type auditGetPayload<S extends boolean | null | undefined | auditDefaultArgs> = $Result.GetResult<Prisma.$auditPayload, S>

  type auditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCountAggregateInputType | true
    }

  export interface auditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit'], meta: { name: 'audit' } }
    /**
     * Find zero or one Audit that matches the filter.
     * @param {auditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auditFindUniqueArgs>(args: SelectSubset<T, auditFindUniqueArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auditFindUniqueOrThrowArgs>(args: SelectSubset<T, auditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auditFindFirstArgs>(args?: SelectSubset<T, auditFindFirstArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auditFindFirstOrThrowArgs>(args?: SelectSubset<T, auditFindFirstOrThrowArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auditFindManyArgs>(args?: SelectSubset<T, auditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit.
     * @param {auditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
     */
    create<T extends auditCreateArgs>(args: SelectSubset<T, auditCreateArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audits.
     * @param {auditCreateManyArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auditCreateManyArgs>(args?: SelectSubset<T, auditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audits and returns the data saved in the database.
     * @param {auditCreateManyAndReturnArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audits and only return the `id`
     * const auditWithIdOnly = await prisma.audit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auditCreateManyAndReturnArgs>(args?: SelectSubset<T, auditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit.
     * @param {auditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
     */
    delete<T extends auditDeleteArgs>(args: SelectSubset<T, auditDeleteArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit.
     * @param {auditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auditUpdateArgs>(args: SelectSubset<T, auditUpdateArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audits.
     * @param {auditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auditDeleteManyArgs>(args?: SelectSubset<T, auditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auditUpdateManyArgs>(args: SelectSubset<T, auditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits and returns the data updated in the database.
     * @param {auditUpdateManyAndReturnArgs} args - Arguments to update many Audits.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audits and only return the `id`
     * const auditWithIdOnly = await prisma.audit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auditUpdateManyAndReturnArgs>(args: SelectSubset<T, auditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit.
     * @param {auditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     */
    upsert<T extends auditUpsertArgs>(args: SelectSubset<T, auditUpsertArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends auditCountArgs>(
      args?: Subset<T, auditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditGroupByArgs['orderBy'] }
        : { orderBy?: auditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit model
   */
  readonly fields: auditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends audit$userArgs<ExtArgs> = {}>(args?: Subset<T, audit$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit model
   */
  interface auditFieldRefs {
    readonly id: FieldRef<"audit", 'String'>
    readonly entityName: FieldRef<"audit", 'String'>
    readonly entityId: FieldRef<"audit", 'String'>
    readonly fieldName: FieldRef<"audit", 'String'>
    readonly fieldValue: FieldRef<"audit", 'String'>
    readonly userId: FieldRef<"audit", 'String'>
    readonly createdDate: FieldRef<"audit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit findUnique
   */
  export type auditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit findUniqueOrThrow
   */
  export type auditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit findFirst
   */
  export type auditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit findFirstOrThrow
   */
  export type auditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit findMany
   */
  export type auditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audits to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit create
   */
  export type auditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * The data needed to create a audit.
     */
    data: XOR<auditCreateInput, auditUncheckedCreateInput>
  }

  /**
   * audit createMany
   */
  export type auditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audits.
     */
    data: auditCreateManyInput | auditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit createManyAndReturn
   */
  export type auditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * The data used to create many audits.
     */
    data: auditCreateManyInput | auditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit update
   */
  export type auditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * The data needed to update a audit.
     */
    data: XOR<auditUpdateInput, auditUncheckedUpdateInput>
    /**
     * Choose, which audit to update.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit updateMany
   */
  export type auditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audits.
     */
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyInput>
    /**
     * Filter which audits to update
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to update.
     */
    limit?: number
  }

  /**
   * audit updateManyAndReturn
   */
  export type auditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * The data used to update audits.
     */
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyInput>
    /**
     * Filter which audits to update
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit upsert
   */
  export type auditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * The filter to search for the audit to update in case it exists.
     */
    where: auditWhereUniqueInput
    /**
     * In case the audit found by the `where` argument doesn't exist, create a new audit with this data.
     */
    create: XOR<auditCreateInput, auditUncheckedCreateInput>
    /**
     * In case the audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditUpdateInput, auditUncheckedUpdateInput>
  }

  /**
   * audit delete
   */
  export type auditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter which audit to delete.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit deleteMany
   */
  export type auditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audits to delete
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to delete.
     */
    limit?: number
  }

  /**
   * audit.user
   */
  export type audit$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * audit without action
   */
  export type auditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    link: string | null
    photo: string | null
    title: string | null
    description: string | null
    caption: string | null
    entityId: string | null
    entityName: string | null
    status: string | null
    userId: string | null
    createdDate: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    link: string | null
    photo: string | null
    title: string | null
    description: string | null
    caption: string | null
    entityId: string | null
    entityName: string | null
    status: string | null
    userId: string | null
    createdDate: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    link: number
    photo: number
    title: number
    description: number
    caption: number
    entityId: number
    entityName: number
    status: number
    userId: number
    createdDate: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    link?: true
    photo?: true
    title?: true
    description?: true
    caption?: true
    entityId?: true
    entityName?: true
    status?: true
    userId?: true
    createdDate?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    link?: true
    photo?: true
    title?: true
    description?: true
    caption?: true
    entityId?: true
    entityName?: true
    status?: true
    userId?: true
    createdDate?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    link?: true
    photo?: true
    title?: true
    description?: true
    caption?: true
    entityId?: true
    entityName?: true
    status?: true
    userId?: true
    createdDate?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    link: string | null
    photo: string | null
    title: string
    description: string | null
    caption: string | null
    entityId: string | null
    entityName: string | null
    status: string | null
    userId: string
    createdDate: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    photo?: boolean
    title?: boolean
    description?: boolean
    caption?: boolean
    entityId?: boolean
    entityName?: boolean
    status?: boolean
    userId?: boolean
    createdDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    photo?: boolean
    title?: boolean
    description?: boolean
    caption?: boolean
    entityId?: boolean
    entityName?: boolean
    status?: boolean
    userId?: boolean
    createdDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    photo?: boolean
    title?: boolean
    description?: boolean
    caption?: boolean
    entityId?: boolean
    entityName?: boolean
    status?: boolean
    userId?: boolean
    createdDate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    link?: boolean
    photo?: boolean
    title?: boolean
    description?: boolean
    caption?: boolean
    entityId?: boolean
    entityName?: boolean
    status?: boolean
    userId?: boolean
    createdDate?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "photo" | "title" | "description" | "caption" | "entityId" | "entityName" | "status" | "userId" | "createdDate", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      link: string | null
      photo: string | null
      title: string
      description: string | null
      caption: string | null
      entityId: string | null
      entityName: string | null
      status: string | null
      userId: string
      createdDate: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'String'>
    readonly link: FieldRef<"notification", 'String'>
    readonly photo: FieldRef<"notification", 'String'>
    readonly title: FieldRef<"notification", 'String'>
    readonly description: FieldRef<"notification", 'String'>
    readonly caption: FieldRef<"notification", 'String'>
    readonly entityId: FieldRef<"notification", 'String'>
    readonly entityName: FieldRef<"notification", 'String'>
    readonly status: FieldRef<"notification", 'String'>
    readonly userId: FieldRef<"notification", 'String'>
    readonly createdDate: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LiveScalarFieldEnum: {
    id: 'id',
    path: 'path',
    streamId: 'streamId',
    userId: 'userId',
    expiryDate: 'expiryDate',
    expiryTimeInMinutes: 'expiryTimeInMinutes',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type LiveScalarFieldEnum = (typeof LiveScalarFieldEnum)[keyof typeof LiveScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    liveId: 'liveId',
    userId: 'userId',
    thumbnailUrl: 'thumbnailUrl',
    recordUrl: 'recordUrl',
    expiryTimeInMinutes: 'expiryTimeInMinutes',
    calculatedClass: 'calculatedClass',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ReportItemsScalarFieldEnum: {
    id: 'id',
    data: 'data',
    reportId: 'reportId',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type ReportItemsScalarFieldEnum = (typeof ReportItemsScalarFieldEnum)[keyof typeof ReportItemsScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    id: 'id',
    url: 'url',
    userId: 'userId',
    inactive: 'inactive',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    roles: 'roles',
    isVerified: 'isVerified',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate',
    photo: 'photo'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthenticationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ipAddress: 'ipAddress',
    description: 'description',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type AuthenticationScalarFieldEnum = (typeof AuthenticationScalarFieldEnum)[keyof typeof AuthenticationScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    code: 'code',
    ip: 'ip',
    message: 'message',
    createdDate: 'createdDate'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const AuditScalarFieldEnum: {
    id: 'id',
    entityName: 'entityName',
    entityId: 'entityId',
    fieldName: 'fieldName',
    fieldValue: 'fieldValue',
    userId: 'userId',
    createdDate: 'createdDate'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    link: 'link',
    photo: 'photo',
    title: 'title',
    description: 'description',
    caption: 'caption',
    entityId: 'entityId',
    entityName: 'entityName',
    status: 'status',
    userId: 'userId',
    createdDate: 'createdDate'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type liveWhereInput = {
    AND?: liveWhereInput | liveWhereInput[]
    OR?: liveWhereInput[]
    NOT?: liveWhereInput | liveWhereInput[]
    id?: StringFilter<"live"> | string
    path?: StringFilter<"live"> | string
    streamId?: StringFilter<"live"> | string
    userId?: StringFilter<"live"> | string
    expiryDate?: DateTimeNullableFilter<"live"> | Date | string | null
    expiryTimeInMinutes?: IntNullableFilter<"live"> | number | null
    createdDate?: DateTimeFilter<"live"> | Date | string
    updatedDate?: DateTimeNullableFilter<"live"> | Date | string | null
    stream?: XOR<StreamScalarRelationFilter, streamWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    report?: ReportListRelationFilter
  }

  export type liveOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    expiryTimeInMinutes?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    stream?: streamOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    report?: reportOrderByRelationAggregateInput
  }

  export type liveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: liveWhereInput | liveWhereInput[]
    OR?: liveWhereInput[]
    NOT?: liveWhereInput | liveWhereInput[]
    path?: StringFilter<"live"> | string
    streamId?: StringFilter<"live"> | string
    userId?: StringFilter<"live"> | string
    expiryDate?: DateTimeNullableFilter<"live"> | Date | string | null
    expiryTimeInMinutes?: IntNullableFilter<"live"> | number | null
    createdDate?: DateTimeFilter<"live"> | Date | string
    updatedDate?: DateTimeNullableFilter<"live"> | Date | string | null
    stream?: XOR<StreamScalarRelationFilter, streamWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    report?: ReportListRelationFilter
  }, "id">

  export type liveOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    expiryTimeInMinutes?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: liveCountOrderByAggregateInput
    _avg?: liveAvgOrderByAggregateInput
    _max?: liveMaxOrderByAggregateInput
    _min?: liveMinOrderByAggregateInput
    _sum?: liveSumOrderByAggregateInput
  }

  export type liveScalarWhereWithAggregatesInput = {
    AND?: liveScalarWhereWithAggregatesInput | liveScalarWhereWithAggregatesInput[]
    OR?: liveScalarWhereWithAggregatesInput[]
    NOT?: liveScalarWhereWithAggregatesInput | liveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"live"> | string
    path?: StringWithAggregatesFilter<"live"> | string
    streamId?: StringWithAggregatesFilter<"live"> | string
    userId?: StringWithAggregatesFilter<"live"> | string
    expiryDate?: DateTimeNullableWithAggregatesFilter<"live"> | Date | string | null
    expiryTimeInMinutes?: IntNullableWithAggregatesFilter<"live"> | number | null
    createdDate?: DateTimeWithAggregatesFilter<"live"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"live"> | Date | string | null
  }

  export type reportWhereInput = {
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    id?: StringFilter<"report"> | string
    title?: StringNullableFilter<"report"> | string | null
    description?: StringNullableFilter<"report"> | string | null
    liveId?: StringFilter<"report"> | string
    userId?: StringFilter<"report"> | string
    thumbnailUrl?: StringNullableFilter<"report"> | string | null
    recordUrl?: StringNullableFilter<"report"> | string | null
    expiryTimeInMinutes?: IntNullableFilter<"report"> | number | null
    calculatedClass?: JsonNullableFilter<"report">
    createdDate?: DateTimeFilter<"report"> | Date | string
    updatedDate?: DateTimeNullableFilter<"report"> | Date | string | null
    live?: XOR<LiveScalarRelationFilter, liveWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    reportItems?: ReportItemsListRelationFilter
  }

  export type reportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    liveId?: SortOrder
    userId?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    recordUrl?: SortOrderInput | SortOrder
    expiryTimeInMinutes?: SortOrderInput | SortOrder
    calculatedClass?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    live?: liveOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    reportItems?: reportItemsOrderByRelationAggregateInput
  }

  export type reportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    title?: StringNullableFilter<"report"> | string | null
    description?: StringNullableFilter<"report"> | string | null
    liveId?: StringFilter<"report"> | string
    userId?: StringFilter<"report"> | string
    thumbnailUrl?: StringNullableFilter<"report"> | string | null
    recordUrl?: StringNullableFilter<"report"> | string | null
    expiryTimeInMinutes?: IntNullableFilter<"report"> | number | null
    calculatedClass?: JsonNullableFilter<"report">
    createdDate?: DateTimeFilter<"report"> | Date | string
    updatedDate?: DateTimeNullableFilter<"report"> | Date | string | null
    live?: XOR<LiveScalarRelationFilter, liveWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    reportItems?: ReportItemsListRelationFilter
  }, "id">

  export type reportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    liveId?: SortOrder
    userId?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    recordUrl?: SortOrderInput | SortOrder
    expiryTimeInMinutes?: SortOrderInput | SortOrder
    calculatedClass?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: reportCountOrderByAggregateInput
    _avg?: reportAvgOrderByAggregateInput
    _max?: reportMaxOrderByAggregateInput
    _min?: reportMinOrderByAggregateInput
    _sum?: reportSumOrderByAggregateInput
  }

  export type reportScalarWhereWithAggregatesInput = {
    AND?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    OR?: reportScalarWhereWithAggregatesInput[]
    NOT?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"report"> | string
    title?: StringNullableWithAggregatesFilter<"report"> | string | null
    description?: StringNullableWithAggregatesFilter<"report"> | string | null
    liveId?: StringWithAggregatesFilter<"report"> | string
    userId?: StringWithAggregatesFilter<"report"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"report"> | string | null
    recordUrl?: StringNullableWithAggregatesFilter<"report"> | string | null
    expiryTimeInMinutes?: IntNullableWithAggregatesFilter<"report"> | number | null
    calculatedClass?: JsonNullableWithAggregatesFilter<"report">
    createdDate?: DateTimeWithAggregatesFilter<"report"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"report"> | Date | string | null
  }

  export type reportItemsWhereInput = {
    AND?: reportItemsWhereInput | reportItemsWhereInput[]
    OR?: reportItemsWhereInput[]
    NOT?: reportItemsWhereInput | reportItemsWhereInput[]
    id?: StringFilter<"reportItems"> | string
    data?: StringNullableFilter<"reportItems"> | string | null
    reportId?: StringFilter<"reportItems"> | string
    createdDate?: DateTimeFilter<"reportItems"> | Date | string
    updatedDate?: DateTimeNullableFilter<"reportItems"> | Date | string | null
    report?: XOR<ReportScalarRelationFilter, reportWhereInput>
  }

  export type reportItemsOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    reportId?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    report?: reportOrderByWithRelationInput
  }

  export type reportItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reportItemsWhereInput | reportItemsWhereInput[]
    OR?: reportItemsWhereInput[]
    NOT?: reportItemsWhereInput | reportItemsWhereInput[]
    data?: StringNullableFilter<"reportItems"> | string | null
    reportId?: StringFilter<"reportItems"> | string
    createdDate?: DateTimeFilter<"reportItems"> | Date | string
    updatedDate?: DateTimeNullableFilter<"reportItems"> | Date | string | null
    report?: XOR<ReportScalarRelationFilter, reportWhereInput>
  }, "id">

  export type reportItemsOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    reportId?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: reportItemsCountOrderByAggregateInput
    _max?: reportItemsMaxOrderByAggregateInput
    _min?: reportItemsMinOrderByAggregateInput
  }

  export type reportItemsScalarWhereWithAggregatesInput = {
    AND?: reportItemsScalarWhereWithAggregatesInput | reportItemsScalarWhereWithAggregatesInput[]
    OR?: reportItemsScalarWhereWithAggregatesInput[]
    NOT?: reportItemsScalarWhereWithAggregatesInput | reportItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reportItems"> | string
    data?: StringNullableWithAggregatesFilter<"reportItems"> | string | null
    reportId?: StringWithAggregatesFilter<"reportItems"> | string
    createdDate?: DateTimeWithAggregatesFilter<"reportItems"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"reportItems"> | Date | string | null
  }

  export type streamWhereInput = {
    AND?: streamWhereInput | streamWhereInput[]
    OR?: streamWhereInput[]
    NOT?: streamWhereInput | streamWhereInput[]
    id?: StringFilter<"stream"> | string
    url?: StringFilter<"stream"> | string
    userId?: StringFilter<"stream"> | string
    inactive?: BoolFilter<"stream"> | boolean
    createdDate?: DateTimeFilter<"stream"> | Date | string
    updatedDate?: DateTimeNullableFilter<"stream"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    live?: LiveListRelationFilter
  }

  export type streamOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    inactive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    live?: liveOrderByRelationAggregateInput
  }

  export type streamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: streamWhereInput | streamWhereInput[]
    OR?: streamWhereInput[]
    NOT?: streamWhereInput | streamWhereInput[]
    url?: StringFilter<"stream"> | string
    userId?: StringFilter<"stream"> | string
    inactive?: BoolFilter<"stream"> | boolean
    createdDate?: DateTimeFilter<"stream"> | Date | string
    updatedDate?: DateTimeNullableFilter<"stream"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    live?: LiveListRelationFilter
  }, "id">

  export type streamOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    inactive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: streamCountOrderByAggregateInput
    _max?: streamMaxOrderByAggregateInput
    _min?: streamMinOrderByAggregateInput
  }

  export type streamScalarWhereWithAggregatesInput = {
    AND?: streamScalarWhereWithAggregatesInput | streamScalarWhereWithAggregatesInput[]
    OR?: streamScalarWhereWithAggregatesInput[]
    NOT?: streamScalarWhereWithAggregatesInput | streamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"stream"> | string
    url?: StringWithAggregatesFilter<"stream"> | string
    userId?: StringWithAggregatesFilter<"stream"> | string
    inactive?: BoolWithAggregatesFilter<"stream"> | boolean
    createdDate?: DateTimeWithAggregatesFilter<"stream"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"stream"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    roles?: StringNullableListFilter<"user">
    isVerified?: BoolFilter<"user"> | boolean
    createdDate?: DateTimeFilter<"user"> | Date | string
    updatedDate?: DateTimeNullableFilter<"user"> | Date | string | null
    photo?: StringNullableFilter<"user"> | string | null
    stream?: StreamListRelationFilter
    live?: LiveListRelationFilter
    report?: ReportListRelationFilter
    audit?: AuditListRelationFilter
    notification?: NotificationListRelationFilter
    authentication?: AuthenticationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    isVerified?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    stream?: streamOrderByRelationAggregateInput
    live?: liveOrderByRelationAggregateInput
    report?: reportOrderByRelationAggregateInput
    audit?: auditOrderByRelationAggregateInput
    notification?: notificationOrderByRelationAggregateInput
    authentication?: authenticationOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    roles?: StringNullableListFilter<"user">
    isVerified?: BoolFilter<"user"> | boolean
    createdDate?: DateTimeFilter<"user"> | Date | string
    updatedDate?: DateTimeNullableFilter<"user"> | Date | string | null
    photo?: StringNullableFilter<"user"> | string | null
    stream?: StreamListRelationFilter
    live?: LiveListRelationFilter
    report?: ReportListRelationFilter
    audit?: AuditListRelationFilter
    notification?: NotificationListRelationFilter
    authentication?: AuthenticationListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    isVerified?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    roles?: StringNullableListFilter<"user">
    isVerified?: BoolWithAggregatesFilter<"user"> | boolean
    createdDate?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    photo?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type authenticationWhereInput = {
    AND?: authenticationWhereInput | authenticationWhereInput[]
    OR?: authenticationWhereInput[]
    NOT?: authenticationWhereInput | authenticationWhereInput[]
    id?: StringFilter<"authentication"> | string
    userId?: StringFilter<"authentication"> | string
    ipAddress?: StringNullableFilter<"authentication"> | string | null
    description?: StringNullableFilter<"authentication"> | string | null
    createdDate?: DateTimeFilter<"authentication"> | Date | string
    updatedDate?: DateTimeNullableFilter<"authentication"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type authenticationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type authenticationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: authenticationWhereInput | authenticationWhereInput[]
    OR?: authenticationWhereInput[]
    NOT?: authenticationWhereInput | authenticationWhereInput[]
    userId?: StringFilter<"authentication"> | string
    ipAddress?: StringNullableFilter<"authentication"> | string | null
    description?: StringNullableFilter<"authentication"> | string | null
    createdDate?: DateTimeFilter<"authentication"> | Date | string
    updatedDate?: DateTimeNullableFilter<"authentication"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type authenticationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: authenticationCountOrderByAggregateInput
    _max?: authenticationMaxOrderByAggregateInput
    _min?: authenticationMinOrderByAggregateInput
  }

  export type authenticationScalarWhereWithAggregatesInput = {
    AND?: authenticationScalarWhereWithAggregatesInput | authenticationScalarWhereWithAggregatesInput[]
    OR?: authenticationScalarWhereWithAggregatesInput[]
    NOT?: authenticationScalarWhereWithAggregatesInput | authenticationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authentication"> | string
    userId?: StringWithAggregatesFilter<"authentication"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"authentication"> | string | null
    description?: StringNullableWithAggregatesFilter<"authentication"> | string | null
    createdDate?: DateTimeWithAggregatesFilter<"authentication"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"authentication"> | Date | string | null
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id?: StringFilter<"logs"> | string
    type?: StringFilter<"logs"> | string
    code?: IntNullableFilter<"logs"> | number | null
    ip?: StringNullableFilter<"logs"> | string | null
    message?: StringFilter<"logs"> | string
    createdDate?: DateTimeNullableFilter<"logs"> | Date | string | null
  }

  export type logsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    message?: SortOrder
    createdDate?: SortOrderInput | SortOrder
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    type?: StringFilter<"logs"> | string
    code?: IntNullableFilter<"logs"> | number | null
    ip?: StringNullableFilter<"logs"> | string | null
    message?: StringFilter<"logs"> | string
    createdDate?: DateTimeNullableFilter<"logs"> | Date | string | null
  }, "id">

  export type logsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    message?: SortOrder
    createdDate?: SortOrderInput | SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"logs"> | string
    type?: StringWithAggregatesFilter<"logs"> | string
    code?: IntNullableWithAggregatesFilter<"logs"> | number | null
    ip?: StringNullableWithAggregatesFilter<"logs"> | string | null
    message?: StringWithAggregatesFilter<"logs"> | string
    createdDate?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
  }

  export type auditWhereInput = {
    AND?: auditWhereInput | auditWhereInput[]
    OR?: auditWhereInput[]
    NOT?: auditWhereInput | auditWhereInput[]
    id?: StringFilter<"audit"> | string
    entityName?: StringFilter<"audit"> | string
    entityId?: StringFilter<"audit"> | string
    fieldName?: StringNullableFilter<"audit"> | string | null
    fieldValue?: StringNullableFilter<"audit"> | string | null
    userId?: StringNullableFilter<"audit"> | string | null
    createdDate?: DateTimeNullableFilter<"audit"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type auditOrderByWithRelationInput = {
    id?: SortOrder
    entityName?: SortOrder
    entityId?: SortOrder
    fieldName?: SortOrderInput | SortOrder
    fieldValue?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdDate?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type auditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: auditWhereInput | auditWhereInput[]
    OR?: auditWhereInput[]
    NOT?: auditWhereInput | auditWhereInput[]
    entityName?: StringFilter<"audit"> | string
    entityId?: StringFilter<"audit"> | string
    fieldName?: StringNullableFilter<"audit"> | string | null
    fieldValue?: StringNullableFilter<"audit"> | string | null
    userId?: StringNullableFilter<"audit"> | string | null
    createdDate?: DateTimeNullableFilter<"audit"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type auditOrderByWithAggregationInput = {
    id?: SortOrder
    entityName?: SortOrder
    entityId?: SortOrder
    fieldName?: SortOrderInput | SortOrder
    fieldValue?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdDate?: SortOrderInput | SortOrder
    _count?: auditCountOrderByAggregateInput
    _max?: auditMaxOrderByAggregateInput
    _min?: auditMinOrderByAggregateInput
  }

  export type auditScalarWhereWithAggregatesInput = {
    AND?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[]
    OR?: auditScalarWhereWithAggregatesInput[]
    NOT?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"audit"> | string
    entityName?: StringWithAggregatesFilter<"audit"> | string
    entityId?: StringWithAggregatesFilter<"audit"> | string
    fieldName?: StringNullableWithAggregatesFilter<"audit"> | string | null
    fieldValue?: StringNullableWithAggregatesFilter<"audit"> | string | null
    userId?: StringNullableWithAggregatesFilter<"audit"> | string | null
    createdDate?: DateTimeNullableWithAggregatesFilter<"audit"> | Date | string | null
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: StringFilter<"notification"> | string
    link?: StringNullableFilter<"notification"> | string | null
    photo?: StringNullableFilter<"notification"> | string | null
    title?: StringFilter<"notification"> | string
    description?: StringNullableFilter<"notification"> | string | null
    caption?: StringNullableFilter<"notification"> | string | null
    entityId?: StringNullableFilter<"notification"> | string | null
    entityName?: StringNullableFilter<"notification"> | string | null
    status?: StringNullableFilter<"notification"> | string | null
    userId?: StringFilter<"notification"> | string
    createdDate?: DateTimeNullableFilter<"notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    entityName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdDate?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    link?: StringNullableFilter<"notification"> | string | null
    photo?: StringNullableFilter<"notification"> | string | null
    title?: StringFilter<"notification"> | string
    description?: StringNullableFilter<"notification"> | string | null
    caption?: StringNullableFilter<"notification"> | string | null
    entityId?: StringNullableFilter<"notification"> | string | null
    entityName?: StringNullableFilter<"notification"> | string | null
    status?: StringNullableFilter<"notification"> | string | null
    userId?: StringFilter<"notification"> | string
    createdDate?: DateTimeNullableFilter<"notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    entityName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdDate?: SortOrderInput | SortOrder
    _count?: notificationCountOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notification"> | string
    link?: StringNullableWithAggregatesFilter<"notification"> | string | null
    photo?: StringNullableWithAggregatesFilter<"notification"> | string | null
    title?: StringWithAggregatesFilter<"notification"> | string
    description?: StringNullableWithAggregatesFilter<"notification"> | string | null
    caption?: StringNullableWithAggregatesFilter<"notification"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"notification"> | string | null
    entityName?: StringNullableWithAggregatesFilter<"notification"> | string | null
    status?: StringNullableWithAggregatesFilter<"notification"> | string | null
    userId?: StringWithAggregatesFilter<"notification"> | string
    createdDate?: DateTimeNullableWithAggregatesFilter<"notification"> | Date | string | null
  }

  export type liveCreateInput = {
    id?: string
    path: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    stream: streamCreateNestedOneWithoutLiveInput
    user: userCreateNestedOneWithoutLiveInput
    report?: reportCreateNestedManyWithoutLiveInput
  }

  export type liveUncheckedCreateInput = {
    id?: string
    path: string
    streamId: string
    userId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    report?: reportUncheckedCreateNestedManyWithoutLiveInput
  }

  export type liveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stream?: streamUpdateOneRequiredWithoutLiveNestedInput
    user?: userUpdateOneRequiredWithoutLiveNestedInput
    report?: reportUpdateManyWithoutLiveNestedInput
  }

  export type liveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: reportUncheckedUpdateManyWithoutLiveNestedInput
  }

  export type liveCreateManyInput = {
    id?: string
    path: string
    streamId: string
    userId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type liveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type liveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    live: liveCreateNestedOneWithoutReportInput
    user: userCreateNestedOneWithoutReportInput
    reportItems?: reportItemsCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    liveId: string
    userId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    reportItems?: reportItemsUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live?: liveUpdateOneRequiredWithoutReportNestedInput
    user?: userUpdateOneRequiredWithoutReportNestedInput
    reportItems?: reportItemsUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    liveId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportItems?: reportItemsUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    liveId: string
    userId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    liveId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportItemsCreateInput = {
    id?: string
    data?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    report: reportCreateNestedOneWithoutReportItemsInput
  }

  export type reportItemsUncheckedCreateInput = {
    id?: string
    data?: string | null
    reportId: string
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: reportUpdateOneRequiredWithoutReportItemsNestedInput
  }

  export type reportItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportItemsCreateManyInput = {
    id?: string
    data?: string | null
    reportId: string
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type streamCreateInput = {
    id?: string
    url: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    user: userCreateNestedOneWithoutStreamInput
    live?: liveCreateNestedManyWithoutStreamInput
  }

  export type streamUncheckedCreateInput = {
    id?: string
    url: string
    userId: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    live?: liveUncheckedCreateNestedManyWithoutStreamInput
  }

  export type streamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutStreamNestedInput
    live?: liveUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live?: liveUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type streamCreateManyInput = {
    id?: string
    url: string
    userId: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type streamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type streamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamCreateNestedManyWithoutUserInput
    live?: liveCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    audit?: auditCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
    authentication?: authenticationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamUncheckedCreateNestedManyWithoutUserInput
    live?: liveUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
    authentication?: authenticationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUpdateManyWithoutUserNestedInput
    live?: liveUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    audit?: auditUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
    authentication?: authenticationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUncheckedUpdateManyWithoutUserNestedInput
    live?: liveUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
    authentication?: authenticationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type authenticationCreateInput = {
    id?: string
    ipAddress?: string | null
    description?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    user: userCreateNestedOneWithoutAuthenticationInput
  }

  export type authenticationUncheckedCreateInput = {
    id?: string
    userId: string
    ipAddress?: string | null
    description?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type authenticationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutAuthenticationNestedInput
  }

  export type authenticationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authenticationCreateManyInput = {
    id?: string
    userId: string
    ipAddress?: string | null
    description?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type authenticationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authenticationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateInput = {
    id?: string
    type?: string
    code?: number | null
    ip?: string | null
    message: string
    createdDate?: Date | string | null
  }

  export type logsUncheckedCreateInput = {
    id?: string
    type?: string
    code?: number | null
    ip?: string | null
    message: string
    createdDate?: Date | string | null
  }

  export type logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateManyInput = {
    id?: string
    type?: string
    code?: number | null
    ip?: string | null
    message: string
    createdDate?: Date | string | null
  }

  export type logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditCreateInput = {
    id?: string
    entityName: string
    entityId: string
    fieldName?: string | null
    fieldValue?: string | null
    createdDate?: Date | string | null
    user?: userCreateNestedOneWithoutAuditInput
  }

  export type auditUncheckedCreateInput = {
    id?: string
    entityName: string
    entityId: string
    fieldName?: string | null
    fieldValue?: string | null
    userId?: string | null
    createdDate?: Date | string | null
  }

  export type auditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutAuditNestedInput
  }

  export type auditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditCreateManyInput = {
    id?: string
    entityName: string
    entityId: string
    fieldName?: string | null
    fieldValue?: string | null
    userId?: string | null
    createdDate?: Date | string | null
  }

  export type auditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateInput = {
    id?: string
    link?: string | null
    photo?: string | null
    title: string
    description?: string | null
    caption?: string | null
    entityId?: string | null
    entityName?: string | null
    status?: string | null
    createdDate?: Date | string | null
    user: userCreateNestedOneWithoutNotificationInput
  }

  export type notificationUncheckedCreateInput = {
    id?: string
    link?: string | null
    photo?: string | null
    title: string
    description?: string | null
    caption?: string | null
    entityId?: string | null
    entityName?: string | null
    status?: string | null
    userId: string
    createdDate?: Date | string | null
  }

  export type notificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateManyInput = {
    id?: string
    link?: string | null
    photo?: string | null
    title: string
    description?: string | null
    caption?: string | null
    entityId?: string | null
    entityName?: string | null
    status?: string | null
    userId: string
    createdDate?: Date | string | null
  }

  export type notificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StreamScalarRelationFilter = {
    is?: streamWhereInput
    isNot?: streamWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type ReportListRelationFilter = {
    every?: reportWhereInput
    some?: reportWhereInput
    none?: reportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type liveCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    expiryDate?: SortOrder
    expiryTimeInMinutes?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type liveAvgOrderByAggregateInput = {
    expiryTimeInMinutes?: SortOrder
  }

  export type liveMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    expiryDate?: SortOrder
    expiryTimeInMinutes?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type liveMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    expiryDate?: SortOrder
    expiryTimeInMinutes?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type liveSumOrderByAggregateInput = {
    expiryTimeInMinutes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LiveScalarRelationFilter = {
    is?: liveWhereInput
    isNot?: liveWhereInput
  }

  export type ReportItemsListRelationFilter = {
    every?: reportItemsWhereInput
    some?: reportItemsWhereInput
    none?: reportItemsWhereInput
  }

  export type reportItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    liveId?: SortOrder
    userId?: SortOrder
    thumbnailUrl?: SortOrder
    recordUrl?: SortOrder
    expiryTimeInMinutes?: SortOrder
    calculatedClass?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type reportAvgOrderByAggregateInput = {
    expiryTimeInMinutes?: SortOrder
  }

  export type reportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    liveId?: SortOrder
    userId?: SortOrder
    thumbnailUrl?: SortOrder
    recordUrl?: SortOrder
    expiryTimeInMinutes?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type reportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    liveId?: SortOrder
    userId?: SortOrder
    thumbnailUrl?: SortOrder
    recordUrl?: SortOrder
    expiryTimeInMinutes?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type reportSumOrderByAggregateInput = {
    expiryTimeInMinutes?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ReportScalarRelationFilter = {
    is?: reportWhereInput
    isNot?: reportWhereInput
  }

  export type reportItemsCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    reportId?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type reportItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    reportId?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type reportItemsMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    reportId?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LiveListRelationFilter = {
    every?: liveWhereInput
    some?: liveWhereInput
    none?: liveWhereInput
  }

  export type liveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type streamCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    inactive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type streamMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    inactive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type streamMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    inactive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StreamListRelationFilter = {
    every?: streamWhereInput
    some?: streamWhereInput
    none?: streamWhereInput
  }

  export type AuditListRelationFilter = {
    every?: auditWhereInput
    some?: auditWhereInput
    none?: auditWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type AuthenticationListRelationFilter = {
    every?: authenticationWhereInput
    some?: authenticationWhereInput
    none?: authenticationWhereInput
  }

  export type streamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authenticationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    isVerified?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    photo?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    photo?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    photo?: SortOrder
  }

  export type authenticationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type authenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type authenticationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type logsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    ip?: SortOrder
    message?: SortOrder
    createdDate?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    ip?: SortOrder
    message?: SortOrder
    createdDate?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    ip?: SortOrder
    message?: SortOrder
    createdDate?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type auditCountOrderByAggregateInput = {
    id?: SortOrder
    entityName?: SortOrder
    entityId?: SortOrder
    fieldName?: SortOrder
    fieldValue?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
  }

  export type auditMaxOrderByAggregateInput = {
    id?: SortOrder
    entityName?: SortOrder
    entityId?: SortOrder
    fieldName?: SortOrder
    fieldValue?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
  }

  export type auditMinOrderByAggregateInput = {
    id?: SortOrder
    entityName?: SortOrder
    entityId?: SortOrder
    fieldName?: SortOrder
    fieldValue?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    photo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    caption?: SortOrder
    entityId?: SortOrder
    entityName?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    photo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    caption?: SortOrder
    entityId?: SortOrder
    entityName?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    photo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    caption?: SortOrder
    entityId?: SortOrder
    entityName?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
  }

  export type streamCreateNestedOneWithoutLiveInput = {
    create?: XOR<streamCreateWithoutLiveInput, streamUncheckedCreateWithoutLiveInput>
    connectOrCreate?: streamCreateOrConnectWithoutLiveInput
    connect?: streamWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLiveInput = {
    create?: XOR<userCreateWithoutLiveInput, userUncheckedCreateWithoutLiveInput>
    connectOrCreate?: userCreateOrConnectWithoutLiveInput
    connect?: userWhereUniqueInput
  }

  export type reportCreateNestedManyWithoutLiveInput = {
    create?: XOR<reportCreateWithoutLiveInput, reportUncheckedCreateWithoutLiveInput> | reportCreateWithoutLiveInput[] | reportUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: reportCreateOrConnectWithoutLiveInput | reportCreateOrConnectWithoutLiveInput[]
    createMany?: reportCreateManyLiveInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutLiveInput = {
    create?: XOR<reportCreateWithoutLiveInput, reportUncheckedCreateWithoutLiveInput> | reportCreateWithoutLiveInput[] | reportUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: reportCreateOrConnectWithoutLiveInput | reportCreateOrConnectWithoutLiveInput[]
    createMany?: reportCreateManyLiveInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type streamUpdateOneRequiredWithoutLiveNestedInput = {
    create?: XOR<streamCreateWithoutLiveInput, streamUncheckedCreateWithoutLiveInput>
    connectOrCreate?: streamCreateOrConnectWithoutLiveInput
    upsert?: streamUpsertWithoutLiveInput
    connect?: streamWhereUniqueInput
    update?: XOR<XOR<streamUpdateToOneWithWhereWithoutLiveInput, streamUpdateWithoutLiveInput>, streamUncheckedUpdateWithoutLiveInput>
  }

  export type userUpdateOneRequiredWithoutLiveNestedInput = {
    create?: XOR<userCreateWithoutLiveInput, userUncheckedCreateWithoutLiveInput>
    connectOrCreate?: userCreateOrConnectWithoutLiveInput
    upsert?: userUpsertWithoutLiveInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLiveInput, userUpdateWithoutLiveInput>, userUncheckedUpdateWithoutLiveInput>
  }

  export type reportUpdateManyWithoutLiveNestedInput = {
    create?: XOR<reportCreateWithoutLiveInput, reportUncheckedCreateWithoutLiveInput> | reportCreateWithoutLiveInput[] | reportUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: reportCreateOrConnectWithoutLiveInput | reportCreateOrConnectWithoutLiveInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutLiveInput | reportUpsertWithWhereUniqueWithoutLiveInput[]
    createMany?: reportCreateManyLiveInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutLiveInput | reportUpdateWithWhereUniqueWithoutLiveInput[]
    updateMany?: reportUpdateManyWithWhereWithoutLiveInput | reportUpdateManyWithWhereWithoutLiveInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutLiveNestedInput = {
    create?: XOR<reportCreateWithoutLiveInput, reportUncheckedCreateWithoutLiveInput> | reportCreateWithoutLiveInput[] | reportUncheckedCreateWithoutLiveInput[]
    connectOrCreate?: reportCreateOrConnectWithoutLiveInput | reportCreateOrConnectWithoutLiveInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutLiveInput | reportUpsertWithWhereUniqueWithoutLiveInput[]
    createMany?: reportCreateManyLiveInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutLiveInput | reportUpdateWithWhereUniqueWithoutLiveInput[]
    updateMany?: reportUpdateManyWithWhereWithoutLiveInput | reportUpdateManyWithWhereWithoutLiveInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type liveCreateNestedOneWithoutReportInput = {
    create?: XOR<liveCreateWithoutReportInput, liveUncheckedCreateWithoutReportInput>
    connectOrCreate?: liveCreateOrConnectWithoutReportInput
    connect?: liveWhereUniqueInput
  }

  export type userCreateNestedOneWithoutReportInput = {
    create?: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
    connectOrCreate?: userCreateOrConnectWithoutReportInput
    connect?: userWhereUniqueInput
  }

  export type reportItemsCreateNestedManyWithoutReportInput = {
    create?: XOR<reportItemsCreateWithoutReportInput, reportItemsUncheckedCreateWithoutReportInput> | reportItemsCreateWithoutReportInput[] | reportItemsUncheckedCreateWithoutReportInput[]
    connectOrCreate?: reportItemsCreateOrConnectWithoutReportInput | reportItemsCreateOrConnectWithoutReportInput[]
    createMany?: reportItemsCreateManyReportInputEnvelope
    connect?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
  }

  export type reportItemsUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<reportItemsCreateWithoutReportInput, reportItemsUncheckedCreateWithoutReportInput> | reportItemsCreateWithoutReportInput[] | reportItemsUncheckedCreateWithoutReportInput[]
    connectOrCreate?: reportItemsCreateOrConnectWithoutReportInput | reportItemsCreateOrConnectWithoutReportInput[]
    createMany?: reportItemsCreateManyReportInputEnvelope
    connect?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type liveUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<liveCreateWithoutReportInput, liveUncheckedCreateWithoutReportInput>
    connectOrCreate?: liveCreateOrConnectWithoutReportInput
    upsert?: liveUpsertWithoutReportInput
    connect?: liveWhereUniqueInput
    update?: XOR<XOR<liveUpdateToOneWithWhereWithoutReportInput, liveUpdateWithoutReportInput>, liveUncheckedUpdateWithoutReportInput>
  }

  export type userUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
    connectOrCreate?: userCreateOrConnectWithoutReportInput
    upsert?: userUpsertWithoutReportInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReportInput, userUpdateWithoutReportInput>, userUncheckedUpdateWithoutReportInput>
  }

  export type reportItemsUpdateManyWithoutReportNestedInput = {
    create?: XOR<reportItemsCreateWithoutReportInput, reportItemsUncheckedCreateWithoutReportInput> | reportItemsCreateWithoutReportInput[] | reportItemsUncheckedCreateWithoutReportInput[]
    connectOrCreate?: reportItemsCreateOrConnectWithoutReportInput | reportItemsCreateOrConnectWithoutReportInput[]
    upsert?: reportItemsUpsertWithWhereUniqueWithoutReportInput | reportItemsUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: reportItemsCreateManyReportInputEnvelope
    set?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    disconnect?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    delete?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    connect?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    update?: reportItemsUpdateWithWhereUniqueWithoutReportInput | reportItemsUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: reportItemsUpdateManyWithWhereWithoutReportInput | reportItemsUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: reportItemsScalarWhereInput | reportItemsScalarWhereInput[]
  }

  export type reportItemsUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<reportItemsCreateWithoutReportInput, reportItemsUncheckedCreateWithoutReportInput> | reportItemsCreateWithoutReportInput[] | reportItemsUncheckedCreateWithoutReportInput[]
    connectOrCreate?: reportItemsCreateOrConnectWithoutReportInput | reportItemsCreateOrConnectWithoutReportInput[]
    upsert?: reportItemsUpsertWithWhereUniqueWithoutReportInput | reportItemsUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: reportItemsCreateManyReportInputEnvelope
    set?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    disconnect?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    delete?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    connect?: reportItemsWhereUniqueInput | reportItemsWhereUniqueInput[]
    update?: reportItemsUpdateWithWhereUniqueWithoutReportInput | reportItemsUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: reportItemsUpdateManyWithWhereWithoutReportInput | reportItemsUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: reportItemsScalarWhereInput | reportItemsScalarWhereInput[]
  }

  export type reportCreateNestedOneWithoutReportItemsInput = {
    create?: XOR<reportCreateWithoutReportItemsInput, reportUncheckedCreateWithoutReportItemsInput>
    connectOrCreate?: reportCreateOrConnectWithoutReportItemsInput
    connect?: reportWhereUniqueInput
  }

  export type reportUpdateOneRequiredWithoutReportItemsNestedInput = {
    create?: XOR<reportCreateWithoutReportItemsInput, reportUncheckedCreateWithoutReportItemsInput>
    connectOrCreate?: reportCreateOrConnectWithoutReportItemsInput
    upsert?: reportUpsertWithoutReportItemsInput
    connect?: reportWhereUniqueInput
    update?: XOR<XOR<reportUpdateToOneWithWhereWithoutReportItemsInput, reportUpdateWithoutReportItemsInput>, reportUncheckedUpdateWithoutReportItemsInput>
  }

  export type userCreateNestedOneWithoutStreamInput = {
    create?: XOR<userCreateWithoutStreamInput, userUncheckedCreateWithoutStreamInput>
    connectOrCreate?: userCreateOrConnectWithoutStreamInput
    connect?: userWhereUniqueInput
  }

  export type liveCreateNestedManyWithoutStreamInput = {
    create?: XOR<liveCreateWithoutStreamInput, liveUncheckedCreateWithoutStreamInput> | liveCreateWithoutStreamInput[] | liveUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: liveCreateOrConnectWithoutStreamInput | liveCreateOrConnectWithoutStreamInput[]
    createMany?: liveCreateManyStreamInputEnvelope
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
  }

  export type liveUncheckedCreateNestedManyWithoutStreamInput = {
    create?: XOR<liveCreateWithoutStreamInput, liveUncheckedCreateWithoutStreamInput> | liveCreateWithoutStreamInput[] | liveUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: liveCreateOrConnectWithoutStreamInput | liveCreateOrConnectWithoutStreamInput[]
    createMany?: liveCreateManyStreamInputEnvelope
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutStreamNestedInput = {
    create?: XOR<userCreateWithoutStreamInput, userUncheckedCreateWithoutStreamInput>
    connectOrCreate?: userCreateOrConnectWithoutStreamInput
    upsert?: userUpsertWithoutStreamInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStreamInput, userUpdateWithoutStreamInput>, userUncheckedUpdateWithoutStreamInput>
  }

  export type liveUpdateManyWithoutStreamNestedInput = {
    create?: XOR<liveCreateWithoutStreamInput, liveUncheckedCreateWithoutStreamInput> | liveCreateWithoutStreamInput[] | liveUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: liveCreateOrConnectWithoutStreamInput | liveCreateOrConnectWithoutStreamInput[]
    upsert?: liveUpsertWithWhereUniqueWithoutStreamInput | liveUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: liveCreateManyStreamInputEnvelope
    set?: liveWhereUniqueInput | liveWhereUniqueInput[]
    disconnect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    delete?: liveWhereUniqueInput | liveWhereUniqueInput[]
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    update?: liveUpdateWithWhereUniqueWithoutStreamInput | liveUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: liveUpdateManyWithWhereWithoutStreamInput | liveUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: liveScalarWhereInput | liveScalarWhereInput[]
  }

  export type liveUncheckedUpdateManyWithoutStreamNestedInput = {
    create?: XOR<liveCreateWithoutStreamInput, liveUncheckedCreateWithoutStreamInput> | liveCreateWithoutStreamInput[] | liveUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: liveCreateOrConnectWithoutStreamInput | liveCreateOrConnectWithoutStreamInput[]
    upsert?: liveUpsertWithWhereUniqueWithoutStreamInput | liveUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: liveCreateManyStreamInputEnvelope
    set?: liveWhereUniqueInput | liveWhereUniqueInput[]
    disconnect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    delete?: liveWhereUniqueInput | liveWhereUniqueInput[]
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    update?: liveUpdateWithWhereUniqueWithoutStreamInput | liveUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: liveUpdateManyWithWhereWithoutStreamInput | liveUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: liveScalarWhereInput | liveScalarWhereInput[]
  }

  export type userCreaterolesInput = {
    set: string[]
  }

  export type streamCreateNestedManyWithoutUserInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
  }

  export type liveCreateNestedManyWithoutUserInput = {
    create?: XOR<liveCreateWithoutUserInput, liveUncheckedCreateWithoutUserInput> | liveCreateWithoutUserInput[] | liveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: liveCreateOrConnectWithoutUserInput | liveCreateOrConnectWithoutUserInput[]
    createMany?: liveCreateManyUserInputEnvelope
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
  }

  export type reportCreateNestedManyWithoutUserInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type auditCreateNestedManyWithoutUserInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type authenticationCreateNestedManyWithoutUserInput = {
    create?: XOR<authenticationCreateWithoutUserInput, authenticationUncheckedCreateWithoutUserInput> | authenticationCreateWithoutUserInput[] | authenticationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authenticationCreateOrConnectWithoutUserInput | authenticationCreateOrConnectWithoutUserInput[]
    createMany?: authenticationCreateManyUserInputEnvelope
    connect?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
  }

  export type streamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
  }

  export type liveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<liveCreateWithoutUserInput, liveUncheckedCreateWithoutUserInput> | liveCreateWithoutUserInput[] | liveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: liveCreateOrConnectWithoutUserInput | liveCreateOrConnectWithoutUserInput[]
    createMany?: liveCreateManyUserInputEnvelope
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type auditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type authenticationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<authenticationCreateWithoutUserInput, authenticationUncheckedCreateWithoutUserInput> | authenticationCreateWithoutUserInput[] | authenticationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authenticationCreateOrConnectWithoutUserInput | authenticationCreateOrConnectWithoutUserInput[]
    createMany?: authenticationCreateManyUserInputEnvelope
    connect?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
  }

  export type userUpdaterolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type streamUpdateManyWithoutUserNestedInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    upsert?: streamUpsertWithWhereUniqueWithoutUserInput | streamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    set?: streamWhereUniqueInput | streamWhereUniqueInput[]
    disconnect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    delete?: streamWhereUniqueInput | streamWhereUniqueInput[]
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    update?: streamUpdateWithWhereUniqueWithoutUserInput | streamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: streamUpdateManyWithWhereWithoutUserInput | streamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: streamScalarWhereInput | streamScalarWhereInput[]
  }

  export type liveUpdateManyWithoutUserNestedInput = {
    create?: XOR<liveCreateWithoutUserInput, liveUncheckedCreateWithoutUserInput> | liveCreateWithoutUserInput[] | liveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: liveCreateOrConnectWithoutUserInput | liveCreateOrConnectWithoutUserInput[]
    upsert?: liveUpsertWithWhereUniqueWithoutUserInput | liveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: liveCreateManyUserInputEnvelope
    set?: liveWhereUniqueInput | liveWhereUniqueInput[]
    disconnect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    delete?: liveWhereUniqueInput | liveWhereUniqueInput[]
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    update?: liveUpdateWithWhereUniqueWithoutUserInput | liveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: liveUpdateManyWithWhereWithoutUserInput | liveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: liveScalarWhereInput | liveScalarWhereInput[]
  }

  export type reportUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutUserInput | reportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutUserInput | reportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportUpdateManyWithWhereWithoutUserInput | reportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type auditUpdateManyWithoutUserNestedInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    upsert?: auditUpsertWithWhereUniqueWithoutUserInput | auditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    set?: auditWhereUniqueInput | auditWhereUniqueInput[]
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[]
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    update?: auditUpdateWithWhereUniqueWithoutUserInput | auditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auditUpdateManyWithWhereWithoutUserInput | auditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type authenticationUpdateManyWithoutUserNestedInput = {
    create?: XOR<authenticationCreateWithoutUserInput, authenticationUncheckedCreateWithoutUserInput> | authenticationCreateWithoutUserInput[] | authenticationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authenticationCreateOrConnectWithoutUserInput | authenticationCreateOrConnectWithoutUserInput[]
    upsert?: authenticationUpsertWithWhereUniqueWithoutUserInput | authenticationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: authenticationCreateManyUserInputEnvelope
    set?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    disconnect?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    delete?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    connect?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    update?: authenticationUpdateWithWhereUniqueWithoutUserInput | authenticationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: authenticationUpdateManyWithWhereWithoutUserInput | authenticationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: authenticationScalarWhereInput | authenticationScalarWhereInput[]
  }

  export type streamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    upsert?: streamUpsertWithWhereUniqueWithoutUserInput | streamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    set?: streamWhereUniqueInput | streamWhereUniqueInput[]
    disconnect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    delete?: streamWhereUniqueInput | streamWhereUniqueInput[]
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    update?: streamUpdateWithWhereUniqueWithoutUserInput | streamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: streamUpdateManyWithWhereWithoutUserInput | streamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: streamScalarWhereInput | streamScalarWhereInput[]
  }

  export type liveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<liveCreateWithoutUserInput, liveUncheckedCreateWithoutUserInput> | liveCreateWithoutUserInput[] | liveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: liveCreateOrConnectWithoutUserInput | liveCreateOrConnectWithoutUserInput[]
    upsert?: liveUpsertWithWhereUniqueWithoutUserInput | liveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: liveCreateManyUserInputEnvelope
    set?: liveWhereUniqueInput | liveWhereUniqueInput[]
    disconnect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    delete?: liveWhereUniqueInput | liveWhereUniqueInput[]
    connect?: liveWhereUniqueInput | liveWhereUniqueInput[]
    update?: liveUpdateWithWhereUniqueWithoutUserInput | liveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: liveUpdateManyWithWhereWithoutUserInput | liveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: liveScalarWhereInput | liveScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutUserInput | reportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutUserInput | reportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportUpdateManyWithWhereWithoutUserInput | reportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type auditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    upsert?: auditUpsertWithWhereUniqueWithoutUserInput | auditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    set?: auditWhereUniqueInput | auditWhereUniqueInput[]
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[]
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    update?: auditUpdateWithWhereUniqueWithoutUserInput | auditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auditUpdateManyWithWhereWithoutUserInput | auditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type authenticationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<authenticationCreateWithoutUserInput, authenticationUncheckedCreateWithoutUserInput> | authenticationCreateWithoutUserInput[] | authenticationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: authenticationCreateOrConnectWithoutUserInput | authenticationCreateOrConnectWithoutUserInput[]
    upsert?: authenticationUpsertWithWhereUniqueWithoutUserInput | authenticationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: authenticationCreateManyUserInputEnvelope
    set?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    disconnect?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    delete?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    connect?: authenticationWhereUniqueInput | authenticationWhereUniqueInput[]
    update?: authenticationUpdateWithWhereUniqueWithoutUserInput | authenticationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: authenticationUpdateManyWithWhereWithoutUserInput | authenticationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: authenticationScalarWhereInput | authenticationScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAuthenticationInput = {
    create?: XOR<userCreateWithoutAuthenticationInput, userUncheckedCreateWithoutAuthenticationInput>
    connectOrCreate?: userCreateOrConnectWithoutAuthenticationInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutAuthenticationNestedInput = {
    create?: XOR<userCreateWithoutAuthenticationInput, userUncheckedCreateWithoutAuthenticationInput>
    connectOrCreate?: userCreateOrConnectWithoutAuthenticationInput
    upsert?: userUpsertWithoutAuthenticationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAuthenticationInput, userUpdateWithoutAuthenticationInput>, userUncheckedUpdateWithoutAuthenticationInput>
  }

  export type userCreateNestedOneWithoutAuditInput = {
    create?: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
    connectOrCreate?: userCreateOrConnectWithoutAuditInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneWithoutAuditNestedInput = {
    create?: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
    connectOrCreate?: userCreateOrConnectWithoutAuditInput
    upsert?: userUpsertWithoutAuditInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAuditInput, userUpdateWithoutAuditInput>, userUncheckedUpdateWithoutAuditInput>
  }

  export type userCreateNestedOneWithoutNotificationInput = {
    create?: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationInput
    upsert?: userUpsertWithoutNotificationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotificationInput, userUpdateWithoutNotificationInput>, userUncheckedUpdateWithoutNotificationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type streamCreateWithoutLiveInput = {
    id?: string
    url: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    user: userCreateNestedOneWithoutStreamInput
  }

  export type streamUncheckedCreateWithoutLiveInput = {
    id?: string
    url: string
    userId: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type streamCreateOrConnectWithoutLiveInput = {
    where: streamWhereUniqueInput
    create: XOR<streamCreateWithoutLiveInput, streamUncheckedCreateWithoutLiveInput>
  }

  export type userCreateWithoutLiveInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    audit?: auditCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
    authentication?: authenticationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLiveInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
    authentication?: authenticationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLiveInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLiveInput, userUncheckedCreateWithoutLiveInput>
  }

  export type reportCreateWithoutLiveInput = {
    id?: string
    title?: string | null
    description?: string | null
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    user: userCreateNestedOneWithoutReportInput
    reportItems?: reportItemsCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateWithoutLiveInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    reportItems?: reportItemsUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportCreateOrConnectWithoutLiveInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutLiveInput, reportUncheckedCreateWithoutLiveInput>
  }

  export type reportCreateManyLiveInputEnvelope = {
    data: reportCreateManyLiveInput | reportCreateManyLiveInput[]
    skipDuplicates?: boolean
  }

  export type streamUpsertWithoutLiveInput = {
    update: XOR<streamUpdateWithoutLiveInput, streamUncheckedUpdateWithoutLiveInput>
    create: XOR<streamCreateWithoutLiveInput, streamUncheckedCreateWithoutLiveInput>
    where?: streamWhereInput
  }

  export type streamUpdateToOneWithWhereWithoutLiveInput = {
    where?: streamWhereInput
    data: XOR<streamUpdateWithoutLiveInput, streamUncheckedUpdateWithoutLiveInput>
  }

  export type streamUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpsertWithoutLiveInput = {
    update: XOR<userUpdateWithoutLiveInput, userUncheckedUpdateWithoutLiveInput>
    create: XOR<userCreateWithoutLiveInput, userUncheckedCreateWithoutLiveInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLiveInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLiveInput, userUncheckedUpdateWithoutLiveInput>
  }

  export type userUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    audit?: auditUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
    authentication?: authenticationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
    authentication?: authenticationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type reportUpsertWithWhereUniqueWithoutLiveInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutLiveInput, reportUncheckedUpdateWithoutLiveInput>
    create: XOR<reportCreateWithoutLiveInput, reportUncheckedCreateWithoutLiveInput>
  }

  export type reportUpdateWithWhereUniqueWithoutLiveInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutLiveInput, reportUncheckedUpdateWithoutLiveInput>
  }

  export type reportUpdateManyWithWhereWithoutLiveInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutLiveInput>
  }

  export type reportScalarWhereInput = {
    AND?: reportScalarWhereInput | reportScalarWhereInput[]
    OR?: reportScalarWhereInput[]
    NOT?: reportScalarWhereInput | reportScalarWhereInput[]
    id?: StringFilter<"report"> | string
    title?: StringNullableFilter<"report"> | string | null
    description?: StringNullableFilter<"report"> | string | null
    liveId?: StringFilter<"report"> | string
    userId?: StringFilter<"report"> | string
    thumbnailUrl?: StringNullableFilter<"report"> | string | null
    recordUrl?: StringNullableFilter<"report"> | string | null
    expiryTimeInMinutes?: IntNullableFilter<"report"> | number | null
    calculatedClass?: JsonNullableFilter<"report">
    createdDate?: DateTimeFilter<"report"> | Date | string
    updatedDate?: DateTimeNullableFilter<"report"> | Date | string | null
  }

  export type liveCreateWithoutReportInput = {
    id?: string
    path: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    stream: streamCreateNestedOneWithoutLiveInput
    user: userCreateNestedOneWithoutLiveInput
  }

  export type liveUncheckedCreateWithoutReportInput = {
    id?: string
    path: string
    streamId: string
    userId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type liveCreateOrConnectWithoutReportInput = {
    where: liveWhereUniqueInput
    create: XOR<liveCreateWithoutReportInput, liveUncheckedCreateWithoutReportInput>
  }

  export type userCreateWithoutReportInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamCreateNestedManyWithoutUserInput
    live?: liveCreateNestedManyWithoutUserInput
    audit?: auditCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
    authentication?: authenticationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutReportInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamUncheckedCreateNestedManyWithoutUserInput
    live?: liveUncheckedCreateNestedManyWithoutUserInput
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
    authentication?: authenticationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutReportInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
  }

  export type reportItemsCreateWithoutReportInput = {
    id?: string
    data?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportItemsUncheckedCreateWithoutReportInput = {
    id?: string
    data?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportItemsCreateOrConnectWithoutReportInput = {
    where: reportItemsWhereUniqueInput
    create: XOR<reportItemsCreateWithoutReportInput, reportItemsUncheckedCreateWithoutReportInput>
  }

  export type reportItemsCreateManyReportInputEnvelope = {
    data: reportItemsCreateManyReportInput | reportItemsCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type liveUpsertWithoutReportInput = {
    update: XOR<liveUpdateWithoutReportInput, liveUncheckedUpdateWithoutReportInput>
    create: XOR<liveCreateWithoutReportInput, liveUncheckedCreateWithoutReportInput>
    where?: liveWhereInput
  }

  export type liveUpdateToOneWithWhereWithoutReportInput = {
    where?: liveWhereInput
    data: XOR<liveUpdateWithoutReportInput, liveUncheckedUpdateWithoutReportInput>
  }

  export type liveUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stream?: streamUpdateOneRequiredWithoutLiveNestedInput
    user?: userUpdateOneRequiredWithoutLiveNestedInput
  }

  export type liveUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpsertWithoutReportInput = {
    update: XOR<userUpdateWithoutReportInput, userUncheckedUpdateWithoutReportInput>
    create: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReportInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReportInput, userUncheckedUpdateWithoutReportInput>
  }

  export type userUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUpdateManyWithoutUserNestedInput
    live?: liveUpdateManyWithoutUserNestedInput
    audit?: auditUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
    authentication?: authenticationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUncheckedUpdateManyWithoutUserNestedInput
    live?: liveUncheckedUpdateManyWithoutUserNestedInput
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
    authentication?: authenticationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type reportItemsUpsertWithWhereUniqueWithoutReportInput = {
    where: reportItemsWhereUniqueInput
    update: XOR<reportItemsUpdateWithoutReportInput, reportItemsUncheckedUpdateWithoutReportInput>
    create: XOR<reportItemsCreateWithoutReportInput, reportItemsUncheckedCreateWithoutReportInput>
  }

  export type reportItemsUpdateWithWhereUniqueWithoutReportInput = {
    where: reportItemsWhereUniqueInput
    data: XOR<reportItemsUpdateWithoutReportInput, reportItemsUncheckedUpdateWithoutReportInput>
  }

  export type reportItemsUpdateManyWithWhereWithoutReportInput = {
    where: reportItemsScalarWhereInput
    data: XOR<reportItemsUpdateManyMutationInput, reportItemsUncheckedUpdateManyWithoutReportInput>
  }

  export type reportItemsScalarWhereInput = {
    AND?: reportItemsScalarWhereInput | reportItemsScalarWhereInput[]
    OR?: reportItemsScalarWhereInput[]
    NOT?: reportItemsScalarWhereInput | reportItemsScalarWhereInput[]
    id?: StringFilter<"reportItems"> | string
    data?: StringNullableFilter<"reportItems"> | string | null
    reportId?: StringFilter<"reportItems"> | string
    createdDate?: DateTimeFilter<"reportItems"> | Date | string
    updatedDate?: DateTimeNullableFilter<"reportItems"> | Date | string | null
  }

  export type reportCreateWithoutReportItemsInput = {
    id?: string
    title?: string | null
    description?: string | null
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    live: liveCreateNestedOneWithoutReportInput
    user: userCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutReportItemsInput = {
    id?: string
    title?: string | null
    description?: string | null
    liveId: string
    userId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportCreateOrConnectWithoutReportItemsInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutReportItemsInput, reportUncheckedCreateWithoutReportItemsInput>
  }

  export type reportUpsertWithoutReportItemsInput = {
    update: XOR<reportUpdateWithoutReportItemsInput, reportUncheckedUpdateWithoutReportItemsInput>
    create: XOR<reportCreateWithoutReportItemsInput, reportUncheckedCreateWithoutReportItemsInput>
    where?: reportWhereInput
  }

  export type reportUpdateToOneWithWhereWithoutReportItemsInput = {
    where?: reportWhereInput
    data: XOR<reportUpdateWithoutReportItemsInput, reportUncheckedUpdateWithoutReportItemsInput>
  }

  export type reportUpdateWithoutReportItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live?: liveUpdateOneRequiredWithoutReportNestedInput
    user?: userUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutReportItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    liveId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateWithoutStreamInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    live?: liveCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    audit?: auditCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
    authentication?: authenticationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutStreamInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    live?: liveUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
    authentication?: authenticationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutStreamInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStreamInput, userUncheckedCreateWithoutStreamInput>
  }

  export type liveCreateWithoutStreamInput = {
    id?: string
    path: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    user: userCreateNestedOneWithoutLiveInput
    report?: reportCreateNestedManyWithoutLiveInput
  }

  export type liveUncheckedCreateWithoutStreamInput = {
    id?: string
    path: string
    userId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    report?: reportUncheckedCreateNestedManyWithoutLiveInput
  }

  export type liveCreateOrConnectWithoutStreamInput = {
    where: liveWhereUniqueInput
    create: XOR<liveCreateWithoutStreamInput, liveUncheckedCreateWithoutStreamInput>
  }

  export type liveCreateManyStreamInputEnvelope = {
    data: liveCreateManyStreamInput | liveCreateManyStreamInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutStreamInput = {
    update: XOR<userUpdateWithoutStreamInput, userUncheckedUpdateWithoutStreamInput>
    create: XOR<userCreateWithoutStreamInput, userUncheckedCreateWithoutStreamInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStreamInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStreamInput, userUncheckedUpdateWithoutStreamInput>
  }

  export type userUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    live?: liveUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    audit?: auditUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
    authentication?: authenticationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    live?: liveUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
    authentication?: authenticationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type liveUpsertWithWhereUniqueWithoutStreamInput = {
    where: liveWhereUniqueInput
    update: XOR<liveUpdateWithoutStreamInput, liveUncheckedUpdateWithoutStreamInput>
    create: XOR<liveCreateWithoutStreamInput, liveUncheckedCreateWithoutStreamInput>
  }

  export type liveUpdateWithWhereUniqueWithoutStreamInput = {
    where: liveWhereUniqueInput
    data: XOR<liveUpdateWithoutStreamInput, liveUncheckedUpdateWithoutStreamInput>
  }

  export type liveUpdateManyWithWhereWithoutStreamInput = {
    where: liveScalarWhereInput
    data: XOR<liveUpdateManyMutationInput, liveUncheckedUpdateManyWithoutStreamInput>
  }

  export type liveScalarWhereInput = {
    AND?: liveScalarWhereInput | liveScalarWhereInput[]
    OR?: liveScalarWhereInput[]
    NOT?: liveScalarWhereInput | liveScalarWhereInput[]
    id?: StringFilter<"live"> | string
    path?: StringFilter<"live"> | string
    streamId?: StringFilter<"live"> | string
    userId?: StringFilter<"live"> | string
    expiryDate?: DateTimeNullableFilter<"live"> | Date | string | null
    expiryTimeInMinutes?: IntNullableFilter<"live"> | number | null
    createdDate?: DateTimeFilter<"live"> | Date | string
    updatedDate?: DateTimeNullableFilter<"live"> | Date | string | null
  }

  export type streamCreateWithoutUserInput = {
    id?: string
    url: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    live?: liveCreateNestedManyWithoutStreamInput
  }

  export type streamUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    live?: liveUncheckedCreateNestedManyWithoutStreamInput
  }

  export type streamCreateOrConnectWithoutUserInput = {
    where: streamWhereUniqueInput
    create: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput>
  }

  export type streamCreateManyUserInputEnvelope = {
    data: streamCreateManyUserInput | streamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type liveCreateWithoutUserInput = {
    id?: string
    path: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    stream: streamCreateNestedOneWithoutLiveInput
    report?: reportCreateNestedManyWithoutLiveInput
  }

  export type liveUncheckedCreateWithoutUserInput = {
    id?: string
    path: string
    streamId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
    report?: reportUncheckedCreateNestedManyWithoutLiveInput
  }

  export type liveCreateOrConnectWithoutUserInput = {
    where: liveWhereUniqueInput
    create: XOR<liveCreateWithoutUserInput, liveUncheckedCreateWithoutUserInput>
  }

  export type liveCreateManyUserInputEnvelope = {
    data: liveCreateManyUserInput | liveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reportCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    live: liveCreateNestedOneWithoutReportInput
    reportItems?: reportItemsCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    liveId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
    reportItems?: reportItemsUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportCreateOrConnectWithoutUserInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput>
  }

  export type reportCreateManyUserInputEnvelope = {
    data: reportCreateManyUserInput | reportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type auditCreateWithoutUserInput = {
    id?: string
    entityName: string
    entityId: string
    fieldName?: string | null
    fieldValue?: string | null
    createdDate?: Date | string | null
  }

  export type auditUncheckedCreateWithoutUserInput = {
    id?: string
    entityName: string
    entityId: string
    fieldName?: string | null
    fieldValue?: string | null
    createdDate?: Date | string | null
  }

  export type auditCreateOrConnectWithoutUserInput = {
    where: auditWhereUniqueInput
    create: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
  }

  export type auditCreateManyUserInputEnvelope = {
    data: auditCreateManyUserInput | auditCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUserInput = {
    id?: string
    link?: string | null
    photo?: string | null
    title: string
    description?: string | null
    caption?: string | null
    entityId?: string | null
    entityName?: string | null
    status?: string | null
    createdDate?: Date | string | null
  }

  export type notificationUncheckedCreateWithoutUserInput = {
    id?: string
    link?: string | null
    photo?: string | null
    title: string
    description?: string | null
    caption?: string | null
    entityId?: string | null
    entityName?: string | null
    status?: string | null
    createdDate?: Date | string | null
  }

  export type notificationCreateOrConnectWithoutUserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationCreateManyUserInputEnvelope = {
    data: notificationCreateManyUserInput | notificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type authenticationCreateWithoutUserInput = {
    id?: string
    ipAddress?: string | null
    description?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type authenticationUncheckedCreateWithoutUserInput = {
    id?: string
    ipAddress?: string | null
    description?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type authenticationCreateOrConnectWithoutUserInput = {
    where: authenticationWhereUniqueInput
    create: XOR<authenticationCreateWithoutUserInput, authenticationUncheckedCreateWithoutUserInput>
  }

  export type authenticationCreateManyUserInputEnvelope = {
    data: authenticationCreateManyUserInput | authenticationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type streamUpsertWithWhereUniqueWithoutUserInput = {
    where: streamWhereUniqueInput
    update: XOR<streamUpdateWithoutUserInput, streamUncheckedUpdateWithoutUserInput>
    create: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput>
  }

  export type streamUpdateWithWhereUniqueWithoutUserInput = {
    where: streamWhereUniqueInput
    data: XOR<streamUpdateWithoutUserInput, streamUncheckedUpdateWithoutUserInput>
  }

  export type streamUpdateManyWithWhereWithoutUserInput = {
    where: streamScalarWhereInput
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyWithoutUserInput>
  }

  export type streamScalarWhereInput = {
    AND?: streamScalarWhereInput | streamScalarWhereInput[]
    OR?: streamScalarWhereInput[]
    NOT?: streamScalarWhereInput | streamScalarWhereInput[]
    id?: StringFilter<"stream"> | string
    url?: StringFilter<"stream"> | string
    userId?: StringFilter<"stream"> | string
    inactive?: BoolFilter<"stream"> | boolean
    createdDate?: DateTimeFilter<"stream"> | Date | string
    updatedDate?: DateTimeNullableFilter<"stream"> | Date | string | null
  }

  export type liveUpsertWithWhereUniqueWithoutUserInput = {
    where: liveWhereUniqueInput
    update: XOR<liveUpdateWithoutUserInput, liveUncheckedUpdateWithoutUserInput>
    create: XOR<liveCreateWithoutUserInput, liveUncheckedCreateWithoutUserInput>
  }

  export type liveUpdateWithWhereUniqueWithoutUserInput = {
    where: liveWhereUniqueInput
    data: XOR<liveUpdateWithoutUserInput, liveUncheckedUpdateWithoutUserInput>
  }

  export type liveUpdateManyWithWhereWithoutUserInput = {
    where: liveScalarWhereInput
    data: XOR<liveUpdateManyMutationInput, liveUncheckedUpdateManyWithoutUserInput>
  }

  export type reportUpsertWithWhereUniqueWithoutUserInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutUserInput, reportUncheckedUpdateWithoutUserInput>
    create: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput>
  }

  export type reportUpdateWithWhereUniqueWithoutUserInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutUserInput, reportUncheckedUpdateWithoutUserInput>
  }

  export type reportUpdateManyWithWhereWithoutUserInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutUserInput>
  }

  export type auditUpsertWithWhereUniqueWithoutUserInput = {
    where: auditWhereUniqueInput
    update: XOR<auditUpdateWithoutUserInput, auditUncheckedUpdateWithoutUserInput>
    create: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
  }

  export type auditUpdateWithWhereUniqueWithoutUserInput = {
    where: auditWhereUniqueInput
    data: XOR<auditUpdateWithoutUserInput, auditUncheckedUpdateWithoutUserInput>
  }

  export type auditUpdateManyWithWhereWithoutUserInput = {
    where: auditScalarWhereInput
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyWithoutUserInput>
  }

  export type auditScalarWhereInput = {
    AND?: auditScalarWhereInput | auditScalarWhereInput[]
    OR?: auditScalarWhereInput[]
    NOT?: auditScalarWhereInput | auditScalarWhereInput[]
    id?: StringFilter<"audit"> | string
    entityName?: StringFilter<"audit"> | string
    entityId?: StringFilter<"audit"> | string
    fieldName?: StringNullableFilter<"audit"> | string | null
    fieldValue?: StringNullableFilter<"audit"> | string | null
    userId?: StringNullableFilter<"audit"> | string | null
    createdDate?: DateTimeNullableFilter<"audit"> | Date | string | null
  }

  export type notificationUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: StringFilter<"notification"> | string
    link?: StringNullableFilter<"notification"> | string | null
    photo?: StringNullableFilter<"notification"> | string | null
    title?: StringFilter<"notification"> | string
    description?: StringNullableFilter<"notification"> | string | null
    caption?: StringNullableFilter<"notification"> | string | null
    entityId?: StringNullableFilter<"notification"> | string | null
    entityName?: StringNullableFilter<"notification"> | string | null
    status?: StringNullableFilter<"notification"> | string | null
    userId?: StringFilter<"notification"> | string
    createdDate?: DateTimeNullableFilter<"notification"> | Date | string | null
  }

  export type authenticationUpsertWithWhereUniqueWithoutUserInput = {
    where: authenticationWhereUniqueInput
    update: XOR<authenticationUpdateWithoutUserInput, authenticationUncheckedUpdateWithoutUserInput>
    create: XOR<authenticationCreateWithoutUserInput, authenticationUncheckedCreateWithoutUserInput>
  }

  export type authenticationUpdateWithWhereUniqueWithoutUserInput = {
    where: authenticationWhereUniqueInput
    data: XOR<authenticationUpdateWithoutUserInput, authenticationUncheckedUpdateWithoutUserInput>
  }

  export type authenticationUpdateManyWithWhereWithoutUserInput = {
    where: authenticationScalarWhereInput
    data: XOR<authenticationUpdateManyMutationInput, authenticationUncheckedUpdateManyWithoutUserInput>
  }

  export type authenticationScalarWhereInput = {
    AND?: authenticationScalarWhereInput | authenticationScalarWhereInput[]
    OR?: authenticationScalarWhereInput[]
    NOT?: authenticationScalarWhereInput | authenticationScalarWhereInput[]
    id?: StringFilter<"authentication"> | string
    userId?: StringFilter<"authentication"> | string
    ipAddress?: StringNullableFilter<"authentication"> | string | null
    description?: StringNullableFilter<"authentication"> | string | null
    createdDate?: DateTimeFilter<"authentication"> | Date | string
    updatedDate?: DateTimeNullableFilter<"authentication"> | Date | string | null
  }

  export type userCreateWithoutAuthenticationInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamCreateNestedManyWithoutUserInput
    live?: liveCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    audit?: auditCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAuthenticationInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamUncheckedCreateNestedManyWithoutUserInput
    live?: liveUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAuthenticationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAuthenticationInput, userUncheckedCreateWithoutAuthenticationInput>
  }

  export type userUpsertWithoutAuthenticationInput = {
    update: XOR<userUpdateWithoutAuthenticationInput, userUncheckedUpdateWithoutAuthenticationInput>
    create: XOR<userCreateWithoutAuthenticationInput, userUncheckedCreateWithoutAuthenticationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAuthenticationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAuthenticationInput, userUncheckedUpdateWithoutAuthenticationInput>
  }

  export type userUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUpdateManyWithoutUserNestedInput
    live?: liveUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    audit?: auditUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUncheckedUpdateManyWithoutUserNestedInput
    live?: liveUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutAuditInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamCreateNestedManyWithoutUserInput
    live?: liveCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
    authentication?: authenticationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAuditInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamUncheckedCreateNestedManyWithoutUserInput
    live?: liveUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
    authentication?: authenticationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAuditInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
  }

  export type userUpsertWithoutAuditInput = {
    update: XOR<userUpdateWithoutAuditInput, userUncheckedUpdateWithoutAuditInput>
    create: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAuditInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAuditInput, userUncheckedUpdateWithoutAuditInput>
  }

  export type userUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUpdateManyWithoutUserNestedInput
    live?: liveUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
    authentication?: authenticationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUncheckedUpdateManyWithoutUserNestedInput
    live?: liveUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
    authentication?: authenticationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutNotificationInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamCreateNestedManyWithoutUserInput
    live?: liveCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    audit?: auditCreateNestedManyWithoutUserInput
    authentication?: authenticationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutNotificationInput = {
    id?: string
    email: string
    name: string
    password: string
    roles?: userCreaterolesInput | string[]
    isVerified?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    photo?: string | null
    stream?: streamUncheckedCreateNestedManyWithoutUserInput
    live?: liveUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    authentication?: authenticationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutNotificationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
  }

  export type userUpsertWithoutNotificationInput = {
    update: XOR<userUpdateWithoutNotificationInput, userUncheckedUpdateWithoutNotificationInput>
    create: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotificationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotificationInput, userUncheckedUpdateWithoutNotificationInput>
  }

  export type userUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUpdateManyWithoutUserNestedInput
    live?: liveUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    audit?: auditUpdateManyWithoutUserNestedInput
    authentication?: authenticationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: userUpdaterolesInput | string[]
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    stream?: streamUncheckedUpdateManyWithoutUserNestedInput
    live?: liveUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    authentication?: authenticationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type reportCreateManyLiveInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutReportNestedInput
    reportItems?: reportItemsUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportItems?: reportItemsUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateManyWithoutLiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportItemsCreateManyReportInput = {
    id?: string
    data?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportItemsUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportItemsUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportItemsUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type liveCreateManyStreamInput = {
    id?: string
    path: string
    userId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type liveUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutLiveNestedInput
    report?: reportUpdateManyWithoutLiveNestedInput
  }

  export type liveUncheckedUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: reportUncheckedUpdateManyWithoutLiveNestedInput
  }

  export type liveUncheckedUpdateManyWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type streamCreateManyUserInput = {
    id?: string
    url: string
    inactive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type liveCreateManyUserInput = {
    id?: string
    path: string
    streamId: string
    expiryDate?: Date | string | null
    expiryTimeInMinutes?: number | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type reportCreateManyUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    liveId: string
    thumbnailUrl?: string | null
    recordUrl?: string | null
    expiryTimeInMinutes?: number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type auditCreateManyUserInput = {
    id?: string
    entityName: string
    entityId: string
    fieldName?: string | null
    fieldValue?: string | null
    createdDate?: Date | string | null
  }

  export type notificationCreateManyUserInput = {
    id?: string
    link?: string | null
    photo?: string | null
    title: string
    description?: string | null
    caption?: string | null
    entityId?: string | null
    entityName?: string | null
    status?: string | null
    createdDate?: Date | string | null
  }

  export type authenticationCreateManyUserInput = {
    id?: string
    ipAddress?: string | null
    description?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type streamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live?: liveUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live?: liveUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    inactive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type liveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stream?: streamUpdateOneRequiredWithoutLiveNestedInput
    report?: reportUpdateManyWithoutLiveNestedInput
  }

  export type liveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: reportUncheckedUpdateManyWithoutLiveNestedInput
  }

  export type liveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live?: liveUpdateOneRequiredWithoutReportNestedInput
    reportItems?: reportItemsUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    liveId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportItems?: reportItemsUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    liveId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiryTimeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    calculatedClass?: NullableJsonNullValueInput | InputJsonValue
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityName?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    fieldValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authenticationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authenticationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authenticationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
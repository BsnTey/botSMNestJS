
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model CitySM
 * 
 */
export type CitySM = $Result.DefaultSelection<Prisma.$CitySMPayload>
/**
 * Model UserCitySM
 * 
 */
export type UserCitySM = $Result.DefaultSelection<Prisma.$UserCitySMPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.citySM`: Exposes CRUD operations for the **CitySM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CitySMS
    * const citySMS = await prisma.citySM.findMany()
    * ```
    */
  get citySM(): Prisma.CitySMDelegate<ExtArgs>;

  /**
   * `prisma.userCitySM`: Exposes CRUD operations for the **UserCitySM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCitySMS
    * const userCitySMS = await prisma.userCitySM.findMany()
    * ```
    */
  get userCitySM(): Prisma.UserCitySMDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Account: 'Account',
    CitySM: 'CitySM',
    UserCitySM: 'UserCitySM'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'account' | 'citySM' | 'userCitySM'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      CitySM: {
        payload: Prisma.$CitySMPayload<ExtArgs>
        fields: Prisma.CitySMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitySMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitySMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>
          }
          findFirst: {
            args: Prisma.CitySMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitySMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>
          }
          findMany: {
            args: Prisma.CitySMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>[]
          }
          create: {
            args: Prisma.CitySMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>
          }
          createMany: {
            args: Prisma.CitySMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CitySMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>
          }
          update: {
            args: Prisma.CitySMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>
          }
          deleteMany: {
            args: Prisma.CitySMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CitySMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CitySMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitySMPayload>
          }
          aggregate: {
            args: Prisma.CitySMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCitySM>
          }
          groupBy: {
            args: Prisma.CitySMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CitySMGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitySMCountArgs<ExtArgs>,
            result: $Utils.Optional<CitySMCountAggregateOutputType> | number
          }
        }
      }
      UserCitySM: {
        payload: Prisma.$UserCitySMPayload<ExtArgs>
        fields: Prisma.UserCitySMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCitySMFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCitySMFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>
          }
          findFirst: {
            args: Prisma.UserCitySMFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCitySMFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>
          }
          findMany: {
            args: Prisma.UserCitySMFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>[]
          }
          create: {
            args: Prisma.UserCitySMCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>
          }
          createMany: {
            args: Prisma.UserCitySMCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserCitySMDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>
          }
          update: {
            args: Prisma.UserCitySMUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>
          }
          deleteMany: {
            args: Prisma.UserCitySMDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserCitySMUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserCitySMUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCitySMPayload>
          }
          aggregate: {
            args: Prisma.UserCitySMAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserCitySM>
          }
          groupBy: {
            args: Prisma.UserCitySMGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserCitySMGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCitySMCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCitySMCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    userCities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean
    userCities?: boolean
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
   * Count Type CitySMCountOutputType
   */

  export type CitySMCountOutputType = {
    cityUsers: number
  }

  export type CitySMCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cityUsers?: boolean
  }

  // Custom InputTypes

  /**
   * CitySMCountOutputType without action
   */
  export type CitySMCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySMCountOutputType
     */
    select?: CitySMCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    countBonuses: number | null
  }

  export type UserSumAggregateOutputType = {
    countBonuses: number | null
  }

  export type UserMinAggregateOutputType = {
    telegramId: string | null
    telegramName: string | null
    firstName: string | null
    login: string | null
    password: string | null
    email: string | null
    countBonuses: number | null
    isBan: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    telegramId: string | null
    telegramName: string | null
    firstName: string | null
    login: string | null
    password: string | null
    email: string | null
    countBonuses: number | null
    isBan: boolean | null
  }

  export type UserCountAggregateOutputType = {
    telegramId: number
    telegramName: number
    firstName: number
    login: number
    password: number
    email: number
    countBonuses: number
    isBan: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    countBonuses?: true
  }

  export type UserSumAggregateInputType = {
    countBonuses?: true
  }

  export type UserMinAggregateInputType = {
    telegramId?: true
    telegramName?: true
    firstName?: true
    login?: true
    password?: true
    email?: true
    countBonuses?: true
    isBan?: true
  }

  export type UserMaxAggregateInputType = {
    telegramId?: true
    telegramName?: true
    firstName?: true
    login?: true
    password?: true
    email?: true
    countBonuses?: true
    isBan?: true
  }

  export type UserCountAggregateInputType = {
    telegramId?: true
    telegramName?: true
    firstName?: true
    login?: true
    password?: true
    email?: true
    countBonuses?: true
    isBan?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    telegramId: string
    telegramName: string
    firstName: string | null
    login: string | null
    password: string | null
    email: string | null
    countBonuses: number
    isBan: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    telegramId?: boolean
    telegramName?: boolean
    firstName?: boolean
    login?: boolean
    password?: boolean
    email?: boolean
    countBonuses?: boolean
    isBan?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userCities?: boolean | User$userCitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    telegramId?: boolean
    telegramName?: boolean
    firstName?: boolean
    login?: boolean
    password?: boolean
    email?: boolean
    countBonuses?: boolean
    isBan?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userCities?: boolean | User$userCitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      userCities: Prisma.$UserCitySMPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      telegramId: string
      telegramName: string
      firstName: string | null
      login: string | null
      password: string | null
      email: string | null
      countBonuses: number
      isBan: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `telegramId`
     * const userWithTelegramIdOnly = await prisma.user.findMany({ select: { telegramId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    userCities<T extends User$userCitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly telegramId: FieldRef<"User", 'String'>
    readonly telegramName: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly login: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly countBonuses: FieldRef<"User", 'Int'>
    readonly isBan: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum[]
  }


  /**
   * User.userCities
   */
  export type User$userCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    where?: UserCitySMWhereInput
    orderBy?: UserCitySMOrderByWithRelationInput | UserCitySMOrderByWithRelationInput[]
    cursor?: UserCitySMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCitySMScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expiresIn: number | null
  }

  export type AccountSumAggregateOutputType = {
    expiresIn: number | null
  }

  export type AccountMinAggregateOutputType = {
    accountId: string | null
    email: string | null
    passImap: string | null
    passEmail: string | null
    cookie: string | null
    accessToken: string | null
    refreshToken: string | null
    xUserId: string | null
    deviceId: string | null
    installationId: string | null
    expiresIn: number | null
    isAccessMp: boolean | null
    isAccessCookie: boolean | null
    isOnlyAccessOrder: boolean | null
    bonusCount: string | null
    isUpdateBonus: boolean | null
    userOwnerId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    accountId: string | null
    email: string | null
    passImap: string | null
    passEmail: string | null
    cookie: string | null
    accessToken: string | null
    refreshToken: string | null
    xUserId: string | null
    deviceId: string | null
    installationId: string | null
    expiresIn: number | null
    isAccessMp: boolean | null
    isAccessCookie: boolean | null
    isOnlyAccessOrder: boolean | null
    bonusCount: string | null
    isUpdateBonus: boolean | null
    userOwnerId: string | null
  }

  export type AccountCountAggregateOutputType = {
    accountId: number
    email: number
    passImap: number
    passEmail: number
    cookie: number
    accessToken: number
    refreshToken: number
    xUserId: number
    deviceId: number
    installationId: number
    expiresIn: number
    isAccessMp: number
    isAccessCookie: number
    isOnlyAccessOrder: number
    bonusCount: number
    isUpdateBonus: number
    userOwnerId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expiresIn?: true
  }

  export type AccountSumAggregateInputType = {
    expiresIn?: true
  }

  export type AccountMinAggregateInputType = {
    accountId?: true
    email?: true
    passImap?: true
    passEmail?: true
    cookie?: true
    accessToken?: true
    refreshToken?: true
    xUserId?: true
    deviceId?: true
    installationId?: true
    expiresIn?: true
    isAccessMp?: true
    isAccessCookie?: true
    isOnlyAccessOrder?: true
    bonusCount?: true
    isUpdateBonus?: true
    userOwnerId?: true
  }

  export type AccountMaxAggregateInputType = {
    accountId?: true
    email?: true
    passImap?: true
    passEmail?: true
    cookie?: true
    accessToken?: true
    refreshToken?: true
    xUserId?: true
    deviceId?: true
    installationId?: true
    expiresIn?: true
    isAccessMp?: true
    isAccessCookie?: true
    isOnlyAccessOrder?: true
    bonusCount?: true
    isUpdateBonus?: true
    userOwnerId?: true
  }

  export type AccountCountAggregateInputType = {
    accountId?: true
    email?: true
    passImap?: true
    passEmail?: true
    cookie?: true
    accessToken?: true
    refreshToken?: true
    xUserId?: true
    deviceId?: true
    installationId?: true
    expiresIn?: true
    isAccessMp?: true
    isAccessCookie?: true
    isOnlyAccessOrder?: true
    bonusCount?: true
    isUpdateBonus?: true
    userOwnerId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp: boolean
    isAccessCookie: boolean
    isOnlyAccessOrder: boolean
    bonusCount: string
    isUpdateBonus: boolean
    userOwnerId: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    email?: boolean
    passImap?: boolean
    passEmail?: boolean
    cookie?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    xUserId?: boolean
    deviceId?: boolean
    installationId?: boolean
    expiresIn?: boolean
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount?: boolean
    isUpdateBonus?: boolean
    userOwnerId?: boolean
    userOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    accountId?: boolean
    email?: boolean
    passImap?: boolean
    passEmail?: boolean
    cookie?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    xUserId?: boolean
    deviceId?: boolean
    installationId?: boolean
    expiresIn?: boolean
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount?: boolean
    isUpdateBonus?: boolean
    userOwnerId?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userOwner?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      userOwner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      accountId: string
      email: string
      passImap: string
      passEmail: string
      cookie: string
      accessToken: string
      refreshToken: string
      xUserId: string
      deviceId: string
      installationId: string
      expiresIn: number
      isAccessMp: boolean
      isAccessCookie: boolean
      isOnlyAccessOrder: boolean
      bonusCount: string
      isUpdateBonus: boolean
      userOwnerId: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const accountWithAccountIdOnly = await prisma.account.findMany({ select: { accountId: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly accountId: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly passImap: FieldRef<"Account", 'String'>
    readonly passEmail: FieldRef<"Account", 'String'>
    readonly cookie: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly xUserId: FieldRef<"Account", 'String'>
    readonly deviceId: FieldRef<"Account", 'String'>
    readonly installationId: FieldRef<"Account", 'String'>
    readonly expiresIn: FieldRef<"Account", 'Int'>
    readonly isAccessMp: FieldRef<"Account", 'Boolean'>
    readonly isAccessCookie: FieldRef<"Account", 'Boolean'>
    readonly isOnlyAccessOrder: FieldRef<"Account", 'Boolean'>
    readonly bonusCount: FieldRef<"Account", 'String'>
    readonly isUpdateBonus: FieldRef<"Account", 'Boolean'>
    readonly userOwnerId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model CitySM
   */

  export type AggregateCitySM = {
    _count: CitySMCountAggregateOutputType | null
    _min: CitySMMinAggregateOutputType | null
    _max: CitySMMaxAggregateOutputType | null
  }

  export type CitySMMinAggregateOutputType = {
    cityId: string | null
    name: string | null
    fullName: string | null
  }

  export type CitySMMaxAggregateOutputType = {
    cityId: string | null
    name: string | null
    fullName: string | null
  }

  export type CitySMCountAggregateOutputType = {
    cityId: number
    name: number
    fullName: number
    _all: number
  }


  export type CitySMMinAggregateInputType = {
    cityId?: true
    name?: true
    fullName?: true
  }

  export type CitySMMaxAggregateInputType = {
    cityId?: true
    name?: true
    fullName?: true
  }

  export type CitySMCountAggregateInputType = {
    cityId?: true
    name?: true
    fullName?: true
    _all?: true
  }

  export type CitySMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CitySM to aggregate.
     */
    where?: CitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySMS to fetch.
     */
    orderBy?: CitySMOrderByWithRelationInput | CitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CitySMS
    **/
    _count?: true | CitySMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitySMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitySMMaxAggregateInputType
  }

  export type GetCitySMAggregateType<T extends CitySMAggregateArgs> = {
        [P in keyof T & keyof AggregateCitySM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitySM[P]>
      : GetScalarType<T[P], AggregateCitySM[P]>
  }




  export type CitySMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitySMWhereInput
    orderBy?: CitySMOrderByWithAggregationInput | CitySMOrderByWithAggregationInput[]
    by: CitySMScalarFieldEnum[] | CitySMScalarFieldEnum
    having?: CitySMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitySMCountAggregateInputType | true
    _min?: CitySMMinAggregateInputType
    _max?: CitySMMaxAggregateInputType
  }

  export type CitySMGroupByOutputType = {
    cityId: string
    name: string
    fullName: string
    _count: CitySMCountAggregateOutputType | null
    _min: CitySMMinAggregateOutputType | null
    _max: CitySMMaxAggregateOutputType | null
  }

  type GetCitySMGroupByPayload<T extends CitySMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitySMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitySMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitySMGroupByOutputType[P]>
            : GetScalarType<T[P], CitySMGroupByOutputType[P]>
        }
      >
    >


  export type CitySMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cityId?: boolean
    name?: boolean
    fullName?: boolean
    cityUsers?: boolean | CitySM$cityUsersArgs<ExtArgs>
    _count?: boolean | CitySMCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citySM"]>

  export type CitySMSelectScalar = {
    cityId?: boolean
    name?: boolean
    fullName?: boolean
  }

  export type CitySMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cityUsers?: boolean | CitySM$cityUsersArgs<ExtArgs>
    _count?: boolean | CitySMCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CitySMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CitySM"
    objects: {
      cityUsers: Prisma.$UserCitySMPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cityId: string
      name: string
      fullName: string
    }, ExtArgs["result"]["citySM"]>
    composites: {}
  }


  type CitySMGetPayload<S extends boolean | null | undefined | CitySMDefaultArgs> = $Result.GetResult<Prisma.$CitySMPayload, S>

  type CitySMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CitySMFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CitySMCountAggregateInputType | true
    }

  export interface CitySMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CitySM'], meta: { name: 'CitySM' } }
    /**
     * Find zero or one CitySM that matches the filter.
     * @param {CitySMFindUniqueArgs} args - Arguments to find a CitySM
     * @example
     * // Get one CitySM
     * const citySM = await prisma.citySM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CitySMFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CitySMFindUniqueArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CitySM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CitySMFindUniqueOrThrowArgs} args - Arguments to find a CitySM
     * @example
     * // Get one CitySM
     * const citySM = await prisma.citySM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CitySMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CitySMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CitySM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMFindFirstArgs} args - Arguments to find a CitySM
     * @example
     * // Get one CitySM
     * const citySM = await prisma.citySM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CitySMFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CitySMFindFirstArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CitySM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMFindFirstOrThrowArgs} args - Arguments to find a CitySM
     * @example
     * // Get one CitySM
     * const citySM = await prisma.citySM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CitySMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CitySMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CitySMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CitySMS
     * const citySMS = await prisma.citySM.findMany()
     * 
     * // Get first 10 CitySMS
     * const citySMS = await prisma.citySM.findMany({ take: 10 })
     * 
     * // Only select the `cityId`
     * const citySMWithCityIdOnly = await prisma.citySM.findMany({ select: { cityId: true } })
     * 
    **/
    findMany<T extends CitySMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CitySMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CitySM.
     * @param {CitySMCreateArgs} args - Arguments to create a CitySM.
     * @example
     * // Create one CitySM
     * const CitySM = await prisma.citySM.create({
     *   data: {
     *     // ... data to create a CitySM
     *   }
     * })
     * 
    **/
    create<T extends CitySMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CitySMCreateArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CitySMS.
     *     @param {CitySMCreateManyArgs} args - Arguments to create many CitySMS.
     *     @example
     *     // Create many CitySMS
     *     const citySM = await prisma.citySM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CitySMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CitySMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CitySM.
     * @param {CitySMDeleteArgs} args - Arguments to delete one CitySM.
     * @example
     * // Delete one CitySM
     * const CitySM = await prisma.citySM.delete({
     *   where: {
     *     // ... filter to delete one CitySM
     *   }
     * })
     * 
    **/
    delete<T extends CitySMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CitySMDeleteArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CitySM.
     * @param {CitySMUpdateArgs} args - Arguments to update one CitySM.
     * @example
     * // Update one CitySM
     * const citySM = await prisma.citySM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CitySMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CitySMUpdateArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CitySMS.
     * @param {CitySMDeleteManyArgs} args - Arguments to filter CitySMS to delete.
     * @example
     * // Delete a few CitySMS
     * const { count } = await prisma.citySM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CitySMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CitySMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CitySMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CitySMS
     * const citySM = await prisma.citySM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CitySMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CitySMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CitySM.
     * @param {CitySMUpsertArgs} args - Arguments to update or create a CitySM.
     * @example
     * // Update or create a CitySM
     * const citySM = await prisma.citySM.upsert({
     *   create: {
     *     // ... data to create a CitySM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CitySM we want to update
     *   }
     * })
    **/
    upsert<T extends CitySMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CitySMUpsertArgs<ExtArgs>>
    ): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CitySMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMCountArgs} args - Arguments to filter CitySMS to count.
     * @example
     * // Count the number of CitySMS
     * const count = await prisma.citySM.count({
     *   where: {
     *     // ... the filter for the CitySMS we want to count
     *   }
     * })
    **/
    count<T extends CitySMCountArgs>(
      args?: Subset<T, CitySMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitySMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CitySM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitySMAggregateArgs>(args: Subset<T, CitySMAggregateArgs>): Prisma.PrismaPromise<GetCitySMAggregateType<T>>

    /**
     * Group by CitySM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySMGroupByArgs} args - Group by arguments.
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
      T extends CitySMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitySMGroupByArgs['orderBy'] }
        : { orderBy?: CitySMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitySMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitySMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CitySM model
   */
  readonly fields: CitySMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CitySM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitySMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cityUsers<T extends CitySM$cityUsersArgs<ExtArgs> = {}>(args?: Subset<T, CitySM$cityUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CitySM model
   */ 
  interface CitySMFieldRefs {
    readonly cityId: FieldRef<"CitySM", 'String'>
    readonly name: FieldRef<"CitySM", 'String'>
    readonly fullName: FieldRef<"CitySM", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CitySM findUnique
   */
  export type CitySMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * Filter, which CitySM to fetch.
     */
    where: CitySMWhereUniqueInput
  }


  /**
   * CitySM findUniqueOrThrow
   */
  export type CitySMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * Filter, which CitySM to fetch.
     */
    where: CitySMWhereUniqueInput
  }


  /**
   * CitySM findFirst
   */
  export type CitySMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * Filter, which CitySM to fetch.
     */
    where?: CitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySMS to fetch.
     */
    orderBy?: CitySMOrderByWithRelationInput | CitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CitySMS.
     */
    cursor?: CitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CitySMS.
     */
    distinct?: CitySMScalarFieldEnum[]
  }


  /**
   * CitySM findFirstOrThrow
   */
  export type CitySMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * Filter, which CitySM to fetch.
     */
    where?: CitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySMS to fetch.
     */
    orderBy?: CitySMOrderByWithRelationInput | CitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CitySMS.
     */
    cursor?: CitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CitySMS.
     */
    distinct?: CitySMScalarFieldEnum[]
  }


  /**
   * CitySM findMany
   */
  export type CitySMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * Filter, which CitySMS to fetch.
     */
    where?: CitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySMS to fetch.
     */
    orderBy?: CitySMOrderByWithRelationInput | CitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CitySMS.
     */
    cursor?: CitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySMS.
     */
    skip?: number
    distinct?: CitySMScalarFieldEnum[]
  }


  /**
   * CitySM create
   */
  export type CitySMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * The data needed to create a CitySM.
     */
    data: XOR<CitySMCreateInput, CitySMUncheckedCreateInput>
  }


  /**
   * CitySM createMany
   */
  export type CitySMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CitySMS.
     */
    data: CitySMCreateManyInput | CitySMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CitySM update
   */
  export type CitySMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * The data needed to update a CitySM.
     */
    data: XOR<CitySMUpdateInput, CitySMUncheckedUpdateInput>
    /**
     * Choose, which CitySM to update.
     */
    where: CitySMWhereUniqueInput
  }


  /**
   * CitySM updateMany
   */
  export type CitySMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CitySMS.
     */
    data: XOR<CitySMUpdateManyMutationInput, CitySMUncheckedUpdateManyInput>
    /**
     * Filter which CitySMS to update
     */
    where?: CitySMWhereInput
  }


  /**
   * CitySM upsert
   */
  export type CitySMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * The filter to search for the CitySM to update in case it exists.
     */
    where: CitySMWhereUniqueInput
    /**
     * In case the CitySM found by the `where` argument doesn't exist, create a new CitySM with this data.
     */
    create: XOR<CitySMCreateInput, CitySMUncheckedCreateInput>
    /**
     * In case the CitySM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitySMUpdateInput, CitySMUncheckedUpdateInput>
  }


  /**
   * CitySM delete
   */
  export type CitySMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
    /**
     * Filter which CitySM to delete.
     */
    where: CitySMWhereUniqueInput
  }


  /**
   * CitySM deleteMany
   */
  export type CitySMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CitySMS to delete
     */
    where?: CitySMWhereInput
  }


  /**
   * CitySM.cityUsers
   */
  export type CitySM$cityUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    where?: UserCitySMWhereInput
    orderBy?: UserCitySMOrderByWithRelationInput | UserCitySMOrderByWithRelationInput[]
    cursor?: UserCitySMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCitySMScalarFieldEnum[]
  }


  /**
   * CitySM without action
   */
  export type CitySMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySM
     */
    select?: CitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitySMInclude<ExtArgs> | null
  }



  /**
   * Model UserCitySM
   */

  export type AggregateUserCitySM = {
    _count: UserCitySMCountAggregateOutputType | null
    _min: UserCitySMMinAggregateOutputType | null
    _max: UserCitySMMaxAggregateOutputType | null
  }

  export type UserCitySMMinAggregateOutputType = {
    cityId: string | null
    userId: string | null
  }

  export type UserCitySMMaxAggregateOutputType = {
    cityId: string | null
    userId: string | null
  }

  export type UserCitySMCountAggregateOutputType = {
    cityId: number
    userId: number
    _all: number
  }


  export type UserCitySMMinAggregateInputType = {
    cityId?: true
    userId?: true
  }

  export type UserCitySMMaxAggregateInputType = {
    cityId?: true
    userId?: true
  }

  export type UserCitySMCountAggregateInputType = {
    cityId?: true
    userId?: true
    _all?: true
  }

  export type UserCitySMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCitySM to aggregate.
     */
    where?: UserCitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCitySMS to fetch.
     */
    orderBy?: UserCitySMOrderByWithRelationInput | UserCitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCitySMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCitySMS
    **/
    _count?: true | UserCitySMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCitySMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCitySMMaxAggregateInputType
  }

  export type GetUserCitySMAggregateType<T extends UserCitySMAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCitySM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCitySM[P]>
      : GetScalarType<T[P], AggregateUserCitySM[P]>
  }




  export type UserCitySMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCitySMWhereInput
    orderBy?: UserCitySMOrderByWithAggregationInput | UserCitySMOrderByWithAggregationInput[]
    by: UserCitySMScalarFieldEnum[] | UserCitySMScalarFieldEnum
    having?: UserCitySMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCitySMCountAggregateInputType | true
    _min?: UserCitySMMinAggregateInputType
    _max?: UserCitySMMaxAggregateInputType
  }

  export type UserCitySMGroupByOutputType = {
    cityId: string
    userId: string
    _count: UserCitySMCountAggregateOutputType | null
    _min: UserCitySMMinAggregateOutputType | null
    _max: UserCitySMMaxAggregateOutputType | null
  }

  type GetUserCitySMGroupByPayload<T extends UserCitySMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCitySMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCitySMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCitySMGroupByOutputType[P]>
            : GetScalarType<T[P], UserCitySMGroupByOutputType[P]>
        }
      >
    >


  export type UserCitySMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cityId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CitySMDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCitySM"]>

  export type UserCitySMSelectScalar = {
    cityId?: boolean
    userId?: boolean
  }

  export type UserCitySMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CitySMDefaultArgs<ExtArgs>
  }


  export type $UserCitySMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCitySM"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      city: Prisma.$CitySMPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cityId: string
      userId: string
    }, ExtArgs["result"]["userCitySM"]>
    composites: {}
  }


  type UserCitySMGetPayload<S extends boolean | null | undefined | UserCitySMDefaultArgs> = $Result.GetResult<Prisma.$UserCitySMPayload, S>

  type UserCitySMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCitySMFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCitySMCountAggregateInputType | true
    }

  export interface UserCitySMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCitySM'], meta: { name: 'UserCitySM' } }
    /**
     * Find zero or one UserCitySM that matches the filter.
     * @param {UserCitySMFindUniqueArgs} args - Arguments to find a UserCitySM
     * @example
     * // Get one UserCitySM
     * const userCitySM = await prisma.userCitySM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserCitySMFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserCitySMFindUniqueArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserCitySM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserCitySMFindUniqueOrThrowArgs} args - Arguments to find a UserCitySM
     * @example
     * // Get one UserCitySM
     * const userCitySM = await prisma.userCitySM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserCitySMFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCitySMFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserCitySM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMFindFirstArgs} args - Arguments to find a UserCitySM
     * @example
     * // Get one UserCitySM
     * const userCitySM = await prisma.userCitySM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserCitySMFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCitySMFindFirstArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserCitySM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMFindFirstOrThrowArgs} args - Arguments to find a UserCitySM
     * @example
     * // Get one UserCitySM
     * const userCitySM = await prisma.userCitySM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserCitySMFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCitySMFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserCitySMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCitySMS
     * const userCitySMS = await prisma.userCitySM.findMany()
     * 
     * // Get first 10 UserCitySMS
     * const userCitySMS = await prisma.userCitySM.findMany({ take: 10 })
     * 
     * // Only select the `cityId`
     * const userCitySMWithCityIdOnly = await prisma.userCitySM.findMany({ select: { cityId: true } })
     * 
    **/
    findMany<T extends UserCitySMFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCitySMFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserCitySM.
     * @param {UserCitySMCreateArgs} args - Arguments to create a UserCitySM.
     * @example
     * // Create one UserCitySM
     * const UserCitySM = await prisma.userCitySM.create({
     *   data: {
     *     // ... data to create a UserCitySM
     *   }
     * })
     * 
    **/
    create<T extends UserCitySMCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCitySMCreateArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserCitySMS.
     *     @param {UserCitySMCreateManyArgs} args - Arguments to create many UserCitySMS.
     *     @example
     *     // Create many UserCitySMS
     *     const userCitySM = await prisma.userCitySM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCitySMCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCitySMCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCitySM.
     * @param {UserCitySMDeleteArgs} args - Arguments to delete one UserCitySM.
     * @example
     * // Delete one UserCitySM
     * const UserCitySM = await prisma.userCitySM.delete({
     *   where: {
     *     // ... filter to delete one UserCitySM
     *   }
     * })
     * 
    **/
    delete<T extends UserCitySMDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserCitySMDeleteArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserCitySM.
     * @param {UserCitySMUpdateArgs} args - Arguments to update one UserCitySM.
     * @example
     * // Update one UserCitySM
     * const userCitySM = await prisma.userCitySM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserCitySMUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCitySMUpdateArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserCitySMS.
     * @param {UserCitySMDeleteManyArgs} args - Arguments to filter UserCitySMS to delete.
     * @example
     * // Delete a few UserCitySMS
     * const { count } = await prisma.userCitySM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserCitySMDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCitySMDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCitySMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCitySMS
     * const userCitySM = await prisma.userCitySM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserCitySMUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserCitySMUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCitySM.
     * @param {UserCitySMUpsertArgs} args - Arguments to update or create a UserCitySM.
     * @example
     * // Update or create a UserCitySM
     * const userCitySM = await prisma.userCitySM.upsert({
     *   create: {
     *     // ... data to create a UserCitySM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCitySM we want to update
     *   }
     * })
    **/
    upsert<T extends UserCitySMUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserCitySMUpsertArgs<ExtArgs>>
    ): Prisma__UserCitySMClient<$Result.GetResult<Prisma.$UserCitySMPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserCitySMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMCountArgs} args - Arguments to filter UserCitySMS to count.
     * @example
     * // Count the number of UserCitySMS
     * const count = await prisma.userCitySM.count({
     *   where: {
     *     // ... the filter for the UserCitySMS we want to count
     *   }
     * })
    **/
    count<T extends UserCitySMCountArgs>(
      args?: Subset<T, UserCitySMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCitySMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCitySM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCitySMAggregateArgs>(args: Subset<T, UserCitySMAggregateArgs>): Prisma.PrismaPromise<GetUserCitySMAggregateType<T>>

    /**
     * Group by UserCitySM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCitySMGroupByArgs} args - Group by arguments.
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
      T extends UserCitySMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCitySMGroupByArgs['orderBy'] }
        : { orderBy?: UserCitySMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCitySMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCitySMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCitySM model
   */
  readonly fields: UserCitySMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCitySM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCitySMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    city<T extends CitySMDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitySMDefaultArgs<ExtArgs>>): Prisma__CitySMClient<$Result.GetResult<Prisma.$CitySMPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserCitySM model
   */ 
  interface UserCitySMFieldRefs {
    readonly cityId: FieldRef<"UserCitySM", 'String'>
    readonly userId: FieldRef<"UserCitySM", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserCitySM findUnique
   */
  export type UserCitySMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * Filter, which UserCitySM to fetch.
     */
    where: UserCitySMWhereUniqueInput
  }


  /**
   * UserCitySM findUniqueOrThrow
   */
  export type UserCitySMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * Filter, which UserCitySM to fetch.
     */
    where: UserCitySMWhereUniqueInput
  }


  /**
   * UserCitySM findFirst
   */
  export type UserCitySMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * Filter, which UserCitySM to fetch.
     */
    where?: UserCitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCitySMS to fetch.
     */
    orderBy?: UserCitySMOrderByWithRelationInput | UserCitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCitySMS.
     */
    cursor?: UserCitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCitySMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCitySMS.
     */
    distinct?: UserCitySMScalarFieldEnum[]
  }


  /**
   * UserCitySM findFirstOrThrow
   */
  export type UserCitySMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * Filter, which UserCitySM to fetch.
     */
    where?: UserCitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCitySMS to fetch.
     */
    orderBy?: UserCitySMOrderByWithRelationInput | UserCitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCitySMS.
     */
    cursor?: UserCitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCitySMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCitySMS.
     */
    distinct?: UserCitySMScalarFieldEnum[]
  }


  /**
   * UserCitySM findMany
   */
  export type UserCitySMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * Filter, which UserCitySMS to fetch.
     */
    where?: UserCitySMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCitySMS to fetch.
     */
    orderBy?: UserCitySMOrderByWithRelationInput | UserCitySMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCitySMS.
     */
    cursor?: UserCitySMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCitySMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCitySMS.
     */
    skip?: number
    distinct?: UserCitySMScalarFieldEnum[]
  }


  /**
   * UserCitySM create
   */
  export type UserCitySMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCitySM.
     */
    data: XOR<UserCitySMCreateInput, UserCitySMUncheckedCreateInput>
  }


  /**
   * UserCitySM createMany
   */
  export type UserCitySMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCitySMS.
     */
    data: UserCitySMCreateManyInput | UserCitySMCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserCitySM update
   */
  export type UserCitySMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCitySM.
     */
    data: XOR<UserCitySMUpdateInput, UserCitySMUncheckedUpdateInput>
    /**
     * Choose, which UserCitySM to update.
     */
    where: UserCitySMWhereUniqueInput
  }


  /**
   * UserCitySM updateMany
   */
  export type UserCitySMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCitySMS.
     */
    data: XOR<UserCitySMUpdateManyMutationInput, UserCitySMUncheckedUpdateManyInput>
    /**
     * Filter which UserCitySMS to update
     */
    where?: UserCitySMWhereInput
  }


  /**
   * UserCitySM upsert
   */
  export type UserCitySMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCitySM to update in case it exists.
     */
    where: UserCitySMWhereUniqueInput
    /**
     * In case the UserCitySM found by the `where` argument doesn't exist, create a new UserCitySM with this data.
     */
    create: XOR<UserCitySMCreateInput, UserCitySMUncheckedCreateInput>
    /**
     * In case the UserCitySM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCitySMUpdateInput, UserCitySMUncheckedUpdateInput>
  }


  /**
   * UserCitySM delete
   */
  export type UserCitySMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
    /**
     * Filter which UserCitySM to delete.
     */
    where: UserCitySMWhereUniqueInput
  }


  /**
   * UserCitySM deleteMany
   */
  export type UserCitySMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCitySMS to delete
     */
    where?: UserCitySMWhereInput
  }


  /**
   * UserCitySM without action
   */
  export type UserCitySMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCitySM
     */
    select?: UserCitySMSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCitySMInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const AccountScalarFieldEnum: {
    accountId: 'accountId',
    email: 'email',
    passImap: 'passImap',
    passEmail: 'passEmail',
    cookie: 'cookie',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    xUserId: 'xUserId',
    deviceId: 'deviceId',
    installationId: 'installationId',
    expiresIn: 'expiresIn',
    isAccessMp: 'isAccessMp',
    isAccessCookie: 'isAccessCookie',
    isOnlyAccessOrder: 'isOnlyAccessOrder',
    bonusCount: 'bonusCount',
    isUpdateBonus: 'isUpdateBonus',
    userOwnerId: 'userOwnerId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CitySMScalarFieldEnum: {
    cityId: 'cityId',
    name: 'name',
    fullName: 'fullName'
  };

  export type CitySMScalarFieldEnum = (typeof CitySMScalarFieldEnum)[keyof typeof CitySMScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserCitySMScalarFieldEnum: {
    cityId: 'cityId',
    userId: 'userId'
  };

  export type UserCitySMScalarFieldEnum = (typeof UserCitySMScalarFieldEnum)[keyof typeof UserCitySMScalarFieldEnum]


  export const UserScalarFieldEnum: {
    telegramId: 'telegramId',
    telegramName: 'telegramName',
    firstName: 'firstName',
    login: 'login',
    password: 'password',
    email: 'email',
    countBonuses: 'countBonuses',
    isBan: 'isBan'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    telegramId?: StringFilter | string
    telegramName?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    login?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    countBonuses?: IntFilter | number
    isBan?: BoolFilter | boolean
    accounts?: AccountListRelationFilter
    userCities?: UserCitySMListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    telegramId?: SortOrder
    telegramName?: SortOrder
    firstName?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    countBonuses?: SortOrder
    isBan?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    userCities?: UserCitySMOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    telegramId?: string
  }

  export type UserOrderByWithAggregationInput = {
    telegramId?: SortOrder
    telegramName?: SortOrder
    firstName?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    countBonuses?: SortOrder
    isBan?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    telegramId?: StringWithAggregatesFilter | string
    telegramName?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    login?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    countBonuses?: IntWithAggregatesFilter | number
    isBan?: BoolWithAggregatesFilter | boolean
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter | string
    email?: StringFilter | string
    passImap?: StringFilter | string
    passEmail?: StringFilter | string
    cookie?: StringFilter | string
    accessToken?: StringFilter | string
    refreshToken?: StringFilter | string
    xUserId?: StringFilter | string
    deviceId?: StringFilter | string
    installationId?: StringFilter | string
    expiresIn?: IntFilter | number
    isAccessMp?: BoolFilter | boolean
    isAccessCookie?: BoolFilter | boolean
    isOnlyAccessOrder?: BoolFilter | boolean
    bonusCount?: StringFilter | string
    isUpdateBonus?: BoolFilter | boolean
    userOwnerId?: StringNullableFilter | string | null
    userOwner?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    accountId?: SortOrder
    email?: SortOrder
    passImap?: SortOrder
    passEmail?: SortOrder
    cookie?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    xUserId?: SortOrder
    deviceId?: SortOrder
    installationId?: SortOrder
    expiresIn?: SortOrder
    isAccessMp?: SortOrder
    isAccessCookie?: SortOrder
    isOnlyAccessOrder?: SortOrder
    bonusCount?: SortOrder
    isUpdateBonus?: SortOrder
    userOwnerId?: SortOrder
    userOwner?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    accountId?: string
  }

  export type AccountOrderByWithAggregationInput = {
    accountId?: SortOrder
    email?: SortOrder
    passImap?: SortOrder
    passEmail?: SortOrder
    cookie?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    xUserId?: SortOrder
    deviceId?: SortOrder
    installationId?: SortOrder
    expiresIn?: SortOrder
    isAccessMp?: SortOrder
    isAccessCookie?: SortOrder
    isOnlyAccessOrder?: SortOrder
    bonusCount?: SortOrder
    isUpdateBonus?: SortOrder
    userOwnerId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    accountId?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    passImap?: StringWithAggregatesFilter | string
    passEmail?: StringWithAggregatesFilter | string
    cookie?: StringWithAggregatesFilter | string
    accessToken?: StringWithAggregatesFilter | string
    refreshToken?: StringWithAggregatesFilter | string
    xUserId?: StringWithAggregatesFilter | string
    deviceId?: StringWithAggregatesFilter | string
    installationId?: StringWithAggregatesFilter | string
    expiresIn?: IntWithAggregatesFilter | number
    isAccessMp?: BoolWithAggregatesFilter | boolean
    isAccessCookie?: BoolWithAggregatesFilter | boolean
    isOnlyAccessOrder?: BoolWithAggregatesFilter | boolean
    bonusCount?: StringWithAggregatesFilter | string
    isUpdateBonus?: BoolWithAggregatesFilter | boolean
    userOwnerId?: StringNullableWithAggregatesFilter | string | null
  }

  export type CitySMWhereInput = {
    AND?: CitySMWhereInput | CitySMWhereInput[]
    OR?: CitySMWhereInput[]
    NOT?: CitySMWhereInput | CitySMWhereInput[]
    cityId?: StringFilter | string
    name?: StringFilter | string
    fullName?: StringFilter | string
    cityUsers?: UserCitySMListRelationFilter
  }

  export type CitySMOrderByWithRelationInput = {
    cityId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    cityUsers?: UserCitySMOrderByRelationAggregateInput
  }

  export type CitySMWhereUniqueInput = {
    cityId?: string
  }

  export type CitySMOrderByWithAggregationInput = {
    cityId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    _count?: CitySMCountOrderByAggregateInput
    _max?: CitySMMaxOrderByAggregateInput
    _min?: CitySMMinOrderByAggregateInput
  }

  export type CitySMScalarWhereWithAggregatesInput = {
    AND?: CitySMScalarWhereWithAggregatesInput | CitySMScalarWhereWithAggregatesInput[]
    OR?: CitySMScalarWhereWithAggregatesInput[]
    NOT?: CitySMScalarWhereWithAggregatesInput | CitySMScalarWhereWithAggregatesInput[]
    cityId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    fullName?: StringWithAggregatesFilter | string
  }

  export type UserCitySMWhereInput = {
    AND?: UserCitySMWhereInput | UserCitySMWhereInput[]
    OR?: UserCitySMWhereInput[]
    NOT?: UserCitySMWhereInput | UserCitySMWhereInput[]
    cityId?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    city?: XOR<CitySMRelationFilter, CitySMWhereInput>
  }

  export type UserCitySMOrderByWithRelationInput = {
    cityId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    city?: CitySMOrderByWithRelationInput
  }

  export type UserCitySMWhereUniqueInput = {
    cityId_userId?: UserCitySMCityIdUserIdCompoundUniqueInput
  }

  export type UserCitySMOrderByWithAggregationInput = {
    cityId?: SortOrder
    userId?: SortOrder
    _count?: UserCitySMCountOrderByAggregateInput
    _max?: UserCitySMMaxOrderByAggregateInput
    _min?: UserCitySMMinOrderByAggregateInput
  }

  export type UserCitySMScalarWhereWithAggregatesInput = {
    AND?: UserCitySMScalarWhereWithAggregatesInput | UserCitySMScalarWhereWithAggregatesInput[]
    OR?: UserCitySMScalarWhereWithAggregatesInput[]
    NOT?: UserCitySMScalarWhereWithAggregatesInput | UserCitySMScalarWhereWithAggregatesInput[]
    cityId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
    accounts?: AccountCreateNestedManyWithoutUserOwnerInput
    userCities?: UserCitySMCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserOwnerInput
    userCities?: UserCitySMUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserOwnerNestedInput
    userCities?: UserCitySMUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserOwnerNestedInput
    userCities?: UserCitySMUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
  }

  export type UserUpdateManyMutationInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateInput = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount: string
    isUpdateBonus?: boolean
    userOwner?: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount: string
    isUpdateBonus?: boolean
    userOwnerId?: string | null
  }

  export type AccountUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
    userOwner?: UserUpdateOneWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
    userOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount: string
    isUpdateBonus?: boolean
    userOwnerId?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
    userOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitySMCreateInput = {
    cityId: string
    name: string
    fullName: string
    cityUsers?: UserCitySMCreateNestedManyWithoutCityInput
  }

  export type CitySMUncheckedCreateInput = {
    cityId: string
    name: string
    fullName: string
    cityUsers?: UserCitySMUncheckedCreateNestedManyWithoutCityInput
  }

  export type CitySMUpdateInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    cityUsers?: UserCitySMUpdateManyWithoutCityNestedInput
  }

  export type CitySMUncheckedUpdateInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    cityUsers?: UserCitySMUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CitySMCreateManyInput = {
    cityId: string
    name: string
    fullName: string
  }

  export type CitySMUpdateManyMutationInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type CitySMUncheckedUpdateManyInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCitySMCreateInput = {
    user: UserCreateNestedOneWithoutUserCitiesInput
    city: CitySMCreateNestedOneWithoutCityUsersInput
  }

  export type UserCitySMUncheckedCreateInput = {
    cityId: string
    userId: string
  }

  export type UserCitySMUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserCitiesNestedInput
    city?: CitySMUpdateOneRequiredWithoutCityUsersNestedInput
  }

  export type UserCitySMUncheckedUpdateInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCitySMCreateManyInput = {
    cityId: string
    userId: string
  }

  export type UserCitySMUpdateManyMutationInput = {

  }

  export type UserCitySMUncheckedUpdateManyInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserCitySMListRelationFilter = {
    every?: UserCitySMWhereInput
    some?: UserCitySMWhereInput
    none?: UserCitySMWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCitySMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    telegramId?: SortOrder
    telegramName?: SortOrder
    firstName?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    countBonuses?: SortOrder
    isBan?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    countBonuses?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    telegramId?: SortOrder
    telegramName?: SortOrder
    firstName?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    countBonuses?: SortOrder
    isBan?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    telegramId?: SortOrder
    telegramName?: SortOrder
    firstName?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    countBonuses?: SortOrder
    isBan?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    countBonuses?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    accountId?: SortOrder
    email?: SortOrder
    passImap?: SortOrder
    passEmail?: SortOrder
    cookie?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    xUserId?: SortOrder
    deviceId?: SortOrder
    installationId?: SortOrder
    expiresIn?: SortOrder
    isAccessMp?: SortOrder
    isAccessCookie?: SortOrder
    isOnlyAccessOrder?: SortOrder
    bonusCount?: SortOrder
    isUpdateBonus?: SortOrder
    userOwnerId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expiresIn?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    accountId?: SortOrder
    email?: SortOrder
    passImap?: SortOrder
    passEmail?: SortOrder
    cookie?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    xUserId?: SortOrder
    deviceId?: SortOrder
    installationId?: SortOrder
    expiresIn?: SortOrder
    isAccessMp?: SortOrder
    isAccessCookie?: SortOrder
    isOnlyAccessOrder?: SortOrder
    bonusCount?: SortOrder
    isUpdateBonus?: SortOrder
    userOwnerId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    accountId?: SortOrder
    email?: SortOrder
    passImap?: SortOrder
    passEmail?: SortOrder
    cookie?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    xUserId?: SortOrder
    deviceId?: SortOrder
    installationId?: SortOrder
    expiresIn?: SortOrder
    isAccessMp?: SortOrder
    isAccessCookie?: SortOrder
    isOnlyAccessOrder?: SortOrder
    bonusCount?: SortOrder
    isUpdateBonus?: SortOrder
    userOwnerId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expiresIn?: SortOrder
  }

  export type CitySMCountOrderByAggregateInput = {
    cityId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
  }

  export type CitySMMaxOrderByAggregateInput = {
    cityId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
  }

  export type CitySMMinOrderByAggregateInput = {
    cityId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
  }

  export type CitySMRelationFilter = {
    is?: CitySMWhereInput
    isNot?: CitySMWhereInput
  }

  export type UserCitySMCityIdUserIdCompoundUniqueInput = {
    cityId: string
    userId: string
  }

  export type UserCitySMCountOrderByAggregateInput = {
    cityId?: SortOrder
    userId?: SortOrder
  }

  export type UserCitySMMaxOrderByAggregateInput = {
    cityId?: SortOrder
    userId?: SortOrder
  }

  export type UserCitySMMinOrderByAggregateInput = {
    cityId?: SortOrder
    userId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserOwnerInput = {
    create?: XOR<AccountCreateWithoutUserOwnerInput, AccountUncheckedCreateWithoutUserOwnerInput> | AccountCreateWithoutUserOwnerInput[] | AccountUncheckedCreateWithoutUserOwnerInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserOwnerInput | AccountCreateOrConnectWithoutUserOwnerInput[]
    createMany?: AccountCreateManyUserOwnerInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserCitySMCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCitySMCreateWithoutUserInput, UserCitySMUncheckedCreateWithoutUserInput> | UserCitySMCreateWithoutUserInput[] | UserCitySMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutUserInput | UserCitySMCreateOrConnectWithoutUserInput[]
    createMany?: UserCitySMCreateManyUserInputEnvelope
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserOwnerInput = {
    create?: XOR<AccountCreateWithoutUserOwnerInput, AccountUncheckedCreateWithoutUserOwnerInput> | AccountCreateWithoutUserOwnerInput[] | AccountUncheckedCreateWithoutUserOwnerInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserOwnerInput | AccountCreateOrConnectWithoutUserOwnerInput[]
    createMany?: AccountCreateManyUserOwnerInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserCitySMUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCitySMCreateWithoutUserInput, UserCitySMUncheckedCreateWithoutUserInput> | UserCitySMCreateWithoutUserInput[] | UserCitySMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutUserInput | UserCitySMCreateOrConnectWithoutUserInput[]
    createMany?: UserCitySMCreateManyUserInputEnvelope
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserOwnerNestedInput = {
    create?: XOR<AccountCreateWithoutUserOwnerInput, AccountUncheckedCreateWithoutUserOwnerInput> | AccountCreateWithoutUserOwnerInput[] | AccountUncheckedCreateWithoutUserOwnerInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserOwnerInput | AccountCreateOrConnectWithoutUserOwnerInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserOwnerInput | AccountUpsertWithWhereUniqueWithoutUserOwnerInput[]
    createMany?: AccountCreateManyUserOwnerInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserOwnerInput | AccountUpdateWithWhereUniqueWithoutUserOwnerInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserOwnerInput | AccountUpdateManyWithWhereWithoutUserOwnerInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCitySMUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCitySMCreateWithoutUserInput, UserCitySMUncheckedCreateWithoutUserInput> | UserCitySMCreateWithoutUserInput[] | UserCitySMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutUserInput | UserCitySMCreateOrConnectWithoutUserInput[]
    upsert?: UserCitySMUpsertWithWhereUniqueWithoutUserInput | UserCitySMUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCitySMCreateManyUserInputEnvelope
    set?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    disconnect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    delete?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    update?: UserCitySMUpdateWithWhereUniqueWithoutUserInput | UserCitySMUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCitySMUpdateManyWithWhereWithoutUserInput | UserCitySMUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCitySMScalarWhereInput | UserCitySMScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserOwnerNestedInput = {
    create?: XOR<AccountCreateWithoutUserOwnerInput, AccountUncheckedCreateWithoutUserOwnerInput> | AccountCreateWithoutUserOwnerInput[] | AccountUncheckedCreateWithoutUserOwnerInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserOwnerInput | AccountCreateOrConnectWithoutUserOwnerInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserOwnerInput | AccountUpsertWithWhereUniqueWithoutUserOwnerInput[]
    createMany?: AccountCreateManyUserOwnerInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserOwnerInput | AccountUpdateWithWhereUniqueWithoutUserOwnerInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserOwnerInput | AccountUpdateManyWithWhereWithoutUserOwnerInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCitySMUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCitySMCreateWithoutUserInput, UserCitySMUncheckedCreateWithoutUserInput> | UserCitySMCreateWithoutUserInput[] | UserCitySMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutUserInput | UserCitySMCreateOrConnectWithoutUserInput[]
    upsert?: UserCitySMUpsertWithWhereUniqueWithoutUserInput | UserCitySMUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCitySMCreateManyUserInputEnvelope
    set?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    disconnect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    delete?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    update?: UserCitySMUpdateWithWhereUniqueWithoutUserInput | UserCitySMUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCitySMUpdateManyWithWhereWithoutUserInput | UserCitySMUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCitySMScalarWhereInput | UserCitySMScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCitySMCreateNestedManyWithoutCityInput = {
    create?: XOR<UserCitySMCreateWithoutCityInput, UserCitySMUncheckedCreateWithoutCityInput> | UserCitySMCreateWithoutCityInput[] | UserCitySMUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutCityInput | UserCitySMCreateOrConnectWithoutCityInput[]
    createMany?: UserCitySMCreateManyCityInputEnvelope
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
  }

  export type UserCitySMUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<UserCitySMCreateWithoutCityInput, UserCitySMUncheckedCreateWithoutCityInput> | UserCitySMCreateWithoutCityInput[] | UserCitySMUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutCityInput | UserCitySMCreateOrConnectWithoutCityInput[]
    createMany?: UserCitySMCreateManyCityInputEnvelope
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
  }

  export type UserCitySMUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserCitySMCreateWithoutCityInput, UserCitySMUncheckedCreateWithoutCityInput> | UserCitySMCreateWithoutCityInput[] | UserCitySMUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutCityInput | UserCitySMCreateOrConnectWithoutCityInput[]
    upsert?: UserCitySMUpsertWithWhereUniqueWithoutCityInput | UserCitySMUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserCitySMCreateManyCityInputEnvelope
    set?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    disconnect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    delete?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    update?: UserCitySMUpdateWithWhereUniqueWithoutCityInput | UserCitySMUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserCitySMUpdateManyWithWhereWithoutCityInput | UserCitySMUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserCitySMScalarWhereInput | UserCitySMScalarWhereInput[]
  }

  export type UserCitySMUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserCitySMCreateWithoutCityInput, UserCitySMUncheckedCreateWithoutCityInput> | UserCitySMCreateWithoutCityInput[] | UserCitySMUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCitySMCreateOrConnectWithoutCityInput | UserCitySMCreateOrConnectWithoutCityInput[]
    upsert?: UserCitySMUpsertWithWhereUniqueWithoutCityInput | UserCitySMUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserCitySMCreateManyCityInputEnvelope
    set?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    disconnect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    delete?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    connect?: UserCitySMWhereUniqueInput | UserCitySMWhereUniqueInput[]
    update?: UserCitySMUpdateWithWhereUniqueWithoutCityInput | UserCitySMUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserCitySMUpdateManyWithWhereWithoutCityInput | UserCitySMUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserCitySMScalarWhereInput | UserCitySMScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserCitiesInput = {
    create?: XOR<UserCreateWithoutUserCitiesInput, UserUncheckedCreateWithoutUserCitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CitySMCreateNestedOneWithoutCityUsersInput = {
    create?: XOR<CitySMCreateWithoutCityUsersInput, CitySMUncheckedCreateWithoutCityUsersInput>
    connectOrCreate?: CitySMCreateOrConnectWithoutCityUsersInput
    connect?: CitySMWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserCitiesNestedInput = {
    create?: XOR<UserCreateWithoutUserCitiesInput, UserUncheckedCreateWithoutUserCitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCitiesInput
    upsert?: UserUpsertWithoutUserCitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserCitiesInput, UserUncheckedUpdateWithoutUserCitiesInput>
  }

  export type CitySMUpdateOneRequiredWithoutCityUsersNestedInput = {
    create?: XOR<CitySMCreateWithoutCityUsersInput, CitySMUncheckedCreateWithoutCityUsersInput>
    connectOrCreate?: CitySMCreateOrConnectWithoutCityUsersInput
    upsert?: CitySMUpsertWithoutCityUsersInput
    connect?: CitySMWhereUniqueInput
    update?: XOR<CitySMUpdateWithoutCityUsersInput, CitySMUncheckedUpdateWithoutCityUsersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: number[]
    notIn?: number[]
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type AccountCreateWithoutUserOwnerInput = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount: string
    isUpdateBonus?: boolean
  }

  export type AccountUncheckedCreateWithoutUserOwnerInput = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount: string
    isUpdateBonus?: boolean
  }

  export type AccountCreateOrConnectWithoutUserOwnerInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserOwnerInput, AccountUncheckedCreateWithoutUserOwnerInput>
  }

  export type AccountCreateManyUserOwnerInputEnvelope = {
    data: AccountCreateManyUserOwnerInput | AccountCreateManyUserOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserCitySMCreateWithoutUserInput = {
    city: CitySMCreateNestedOneWithoutCityUsersInput
  }

  export type UserCitySMUncheckedCreateWithoutUserInput = {
    cityId: string
  }

  export type UserCitySMCreateOrConnectWithoutUserInput = {
    where: UserCitySMWhereUniqueInput
    create: XOR<UserCitySMCreateWithoutUserInput, UserCitySMUncheckedCreateWithoutUserInput>
  }

  export type UserCitySMCreateManyUserInputEnvelope = {
    data: UserCitySMCreateManyUserInput | UserCitySMCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserOwnerInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserOwnerInput, AccountUncheckedUpdateWithoutUserOwnerInput>
    create: XOR<AccountCreateWithoutUserOwnerInput, AccountUncheckedCreateWithoutUserOwnerInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserOwnerInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserOwnerInput, AccountUncheckedUpdateWithoutUserOwnerInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserOwnerInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    accountId?: StringFilter | string
    email?: StringFilter | string
    passImap?: StringFilter | string
    passEmail?: StringFilter | string
    cookie?: StringFilter | string
    accessToken?: StringFilter | string
    refreshToken?: StringFilter | string
    xUserId?: StringFilter | string
    deviceId?: StringFilter | string
    installationId?: StringFilter | string
    expiresIn?: IntFilter | number
    isAccessMp?: BoolFilter | boolean
    isAccessCookie?: BoolFilter | boolean
    isOnlyAccessOrder?: BoolFilter | boolean
    bonusCount?: StringFilter | string
    isUpdateBonus?: BoolFilter | boolean
    userOwnerId?: StringNullableFilter | string | null
  }

  export type UserCitySMUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCitySMWhereUniqueInput
    update: XOR<UserCitySMUpdateWithoutUserInput, UserCitySMUncheckedUpdateWithoutUserInput>
    create: XOR<UserCitySMCreateWithoutUserInput, UserCitySMUncheckedCreateWithoutUserInput>
  }

  export type UserCitySMUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCitySMWhereUniqueInput
    data: XOR<UserCitySMUpdateWithoutUserInput, UserCitySMUncheckedUpdateWithoutUserInput>
  }

  export type UserCitySMUpdateManyWithWhereWithoutUserInput = {
    where: UserCitySMScalarWhereInput
    data: XOR<UserCitySMUpdateManyMutationInput, UserCitySMUncheckedUpdateManyWithoutUserCitiesInput>
  }

  export type UserCitySMScalarWhereInput = {
    AND?: UserCitySMScalarWhereInput | UserCitySMScalarWhereInput[]
    OR?: UserCitySMScalarWhereInput[]
    NOT?: UserCitySMScalarWhereInput | UserCitySMScalarWhereInput[]
    cityId?: StringFilter | string
    userId?: StringFilter | string
  }

  export type UserCreateWithoutAccountsInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
    userCities?: UserCitySMCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
    userCities?: UserCitySMUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
    userCities?: UserCitySMUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
    userCities?: UserCitySMUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCitySMCreateWithoutCityInput = {
    user: UserCreateNestedOneWithoutUserCitiesInput
  }

  export type UserCitySMUncheckedCreateWithoutCityInput = {
    userId: string
  }

  export type UserCitySMCreateOrConnectWithoutCityInput = {
    where: UserCitySMWhereUniqueInput
    create: XOR<UserCitySMCreateWithoutCityInput, UserCitySMUncheckedCreateWithoutCityInput>
  }

  export type UserCitySMCreateManyCityInputEnvelope = {
    data: UserCitySMCreateManyCityInput | UserCitySMCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type UserCitySMUpsertWithWhereUniqueWithoutCityInput = {
    where: UserCitySMWhereUniqueInput
    update: XOR<UserCitySMUpdateWithoutCityInput, UserCitySMUncheckedUpdateWithoutCityInput>
    create: XOR<UserCitySMCreateWithoutCityInput, UserCitySMUncheckedCreateWithoutCityInput>
  }

  export type UserCitySMUpdateWithWhereUniqueWithoutCityInput = {
    where: UserCitySMWhereUniqueInput
    data: XOR<UserCitySMUpdateWithoutCityInput, UserCitySMUncheckedUpdateWithoutCityInput>
  }

  export type UserCitySMUpdateManyWithWhereWithoutCityInput = {
    where: UserCitySMScalarWhereInput
    data: XOR<UserCitySMUpdateManyMutationInput, UserCitySMUncheckedUpdateManyWithoutCityUsersInput>
  }

  export type UserCreateWithoutUserCitiesInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
    accounts?: AccountCreateNestedManyWithoutUserOwnerInput
  }

  export type UserUncheckedCreateWithoutUserCitiesInput = {
    telegramId: string
    telegramName: string
    firstName?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    countBonuses?: number
    isBan?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserOwnerInput
  }

  export type UserCreateOrConnectWithoutUserCitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCitiesInput, UserUncheckedCreateWithoutUserCitiesInput>
  }

  export type CitySMCreateWithoutCityUsersInput = {
    cityId: string
    name: string
    fullName: string
  }

  export type CitySMUncheckedCreateWithoutCityUsersInput = {
    cityId: string
    name: string
    fullName: string
  }

  export type CitySMCreateOrConnectWithoutCityUsersInput = {
    where: CitySMWhereUniqueInput
    create: XOR<CitySMCreateWithoutCityUsersInput, CitySMUncheckedCreateWithoutCityUsersInput>
  }

  export type UserUpsertWithoutUserCitiesInput = {
    update: XOR<UserUpdateWithoutUserCitiesInput, UserUncheckedUpdateWithoutUserCitiesInput>
    create: XOR<UserCreateWithoutUserCitiesInput, UserUncheckedCreateWithoutUserCitiesInput>
  }

  export type UserUpdateWithoutUserCitiesInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCitiesInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    telegramName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    countBonuses?: IntFieldUpdateOperationsInput | number
    isBan?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserOwnerNestedInput
  }

  export type CitySMUpsertWithoutCityUsersInput = {
    update: XOR<CitySMUpdateWithoutCityUsersInput, CitySMUncheckedUpdateWithoutCityUsersInput>
    create: XOR<CitySMCreateWithoutCityUsersInput, CitySMUncheckedCreateWithoutCityUsersInput>
  }

  export type CitySMUpdateWithoutCityUsersInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type CitySMUncheckedUpdateWithoutCityUsersInput = {
    cityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserOwnerInput = {
    accountId: string
    email: string
    passImap: string
    passEmail: string
    cookie: string
    accessToken: string
    refreshToken: string
    xUserId: string
    deviceId: string
    installationId: string
    expiresIn: number
    isAccessMp?: boolean
    isAccessCookie?: boolean
    isOnlyAccessOrder?: boolean
    bonusCount: string
    isUpdateBonus?: boolean
  }

  export type UserCitySMCreateManyUserInput = {
    cityId: string
  }

  export type AccountUpdateWithoutUserOwnerInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateWithoutUserOwnerInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passImap?: StringFieldUpdateOperationsInput | string
    passEmail?: StringFieldUpdateOperationsInput | string
    cookie?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    xUserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    installationId?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    isAccessMp?: BoolFieldUpdateOperationsInput | boolean
    isAccessCookie?: BoolFieldUpdateOperationsInput | boolean
    isOnlyAccessOrder?: BoolFieldUpdateOperationsInput | boolean
    bonusCount?: StringFieldUpdateOperationsInput | string
    isUpdateBonus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCitySMUpdateWithoutUserInput = {
    city?: CitySMUpdateOneRequiredWithoutCityUsersNestedInput
  }

  export type UserCitySMUncheckedUpdateWithoutUserInput = {
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCitySMUncheckedUpdateManyWithoutUserCitiesInput = {
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCitySMCreateManyCityInput = {
    userId: string
  }

  export type UserCitySMUpdateWithoutCityInput = {
    user?: UserUpdateOneRequiredWithoutUserCitiesNestedInput
  }

  export type UserCitySMUncheckedUpdateWithoutCityInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCitySMUncheckedUpdateManyWithoutCityUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CitySMCountOutputTypeDefaultArgs instead
     */
    export type CitySMCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CitySMCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CitySMDefaultArgs instead
     */
    export type CitySMArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CitySMDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCitySMDefaultArgs instead
     */
    export type UserCitySMArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCitySMDefaultArgs<ExtArgs>

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
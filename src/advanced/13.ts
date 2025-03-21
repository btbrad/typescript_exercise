export {}

type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T
type res1 = PromiseValue<Promise<Promise<string>>>

type DeepPartial<T extends object> = T extends any
  ? {
      [Key in keyof T]?: T[Key] extends object ? DeepPartial<T[Key]> : T[Key]
    }
  : never
type res2 = DeepPartial<{ a: { b: { c: { d: string } } } }>

type NonNullable<T> = T extends null | undefined ? never : T
type res3 = NonNullable<string | number | undefined>

type DeepNonNullable<T extends object> = T extends any
  ? {
      [Key in keyof T]: T[Key] extends object
        ? DeepNonNullable<T[Key]>
        : NonNullable<T[Key]>
    }
  : never
type res4 = DeepNonNullable<{ a: { b: { c: { d: string | undefined } } } }>

type Flatten<T> = {
  [key in keyof T]: T[key] extends object ? Flatten<T[key]> : T[key]
} & {}

type MarkPropsOptional<T extends object, K extends keyof T = keyof T> = Flatten<
  Partial<Pick<T, K>> & Omit<T, K>
>
type res5 = MarkPropsOptional<{ a: string; b: number; c: boolean }, 'a' | 'c'>

type FuncStruct = (...args: any) => any
type FunctionKeys<T extends object> = {
  [Key in keyof T]: T[Key] extends FuncStruct ? Key : never
}[keyof T]
type res6 = FunctionKeys<{ a: string; b: () => void; c: boolean }>

type ExpectedPropKeys<T extends object, ValueType extends unknown> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? Key : never
}[keyof T]

type FunctionKeys2<T extends object> = ExpectedPropKeys<T, FuncStruct>
type res7 = FunctionKeys2<{ a: string; b: () => void; c: boolean }>

type PickByValueType<T extends object, ValueType extends unknown> = Pick<
  T,
  ExpectedPropKeys<T, ValueType>
>
type res8 = PickByValueType<
  { a: string; b: () => void; c: boolean },
  () => void
>

interface VIP {
  vipExpires: number
}

interface CommonUser {
  promotionUsed: boolean
}

type res9 = Exclude<1 | 2 | 4, 1 | 2 | 3>

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)

type XORUser = XOR<VIP, CommonUser>

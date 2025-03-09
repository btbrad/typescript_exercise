export {}

type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer First}-${infer Second}${infer Rest}`
    ? `${First}${Uppercase<Second>}${KebabCaseToCamelCase<Rest>}`
    : Str

type res1 = KebabCaseToCamelCase<'bt-bt-brad-pitt'>

type CamelCaseToKebabCase<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First extends Lowercase<First>
      ? `${First}${CamelCaseToKebabCase<Rest>}`
      : `-${Lowercase<First>}${CamelCaseToKebabCase<Rest>}`
    : Str
type res2 = CamelCaseToKebabCase<'btBtBradPitt'>

type Chunk<
  Arr extends unknown[],
  ItemLen extends number,
  CurItem extends unknown[] = [],
  Res extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
  ? CurItem['length'] extends ItemLen
    ? Chunk<Rest, ItemLen, [First], [...Res, CurItem]>
    : Chunk<Rest, ItemLen, [...CurItem, First], Res>
  : [...Res, CurItem]
type res3 = Chunk<[1, 2, 3, 4, 5, 6], 2>

type TupleToNestedObject<Tuple extends unknown[], Value> = Tuple extends [
  infer First,
  ...infer Rest
]
  ? {
      [Key in First as Key extends keyof any
        ? Key
        : never]: Rest extends unknown[]
        ? TupleToNestedObject<Rest, Value>
        : Value
    }
  : Value
type res4 = TupleToNestedObject<['a', 'b', 'c'], 1>

type Copy<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key]
}

type PartialObjectPropByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any = keyof Obj
> = Copy<Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>>
type res5 = PartialObjectPropByKeys<{ a: 1; b: 2; c: 3 }, 'a' | 'b'>

type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never

type UnionToFuncIntersection<T> = UnionToIntersection<
  T extends any ? () => T : never
>
type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer ReturnType
  ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType]
  : []

type res6 = UnionToTuple<'a' | 'b' | 'c'>

type AllKeyPath<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Key extends string
    ? Obj[Key] extends Record<string, any>
      ? Key | `${Key}.${AllKeyPath<Obj[Key]>}`
      : Key
    : never
}[keyof Obj]
type res7 = AllKeyPath<{ a: { b: { c: 1 } } }>

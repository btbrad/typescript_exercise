/**
 * 重新构造
 */

/**
 * 数组
 */
type Push<Arr extends unknown[], Ele> = [...Arr, Ele]
type res1 = Push<[1, 2, 3], 4>

export {}

type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]
type res2 = Unshift<[1, 2, 3], 0>

type Zip<
  One extends [unknown, unknown],
  Other extends [unknown, unknown]
> = One extends [infer OneFirst, infer OneSecond]
  ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
    : []
  : []
type res3 = Zip<['name', 'age'], ['bt', 18]>

type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer OneRest
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
    : []
  : []
type res4 = Zip2<[1, 2, 3, 4, 5], ['I', 'am', 'learning', 'type', 'script']>

/**
 * 字符串
 */
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Str
type res5 = CapitalizeStr<'bt'>

type CamelCase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
    : Str
type res6 = CamelCase<'bt_bt_bt_bt'>

type DropSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
  : Str
type res7 = DropSubStr<'bthbthbt', 'h'>

/**
 * 函数
 */
type AppendArgument<Func extends Function, Arg> = Func extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never
type res8 = AppendArgument<(name: string) => string, number>

/**
 * 索引类型
 */
type Mapping<Obj extends object> = {
  [key in keyof Obj]: [Obj[key], Obj[key], Obj[key]]
}
type res9 = Mapping<{ a: 1; b: 2 }>

type UpperCaseKey<Obj extends Record<string, any>> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key]
}
type res10 = UpperCaseKey<{ a: 1; b: 2 }>

type ToReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
type res11 = ToReadonly<{ a: 1; b: 2 }>

type ToPartial<T> = {
  [key in keyof T]?: T[key]
}
type res12 = ToPartial<{ a: 1; b: 2 }>

type ToMutable<T> = {
  -readonly [key in keyof T]: T[key]
}
type res13 = ToMutable<{ readonly a: 1; b: 2 }>

type ToRequired<T> = {
  [key in keyof T]-?: T[key]
}
type res14 = ToRequired<{ a?: 1; b: 2 }>

type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [key in keyof Obj as Obj[key] extends ValueType ? key : never]: Obj[key]
}
type res15 = FilterByValueType<{ a: string; b: number }, string>

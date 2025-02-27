// 模式匹配
type p = Promise<'bt'>

type GetValueType<P> = P extends Promise<infer Value> ? Value : never

type res = GetValueType<p>

/**
 * 数组
 */
type arr = [1, 2, 3]
type arr2 = []

// unknown 能接收任意类型的值
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never

type res1 = GetFirst<arr>

type res3 = GetFirst<arr2>

type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never

type res4 = GetLast<arr>

type PopArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never

type res5 = PopArr<arr>
type res6 = PopArr<arr2>

type ShiftArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [unknown, ...infer Rest]
  ? Rest
  : never

type res7 = ShiftArr<arr>
type res8 = ShiftArr<arr2>

/**
 * 字符串
 */
type str = 'I am learning TypeScript now'

type StartsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false

type res9 = StartsWith<str, 'I'>

type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str

type res10 = ReplaceStr<str, 'TypeScript', 'Python'>

type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | ' '
  | '\n'
  | '\t'}`
  ? TrimRight<Rest>
  : Str

type res11 = TrimRight<'study     '>

type TrimLeft<Str extends string> = Str extends `${
  | ' '
  | '\n'
  | '\t'}${infer Rest}`
  ? TrimLeft<Rest>
  : Str

type res12 = TrimLeft<'    study'>

type TrimStr<Str extends string> = TrimLeft<TrimRight<Str>>

type res13 = TrimStr<'       study       '>

/**
 * 函数
 */
type GetParameters<Func extends Function> = Func extends (
  ...args: infer Args
) => unknown
  ? Args
  : never

type res14 = GetParameters<(name: string, age: number) => string>

type GetReturnType<Func extends Function> = Func extends (
  ...args: any[]
) => infer ReturnType
  ? ReturnType
  : never

type res15 = GetReturnType<() => string>

/**
 * 类型体操顺口溜
 */

export {}

// 模式匹配做提取
type GetReturnType<Func extends Function> = Func extends (
  ...args: any[]
) => infer ReturnType
  ? ReturnType
  : never

type res1 = GetReturnType<() => number>

// 重新构造做变换
type UppercaseKey<Obj extends Record<string, any>> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key]
}

interface User {
  name: string
  age: number
}
type res2 = UppercaseKey<User>

// 递归复用做循环
type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : Str
type res3 = StringToUnion<'hello'>

// 数组长度做计算
type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

type Subtract<
  Num1 extends number,
  Num2 extends number
> = BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...rr2: infer Rest]
  ? Rest['length']
  : never
type res4 = Subtract<100, 65>

// 联合分散可简化
type UppercaseA<Item extends string> = Item extends 'a' ? Uppercase<Item> : Item
type res5 = UppercaseA<'c' | 'b' | 'a'>

// 特殊属性要记清
type IsAny<T> = 'bt' extends 'brad' & T ? true : false
type res6 = IsAny<any>

interface Car {
  brand: string
  price: number
  [key: string]: any
}

type RemoveIndexSignature<Obj extends Record<string, any>> = {
  [key in keyof Obj as key extends `${infer Str}` ? Str : never]: Obj[key]
}
type res7 = RemoveIndexSignature<Car>

type ParseParam<Param extends string> =
  Param extends `${infer Key}=${infer Value}` ? { [K in Key]: Value } : never

type MergeValues<One, Other> = One extends Other
  ? One
  : Other extends unknown[]
  ? [One, ...Other]
  : [One, Other]

type MergeParams<
  OneParam extends Record<string, any>,
  OtherParam extends Record<string, any>
> = {
  [Key in keyof OneParam | keyof OtherParam]: Key extends keyof OneParam
    ? Key extends keyof OtherParam
      ? MergeValues<OneParam[Key], OtherParam[Key]>
      : OneParam[Key]
    : Key extends keyof OtherParam
    ? OtherParam[Key]
    : never
}

type ParseQueryString<Str extends string> =
  Str extends `${infer Param}&${infer Rest}`
    ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
    : ParseParam<Str>

type res8 = ParseQueryString<'a=1&b=2&c=3'>

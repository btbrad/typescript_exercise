/**
 * 递归复用做循环
 */

/**
 * Promise
 */
type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<infer ValueType> ? ValueType extends Promise<unknown> ? DeepPromiseValueType<ValueType> : ValueType : never
type res1 = DeepPromiseValueType<Promise<Promise<string>>>

type DeepPromiseValueType2<T> = T extends Promise<infer ValueType> ? DeepPromiseValueType2<ValueType> : T
type res2 = DeepPromiseValueType2<Promise<Promise<string>>>

export {}

/**
 * 数组
 */
type ReverseArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest] ? [...ReverseArr<Rest>, First] : Arr
type res3 = ReverseArr<[1, 2, 3, 4, 5]>

// 相等的判断就是 A 是 B 的子类型并且 B 也是 A 的子类型，。
type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type Includes<Arr extends unknown[], FindItem> = Arr extends [infer First, ...infer Rest] ? IsEqual<First, FindItem> extends true ? true : Includes<Rest, FindItem> : false
type res4 = Includes<[1, 2, 3], 3>

type RemoveItem<Arr extends unknown[], Item, Result extends unknown[] = []> = Arr extends [infer First, ...infer Rest] ? IsEqual<First, Item> extends true ? RemoveItem<Rest, Item, Result> : RemoveItem<Rest, Item, [...Result, First]> : Result
type res5 = RemoveItem<[1, 2, 3, 4, 5], 3>

type BuildArray<Length extends number, Ele extends unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>
type res6 = BuildArray<5, number>

/**
 * 字符串
 */
type ReplaceAll<Str extends string, From extends string, To extends string> = Str extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${ReplaceAll<Right, From, To>}` : Str
type res7 = ReplaceAll<'bt_bt_bt', 'b', 'a'>

type StringToUnion<Str extends string> = Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never
type res8 = StringToUnion<'apple'>

type ReverseStr<Str extends string, Result extends string = ''> = Str extends `${infer First}${infer Rest}` ? `${ReverseStr<Rest, `${First}${Result}`>}` : Result
type res9 = ReverseStr<'apple'>

/**
 * 对象
 */
type DeepReadonly<Obj extends Record<string, any>> = Obj extends any ? {
  readonly [key in keyof Obj]: Obj[key] extends object ? Obj[key] extends Function ? Obj[key] : DeepReadonly<Obj[key]> : Obj[key]
} : never
type res10 = DeepReadonly<{ a: { b: { c: { d: 1 } } } }>

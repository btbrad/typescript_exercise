/**
 * 联合分散可简化
 */
export {}

// 当类型参数为联合类型，并且在条件类型左边直接引用该类型参数的时候，TypeScript 会把每一个元素单独传入来做类型运算，最后再合并成联合类型，这种语法叫做分布式条件类型。

type Union = 'a' | 'b' | 'c'
type UppercaseA<Item extends string> = Item extends 'a' ? Uppercase<Item> : Item
type res1 = UppercaseA<Union>

type res2 = `${Union}~~`

type CamelCase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
    : Str
type res3 = CamelCase<'bt_bt_bt'>

type CamelCaseArr<Arr extends unknown[]> = Arr extends [
  infer Item,
  ...infer Rest
]
  ? [CamelCase<Item & string>, ...CamelCaseArr<Rest>]
  : []
type res4 = CamelCaseArr<['aa_aa_aa', 'bb_bb_bb']>

type CamelCaseUnion<Item extends string> =
  Item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCaseUnion<Rest>}`
    : Item
type Union1 = 'aa_aa_aa' | 'bb_bb_bb' | 'cc_cc_cc'
type res5 = CamelCaseUnion<Union1>

/**
 * 当 A 是联合类型时：

A extends A 这种写法是为了触发分布式条件类型，让每个类型单独传入处理的，没别的意义。

A extends A 和 [A] extends [A] 是不同的处理，前者是单个类型和整个类型做判断，后者两边都是整个联合类型，因为只有 extends 左边直接是类型参数才会触发分布式条件类型。
 */
type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never
type res7 = IsUnion<1 | 2>
type res8 = IsUnion<[1, 2]>

type TestUnion<A, B = A> = A extends A ? { a: A; b: B } : never
type res6 = TestUnion<'a' | 'b' | 'c'>

type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`

type res9 = BEM<'box', ['button', 'input'], ['success', 'danger']>

type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`
type res10 = Combination<'a', 'b'>

type AllCombination<A extends string, B extends string = A> = A extends A
  ? Combination<A, AllCombination<Exclude<B, A>>>
  : never

type res11 = AllCombination<'a' | 'b' | 'c' | 'd'>

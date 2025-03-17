export {}

type LiteralToPrimitive<T extends string | number | bigint> = T extends string
  ? string
  : T extends number
  ? number
  : T extends bigint
  ? bigint
  : never

function universalAdd<T extends string | number | bigint>(
  x: T,
  y: T
): LiteralToPrimitive<T> {
  return x + (y as any)
}

const res1 = universalAdd('a', 'b')
const res2 = universalAdd(1, 2)
const res3 = universalAdd(1n, 2n)

type res4 = 1 | 2 | never

type IsAny<T> = 0 extends 1 & T ? true : false
type res5 = IsAny<any>
type res6 = IsAny<never>

type IsNever<T> = [T] extends [never] ? true : false
type res7 = IsNever<never>

type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends false
    ? true
    : false
  : false
type res8 = IsUnknown<unknown>

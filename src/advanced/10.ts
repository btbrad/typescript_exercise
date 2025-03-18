export {}

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

interface User {
  readonly name: string
  readonly age: number
}

type res1 = Mutable<User>

type res2 = Omit<User, 'name'>

type Extract<A, B> = A extends B ? A : never
type res3 = Extract<'a' | 'b' | 'c', 'a' | 'c'>

type Exclude<A, B> = A extends B ? never : A
type res4 = Exclude<'a' | 'b' | 'c', 'a' | 'c'>

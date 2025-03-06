/**
 * 内置高级类型
 */
export {}

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
type res1 = Parameters<(name: string, age: number) => void>

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never
type res2 = ReturnType<() => string>

type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never

interface Person {
  name: string
  age: number
}

interface PersonConstructor {
  new (name: string, age: number): Person
}

type res3 = ConstructorParameters<PersonConstructor>

type InstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : never
type res4 = InstanceType<PersonConstructor>

function fn(this: Person) {
  console.log(this.name)
}

type ThisParameterType<T> = T extends (this: infer U, ...args: any) => any
  ? U
  : unknown

type res5 = ThisParameterType<typeof fn>

type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T

function fn2(this: Person, age: number) {
  console.log(this.name, age)
}
type res6 = OmitThisParameter<typeof fn2>

type Partial<T> = {
  [P in keyof T]?: T[P]
}
type res7 = Partial<Person>

type Required<T> = {
  [P in keyof T]-?: T[P]
}

interface User {
  id: number
  name?: string
  age?: number
}
type res8 = Required<User>

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
type res9 = Readonly<Person>

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type res10 = Pick<Person, 'name'>

type Record<K extends keyof any, T> = {
  [P in K]: T
}
type res11 = Record<string, any>

type Exclude<T, U> = T extends U ? never : T
type res12 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

type Extract<T, U> = T extends U ? T : never
type res13 = Extract<'a' | 'b' | 'c', 'a' | 'b'>

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type res14 = Omit<Person, 'age'>

type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onfulfilled: infer F): any }
  ? F extends (value: infer V, ...args: any) => any
    ? Awaited<V>
    : never
  : T
type res15 = Awaited<Promise<string>>

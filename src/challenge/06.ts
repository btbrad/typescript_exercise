/**
 * 特殊特性要记清
 */

export {}

type IsAny<T> = 'bt' extends 'brad' & T ? true : false
type res1 = IsAny<any>
type res2 = IsAny<'bt'>

type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false
type res3 = IsEqual<'3', '3'>
type res4 = IsEqual<'3', any>

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never
type res5 = IsUnion<'1' | '2' | '3'>
type res6 = IsUnion<1>

type IsNever<T> = [T] extends [never] ? true : false
type res7 = IsNever<never>
type res8 = IsNever<any>

type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? false
  : true

type IsTuple<T> = T extends [...params: infer Eles]
  ? NotEqual<Eles['length'], number>
  : false

type res9 = IsTuple<[1, 2, 3]>
type res10 = IsTuple<number[]>

type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never
type res11 = UnionToIntersection<{ a: 1 } | { b: 2 }>

type GetOptional<Obj extends Record<string, any>> = {
  [key in keyof Obj as {} extends Pick<Obj, key> ? key : never]: Obj[key]
}
interface User {
  name: string
  age: number
  gender?: boolean
}
type res12 = GetOptional<User>

type IsRequired<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key>
  ? never
  : Key
type GetRequired<Obj extends Record<string, any>> = {
  [key in keyof Obj as IsRequired<key, Obj>]: Obj[key]
}
type res13 = GetRequired<User>

type RemoveIndexSignature<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key]
}

interface Person {
  name: string
  age: number
  [key: string]: any
}
type res14 = RemoveIndexSignature<Person>

type ClassPublicProps<Obj extends Record<string, any>> = {
  [key in keyof Obj]: Obj[key]
}

class Student {
  public name: string
  private age: number
  protected gender: boolean

  constructor(name: string, age: number, gender: boolean) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}
type res15 = ClassPublicProps<Student>

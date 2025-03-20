export {}

type DeepPartial<T extends object> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

interface User {
  name: string
  age: number
  address: {
    city: string
    zipCode: number
  }
}

type res1 = DeepPartial<User>

interface Person {
  name: string
  age: number
  gender: 'male' | 'female'
}

type Flatten<T> = {
  [KeyType in keyof T]: T[KeyType] extends object
    ? Flatten<T[KeyType]>
    : T[KeyType]
} & {}

type MarkPropsAsOptional<
  T extends object,
  K extends keyof T = keyof T
> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>
type res2 = MarkPropsAsOptional<Person, 'name' | 'age'>

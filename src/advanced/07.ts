export {}

type Clone<T extends Record<string, any>> = {
  [key in keyof T]: T[key]
}

interface User {
  name: string
  age: number
}

type UserCopy = Clone<User>

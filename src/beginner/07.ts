export {}

interface User {
  name: string
  age: number
  gender: boolean
}

type PartialUser = Partial<User>

interface Job {
  title?: string
  salary?: number
}

type RequiredUser = Required<Job>

type ReadonlyUser = Readonly<User>

type UserProps = 'name' | 'age' | 'gender'
type User2 = Record<UserProps, string>

type UserBasicInfo = Pick<User2, 'name' | 'age'>

type UserWithGender = Omit<User2, 'gender'>

type RequiredUserProps = 'name'

type OptionalUserProps = Exclude<UserProps, RequiredUserProps>
type OptionalUserPropsOnly = Extract<UserProps, RequiredUserProps>

type Add = (x: number, y: number) => number
type AddParameters = Parameters<Add>
type AddReturnType = ReturnType<Add>

const addHandler = (x: number, y: number) => x + y
type AddFuncType = typeof addHandler

const asyncFunc = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 3000)
  })

type AsyncReturnType = Awaited<ReturnType<typeof asyncFunc>>

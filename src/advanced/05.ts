export {}

interface NameStruct {
  name: string
}

interface AgeStruct {
  age: number
}

type ProfileStruct = NameStruct & AgeStruct

const user: ProfileStruct = {
  name: 'bt',
  age: 18,
}

type StringAndNumber = string & number

type Union1 = (1 | 2 | 3) & (2 | 3)

type Union2 = (string | number | boolean) & boolean

interface AllStringTypes {
  [key: string]: string
}

type PropType1 = AllStringTypes['name']
type PropType2 = AllStringTypes['age']
type PropType3 = AllStringTypes[string]

interface Foo {
  propA: number
  propB: boolean
  propC: string
}

type PropTypeUnion = Foo[keyof Foo]

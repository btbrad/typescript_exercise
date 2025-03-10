export {}

type StrToNum<Str extends string> = Str extends `${infer Num extends number}`
  ? Num
  : Str

enum Code {
  a = 111,
  b = 222,
  c = 'abc',
}

type res1 = StrToNum<`${Code}`>

interface Person {
  name: string
  age: number
}

interface Student {
  name: string
  age: number
  grade: number
}

let p: Person = {
  name: 'Jack',
  age: 20,
}

let s: Student = {
  name: 'Tom',
  age: 18,
  grade: 100,
}

p = s // 协变
// s = p // 不行，报错

let func1 = (arg: Person) => {}
let func2 = (arg: Student) => {}

// func1 = func2 // 不行，报错
func2 = func1 // 可以, 函数参数是你变得

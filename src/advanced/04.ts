export {}

type UnionWithNever = '123' | 599 | true | void | never

function justThrow(): never {
  throw new Error()
}

function foo(input: number) {
  if (input > 1) {
    justThrow()
    // 等同于 return 语句后的代码，即 Dead Code
    const name = 'abc'
    console.log(111)
  }
}

foo(2)

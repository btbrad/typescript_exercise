export {}

type FuncType = (name: string) => number
const func1: FuncType = (name: string) => {
  return name.length
}

interface FuncStructure {
  (name: string): number
}

function func2(foo: number, bar: true): string
function func2(foo: number, bar?: false): number
function func2(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else {
    return foo * 500
  }
}

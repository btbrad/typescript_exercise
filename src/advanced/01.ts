export {}

const temp1: null = null
const temp2: undefined = undefined

// const temp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
// const temp4: string = undefined;

function func1() {}
function func2() {
  return
}
function func3(): void {
  return undefined
}

// const voidVar1: void = null // 仅在关闭 strictNullChecks 时成立，下同
// const voidVar2: void = undefined

const arr1: [number, number, number] = [1, 2, 3]
// console.log(arr1[100])

const arr2: [number, string?, boolean?] = [1]
type length = (typeof arr2)['length']

enum Item {
  Foo,
  Bar = 100,
  Baz,
}

const FooValue = Item.Foo
const FooKey = Item[0]

/**
 * 数组长度做统计
 */
// TypeScript 类型系统中没有加减乘除运算符，但是可以通过构造不同的数组然后取 length 的方式来完成数值计算，把数值的加减乘除转化为对数组的提取和构造。
export = {}

type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']
type res1 = Add<35, 65>

type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest] ? Rest['length'] : never
type res2 = Subtract<60, 15>

type Multiply<Num1 extends number, Num2 extends number, Result extends unknown[] = []> = Num2 extends 0 ? Result['length'] : Multiply<Num1, Subtract<Num2, 1>, [...Result, ...BuildArray<Num1>]>
type res3 = Multiply<3, 4>

type Divide<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> = Num1 extends 0 ? CountArr['length'] : Divide<Subtract<Num1, Num2>, Num2, [...CountArr, unknown]>
type res4 = Divide<6, 3>

type StrLen<Str extends string, CountArr extends unknown[] = []> = Str extends `${string}${infer Rest}` ? StrLen<Rest, [...CountArr, unknown]> : CountArr['length']
type res5 = StrLen<'apple'>

type GreaterThan<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> = Num1 extends Num2 ? false : CountArr['length'] extends Num2 ? true : CountArr['length'] extends Num1 ? false : GreaterThan<Num1, Num2, [...CountArr, unknown]>
type res6 = GreaterThan<100, 10>

type FibonacciLoop<PreArr extends unknown[], CurrentArr extends unknown[], IndexArr extends unknown[] = [], Num extends number = 1> = IndexArr['length'] extends Num ? CurrentArr['length'] : FibonacciLoop<CurrentArr, [...PreArr, ...CurrentArr], [...IndexArr, unknown], Num>
type Fibonacci<Num extends number> = FibonacciLoop<[1], [], [], Num>
type res7 = Fibonacci<8>
class Person {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public getDesc(): string {
    return `${this.name} is at his ${this.age}`
  }

  public getName(): string {
    return this.name
  }

  public getUpperCaseName(): string {
    return this.name.toLocaleUpperCase()
  }
}

const p1 = new Person('bt', 18)
// console.log(p1.name)
console.log(p1.getName())
console.log(p1.getDesc())
console.log(p1.getUpperCaseName())

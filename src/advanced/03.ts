export {}

class Foo {
  private prop: string

  constructor(inputProp: string) {
    this.prop = inputProp
  }

  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }

  public get propA(): string {
    return `${this.prop}+A`
  }

  public set propA(value: string) {
    this.propA = `${value}+A`
  }
}

const f = new Foo('foo')
// console.log(f.propA)
f.propA = 'bar'
console.log(f.propA)

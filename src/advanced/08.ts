export {}

class Cat {
  eat() {}
}

class Dog {
  eat() {}
  bark() {}
}

function feedCat(cat: Cat) {}

feedCat(new Dog())

type res1 = 1 extends number | string | boolean ? 1 : 2

type res2 = string extends unknown ? 1 : 2
type res3 = unknown extends string ? 1 : 2
type res4 = unknown extends unknown ? 1 : 2
type res5 = unknown extends any ? 1 : 2

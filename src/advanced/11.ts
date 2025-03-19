export {}

class Animal {
  asPet() {}
}

class Dog extends Animal {
  bark() {}
}

class Corgi extends Dog {
  cute() {}
}

type DogFactory = (args: Dog) => Dog

function transformDogAndBark(dogFactory: DogFactory) {
  const dog = dogFactory(new Dog())
  dog.bark()
}

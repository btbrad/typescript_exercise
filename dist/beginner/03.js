"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDesc() {
        return `${this.name} is at his ${this.age}`;
    }
    getName() {
        return this.name;
    }
    getUpperCaseName() {
        return this.name.toLocaleUpperCase();
    }
}
const p1 = new Person('bt', 18);
// console.log(p1.name)
console.log(p1.getName());
console.log(p1.getDesc());
console.log(p1.getUpperCaseName());

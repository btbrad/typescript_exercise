declare class Person {
    private name;
    private age;
    constructor(name: string, age: number);
    getDesc(): string;
    getName(): string;
    getUpperCaseName(): string;
}
declare const p1: Person;

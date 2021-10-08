class Person {
  constructor(name) {
    this.name = name;
  }
}

// Person.prototype.akam = true;
// let person = new Person("Koce");
// let person1 = new Person("Misho");

// console.log(person.akam);
// console.log(person1.akam);

let obj = {
  nasrahSe: "YES",
};

let person = new Person("Koce");

Object.setPrototypeOf(person, obj);
console.log(person.nasrahSe);

let person2 = new Person("Misho");
console.log(person2.nasrahSe);

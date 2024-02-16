//string

// let greet = "Hello world";
// console.log(greet);

// let myName = "Arkar Minn";
// console.log(myName);

// let myAge = "My age is 24";
// console.log(myAge);

// // let sayHi = `Annyeong, ${myName}`;
// let sayHi = "Annyeong, " + myName;
// console.log(sayHi);

// let height = `5' 7"`;
// console.log(height);

//numbers
// let myNum = 10;
// let myFloat = 20.12;
// console.log(myNum + myFloat);

// function calculateAge(birth_year) {
//   return 2024 - birth_year;
// }
// console.log(`your age is ${calculateAge(1998)}`);

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// [a, b, c] = arr;
// console.log(a, b, c);

// let names = ["Arkar", "Donkey", "simon"];
// names = names.map((name) => "Mrs. " + name);
// console.log(names);

// let nums = [1, 2, 3, 4, 5, 6];
// let evenNums = nums.filter((n) => n % 2 !== 0);
// console.log(evenNums);

// let name = "John";
// let age = 20;
// let person = {
//   name,
//   age,
// };

// console.log(person);

// let searchName = prompt("search here...");

// let people = [
//   { name: "Aung Aung", age: 20, gender: "male" },
//   { name: "Kyaw Kyaw", age: 22, gender: "male" },
//   { name: "Yoonie", age: 25, gender: "female" },
// ];

// let result = people.filter((person) => {
//   return person.name.includes(searchName);
// });

// console.log(result);

// class Car {
//   wheels = 4;
//   color = "black";
//   drive() {
//     console.log("I am driving.");
//   }
// }

// let car1 = new Car();
// console.log(car1);
// car1.drive();

// class Calculator {
//   plus(n1, n2) {
//     return n1 + n2;
//   }
// }

// let cal = new Calculator();
// let sum = cal.plus(10, 3);
// console.log(sum);

// class Car {
//   Name = "";
//   wheels = "";
//   constructor(name, wheels) {
//     this.Name = name;
//     this.wheels = wheels;
//     this.drive();
//   }
//   drive() {
//     console.log(this.Name + " is driving.");
//   }
//   getWheels() {
//     console.log(this.Name + " has " + this.wheels + " wheels.");
//   }
// }

// let toyota = new Car("toyota", 4);
// toyota.getWheels();

//asynchronous javascript
// function async() {
//   return new Promise((resolve, reject) => {
//     let sum = 0;
//     for (let i = 0; i < 1000000000; i++) sum += i;

//     if (sum) resolve(sum);
//     else reject("We got some issues.");
//   });
// }

// console.log("first");
// async()
//   .then((sum) => {
//     console.log(sum);
//     console.log("just as we promised.");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("third");

//fetch
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     response
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//a better way, real life usage
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//await
// async function fetchTodo() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchTodo();

// console.log("Annyeong");

//module systems
// const { add, PI, sub } = require("./math");
// console.log(PI);

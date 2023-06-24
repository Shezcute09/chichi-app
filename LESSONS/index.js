// // let a = 10;
// // console.log(typeof a);

// // let b = "2";
// // b = Number(b) //converts number as string to number
// // console.log(b);

// // console.log(Math.sqrt(a));
// // console.log(Math.pow(a, 2));
// // console.log(Math.random()*100);

// // let full_name = "Frank";
// // console.log(full_name)
// // console.log(full_name.length)
// // console.log(full_name[0])

// // //! task
// // let first = "Afomamaemae";
// // let second = "Onyekaba";

// // let c = first[0] + second[0];
// // console.log(c)
// // let d = (first[0]).concat(second[0]);
// // console.log(d)

// // console.log(first.toUpperCase());
// // console.log(first.split("m"))
// // console.log(first.slice(0,4))

// // //booleans: true, false
// // let access = true;
// // let pay = false;

// // let age = 88;
// // console.log(age>77);

// // //null type

// // //objects
// // let user_1 = {
// //     lastName: "Onyekaba",
// //     firstName: "AFoma",
// //     email: "Af@gmail.com",

// //     fullName: function () {
// //         return `${this.firstName} ${this.lastName}`
// //     },

// //     initials: function ()  {
// //         return `${this.firstName[0]}${this.lastName[0]}`
// //     }
// // }

// // console.log(user_1.fullName());
// // console.log(user_1.initials())

// // let input = prompt("Please, check details:");
// // console.log(user_1[input]) /* Used against the above to fetch a particular data out of various data. Commonly used in an ATM where the user has so many options to pick from */

// //To declare a class
// class bottle {
//   //This is a constructor method
//   constructor(cover, volume, state, label, name) {
//     (this.cover = cover),
//       (this.volume = volume),
//       (this.label = label),
//       (this.state = state),
//       (this.name = name);
//   }

//   details() {
//     //This is a method in a class
//     return `
//         Name: ${this.name}
//         Cover: ${this.cover}
//         Volume: ${this.name}
//         State: ${this.state}
//         Label: ${this.label}
//         `;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(a) {
//     this._name = a;
//   }
// }

// let lasie = new bottle("blue", "75cl", "full", "Drink pure, be safe", "Lasien");

// console.log(lasie.cover);
// console.log(lasie.details());

// class bottle {
//   name = "Lasien"; // Needed for your getter to work with the constructor: The get declaration must be before the constructor. //
//   volume = "75cl";

//   //   constructor(name, volume) {
//   //     (this.name = name),
//   //     (this.volume = volume);
//   //   }

//   detail({ name, volume }) {
//     return `
//         Name: ${this.name}\n
//         Volume: ${this.volume} \n
//         `;
//   }
// }

// //To make get and set work with your constructor:
// let lasien = new bottle();
// console.log(lasien.details);
// console.log((lasien.details = { name: "Chile", volume: "75cl" }));

// class bird {
//   name = this.name;
//   wings = this.wings;

//   constructor(name, wings) {
//     this.name = name;
//     this.wings = wings;
//   }

//   get setName() {
//     console.log(`${this.name}`);
//   }

//   set setName(a) {
//     this.name = a;
//   }
// }

// let eagle = new bird("Eagle", "2");
// console.log(eagle.name);
// console.log(eagle.setName);
// console.log((eagle.setName = "Owl"));
// console.log((eagle.name = "Parrot"));
// console.log(eagle.name);

// //inherintance in js
// class parent {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let parent1 = new parent("Afoma Onyekaba");
// console.log(parent1.name);

// //To inherit a name from parent
// class child extends parent {
//   constructor(name, occupation) {
//     super(name);
//     this.occupation = occupation;
//   }
// }

// let child1 = new child("Mr jAMES", "Full stack developer");
// console.log(child1.name);
// console.log(child1.occupation);

// //Objects
// let house = {
//   color: "ash",
//   house_type: "duplex",
// };

// console.log(house.color);
// console.log(house.house_type);

// //object built-in methods
// console.log(house.hasOwnProperty("house_type"));
// house.zinc = "Aluminium"; //Adds properties to your objects, similar to object.assign
// console.log(Object.assign(house, { rooms: 5 })); //Adds properties to your object
// console.log(Object.keys(house)); //retrieves the keys in the objec in an array
// console.log(Object.values(house)); //retrieves the values in the objec in an array
// console.log({ ...house, rooms: 7 }); //spread operator

// //! ARRAYS
// let ages = [930, 969, 950, 33, 175, 40];
// console.log(ages[5]);
// console.log(ages.length);

// //inbuilt array method
// console.log(ages.indexOf(950)); //outputs 2
// console.log(ages.indexOf(9)); //outputs -1
// x = ages.push(7); // Adds 70 to the end of an array
// x = ages.push(7); // Removes 70 from the end of an array
// console.log(ages);

// //delete method deletes any index of a list

// ages.unshift(); //adds to the begining of an array\
// ages.shift(); //removes from the begining of an array
// ages.splice([4, 1]); //deletes a number from an array

// ages[3] = 1914; //To replace
// ages.splice(4, 1, "splice"); //splice(index, 0 or 1, value);
// //if 1 and no value = deleted the index value, length reduces
// //if 1 and value = updates the value
// //if 0 and no value = no change
// //if 0 and value = adds the value to the index  and increase the length of the array

// //! LOOPS: Primitive loops
// //forloop
// /*
// for(startpoint; condition; increment){
//     code block;
// }
// */

// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// let ages = [930, 969, 950, 33, 175, 40];
// //use forlooop to show all the contents of ages
// for (let j = 0; j < ages.length; j++) {
//   console.log(ages[j]);
// }

//while loop
/*
    startpoint
    while(condition){
    code block;
    increment
}
*/

let t = 10;
while (t >= 0) {
  console.log(t);
  t--;
}

let y = 0;
while (y >= 10) {
  console.log(y);
  y--;
}

//Use a while loop to show the content of your 5 favourite fruits
let fruits = ["mangoes", "bananas", "grape", "guava", "pear"];

let w = 0;
while (w < fruits.length) {
  console.log(fruits[w]);
  w++;
}

//dowhile Loop

/*
startpoint;
do{
    code block;
    increment/decrement
} while(condition)
*/

// let z = 10;
// do {
//   console.log(`z = ${z}`);
//   z++;
// } while (z < 20);

// //To use continue and break in loops:
// let v = 20;
// do {
//   v++;
//   if (v == 23) {
//     //break
//     continue;
//   }
//   console.log(`v = ${v}`);
// } while (v < 25);

// for (let c = 0; c < 5; c++) {
//   if (c === 3) {
//     // break;
//     continue;
//   }
//   console.log(`{c = ${c}}`);
// }

//? CONDITIONALS

// let isLoggedIn = false;
// //IF STATEMENT :Runs the code block if condition is true.
// if (isLoggedIn === false) {
//   console.log("Please, log in to continue");
// }
// if (isLoggedIn === true) {
//   console.log("Please, log in to continue");
// }

// //IF ELSE STATEMENT
// let isMale = "Male";
// if (isMale === "male") {
//   console.log("Good morning Mr Chile");
// } else {
//   console.log("Good morning Mrs Chinwe");
// }

// ///IF ELSE STATEMENT
// //Use a changIng variable to greet a user
// //if gender is male, greet Mr
// //if female, ask if married. If married, greet Mrs, else, greet Miss
// let username = prompt("What is your name");
// let gender = prompt("Please, your gender");
// if (gender.toLowerCase() === "male") {
//   console.log(`Good morning Mr. ${username}`);
// } else {
//   let isMarried = prompt("Are you married? Yes or No");

//   //You could use either of while loop statement below, they are the  same. II commented one out.
//   while (
//     isMarried.toLowerCase() !== "yes" &&
//     isMarried.toLowerCase() !== "no"
//   ) {
//     //continue to ask for a valid gender as long as the user has not entered yes or no
//     isMarried = prompt("Are you married? type yes or no");
//   }

//   // while (
//   //   !(isMarried.toLowerCase() === "yes" || isMarried.toLowerCase() === "no")
//   // ) {
//   //   //continue to ask for a valid gender as long as the user has not entered yes or no
//   //   isMarried = prompt("Are you married? type yes or no");
//   // }
//   isMarried = isMarried.toLowerCase();
//   if (isMarried === "yes") {
//     console.log("Good morning Mrs`${username}`");
//   } else {
//     console.log("Good morning Miss `${username}`");
//   }
// }

///IF ELSEIF ELSE STATEMENT
// let num = prompt("Please, type a number from 1-10");
/* console.log(isNaN(num)); (isNaN(num)) returns true if its an alphabeth and false if num is a number. But,(!isNaN(num)) returns true if num is a number. Because we want our condition to evaluate to true, we do (!isNaN(num)) so that the loop can begin */
// if (!isNaN(num))
//   if (num === "2") {
//     //Returns true is num is  a number.
//     console.log(`You typed ${num}`);
//   } else if (num === "5") {
//     console.log(`You typed ${num}`);
//   } else if (num === "10") {
//     console.log(`You typed ${10}`);
//   } else {
//     console.log(`${num} was not found`);
//   }
// else {
//   console.log("Please, provide a number and try again");
// }

//SWITCH STATEMENT Uses strict equality.
// let num = prompt("Please, type a number from 1-10");
// switch (Number(num)) {
//   case 2:
//     console.log(`${num} is an even number`);
//     break;
//   case 4:
//     console.log(`${num} is an even number`);
//     break;
//   case 6:
//     console.log(`${num} is an even number`);
//     break;
//   case 8:
//     console.log(`${num} is an even number`);
//     break;
//   case 10:
//     console.log(`${num} is an even number`);
//     break;

//   default:
//     console.log(`${num} is an odd number`);
//     break;
// }

//To make the switch code shorter:
// let mun = prompt("Please, type a number from 1-10");
// switch (Number(mun)) {
//   case 2:
//   case 4:
//   case 6:
//   case 8:
//   case 10:
//     console.log(`${mun} is an even number`);
//     break;

//   default:
//     console.log(`${num} is an odd number`);
//     break;
// }
//CONDITIONAL RENDERING :Short version if state
let isMale = false;
isMale && console.log("User is a male"); //retrieves user is a male
!isMale && console.log("User is a female"); //retrieves user is a female

//TERNARY OPERATOR: shortened If else. One can only use it to do if-else for one code. if =? while else= :
let isEven = 2;
isEven % 2 === 0 ? console.log("is Even") : console.log("is Odd");

let isEvens = 9;
isEvens % 2 === 0
  ? console.log("is Even")
  : isEvens > 5
  ? console.log(`${isEvens} is an odd number and is greater than five`)
  : console.log(`${isEvens} is an odd number and is greater than five`);

if (isEven > 10 ? true : false) {
  console.log("greater than 10");
}

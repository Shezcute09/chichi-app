// let first = "Afomamaemae";
// console.log(first.slice(0, 4));

// let user_1 = {
//   lastName: "Onyekaba",
//   firstName: "AFoma",
//   email: "Af@gmail.com",

//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   initials: function () {
//     return `${this.firstName[0]}${this.lastName[0]}`;
//   },
// };

// console.log(user_1.fullName());
// console.log(user_1.initials());

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
//           Name: ${this.name}
//           Cover: ${this.cover}
//           Volume: ${this.name}
//           State: ${this.state}
//           Label: ${this.label}
//           `;
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
//   constructor() {
//     this.name = "Lasien";
//     this.volume = "75cl";
//   }

//   detail() {
//     return `
//             Name: ${this.name}\n
//             Volume: ${this.volume}\n
//             `;
//   }
// }

// let lasien = new bottle();
// console.log(lasien.detail()); // Output: Name: Lasien, Volume: 75cl

// lasien.name = "Chile";
// lasien.volume = "50cl";
// console.log(lasien.detail()); // Output: Name: Chile, Volume: 50cl

// class bird {
//   constructor(name, wings) {
//     this.name = name;
//     this.wings = wings;
//   }

//   get getName() {
//     return this.name;
//   }

//   set setName(value) {
//     this.name = value;
//   }
// }

// let eagle = new bird("Eagle", "2");
// console.log(eagle.name); // Output: "Eagle"
// console.log(eagle.getName); // Output: "Eagle"
// console.log((eagle.setName = "Owl")); // Output: "Owl"
// console.log((eagle.name = "Parrot")); // Output: "Parrot"
// console.log(eagle.name); // Output: "Parrot"

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
// // Log the value of the 'color' property of the 'house' object
// console.log(house.color);

// // Log the value of the 'house_type' property of the 'house' object
// console.log(house.house_type);

// // Check if the 'house' object has the property 'house_type' and log the result
// console.log(house.hasOwnProperty("house_type"));

// // Add a new property 'zinc' to the 'house' object with the value "Aluminium"
// house.zinc = "Aluminium";

// // Add properties from an object ({ rooms: 5 }) to the 'house' object using Object.assign and log the modified 'house' object
// console.log(Object.assign(house, { rooms: 5 }));

// // Retrieve and log an array of the keys (property names) of the 'house' object
// console.log(Object.keys(house));

// // Retrieve and log an array of the values of the properties in the 'house' object
// console.log(Object.values(house));

// // Create a new object by copying properties from the 'house' object and adding a new property 'rooms' with the value 7, then log the new object
// console.log({ ...house, rooms: 7 });

// //! ARRAYS
// let ages = [930, 969, 950, 33, 175, 40];
// console.log(ages[5]);
// console.log(ages.length);

// //inbuilt array method
// console.log(ages.indexOf(950)); //outputs 2
// console.log(ages.indexOf(9)); //outputs -1
// x = ages.push(7); // Adds 70 to the end of an array
// console.log(ages);
// x = ages.pop(7); // Removes 70 from the end of an array
// console.log(ages);

// //delete method deletes any index of a list

// ages.unshift(85); //adds to the begining of an array
// console.log(ages);
// ages.shift(); //removes from the begining of an array
// console.log(ages);

// let age = [25, 30, 35, 40, 45];

// age.splice(1, 1); // Delete an element at index 1
// console.log(age); // Output: [25, 35, 40, 45]

// age[3] = 1914; // Replace the element at index 3 with 1914
// console.log(age); // Output: [25, 35, 40, 1914, 45]

// age.splice(4, 1, "splice"); // Replace the element at index 4 with "splice"
// console.log(age); // Output: [25, 35, 40, 1914, "splice"]

// //delete using filter
// let list = [10, 20, 30, 40, 50];
// let itemToDelete = 30; // Item to delete from the array

// let newlist = list.filter((item) => item !== itemToDelete);

// console.log(newlist); // Output: [1, 2, 4, 5]

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

// let lists = [930, 969, 950, 33, 175, 40];
// //use forlooop to show all the contents of lists
// for (let w = 0; w < lists.length; w++) {
//   console.log(lists[w]);
// }

// //use forlooop to show all the contents of ages
// for (let j = 0; j < ages.length; j++) {
//   console.log(ages[j]);
// }

// //while loop
// /*
//       startpoint
//       while(condition){
//       code block;
//       increment
//   }
//   */

// let t = 10;
// while (t >= 0) {
//   console.log(t);
//   t--;
// }

// let y = 0;
// while (y >= 10) {
//   console.log(y);
//   y--;
// }

//Use a while loop to show the content of your 5 favourite fruits
// let fruits = ["mangoes", "bananas", "grape", "guava", "pear"];

// let w = 0;
// while (w < fruits.length) {
//   console.log(fruits[w]);
//   w++;
// }

//dowhile

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

// let fruitx = ["mango", "pear", "oranges", "grape"];
// let t = 0;
// do {
//   console.log(fruitx[t]);
//   t++;
// } while (t < fruitx.length);

// //To use continue and break in loops:
// let v = 20;
// do {
//   v++;
//   if (v == 23) {
//     //To terminate the loop  when v=23
//     break;

//     //To skip the iteration when v = 23, then continues
//   }
//   // continue;
//   console.log(`v = ${v}`);
// } while (v < 25);

// for (let c = 0; c < 5; c++) {
//   if (c === 3) {
//     //To erminates the loop when c === 3
//     // break;

//     //To skip the iteration when c === 3
//     continue;
//   }
//   console.log(`{c = ${c}}`);
// }

//? CONDITIONALS

let isLoggedIn = false;
//IF STATEMENT :Runs the code block if condition is true.
if (isLoggedIn === false) {
  //Will output "Please, log in to continue"
  console.log("Please, log in to continue");
}
if (isLoggedIn === true) {
  //Will not output "Please, log in to continue"
  console.log("Please, log in to continue");
}

//IF ELSE STATEMENT
let isMale = "Male";
if (isMale === "Male") {
  console.log("Good morning Mr Chile");
} else {
  console.log("Good morning Mrs Chinwe");
}

///IF ELSE STATEMENT
//Use a changing variable to greet a user
//if gender is male, greet Mr
//if female, ask if married. If married, greet Mrs, else, greet Miss
let username = prompt("What is your name");
let gender = prompt("Please, your gender");
if (gender.toLowerCase() === "male") {
  console.log(`Good morning Mr. ${username}`);
} else {
  let isMarried = prompt("Are you married? Yes or No");

  //You could use either of while loop statement below, they are the  same. I intentionally commented one out.
  while (
    isMarried.toLowerCase() !== "yes" &&
    isMarried.toLowerCase() !== "no"
  ) {
    //continue to ask for a valid gender as long as the user has not entered yes or no
    isMarried = prompt("Are you married? type yes or no");
  }
}
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

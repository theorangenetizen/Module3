// Exercises 1-4 require some explanations as well as code in the answers

/*
010;
null;
truefalse;
false;
2;
6;
9px;
$45;
2;
null;
-4;
-14;
null1;
undefined1;
true
true
-2
*/

let three = Number("3");
let four = Number("4");
let thirty = Number("30");
//what is the value of the following expressions?
let addition = three + four; //34
let multiplication = three * four; //12
let division = three / four; //.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //true
let lessThan2 = thirty < four; //false

/* three + four and thirty < four. 
They're not correct because three and four would concatenate making it threefour instead of seven, 
and thirty < four because it equals true instead of false. The solution is to convert the strings 
into numbers by adding the Number class function to beginning of the string.*/

/* The console.log messages that would print are "if (-1) console.log('negative is true')" and 
"if (1) console.log('positive is true')" because there are numbers in the conditon, and any
number that isn't 0 is true. */

let a = 10,
  b = 8;
let result = `${a} + ${b} is `;
let statement = a + b < 10 ? "less than 10" : "greater than 10";
console.log((result += statement));
// What += does is that it concatenates the string.

/*const getGreeting = function (name) {
  return "Hello " + name + "!";
};

const getGreeting = (name) => {
  return "Hello " + name + "!";
};*/

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) => {
    return person.numFingers == 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score} with ${this.fouls} fouls.`);
    return this;
  },
  fullTime() {
    console.log(`Full-time score is ${this.score} with ${this.fouls} fouls.`);
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .threePointer()
  .basket()
  .foul()
  .foul()
  .freeThrow()
  .fullTime();

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let city in sydney) {
  console.log(city + ": " + sydney[city]);
}

const lasvegas = {
  name: "Las Vegas",
  population: 660_929,
  state: "Nevada",
  founded: "15 May 1905",
  timezone: "Pacific",
};

for (city2 in lasvegas) {
  console.log(city2 + ": " + lasvegas[city2]);
}

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
let moreSports = [...teamSports];
moreSports.push("Soccer");
moreSports.unshift("Basketball");
let dog2 = dog1;
dog1 = "Fido";
let cat2 = { ...cat1 };
cat2.name = "Charles";

console.log(teamSports);
console.log(dog1);
console.log(cat1);
//only dog1 and cat1 have changed because we changed with the variable dog2 and cat2.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => this.age >= 16;
}

let person = new Person("Siobhan", 25);
let person2 = new Person("Max", 37);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}

let person3 = new PersonClass("Tifa", 20);

console.log(person);
console.log(person2);
console.log(person3);
console.log(person.canDrive());
console.log(person2.canDrive());
console.log(person3.canDrive());

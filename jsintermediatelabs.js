function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("las vegas"));
console.log(ucFirstLetters("the quick brown fox jumps over the lazy dog."));

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));

const animals = ["Tiger", "Giraffe"];
animals.push("Lion", "Elephant");
animals.unshift("Panda", "Gorilla");
animals.sort();
function replaceMiddleAnimal(newValue) {
  const middle = Math.floor(animals.length / 2);
  animals[middle] = newValue;
  console.log(animals);
}
function findMatchingAnimals(beginsWith) {
  const lowerCase = beginsWith.toLowerCase();
  return animals.filter((animals) =>
    animals.toLowerCase().startsWith(lowerCase)
  );
}
console.log(animals);
replaceMiddleAnimal("Jaguar");
console.log(findMatchingAnimals("g"));

function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

// The code above returns the wrong answer because it concatenates them instead of adding them

function currencyAddition(float1, float2) {
  return parseFloat((float1 + float2).toFixed(2));
}
console.log(currencyAddition(0.1, 0.2));

function currencyOperation(float1, float2, operation, numDecimals) {
  if ((numDecimals < 1, numDecimals > 10)) {
    console.error("numDecimals must be between 1 and 10.");
    return null;
  }
  let result;
  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "/":
      if (float2 === 0) {
        console.error("Error: Division by zero.");
        return null;
      }
      result = float1 / float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    default:
      console.error("Invalid operation. Supported operations are: +, -, *, /");
      return null;
  }
  return parseFloat(result.toFixed(numDecimals));
}
console.log(currencyOperation(0.1, 0.2, "+", 2));

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2)); // true

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];

const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

const carBrands = [
  "Toyota",
  "Honda",
  "Kia",
  "Ford",
  "Toyota",
  "Hyundai",
  "Kia",
  "Chevy",
  "BMW",
  "Ford",
];

const primeNumbers = [2, 3, 5, 7, 11, 3, 2, 13, 17, 17, 19, 23, 29, 19, 31];

const countries = ["USA", "Canada", "Mexico", "UK", "Mexico", "Germany", "USA"];
console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(carBrands));
console.log(unique(primeNumbers));
console.log(unique(countries));

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(BookId) {
  return books.find((book) => book.id == BookId);
}
console.log(getBookTitle(1));

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}
console.log(getOldBooks());

function addGenre() {
  return books.map((book) => {
    return { ...book, genre: "classic" };
  });
}
console.log(addGenre());

function getTitles(authorInitials) {
  return books
    .filter(
      (book) => book.author[0].toUpperCase() === authorInitials.toUpperCase()
    )
    .map((book) => book.title);
}

console.log(getTitles("J"));
console.log(getTitles("G"));

function latestBook() {
  let recent = null;
}

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
phoneBookABC.set("Caroline", "2023451289");

const phoneBookDEF = new Map();
phoneBookDEF.set("David", "123-456-7890");
phoneBookDEF.set("Eve", "908-765-4321");
phoneBookDEF.set("Fiona", "321-980-4756");

function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
  });
}

console.log(printPhoneBook(phoneBookABC));

const phoneBook = new Map([...phoneBookABC, ...phoneBookABC]);

console.log(phoneBook);

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let total = 0;
  for (let key in salaries) {
    total += salaries[key];
  }
  return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let topName = "";
  let topSalary = 0;

  for (let key in salaries) {
    if (salaries[key] > topSalary) {
      topSalary = salaries[key];
      topName = key;
    }
  }

  return topName;
}

console.log(topEarner(salaries));

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");

const birthDate = new Date("2003-07-11");
const ageInMilliseconds = today - birthDate;
const ageDate = new Date(ageInMilliseconds);
const years = ageDate.getUTCFullYear() - 1970;
const months = ageDate.getUTCMonth();
const days = ageDate.getUTCDate() - 1;
console.log(`I am ${years} years, ${months} months, and ${days} days old`);

function daysInBetween(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const diffInMillis = endDate - startDate;

  const diffInDays = diffInMillis / (1000 * 60 * 60 * 24);

  return Math.floor(diffInDays);
}

console.log("Days in between:", daysInBetween("2022-08-15", "2024=08-15"));

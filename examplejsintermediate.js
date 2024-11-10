const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)); // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)); // 1.234560000 - fills or rounds to the exact number of digits
const hello = "hello world"; // primitive string
console.log(hello.toUpperCase()); // HELLO WORLD
console.log(hello.endsWith("world")); // true

const user = {
  name: "John",
};
console.log("User: " + user);
// User: [object Object]

const user2 = {
  name: "John",
  toString() {
    return this.name; // custom string value
  },
};
console.log("User: " + user2); // User: John

const apple = {
  name: "Apple",
  category: "Granny Smith",
  price: 1.2,
  valueOf() {
    // without this special function, we can’t multiply the object below
    return this.price;
  },
};
console.log(apple * 2); // 2.4

const billion1 = 1000000000; // 9 zeros - hard to read
const billion2 = 1_000_000_000; // easier to read, underscores ignored
const billion3 = 1e9; // exponential format
console.log(billion1 === billion2); // true
console.log(billion2 === billion3); // true

const microSecs1 = 0.000001; // 6 decimal places - hard to read
const microSecs2 = 0.000_001; // easier to read, underscores ignored
const microSecs3 = 1e-6; // exponential format
console.log(microSecs1 === microSecs2); // true
console.log(microSecs2 === microSecs3); // true

const r = 0xff;
const g = 0xff;
const b = 0xff;
const white = `rgb(${r}, ${g}, ${b})`;
console.log(white); // rgb(255, 255, 255)

const mobile = 0o41234567;
console.log(mobile); // 8730999 - decimal equivalent
const binary = 0b11111111; // binary form of 255
const octal = 0o377; // octal form of 255
console.log(binary); // 255
console.log(binary === octal); // true

const ff = 255;
const ee = 238;
const dd = 221;
console.log(ff.toString(16)); // ff
//convert from rgb color code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`); // #ffeedd

const toobig = 1e350; // 1 * 10350 - overflows storage
console.log(toobig); // Infinity
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

const point1 = 0.1;
const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`); // 0.1 + 0.2 = 0.30000000000000004

// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
console.log(9_999_999_999_999_999); // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991

console.log(isNaN(NaN)); // true
console.log(NaN == NaN); // false

console.log(isFinite(1 / 3)); // true, regular number
console.log(isFinite("string")); // false, because converts to NaN
console.log(isFinite(Infinity)); // false, because represents infinite number

console.log(parseInt("150px")); // 150 - stops at 'px'
console.log(parseFloat("2.5em")); // 2.5 - stops at 'em'
console.log(parseFloat("12.34.56")); // 12.34 - stops at second invalid decimal
console.log(parseInt("a123")); // NaN - can't parse the 'a' so stops

const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`;
console.log(guestList);

console.log("Z".codePointAt(0)); // 90

console.log(String.fromCodePoint(90)); // Z

const string = "I could be anything you like";
console.log(string.length); // 28 - string is 28 characters long
console.log(string.indexOf("anything")); // 11 - starting at 0 for 'I'
console.log(string.substring(20)); // 'you like' - substring starting at position 20
console.log(string.toUpperCase()); // I COULD BE ANYTHING YOU LIKE
console.log(string + " plus more"); // I could be anything you like plus more

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.startsWith("The")); // true - case sensitive
console.log(sentence.endsWith("dog")); // false - needs the period
console.log(sentence.split(" ")); // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)); // quick - gets the section between chars 4 and 10
console.log(sentence.replace("quick", "slow")); // The slow brown fox jumps over the lazy dog.
console.log("  extra     spaces  ".trim()); // extra     spaces - trims whitespace from start and end

const arr1 = new Array(1, 2, 3); // constructor, not often used
const arr2 = [1, 2, 3]; // array literal, much more common
console.log(arr1); // [ 1, 2, 3 ] - both do the same
console.log(arr2); // [ 1, 2, 3 ] - both do the same

/*const fruits = ["Apple", "Orange", "Pear"];
const lastFruit = fruits.pop(); // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]

fruits.push("Banana"); // adds to the end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]*/

const fruits = ["Apple", "Orange", "Pear"];
const firstFruit = fruits.shift(); // removes and returns the first item
console.log(firstFruit); // Apple
console.log(fruits); // [ 'Orange', 'Pear' ]

fruits.unshift("Banana"); // adds to the beginning of the array
console.log(fruits); // [ 'Banana', 'Orange', 'Pear' ]

const fruits1 = ["Apple", "Orange", "Pear"];
const fruits2 = fruits1; // refers to same memory location
fruits1.push("Banana"); // add new item to the end of fruits1
console.log(fruits2); // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they both reference the same memory location
console.log("fruit at index 0: " + fruits1[0]); // Apple - accessed using numeric index 0
console.log("fruit at index 1: " + fruits1[1]); // Orange - accessed using numeric index 1

const matrix = [
  // 3x3 matrix
  [1, 2, 3], // row 0
  [4, 5, 6], // row 1
  [7, 8, 9], // row 2
];
console.log(matrix[1][1]); // 5, the value in row 1, column 1

const numbers = [1, 2, 3];
const strings = ["one", "two", "three"];
const empty = [];
console.log("Numbers: " + numbers); // Numbers: 1,2,3
console.log("Strings: " + strings); // Strings: one,two,three
console.log("Empty: " + empty); // Empty:

const sliceArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const sliced = sliceArray.slice(0, 3); // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3); // start at the end, get last 3 items
console.log(sliced); // [ 'red', 'orange', 'yellow' ]
console.log(endSliced); // [ 'blue', 'indigo', 'violet' ]console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const spliceArray = ["I", "study", "JavaScript", "right", "now"];
const removed = spliceArray.splice(0, 3, "Let's", "dance");
console.log(removed); // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray); // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const combined = array1.concat(array2, array3);
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

/*const marks = ["A+", "C+", "B-", "D", "B+", "C+", "B-"];
let bIndex = marks.indexOf("B-");
let eIndex = marks.indexOf("E");
// first index is always 0
console.log(marks[bIndex] + " is at index: " + bIndex); // B- is at index: 2
console.log(eIndex); // -1, since not found*/

const marks = ["A+", "C+", "B-", "D", "B+", "C+", "B-"];
let bIndexFirst = marks.indexOf("B-");
let bIndexLast = marks.lastIndexOf("B-");
console.log(marks[bIndexFirst] + " is first at: " + bIndexFirst); // B- is first at: 2
console.log(marks[bIndexLast] + " is last at: " + bIndexLast); // B- is last at: 6

/*const elements = ["Wind", "Water", "Fire", "Air"];
console.log(elements.join()); // Wind,Water,Fire,Air
console.log(elements.join(" ")); // Wind Water Fire Air
console.log(elements.join("; ")); // Wind; Water; Fire; Air*/

const hobbits = ["Bilbo", "Frodo", "Samwise", "Merry", "Pippin"];
hobbits.forEach((hobbit, index) => {
  // usually we use an arrow function here
  console.log(`#${index}: ${hobbit}`); // runs once for every item in array
});

/*const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
];
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find((product) => product.title == "Denim Jeans"); // returns matching item
let shirt = products.find((product) => product.category == "Shirts"); // returns matching item
console.log(jeans); // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt); // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }*/

/*const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
  { id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts" },
];
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products.filter((product) => product.category == "Shirts");
let under50 = products.filter((product) => product.price < 50);
console.log(shirts); // 2 matching items in shirts array
console.log(under50); // 3 matching items in under50 array

let titles = products.map((product) => product.title);
let h2titles = products.map((product) => "<h2>" + product.title + "</h2>");
let raisedPrices = products.map((product) => ({
  ...product,
  price: product.price + 5,
}));
console.log(titles); // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles); // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices); // all prices increased by $5*/

/*const stringNums = ["1", "81", "41", "102", "35", "1004"];
console.log(stringNums.sort()); // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log(stringNums.sort((a, b) => a - b)); // [ '1', '35', '41', '81', '102', '1004' ]*/

const stringNums = ["1", "81", "41", "102", "35", "1004"];
const sortedNums = [...stringNums].sort();
console.log(stringNums); // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums); // [ '1', '1004', '102', '35', '41', '81' ]

const elements = ["Wind", "Water", "Fire", "Air"];
const reversed1 = elements.reverse(); // modifies the original
const reversed2 = [...elements].reverse(); // clone first to preserve the original
console.log(elements); // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2); // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)

/*const products = [
  {
    id: 1,
    title: "Sleeveless Tee",
    price: 23.95,
    category: "Shirts",
    quantity: 2,
  },
  {
    id: 2,
    title: "Men's Hoodie",
    price: 54.95,
    category: "Winter",
    quantity: 3,
  },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants", quantity: 5 },
]; // initial (below) should be 0 for reliability in calculating totals
const totalPrice = products.reduce(
  (currentTotal, currentProduct) => currentTotal + currentProduct.price,
  0
);
const totalQty = products.reduce(
  (currentQty, currentProduct) => currentQty + currentProduct.quantity,
  0
);
console.log(totalPrice); // 128.85000000000002
console.log(totalQty); // 10*/

const products = [
  {
    id: 1,
    title: "Sleeveless Tee",
    price: 23.95,
    category: "Shirts",
    quantity: 2,
  },
  {
    id: 2,
    title: "Men's Hoodie",
    price: 54.95,
    category: "Winter",
    quantity: 3,
  },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants", quantity: 5 },
];
// get the titles of all products over $25:
const over25Titles = products
  .filter((prod) => prod.price > 25)
  .map((prod) => prod.title);
console.log(over25Titles); // [ "Men's Hoodie", 'Denim Jeans' ]
// list product ids and titles in descending order of price:
const hiloProducts = [...products]
  .sort((p1, p2) => p1.price - p2.price)
  .reverse()
  .map((prod) => ({ id: prod.id, title: prod.title }));
console.log(hiloProducts);
// [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]

/*const animalsArr = ["tiger", "lion", "elephant", "giraffe"];
for (let animal of animalsArr) {
  console.log(animal);
} // prints each animal in turn
const animalObj = { name: "tiger", genus: "panthera", class: "mammal" };
for (let property of animalObj) {
  console.log(property);
} // TypeError: animalObj is not iterable*/

console.log(Array.from("string")); // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log(Array.from(new Set(["cat", "bat", "sat", "cat", "bat"]))); // [ 'cat', 'bat', 'sat' ]
console.log(
  Array.from(
    new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ])
  )
);
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
function makeArray() {
  return Array.from(arguments);
}
console.log(makeArray(1, 2, 3)); // [ 1, 2, 3 ]

const exampleMap = new Map(); // create new empty map object
exampleMap.set(1, "number one"); // 'set' adds a new key-value pair to the map
exampleMap.set("1", "string one"); // maps support keys of different types
exampleMap.set(true, "true"); // can have boolean keys
exampleMap.set({ name: "John" }, { phone: "0412345678" }); // object keys also valid
exampleMap.set("1", "second string one"); // overwrites previous value if key exists
console.log(exampleMap.size); // 4 - number of items in the map
console.log(exampleMap);
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
// { name: 'John' } => { phone: '0412345678' } }

console.log(exampleMap.get("1")); // second string one - gets value for matching key
console.log(exampleMap.get(2)); // undefined - key doesn't exist so no value
console.log(exampleMap.has(1)); // true - key does exist
console.log(exampleMap.delete(true)); // true - removes item and returns true if successful
exampleMap.clear(); // removes all items from map
console.log(exampleMap); // Map(0) {}

const recipeMap = new Map([
  ["flour", "1 cup"],
  ["milk", "1/2 cup"],
  ["eggs", 2],
  ["butter", "50g"],
]);
for (let ingredient of recipeMap.keys()) {
  console.log(ingredient); // flour, milk, eggs, butter
}
for (let quantity of recipeMap.values()) {
  console.log(quantity); // 1 cup, 1/2 cup, 2, 50g
}
for (let item of recipeMap) {
  // same as recipeMap.entries()
  console.log(item); // ['flour', '1 cup'], (and so on)
}

const priceMap = new Map([
  ["banana", 1],
  ["pineapple", 2],
  ["watermelon", 5],
]);
const priceObject = Object.fromEntries(priceMap);
console.log(priceObject); // { banana: 1, pineapple: 2, watermelon: 5 }

// Simulate fetching external data, which can be slow
function fetchExternalData(id) {
  console.log(`Fetching data for ID: ${id}`);
  const data = `Data for ID: ${id}`; // Simulated data
  return data;
}
// Create a Map for caching
const cache = new Map();
function getCachedData(id) {
  // Check if data is already in the cache
  if (cache.has(id)) {
    return cache.get(id); // return cached value, no expensive lookup
  }
  // If not in cache, fetch "external" data and store in cache for next time
  const data = fetchExternalData(id);
  cache.set(id, data);
  return data;
}
// Example usage
console.log("#1: " + getCachedData(1)); // First time: fetches "external" data and caches result
console.log("#2: " + getCachedData(1)); // Other times: can fetch result from cache, much faster

/*const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
names.add("Mateo");
names.add("Oliver");
names.add("Bruno");
console.log(names.size); // 5 - only the unique names
console.log(names); // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno'*/

const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
// traditional style of for loop - works because Sets are iterable
for (let name of names) {
  console.log(name);
}
// more concise for simple operations, newer syntax using arrow function
names.forEach((name) => console.log(name));

const mj = ["Michael", "Jordan"];
const [mjFirst, mjLast] = mj; // destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast); // Michael Jordan

/*const [jcFirst, jcLast, , , jcPlace] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`); // Julius Caesar is a Roman

const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [one, two, three] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [[type, quantity]] = new Map([["apple", 4]]); // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

const teeProduct = {
  id: 1,
  title: "Sleeveless Tee",
  price: 23.95,
  category: "Shirts",
};
// key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
  console.log(`${key}: ${value}`); // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

let student = "James",
  teacher = "Andrew";
[student, teacher] = [teacher, student];
console.log(student); // Andrew
console.log(teacher); // James

const [jcFirst, jcLast, ...jcTitles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(jcTitles); // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jcTitles.length); // 4

const [jcFirst = "Unknown", jcLast, jcTitle = "Consul"] = ["Julius", "Caesar"];
console.log(jcFirst); // Julius
console.log(jcTitle); // Consul

// property names (keys) on right are matched to variable names on left
let { width, height, title } = {
  title: "My Component",
  height: 100,
  width: 200,
};
console.log(width, height, title); // 200 100 My Component

function displayComponent({ height = 200, width = 100, title }) {
  console.log(
    `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`
  );
}
displayComponent({ width: 200, title: "My Awesome Component" });
displayComponent({ title: "My Amazing Component" });
displayComponent({ width: 300, height: 300, title: "My Average Component" });*/

let options = { width: 200, height: 100, title: "My Component" };
let { title, ...rest } = options;
console.log(title); // My Component
console.log(rest); // { width: 200, height: 100 }

const now = new Date();
console.log(now); // 2023-03-26T11:45:59.096Z
console.log(+now); // 1679832116638 - number of milliseconds since epoch

const epoch = new Date(0); // 0 milliseconds since Jan 1 1970
const jan2_1970 = new Date(1000 * 60 * 60 * 24); // a full day in milliseconds after Jan 1
console.log(epoch); // 1970-01-01T00:00:00.000Z
console.log(jan2_1970); // 1970-01-02T00:00:00.000Z

/*const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas); // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
console.log(nyeLocal); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone*/

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log(christmas.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
// 2023. 12. 25. 오전 9:00:00 - both timezone and language are converted to Korean
const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
console.log(nyeLocal.toLocaleString()); // 31/12/2023, 11:59:59 pm - default to local TZ

const student = {
  name: "Sita",
  age: 28,
  courses: ["HTML", "CSS", "JS"],
  occupation: null,
};
console.log(JSON.stringify(student));
//{"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null}

const room = {
  number: 23,
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup
JSON.stringify(meetup); // TypeError: Converting circular structure to JSON

console.log(JSON.stringify(meetup, ["title", "participants"])); // just stringify the properties in the array: {"title":"Strategy Conference","participants":["Chris","Tina"]}

console.log(
  JSON.stringify(
    meetup,
    function (key, value) {
      if (key != "" && value == meetup)
        return undefined; // skip references to current object
      else if (typeof value == "function") return value.toString(); // stringify functions
      return value; // otherwise return original value unchanged
    },
    2
  )
); // use 2 spaces for nicer formatting

/*const room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};*/
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup)); // no more circular references as room stringifies to 23
// {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}

const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-06-01",
};
const meetupString = JSON.stringify(meetup); // convert object to string
const meetupParsed = JSON.parse(meetupString, (key, value) => {
  // convert string to object
  if (!isNaN(Date.parse(value))) return new Date(value); // if valid date, create Date object
  return value;
});
console.log(meetupParsed); // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }

const box1 = {
  size: "large",
  dimensions: { width: 50, length: 70, height: 30, units: "cm" },
  items: ["glasses", "plates", "cutlery"],
};
const boxString = JSON.stringify(box1); // convert object to string
const box2 = JSON.parse(boxString); // convert string back to new object
// how could we check to make sure both boxes are the same but independent?

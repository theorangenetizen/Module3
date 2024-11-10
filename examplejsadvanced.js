/*let globalVariableCat = "cat";
function myFunction() {
  let localVariableDog = "dog";
  return "global function with local scope variable " + localVariableDog;
}
console.log(localVariableDog); // ReferenceError: localVariableDog is not defined
// globalEnvironment = {
//     environmentRecord: {
//        globalVariableCat: 'cat', // has no access to localVariableDog
//        myFunction: <reference to function object>,
//    }
//    outer: null // there is no parent environment here
// }
// localMyFunctionEnvironment = {
//     environmentRecord: {
//         localVariableDog: 'dog'
//     },
//     outer: globalEnvironment // can still access everything in global
// }*/

function makeAdder(x) {
  // function factory: bundles value of x into the scope of adder
  return function adder(y) {
    // closure function 'adder' now has access to both x and y when created
    return x + y;
  };
}
const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
console.log(add5(10)); // x is still 5 and y is 10, result is 15

function makeHeading(hTag) {
  // every call to makeHeading could have different values for hTag
  return function (title) {
    // unnamed closure function, can access value of hTag when created
    return `<${hTag}>${title}</${hTag}>`;
  };
}
const getH1 = makeHeading("h1"); // sets hTag to h1, creates new instance of closure in getH1
const getH2 = makeHeading("h2"); // sets hTag to h2, creates separate instance of closure in getH2
console.log(getH1("Heading 1")); // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
console.log(getH2("Heading 2")); // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>

function sayHiDefn() {
  console.log("Hi (function definition)");
} // named function
const sayHiExpn = function () {
  console.log("Hi (function expression)");
}; // named variable
const sayHiArrow = () => console.log("Hi (arrow function)"); // named variable
//.name property exists as a built-in default property for all functions
console.log(sayHiDefn.name); // sayHiDefn - uses explicit function name
console.log(sayHiExpn.name); // sayHiExpn - figures out name from context
console.log(sayHiArrow.name); // sayHiArrow - figures out name from context

function oneParam(a) {
  console.log("This function has a single parameter: " + a);
}
function twoParams(a, b) {
  console.log(`This function has two parameters: ${a} and ${b}`);
}
function manyParams(a, b, ...extras) {
  console.log(
    `This function has unlimited parameters: ${a} and ${b} and ${extras}`
  );
}
console.log(oneParam.length); // 1
console.log(twoParams.length); // 2
console.log(manyParams.length); // 2, because extras is 'the rest' and can't be counted

function sayHi() {
  console.log("Hi");
  sayHi.counter++; // increment the custom counter property every time the function is called
}
sayHi.counter = 0; // initialize the counter to 0 before calling it
sayHi(); // Hi - calls the function and increments the counter
sayHi(); // Hi - calls the function and increments the counter again
console.log(`Called ${sayHi.name} ${sayHi.counter} times`); // Called sayHi 2 times

function printMessage(msg) {
  console.log(`Message: ${msg}`);
}
// function to be executed, then milliseconds to delay, then arguments for function
let timerId = setTimeout(printMessage, 1000, "prints after 1 sec"); // Message: prints after 1 sec

/*let cancelledTimerId = setTimeout(
  printMessage,
  1000,
  "timeout cancelled so never prints"
);
clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

setTimeout(() => console.log("log statement inside arrow function"), 500);
// prints 'log statement inside arrow function' after 0.5 seconds

setTimeout(() => console.log("first message"), 5000); //asynchronous code with 5s delay
setTimeout(() => console.log("second message"), 3000); //asynchronous code with 3s delay
setTimeout(() => console.log("third message"), 1000); //asynchronous code with 1s delay
setTimeout(() => console.log("fourth message"), 0); //asynchronous code with no delay
console.log("fifth message"); //standard synchronous code
//order of messages when running code:
// fifth message (first, synchronous therefore no delay)
// fourth message (second, even though comes before fifth message, still no delay)
// third message (prints after 1s)
// second message (prints after 3s)
// first message (prints after 5s). Timers do not stack, so total of 5s delay between first and fifth

let tickId = setInterval(() => console.log("tick"), 2000); // 'tick' every 2s
setTimeout(() => clearInterval(tickId), 10 * 1000); // after 10s ticking stops

function repeatInterval(delay, limit) {
  let counter = 1; // part of the outer environment record for repeatInterval
  // intervalTimer is a reference to interval, to allow it to be cancelled
  let intervalTimer = setInterval(function repeatThis() {
    console.log(
      "repeatInterval: repeated " + counter + " of " + limit + " times"
    );
    if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
    counter++; // keep track of how many times the interval has executed, in outer environment
  }, delay); // delay is milliseconds between intervals
}
repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times

function repeatTimeout(delay, limit) {
  let counter = 1;
  // setTimeout only happens once, so we don't need the reference to cancel it
  setTimeout(
    function repeatThis(current) {
      // named function, so we can refer to it recursively
      console.log(
        "repeatTimeout: repeated " + current + " of " + limit + " times"
      );
      // we do need to call setTimeout recursively so that it repeats executing the function
      if (current < limit) setTimeout(repeatThis, delay, current + 1); // repeat if limit not reached
    },
    delay,
    counter
  );
}
repeatTimeout(2000, 10); // make the timeout repeat every 2 seconds for a max of 10 times

function printGreeting(name) {
  // simple undecorated function
  console.log("Hello, " + name);
}
printGreeting("Undecorated");
function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function (name) {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction(name); // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated"); // we can still call the decorated version in the same way

function slow(x) {
  // there can be a time-consuming job here, like adding up to a large number
  let random = 0,
    goal = Math.floor(Math.random() * x * 1_000_000); // random large number
  console.log(
    `slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`
  );
  for (let i = 0; i < goal; i++) random++;
  return random; // return large number after counting to it
}
function cachingDecorator(origFunction) {
  // decorator takes a function as parameter
  const cache = new Map(); // can also include outer environment variables via a closure
  return function (x) {
    // decorator returns same function with extra bits - caching
    if (cache.has(x)) {
      // if the key exists in the cache,
      console.log("returned cached value for " + x);
      return cache.get(x); // read and return the result from it
    }
    let result = origFunction(x); // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
  };
}
const fast = cachingDecorator(slow); // we can decorate the original slow function to use caching and make it fast
const fastTimed = loggingTimingDecorator(fast); // we can decorate the fast version to include timing for testing
fastTimed(8); // first time will still be slow because it's uncached
fastTimed(8); // but every time after this will be much faster because result is cached

function loggingTimingDecorator(originalFunction) {
  // same decorator function as before
  return function () {
    // BUT now the returned function doesn't name its arguments from here
    console.time("Function timer");
    console.log(`\nExecuting function ...`);
    //const result = originalFunction(name); // WON'T work as name is now undefined
    //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
    const result = originalFunction.apply(this, arguments); // and so does this - try out both
    console.log(arguments); // [Arguments] { '0': 8 }
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}*/

/*let worker = {
  getMultiplier() {
    return Math.floor(Math.random() * 1_000_000); // large random number
  },

  slow(x) {
    let random = 0,
      goal = x * this.getMultiplier(); // needs context to work
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return random; // return large number
  },
};
worker.slow(5); // works, context comes from before the dot, ie. worker
worker.fast = cachingDecorator(worker.slow); // without call/apply, context is lost
worker.fast(3); // TypeError: Cannot read properties of undefined (reading 'getMultiplier')*/

function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise
function getOddNumbers() {
  // arguments is not an array, but it 'borrows' the filter function from Array by using call
  return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
}
let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}
function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}
const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`
);

/*const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
user.sayHi(); // called directly, works! Hi, John
setTimeout(user.sayHi, 1000); // passed as reference, fails! Hi, undefined

const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
setTimeout(function () {
  user.sayHi();
}, 1000); // works! Hi, John
setTimeout(() => user.sayHi(), 1000); // same as above, arrow function (more common)*/

const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
const boundSayHi = user.sayHi.bind(user); // new function reference with user context explicitly bound
setTimeout(boundSayHi, 1000); // works! Hi, John

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

function Rabbit(name) {
  // constructor function, first letter capitalized by convention
  this.jumps = true;
  this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
let whiteRabbit = new Rabbit("White Rabbit");
console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); // all properties

/*const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

const arr = []; // simple empty array
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //inherited properties from prototype

String.prototype.show = function () {
  // creates new 'show' function on built-in String prototype
  console.log(this);
};
"BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype
// polyfilling for String.prototype
if (!String.prototype.repeat) {
  // if there's no such function in the prototype already
  String.prototype.repeat = function (n) {
    // define a repeat function to repeat the string n times
    return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
  };
}
console.log("La".repeat(3)); // LaLaLa*/

// define our own join() function for objects
const obj = {
  0: "Hello",
  1: "world",
  length: 2, // needed for join to work
};
obj.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
console.log(obj.join(",")); // Hello,world

/*class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
class Rabbit extends Animal {
  hide() {
    // custom function, also inherits from Animal
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.hide(); // bunny hides!

class Rabbit extends Animal {
  stop() {
    // overrides stop method in parent class
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
  hide() {
    // custom function, also inherits this.name from Animal
    console.log(`${this.name} hides!`);
  }
}
/*let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.stop(); // bunny stands still. bunny hides!

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // call the constructor function of the parent, inherited Animal class
    this.earLength = earLength; // adds custom properties only for instances of Rabbit
  }
  stop() {
    // function overridden from parent class
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
  hide() {
    // custom child class function
    console.log(`${this.name} hides!`);
  }
}
/*let bunny = new Rabbit("bunny", 8); // bunny contains properties and methods from Animal and Rabbit
console.log(bunny.earLength); // 8*/

/*class Animal {
  type = "animal";
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  describe() {
    console.log(`${this.name} is a ${this.type}`);
  }
  //... previous Animal methods go here
}
class Rabbit extends Animal {
  type = "rabbit";
  //... previous Rabbit methods go here
}
new Rabbit("bunny").describe(); // bunny is a rabbit
new Animal("fuzzy wuzzy").describe(); // fuzzy wuzzy is a animal*/

/*class Person {
  static latin = "persona"; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
  }
}
let jonas = new Person("Jonas");
console.log(jonas.getName()); // Jonas - name and getName() belong to an instance of Person
console.log(jonas.latin); // undefined - latin property doesn't belong to jonas
console.log(Person.latin); // persona - latin property belongs to Person class
let anon = Person.createAnonymous(); // use static (factory) method to create generic Person instance*/

class Laptop {
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand); // public property, accessed externally from any instance
console.log(macbook._hardDiskType); // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()); // recommended way to access protected property

/*class Laptop {
  _hardDiskType = "HDD"; // protected property, SHOULD only be used by inheriting classes
  #numCPUFans = 1; // private property, CAN only be used internally by class methods
  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return false;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans++; // can access private properties internally
  }
}
/*const macbook = new Laptop("Macbook Pro");
console.log(macbook.#numCPUFans); // error: private property is not accessible

class GamingLaptop extends Laptop {
  constructor(brand) {
    super(brand); // public property, externally available to instances
    this._hardDiskType = "SSD"; // protected props should be accessed by children, not instances
    this.#numCPUFans = 2; // error: private property is not accessible
    this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
  }
  isGaming() {
    return true;
  } // public method
}
const alienware = new GamingLaptop("Alienware");
//console.log(alienware.#numCPUFans) // error: private property is not accessible
console.log(alienware._hardDiskType); // no error: but protected property SHOULD NOT be accessed
console.log(alienware.getHDiskType()); // better: public method for accessing protected property*/

/*try {
  const error = "mismatched quotes'
  } catch (error) {
  console.log('will not catch above error')
  }*/
// SyntaxError: Invalid or unexpected token - doesn't go to catch block
try {
  noSuchVariable;
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("caught an error: " + error.message); // all errors have a message property
}
// caught an error: noSuchVariable is not defined
console.log(
  "even though an error occurred above, it was caught so code continues"
);

/*try {
  setTimeout(() => noSuchVariable, 1000);
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("only synchronous errors! " + error.message); // all errors have a message property
}
console.log(
  "prints synchronous code then throws uncaught asynchronous error after 1 sec"
);*/

function checkJson(json) {
  // checks json argument for validity and ensures a name property
  try {
    const user = JSON.parse(json); // parse string into object
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
    }
    return true; // returns true (valid json) if no error was thrown above
  } catch (err) {
    if (err instanceof SyntaxError) {
      // once caught, we can do specific things based on error type
      console.log("JSON Error: " + err.message);
    } else {
      throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
    }
  }
  return false; // returns false if any error occurred
}

function checkJson(json) {
  try {
    // ... as above
    return true;
  } catch (err) {
    //... as above
  } finally {
    console.log("at the end"); // always prints, even if returning true or throwing an error
    // used to complete operations and perform cleanup regardless if we hit errors or not,
    // eg. closing db connections, removing interval timers, cancelling event listeners, etc
  }
  return false; // returns false if any error occurred
}

// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => {
  // resolve/reject are callback functions
  if (Math.random() > 0.5)
    setTimeout(() => resolve("Random number ok"), 250); // success
  else setTimeout(() => reject("Random number too low"), 250); // failure
});
promise // consume the promise by responding to outcomes when they happen
  .finally(() => console.log("Wait is over, promise has settled.")) // always prints
  .then((result) => console.log("Success! " + result)) // prints resolve msg
  .catch((error) => console.log("Error! " + error)); // prints reject msg

let start = 10;
new Promise((resolve, reject) => {
  resolve(start); // resolve promise successfully with value of 10
})
  .then((result) => {
    // when resolve is called, it triggers .then()
    console.log(result);
    return result + 40; // values returned from .then() are also promises
  })
  .then((result) => {
    // so we can chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  })
  .then((result) => {
    // we can continue to chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  });
// prints 10, 20, 30

let start2 = 10;
new Promise((resolve) => setTimeout(() => resolve(start), start * 10))
  .then((result) => {
    // promise handler function inside .then()
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // can explicitly return new promises
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // which use the results of previously resolved promises in the chain
    console.log(result);
    let next = result + start2;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between

const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Simple successful promise"), 250);
});
// using .then to process asynchronously:
promise.then((msg) => console.log(msg));
// using await to process synchronously (if using await in a function it needs to be async):
let msg = await promise;
console.log(msg);

async function asyncFunctionDeclaration() { ... } // function declaration syntax
const asyncFunctionExpression = async function() { ... } // function expression syntax
const asyncFunctionArrow = async () => { ... } // arrow function syntax
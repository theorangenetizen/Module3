function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;

  return function () {
    currentCount += incrementBy = 1;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(30);
let counter2 = makeCounter(240);

counter1(); // 1
counter1(); // 2
counter2();
counter2();

const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
let cancelledTimerId = setTimeout(delayMsg, 10000, "#5: Delayed by 10s");
clearTimeout(cancelledTimerId);

/*The order that the 4 tests will print out in will be #4, #3, #2, #4.
bacause #4 has no delay and the rest of them do.*/

function debounce(func, ms = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 500); //create this debounce function for a)

/*fire off 3 calls to printMe within 300ms - only the LAST one should print, after
  1000ms of no calls*/
setTimeout(() => printMe("First message"), 100);
setTimeout(() => printMe("Second message"), 200);
setTimeout(() => printMe("Third message"), 300);

function printFibonacci(limit) {
  let x = 0,
    y = 1,
    count = 0;
  const intervalId = setInterval(() => {
    if (count < limit) {
      console.log(x);
      [x, y] = [y, x + y];
      count++;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

function printFibonacciTimeouts(limit) {
  let x = 0,
    y = 1,
    count = 0;
  function printNextFibonacci() {
    if (count < limit) {
      console.log(x);
      [x, y] = [y, x + y];
      count++;
      setTimeout(printNextFibonacci, 1000);
    }
  }
  setTimeout(printNextFibonacci, 1000);
}

printFibonacci(5);
printFibonacciTimeouts(5);

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

let newCarYear = console.log(newCarYear);

/* */
setTimeout(() => car.description(), 200); //works
setTimeout(car.description, 200); //fails

function multiply(a, b) {
  console.log(a * b);
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

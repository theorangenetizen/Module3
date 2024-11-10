function startPreparation() {
  setTimeout(() => {
    console.log("Started preparing pizza ...");
  }, 0);
}

function makeBase() {
  setTimeout(() => {
    console.log("Made the base");
  }, 100);
}

const addSauceAndCheese = function () {
  setTimeout(() => {
    console.log("Added the sauce and cheese");
  }, 200);
};

const addToppings = function () {
  setTimeout(() => {
    console.log("Added the pizza toppings");
  }, 300);
};

const cookPizza = () => {
  setTimeout(() => {
    console.log("Cooked the pizza");
  }, 400);
};

const servePizza = () => {
  setTimeout(() => {
    console.log("Pizza is ready");
  }, 500);
};

startPreparation();
makeBase();
addSauceAndCheese();
addToppings();
cookPizza();
servePizza();

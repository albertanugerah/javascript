const { coffeeStock, isCoffeeMachineReady } = require("./state");

console.log({ coffeeStock, isCoffeeMachineReady });

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji Kopi Habis!");
  }
};

makeCoffee("robusta", 80);

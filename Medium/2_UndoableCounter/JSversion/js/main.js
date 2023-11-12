// console.log("main");

let counterNumberEl = document.querySelector(".counter-number");
let currentCounterNumber =
  +document.querySelector(".counter-number").textContent;
let newCounterNumber;

let btns = document.querySelectorAll(".btn");

const updateCount = (number) => {
  currentCounterNumber += number;
  counterNumberEl.textContent = currentCounterNumber;
  console.log(currentCounterNumber);
};

let beforeNumber = 0;
let newNumber;
let historyArray = [];

let counterNumberEl = document.querySelector(".counter-number");
let btns = document.querySelectorAll(".btn");

const updateCount = (number) => {
  counterNumberEl.textContent = beforeNumber += number;
  newNumber = counterNumberEl.textContent;
  updateHistory(beforeNumber, number, newNumber);
};

const updateHistory = (beforeNumber, inputNumber, newNumber) => {
  let newHistory = document.createElement("div");
  newHistory.innerHTML = `<span>${inputNumber}</span> <span>(${
    beforeNumber - inputNumber
  } -> ${newNumber})</span>`;
  let historyEl = document.querySelector(".history");
  historyEl.append(newHistory);
};

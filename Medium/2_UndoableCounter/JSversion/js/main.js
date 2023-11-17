let beforeNumber = 0;
let afterNumber;
let historyArray = [{ beforeNumber: 0, inputNumber: 0, afterNumber: 0 }];
let currentHistoryIndex;

let counterNumberEl = document.querySelector(".counter-number");
let btns = document.querySelectorAll(".btn");

const updateCount = (number) => {
  // counterNumberEl.textContent = beforeNumber += number;
  console.log(historyArray);
  // let beforeNumber = +historyArray[historyArray.length - 1].beforeNumber;
  // let afterNumber =
  //   +historyArray[historyArray.length - 1].beforeNumber + +number;

  // counterNumberEl.textContent = +afterNumber;

  afterNumber, (counterNumberEl.textContent = beforeNumber += number);

  updateHistory(beforeNumber, number, afterNumber);
};

const updateHistory = (beforeNumber, inputNumber, afterNumber) => {
  let newHistory = document.createElement("div");
  newHistory.classList.add("history-item");
  newHistory.innerHTML = `<span class="inputNumber">${inputNumber}</span> <span>(${
    beforeNumber - +inputNumber
  } -> ${afterNumber})</span>`;
  let historyEl = document.querySelector(".history");
  historyEl.append(newHistory);

  let historyObject = {
    oldNumber: +beforeNumber,
    inputNumber: +inputNumber,
    afterNumber: +afterNumber,
  };

  // console.log(historyObject);

  historyArray.push(historyObject);
};

// UNDO
const undoedItems = [];

const undoBtn = document.querySelector(".undoBtn");
undoBtn.addEventListener("click", () => {
  const historyItems = document.querySelectorAll(".history-item");
  historyItems[historyItems.length - 1].remove();
  let counterNumberEl = document.querySelector(".counter-number");
  counterNumberEl.textContent =
    +historyArray[historyArray.length - 1].oldNumber -
    historyArray[historyArray.length - 1].inputNumber;
  let poppedItem = historyArray.pop();
  undoedItems.push(poppedItem);
  historyArray.pop();
});

// REDO
const redoBtn = document.querySelector(".redoBtn");
redoBtn.addEventListener("click", () => {
  // update counter
  let counterNumberEl = document.querySelector(".counter-number");
  let lastInput = +historyArray[historyArray.length - 1].inputNumber;
  let lastOutput = +historyArray[historyArray.length - 1].afterNumber;
  counterNumberEl.textContent = lastInput + lastOutput;
  // update history
  let newHistory = document.createElement("div");
  newHistory.classList.add("history-item");
  newHistory.innerHTML = `<span class="inputNumber">${lastInput}</span> <span>(${
    lastOutput + inputNumber
  } -> ${afterNumber})</span>`;
  historyArray.push(historyObject);
});

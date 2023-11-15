let beforeNumber = 0;
let afterNumber;
let historyArray = [];
let currentHistoryIndex;

let counterNumberEl = document.querySelector(".counter-number");
let btns = document.querySelectorAll(".btn");

const updateCount = (number) => {
  counterNumberEl.textContent = beforeNumber += number;
  afterNumber = counterNumberEl.textContent;
  updateHistory(beforeNumber, number, afterNumber);
};

const updateHistory = (beforeNumber, inputNumber, afterNumber) => {
  let newHistory = document.createElement("div");
  newHistory.classList.add("history-item");
  newHistory.innerHTML = `<span class="inputNumber">${inputNumber}</span> <span>(${
    beforeNumber - inputNumber
  } -> ${afterNumber})</span>`;
  let historyObject = {
    oldNumber: beforeNumber,
    inputNumber: inputNumber,
    afterNumber: beforeNumber - inputNumber,
  };
  historyArray.push(historyObject);

  let historyEl = document.querySelector(".history");
  historyEl.append(newHistory);
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

  // update history
  historyArray.push();
});

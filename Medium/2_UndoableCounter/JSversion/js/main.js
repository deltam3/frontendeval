let beforeNumber = 0;
let afterNumber;
let historyArray = [{ beforeNumber: 0, inputNumber: 0, afterNumber: 0 }];

let counterNumberEl = document.querySelector(".counter-number");
let btns = document.querySelectorAll(".btn");

const updateCount = (number) => {
  counterNumberEl.textContent = historyArray[
    historyArray.length - 1
  ].beforeNumber += number;
  console.log((historyArray[historyArray.length - 1].beforeNumber += number));
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
    afterNumber: beforeNumber + inputNumber,
  };
  historyArray.push(historyObject);

  let historyEl = document.querySelector(".history");
  historyEl.append(newHistory);
};

// UNDO
const undoBtn = document.querySelector(".undoBtn");
undoBtn.addEventListener("click", () => {
  const historyItems = document.querySelectorAll(".history-item");
  historyItems[historyItems.length - 1].remove();
  let counterNumberEl = document.querySelector(".counter-number");
  counterNumberEl.textContent =
    +historyArray[historyArray.length - 1].oldNumber -
    historyArray[historyArray.length - 1].inputNumber;
  historyArray.pop();
});

// REDO
const redoBtn = document.querySelector(".redoBtn");
redoBtn.addEventListener("click", () => {
  let lastOutput = historyArray[historyArray.length - 1].afterNumber;
  let lastInput = historyArray[historyArray.length - 1].inputNumber;

  // console.log(`${lastInput}, ${lastOutput}`);
  // console.log(`lastOutput: ${lastOutput}`);
  // console.log(`lastInput: ${lastInput}`);

  // update counter
  let counterNumberEl = document.querySelector(".counter-number");
  console.log(lastInput + lastOutput);
  counterNumberEl.textContent = lastOutput + lastInput;
  // update history
  historyArray.push({
    oldNumber: lastOutput,
    inputNumber: lastInput,
    afterNumber: +lastInput + +lastOutput,
  });
  let newItem = historyArray[historyArray.length - 1];
  // console.log(newItem);
  updateHistory(newItem.oldNumber, newItem.inputNumber, newItem.afterNumber);
});

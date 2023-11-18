// let beforeNumber = 0;
// let afterNumber = 0;
let historyArray = [{ beforeNumber: 0, inputNumber: 0, afterNumber: 0 }];

let counterNumberEl = document.querySelector(".counter-number");
let btns = document.querySelectorAll(".btn");

const updateCount = (inputNumber) => {
  wasLastActionUndo = false;
  let beforeNumber = historyArray[historyArray.length - 1].afterNumber;
  let afterNumber =
    historyArray[historyArray.length - 1].afterNumber + inputNumber;

  counterNumberEl.textContent = afterNumber;

  updateHistory(beforeNumber, inputNumber, afterNumber);

  let historyObject = {
    beforeNumber: beforeNumber,
    inputNumber: inputNumber,
    afterNumber: afterNumber,
  };
  historyArray.push(historyObject);
};

const updateHistory = (beforeNumber, inputNumber, afterNumber) => {
  let newHistory = document.createElement("div");
  newHistory.classList.add("history-item");
  newHistory.innerHTML = `<span class="inputNumber">${inputNumber}</span> <span>(${beforeNumber} -> ${afterNumber})</span>`;
  let historyEl = document.querySelector(".history");
  historyEl.append(newHistory);
};

// UNDO
let wasLastActionUndo = false;

const undoBtn = document.querySelector(".undoBtn");
undoBtn.addEventListener("click", () => {
  wasLastActionUndo = true;
  // delete the latest history item
  const historyItems = document.querySelectorAll(".history-item");
  historyItems[historyItems.length - 1].remove();
  // reset the counter
  let counterNumberEl = document.querySelector(".counter-number");
  counterNumberEl.textContent =
    +historyArray[historyArray.length - 1].afterNumber -
    historyArray[historyArray.length - 1].inputNumber;
  // remove the last history item
  historyArray.pop();
});

// REDO
const redoBtn = document.querySelector(".redoBtn");
redoBtn.addEventListener("click", () => {
  // if undo btn was the last action
  if (wasLastActionUndo === true) {
    // delete the latest history item
    const historyItems = document.querySelectorAll(".history-item");
    historyItems[historyItems.length - 1].remove();
    // reset the counter
    let counterNumberEl = document.querySelector(".counter-number");
    counterNumberEl.textContent =
      +historyArray[historyArray.length - 1].afterNumber -
      historyArray[historyArray.length - 1].inputNumber;
    // remove the last history item
    historyArray.pop();
    return;
  }

  let lastOutput = historyArray[historyArray.length - 1].afterNumber;
  let lastInput = historyArray[historyArray.length - 1].inputNumber;

  // update counter
  let counterNumberEl = document.querySelector(".counter-number");
  let newOutput = lastOutput + lastInput;
  counterNumberEl.textContent = newOutput;

  updateHistory(lastOutput, lastInput, newOutput);

  // update history
  historyArray.push({
    beforeNumber: lastOutput,
    inputNumber: lastInput,
    afterNumber: +lastInput + +lastOutput,
  });
});

// Input Number of Dice
let inputEl = document.querySelector(".input-number");
inputEl.addEventListener("change", (e) => {
  let dicesEl = document.querySelector(".dices");

  if (e.target.value >= 1 && e.target.value <= 99) {
    dicesEl.innerHTML = "";
    for (let i = 1; i <= e.target.value; i++) {
      let diceEl = document.createElement("span");
      diceEl.classList.add("dice");
      dicesEl.append(diceEl);
    }
  }
});

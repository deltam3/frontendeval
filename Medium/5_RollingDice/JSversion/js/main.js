// Input Number of Dice
let inputEl = document.querySelector(".input-number");
inputEl.addEventListener("change", (e) => {
  let dicesEl = document.querySelector(".dices");

  if (e.target.value >= 1 && e.target.value <= 99) {
    dicesEl.innerHTML = "";
    for (let i = 1; i <= e.target.value; i++) {
      let diceEl = document.createElement("span");
      diceEl.classList.add("dice");
      diceEl.classList.add("before");
      dicesEl.append(diceEl);
    }
  }
});

let rollBtn = document.querySelector(".btn--full");
rollBtn.addEventListener("click", () => {
  let allDicesEl = document.querySelectorAll(".dice");

  setTimeout(() => {
    item.classList.remove("before");
    item.classList.add("rolling");
  }, 1000);

  allDicesEl.forEach((item) => {
    item.classList.remove("rolling");

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let randomNumber = randomIntFromInterval(1, 6);
    switch (randomNumber) {
      case 1:
        item.classList.add("result1");
        return;
      case 2:
        item.classList.add("result2");
        return;
      case 3:
        item.classList.add("result3");
        return;
      case 4:
        item.classList.add("result4");
        return;
      case 5:
        item.classList.add("result5");
        return;
      case 6:
        item.classList.add("result6");
        return;
    }
  });
});

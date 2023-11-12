const sixBySixArray = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];

let revealedCardsCount = 0;
let revealedCardOne;
let revealedCardTwo;
let gameItemNumberLeft = 36;

let gameItems = document.querySelectorAll(".game-item");

gameItems.forEach((gameItem) => {
  gameItem.addEventListener("click", handleClick);
});

console.log(revealedCardOne);

function handleClick(e) {
  if (revealedCardsCount === 1) {
    // clicking for the second time

    // when clicking the first item again
    if (revealedCardOne === e.target) {
      return;
    }

    e.target.classList.toggle("clicked");
    revealedCardTwo = e.target;
    revealedCardsCount++;

    if (revealedCardOne.textContent === revealedCardTwo.textContent) {
      document.body.classList.add("click-off");

      setTimeout(() => {
        revealedCardOne.classList.add("hidden");
        revealedCardTwo.classList.add("hidden");
        revealedCardsCount = 0;
        document.body.classList.remove("click-off");
        gameItemNumberLeft -= 2;
        checkGameItem();
      }, 3000);
    } else if (revealedCardOne.textContent !== revealedCardTwo.textContent) {
      setTimeout(() => {
        revealedCardOne.classList.remove("clicked");
        revealedCardTwo.classList.remove("clicked");
        revealedCardsCount = 0;
        document.body.classList.remove("click-off");
      }, 3000);
    }
  } else if (revealedCardsCount === 0) {
    // clicking for the first time
    e.target.classList.toggle("clicked");
    revealedCardOne = e.target;
    revealedCardsCount++;
  }
}

function checkGameItem() {
  if (gameItemNumberLeft === 0) {
    let gameEl = document.querySelector(".game");
    let modalEl = document.querySelector(".modal");
    modalEl.classList.toggle("active");
  }
}

let playAgainEl = document.querySelector(".playAgain");
playAgainEl.addEventListener("click", () => {
  gameItemNumberLeft = 36;
  let gameItems = document.querySelectorAll(".game-item");
  let modalEl = document.querySelector(".modal");
  gameItems.forEach((gameItem) => {
    gameItem.classList.remove("hidden");
    gameItem.classList.remove("clicked");
    gameItem.classList.add("game-item");
  });
  modalEl.classList.remove("active");
  modalEl.classList.add("displayNone");
  makeNewGameItems(sixBySixArray);
});

const makeNewGameItems = (array) => {
  let newArray = shuffle(array);

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  console.log(newArray);

  for (let i = 0; i < newArray.length; i++) {
    gameItems[i].textContent = newArray[i];
  }
};

let revealedCardsCount = 0;
let revealedCardOne;
let revealedCardTwo;
let gameItemNumberLeft = 36;

let gameItems = document.querySelectorAll(".game-item");

gameItems.forEach((gameItem) => {
  gameItem.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (revealedCardsCount === 1) {
    // clicking for the second time
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
    } else {
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
});

let revealedCardsCount = 0;
let revealedCardOne;
let revealedCardTwo;

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
      }, 3000);
    }
  } else if (revealedCardsCount === 0) {
    // clicking for the first time
    e.target.classList.toggle("clicked");
    revealedCardOne = e.target;
    revealedCardsCount++;
  }
}

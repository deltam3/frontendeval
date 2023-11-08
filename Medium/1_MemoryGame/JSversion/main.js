let revealedCardsCount = 0;
let revealedCardOneNumber;
let revealedCardTwoNumber;

let gameItems = document.querySelectorAll(".game-item");

gameItems.forEach((gameItem) => {
  gameItem.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (revealedCardsCount === 2) {
    if (revealedCardOneNumber === revealedCardTwoNumber) {
      console.log("winner");
    } else {
      setTimeout();
    }
  }
}

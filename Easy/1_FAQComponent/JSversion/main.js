const theArray = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

// #1 - create a new array

const answerEl = document.createElement("p");

const createElements = (array) => {
  const newArray = array.map((item) => {
    const answerElLi = document.createElement("li");

    answerElLi.innerHTML = `
    <div class="faq-item">
      <div class="faq-item-icon">
        <ion-icon name="arrow-forward-outline" class="faq-icon faq-icon-closed"></ion-icon>
        <ion-icon name="arrow-down-outline" class="faq-icon faq-icon-open"></ion-icon>
      </div>
      <div class="faq-content">      
        <h3 class="heading-tertiary">${item.question}</h3>
        <p class="answer">${item.answer}</p>
      </div>
    </div>
  `;

    answerElLi.addEventListener("click", () => {
      answerElLi.classList.toggle("faq-open");
    });

    if (array[0] === item) {
      answerElLi.classList.toggle("faq-open");
    }

    return answerElLi;
  });

  return newArray;
};

// #2 - render or append the new array

let newArray = createElements(theArray);
let faqList = document.querySelector(".faq-list");
newArray.forEach((item) => {
  faqList.append(item);
});

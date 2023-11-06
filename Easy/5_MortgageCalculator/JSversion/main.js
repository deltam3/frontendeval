// console.log(loanAmount);

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", (e) => {
  e.preventDefault();

  let monthlyRate = +interestRate.value / 100 / 12;
  let totalMonths = +loanLength.value * 12;

  let P = +loanAmount.value;
  let r = +interestRate.value;
  let n = +loanLength.value;

  // const firstResult = (monthlyRate * (1 + r)) ** totalMonths;
  // const secondResult = (1 + monthlyRate) ** totalMonths - 1;

  // console.log(secondResult);
  // const result = P * (firstResult / secondResult);

  const result =
    P *
    ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1));
  console.log(result);

  document.querySelector(
    ".result"
  ).textContent = `Your monthly mortgage payment will be $${parseInt(result)}`;
});

// console.log(result);
// function calculator(e) {

//   console.log("log");
// }

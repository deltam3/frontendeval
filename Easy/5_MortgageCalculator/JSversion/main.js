const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", (e) => {
  e.preventDefault();

  let monthlyRate = +interestRate.value / 100 / 12;
  let totalMonths = +loanLength.value * 12;

  let P = +loanAmount.value;
  let r = +interestRate.value;
  let n = +loanLength.value;

  const result =
    P *
    ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1));
  console.log(result);

  document.querySelector(
    ".result"
  ).textContent = `Your monthly mortgage payment will be $${parseInt(result)}`;
});

const numberInputs = document.querySelectorAll(".input-number");
console.log(numberInputs);
numberInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (input.value.length < 1) {
      if (!input.classList.contains("input-number-fourth")) {
        input.nextSibling.nextSibling.focus();
      }
      if (input.classList.contains("input-number-fourth")) {
        return;
      }
    }

    if (
      input.value.length === 1 &&
      !input.classList.contains("input-number-fourth")
    ) {
      input.value = e.target.value;
      input.nextSibling.nextSibling.focus();
    } else if (
      input.value.length >= 1 &&
      input.classList.contains("input-number-fourth")
    ) {
      input.value = e.target.value;
      let submitBtn = document.querySelector(".btn");
      submitBtn.focus();
    }
  });
});

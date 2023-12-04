let formValues = [
  { nameValue: "" },
  { emailValue: "" },
  { birthdayValue: "" },
  { passwordValue: "" },
];

let formNameEl = document.querySelector(".name-form");
let formEmailEl = document.querySelector(".email-form");
let formBirthdayEl = document.querySelector(".birthday-form");
let formPasswordEl = document.querySelector(".password-form");

// name
let inputNameEl = document.querySelector(".input-name");
let btnNameEl = document.querySelector(".btn--name");
btnNameEl.addEventListener("click", (e) => {
  e.preventDefault();
  formValues[0].nameValue = inputNameEl.value;

  // hide
  formNameEl.classList.add("hide");

  // show next
  formEmailEl.classList.toggle("hide");
});

// email
let inputEmailEl = document.querySelector(".input-email");
let btnEmailEl = document.querySelector(".btn--email");
btnEmailEl.addEventListener("click", (e) => {
  e.preventDefault();
  formValues[1].emailValue = inputEmailEl.value;

  // hide
  formEmailEl.classList.add("hide");

  // show next
  formBirthdayEl.classList.toggle("hide");
});

// birthday
let inputBirthdayEl = document.querySelector(".input-birthday");
let btnBirthdayEl = document.querySelector(".btn--birthday");
btnEmailEl.addEventListener("click", (e) => {
  e.preventDefault();
  formValues[2].birthdayValue = inputBirthdayEl.value;

  // hide
  formBirthdayEl.classList.add("hide");

  // show next
  formPasswordEl.classList.toggle("hide");
});

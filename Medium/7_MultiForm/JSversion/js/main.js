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
  formBirthdayEl.classList.remove("hide");
});

// birthday
let inputBirthdayEl = document.querySelector(".input-birthday");
let btnBirthdayEl = document.querySelector(".btn--birthday");
btnBirthdayEl.addEventListener("click", (e) => {
  e.preventDefault();
  formValues[2].birthdayValue = inputBirthdayEl.value;

  // hide
  formBirthdayEl.classList.add("hide");

  // show next
  formPasswordEl.classList.remove("hide");
});

let inputPasswordEl = document.querySelector(".input-password");
let btnPasswordEl = document.querySelector(".btn--password");
let sectionSuccessEl = document.querySelector(".section-success");
btnPasswordEl.addEventListener("click", (e) => {
  e.preventDefault();
  formValues[3].passwordValue = inputPasswordEl.value;

  // hide
  formPasswordEl.classList.add("hide");

  // show next
  sectionSuccessEl.classList.remove("hide");
});

// back button functionality
const emailBackBtn = document.querySelector(".btn--email-back");
const birthdayBackBtn = document.querySelector(".btn--birthday-back");
const passwordBackBtn = document.querySelector(".btn--password-back");

emailBackBtn.addEventListener("click", () => {
  formEmailEl.classList.add("hide");
  formNameEl.classList.remove("hide");
});

birthdayBackBtn.addEventListener("click", () => {
  formBirthdayEl.classList.add("hide");
  formEmailEl.classList.remove("hide");
});

passwordBackBtn.addEventListener("click", () => {
  formPasswordEl.classList.add("hide");
  formBirthdayEl.classList.remove("hide");
});

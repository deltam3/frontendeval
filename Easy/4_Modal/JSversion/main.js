let buttonEl = document.querySelector("#offer");

let modalEl = document.createElement("div");
modalEl.className = "modal";

modalEl.innerHTML =
  "<div class='modal-container'><button class='close-button'>X</button><p>Click the button below to accept our amazing offer!</p><button class='accept-button'>Accept Offer</button></div>";

buttonEl.addEventListener("click", () => {
  document.body.append(modalEl);
  document.body.classList.toggle("body-modal-open");

  let closeBtnEl = document.querySelector(".close-button");
  closeBtnEl.addEventListener("click", () => {
    document.body.classList.toggle("body-modal-open");
    modalEl.remove();
  });

  let acceptBtnEl = document.querySelector(".accept-button");
  acceptBtnEl.addEventListener("click", () => {
    console.log("log");
    document.body.classList.toggle("body-modal-open");

    let acceptedEl = document.createElement("h1");
    acceptedEl.textContent = "Offer accepted";
    let theContainer = document.querySelector(".container");
    theContainer.append(acceptedEl);

    modalEl.remove();
    buttonEl.remove();
  });
});

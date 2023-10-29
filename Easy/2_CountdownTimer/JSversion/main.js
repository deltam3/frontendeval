// 1. Code for what happens after pressing the start button

let btnStartEl = document.querySelector(".btn--start");
const hiddenBtnContainerEl = document.querySelector(".hidden-btn-container");

let outputs = document.querySelectorAll(".output");

let hourInput = document.querySelector(".hour-input");
let minuteInput = document.querySelector(".minute-input");
let secondInput = document.querySelector(".second-input");

let hourInputValue = document.querySelector(".hour-input").value;
let minuteInputValue = document.querySelector(".minute-input").value;
let secondInputValue = document.querySelector(".second-input").value;

const startHandler = (e) => {
  hiddenBtnContainerEl.classList.toggle("active");
  btnStartEl.classList.toggle("hide");

  hourInput.classList.toggle("hide");
  minuteInput.classList.toggle("hide");
  secondInput.classList.toggle("hide");

  let x = setInterval(() => {
    // Get today's date and time
    var now = new Date().getTime();
    var countDownDate = new Date("Oct 30, 2023 01:00:00").getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML =
    //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    document.querySelector(".hour-output").textContent = hours;
    document.querySelector(".minute-output").textContent = minutes;
    document.querySelector(".second-output").textContent = seconds;

    // If the count down is finished,
    if (distance < 0) {
      // clearInterval(x);
    }
  }, 1000);

  outputs.forEach((output) => {
    output.classList.toggle("active");
  });
};
btnStartEl.addEventListener("click", startHandler);

// 2. Code for how to countdown timer

// 3. Code for the Pause Button

// 4. Code for the Reset

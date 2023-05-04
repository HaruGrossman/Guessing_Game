const typeGuessHere = document.querySelector("input");
const go = document.getElementById("button1");
const resetTheGame = document.getElementById("button2");
const needAHint = document.getElementById("button3");
const title = document.createElement("header");
const subTitle = document.getElementById("line1");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

const gamecard = document.createElement("section");
const header = document.createElement("header");
const body = document.createElement("body");
const footer = document.createElement("footer");
p1.textContent = "Number";
p2.textContent = "Number";
p3.textContent = "Number";
p4.textContent = "Number";
p5.textContent = "Number";

gamecard.append(header, body, footer);

//generate random number
let generateRandomNumber = Math.floor(Math.random() * 100 + 1);

//save user number
let newArray = [];
let tiresNumber = 0;

function saveNumber() {
  if (newArray.includes(Number(typeGuessHere.value))) {
    title.textContent = "You've already guessed that!";
  } else {
    newArray.push(Number(typeGuessHere.value));
    tiresNumber++;
    if (tiresNumber === 1) {
      p1.textContent = Number(typeGuessHere.value);
    } else if (tiresNumber === 2) {
      p2.textContent = Number(typeGuessHere.value);
    } else if (tiresNumber === 3) {
      p3.textContent = Number(typeGuessHere.value);
    } else if (tiresNumber === 4) {
      p4.textContent = Number(typeGuessHere.value);
    } else if (tiresNumber === 5) {
      p5.textContent = Number(typeGuessHere.value);
    }

    // if (Number(typeGuessHere) < generateRandomNumber) {
    //   title.textContent = "Your number is too low";
    // } else if (tiresNumber === 5) {
    //   title.textContent = "You lose!";
    // } else if (Number(typeGuessHere) > generateRandomNumber) {
    //   title.textContent = "Your number is too high";
    // } else if (Number(typeGuessHere) === generateRandomNumber) {
    //   title.textContent = "You're Awesome! Winner Winner Chicken Dinner!";
    // }
  }
}

go.addEventListener("click", saveNumber);

console.log(generateRandomNumber);

//compare user number and random generated number
// change h1 and h2 accordinly (if statment)
// "=" = correct;
//reset game

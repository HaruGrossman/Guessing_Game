let typeGuessHere =  document.querySelector("imput");
let go = document.getElementById ("button1");
let resetTheGame = Document.getElementById("button2");
let needAHint = document.getElementById("button3");
let title = document.getElementById("header");
let subTitle = document.getElementById("line1");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");


//generate random number
let generateRandomNumber = Math.floor(Math.random()* 100 +1);

//save user number
let newArray = []
let tiresNumber = 0;

function saveNumber() {
    if (newArray.includes(Number(typeGuessHere.value))){
        title.textContent = "You've already guessed that!"
    } else {
    newArray.push ((Number(typeGuessHere.value)));
    tiresNumber++;
    if (tiresNumber === 1){
    p1.textContent = (Number(typeGuessHere.value));
    } else if (tiresNumber === 2){
        p2.textContent = (Number(typeGuessHere.value))
    } else if (tiresNumber === 3){
        p3.textContent = (Number(typeGuessHere.value))
    }else if (tiresNumber === 4){
        p4.textContent = (Number(typeGuessHere.value))
    }else if (tiresNumber === 5){
        p5.textContent = (Number(typeGuessHere.value))
        }
    if ((Number(typeGuessHere.value))< generateRandomNumber){
        title.textContent = "Your number is too low"
    } else if (tiresNumber === (5)) {
        title.textContent = "You lose!"
    } else if ((Number(typeGuessHere.value))> generateRandomNumber){
        title.textContent = "Your number is too high"
    } else if ((Number(typeGuessHere.value)) === generateRandomNumber){
        title.textContent = "You're Awesome! Winner Winner Chicken Dinner!"
    } 
    }
}

go.addEventListener("click", saveNumber);

//compare user number and random generated number
    // change h1 and h2 accordinly (if statment)
// "=" = correct;
//reset game

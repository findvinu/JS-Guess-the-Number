let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const pera = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a greater 1 number");
  } else if (guess > 100) {
    alert("Please enter a less then 1 number");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNum) {
    displayMessage(`You have win guessted right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is Tooo Low`);
  } else if (guess < randomNum) {
    displayMessage(`Number is Tooo High`);
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}-`;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (msg) => {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  pera.classList.add("button");
  pera.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(pera);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(pera);

    playGame = true;
  });
};

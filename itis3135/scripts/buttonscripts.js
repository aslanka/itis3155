// Generate a random number between 1 and 100
const numberToGuess = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function startGame() {
  // Show the game div and reset the guess count
  document.getElementById("game").style.display = "block";
  guesses = 0;
}

function checkGuess() {
  // Get the guess input value and convert to a number
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  // Increment the guess count
  guesses++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    // Invalid guess, show an error message
    document.getElementById("message").innerHTML =
      "Please enter a number between 1 and 100.";
  } else if (guess === numberToGuess) {
    // Correct guess, show a success message and the number of guesses
    document.getElementById("message").innerHTML =
      "Congratulations, you guessed the number in " + guesses + " guesses!";
    guessInput.disabled = true;
  } else if (guess < numberToGuess) {
    // Incorrect guess, show a hint to guess higher
    document.getElementById("message").innerHTML = "Try guessing higher.";
  } else {
    // Incorrect guess, show a hint to guess lower
    document.getElementById("message").innerHTML = "Try guessing lower.";
  }

  // Clear the guess input value
  guessInput.value = "";
}

document
  .getElementById("sale-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const price = document.getElementById("price-input").value;
    const percentOff = document.getElementById("percent-off-input").value;

    const salePrice = price * (1 - percentOff / 100);

    document.getElementById(
      "sale-price"
    ).textContent = `Sale Price: $${salePrice.toFixed(2)}`;
  });

const addItemBtn = document.getElementById("add-item-btn");
const showListBtn = document.getElementById("show-list-btn");
const itemList = document.getElementById("shopping-list");
const itemInput = document.getElementById("item-input");

addItemBtn.addEventListener("click", addItemToList);
showListBtn.addEventListener("click", showItemList);

let shoppingList = [];

function addItemToList() {
  const item = itemInput.value.trim();
  if (item !== "") {
    shoppingList.push(item);
    itemInput.value = "";
    itemInput.focus();
  }
}

function showItemList() {
  itemList.className = "shopping-list";
  itemList.innerHTML = "Current Shopping List:";
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}

const totalAmountInput = document.getElementById("total-amount");
const amountTenderedInput = document.getElementById("amount-tendered");
const calculateChangeBtn = document.getElementById("calculate-change-btn");
const changeDisplay = document.getElementById("change-display");

calculateChangeBtn.addEventListener("click", calculateChange);

function calculateChange() {
  const totalAmount = parseFloat(totalAmountInput.value);
  const amountTendered = parseFloat(amountTenderedInput.value);
  const change = amountTendered - totalAmount;

  if (isNaN(totalAmount) || isNaN(amountTendered) || change < 0) {
    changeDisplay.textContent = "Invalid input";
  } else {
    changeDisplay.textContent = `Change: $${change.toFixed(2)}`;
  }
}

const prizes = [
  "Free coffee",
  "10% discount",
  "T-shirt",
  "Movie ticket",
  "Gift card",
];

const generateButton = document.getElementById("generate-button");
const resultDiv = document.getElementById("result");

generateButton.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * prizes.length);
  const randomPrize = prizes[randomNumber];
  resultDiv.textContent = "You won: " + randomPrize;
});

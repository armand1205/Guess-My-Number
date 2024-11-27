"use strict";

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// SecretNumber declaration
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Stabilim scorul initial
let score = 20;

// Declaram Highscore
let highscore = 0;

// Event handler pt butonul de CHECK
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Afisare mesaj in functie de numar: daca este corect, mai mare sau mai mic
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";

    // Schimbare culoare BACKGROUND cand numarul este CORECT
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";

      // Scade din scor daca numarul nu e corect
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      // Schimbare culoare BACKGROUND cand numarul este GRESIT
      document.querySelector("body").style.backgroundColor = "#c21807";
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";

      // Scade din scor daca numarul nu e corect
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;

      // Schimbare culoare BACKGROUND cand numarul este GRESIT
      document.querySelector("body").style.backgroundColor = "#c21807";
    }
  }
});

// Event handler pt butonul de AGAIN!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

const btnPlayer1 = document.querySelector(".player1-btn");
const btnPlayer2 = document.querySelector(".player2-btn");
const scorePlayer1 = document.querySelector(".player1-score");
const scorePlayer2 = document.querySelector(".player2-score");
const resetBtn = document.querySelector(".reset-btn");
const gamePointsSelect = document.querySelector("#playTo");

let score1 = 0;
let score2 = 0;
let gamePoints = 9;
let gameOver = false;

btnPlayer1.addEventListener("click", function () {
  if (!gameOver) {
    score1++;
    if (score1 === gamePoints) {
      gameOver = true;
      scorePlayer1.classList.add("winner");
      scorePlayer2.classList.add("loser");
    }
    scorePlayer1.textContent = score1;
  }
});

btnPlayer2.addEventListener("click", function () {
  if (!gameOver) {
    score2++;
    if (score2 === gamePoints) {
      gameOver = true;
      scorePlayer2.classList.add("winner");
      scorePlayer1.classList.add("loser");
    }
    scorePlayer2.textContent = score2;
  }
});

gamePointsSelect.addEventListener("change", function () {
  init();
  gamePoints = parseInt(this.value);
});

resetBtn.addEventListener("click", init);

function init() {
  gameOver = false;
  score1 = 0;
  score2 = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  scorePlayer1.classList.remove("winner", "loser");
  scorePlayer2.classList.remove("winner", "loser");
}

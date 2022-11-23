const player1 = {
  score: 0,
  button: document.querySelector(".player1-btn"),
  displayScore: document.querySelector(".player1-score"),
};

const player2 = {
  score: 0,
  button: document.querySelector(".player2-btn"),
  displayScore: document.querySelector(".player2-score"),
};

const players = [player1, player2];

const resetBtn = document.querySelector(".reset-btn");
const gamePointsSelect = document.querySelector("#playTo");

let gamePoints = 9;
let gameOver = false;

function scoreUpdate(player, rival) {
  if (!gameOver) {
    player.score++;
    if (player.score === gamePoints) {
      gameOver = true;
      player.displayScore.classList.add("has-text-success");
      rival.displayScore.classList.add("has-text-danger");
      player.button.disabled = true;
      rival.button.disabled = true;
    }
    player.displayScore.textContent = player.score;
  }
}

player1.button.addEventListener("click", function () {
  scoreUpdate(player1, player2);
});

player2.button.addEventListener("click", function () {
  scoreUpdate(player2, player1);
});

gamePointsSelect.addEventListener("change", function () {
  init();
  gamePoints = parseInt(this.value);
});

resetBtn.addEventListener("click", init);

function init() {
  gameOver = false;
  for (const p of players) {
    p.score = 0;
    p.displayScore.textContent = 0;
    p.displayScore.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

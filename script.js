const player1 = {
  gameScore: 0,
  score: 0,
  button: document.querySelector(".player1-btn"),
  displayGameScore: document.querySelector(".player1-game-score"),
  displayScore: document.querySelector(".player1-score"),
};

const player2 = {
  gameScore: 0,
  score: 0,
  button: document.querySelector(".player2-btn"),
  displayGameScore: document.querySelector(".player2-game-score"),
  displayScore: document.querySelector(".player2-score"),
};

const players = [player1, player2];

const displaySet = document.querySelector(".game");
const newSetBtn = document.querySelector(".set-btn");
const resetBtn = document.querySelector(".reset-btn");
const setPointsSelect = document.querySelector("#playto");
const numSetsSelect = document.querySelector("#num-sets");

let gameSet = 1;
let numSets = 3;
let setPoints = 9;
let setOver = false;
let gameOver = false;

function scoreUpdate(player, rival) {
  if (!setOver && !gameOver) {
    player.score++;
    if (gameSet === 1 && (player.score === 1 || rival.score === 1)) {
      setPointsSelect.disabled = true;
      numSetsSelect.disabled = true;
    }
    if (player.score === setPoints) {
      setOver = true;
      player.displayScore.classList.add("has-text-success");
      rival.displayScore.classList.add("has-text-danger");
      player.button.disabled = true;
      rival.button.disabled = true;
      player.gameScore++;
      player.displayGameScore.textContent = player.gameScore;
    }
    if (gameSet === numSets && setPoints === player.score) {
      gameOver = true;
    }
    player.displayScore.textContent = player.score;
  }
  if (gameOver) {
    newSetBtn.disabled = true;
  }
}

player1.button.addEventListener("click", function () {
  scoreUpdate(player1, player2);
});

player2.button.addEventListener("click", function () {
  scoreUpdate(player2, player1);
});

setPointsSelect.addEventListener("change", function () {
  init();
  setPoints = parseInt(this.value);
});

numSetsSelect.addEventListener("change", function () {
  init();
  numSets = parseInt(this.value);
});

newSetBtn.addEventListener("click", function () {
  if (setOver && gameSet < numSets) {
    init();
    gameSet++;
    displaySet.textContent = gameSet;
  }
});

resetBtn.addEventListener("click", function () {
  init();
  gameSet = 1;
  gameOver = false;
  newSetBtn.disabled = false;
  displaySet.textContent = 1;
  setPointsSelect.disabled = false;
  numSetsSelect.disabled = false;
  players.forEach((p) => {
    p.displayGameScore.textContent = 0;
    p.gameScore = 0;
  });
});

function init() {
  setOver = false;
  for (const p of players) {
    p.score = 0;
    p.displayScore.textContent = 0;
    p.displayScore.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

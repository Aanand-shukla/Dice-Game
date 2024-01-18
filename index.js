let dice = document.querySelector(".dice");
let chances = document.querySelector(".dices");
let Player1Score = document.querySelector(".Player1Score");
let hold = document.querySelector(".hold");
const Roll_dice = document.querySelector(".dice");
let player1CurrentScore = document.querySelector(
  ".player1CurrentScore > p:nth-child(2) "
);

const reset = document.querySelector(".reset");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
let activePlayer = 0;
let TotalScore = [0, 0];
let PlayerScore = 0;
let playGame = true;
Roll_dice.addEventListener("click", () => {
  if (playGame) {
    let random = Math.trunc(Math.random() * 6) + 1;
    chances.classList.remove("hidden");
    chances.innerHTML = ` <img src="./images/dice-${random}.png" alt="" />`;
    if (random !== 1) {
      PlayerScore += random;
      document.getElementById(`current_${activePlayer}`).innerText =
        PlayerScore;
    } else {
      TotalScore[activePlayer] += PlayerScore;
      document.getElementById(`final_${activePlayer}`).innerText =
        TotalScore[activePlayer];

      if (TotalScore[activePlayer] >= 200) {
        playGame = false;
        document
          .getElementById(`player_${activePlayer}`)
          .classList.add("winner");
      }
      document.getElementById(`current_${activePlayer}`).innerText = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      PlayerScore = 0;
    }
  }
});

hold.addEventListener("click", () => {
  if (playGame) {
    TotalScore[activePlayer] += PlayerScore;
    document.getElementById(`current_${activePlayer}`).innerText = 0;
    document.getElementById(`final_${activePlayer}`).innerText =
      TotalScore[activePlayer];
    activePlayer = activePlayer === 0 ? 1 : 0;
    PlayerScore = 0;
  }
});

reset.addEventListener("click", () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`player_${activePlayer}`).classList.remove("winner");
  document.getElementById(`current_1`).innerText = 0;
  document.getElementById(`final_1`).innerText = 0;
  document.getElementById(`current_0`).innerText = 0;
  document.getElementById(`final_0`).innerText = 0;
  PlayerScore = 0;
  TotalScore = [0, 0];
  playGame = true;
});

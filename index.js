const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = Math.floor(Math.random() * 10) + 1;
let isGameOver = false;

// Player 1
p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
  }
  if (p1Score === winningScore) {
    isGameOver = true;

    p1Display.classList.add("winner");
    p2Display.classList.add("loser");
    alert("Player 1 wins");
  }
  p1Display.innerText = p1Score;
});

// Player 2
p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;

      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      alert("Player 2  wins");
    }
    p2Display.innerText = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.innerText = 0;
  p2Display.innerText = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("loser", "winner");
}

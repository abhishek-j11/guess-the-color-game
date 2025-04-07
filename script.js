const colourValue = document.getElementById("colourValue");
const answer = document.getElementById("answer");
const resetButton = document.getElementById("resetButton");
const colourButtons = document.querySelectorAll(".colourButton");

let correctColor;

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function setGame() {
  answer.textContent = "";
  correctColor = generateRandomColor();
  colourValue.textContent = correctColor;

  const correctIndex = Math.floor(Math.random() * colourButtons.length);

  colourButtons.forEach((button, index) => {
    const color = index === correctIndex ? correctColor : generateRandomColor();
    button.style.backgroundColor = color;

    button.onclick = () => {
      if (button.style.backgroundColor === correctColor) {
        answer.textContent = "Correct!";
      } else {
        answer.textContent = "Wrong answer! Guess again!";
      }
    };
  });
}

resetButton.addEventListener("click", setGame);
window.onload = setGame;

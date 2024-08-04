const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const gridSizeButton = document.querySelector(".grid-size");
const randomColorButton = document.querySelector(".random-color");
const opacityButton = document.querySelector(".opacity");
let gridSize = 16;
let isColorRandom = false;
let isOpacityFeatureOn = false;
let opacity = 1;

function createGrid(n) {
  const divSize = calcDivSize(containerWidth, n) + "px";

  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    div.style.width = divSize;
    div.style.height = divSize;
    container.appendChild(div);
  }
}

function calcDivSize(width, number) {
  const size = width / number;

  return size;
}

container.addEventListener("mouseover", function (e) {
  const square = e.target;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  if (isColorRandom) {
    square.style.backgroundColor = "#" + randomColor;
  } else {
    square.style.backgroundColor = "black";
  }

  if (isOpacityFeatureOn) {
    container.style.opacity = opacity - 0.1;
    opacity -= 0.1;
  }
});

gridSizeButton.addEventListener("click", function () {
  const size = prompt();
  container.textContent = "";
  size > 100 ? (gridSize = 100) : (gridSize = size);
  createGrid(gridSize);
});

randomColorButton.addEventListener("click", function () {
  isColorRandom = true;
});

opacityButton.addEventListener("click", function () {
  isOpacityFeatureOn = true;
});

createGrid(gridSize);

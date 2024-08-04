const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const gridSizeRange = document.querySelector("#grid-size");
const gridSizeSpan = document.querySelector(".grid-size");
const blackButton = document.querySelector(".black");
const blackCheck = document.querySelector(".black-check");
const rainbowButton = document.querySelector(".rainbow");
const rainbowCheck = document.querySelector(".rainbow-check");
const opacityButton = document.querySelector(".opacity");
const opacityCheck = document.querySelector(".opacity-check");
const color = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const eraserCheck = document.querySelector(".eraser-check");
const reset = document.querySelector(".reset");

let gridSize = gridSizeRange.value;
let isBlackModeOn = true;
let isColorRandom = false;
let isEraser = false;
let isOpacityFeatureOn = false;
let opacity = 1;
let chosenColor = null;

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

  if (isBlackModeOn) {
    square.style.backgroundColor = "black";
  }

  if (isColorRandom) {
    square.style.backgroundColor = "#" + randomColor;
  }

  if (chosenColor) {
    square.style.backgroundColor = chosenColor;
  }

  if (isEraser) {
    square.style.backgroundColor = "white";
  }

  if (isOpacityFeatureOn) {
    container.style.opacity = opacity - 0.1;
    opacity -= 0.1;
  }
});

gridSizeRange.addEventListener("input", function (e) {
  const size = e.target.value;

  gridSizeSpan.textContent = `${size}X${size}`;
  container.textContent = "";
  createGrid(size);
});

blackButton.addEventListener("click", function () {
  isBlackModeOn = true;
  isColorRandom = false;
  isEraser = false;
  blackCheck.textContent = "on";
  rainbowCheck.textContent = "off";
  eraserCheck.textContent = "off";
  chosenColor = null;
});

rainbowButton.addEventListener("click", function () {
  isColorRandom = true;
  isBlackModeOn = false;
  isEraser = false;
  rainbowCheck.textContent = "on";
  blackCheck.textContent = "off";
  eraserCheck.textContent = "off";
  chosenColor = null;
});

opacityButton.addEventListener("click", function () {
  isOpacityFeatureOn
    ? (isOpacityFeatureOn = false)
    : (isOpacityFeatureOn = true);
  isOpacityFeatureOn
    ? (opacityCheck.textContent = "on")
    : (opacityCheck.textContent = "off");
});

color.addEventListener("input", function (e) {
  const value = e.target.value;
  chosenColor = value;

  isColorRandom = false;
  isBlackModeOn = false;
  isEraser = false;
  rainbowCheck.textContent = "off";
  blackCheck.textContent = "off";
  eraserCheck.textContent = "off";
});

eraser.addEventListener("click", function () {
  isEraser = true;
  isColorRandom = false;
  isBlackModeOn = false;
  eraserCheck.textContent = "on";
  rainbowCheck.textContent = "off";
  blackCheck.textContent = "off";
  chosenColor = null;
});

reset.addEventListener("click", function () {
  container.textContent = "";
  isEraser = false;
  isColorRandom = false;
  isBlackModeOn = true;
  eraserCheck.textContent = "off";
  rainbowCheck.textContent = "off";
  blackCheck.textContent = "on";
  chosenColor = null;
  container.style.opacity = 1;
  opacity = 1;
  color.value = "black";
  createGrid(gridSizeRange.value);
});

createGrid(gridSize);

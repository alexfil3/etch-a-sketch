const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const gridSizeButton = document.querySelector(".grid-size");
let gridSize = 16;

function createGrid(n) {
  const size = calcDivSize(containerWidth, n) + "px";

  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    div.style.width = size;
    div.style.height = size;
    container.appendChild(div);
  }
}

function calcDivSize(width, number) {
  const size = width / number;

  return size;
}

container.addEventListener("mousemove", function (e) {
  const square = e.target;
  square.style.backgroundColor = "black";
});

gridSizeButton.addEventListener("click", function () {
  const size = prompt();
  container.textContent = "";
  size > 100 ? (gridSize = 100) : (gridSize = size);
  createGrid(gridSize);
});

createGrid(gridSize);

const userChoice = 16;

const gridContainer = document.querySelector("#grid-container")
const gridItemSize = 100 / userChoice

for (let i = 0; i < userChoice * userChoice; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("item");
      gridItem.style.cssText += `width: ${gridItemSize}%;height: ${gridItemSize}`
      gridContainer.appendChild(gridItem)
}
let userChoice = 16;
let iteration = 0;

const gridContainer = document.querySelector("#grid-container");
let gridItemSize = 100 / userChoice;
const btn = document.querySelector("#btn")

createGrid();


btn.addEventListener("click", () =>{
    iteration = 0;
    userChoice = parseInt(prompt('Enter the size of the new grid (max: 100): '))
    if (!isNaN(userChoice) && userChoice > 0 && userChoice <= 100) {
        gridContainer.innerHTML = '';
        createGrid(); 
    } else {
        alert('Enter a number between 1-100: ')

    }
      
});

















function createGrid() {
    gridItemSize = 100 / userChoice;
    for (let i = 0; i < userChoice * userChoice; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("item");
        gridItem.style.cssText += `width: ${gridItemSize}%;height: ${gridItemSize}%`
        gridContainer.appendChild(gridItem)
    };
    const items = document.querySelectorAll(".item");


    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            randomColor(item);
        });
    });
}

function randomColor(gridItem) { 
    iteration++

    let darkeningFactor = 1 - (iteration / 10);

    let red = Math.floor(255 * darkeningFactor)
    let green = Math.floor(255 * darkeningFactor)
    let blue = Math.floor(255 * darkeningFactor)
    //let red = Math.floor(Math.random() * 256)
    //let green = Math.floor(Math.random() * 256)
    //let blue = Math.floor(Math.random() * 256)
    let newColor = `rgb(${red},${green},${blue})`
    gridItem.style.backgroundColor = newColor
}
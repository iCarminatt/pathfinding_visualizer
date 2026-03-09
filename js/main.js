function createGrid() {
    layoutGrid()
    fillGrid(3, 8, 1, 15, "tomato");
}

function layoutGrid(minWidth = "200px") {
    const rect = document.getElementById('rectangle');
    rect.style.display = 'grid';
    rect.style.gridTemplateColumns = `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    rect.style.gridTemplateRows = `repeat(auto-fill, minmax(200px, 1fr)`;
}
function fillGrid(rows, cols, blockSize, numOfBlocks, color) {
    const container = document.getElementById('rectangle');

    for (let i = 0; i < numOfBlocks; i++) {
        const newCard = document.createElement('div');

        newCard.classList.add('card');

        const randomCol = Math.floor(Math.random() * cols) + 1;
        const randomRow = Math.floor(Math.random() * rows) + 1;

        newCard.style.gridColumn = `${randomCol} / span ${blockSize}`;
        newCard.style.gridRow = `${randomRow} / span ${blockSize}`;
        if (color) newCard.style.backgroundColor = color;

        container.appendChild(newCard);
    }
}

createGrid();
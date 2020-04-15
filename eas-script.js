function createDivGrid(x = 16, y = 16) {
    const containerDiv = document.querySelector('#container');
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < y; j++) {
            const newDiv = document.createElement('div');
            const divWidth = (960/x - 2) + 'px';
            const divHeight = (960/x - 1) + 'px';
            newDiv.style.minHeight = divHeight;
            newDiv.style.minWidth = divWidth;
            newDiv.classList.add('hoverDiv');
            row.appendChild(newDiv);
        }
        containerDiv.appendChild(row);
    }
}

function blackGrid() {
    if (this.classList.contains('hovered9')) {
        return;
    } else if (this.classList.contains('hovered8')) {
        this.classList.remove('hovered8');
        this.classList.add('hovered9');
    } else if (this.classList.contains('hovered7')) {
        this.classList.remove('hovered7');
        this.classList.add('hovered8');
    } else if (this.classList.contains('hovered6')) {
        this.classList.remove('hovered6');
        this.classList.add('hovered7');
    } else if (this.classList.contains('hovered5')) {
        this.classList.remove('hovered5');
        this.classList.add('hovered6');
    } else if (this.classList.contains('hovered4')) {
        this.classList.remove('hovered4');
        this.classList.add('hovered5');
    } else if (this.classList.contains('hovered3')) {
        this.classList.remove('hovered3');
        this.classList.add('hovered4');
    } else if (this.classList.contains('hovered2')) {
        this.classList.remove('hovered2');
        this.classList.add('hovered3');
    } else if (this.classList.contains('hovered1')) {
        this.classList.remove('hovered1');
        this.classList.add('hovered2');
    } else if (this.classList.contains('hovered')) {
        this.classList.remove('hovered');
        this.classList.add('hovered1');
    } else {this.classList.add('hovered');}
}

function colorGrid() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
  }

function clearGrid() {
    const dimension = Number(prompt('Enter grid side dimension: ', '16'));
    const grid = document.querySelectorAll('.row');
    grid.forEach(gridRow => gridRow.remove());

    createDivGrid(dimension, dimension);
    listen();
}

function listen() {
    const divs = document.querySelectorAll('.hoverDiv');
    const bnwBtn = document.querySelector('.bnw');
    const colorBtn = document.querySelector('.goColor');

    if (bnwBtn.classList.contains('selected')) {
        divs.forEach(div => div.addEventListener('mouseenter', blackGrid));
    } else if (colorBtn.classList.contains('selected')) {
        divs.forEach(div => div.addEventListener('mouseenter', colorGrid));
    }
}

createDivGrid();
listen();

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearGrid);

const colorBtn = document.querySelector('.goColor');
const bnwBtn = document.querySelector('.bnw');

colorBtn.addEventListener("click", () => {
    colorBtn.classList.add('selected');
    bnwBtn.classList.remove('selected');
    clearGrid();
});
bnwBtn.addEventListener("click", () => {
    bnwBtn.classList.add('selected');
    colorBtn.classList.remove('selected');
    clearGrid();
});
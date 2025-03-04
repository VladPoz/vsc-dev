const gridContainer = document.getElementById('grid-container');

function generateGrid(rows, columns) {
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.border = '1px solid white';
            cell.style.fontFamily = 'Roboto';
            cell.style.padding = 'auto';
            cell.style.margin = '5px';
            cell.textContent = `${col + 1}`;
            gridContainer.appendChild(cell);
        }
    }
}


generateGrid(8, 13);
take_seat()

function take_seat() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (e.target.classList.contains('selected')) {
                e.target.classList.remove('selected');
                cell.style.border = '1px solid white';
            } else {
                e.target.classList.add('selected');
                cell.style.border = '1px solid yellow';
            }
        });
    });
}

const password = document.querySelector('#login__menu__password');
const password__checkbox = document.querySelector('.login__menu__hide__checkbox');

password__checkbox.addEventListener('change', ()=>{
    if(password__checkbox.checked){
        password.type = 'text';
        console.log("a");
    }
    else{
        password.type = 'password';
        console.log('J')
    }
})
const grid = document.querySelector('.grid');

function createGrid() {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
    }
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for(let i = 0; i < val*val; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = "black";
        })
        grid.appendChild(div);
    }
})

createGrid();
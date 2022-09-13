var i = 0;
var txt = 'Etch-A-Sketch';
var speed = 75;
let titletext = document.querySelector('.titletext');
let display = document.querySelector('.display');
let mode = '';
let gridWidth = 50;

function typeWriter() {
  if (i < txt.length) {
    titletext.textContent += txt[i];
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
    typeWriter();
}

drawGrid();

let penbutton = document.querySelector('#penbutt');
let clearbutton = document.querySelector('#clearbutt');
let eraserbutton = document.querySelector('#eraserbutt');

penbutton.addEventListener('click', () => {
    mode = 'pen';
    console.log(mode);
})

clearbutton.addEventListener('click', () => {
    mode = 'clear';
    clearGrid();
    console.log(mode);
})

eraserbutton.addEventListener('click', () => {
    mode = 'eraser';
    console.log(mode);
})

let drawing = false;

display.addEventListener('mousedown', (e)=>{
    dr
})

display.addEventListener('mouseup', ()=>{
    drawing = false;
})

let slider = document.querySelector('.gridselector');
slider.addEventListener('change', () => {
    let tempWidth = document.querySelector('.gridsize1');
    clearGrid();
    gridWidth = tempWidth.value;
    drawGrid();

})


function drawGrid(){
    for(let i = 0; i < gridWidth; i++){
        let row = document.createElement('div');
        row.className = 'row';
        display.appendChild(row);
        for(let j = 0; j < gridWidth; j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
}

function clearGrid(){
    display.innerHTML = '';
}

function draw(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', ()=>{
            cell.style.backgroundColor = 'black';
        })
    })
}


var i = 0;
var txt = 'Etch-A-Sketch';
var speed = 75;
let titletext = document.querySelector('.titletext');
let display = document.querySelector('.display');
let mode = '';
let gridWidth = 50;
let drawing = false;
let colorvalue = '#000000';

function textAnimation() {
  if (i < txt.length) {
    titletext.textContent += txt[i];
    i++;
    setTimeout(textAnimation, speed);
  }
}

window.onload = function() {
    textAnimation();
}

display.addEventListener('mousedown', ()=>{
    if(mode != 'pen'){ return; }
    drawing = true;
})  

drawGrid();

let penbutton = document.querySelector('#penbutt');
let clearbutton = document.querySelector('#clearbutt');
let eraserbutton = document.querySelector('#eraserbutt');
let colorselector = document.querySelector('.colorselector');

colorselector.addEventListener('change', ()=>{
    colorvalue = colorselector.value;
})

penbutton.addEventListener('click', () => {
    penbutton.style.backgroundColor = 'green';
    clearbutton.style.backgroundColor = 'white';
    eraserbutton.style.backgroundColor = 'white';
    mode = 'pen';
    colorvalue = colorselector.value;
})

clearbutton.addEventListener('click', () => {
    clearbutton.style.backgroundColor = 'green';
    penbutton.style.backgroundColor = 'white';
    eraserbutton.style.backgroundColor = 'white';
    clearGrid();
    drawGrid();
    mode = 'clear';
})

eraserbutton.addEventListener('click', () => {
    eraserbutton.style.backgroundColor = 'green';
    penbutton.style.backgroundColor = 'white';
    clearbutton.style.backgroundColor = 'white';
    colorvalue = '#FFFFFF';
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
            cell.addEventListener('mouseover', changeColor);
            cell.addEventListener('mouseup', ()=>{
                drawing = false;
            })
            row.appendChild(cell);
        }
    }
}

function clearGrid(){
    display.innerHTML = '';
}

function changeColor(e){
    if(e.type === 'mouseover' && drawing == false){return;}
    else{
        e.target.style.backgroundColor = colorvalue;
    }
}




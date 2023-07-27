

const container = document.querySelector('#container');

// All of the following code is to get the grid to draw properly

let mode = false; //Alternate between drawing and hovering mode

for(let i = 0; i < 625; i++) { //Create all of the grid boxes, based on user's desired amount
    let div = document.createElement('div');
    div.style.background = "white";
    div.addEventListener("mousedown", drawMode);
    div.addEventListener("mouseover", makeColor);
    div.addEventListener("mouseout", makeTrans);
    div.addEventListener("mouseup", hoverMode);
    container.appendChild(div);
}

let tiles = document.querySelectorAll('#container > div');

function makeColor(e) { //Set colors of tiles based on mode as well as desired user color
    if(!mode) {
        if (e.target.style.background == "white") {
            e.target.style.cssText = "background: green;";
        }
    }
    else {
        e.target.style.cssText = "background: black;";
    }
}

function makeTrans(e) {
    e.target.style.cssText = "background: white";
}

function drawMode(e) {
    mode = true;
    e.target.style.cssText = "background: black";
    tiles.forEach(changeToDraw);
}

function changeToDraw(div) {
    div.removeEventListener("mouseout", makeTrans);
}

function changeToHover(div) {
    if (div.style.background == "white") {
        div.addEventListener("mouseout", makeTrans);
    }
}

function hoverMode(div) {
    mode = false;
    tiles.forEach(changeToHover);
}

// =========================================================

// Code for slider that determines grid size

let slider = document.querySelector('#myRange');



const container = document.querySelector('#container');

// All of the following code is to get the grid to draw properly

let mode = false; //Alternate between drawing and hovering mode
let value = 25; //Initial grid size
let color = "black";

function updateGrid(value) {

    for(let i = 0; i < value **2; i++) { //Create all of the grid boxes, based on user's desired amount
        let div = document.createElement('div');
        div.style.background = "white";
        div.addEventListener("mousedown", drawMode);
        div.addEventListener("mouseover", makeColor);
        div.addEventListener("mouseout", makeTrans);
        div.addEventListener("mouseup", hoverMode);
        div.style.flexBasis = `${100/value}%`;
        container.appendChild(div);
    }
    let size = document.querySelector(".size");
    size.textContent = `Grid Size: ${value} x ${value}`;
}

updateGrid(value);

let tiles = document.querySelectorAll('#container > div');

function makeColor(e) { //Set colors of tiles based on mode as well as desired user color
    if(!mode) {
        if (e.target.style.background == "white") {
            e.target.style.cssText = "background: green;";
        }
    }
    else {
        colorSelect(e);
        }
    e.target.style.flexBasis = `${100/value}%`;
}

function makeTrans(e) {
    e.target.style.cssText = "background: white";
    e.target.style.flexBasis = `${100/value}%`
}

function drawMode(e) {
    mode = true;
    colorSelect(e);
    e.target.style.flexBasis = `${100/value}%`
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

let i = 0 //Rainbow color counter
let roygbiv = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //Colors for rainbow color pen

let slider = document.querySelector('#myRange');

slider.oninput = function() {
    container.replaceChildren();
    value = this.value;
    updateGrid(value);
    tiles = document.querySelectorAll('#container > div');
}

// =========================================================

// Code for color selector
let form = document.querySelector(".form");
let custom = document.querySelector("#colorpicker");

function updateColor(div) { //Update boxes to desired color choice
    color = document.querySelector('input[name="color"]:checked').value;
    div.removeEventListener("mouseover", makeColor);
    div.addEventListener("mouseover", makeColor);
}

form.addEventListener("change", function() {
    tiles.forEach(updateColor);
})

function colorSelect(e) { //Necessary since shaded and rainbow have unique coloring code
    if (color == "shade") {
        let increase = Number(e.target.style.opacity) + 0.1;
        console.log(increase);
        e.target.style.cssText = `background-color: rgb(0, 0, 0); opacity: ${increase}`; 
    }
    else if (color == "rainbow") {
        if (i >= 7) {
            i = 0;
        }
        e.target.style.cssText = `background: ${roygbiv[i]}`;
        i++;
    }

    else if (color == "custom") {
        e.target.style.cssText = `background: ${custom.value}`;
    }
    else {
        e.target.style.cssText = `background: ${color};`;
    }
}

// =========================================================
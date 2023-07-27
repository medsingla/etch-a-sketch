let mode = false;

const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.style.background = "transparent";
    div.addEventListener("mousedown", drawMode);
    div.addEventListener("mouseover", makeColor);
    div.addEventListener("mouseout", makeTrans);
    div.addEventListener("mouseup", hoverMode);
    container.appendChild(div);
}

let tiles = document.querySelectorAll('#container > div');

function makeColor(e) {
    if(!mode) {
        if (e.target.style.background == "transparent") {
            e.target.style.cssText = "background: green;";
        }
    }
    else {
        e.target.style.cssText = "background: black;";
    }
}

function makeTrans(e) {
    e.target.style.cssText = "background: transparent";
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
    if (div.style.background == "transparent") {
        div.addEventListener("mouseout", makeTrans);
    }
}

function hoverMode(div) {
    mode = false;
    tiles.forEach(changeToHover);
}

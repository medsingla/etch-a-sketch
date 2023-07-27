const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
}

let tiles = document.querySelectorAll('#container > div');

tiles.forEach(changeCell);
tiles.forEach(draw);

function changeCell(div) {
    if(true) {
        div.addEventListener("mouseover", function() {
            div.style.cssText = "background: green;";
        });
        div.addEventListener("mouseout", function remove() {
            div.style.cssText = "background: transparent;";
        });
    }
}

function draw(div) {
    if(true) {
        div.removeEventListener("mousedown", remove);
        div.addEventListener("mousedown", function() {
            div.style.cssText = "background: black;";
        });
    }
}
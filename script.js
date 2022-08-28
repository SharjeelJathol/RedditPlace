let tiles;
let tilesObject = document.querySelector('.tiles');
let selectedTile;
const windowSize = 10;

let updateSelectedTile = i => {
    if (selectedTile != null)
        selectedTile.classList.remove('border');
    selectedTile = tiles[i];
    selectedTile.classList.add('border');
}

let createTiles = () => {
    const totalTiles = Math.pow(windowSize, 2);
    for (let i = 0; i < totalTiles; i++)
        tilesObject.innerHTML += '<button class="tile"></button>'
    //get values from updated tiles
    tiles = document.querySelectorAll('.tile');
    //add event listener to those tiles
    for (let i = 0; i < tiles.length; i++)
        addBorder(i)
}

let addBorder = i => {
    tiles[i].addEventListener('click', () => {
        updateSelectedTile(i);
    })
}

createTiles();


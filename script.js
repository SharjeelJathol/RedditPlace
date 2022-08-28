let tiles;
let tilesObject = document.querySelector('.tiles');
let selectedTile;
let colorSelector = document.querySelector('.optionsRemove');
const windowSize = 10;
let colorInput=document.querySelector('#color');

let updateSelectedTile = tile => {
    if (selectedTile != null){
        selectedTile.classList.remove('border');
        colorSelector.classList.replace('options', 'optionsRemove');
        addBorder(selectedTile)
    }
    
    selectedTile = tile;
    selectedTile.classList.add('border');
    selectedTile.addEventListener('click', () => {
        colorSelector.classList.replace('optionsRemove', 'options');
    })
}

let createTiles = () => {
    const totalTiles = Math.pow(windowSize, 2);
    for (let i = 0; i < totalTiles; i++)
        tilesObject.innerHTML += '<button class="tile"></button>'
    //get values from updated tiles
    tiles = document.querySelectorAll('.tile');
    //add event listener to those tiles
    for (let i = 0; i < tiles.length; i++)
        addBorder(tiles[i])
}

let addBorder = tile => {
    tile.addEventListener('click', () => {
        updateSelectedTile(tile);
    })
}

document.querySelector('.submit').addEventListener('click', ()=>{
    selectedTile.style.backgroundColor=colorInput.value;
})

createTiles();









// let buttons = document.getElementsByClassName('tile')
// let option = document.querySelector(".optionsRemove")
// let select = document.querySelector('.submit')
// select.addEventListener('click', () => {
//     console.log(document.querySelector('#color'))
//     console.log(document.querySelector('#color').getAttribute('value'))

//     // console.log(select)
//     // console.log(select.getAttribute('value'))
// })
// // document.getElementsByClassName('options')
// const buttonsLength = buttons.length
// console.log(option.className)


// select.addEventListener('click', () => {
//     option.classList.replace('options', 'optionsRemove')
// })

// for (let index = 0; index < buttonsLength; index++) {
//     buttons[index].addEventListener('click', (element) => {
//         console.log(option.className)
//         if (option.className === 'options')
//             option.classList.replace('options', 'optionsRemove')
//         else
//             option.classList.replace('optionsRemove', 'options')
//         // console.log(buttons[index].classList)
//         // console.log(element)
//         // console.log(element.srcElement)
//     })
//     // console.log(buttons[index])
// }






// for (const iterator in buttons) {
//     console.log(element)
// }

// buttons.forEach(element => {
//     console.log(element)

// });
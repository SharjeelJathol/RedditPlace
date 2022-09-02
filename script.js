// const socket = io("http://localhost");
const socket = io('http://localhost:3000')

let tiles;
let tilesObject = document.querySelector('.tiles');
let selectedTile;
let colorSelector = document.querySelector('.optionsRemove');
let windowSize;
let colorInput = document.querySelector('#color');

let updateSelectedTile = tile => {
    if (selectedTile != null) {
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

let updateTiles=()=>{
    fetch('http://localhost:3000/api/tiles').then((response) => {
        return response.json()
    }).then(data => {
        data.forEach((color, index) => {
            tiles[index].style.backgroundColor = color;
        });
    }) 
}

let createTiles = () => {
    const totalTiles = Math.pow(windowSize, 2);
    for (let i = 0; i < totalTiles; i++)
        tilesObject.innerHTML += `<button class="tile" id="${i}"></button>`
    //get values from updated tiles
    tiles = document.querySelectorAll('.tile');
    updateTiles();
    //add event listener to those tiles
    for (let i = 0; i < tiles.length; i++)
        addBorder(tiles[i])
}

let addBorder = tile => {
    tile.addEventListener('click', () => {
        updateSelectedTile(tile);
    })
}

document.querySelector('.submit').addEventListener('click', () => {
    socket.emit('update', {
        id: selectedTile.attributes.id.value,
        color: colorInput.value
    });
})

socket.on('change', obj => {
    tiles[obj.id].style.backgroundColor = obj.color;
})

socket.on('updateTiles', updateTiles);

fetch('http://localhost:3000/api/windowSize').then((response) => {
    return response.json();
}).then(data => {
    windowSize = data.windowSize;
    createTiles();
})











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
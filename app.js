const playerName = document.querySelector("#player-turn");
const tiles = document.querySelectorAll(".tile");
const tile = Array.from(tiles);
const winner = document.querySelector('.hide');
const resetBtn = document.querySelector('#reset');

let prevPlayer = 'X'

let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 2],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin() {
    winCombinations.forEach(function(combination) {
        let check = combination.every(items => tile[items].innerText == prevPlayer);
        if (check == true){
            alert(prevPlayer + " has Won!");
            document.querySelector('.gameArea > h2').innerHTML = prevPlayer + " has Won!";
        }
  
    })
}

tile.forEach((tile) => {
    tile.addEventListener('click', function() {
        if (tile.innerHTML != "") return
        tile.innerHTML = prevPlayer;
        checkWin();
        prevPlayer = prevPlayer == 'X' ? 'O' : 'X';
        playerName.innerHTML = prevPlayer;
    })
})

resetBtn.addEventListener('click', () => {
    location.reload();
})
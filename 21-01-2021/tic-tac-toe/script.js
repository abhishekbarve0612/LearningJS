/*----- constants -----*/


/*----- app's state (variables) -----*/


let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];


/*----- cached element references -----*/

const statusDisplay = document.querySelector('.game-status');



/*----- event listeners -----*/

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);

/*----- functions -----*/

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick(e) {
    var cellClicked = e.target;
    var cellIndex = parseInt(cellClicked.getAttribute('data-cell-index'));
    if (gameState[cellIndex] !== "" || !gameActive) return;
    handleCellPlayed(cellClicked, cellIndex);
    handleResultValidation();

}
function handleRestartGame() {

}
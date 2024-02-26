let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
	cell.addEventListener("click", handleCellClick);
});

function handleCellClick(e) {
	let cell = e.target;
	if (cell.textContent === "") {
		cell.textContent = currentPlayer;
		checkForWinner();
		switchPlayer();
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
	let row1 = cells[0].textContent + cells[1].textContent + cells[2].textContent;
	let row2 = cells[3].textContent + cells[4].textContent + cells[5].textContent;
	let row3 = cells[6].textContent + cells[7].textContent + cells[8].textContent;
	let col1 = cells[0].textContent + cells[3].textContent + cells[6].textContent;
	let col2 = cells[1].textContent + cells[4].textContent + cells[7].textContent;
	let col3 = cells[2].textContent + cells[5].textContent + cells[8].textContent;
	let diag1 = cells[0].textContent + cells[4].textContent + cells[8].textContent;
	let diag2 = cells[2].textContent + cells[4].textContent + cells[6].textContent;

	let lines = [row1, row2, row3, col1, col2, col3, diag1, diag2];
	
	for (let line of lines) {
		if (line === "XXX" || line === "OOO") {
			alert(currentPlayer + " wins!");
			resetGame();
			return;
		}
	}

	let isDraw = true;
	for (let cell of cells) {
		if (cell.textContent === "") {
			isDraw = false;
			break;
		}
	}

	if (isDraw) {
		alert("It's a draw!");
		resetGame();
	}
}

function resetGame() {
  cells.forEach((cell) => {
      cell.textContent = "";
  });
  currentPlayer = "X";
}


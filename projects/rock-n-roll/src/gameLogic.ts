

export const evaluateGame = (gameBoard: number[], player: number, playSquare: number) => {
    const boardSize = Math.sqrt(gameBoard.length);
    const replaceChar = (pattern: string, withChar: number, index: number) => `${pattern.substr(0, index)}${withChar}${pattern.substr(index + 1)}`;
    let isCats = false;
    let isWinner = false;

    gameBoard[playSquare] = player;
    let pattern = () => Array(gameBoard.length + 1).join('.');
    let winPatterns = [];
    for (let index = 0; index < boardSize; index++) {

        // evaluate lines
        let rowWinPattern = pattern();
        let colWinPattern = pattern();
        for (let square = 0; square < boardSize; square++) {
            const rowReplacer = square + boardSize * index;
            rowWinPattern = replaceChar(rowWinPattern, player, rowReplacer);
            const colReplacer = (square * boardSize) + index;
            colWinPattern = replaceChar(colWinPattern, player, colReplacer);
        }

        winPatterns.push(rowWinPattern);
        winPatterns.push(colWinPattern);
    }

    // evaluate diags
    let leftDiag = pattern();
    let rightDiag = pattern();
    for (let index = 0; index < boardSize; index++) {
        leftDiag = replaceChar(leftDiag, player, index * boardSize + index);
        rightDiag = replaceChar(rightDiag, player, (index * boardSize) + (boardSize - index - 1));
    }
    winPatterns.push(leftDiag);
    winPatterns.push(rightDiag);

    for (const win of winPatterns) {
        if (gameBoard.join('').match(new RegExp(win, 'g'))) {
            isWinner = true;
            break;
        }
    }

    if (gameBoard.filter(square => square === 0).length === 0) {
        isCats = true;
    }

    return { gameBoard, isWinner, isCats };

}
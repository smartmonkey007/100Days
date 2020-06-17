const winPatterns = [
    'www......', 'w..w..w..',
    'w...w...w', '..w.w.w..',
    '...www...', '......www',
    '.w..w..w.', '..w..w..w'
];

// returns player if win, -1 if cats, or 0 if no winner;
export function evaluateGame(gameBoard, player) {
    const boardString = gameBoard.join('').replace(new RegExp(`${ player }`, 'g'), 'w');

    if (winPatterns
        .some(win => boardString.match(win))) {
        return player;
    }

    if (gameBoard.filter(b => b === 0).length === 0) {
        return -1;
    }

    return 0;
}
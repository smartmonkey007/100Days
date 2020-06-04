export enum GameStates {
    'NEW',
    'INPROGRESS',
    'END'
}

export class GameResult {
    player = 0;
    gameState = GameStates.NEW;
    isWin = false;
    isCats = false;
    board = [];
    playerNames = ['', '🐱', '🐶', '🐉', '🐭'];

    constructor(public maxPlayers = 2, boardSize = 9) {
        this.player = Math.floor(Math.random() * maxPlayers) + 1;
        this.board = Array(boardSize).fill(0);
        this.playerNames = ['', '🐱', '🐶', '🐉', '🐭'];
    }
}

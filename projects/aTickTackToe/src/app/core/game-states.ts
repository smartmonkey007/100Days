export enum GameStates {
    'NEW',
    'INPROGRESS',
    'END'
}

export class GameResult {
    gameState = GameStates.NEW;
    isWin = false;
    isCats = false;
    board = [];

    constructor(public player: number = 0, boardSize = 9) {
        this.board = Array(boardSize).fill(0);
    }
}

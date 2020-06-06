
export class GameResult {
    player = 0;
    gameState = 'new';
    isWin = false;
    isCats = false;
    board: number[] = [];
    playerNames = ['', '🐉', '🐭'];

    constructor(public maxPlayers = 2, boardSize = 9) {
        this.player = Math.floor(Math.random() * maxPlayers) + 1;
        this.board = Array(boardSize).fill(0);
        this.playerNames = ['', '🐉', '🐭'];
    }
}

export type GameStates = 'new' | 'inProgress' | 'end';

export const gameTextConversion = (token: number) => {
    return ['', '🐉', '🐭'][token];
}


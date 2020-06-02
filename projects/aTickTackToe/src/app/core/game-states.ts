export enum GameStates {
    'NEW',
    'INPROGRESS',
    'END'
}

export interface GameResult {
    gameState: GameStates;
    winner: number;
    isCats: boolean;
}
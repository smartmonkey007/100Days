
export class GameResult {
    player = 0;
    gameState: GameStates = 'new';
    isWin = false;
    isCats = false;
    board: number[] = [];
    playerNames = ['', '🐰', '🐭'];
    message = 'of Mice and Bunnies';

    constructor(public maxPlayers = 2, boardSize = 9) {
        this.player = Math.floor(Math.random() * maxPlayers) + 1;
        this.board = Array(boardSize).fill(0);
    }
}

const catsMessages = ['The fur is flying! ⚔🐰🌪🐭🌪⚔'];
const bunnyMessages = ['Bunnies build a better mousetrap! 🐰⚔'];
const miceMessages = ['RemY is serving Bunny Stew for dinner! 🐭⚔'];


export type GameStates = 'new' | 'inProgress' | 'end';

export const gameTextConversion = (token: number) => {
    return ['', '🐰', '🐭'][token];
}

export const newGame = (gameState: GameResult) => {
    return { ...gameState, ... { board: gameState.board.fill(0), isCats: false, isWin: false, message: '', gameState: 'inProgress' } };
}

export class GameLogic {

    private static winPatterns = [
        'www......', 'w..w..w..',
        'w...w...w', '..w.w.w..',
        '...www...', '......www',
        '.w..w..w.', '..w..w..w'
    ];

    static playSquare(gameState: GameResult, square: number) {
        let state = {
            board: [...gameState.board],
            player: gameState.player,
            maxPlayers: gameState.maxPlayers,
            gameState: gameState.gameState as GameStates,
            isCats: gameState.isCats,
            isWin: gameState.isWin,
            message: '',
        };

        if (square <= state.board.length && state.player <= state.maxPlayers && state.board[square] === 0) {
            state.board[square] = state.player;
            const result = GameLogic.evaluateGame({ board: state.board, player: state.player });
            if (result > 0) {
                state.gameState = 'end';
                state.isWin = true;
                if (state.player === 1) {
                    state.message = bunnyMessages[0];
                } else if (state.player === 2) {
                    state.message = miceMessages[0];
                }

            } else if (result === -1) {
                state.gameState = 'end';
                state.player = 0;
                state.isCats = true;
                state.message = catsMessages[0];
            } else {
                state.player = state.player === state.maxPlayers ? 1 : ++state.player;
            }
        } else {
            console.error('invalid move', square <= state.board.length && state.player <= state.maxPlayers && state.board[square] === 0);
        }

        return state;
    }

    static nextPlayer(gameState: GameResult, players: number) {
        const currentPlayer = gameState.player;
        return currentPlayer < players ? currentPlayer + 1 : 1;
    }

    static evaluateGame({ board, player }: { board: number[]; player: number; }): number {
        const boardString = board.join('').replace(new RegExp(`${player}`, 'g'), 'w');

        if (this.winPatterns
            .some(win => boardString.match(win))) {
            return player;
        }

        if (board.filter(b => b === 0).length === 0) {
            return -1;
        }

        return 0;
    }

    getPlayerText(playerNames: [], player: number) {
        return playerNames[player] || '';
    }

}

